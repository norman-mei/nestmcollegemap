'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

type Step = {
  selector: string;
  headline: string;
  title: string;
  text: string;
};

type Position = {
  top: number;
  left: number;
  width: number;
  height: number;
};

function getScrollableAncestors(element: HTMLElement | null) {
  if (!element || typeof window === 'undefined') return [];
  const ancestors: HTMLElement[] = [];
  let parent = element.parentElement;
  const scrollRegex = /(auto|scroll)/;
  while (parent && parent !== document.body) {
    const style = window.getComputedStyle(parent);
    if (scrollRegex.test(style.overflowY) || scrollRegex.test(style.overflowX) || scrollRegex.test(style.overflow)) {
      ancestors.push(parent);
    }
    parent = parent.parentElement;
  }
  return ancestors;
}

function getHighlightPosition(selector: string, padding = 12): Position | null {
  if (typeof document === 'undefined') return null;
  const el = document.querySelector(selector) as HTMLElement | null;
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top - padding,
    left: rect.left - padding,
    width: rect.width + padding * 2,
    height: rect.height + padding * 2,
  };
}

function getDescriptionPosition(highlight: Position | null, boxWidth = 320) {
  const viewportWidth = typeof window === 'undefined' ? 0 : window.innerWidth;
  const viewportHeight = typeof window === 'undefined' ? 0 : window.innerHeight;
  const clampLeft = (val: number) => {
    if (!viewportWidth) return 24;
    return Math.min(Math.max(val, 16), viewportWidth - boxWidth - 16);
  };
  if (!highlight || !viewportWidth || !viewportHeight) {
    return {
      top: 80,
      left: clampLeft(24),
      arrow: 'top' as const,
    };
  }
  const margin = 16;
  const spaceBelow = viewportHeight - (highlight.top + highlight.height) - margin;
  const spaceAbove = highlight.top - margin;

  if (spaceBelow >= 180 || spaceBelow >= spaceAbove) {
    return {
      top: Math.min(highlight.top + highlight.height + margin, viewportHeight - 200),
      left: clampLeft(highlight.left + highlight.width / 2 - boxWidth / 2),
      arrow: 'top' as const,
    };
  }
  return {
    top: Math.max(highlight.top - margin - 160, 12),
    left: clampLeft(highlight.left + highlight.width / 2 - boxWidth / 2),
    arrow: 'bottom' as const,
  };
}

function scrollStepIntoView(selector: string) {
  if (typeof document === 'undefined') return;
  const target = document.querySelector(selector) as HTMLElement | null;
  if (!target) return;

  const parents = getScrollableAncestors(target);
  if (parents.length === 0) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    return;
  }

  parents.forEach((parent) => {
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const nextTop = targetRect.top - parentRect.top - parent.clientHeight / 2 + targetRect.height / 2;
    const nextLeft = targetRect.left - parentRect.left - parent.clientWidth / 2 + targetRect.width / 2;
    parent.scrollTo({
      top: parent.scrollTop + nextTop,
      left: parent.scrollLeft + nextLeft,
      behavior: 'smooth',
    });
  });

  requestAnimationFrame(() => {
    const rect = target.getBoundingClientRect();
    if (rect.top < 80 || rect.bottom > (window.innerHeight || 0) - 80) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  });
}

export default function TutorialTour({ onClose }: { onClose?: () => void }) {
  const steps: Step[] = useMemo(
    () => [
      { selector: 'body', headline: 'Welcome!', title: 'Tour intro', text: 'Welcome! This quick tutorial will guide you through the main features of the NEST+m Senior College Destinations Map.' },
      { selector: '#sidebar-header', headline: 'App Header', title: 'Navigation anchor', text: 'This purple banner anchors the app title plus the Tutorial button—come back here anytime for a refresher.' },
      { selector: '#map-controls-bar', headline: 'Map Controls', title: 'Command strip', text: 'All quick map tools live here so you can toggle themes, overlays, and focus options in one sweep.' },
      { selector: '#darkModeToggle', headline: 'Theme Toggle', title: 'Light & dark', text: 'Swap the entire experience between bright daytime mode and relaxed night mode.' },
      { selector: '.gm-style-mtc', headline: 'Map Type', title: 'Map vs satellite', text: 'Use the built-in Google control (top-left) to flip between map and high-resolution satellite imagery.' },
      { selector: '#locateMeBtn', headline: 'Locate Me', title: 'Center on you', text: 'Drop a marker right where you are standing and zoom the map there automatically.' },
      { selector: '#toggleTransitBtn', headline: 'Transit Layer', title: 'Routes overlay', text: 'Overlay subway and rail routes to compare real-world commutes to each college.' },
      { selector: '#zoomToNestmBtn', headline: 'Home Focus', title: 'Zoom to NEST+m', text: 'Snap back to home base whenever you want to re-orient on the school campus.' },
      { selector: '#toggleNestmBtn', headline: 'Campus Marker', title: 'Show/hide NEST+m', text: 'Temporarily hide the purple campus pin to declutter wide map views.' },
      { selector: '#zoomToVisibleBtn', headline: 'Reset View', title: 'Fit visible', text: 'Fit every currently visible college onto the screen—perfect after lots of panning.' },
      { selector: '#showUpdateLogBtn', headline: 'Update Log', title: 'What changed', text: 'See the latest data drops and feature tweaks pulled straight from the project changelog.' },
      { selector: '#showFaqBtn', headline: 'FAQ & Tips', title: 'Quick answers', text: 'Open the FAQ drawer for quick answers to common “How do I…?” questions.' },
      { selector: '#clearAllFiltersBtn', headline: 'Clear Filters', title: 'Start fresh', text: 'Reset every filter, search, and visibility toggle so you can start fresh.' },
      { selector: '#filter-panel-section', headline: 'Filters', title: 'Console', text: 'This stack of accordions controls classes, majors, and regions—the rest of the dashboard listens.' },
      { selector: '#grad-class-filter', headline: 'Classes', title: 'Graduate years', text: 'Turn individual classes on/off or use the color-coded Instagram shortcuts to auto-filter and open their page.' },
      { selector: '#class-instagram-links', headline: 'Class Instagrams', title: 'Decision pages', text: 'Each chip opens the class decision page in a new tab and filters the map to that class.' },
      { selector: '#major-area-filter', headline: 'Majors', title: 'Areas of study', text: 'Filter by broad areas of study using quick select/clear buttons plus live student counts.' },
      { selector: '#region-filter', headline: 'Regions', title: 'Location filters', text: 'Dial in NYC, the rest of NY, out-of-state, or international destinations—including state-by-state toggles.' },
      { selector: '#statistics-section', headline: 'Stats', title: 'Attendance mix', text: 'Regional totals, public/private mix, and top colleges summarize whatever filters are active.' },
      { selector: '#trend-section', headline: 'Trends', title: 'Line charts', text: 'Line charts track majors, location focus, and most popular colleges across graduating classes.' },
      { selector: '#student-list-toolbar', headline: 'Search & Sort', title: 'List tools', text: 'Use the omnibox, view chooser, sorting menus, and gallery toggle to reshape the list instantly.' },
      { selector: '#student-search-input', headline: 'Search', title: 'Omnibox', text: 'Type any student, college, or major keyword and the list + map react immediately.' },
      { selector: '#student-list-scroll', headline: 'Student List', title: 'List & gallery', text: 'Hover to preview photos, click for the popup, collapse by class, or switch to a gallery grid.' },
      { selector: '#map-area', headline: 'Interactive Map', title: 'Linked to filters', text: 'Pan, zoom, and click markers. Everything stays linked to the filters and list on the left.' },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [highlight, setHighlight] = useState<Position | null>(null);
  const [hasCompleted, setHasCompleted] = useState(false);

  const openTutorial = () => {
    setIsOpen(true);
    setCurrent(0);
  };

  const closeTutorial = useCallback(() => {
    setIsOpen(false);
    if (onClose) onClose();
  }, [onClose]);

  const markCompleted = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('tutorial-completed', 'true');
    }
    setHasCompleted(true);
  }, []);

  const goPrev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const goNext = useCallback(() => {
    setCurrent((c) => {
      if (c >= steps.length - 1) {
        markCompleted();
        closeTutorial();
        return c;
      }
      return Math.min(steps.length - 1, c + 1);
    });
  }, [closeTutorial, markCompleted, steps.length]);

  useEffect(() => {
    if (!isOpen) return;
    const selector = steps[current]?.selector;
    if (!selector) return;
    if (current === 0) {
      setHighlight(null);
      return;
    }

    const target = document.querySelector(selector) as HTMLElement | null;
    const scrollParents = getScrollableAncestors(target);
    let raf = requestAnimationFrame(() => setHighlight(getHighlightPosition(selector)));

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setHighlight(getHighlightPosition(selector)));
    };

    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });
    scrollParents.forEach((node) => node.addEventListener('scroll', update, { passive: true }));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
      scrollParents.forEach((node) => node.removeEventListener('scroll', update));
    };
  }, [current, isOpen, steps]);

  useEffect(() => {
    if (!isOpen || current === 0) return;
    const selector = steps[current]?.selector;
    if (!selector) return;
    const raf = requestAnimationFrame(() => scrollStepIntoView(selector));
    return () => cancelAnimationFrame(raf);
  }, [current, isOpen, steps]);

  // Arrow key navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, goNext, goPrev]);

  // Initialize completion state and auto-open if not completed
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const done = window.localStorage.getItem('tutorial-completed') === 'true';
    setHasCompleted(done);
    if (!done) {
      setIsOpen(true);
      setCurrent(0);
    }
  }, []);

  const handleRestart = () => {
    setCurrent(0);
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <button
        className="ml-2 px-3 py-1 text-sm rounded border border-white/40 bg-white/20 text-white hover:bg-white/30 transition-colors"
        onClick={openTutorial}
        type="button"
      >
        ❓ Tutorial
      </button>
    );
  }

  const step = steps[current];
  const descPos =
    current === 0
      ? (() => {
          const vw = typeof window !== 'undefined' ? window.innerWidth : 0;
          const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
          return {
            top: Math.max((vh ? vh / 2 : 200) - 120, 40),
            left: Math.max((vw ? vw / 2 : 200) - 160, 24),
          };
        })()
      : getDescriptionPosition(highlight);

  return (
    <>
      <div
        className={`fixed inset-0 z-[12000] ${current === 0 ? 'bg-black/70' : ''}`}
        onClick={() => hasCompleted && closeTutorial()}
      />
      {highlight && (
        <div
          className="fixed z-[12001] pointer-events-none transition-all duration-200 ease-out"
          style={{
            top: highlight.top,
            left: highlight.left,
            width: highlight.width,
            height: highlight.height,
            borderRadius: '14px',
            boxShadow: '0 0 0 9999px rgba(0,0,0,0.72)',
            border: '2px solid rgba(59,130,246,0.95)',
            background: 'rgba(59,130,246,0.12)',
          }}
        />
      )}
      <div
        className="fixed z-[12002] w-[min(340px,90vw)] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xl p-4 text-sm"
        style={{ top: descPos.top, left: descPos.left }}
      >
        {step?.title && <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">{step.title}</div>}
        <div className="text-lg mb-1 text-gray-900 dark:text-gray-100">{step?.headline}</div>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed font-normal">{step?.text}</p>
        <div className="flex items-center justify-between text-xs gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={goPrev}
              disabled={current === 0}
              type="button"
            >
              Prev
            </button>
            <button
              className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                if (current === steps.length - 1) {
                  markCompleted();
                  closeTutorial();
                } else {
                  goNext();
                }
              }}
              type="button"
            >
              {current === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
            <button
              className="px-2 py-1 rounded border border-gray-200 dark:border-neutral-700 bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200"
              onClick={handleRestart}
              type="button"
            >
              Restart
            </button>
            <button
              className="px-2 py-1 rounded border border-gray-200 dark:border-neutral-700 bg-rose-100 text-rose-900 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-200"
              onClick={() => {
                markCompleted();
                closeTutorial();
              }}
              type="button"
            >
              Skip
            </button>
          </div>
          <span className="text-gray-500 dark:text-gray-400">
            Step {current + 1} / {steps.length}
          </span>
        </div>
      </div>
    </>
  );
}
