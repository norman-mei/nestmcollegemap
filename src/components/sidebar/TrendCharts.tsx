'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useData } from '@/contexts/DataContext';
import { useTheme } from '@/contexts/ThemeContext';
import { PREDEFINED_MAJOR_AREAS } from '@/lib/constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TrendCharts() {
  const { allStudents } = useData();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const years = ["'21", "'22", "'23", "'24", "'25", "'26"];
  const palette = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
    '#8A2BE2', '#5F9EA0', '#D2691E', '#FF7F50', '#6495ED', '#20c997',
    '#f472b6', '#f59e0b', '#22c55e', '#6366f1', '#06b6d4'
  ];

  const totalsByYear = React.useMemo(() => {
    const map: Record<string, number> = {};
    years.forEach((y) => { map[y] = 0; });
    allStudents.forEach((s) => {
      if (map[s.gradClass] !== undefined) map[s.gradClass] += 1;
    });
    return map;
  }, [allStudents, years]);

  const majorDatasets = PREDEFINED_MAJOR_AREAS.map((area, idx) => {
    const data = years.map(year => {
      const total = totalsByYear[year] || 0;
      if (!total) return 0;
      const count = allStudents.filter(s => s.gradClass === year && s.majorArea === area).length;
      return (count / total) * 100;
    });

    return {
      label: area,
      data,
      borderColor: palette[idx % palette.length],
      backgroundColor: palette[idx % palette.length],
      tension: 0.3,
      hidden: idx > 4 // reduce clutter by default
    };
  });

  const locationKeys = [
    { key: 'InCityNYC', label: 'NYC' },
    { key: 'InStateNYOther', label: 'Rest of NY' },
    { key: 'OutOfStateUS', label: 'Out of State' },
    { key: 'International', label: 'International' },
  ];

  const locationDatasets = locationKeys.map((loc, idx) => {
    const data = years.map(year => {
      const total = totalsByYear[year] || 0;
      if (!total) return 0;
      const count = allStudents.filter(s => s.gradClass === year && s.locationFocus === loc.key).length;
      return (count / total) * 100;
    });
    return {
      label: loc.label,
      data,
      borderColor: palette[(idx + 5) % palette.length],
      backgroundColor: palette[(idx + 5) % palette.length],
      tension: 0.3,
    };
  });

  const topFiveColleges = React.useMemo(() => {
    const counts: Record<string, number> = {};
    allStudents.forEach((s) => {
      if (!s.collegeName || s.collegeName === 'Undecided') return;
      counts[s.collegeName] = (counts[s.collegeName] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name]) => name);
  }, [allStudents]);

  const collegeDatasets = topFiveColleges.map((college, idx) => {
    const data = years.map(year => {
      const total = totalsByYear[year] || 0;
      if (!total) return 0;
      const count = allStudents.filter(s => s.gradClass === year && s.collegeName === college).length;
      return (count / total) * 100;
    });
    return {
      label: college,
      data,
      borderColor: palette[(idx + 9) % palette.length],
      backgroundColor: palette[(idx + 9) % palette.length],
      tension: 0.3,
    };
  });

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
            color: isDark ? '#e5e5e5' : '#333',
            boxWidth: 10,
            font: { size: 10 }
        }
      },
      title: {
        display: false,
      },
      tooltip: {
          callbacks: {
              label: (ctx) => {
                const value = typeof ctx.parsed?.y === 'number' ? ctx.parsed.y : 0;
                return `${ctx.dataset.label}: ${value.toFixed(1)}%`;
              }
          }
      }
    },
    scales: {
        x: {
            grid: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' },
            ticks: { color: isDark ? '#ccc' : '#666' }
        },
        y: {
            grid: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' },
            ticks: { color: isDark ? '#ccc' : '#666', callback: (v) => `${v}%` },
            min: 0,
            max: 100
        }
    }
  };

  return (
    <div className="p-4 border-b border-gray-300 dark:border-neutral-800 space-y-4">
      <details className="group">
        <summary className="font-bold cursor-pointer list-none flex justify-between">
          <span>Data Trends Over Time</span>
          <span className="group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-4 space-y-6">
          <div className="h-64">
            <h5 className="text-xs font-bold text-center mb-2 dark:text-gray-300">Major Area Popularity (% of Grads/Year)</h5>
            <div className="h-full pb-6">
              <Line options={options} data={{ labels: years, datasets: majorDatasets }} />
            </div>
          </div>

          <div className="h-64">
            <h5 className="text-xs font-bold text-center mb-2 dark:text-gray-300">Location Focus (% of Grads/Year)</h5>
            <div className="h-full pb-6">
              <Line options={options} data={{ labels: years, datasets: locationDatasets }} />
            </div>
          </div>

          <div className="h-64">
            <h5 className="text-xs font-bold text-center mb-2 dark:text-gray-300">Top 5 Colleges by Attendance (% of Grads/Year)</h5>
            <div className="h-full pb-6">
              <Line options={options} data={{ labels: years, datasets: collegeDatasets }} />
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
