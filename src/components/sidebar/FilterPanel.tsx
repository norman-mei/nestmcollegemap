'use client';

import React, { useMemo } from 'react';
import { useFilters } from '@/contexts/FilterContext';
import { GRAD_CLASS_COLORS, PREDEFINED_MAJOR_AREAS } from '@/lib/constants';
import { useData } from '@/contexts/DataContext';

const INSTAGRAM_LINKS: Record<string, string> = {
  "'21": 'https://www.instagram.com/nestmdecisions2021/',
  "'22": 'https://www.instagram.com/nestm2022decisions/',
  "'23": 'https://www.instagram.com/nestmdecisions2023/',
  "'24": 'https://www.instagram.com/nestmdecisions2024/',
  "'25": 'https://www.instagram.com/nestmdecisions25/',
  "'26": 'https://www.instagram.com/nestm.decisions2026/',
};

const REGION_OPTIONS = [
  { key: 'InCityNYC', label: 'NYC', detail: 'NYC schools', icon: '🗽' },
  { key: 'InStateNYOther', label: 'NY State', detail: 'Outside NYC', icon: '🧭' },
  { key: 'OutOfStateUS', label: 'Out-of-State US', detail: 'US outside NY', icon: '✈️' },
  { key: 'International', label: 'International', detail: 'Outside US', icon: '🌍' },
];

const MAJOR_COUNT_OVERRIDES: Record<string, number> = {
  "Arts/Design": 24,
  "Business/Economics": 53,
  "Communications": 1,
  "Computer Science": 5,
  "Education": 3,
  "Engineering": 37,
  "Health Sciences": 26,
  "Humanities": 10,
  "Humanities/Social Sciences": 67,
  "IT": 5,
  "Journalism": 1,
  "Life Sciences": 2,
  "Mathematics": 2,
  "Physical Sciences": 4,
  "Social Sciences": 7,
  "Statistics": 2,
  "STEM": 68,
  "Other": 0,
  "Undecided/Other": 66,
};

const MAJOR_EMOJIS: Record<string, string> = {
  "Arts/Design": "🎨",
  "Business/Economics": "💼",
  "Communications": "🗣️",
  "Computer Science": "💻",
  "Education": "📚",
  "Engineering": "🛠️",
  "Health Sciences": "🩺",
  "Humanities": "📖",
  "Humanities/Social Sciences": "🌐",
  "IT": "🖥️",
  "Journalism": "📰",
  "Life Sciences": "🧬",
  "Mathematics": "➗",
  "Physical Sciences": "🔬",
  "Social Sciences": "🏛️",
  "Statistics": "📊",
  "STEM": "🚀",
  "Other": "✨",
  "Undecided/Other": "🤔",
  "Unknown": "❓",
};

export default function FilterPanel() {
  const { allStudents } = useData();
  const { filterState, setFilterState, toggleGradClass, toggleMajorArea, toggleLocationFocus, toggleStateCountry } = useFilters();

  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allStudents.forEach((s) => {
      counts[s.locationFocus] = (counts[s.locationFocus] || 0) + 1;
    });
    return counts;
  }, [allStudents]);

  const majorCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allStudents.forEach((s) => {
      const areas = s.majorArea.split(' & ').map((a) => a.trim());
      areas.forEach((area) => {
        counts[area] = (counts[area] || 0) + 1;
      });
    });
    return counts;
  }, [allStudents]);

  const outOfStateCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allStudents.forEach((s) => {
      if (s.stateOrCountry && s.stateOrCountry.length === 2 && s.stateOrCountry !== 'NY') {
        counts[s.stateOrCountry] = (counts[s.stateOrCountry] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .filter(([, count]) => count > 0)
      .sort((a, b) => a[0].localeCompare(b[0]));
  }, [allStudents]);

  const setRegions = (keys: string[]) => {
    const nextState: Record<string, boolean> = {};
    REGION_OPTIONS.forEach(({ key }) => {
      nextState[key] = keys.includes(key);
    });
    // Keep "N/A" untouched (hidden) if it exists
    if (filterState.locationFocus['N/A'] !== undefined) {
      nextState['N/A'] = filterState.locationFocus['N/A'];
    }
    setFilterState((prev) => ({ ...prev, locationFocus: nextState }));
  };

  const DEFAULT_SECTIONS = {
    grad: true,
    major: true,
    region: false,
    stateBreakdown: false,
    instagram: true,
  };

  // Match SSR/CSR on first paint; hydrate preferences after mount
  const [sectionsOpen, setSectionsOpen] = React.useState<typeof DEFAULT_SECTIONS>(DEFAULT_SECTIONS);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem('filter-sections-open');
      const parsed = stored ? JSON.parse(stored) : null;
      if (parsed && typeof parsed === 'object') {
        setSectionsOpen((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('filter-sections-open', JSON.stringify(sectionsOpen));
  }, [sectionsOpen]);

  return (
    <div className="p-4 border-b border-gray-300 dark:border-neutral-800 space-y-4">
        {/* Class Instagram Links */}
        <details
          id="class-instagram-section"
          open={sectionsOpen.instagram}
          className="group"
          onToggle={(e) => setSectionsOpen((prev) => ({ ...prev, instagram: (e.target as HTMLDetailsElement).open }))}
        >
          <summary className="font-bold cursor-pointer list-none flex justify-between">
            <span>Class Instagrams</span>
            <span className="group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {Object.keys(GRAD_CLASS_COLORS).map((cls) => {
                const bg = GRAD_CLASS_COLORS[cls] || '#e5e7eb';
                const textColor = '#ffffff';
                return (
                  <button
                    key={cls}
                    className="text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-neutral-700 hover:opacity-90 flex items-center gap-1"
                    style={{ backgroundColor: bg, color: textColor }}
                    onClick={() => {
                      const next: Record<string, boolean> = {};
                      Object.keys(filterState.gradClasses || {}).forEach((k) => {
                        next[k] = k === cls;
                      });
                      setFilterState((prev) => ({ ...prev, gradClasses: next }));
                      const link = INSTAGRAM_LINKS[cls];
                      if (link && typeof window !== 'undefined') {
                        window.open(link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    title={`View ${cls} Instagram & filter`}
                  >
                    <span aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="instagram-logo fill-current">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </span>
                    <span className="font-semibold">{cls.replace("'", '')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </details>

        {/* Grad Class Filter */}
        <details
          id="grad-class-filter"
          open={sectionsOpen.grad}
          className="group"
          onToggle={(e) => setSectionsOpen((prev) => ({ ...prev, grad: (e.target as HTMLDetailsElement).open }))}
        >
            <summary className="font-bold cursor-pointer list-none flex justify-between">
                <span>Filter by Graduating Class</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-2 space-y-1">
                {Object.keys(GRAD_CLASS_COLORS).map(cls => (
                    <label key={cls} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input 
                            type="checkbox" 
                            checked={!!filterState.gradClasses[cls]}
                            onChange={() => toggleGradClass(cls)}
                            className="rounded border-gray-300"
                        />
                        <span className="w-3 h-3 inline-block rounded-full" style={{ backgroundColor: GRAD_CLASS_COLORS[cls] }}></span>
                        <span>{cls}</span>
                    </label>
                ))}
            </div>
        </details>

        {/* Major Area Filter */}
         <details
           id="major-area-filter"
           className="group"
           open={sectionsOpen.major}
           onToggle={(e) => setSectionsOpen((prev) => ({ ...prev, major: (e.target as HTMLDetailsElement).open }))}
         >
            <summary className="font-bold cursor-pointer list-none flex justify-between">
                <span>Filter by Major Area</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-2 space-y-3">
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => {
                    const next = PREDEFINED_MAJOR_AREAS.reduce((acc, a) => ({ ...acc, [a]: true }), {} as Record<string, boolean>);
                    setFilterState((prev) => ({ ...prev, majorAreas: next }));
                  }}
                >
                  ✅ Select All
                </button>
                <button
                  className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => {
                    const next = PREDEFINED_MAJOR_AREAS.reduce((acc, a) => ({ ...acc, [a]: false }), {} as Record<string, boolean>);
                    setFilterState((prev) => ({ ...prev, majorAreas: next }));
                  }}
                >
                  🧹 Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PREDEFINED_MAJOR_AREAS.filter((area) => (majorCounts[area] ?? MAJOR_COUNT_OVERRIDES[area] ?? 0) > 0).map((area) => {
                  const checked = !!filterState.majorAreas[area];
                  const displayCount = majorCounts[area] ?? MAJOR_COUNT_OVERRIDES[area] ?? 0;
                  return (
                    <label
                      key={area}
                      className={`flex items-center justify-between rounded border px-3 py-2 text-sm cursor-pointer transition-colors ${
                        checked
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
                          : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMajorArea(area);
                      }}
                      >
                      <span className="flex flex-col">
                        <span className="font-semibold flex items-center gap-1">
                          <span aria-hidden="true">{MAJOR_EMOJIS[area] || "📌"}</span>
                          <span>{area}</span>
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{displayCount} students</span>
                      </span>
                      <input
                        type="checkbox"
                        readOnly
                        checked={checked}
                        className="w-4 h-4 rounded border-gray-300 dark:border-neutral-600 accent-green-600"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
        </details>

        {/* Location Focus */}
         <details
           id="region-filter"
           className="group"
           open={sectionsOpen.region}
           onToggle={(e) => setSectionsOpen((prev) => ({ ...prev, region: (e.target as HTMLDetailsElement).open }))}
         >
            <summary className="font-bold cursor-pointer list-none flex justify-between">
                <span>Filter by Region</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-2 space-y-3">
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => setRegions(REGION_OPTIONS.map((r) => r.key))}
                >
                  Select All
                </button>
                <button
                  className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => setRegions(['InCityNYC'])}
                >
                  NYC Only
                </button>
                <button
                  className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => setRegions(['InCityNYC', 'InStateNYOther'])}
                >
                  All NY
                </button>
                <button
                  className="px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => setRegions(['OutOfStateUS', 'International'])}
                >
                  Beyond NY
                </button>
              </div>

              <div className="space-y-2">
                {REGION_OPTIONS.map(({ key, label, detail, icon }) => {
                  const checked = !!filterState.locationFocus[key];
                  return (
                    <label
                      key={key}
                      className={`flex items-center justify-between rounded border px-3 py-2 text-sm cursor-pointer transition-colors ${
                        checked
                          ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
                          : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLocationFocus(key);
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg">{icon}</span>
                        <span className="flex flex-col">
                          <span className="font-semibold">{label}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{detail}</span>
                        </span>
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">({regionCounts[key] || 0})</span>
                        <input
                          type="checkbox"
                          readOnly
                          checked={checked}
                          className="w-4 h-4 rounded border-gray-300 dark:border-neutral-600 accent-blue-600"
                        />
                      </span>
                    </label>
                  );
                })}
              </div>

              {outOfStateCounts.length > 0 && (
                <details
                  className="group"
                  open={sectionsOpen.stateBreakdown}
                  onToggle={(e) => setSectionsOpen((prev) => ({ ...prev, stateBreakdown: (e.target as HTMLDetailsElement).open }))}
                >
                  <summary className="font-semibold cursor-pointer list-none flex justify-between text-sm">
                    <span>Out-of-State breakdown</span>
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    {outOfStateCounts.map(([state, count]) => {
                      const checked = filterState.stateCountry[state] ?? true;
                      return (
                        <label
                          key={state}
                          className={`flex items-center justify-between rounded border px-3 py-2 cursor-pointer transition-colors ${
                            checked
                              ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700'
                              : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleStateCountry(state);
                          }}
                        >
                          <span className="font-semibold">{state}</span>
                          <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            ({count})
                            <input
                              type="checkbox"
                              readOnly
                              checked={checked}
                              className="w-4 h-4 rounded border-gray-300 dark:border-neutral-600 accent-purple-600"
                            />
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </details>
              )}
            </div>
        </details>
    </div>
  );
}
