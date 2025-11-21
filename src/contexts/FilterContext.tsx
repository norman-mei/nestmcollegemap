'use client';

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ProcessedStudent, FilterState } from '@/lib/types';
import { useData } from './DataContext';
import { PREDEFINED_MAJOR_AREAS } from '@/lib/constants';

interface FilterContextType {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  filteredStudents: ProcessedStudent[];
  toggleGradClass: (cls: string) => void;
  toggleLocationFocus: (focus: string) => void;
  toggleMajorArea: (area: string) => void;
   toggleStateCountry: (stateCode: string) => void;
  toggleStudentVisibility: (id: number) => void;
  toggleCollegeVisibility: (collegeName: string) => void;
  isStudentVisible: (id: number) => boolean;
  isCollegeVisible: (collegeName: string) => boolean;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const { allStudents } = useData();

  const initialGradClasses = {
    "'21": true, "'22": true, "'23": true, "'24": true, "'25": true, "'26": true
  };
  const initialLocationFocus = {
    "InCityNYC": true, "InStateNYOther": true, "OutOfStateUS": true, "International": true, "N/A": true
  };
  const initialMajorAreas = PREDEFINED_MAJOR_AREAS.reduce((acc, area) => ({ ...acc, [area]: true }), {});
  const initialStateCountry = useMemo(() => {
    const map: Record<string, boolean> = {};
    allStudents.forEach((s) => {
      if (s.stateOrCountry && s.stateOrCountry.length === 2 && s.stateOrCountry !== 'NY') {
        map[s.stateOrCountry] = true;
      }
    });
    return map;
  }, [allStudents]);

  const [hiddenStudents, setHiddenStudents] = useState<Set<number>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const stored = JSON.parse(localStorage.getItem('hiddenStudents') || '[]') as number[];
      return new Set(stored);
    } catch {
      return new Set();
    }
  });

  const [hiddenColleges, setHiddenColleges] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const stored = JSON.parse(localStorage.getItem('hiddenColleges') || '[]') as string[];
      return new Set(stored);
    } catch {
      return new Set();
    }
  });

  const [filterState, setFilterState] = useState<FilterState>({
    gradClasses: initialGradClasses,
    locationFocus: initialLocationFocus,
    majorAreas: initialMajorAreas,
    stateCountry: initialStateCountry,
    searchQuery: "",
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const storedHidden = JSON.parse(localStorage.getItem('hiddenStudents') || '[]') as number[];
      setHiddenStudents(new Set(storedHidden));
      const storedColleges = JSON.parse(localStorage.getItem('hiddenColleges') || '[]') as string[];
      setHiddenColleges(new Set(storedColleges));
    } catch {
      /* ignore */
    }
  }, []);

  // Load filters after mount to avoid SSR/client mismatch
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem('filters');
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<FilterState>;
        setFilterState({
          gradClasses: parsed.gradClasses ?? initialGradClasses,
          locationFocus: parsed.locationFocus ?? initialLocationFocus,
          majorAreas: parsed.majorAreas ?? initialMajorAreas,
          stateCountry: parsed.stateCountry ?? initialStateCountry,
          searchQuery: parsed.searchQuery ?? "",
        });
      }
    } catch (e) {
      console.warn('Failed to parse stored filters', e);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('filters', JSON.stringify(filterState));
  }, [filterState]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('hiddenStudents', JSON.stringify(Array.from(hiddenStudents)));
  }, [hiddenStudents]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('hiddenColleges', JSON.stringify(Array.from(hiddenColleges)));
  }, [hiddenColleges]);

  const filteredStudents = useMemo(() => {
    return allStudents.filter(student => {
      if (!student.isIndividuallyVisible) return false;
      if (hiddenStudents.has(student.id)) return false;
      if (hiddenColleges.has(student.collegeName)) return false;

      // Grad Class
      if (!filterState.gradClasses[student.gradClass]) return false;

      // Location Focus
      if (!filterState.locationFocus[student.locationFocus]) return false;

      // State/Country (out-of-state filtering)
      const hasStateFilters = Object.keys(filterState.stateCountry || {}).length > 0;
      if (hasStateFilters && student.stateOrCountry && student.stateOrCountry.length === 2 && student.stateOrCountry !== 'NY') {
        if (!filterState.stateCountry[student.stateOrCountry]) return false;
      }

      // Major Area
      // Logic handles complex majors roughly
      const areas = student.majorArea.split(' & ').map(s => s.trim());
      const hasMatchingArea = areas.some(area => filterState.majorAreas[area]);
      if (!hasMatchingArea) return false;

      // Search
      if (filterState.searchQuery) {
        const q = filterState.searchQuery.toLowerCase();
        const matches = 
          student.seniorName.toLowerCase().includes(q) ||
          student.collegeName.toLowerCase().includes(q) ||
          student.major.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [allStudents, filterState]);

  const toggleGradClass = (cls: string) => {
    setFilterState(prev => ({
      ...prev,
      gradClasses: { ...prev.gradClasses, [cls]: !prev.gradClasses[cls] }
    }));
  };

  const toggleLocationFocus = (focus: string) => {
     setFilterState(prev => ({
      ...prev,
      locationFocus: { ...prev.locationFocus, [focus]: !prev.locationFocus[focus] }
    }));
  };

   const toggleMajorArea = (area: string) => {
     setFilterState(prev => ({
      ...prev,
      majorAreas: { ...prev.majorAreas, [area]: !prev.majorAreas[area] }
    }));
  };
  const toggleStateCountry = (stateCode: string) => {
    setFilterState(prev => ({
      ...prev,
      stateCountry: { ...prev.stateCountry, [stateCode]: !prev.stateCountry[stateCode] }
    }));
  };

  const toggleStudentVisibility = (id: number) => {
    setHiddenStudents((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCollegeVisibility = (collegeName: string) => {
    setHiddenColleges((prev) => {
      const next = new Set(prev);
      if (next.has(collegeName)) next.delete(collegeName);
      else next.add(collegeName);
      return next;
    });
  };

  const isStudentVisible = (id: number) => !hiddenStudents.has(id);
  const isCollegeVisible = (collegeName: string) => !hiddenColleges.has(collegeName);

  const resetFilters = () => {
      setFilterState({
        gradClasses: initialGradClasses,
        locationFocus: initialLocationFocus,
        majorAreas: initialMajorAreas,
        stateCountry: initialStateCountry,
        searchQuery: ""
      });
  };

  return (
    <FilterContext.Provider value={{ 
        filterState, setFilterState, filteredStudents, 
        toggleGradClass, toggleLocationFocus, toggleMajorArea, toggleStateCountry, 
        toggleStudentVisibility, toggleCollegeVisibility, isStudentVisible, isCollegeVisible,
        resetFilters 
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilters must be used within a FilterProvider');
  return context;
};
