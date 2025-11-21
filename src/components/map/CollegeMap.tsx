'use client';

import React, { useEffect } from 'react';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import { useTheme } from '@/contexts/ThemeContext';
import { useFilters } from '@/contexts/FilterContext';
import { MAP_STYLE_DARK } from '@/lib/constants';
import MapMarkers from './MapMarkers';
import { MapControls } from './MapControls';

const DEFAULT_CENTER = { lat: 41.8, lng: -74.5 };
const DEFAULT_ZOOM = 7;

// Sync map styling with theme without recreating the map instance
function MapStyleSync({ theme }: { theme: 'light' | 'dark' }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const styles = theme === 'dark' ? MAP_STYLE_DARK : [];
    map.setOptions({ styles });
  }, [map, theme]);

  return null;
}

export default function CollegeMap() {
  const { theme } = useTheme();
  const { filteredStudents } = useFilters();
  const [mapType, setMapType] = React.useState<'roadmap' | 'satellite'>('roadmap');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('map-type');
    if (stored === 'satellite' || stored === 'roadmap') {
      setMapType(stored);
    }
  }, []);

  // Persist map type
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('map-type', mapType);
    }
  }, [mapType]);
  
  return (
    <div className="relative w-full h-full bg-gray-200 dark:bg-neutral-800">
      <APIProvider 
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''} 
        libraries={['places', 'geometry']}
      >
        <Map
          defaultCenter={DEFAULT_CENTER}
          defaultZoom={DEFAULT_ZOOM}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          fullscreenControl={false} // We have custom controls or layout handles this
          defaultMapTypeId={mapType}
          onMapTypeIdChanged={(e) => {
            const newType = (e as any)?.mapTypeId || mapType;
            if (newType === 'satellite' || newType === 'roadmap') setMapType(newType);
          }}
          className="w-full h-full"
        >
            <MapStyleSync theme={theme} />
            <MapMarkers students={filteredStudents} />
            <MapControls />
        </Map>
      </APIProvider>
    </div>
  );
}
