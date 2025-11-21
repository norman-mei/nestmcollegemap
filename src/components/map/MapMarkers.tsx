import React, { useEffect, useRef } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { ProcessedStudent } from '@/lib/types';
import { GRAD_CLASS_COLORS, NYC_BOUNDS } from '@/lib/constants';
import { useTheme } from '@/contexts/ThemeContext';
import { useUI } from '@/contexts/UIContext';

declare var google: any;

interface MapMarkersProps {
  students: ProcessedStudent[];
}

type TimeFormat = '12' | '24';

type TimeDetails = {
  timeZoneId: string;
  label: string;
};

type CoordTarget = { lat: number; lng: number };

type NestmInfoDetail = {
  marker: any;
  coords: CoordTarget;
  name?: string;
  homepageUrl?: string;
  imageUrl?: string;
  typeLabel?: string;
  locationFocus?: string;
};

const TIME_FORMAT_STORAGE_KEY = 'college-info-time-format';

const isMarkerDebugEnabled = () => {
  if (process.env.NEXT_PUBLIC_MARKER_DEBUG === 'true') return true;
  if (typeof window !== 'undefined') {
    return window.localStorage?.getItem('marker-debug') === 'true';
  }
  return false;
};

const debugLog = (...args: unknown[]) => {
  if (isMarkerDebugEnabled()) {
    console.debug('[MapMarkers]', ...args);
  }
};

export default function MapMarkers({ students }: MapMarkersProps) {
  const map = useMap();
  const { theme } = useTheme();
  const { activeHoverId, setActiveHoverId } = useUI();
  const clustererRef = useRef<MarkerClusterer | null>(null);
  const markersRef = useRef<{[key: number]: { marker: any; color: string } }>({});
  const infowindowRef = useRef<any | null>(null);
  const lastHighlightedRef = useRef<number | null>(null);
  const lastInfoWindowStudentIdRef = useRef<number | null>(null);
  const timeCacheRef = useRef<Map<string, TimeDetails>>(new Map());
  const weatherCacheRef = useRef<Map<string, string>>(new Map());
  const transitCacheRef = useRef<Map<string, string>>(new Map());
  const timeFormatRef = useRef<TimeFormat>('24');
  const lastMarkerBuildRef = useRef<{
    map: google.maps.Map | null;
    studentsRef: ProcessedStudent[];
    studentsLength: number;
    theme: string | null;
  } | null>(null);
  const locationFocusChipClasses: Record<string, string> = {
    InCityNYC: 'chip-nyc',
    InStateNYOther: 'chip-nystate',
    OutOfStateUS: 'chip-outofstate',
    International: 'chip-international',
    'N/A': 'muted',
  };

  const renderChip = (label: string, extraClass = '') =>
    `<span class="info-chip${extraClass ? ` ${extraClass}` : ''}">${label}</span>`;

  const buildIcon = (color: string, scale = 7, strokeWeight = 1.5) => ({
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: color,
    fillOpacity: 1,
    strokeColor: theme === 'dark' ? '#111' : '#fff',
    strokeWeight,
    scale,
  });

  // Cleanup markers on unmount
  useEffect(() => {
    return () => {
      if (clustererRef.current) {
        clustererRef.current.clearMarkers();
      }
    };
  }, []);

  // Initialize info window once
  useEffect(() => {
     if (typeof google === 'undefined') return;
     if (!infowindowRef.current) {
         infowindowRef.current = new google.maps.InfoWindow();
     }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedFormat = window.localStorage.getItem(TIME_FORMAT_STORAGE_KEY);
    if (storedFormat === '12' || storedFormat === '24') {
      timeFormatRef.current = storedFormat;
    }
  }, []);

  // Effect to handle marker highlighting from list hover
  useEffect(() => {
    if (typeof google === 'undefined') return;
    debugLog('Hover highlight update', {
      activeHoverId,
      previousHighlighted: lastHighlightedRef.current,
    });

    // remove previous highlight
    if (lastHighlightedRef.current !== null) {
      const previous = markersRef.current[lastHighlightedRef.current];
      if (previous) {
        previous.marker.setIcon(buildIcon(previous.color));
      }
    }

    // apply new highlight
    if (activeHoverId !== null) {
      const current = markersRef.current[activeHoverId];
      if (current) {
        current.marker.setIcon(buildIcon(current.color, 9, 2));
        lastHighlightedRef.current = activeHoverId;
        return;
      }
    }

    lastHighlightedRef.current = null;
  }, [activeHoverId, theme]);

  useEffect(() => {
    if (!map || typeof google === 'undefined') return;
    const buildStart = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const reasons: string[] = [];
    const previous = lastMarkerBuildRef.current;
    if (!previous) {
      reasons.push('initial render');
    } else {
      if (previous.map !== map) reasons.push('map instance changed');
      if (previous.studentsRef !== students) reasons.push('students reference changed');
      if (previous.studentsLength !== students.length) {
        reasons.push(`students length ${previous.studentsLength} -> ${students.length}`);
      }
      if (previous.theme !== theme) reasons.push(`theme ${previous.theme} -> ${theme}`);
    }

    lastMarkerBuildRef.current = {
      map,
      studentsRef: students,
      studentsLength: students.length,
      theme,
    };
    debugLog('Rebuilding markers', { reasons, studentsLength: students.length, theme });
    
    if (!clustererRef.current) {
      clustererRef.current = new MarkerClusterer({ 
          map,
          renderer: {
            render: ({ count, position }) => {
                let color = "red";
                let diameter = 50;
                let labelColor = "white";

                if (count <= 5) { color = "green"; diameter = 30; }
                else if (count <= 10) { color = "#90EE90"; diameter = 35; labelColor = "black"; }
                else if (count <= 20) { color = "yellow"; diameter = 40; labelColor = "black"; }
                else if (count <= 50) { color = "orange"; diameter = 45; }

                const svg = window.btoa(`
                <svg xmlns="http://www.w3.org/2000/svg" width="${diameter}" height="${diameter}" viewBox="0 0 ${diameter} ${diameter}">
                    <circle cx="${diameter / 2}" cy="${diameter / 2}" r="${diameter / 2 * 0.9}" fill="${color}" stroke="rgba(0,0,0,0.3)" stroke-width="${Math.max(1, diameter * 0.04)}"/>
                </svg>`);

                return new google.maps.Marker({
                    position,
                    icon: {
                        url: `data:image/svg+xml;base64,${svg}`,
                        scaledSize: new google.maps.Size(diameter, diameter),
                        anchor: new google.maps.Point(diameter / 2, diameter / 2)
                    },
                    label: {
                        text: String(count),
                        color: labelColor,
                        fontSize: '12px',
                        fontWeight: 'bold',
                    },
                    zIndex: 100 + count,
                });
            }
          }
      });
      debugLog('Created marker clusterer instance');
    }

    const previousCount =
      ((clustererRef.current as unknown as { getMarkers?: () => google.maps.Marker[] })?.getMarkers?.() || [])
        .length;
    clustererRef.current.clearMarkers();
    debugLog('Cleared clusterer markers', { previousCount });
    markersRef.current = {};
    lastHighlightedRef.current = null;

    const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const weatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const newMarkers: any[] = [];

    const createSocialLinkSVG = (platform: 'linkedin' | 'instagram' | 'github', size = 16) => {
      const invert = platform === 'github' && theme === 'dark' ? 'filter: invert(1);' : '';
      return `<img src="/logos/${platform}.svg" alt="${platform}" style="width:${size}px;height:${size}px;vertical-align:middle;${invert}" />`;
    };

    const createHonoraryIcons = (honoraries?: string[]) => {
      if (!honoraries || honoraries.length === 0) return '';
      const icons: Record<string, string> = {
        dean_scholars: '/logos/dean scholars.png',
        macaulay: '/logos/macaulay.png',
        posse: '/logos/posse.png',
        questbridge: '/logos/questbridge.png',
      };
      return honoraries
        .map((h) => {
          if (!icons[h]) return '';
          const width = h === 'posse' ? 20 : 16;
          return `<img src="${icons[h]}" alt="${h}" style="height:16px;width:${width}px;vertical-align:middle;margin-left:4px;">`;
        })
        .join('');
    };

    const getLastName = (full: string) => {
      const parts = full.trim().split(/\s+/);
      return parts.length > 1 ? parts[parts.length - 1] : full;
    };

    const getFirstName = (full: string) => {
      const parts = full.trim().split(/\s+/);
      return parts[0] || full;
    };

    const formatLocationFocus = (focus: string) => {
      const lookup: Record<string, string> = {
        InCityNYC: 'NYC',
        InStateNYOther: 'NY State (Outside NYC)',
        OutOfStateUS: 'Out of State (US)',
        International: 'International',
        'N/A': 'N/A',
      };
      return lookup[focus] || focus || 'N/A';
    };

    const buildStudentsHtml = (student: ProcessedStudent) => {
      if (student.collegeName === 'Undecided') {
        return `<div style="line-height:1.6;">
          <b>${student.seniorName}</b>
          <span style="color:${GRAD_CLASS_COLORS[student.gradClass] || '#ccc'};"> (Class ${student.gradClass})</span>
          <div><small>Major: ${student.major || 'Undecided'} (${student.majorArea || 'N/A'})</small></div>
        </div>`;
      }

      const studentsAtSameCollege = students
        .filter(
          (s) =>
            s.collegeName === student.collegeName &&
            s.collegeName !== 'Undecided' &&
            s.isIndividuallyVisible
        )
        .sort((a, b) => {
          if (a.gradClass !== b.gradClass) return a.gradClass.localeCompare(b.gradClass);
          const lastCompare = getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
          if (lastCompare !== 0) return lastCompare;
          return getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
        });

      if (studentsAtSameCollege.length === 0) {
        return 'No other visible students found for this college with current filters.';
      }

      const studentWord = studentsAtSameCollege.length === 1 ? 'Student' : 'Students';
      let html = `<u>${studentsAtSameCollege.length} ${studentWord} Attending Visible:</u><ol style="margin-top: 3px; margin-bottom: 3px; padding-left: 22px; list-style: decimal;">`;
      studentsAtSameCollege.forEach((s) => {
        const socials = `
          ${s.linkedInUrl ? `<a href="${s.linkedInUrl}" target="_blank" rel="noreferrer" class="social-icon-link">${createSocialLinkSVG('linkedin')}</a>` : ''}
          ${s.instagramUrl ? `<a href="${s.instagramUrl}" target="_blank" rel="noreferrer" class="social-icon-link">${createSocialLinkSVG('instagram')}</a>` : ''}
          ${s.githubUrl ? `<a href="${s.githubUrl}" target="_blank" rel="noreferrer" class="social-icon-link">${createSocialLinkSVG('github')}</a>` : ''}
        `;
        const badges = createHonoraryIcons(s.honoraries);
        html += `<li style="padding:4px 2px; border-radius:3px;">
          <div style="line-height:1.5; display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
            ${s.seniorName} <span style="color:${GRAD_CLASS_COLORS[s.gradClass] || '#ccc'};">(${s.gradClass})</span>
            ${badges}
            ${socials}
          </div>
          <small style="padding-left:10px;">Major: ${s.major || 'Undecided'} (${s.majorArea || 'N/A'})</small>
        </li>`;
      });
      html += '</ol>';
      return html;
    };

    const computeTimeOfDay = (collegeHour: number) => {
      if (collegeHour >= 5 && collegeHour < 7) return 'Dawn / Early Morning';
      if (collegeHour >= 7 && collegeHour < 9) return 'Morning';
      if (collegeHour >= 9 && collegeHour < 12) return 'Late Morning';
      if (collegeHour >= 12 && collegeHour < 14) return 'Afternoon';
      if (collegeHour >= 14 && collegeHour < 17) return 'Late Afternoon';
      if (collegeHour >= 17 && collegeHour < 19) return 'Dusk / Evening';
      if (collegeHour >= 19 && collegeHour < 22) return 'Nighttime';
      return 'Late Night';
    };

    const getTimeCacheKey = (target: CoordTarget) => `${target.lat},${target.lng}`;

    const formatTimeString = (date: Date, format: TimeFormat, timeZoneId?: string) => {
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: format === '12',
      };
      if (timeZoneId) options.timeZone = timeZoneId;
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const formatted = formatter.format(date);

      if (format !== '12') return formatted;

      const parts = formatter.formatToParts(date);
      const dayPeriod = parts.find((p) => p.type === 'dayPeriod')?.value?.toUpperCase() || '';
      if (dayPeriod) {
        return formatted.replace(/(am|pm)/i, dayPeriod);
      }
      const hourPart = parts.find((p) => p.type === 'hour')?.value;
      const hourNumber = hourPart ? parseInt(hourPart, 10) : date.getHours();
      const suffix = hourNumber >= 12 ? 'PM' : 'AM';
      return `${formatted} ${suffix}`;
    };

    const renderTimeDisplay = (details: TimeDetails, format: TimeFormat) => {
      const timeZoneId = details.timeZoneId || 'UTC';
      const now = new Date();
      const collegeTimeStr = formatTimeString(now, format, timeZoneId);
      const collegeHour = parseInt(
        now.toLocaleTimeString('en-US', { timeZone: timeZoneId, hour: 'numeric', hour12: false }),
        10
      );
      const collegeTimeZoneAbbr = now
        .toLocaleTimeString('en-US', { timeZone: timeZoneId, timeZoneName: 'short', hour12: true })
        .split(' ')
        .pop();
      const userTimeStr = formatTimeString(now, format);
      return `
        <div>${collegeTimeStr} (${collegeTimeZoneAbbr}) - ${computeTimeOfDay(collegeHour)}</div>
        <div>Your Time: ${userTimeStr}</div>
      `;
    };

    const buildTimeSection = (target: CoordTarget, details: TimeDetails, format: TimeFormat, labelOverride?: string) => {
      const cacheKey = getTimeCacheKey(target);
      return `
        <div class="time-info-block" data-time-cache-key="${cacheKey}">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; flex-wrap:wrap; margin-bottom:4px;">
            <b>${labelOverride || details.label}:</b>
            <label style="font-size:0.9em; font-weight:500;">Format:
              <select class="time-format-select" data-cache-key="${cacheKey}" style="margin-left:4px; padding:2px 6px; border-radius:6px;">
                <option value="24"${format === '24' ? ' selected' : ''}>24-hour</option>
                <option value="12"${format === '12' ? ' selected' : ''}>12-hour</option>
              </select>
            </label>
          </div>
          <div class="time-info-body" data-cache-key="${cacheKey}">
            ${renderTimeDisplay(details, format)}
          </div>
        </div>
      `;
    };

    const fetchCollegeTimeDetails = async (target: CoordTarget, label = 'Time Info'): Promise<TimeDetails | null> => {
      const cacheKey = getTimeCacheKey(target);
      if (timeCacheRef.current.has(cacheKey)) return timeCacheRef.current.get(cacheKey)!;
      if ((!target.lat && !target.lng) || !mapsApiKey) return null;

      const timestamp = Math.floor(Date.now() / 1000);
      const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${target.lat},${target.lng}&timestamp=${timestamp}&key=${mapsApiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 'OK') {
          const fallback: TimeDetails = {
            timeZoneId: 'UTC',
            label: `${label} (API Error)`,
          };
          timeCacheRef.current.set(cacheKey, fallback);
          return fallback;
        }

        const timeZoneId = data.timeZoneId;
        const details: TimeDetails = {
          timeZoneId,
          label,
        };
        timeCacheRef.current.set(cacheKey, details);
        return details;
      } catch (error) {
        console.error('Error fetching timezone data:', error);
        const fallback: TimeDetails = {
          timeZoneId: 'UTC',
          label: `${label} (Fetch Error)`,
        };
        timeCacheRef.current.set(cacheKey, fallback);
        return fallback;
      }
    };

    const wireTimeDropdown = (target: CoordTarget) => {
      if (!infowindowRef.current || typeof google === 'undefined') return;
      const cacheKey = getTimeCacheKey(target);
      google.maps.event.addListenerOnce(infowindowRef.current, 'domready', () => {
        const container = document.querySelector('.info-window-content');
        if (!container) return;
        const select = container.querySelector<HTMLSelectElement>(`.time-format-select[data-cache-key="${cacheKey}"]`);
        const body = container.querySelector<HTMLElement>(`.time-info-body[data-cache-key="${cacheKey}"]`);
        if (!select || !body) return;

        const applyFormat = (format: TimeFormat) => {
          const details = timeCacheRef.current.get(cacheKey);
          if (!details) return;
          body.innerHTML = renderTimeDisplay(details, format);
        };

        select.value = timeFormatRef.current;
        applyFormat(timeFormatRef.current);

        const handleChange = (event: Event) => {
          const newFormat = (event.target as HTMLSelectElement).value === '12' ? '12' : '24';
          timeFormatRef.current = newFormat;
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(TIME_FORMAT_STORAGE_KEY, newFormat);
          }
          applyFormat(newFormat);
        };

        select.addEventListener('change', handleChange);
        google.maps.event.addListenerOnce(infowindowRef.current, 'closeclick', () => {
          select.removeEventListener('change', handleChange);
        });
      });
    };

    const fetchCollegeWeatherHTML = async (target: CoordTarget) => {
      const cacheKey = `${target.lat},${target.lng}`;
      if (weatherCacheRef.current.has(cacheKey)) return weatherCacheRef.current.get(cacheKey)!;
      if (!target.lat || !target.lng || target.lat === 0 || target.lng === 0 || !weatherApiKey) return '';

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${target.lat}&lon=${target.lng}&appid=${weatherApiKey}&units=imperial`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          console.warn(`OpenWeatherMap API returned status: ${response.status}`);
          weatherCacheRef.current.set(cacheKey, '');
          return '';
        }
        const data = await response.json();
        if (data && data.weather && data.weather[0] && data.main) {
          const description = (data.weather[0].description as string).replace(/\b\w/g, (l: string) => l.toUpperCase());
          const iconCode = data.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          const tempF = Math.round(data.main.temp);
          const feelsLikeF = Math.round(data.main.feels_like);
          const tempC = Math.round(((tempF - 32) * 5) / 9);
          const feelsLikeC = Math.round(((feelsLikeF - 32) * 5) / 9);

          const html = `
            <div style="margin-top: 5px;">
              <b>Local Weather:</b>
              <div style="display: flex; align-items: center; margin-top: 3px;">
                <img src="${iconUrl}" alt="${description}" title="${description}" style="width: 32px; height: 32px; vertical-align: middle; margin-right: 5px; background-color: ${theme === 'dark' ? '#4a5c6e' : '#cde1f9'}; border-radius: 50%;">
                <div>
                  <div style="font-weight: bold; font-size: 1.1em;">${tempC}°C / ${tempF}°F</div>
                  <div style="font-size: 0.9em; color: ${theme === 'dark' ? '#bbb' : '#555'};">
                    ${description} (Feels like ${feelsLikeC}°C / ${feelsLikeF}°F)
                  </div>
                </div>
              </div>
            </div>
          `;
          weatherCacheRef.current.set(cacheKey, html);
          return html;
        }
        weatherCacheRef.current.set(cacheKey, '');
        return '';
      } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherCacheRef.current.set(cacheKey, '');
        return '';
      }
    };

    const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const toRad = (deg: number) => (deg * Math.PI) / 180;
      const R = 6371000;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const isWithinNYC = (lat: number, lng: number) =>
      lat >= NYC_BOUNDS.south && lat <= NYC_BOUNDS.north && lng >= NYC_BOUNDS.west && lng <= NYC_BOUNDS.east;

    const fetchNearbyTransitStopsHTML = async (target: CoordTarget & { locationFocus?: string }) => {
      const cacheKey = `${target.lat},${target.lng}`;
      if (transitCacheRef.current.has(cacheKey)) return transitCacheRef.current.get(cacheKey)!;
      if (!google?.maps?.places || !target.lat || !target.lng) return '';

      const ICONS = {
        BUS: '<img class="transit-icon" alt="Bus" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/bus2.svg">',
        TRAIN: '<img class="transit-icon" alt="Train" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/rail2.svg">',
        LIGHT_RAIL: '<img class="transit-icon" alt="Light rail" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/tram2.svg">',
        SUBWAY: '<img class="transit-icon" alt="Subway" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/subway2.svg">',
        STREETCAR: '<img class="transit-icon" alt="Streetcar" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/cablecar.svg">',
        FERRY: '<img class="transit-icon" alt="Ferry" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/ferry.svg">'
      };

      const getTransitDetails = (types: string[] = [], name = '') => {
        const lowerName = name.toLowerCase();
        if (types.includes('ferry_terminal')) return { type: 'Ferry', icon: ICONS.FERRY, labelClass: 'ferry' };
        if (types.includes('subway_station')) return { type: 'Subway', icon: ICONS.SUBWAY, labelClass: 'subway' };
        if (types.includes('light_rail_station')) return { type: 'Light Rail', icon: ICONS.LIGHT_RAIL, labelClass: 'light-rail' };
        if (types.includes('train_station')) return { type: 'Rail', icon: ICONS.TRAIN, labelClass: 'rail' };
        if (types.includes('bus_station') || types.includes('bus_stop')) return { type: 'Bus', icon: ICONS.BUS, labelClass: 'bus' };
        if (types.includes('transit_station')) {
          if (lowerName.includes('streetcar')) return { type: 'Streetcar', icon: ICONS.STREETCAR, labelClass: 'streetcar' };
          if (lowerName.includes('light rail')) return { type: 'Light Rail', icon: ICONS.LIGHT_RAIL, labelClass: 'light-rail' };
          return { type: 'Bus', icon: ICONS.BUS, labelClass: 'bus' };
        }
        return { type: 'Transit', icon: ICONS.TRAIN, labelClass: 'rail' };
      };

      const service = new google.maps.places.PlacesService(map);
      const location = new google.maps.LatLng(target.lat, target.lng);

      const baseRequest: google.maps.places.PlaceSearchRequest = {
        location,
        keyword: 'transit subway bus stop rail station light rail ferry terminal',
        type: 'transit_station',
      };
      const request: google.maps.places.PlaceSearchRequest = (target.locationFocus === 'InCityNYC' || isWithinNYC(target.lat, target.lng))
        ? { ...baseRequest, rankBy: google.maps.places.RankBy.DISTANCE }
        : { ...baseRequest, radius: 7500 };

      const html = await new Promise<string>((resolve) => {
        service.nearbySearch(
          request,
          (
            results: google.maps.places.PlaceResult[] | null,
            status: google.maps.places.PlacesServiceStatus
          ) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK || !results || results.length === 0) {
              resolve('');
              return;
            }

          const uniqueStops = new Map<string, { place: google.maps.places.PlaceResult; distance: number; typeDetails: { type: string; icon: string; labelClass: string } }>();
          results.slice(0, 25).forEach((place) => {
            if (!place.geometry?.location) return;
            const details = getTransitDetails(place.types || [], place.name || '');
            const distance = google.maps.geometry?.spherical?.computeDistanceBetween
              ? google.maps.geometry.spherical.computeDistanceBetween(location, place.geometry.location)
              : haversineDistance(target.lat, target.lng, place.geometry.location.lat(), place.geometry.location.lng());

            const cleanName = (place.name || '').replace(/\s*\([^)]+\)$/, '').trim();
            const groupKey = `${cleanName}|${details.type}`;
            if (!uniqueStops.has(groupKey) || distance < uniqueStops.get(groupKey)!.distance) {
              uniqueStops.set(groupKey, { place, distance, typeDetails: details });
            }
          });

          const stops = Array.from(uniqueStops.values()).sort((a, b) => a.distance - b.distance).slice(0, 5);
          if (stops.length === 0) {
            resolve('');
            return;
          }

          let htmlString = '<b>Nearby Transit Stops:</b><ol style="margin-top: 3px; margin-bottom: 3px; padding-left: 22px; list-style: decimal;">';
          stops.forEach(({ place, distance, typeDetails }) => {
            const miles = distance * 0.000621371;
            const km = distance / 1000;
            const milesFormatted = miles < 1 ? miles.toFixed(2) : miles.toFixed(1);
            const kmFormatted = km < 1 ? km.toFixed(2) : km.toFixed(1);
            const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name || '')}&query_place_id=${place.place_id}`;
            const labelHtml = `<span class="transit-label ${typeDetails.labelClass}">${typeDetails.type}</span>`;

            htmlString += `
              <li style="margin-bottom:4px;">
                ${typeDetails.icon}
                <a href="${gmapsUrl}" target="_blank" rel="noreferrer" class="transit-stop-link">
                  ${labelHtml}
                  ${place.name || 'Transit Stop'}
                </a>
                <br><small style="padding-left: 20px; color: ${theme === 'dark' ? '#bbb' : '#555'};">(${milesFormatted} mi / ${kmFormatted} km away)</small>
              </li>
            `;
          });
          htmlString += '</ol>';
            resolve(htmlString);
          }
        );
      });

      transitCacheRef.current.set(cacheKey, html);
      return html;
    };

    const buildInfoWindowContent = async (student: ProcessedStudent) => {
      let contentString = `<div class="info-window-content">`;
      const targetUrl = student.collegeHomepageUrl && student.collegeHomepageUrl !== '#' ? student.collegeHomepageUrl : '#';
      const openInNewTab = targetUrl !== '#' ? 'target="_blank" rel="noreferrer"' : '';

      const badges = createHonoraryIcons(student.honoraries);
      const collegeTypeChipClasses: Record<string, string> = {
        'Ivy League': 'chip-ivy',
        SUNY: 'chip-suny',
        CUNY: 'chip-cuny',
        'Purdue University System': 'chip-purdue',
      };

      if (student.collegeImageUrl && student.collegeImageUrl !== 'x' && !student.collegeImageUrl.toLowerCase().includes('placeholder')) {
        contentString += `<a href="${targetUrl}" ${openInNewTab}><img src="${student.collegeImageUrl}" alt="${student.collegeName} logo/photo" style="max-width: 180px; max-height: 120px; display: block; margin: 0 auto 10px auto; border-radius: 6px; object-fit: contain;"></a>`;
      }
      if (targetUrl !== '#') {
        contentString += `<b><a href="${targetUrl}" ${openInNewTab}>${student.collegeName}</a></b>`;
      } else {
        contentString += `<b>${student.collegeName}</b>`;
      }

      const campusType = student.isCampusPublic ? 'Public' : 'Private';
      const focusLabel = formatLocationFocus(student.locationFocus);
      const typeParts: string[] = [];
      const typeClass = collegeTypeChipClasses[student.collegeType] || 'chip-generic-type';
      if (student.collegeType !== 'Other Public' && student.collegeType !== 'Other Private') {
        typeParts.push(renderChip(student.collegeType, typeClass));
      }
      const campusClass = campusType === 'Public' ? 'chip-public' : 'chip-private';
      typeParts.push(renderChip(campusType, campusClass));
      const focusClass = locationFocusChipClasses[student.locationFocus] || 'muted';
      typeParts.push(renderChip(focusLabel, focusClass));
      contentString += `<div style="margin-top: 4px; line-height: 1.6;">`;
      contentString += `<div><b>Type:</b> ${typeParts.join(' ')}</div>`;
      if (student.lat !== 0 || student.lng !== 0) {
        contentString += `<div><a href="https://www.google.com/maps/dir/?api=1&destination=${student.lat},${student.lng}" target="_blank" rel="noreferrer">Get Directions</a></div>`;
      }
      contentString += `</div>`;

      const timeDetails = await fetchCollegeTimeDetails(student);
      if (timeDetails) contentString += `<hr style="margin: 5px 0;">${buildTimeSection(student, timeDetails, timeFormatRef.current)}`;

      const weatherHtml = await fetchCollegeWeatherHTML(student);
      if (weatherHtml) contentString += `<hr style="margin: 5px 0;">${weatherHtml}`;

      contentString += `<hr style="margin: 5px 0;">`;
      contentString += buildStudentsHtml(student);

      const transitHtml = await fetchNearbyTransitStopsHTML(student);
      if (transitHtml) contentString += `<hr style="margin: 5px 0;">${transitHtml}`;

      contentString += `</div>`;
      return contentString;
    };

    const buildNestmInfoContent = async (detail: NestmInfoDetail) => {
      const {
        coords,
        name = 'NEST+m',
        homepageUrl = 'https://nestmk12.net/',
        imageUrl = '/logos/NEST+m_Logo.png',
        typeLabel = 'Public K-12 School',
        locationFocus = 'InCityNYC',
      } = detail;

      let contentString = `<div class="info-window-content">`;
      if (imageUrl) {
        const openInNewTab = homepageUrl ? 'target="_blank" rel="noreferrer"' : '';
        const wrapStart = homepageUrl ? `<a href="${homepageUrl}" ${openInNewTab}>` : '';
        const wrapEnd = homepageUrl ? '</a>' : '';
        contentString += `${wrapStart}<img src="${imageUrl}" alt="${name} Logo" style="max-width: 180px; max-height: 120px; display: block; margin: 0 auto 10px auto; border-radius: 6px; object-fit: contain;">${wrapEnd}`;
      }

      if (homepageUrl) {
        contentString += `<b><a href="${homepageUrl}" target="_blank" rel="noreferrer">${name}</a></b>`;
      } else {
        contentString += `<b>${name}</b>`;
      }

      const chips: string[] = [];
      chips.push(renderChip(typeLabel, 'chip-public'));
      const focusClass = locationFocusChipClasses[locationFocus] || 'muted';
      const focusLabel = formatLocationFocus(locationFocus);
      chips.push(renderChip(focusLabel === 'NYC' ? 'NYC' : focusLabel, focusClass));
      contentString += `<div style="margin-top: 4px; line-height: 1.6;">`;
      contentString += `<div><b>Type:</b> ${chips.join(' ')}</div>`;
      contentString += `<div><a href="https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}" target="_blank" rel="noreferrer">Get Directions</a></div>`;
      contentString += `</div>`;

      const timeDetails = await fetchCollegeTimeDetails(coords, `${name} Time`);
      if (timeDetails) contentString += `<hr style="margin: 5px 0;">${buildTimeSection(coords, timeDetails, timeFormatRef.current, timeDetails.label)}`;

      const weatherHtml = await fetchCollegeWeatherHTML(coords);
      if (weatherHtml) contentString += `<hr style="margin: 5px 0;">${weatherHtml}`;

      const transitHtml = await fetchNearbyTransitStopsHTML({ ...coords, locationFocus });
      if (transitHtml) contentString += `<hr style="margin: 5px 0;">${transitHtml}`;

      contentString += `</div>`;
      return contentString;
    };

    const openStudentInfo = async (
      student: ProcessedStudent,
      marker: any | null,
      positionOverride?: google.maps.LatLng | { lat: number; lng: number }
    ) => {
      if (!infowindowRef.current) return;
      lastInfoWindowStudentIdRef.current = student.id;

      const position =
        positionOverride ||
        marker?.getPosition?.() ||
        (student.lat && student.lng ? new google.maps.LatLng(student.lat, student.lng) : null);

      const html = await buildInfoWindowContent(student);
      if (infowindowRef.current && lastInfoWindowStudentIdRef.current === student.id) {
        infowindowRef.current.setContent(html);
        if (position) {
          infowindowRef.current.setPosition(position);
        }
        if (marker) {
          infowindowRef.current.open({ map, anchor: marker });
        } else if (position) {
          infowindowRef.current.open({ map, position });
        } else {
          infowindowRef.current.open(map);
        }
        wireTimeDropdown(student);
      }
    };

    // Scatter overlapping coordinates so markers don't perfectly overlap
    const assignedCoordinatesCount: Record<string, number> = {};

    students.forEach((student) => {
        if (student.lat === 0 && student.lng === 0) return;
        if (student.collegeName === "Undecided") return; 

        const color = GRAD_CLASS_COLORS[student.gradClass] || "#cccccc";

        let lat = student.lat;
        let lng = student.lng;
        const coordKey = `${student.lat},${student.lng}`;
        if (student.lat !== 0 || student.lng !== 0) {
          if (assignedCoordinatesCount[coordKey]) {
            const count = assignedCoordinatesCount[coordKey];
            const offsetMagnitude = 0.00002 * Math.sqrt(count);
            const angleIncrement = Math.PI / 3;
            const angle = count * angleIncrement;
            lat += offsetMagnitude * Math.cos(angle);
            lng += offsetMagnitude * Math.sin(angle);
            assignedCoordinatesCount[coordKey] = count + 1;
          } else {
            assignedCoordinatesCount[coordKey] = 1;
          }
        }
        
        const marker = new google.maps.Marker({
            position: { lat, lng },
            title: `${student.seniorName} -> ${student.collegeName}`,
            icon: buildIcon(color)
        });

        marker.addListener("click", () => {
             // Open InfoWindow
             openStudentInfo(student, marker);
             // Trigger sidebar focus + popup sync
             window.dispatchEvent(new CustomEvent('focus-student-from-map', { detail: { id: student.id } }));
             setActiveHoverId(student.id);
        });

        marker.addListener("mouseover", () => {
           setActiveHoverId(student.id);
        });

        marker.addListener("mouseout", () => {
           setActiveHoverId(null);
        });

        newMarkers.push(marker);
        markersRef.current[student.id] = { marker, color };
    });

    clustererRef.current.addMarkers(newMarkers);
    const durationMs = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - buildStart;
    debugLog('Added markers to clusterer', {
      added: newMarkers.length,
      clusterCount: clustererRef.current.getMarkers?.().length,
      durationMs: Math.round(durationMs),
    });

    const handleOpenNestmInfo = (ev: Event) => {
      const { detail } = ev as CustomEvent<NestmInfoDetail>;
      if (!detail || !detail.marker || !infowindowRef.current || !detail.coords) return;
      lastInfoWindowStudentIdRef.current = null;
      infowindowRef.current.close();
      infowindowRef.current.setContent(
        `<div class="info-window-content"><b>${detail.name || 'NEST+m'}</b><div style="margin-top:4px;">Loading details...</div></div>`
      );
      infowindowRef.current.open(map, detail.marker);

      buildNestmInfoContent(detail).then((html) => {
        if (infowindowRef.current) {
          infowindowRef.current.setContent(html);
          infowindowRef.current.open(map, detail.marker);
          wireTimeDropdown(detail.coords);
        }
      });
    };

    const handleCenterEvent = (e: CustomEvent<{ id: number; lat?: number; lng?: number }>) => {
      const targetStudent = students.find((s) => s.id === e.detail.id);
      if (!targetStudent) return;

      const target = markersRef.current[e.detail.id];
      const positionExplicit =
        e.detail.lat && e.detail.lng ? new google.maps.LatLng(e.detail.lat, e.detail.lng) : null;
      const position =
        positionExplicit ||
        target?.marker?.getPosition?.() ||
        (targetStudent.lat && targetStudent.lng
          ? new google.maps.LatLng(targetStudent.lat, targetStudent.lng)
          : null);

      if (map && position) {
        map.panTo(position);
        const desiredZoom = 14;
        map.setZoom(desiredZoom);
      }

      if (target) {
        openStudentInfo(targetStudent, target.marker, position);
      } else if (position && typeof google !== 'undefined') {
        const tempMarker = new google.maps.Marker({ position, map });
        openStudentInfo(targetStudent, tempMarker, position);
        setTimeout(() => tempMarker.setMap(null), 600);
      }

      debugLog('center-student-marker event', {
        id: e.detail.id,
        hadMarker: !!target,
        usedExplicitPosition: !!positionExplicit,
      });

      setActiveHoverId(e.detail.id);
    };

    window.addEventListener('center-student-marker', handleCenterEvent as EventListener);
    window.addEventListener('open-nestm-info', handleOpenNestmInfo as EventListener);
    return () => {
      window.removeEventListener('center-student-marker', handleCenterEvent as EventListener);
      window.removeEventListener('open-nestm-info', handleOpenNestmInfo as EventListener);
    };

  }, [map, students, theme, setActiveHoverId]);

  return null;
}
