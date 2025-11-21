'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { useFilters } from '@/contexts/FilterContext';
import { useData } from '@/contexts/DataContext';
import { useUI } from '@/contexts/UIContext';
import { ProcessedStudent } from '@/lib/types';
import { GRAD_CLASS_COLORS } from '@/lib/constants';

type CollapsedState = Record<string, boolean>;
type SuggestionItem = { value: string; type: 'Student' | 'College' | 'Major' };

const gradOrder = ["'21","'22","'23","'24","'25","'26"];
const getFirstName = (full: string) => full.trim().split(/\s+/)[0] || full;
const getLastName = (full: string) => {
  const parts = full.trim().split(/\s+/);
  return parts.length > 1 ? parts[parts.length - 1] : full;
};
const displayGradClass = (gradClass: string) => gradClass.replace(/^'+/, '');
const suggestionTypeRank: Record<SuggestionItem['type'], number> = { Student: 0, College: 1, Major: 2 };

export default function StudentList() {
  const { filteredStudents, filterState, setFilterState, toggleStudentVisibility, toggleCollegeVisibility, isStudentVisible, isCollegeVisible } = useFilters();
  const { allStudents } = useData();
  const { openPhotoPopup, setActiveHoverId, activeHoverId } = useUI();
  const [isGallery, setIsGallery] = useState(false);
  const [sortTarget, setSortTarget] = useState<'students' | 'colleges'>('students');
  const [studentSort, setStudentSort] = useState<'grad_first' | 'grad_last' | 'first' | 'last'>('grad_first');
  const [collegeSort, setCollegeSort] = useState<'name_asc' | 'name_desc' | 'count_desc' | 'count_asc'>('name_asc');
  const [collapsedClasses, setCollapsedClasses] = useState<CollapsedState>({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Load persisted collapsed state after mount to avoid SSR/client mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem('collapsedGradClasses');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') setCollapsedClasses(parsed as CollapsedState);
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('collapsedGradClasses', JSON.stringify(collapsedClasses));
  }, [collapsedClasses]);

  const suggestionPool = useMemo(() => {
    const seen = new Set<string>();
    const pool: SuggestionItem[] = [];
    const add = (value: string, type: SuggestionItem['type']) => {
      if (!value) return;
      const trimmed = value.trim();
      if (!trimmed) return;
      const key = `${type}|${trimmed.toLowerCase()}`;
      if (seen.has(key)) return;
      seen.add(key);
      pool.push({ value: trimmed, type });
    };

    allStudents.forEach((s) => {
      add(s.seniorName, 'Student');
      add(s.collegeName, 'College');
      add(s.major, 'Major');
    });

    return pool;
  }, [allStudents]);

  const filteredSuggestions = useMemo(() => {
    const query = filterState.searchQuery.trim().toLowerCase();
    if (!query) return [];

    return suggestionPool
      .filter((item) => item.value.toLowerCase().includes(query))
      .sort((a, b) => {
        const aStarts = a.value.toLowerCase().startsWith(query) ? 0 : 1;
        const bStarts = b.value.toLowerCase().startsWith(query) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        const typeDelta = suggestionTypeRank[a.type] - suggestionTypeRank[b.type];
        if (typeDelta !== 0) return typeDelta;
        return a.value.localeCompare(b.value);
      })
      .slice(0, 8);
  }, [filterState.searchQuery, suggestionPool]);

  useEffect(() => {
    setHighlightedIndex(-1);
    if (!filterState.searchQuery.trim()) setShowSuggestions(false);
  }, [filterState.searchQuery]);

  const sortedStudents = useMemo(() => {
    const list = [...filteredStudents];
    return list.sort((a, b) => {
      if (studentSort === 'grad_first' || studentSort === 'grad_last') {
        const gradCompare = gradOrder.indexOf(a.gradClass) - gradOrder.indexOf(b.gradClass);
        if (gradCompare !== 0) return gradCompare;
        if (studentSort === 'grad_first') {
          const first = getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
          if (first !== 0) return first;
          return getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
        }
        const last = getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
        if (last !== 0) return last;
        return getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
      }

      if (studentSort === 'first') {
        const first = getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
        if (first !== 0) return first;
        return getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
      }
      const last = getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
      if (last !== 0) return last;
      return getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
    });
  }, [filteredStudents, studentSort]);

  const groupedByGrad = useMemo(() => {
    if (sortTarget !== 'students' || (studentSort !== 'grad_first' && studentSort !== 'grad_last')) return [];
    const groups = new Map<string, ProcessedStudent[]>();
    sortedStudents.forEach((s) => {
      const key = s.gradClass;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(s);
    });
    return Array.from(groups.entries()).sort(([a], [b]) => gradOrder.indexOf(a) - gradOrder.indexOf(b));
  }, [sortedStudents, sortTarget, studentSort]);

  const collegesAggregated = useMemo(() => {
    const map = new Map<string, { name: string; count: number; sampleStudent: ProcessedStudent; image?: string }>();
    filteredStudents.forEach((s) => {
      if (s.collegeName === 'Undecided') return;
      if (!map.has(s.collegeName)) {
        map.set(s.collegeName, { name: s.collegeName, count: 0, sampleStudent: s, image: s.collegeImageUrl });
      }
      const entry = map.get(s.collegeName)!;
      entry.count += 1;
      if (!entry.image && s.collegeImageUrl) entry.image = s.collegeImageUrl;
    });
    const arr = Array.from(map.values());
    return arr.sort((a, b) => {
      if (collegeSort === 'name_asc') return a.name.localeCompare(b.name);
      if (collegeSort === 'name_desc') return b.name.localeCompare(a.name);
      if (collegeSort === 'count_desc') return b.count - a.count || a.name.localeCompare(b.name);
      return a.count - b.count || a.name.localeCompare(b.name);
    });
  }, [filteredStudents, collegeSort]);

  // Respond to map marker clicks by opening the right class section, highlighting, and showing the popup
  useEffect(() => {
    const handleFocusFromMap = (ev: Event) => {
      const custom = ev as CustomEvent<{ id: number }>;
      if (!custom.detail) return;
      const targetId = custom.detail.id;
      const target = filteredStudents.find((s) => s.id === targetId);
      if (!target) return;

      // Ensure the grad class accordion is open
      setCollapsedClasses((prev) => ({ ...prev, [target.gradClass]: false }));

      // Highlight and open popup after DOM updates
      requestAnimationFrame(() => {
        const el = document.querySelector(`[data-student-id="${target.id}"]`) as HTMLElement | null;
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-[#188BFE]', 'ring-offset-2');
          setTimeout(() => el.classList.remove('ring-2', 'ring-[#188BFE]', 'ring-offset-2'), 1600);
        }
        setActiveHoverId(target.id);
        openPhotoPopup(target, el?.getBoundingClientRect());
      });
    };
    window.addEventListener('focus-student-from-map', handleFocusFromMap as EventListener);
    return () => window.removeEventListener('focus-student-from-map', handleFocusFromMap as EventListener);
  }, [filteredStudents, setActiveHoverId, openPhotoPopup]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterState((prev) => ({ ...prev, searchQuery: value }));
    setShowSuggestions(Boolean(value.trim()));
    setHighlightedIndex(-1);
  };

  const selectSuggestion = (value: string) => {
    setFilterState((prev) => ({ ...prev, searchQuery: value }));
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setShowSuggestions(true);
      setHighlightedIndex((prev) => {
        const next = prev + 1;
        if (!filteredSuggestions.length) return prev;
        return next >= filteredSuggestions.length ? 0 : next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setShowSuggestions(true);
      setHighlightedIndex((prev) => {
        if (!filteredSuggestions.length) return prev;
        const next = prev - 1;
        return next < 0 ? filteredSuggestions.length - 1 : next;
      });
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
        e.preventDefault();
        selectSuggestion(filteredSuggestions[highlightedIndex].value);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setHighlightedIndex(-1);
    }
  };

  const toggleClass = (gradClass: string) => {
    setCollapsedClasses((prev) => ({ ...prev, [gradClass]: !prev[gradClass] }));
  };

  const ListItem = ({ student }: { student: ProcessedStudent }) => {
    const color = GRAD_CLASS_COLORS[student.gradClass] || '#ccc';
    const isHovered = activeHoverId === student.id;
    const honoraries = student.honoraries || [];
    return (
      <div
        className={`px-4 py-2 border-b border-gray-200 dark:border-neutral-800 transition-colors cursor-pointer ${
          isHovered ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
        }`}
        data-student-id={student.id}
        onClick={(e) => {
          window.dispatchEvent(
            new CustomEvent('center-student-marker', { detail: { id: student.id, lat: student.lat, lng: student.lng } })
          );
          openPhotoPopup(student, e.currentTarget.getBoundingClientRect());
        }}
        onMouseEnter={(e) => {
          setActiveHoverId(student.id);
          openPhotoPopup(student, e.currentTarget.getBoundingClientRect());
        }}
        onMouseLeave={() => setActiveHoverId(null)}
      >
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-3"
            checked={isStudentVisible(student.id)}
            onChange={(e) => {
              e.stopPropagation();
              toggleStudentVisibility(student.id);
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="h-12 w-12 rounded bg-gray-200 dark:bg-neutral-800 overflow-hidden flex-shrink-0">
            <img
              src={student.seniorPhotoUrl}
              alt={student.seniorName}
              className="h-full w-full object-cover"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = student.seniorPhotoUrlPng || '/placeholder-logo.png';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-900 dark:text-gray-100 truncate">{student.seniorName}</span>
                <span
                  className="text-xs font-bold px-1.5 py-0.5 rounded text-white"
                  style={{ backgroundColor: color }}
                >
                  {displayGradClass(student.gradClass)}
                </span>
                <div className="flex items-center gap-1">
                  {honoraries.includes('dean_scholars') && (
                    <img src="/logos/dean scholars.png" alt="Dean Scholars" className="h-4 w-4" />
                  )}
                  {honoraries.includes('macaulay') && (
                    <img src="/logos/macaulay.png" alt="Macaulay Honors" className="h-4 w-4" />
                  )}
                  {honoraries.includes('posse') && (
                    <img src="/logos/posse.png" alt="Posse Scholar" className="h-4" style={{ width: 20 }} />
                  )}
                  {honoraries.includes('questbridge') && (
                    <img src="/logos/questbridge.png" alt="QuestBridge Scholar" className="h-4 w-4" />
                  )}
                  {student.instagramUrl && (
                    <a href={student.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex">
                      <img src="/logos/instagram.svg" alt="Instagram" className="h-4 w-4" />
                    </a>
                  )}
                  {student.linkedInUrl && (
                    <a href={student.linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex">
                      <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
                    </a>
                  )}
                  {student.githubUrl && (
                    <a href={student.githubUrl} target="_blank" rel="noreferrer" className="inline-flex">
                      <img src="/logos/github.svg" alt="GitHub" className="h-4 w-4 dark:invert" />
                    </a>
                  )}
                </div>
              </div>
            </div>
        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate">{student.collegeName}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{student.major || 'Undecided'}</div>
          </div>
        </div>
      </div>
    );
  };

  const GalleryItem = ({ student }: { student: ProcessedStudent }) => (
    <div
      className="relative aspect-square bg-gray-200 dark:bg-neutral-800 rounded overflow-hidden group cursor-pointer"
      data-student-id={student.id}
      onClick={(e) => {
        window.dispatchEvent(
          new CustomEvent('center-student-marker', { detail: { id: student.id, lat: student.lat, lng: student.lng } })
        );
        openPhotoPopup(student, e.currentTarget.getBoundingClientRect());
      }}
      onMouseEnter={() => setActiveHoverId(student.id)}
      onMouseLeave={() => setActiveHoverId(null)}
    >
      <img
        src={student.seniorPhotoUrl}
        alt={student.seniorName}
        className="object-cover w-full h-full"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/placeholder-logo.png';
        }}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
        <span className="text-white text-sm font-bold">
          {student.seniorName} {'->'} {student.collegeName}
        </span>
      </div>
      <div
        className="absolute top-1 right-1 text-xs font-bold text-white px-1.5 py-0.5 rounded"
        style={{ backgroundColor: GRAD_CLASS_COLORS[student.gradClass] }}
      >
        {displayGradClass(student.gradClass)}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full min-h-0">
      <div id="student-list-toolbar" className="p-4 border-b border-gray-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-10">
        <h2 className="text-lg font-bold mb-2">College List & Seniors</h2>
        <div className="flex gap-2 mb-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search students, colleges, majors..."
              id="student-search-input"
              className="w-full px-3 py-2 border rounded-full text-sm dark:bg-neutral-800 dark:border-neutral-700"
              value={filterState.searchQuery}
              autoComplete="off"
              onChange={handleSearch}
              onFocus={() => filterState.searchQuery.trim() && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              onKeyDown={handleSearchKeyDown}
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-1 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                {filteredSuggestions.map((s, idx) => {
                  const isActive = idx === highlightedIndex;
                  return (
                    <button
                      key={`${s.type}-${s.value}`}
                      type="button"
                      className={`w-full px-3 py-2 flex items-center justify-between text-sm ${
                        isActive ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                      } hover:bg-gray-100 dark:hover:bg-neutral-800`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        selectSuggestion(s.value);
                      }}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                    >
                      <span className="text-left text-gray-900 dark:text-gray-100 truncate">{s.value}</span>
                      <span className="ml-3 text-xs text-gray-500">{s.type}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <select
            className="px-2 py-1 border rounded text-sm dark:bg-neutral-800 dark:border-neutral-700"
            id="list-mode-select"
            value={sortTarget}
            onChange={(e) => {
              const next = e.target.value as 'students' | 'colleges';
              setSortTarget(next);
              if (next === 'colleges') setIsGallery(false);
            }}
          >
            <option value="students">Students</option>
            <option value="colleges">Colleges</option>
          </select>
          {sortTarget === 'students' ? (
            <select
              className="px-2 py-1 border rounded text-sm dark:bg-neutral-800 dark:border-neutral-700"
              id="student-sort-select"
              value={studentSort}
              onChange={(e) => setStudentSort(e.target.value as typeof studentSort)}
            >
              <option value="grad_first">Grad Class, First Name</option>
              <option value="grad_last">Grad Class, Last Name</option>
              <option value="first">First Name (Overall)</option>
              <option value="last">Last Name (Overall)</option>
            </select>
          ) : (
            <select
              className="px-2 py-1 border rounded text-sm dark:bg-neutral-800 dark:border-neutral-700"
              id="college-sort-select"
              value={collegeSort}
              onChange={(e) => setCollegeSort(e.target.value as typeof collegeSort)}
            >
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
              <option value="count_desc">Student Count (Most)</option>
              <option value="count_asc">Student Count (Least)</option>
            </select>
          )}
          {sortTarget === 'students' && (
            <button
              onClick={() => setIsGallery(!isGallery)}
              id="gallery-toggle-btn"
              className="px-3 py-1 bg-gray-200 dark:bg-neutral-700 rounded text-sm"
            >
              {isGallery ? 'List' : 'Gallery'}
            </button>
          )}
        </div>
        <div className="text-xs text-gray-500">
          {sortTarget === 'students'
            ? `Showing ${filteredStudents.length} students`
            : `Showing ${collegesAggregated.length} colleges`}
        </div>
      </div>

      <div
        id="student-list-scroll"
        className="flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400"
        style={{ scrollbarGutter: 'stable', maxHeight: 'calc(100vh - 240px)' }}
      >
        {sortTarget === 'students' && filteredStudents.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No results found.</div>
        ) : sortTarget === 'students' && (studentSort === 'grad_first' || studentSort === 'grad_last') ? (
          groupedByGrad.map(([gradClass, students]) => {
            const isCollapsed = collapsedClasses[gradClass] ?? false;
            return (
              <div key={gradClass} className="border-b border-gray-200 dark:border-neutral-800">
                <button
                  className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-left font-semibold"
                  onClick={() => toggleClass(gradClass)}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: GRAD_CLASS_COLORS[gradClass] || '#ccc' }}
                    />
                    <span>{displayGradClass(gradClass)} Seniors</span>
                    <span className="text-xs text-gray-500 ml-1">({students.length})</span>
                  </span>
                  <span className="text-sm">{isCollapsed ? '[+]' : '[-]'}</span>
                </button>

                {!isCollapsed && (
                  <div className="p-2">
                    {isGallery ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {students.map((s) => (
                          <GalleryItem key={s.id} student={s} />
                        ))}
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-200 dark:divide-neutral-800">
                        {students.map((s) => (
                          <ListItem key={s.id} student={s} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : sortTarget === 'students' ? (
          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            {sortedStudents.map((s) => (
              <ListItem key={s.id} student={s} />
            ))}
          </div>
        ) : collegesAggregated.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No colleges found.</div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            {collegesAggregated.map((c) => (
              <div
                key={c.name}
                className="p-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                onClick={() => {
                  if (c.sampleStudent) {
                    window.dispatchEvent(
                      new CustomEvent('center-student-marker', {
                        detail: { id: c.sampleStudent.id, lat: c.sampleStudent.lat, lng: c.sampleStudent.lng }
                      })
                    );
                    window.dispatchEvent(new CustomEvent('focus-student-from-map', { detail: { id: c.sampleStudent.id } }));
                  }
                }}
              >
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={isCollegeVisible(c.name)}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleCollegeVisibility(c.name);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="h-10 w-10 rounded bg-gray-200 dark:bg-neutral-700 overflow-hidden flex items-center justify-center">
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="object-contain h-full w-full" />
                  ) : (
                    <span className="text-xs text-gray-500">No Logo</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">{c.name}</div>
                  <div className="text-xs text-gray-500">{c.count} {c.count === 1 ? 'student' : 'students'}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
