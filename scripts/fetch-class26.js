import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import sharp from 'sharp';
import { createWorker } from 'tesseract.js';

const IG_HANDLE = 'nestm.decisions2026';
const STORAGE_STATE = path.join(process.cwd(), 'storage', 'ig-state.ujson');
const GENERATED_PATH = path.join(process.cwd(), 'src', 'data', 'class26.generated.json');
const RAW_PATH = path.join(process.cwd(), 'src', 'data', 'students.json');
const PUBLIC_DIR = path.join(process.cwd(), 'public', '26');
const REVIEW_CSV = path.join(process.cwd(), 'storage', 'class26.review.csv');

const MIN_DATE_ISO = process.env.MIN_DATE || '2026-01-16';
const parsedMinDate = Date.parse(`${MIN_DATE_ISO}T00:00:00Z`);
if (Number.isNaN(parsedMinDate)) {
  throw new Error(`Invalid MIN_DATE: ${MIN_DATE_ISO}`);
}
const MIN_TIMESTAMP_SEC = Math.floor(parsedMinDate / 1000);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readJson(file, fallback = []) {
  if (!fs.existsSync(file)) return fallback;
  const raw = fs.readFileSync(file, 'utf8');
  return raw.trim() ? JSON.parse(raw) : fallback;
}

function normalizeForFilename(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[èé]/g, 'e')
    .replace(/\s+/g, '_')
    .replace(/[()']/g, '');
}

function buildFirstNameCounts(entries) {
  const counts = new Map();
  for (const entry of entries) {
    const gradClass = `'${(entry.classYear || '').toString().trim()}`;
    const first = (entry.name || '').trim().split(/\s+/)[0] || '';
    const normFirst = normalizeForFilename(first);
    if (!counts.has(gradClass)) counts.set(gradClass, new Map());
    const classCounts = counts.get(gradClass);
    classCounts.set(normFirst, (classCounts.get(normFirst) || 0) + 1);
  }
  return counts;
}

function getPhotoFilename(entry, counts) {
  const gradClass = `'${(entry.classYear || '').toString().trim()}`;
  const first = (entry.name || '').trim().split(/\s+/)[0] || '';
  const normFirst = normalizeForFilename(first);
  const classCounts = counts.get(gradClass) || new Map();
  if ((classCounts.get(normFirst) || 0) > 1) {
    return normalizeForFilename((entry.name || '').trim());
  }
  return normFirst;
}

function extractFromOcr(text) {
  const lines = text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  let name = null;
  let college = null;
  let major = null;

  for (const line of lines) {
    const words = line.split(/\s+/);
    if (!name && words.length >= 2 && words.length <= 4 && /^[A-Z]/.test(words[0] || '') && /^[A-Z]/.test(words[1] || '')) {
      name = line;
      continue;
    }
  }

  for (const line of lines) {
    if (!college && /(university|college|institute|academy|polytechnic|school)/i.test(line)) {
      college = line;
    }
    if (
      !major &&
      /(science|engineering|studies|math|physics|chemistry|biology|neuroscience|business|finance|design|art|computer|cs|pre-)/i.test(
        line
      )
    ) {
      major = line;
    }
  }

  return { name, college, major, lines };
}

async function fetchPosts(context) {
  const request = context.request;
  const apiUrl = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${IG_HANDLE}`;
  const resp = await request.get(apiUrl, {
    headers: {
      'X-IG-App-ID': '936619743392459',
    },
  });
  if (!resp.ok()) {
    throw new Error(`Instagram profile fetch failed with status ${resp.status()}`);
  }
  const json = await resp.json();
  const edges = json?.data?.user?.edge_owner_to_timeline_media?.edges || [];
  return edges.map((e) => e.node);
}

async function downloadImage(context, url) {
  const resp = await context.request.get(url);
  if (!resp.ok()) throw new Error(`Image download failed with status ${resp.status()}`);
  return Buffer.from(await resp.body());
}

async function main() {
  if (!fs.existsSync(STORAGE_STATE)) {
    console.error(`Missing Instagram session at ${STORAGE_STATE}. Run "npm run login:ig" first.`);
    process.exit(1);
  }

  ensureDir(PUBLIC_DIR);

  const baseStudents = readJson(RAW_PATH);
  const existingGenerated = readJson(GENERATED_PATH);
  const existingShortcodes = new Set(existingGenerated.map((e) => e.sourceShortcode).filter(Boolean));

  const worker = await createWorker();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: STORAGE_STATE });

  try {
    const nodes = await fetchPosts(context);
    const freshNodes = nodes.filter((node) => node.taken_at_timestamp >= MIN_TIMESTAMP_SEC);
    const newNodes = freshNodes.filter((node) => !existingShortcodes.has(node.shortcode));

    if (!newNodes.length) {
      console.log('No new posts to ingest.');
      await browser.close();
      await worker.terminate();
      return;
    }

    console.log(`Found ${newNodes.length} new post(s) on/after 2026-01-16.`);
    const newEntries = [];
    const reviewRows = [['shortcode', 'name', 'major', 'college', 'ocr_confidence', 'caption']]; // CSV header

    for (const node of newNodes) {
      const captionEdges = node?.edge_media_to_caption?.edges || [];
      const caption = (captionEdges[0]?.node?.text || '').trim();
      const handleMatch = caption.match(/@([A-Za-z0-9._]+)/);
      const instagramUrl = handleMatch ? `https://www.instagram.com/${handleMatch[1]}/` : '';

      const imageBuffer = await downloadImage(context, node.display_url);
      const prepped = await sharp(imageBuffer).resize({ width: 1400, withoutEnlargement: true }).png().toBuffer();
      const ocrResult = await worker.recognize(prepped);
      const ocrConfidence = ocrResult?.data?.confidence || 0;
      const { name, college, major, lines } = extractFromOcr(ocrResult?.data?.text || '');

      newEntries.push({
        name: name || `Unknown ${node.shortcode}`,
        classYear: '26',
        college: college || 'Generic College',
        major: major || 'Undecided Major',
        linkedin: '',
        instagram: instagramUrl,
        congratsCaption: caption,
        sourceShortcode: node.shortcode,
        sourceTakenAt: new Date(node.taken_at_timestamp * 1000).toISOString(),
        ocrConfidence,
        ocrText: lines || [],
      });

      reviewRows.push([
        node.shortcode,
        JSON.stringify(name || ''),
        JSON.stringify(major || ''),
        JSON.stringify(college || ''),
        ocrConfidence.toFixed(1),
        JSON.stringify(caption || ''),
      ]);
    }

    const combinedForCounts = [...baseStudents, ...existingGenerated, ...newEntries];
    const counts = buildFirstNameCounts(combinedForCounts);

    for (const entry of newEntries) {
      const filename = getPhotoFilename(entry, counts);
      const imagePath = path.join(PUBLIC_DIR, `${filename}.jpg`);
      const rawImageBuffer = await downloadImage(context, `https://www.instagram.com/p/${entry.sourceShortcode}/media/?size=l`);
      await sharp(rawImageBuffer).jpeg({ quality: 90 }).toFile(imagePath);
      entry.photoFilename = `${filename}.jpg`;
    }

    fs.writeFileSync(GENERATED_PATH, JSON.stringify([...existingGenerated, ...newEntries], null, 2));
    fs.writeFileSync(REVIEW_CSV, reviewRows.map((row) => row.join(',')).join('\n'));

    console.log(`Added ${newEntries.length} entry(ies). Photos saved to public/26/. Review file at storage/class26.review.csv`);
  } finally {
    await browser.close();
    await worker.terminate();
  }
}

main().catch((err) => {
  console.error('Fetch failed:', err);
  process.exit(1);
});
