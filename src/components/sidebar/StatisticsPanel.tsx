'use client';

import React, { useMemo } from 'react';
import { useFilters } from '@/contexts/FilterContext';
import { useData } from '@/contexts/DataContext';
import { GRAD_CLASS_COLORS } from '@/lib/constants';

export default function StatisticsPanel() {
  const { filteredStudents, filterState, toggleLocationFocus } = useFilters();
  const { allStudents } = useData();

  const regionStats = useMemo(() => {
    const template = () => ({
      Public: 0,
      Private: 0,
      Total: 0,
      grads: {} as Record<string, number>,
    });
    const stats: Record<string, ReturnType<typeof template>> = {
      InCityNYC: template(),
      InStateNYOther: template(),
      OutOfStateUS: template(),
      International: template(),
      Total: template(),
    };

    filteredStudents.forEach((student) => {
      const focus = student.locationFocus;
      if (!(focus in stats) || focus === 'N/A') return;
      const bucket = stats[focus];
      const type = student.isCampusPublic ? 'Public' : 'Private';
      bucket[type] += 1;
      bucket.Total += 1;
      bucket.grads[student.gradClass] = (bucket.grads[student.gradClass] || 0) + 1;

      const total = stats.Total;
      total[type] += 1;
      total.Total += 1;
      total.grads[student.gradClass] = (total.grads[student.gradClass] || 0) + 1;
    });

    return stats;
  }, [filteredStudents]);

  const topColleges = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredStudents.forEach((s) => {
      counts[s.collegeName] = (counts[s.collegeName] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [filteredStudents]);

  const totalStudents = allStudents.length;

  return (
    <div className="p-4 border-b border-gray-300 dark:border-neutral-800">
         <details className="group">
            <summary className="font-bold cursor-pointer list-none flex justify-between">
                <span>College Attendance Statistics</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-3 space-y-3">
              {/* Region cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  { key: "InCityNYC", label: "In City (NYC)" },
                  { key: "InStateNYOther", label: "In State (NY)" },
                  { key: "OutOfStateUS", label: "Out of State" },
                  { key: "International", label: "International" }
                ].map(({ key, label }) => {
                  const region = regionStats[key];
                  const percent = totalStudents ? Math.round((region.Total / totalStudents) * 100) : 0;
                  return (
                    <div
                      key={key}
                      className="rounded border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-sm flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{region.Total} students • {percent}%</div>
                        </div>
                        <label className="flex items-center gap-2 text-xs">
                          <input
                            type="checkbox"
                            checked={!!filterState.locationFocus[key]}
                            onChange={() => toggleLocationFocus(key)}
                          />
                          <span>Show</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200">Public: {region.Public}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Private: {region.Private}</span>
                      </div>
                      {Object.keys(region.grads).length > 0 && (
                        <div className="flex flex-wrap gap-2 text-xs">
                          {Object.entries(region.grads).sort().map(([grad, count]) => (
                            <span
                              key={grad}
                              className="px-2 py-0.5 rounded text-white font-semibold"
                              style={{ backgroundColor: GRAD_CLASS_COLORS[grad] || '#666' }}
                            >
                              {grad}: {count}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Top colleges */}
              <div className="rounded border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-sm">Top Colleges (Filtered)</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{filteredStudents.length} students</div>
                </div>
                {topColleges.length === 0 ? (
                  <div className="text-xs text-gray-500">No colleges in current filters.</div>
                ) : (
                  <ul className="text-xs space-y-1">
                    {topColleges.map(([college, count], idx) => (
                      <li key={college} className="flex justify-between">
                        <span>{idx + 1}. {college}</span>
                        <span className="font-semibold">{count}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
        </details>
    </div>
  );
}
