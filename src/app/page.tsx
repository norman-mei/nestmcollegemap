'use client';

import React, { useState, useEffect } from "react";
import SidebarContainer from "@/components/sidebar/SidebarContainer";
import StudentList from "@/components/sidebar/StudentList";
import FilterPanel from "@/components/sidebar/FilterPanel";
import StatisticsPanel from "@/components/sidebar/StatisticsPanel";
import TrendCharts from "@/components/sidebar/TrendCharts";
import CollegeMap from "@/components/map/CollegeMap";
import PhotoPopup from "@/components/ui/PhotoPopup";
import TutorialTour from "@/components/ui/TutorialTour";
import InfoModals from "@/components/ui/InfoModals";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const NORMAN_ID = 346;

  // Load sidebar collapsed preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('sidebar-collapsed');
    if (stored === 'true') setSidebarCollapsed(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__sidebarCollapsed = sidebarCollapsed;
      window.dispatchEvent(new CustomEvent('sidebar-visibility-change', { detail: { collapsed: sidebarCollapsed } }));
      window.localStorage.setItem('sidebar-collapsed', sidebarCollapsed ? 'true' : 'false');
    }
  }, [sidebarCollapsed]);

  return (
    <main className="flex h-screen w-screen overflow-hidden text-gray-800 dark:text-gray-200 relative">
      <PhotoPopup />
      <InfoModals />
      {!sidebarCollapsed && (
        <SidebarContainer>
            <div className="flex flex-col h-full min-h-0">
              <div id="sidebar-header" className="bg-purple-700 text-white p-4 font-bold shadow-md shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => setSidebarCollapsed(true)}
                    className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded border border-white/30 text-xs"
                    aria-label="Collapse sidebar"
                  >
                    {'<<'}
                  </button>
                  <span className="text-center flex-1">NEST+m Senior College Destinations 🦅</span>
                  <TutorialTour />
              </div>
              
              <div
                id="sidebar-scroll-container"
                className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 pr-2"
                style={{ scrollbarGutter: 'stable' }}
              >
                  <div id="filter-panel-section"><FilterPanel /></div>
                  <div id="statistics-section"><StatisticsPanel /></div>
                  <div id="trend-section"><TrendCharts /></div>
                  <div id="student-list-section"><StudentList /></div>
              </div>
              
              <div className="p-2 text-xs text-center border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
                  <button
                    className="font-bold text-[#188BFE] hover:underline focus:underline"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('focus-student-from-map', { detail: { id: NORMAN_ID } }));
                      const fallback = document.querySelector(`[data-student-id=\"${NORMAN_ID}\"]`) as HTMLElement | null;
                      if (fallback) {
                        fallback.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        fallback.classList.add('ring-2', 'ring-[#188BFE]', 'ring-offset-2');
                        setTimeout(() => fallback.classList.remove('ring-2', 'ring-[#188BFE]', 'ring-offset-2'), 1500);
                      }
                    }}
                  >
                    Created by Norman Mei ('25)
                  </button>
              </div>
            </div>
        </SidebarContainer>
      )}
      {sidebarCollapsed && (
        <button
          onClick={() => setSidebarCollapsed(false)}
          className="absolute top-1/2 -translate-y-1/2 left-3 z-30 px-2 py-1 bg-white/90 dark:bg-neutral-800/90 rounded shadow border border-gray-200 dark:border-neutral-700 text-sm"
          aria-label="Expand sidebar"
        >
          {'>>'}
        </button>
      )}
      <div className="flex-1 relative h-full">
          <div id="map-area" className="absolute inset-0">
            <CollegeMap />
          </div>
      </div>
    </main>
  );
}
