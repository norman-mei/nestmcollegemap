import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const STORAGE_PATH = path.join(process.cwd(), 'storage', 'ig-state.ujson');

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  console.log('Opening Instagram login...');
  await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle' });
  console.log('Log in within the browser window, then return here and press Enter to save the session.');

  process.stdin.setEncoding('utf8');
  process.stdin.resume();
  process.stdin.on('data', async () => {
    await context.storageState({ path: STORAGE_PATH });
    console.log(`Session saved to ${STORAGE_PATH}`);
    await browser.close();
    process.exit(0);
  });
}

main().catch(async (err) => {
  console.error('Login helper failed:', err);
  process.exit(1);
});
