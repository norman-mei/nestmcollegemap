'use client';

import React from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { useTheme } from '@/contexts/ThemeContext';
import { useFilters } from '@/contexts/FilterContext';

declare var google: any;

const HOME_COORDS = { lat: 40.720735, lng: -73.983154 }; // NEST+m approx
const NESTM_INFO = {
  coords: HOME_COORDS,
  name: 'NEST+m',
  homepageUrl: 'https://nestmk12.net/',
  imageUrl: '/logos/NEST+m_Logo.png',
  typeLabel: 'Public K-12 School',
  locationFocus: 'InCityNYC',
};

export function MapControls() {
  const map = useMap();
  const { toggleTheme, theme } = useTheme();
  const { resetFilters } = useFilters();
  const [transitLayer, setTransitLayer] = React.useState<any | null>(null);
  const [mapType, setMapType] = React.useState<'roadmap' | 'satellite'>('roadmap');
  const [showNestm, setShowNestm] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage.getItem('show-nestm');
    return stored === 'false' ? false : true;
  });
  const homeMarkerRef = React.useRef<any | null>(null);
  const [controlsCollapsed, setControlsCollapsed] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('map-type');
    if (stored === 'satellite' || stored === 'roadmap') {
      setMapType(stored);
      if (map) map.setMapTypeId(stored);
    }
    const storedTransit = window.localStorage.getItem('transit-visible');
    if (storedTransit === 'true' && map && !transitLayer) {
      const layer = new google.maps.TransitLayer();
      layer.setMap(map);
      setTransitLayer(layer);
    }
    const storedControls = window.localStorage.getItem('map-controls-collapsed');
    if (storedControls === 'true') setControlsCollapsed(true);
  }, [map]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('map-controls-collapsed', controlsCollapsed ? 'true' : 'false');
  }, [controlsCollapsed]);

  // Place Google map type control in the upper left
  React.useEffect(() => {
    if (!map || typeof google === 'undefined') return;
    map.setOptions({
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
      },
    });
  }, [map]);

  // Home marker toggle/persist
  React.useEffect(() => {
    if (!map) return;
    if (showNestm) {
      const marker = new google.maps.Marker({
        position: HOME_COORDS,
        map,
        title: 'NEST+m',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#8b5cf6',
          fillOpacity: 1,
          strokeColor: '#fff',
          strokeWeight: 2,
        },
        zIndex: 9999,
      });
      marker.addListener('click', () => {
        window.dispatchEvent(
          new CustomEvent('open-nestm-info', {
            detail: { marker, ...NESTM_INFO },
          })
        );
      });
      homeMarkerRef.current = marker;
      if (typeof window !== 'undefined') window.localStorage.setItem('show-nestm', 'true');
    } else {
      if (homeMarkerRef.current) {
        homeMarkerRef.current.setMap(null);
        homeMarkerRef.current = null;
      }
      if (typeof window !== 'undefined') window.localStorage.setItem('show-nestm', 'false');
    }
    return () => {
      if (homeMarkerRef.current) {
        homeMarkerRef.current.setMap(null);
        homeMarkerRef.current = null;
      }
    };
  }, [showNestm, map]);

  const handleToggleTransit = () => {
    if (!map) return;
    if (transitLayer) {
        transitLayer.setMap(null);
        setTransitLayer(null);
        if (typeof window !== 'undefined') window.localStorage.setItem('transit-visible', 'false');
    } else {
        const layer = new google.maps.TransitLayer();
        layer.setMap(map);
        setTransitLayer(layer);
        if (typeof window !== 'undefined') window.localStorage.setItem('transit-visible', 'true');
    }
  };

  const handleLocateMe = () => {
    if (!map || !navigator.geolocation) {
      alert('Geolocation not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        map.panTo(coords);
        map.setZoom(12);
        new google.maps.Marker({
          position: coords,
          map,
          title: 'You are here',
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
            fillColor: '#2563eb',
            fillOpacity: 0.9,
            strokeColor: '#fff',
            strokeWeight: 2,
          },
          zIndex: 99999,
        });
      },
      () => alert('Unable to retrieve your location.'),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const toggleMapType = () => {
    if (!map) return;
    const next = mapType === 'roadmap' ? 'satellite' : 'roadmap';
    map.setMapTypeId(next);
    setMapType(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('map-type', next);
    }
  };

  const handleZoomVisible = () => {
      // In a real implementation, calculate bounds of filteredStudents and map.fitBounds(bounds)
      if(!map) return;
      map.setZoom(7);
      map.setCenter({ lat: 41.8, lng: -74.5 });
  };

  const handleZoomHome = () => {
    if (!map) return;
    map.setCenter(HOME_COORDS);
    map.setZoom(15);
  };

  return (
    <>
    <div
      id="map-controls-bar"
      className="absolute top-2 right-4 w-full flex flex-col items-end gap-2 pointer-events-none"
      style={{ transform: 'translateX(0px)' }}
    >
        {!controlsCollapsed && (
          <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded shadow flex flex-wrap justify-center gap-2 pointer-events-auto backdrop-blur-sm border border-gray-200 dark:border-neutral-700 max-w-[min(85vw,700px)]">
          <button
            onClick={toggleTheme}
            id="darkModeToggle"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button
            onClick={handleLocateMe}
            id="locateMeBtn"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            📍 My Location
          </button>
          <button
            onClick={handleToggleTransit}
            id="toggleTransitBtn"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            {transitLayer ? '🚇 Hide Transit' : '🚇 Transit'}
          </button>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleZoomHome}
              id="zoomToNestmBtn"
              className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
            >
              🏫 NEST+m
            </button>
            <button
              onClick={() => setShowNestm((v) => !v)}
              id="toggleNestmBtn"
              className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
              aria-pressed={showNestm}
            >
              {showNestm ? '👁️ Hide NEST+m' : '👀 Show NEST+m'}
            </button>
          </div>
          <button
            onClick={handleZoomVisible}
            id="zoomToVisibleBtn"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            👁️ Reset View
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-update-log'))}
            id="showUpdateLogBtn"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            📝 Update Log
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-faq'))}
            id="showFaqBtn"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            ❓ FAQ
          </button>
          <button
            onClick={resetFilters}
            id="clearAllFiltersBtn"
            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm"
          >
            🧹 Clear Filters
          </button>
          </div>
        )}
        <button
          onClick={() => setControlsCollapsed((v) => !v)}
          className="pointer-events-auto px-2 py-1 bg-white/90 dark:bg-neutral-800/90 rounded shadow border border-gray-200 dark:border-neutral-700 text-sm"
          aria-pressed={controlsCollapsed}
          aria-label={controlsCollapsed ? 'Show map controls' : 'Hide map controls'}
        >
          {controlsCollapsed ? '<<' : '>>'}
        </button>
      </div>
    </>
  );
}
