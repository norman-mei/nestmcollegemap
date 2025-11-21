'use client';

import React, { useEffect, useState } from 'react';
import { updateLog as fallbackReleases } from '@/data/updateLog';

type Release = { version: string; date: string; notes: string[] };

const faqEntries = [
  {
    q: 'I have questions, concerns, and comments about the project.',
    a: 'For any questions, concerns and comments, please message me on Instagram: @normanmei_',
  },
  {
    q: 'How is the data collected?',
    a: 'Data is pulled / sourced all done manually from publicly available Instagram posts (e.g., "college decisions" accounts for NEST+m graduating classes) and voluntarily submitted information. All data aims to be respectful of privacy and focuses on publicly shared commitments.',
  },
  {
    q: 'How often is the data updated?',
    a: 'During decision season I refresh the dataset roughly once a week; outside that window, I batch updates every few weeks or when new info is submitted.',
  },
  {
    q: 'What is the next thing you are going to add?',
    a: 'Next up: shareable filter presets (so you can link friends directly to a view) and a compact “year-over-year” trends tab that compares classes.',
  },
  {
    q: 'How long did this project take? What was the inspiration?',
    a: "I started this project in late May 2025 for my APCSP final project just for fun. Putting in all the data manually probably took a combined total of 60 hours or more.",
  },
  {
    q: 'Is my personal information shared publicly?',
    a: 'Only your first and last name, graduating class, the school you commmited to, Instagram profile, LinkedIn profile, and college choice are displayed. No other personal details (e.g., home address, email) are collected or shown, to respect privacy.',
  },
  {
    q: 'Have you considered using the Instagram API?',
    a: `Yes, I thought of this at first to completely futureproof my project for future graduating classes but as I did a little more research, I found out that I simply can't do it because I need a solution that works for accounts I don’t own and maintains minimal ongoing effort, the official Instagram APIs simply won’t do.

Basic Display API is gone: Meta deprecated it on December 4, 2024, so any calls now just error out.
Graph API requires ownership & verification: I’d have to convert the school’s accounts to Business/Creator, pass App Review, and complete Business Verification—none of which I control.
oEmbed only returns embed HTML: I can’t pull separate JSON fields for photos, bios, or profile pics—just a blockquote snippet.
Scraping is brittle (& against IG ToS): While it’s technically possible, it can break whenever the site changes (too much work to fix over time if it keeps breaking) and not to mention it violates Instagram’s Terms of Service, and risks bans.

Bottom line: Without owning and verifying the accounts, there’s no official API route to auto-fetch seniors’ photos or bios, so I that's why I don't use any API of sort, everything is done manually.`,
  },
  {
    q: 'How are "Major Areas" determined?',
    a: 'Specific majors are mapped to broader "Major Areas" using a combination of a JS file and keyword-based logic in the main script. This helps in summarizing trends. Combined majors (e.g., "CS & Econ") may be split or categorized based on their components.',
  },
  {
    q: "Why can't I see a specific senior's photo?",
    a: 'Photos are linked based on filenames derived from senior names and graduating years. If a photo is missing, it might be because it wasn\'t available or a naming convention mismatch. The system attempts fallbacks (PNG, college logo) if the primary JPG is not found.',
  },
  {
    q: 'How do the filters work?',
    a: 'You can filter by graduating class, state/country of the college, location focus (NYC, NY State, Out of State, International), and major area. Filters are generally additive (AND logic). The lists and map will update to show only seniors matching all active filter criteria. "Clear All Filters" resets everything.',
  },
  {
    q: 'What do the different colors for map markers mean?',
    a: 'Map marker colors correspond to the graduating class of the senior, using the same color scheme as in the "Filter by Graduating Class" section.',
  },
  {
    q: 'What is "Gallery View"?',
    a: 'Gallery View changes the student list into a card-based layout, often showing senior photos or college logos more prominently. It\'s an alternative way to browse the data.',
  },
  {
    q: 'How can I use the list navigation with keyboard?',
    a: 'When the list has focus (and you\'re not typing in the search bar), use the Up and Down arrow keys to navigate between seniors. If a senior\'s photo is zoomed in, use Left and Right arrow keys to navigate to the previous/next senior\'s photo. Press Escape to close popups or zoomed photos.',
  },
];

function ModalShell({
  title,
  open,
  onClose,
  children,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-[13000] bg-black/60" onClick={onClose} />
      <div className="fixed z-[13001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] max-h-[80vh] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-700">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} className="text-lg px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-800">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 text-sm">{children}</div>
      </div>
    </>
  );
}

export default function InfoModals() {
  const [showUpdateLog, setShowUpdateLog] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [releases, setReleases] = useState<Release[]>(fallbackReleases);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const openLog = () => setShowUpdateLog(true);
    const openFaq = () => setShowFaq(true);
    window.addEventListener('open-update-log', openLog as EventListener);
    window.addEventListener('open-faq', openFaq as EventListener);
    return () => {
      window.removeEventListener('open-update-log', openLog as EventListener);
      window.removeEventListener('open-faq', openFaq as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!showUpdateLog) return;
    if (releases !== fallbackReleases && releases.length > 0) return;

    const fetchReleases = async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      try {
        setLoading(true);
        setError(null);
        const resp = await fetch('https://api.github.com/repos/norman-mei/nestmcollegemap/releases?per_page=10', {
          signal: controller.signal,
        });
        if (!resp.ok) throw new Error(`GitHub responded ${resp.status}`);
        const json = await resp.json();
        const mapped: Release[] = (json || []).map((r: any) => ({
          version: r.name || r.tag_name || 'Untitled',
          date: r.published_at ? new Date(r.published_at).toISOString().slice(0, 10) : 'Unknown',
          notes:
            r.body
              ?.split('\n')
              .map((l: string) => l.trim().replace(/^[-*]\s*/, ''))
              .filter((l: string) => l.length > 0) || ['No notes provided.'],
        }));
        if (mapped.length > 0) {
          setReleases(mapped);
        } else {
          setReleases([]);
        }
      } catch (e: any) {
        setError('Could not load update log from GitHub.');
        setReleases([]);
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    };

    fetchReleases();
  }, [showUpdateLog, releases]);

  return (
    <>
      <ModalShell title="Update Log / Releases" open={showUpdateLog} onClose={() => setShowUpdateLog(false)}>
        <div className="space-y-4">
          {loading && <div className="text-xs text-gray-500">Loading latest releases from GitHub…</div>}
          {error && <div className="text-xs text-red-500">{error}</div>}
          {releases.length === 0 && !loading ? (
            <div className="text-sm text-gray-600 dark:text-gray-300">No updates found.</div>
          ) : (
            releases.map((r) => (
              <div key={`${r.version}-${r.date}`} className="border-b border-gray-200 dark:border-neutral-800 pb-3 last:border-none">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <h4 className="font-semibold">{r.version}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{r.date}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1">
                  {r.notes.map((n, idx) => (
                    <li key={idx}>{n}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </ModalShell>

      <ModalShell title="FAQ" open={showFaq} onClose={() => setShowFaq(false)}>
        <div className="space-y-3">
          {faqEntries.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 dark:border-neutral-800 pb-3 last:border-none">
              <div className="font-semibold mb-1">{item.q}</div>
              <div className="text-gray-700 dark:text-gray-300">{item.a}</div>
            </div>
          ))}
        </div>
      </ModalShell>
    </>
  );
}
