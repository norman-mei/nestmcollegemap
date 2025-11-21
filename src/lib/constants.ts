export const MAP_ID_DARK = '27f65917b8e0eec9e9450357';
export const MAP_ID_LIGHT = '27f65917b8e0eec92a95d812';

// Basic dark style fallback so map can switch themes without requiring map IDs
export const MAP_STYLE_DARK = [
  { elementType: "geometry", stylers: [{ color: "#1f2937" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1f2937" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#9ca3af" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d1d5db" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d1d5db" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#374151" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca3af" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#4b5563" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#111827" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e5e7eb" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2c3340" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0f172a" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#60a5fa" }]
  }
];

export const GRAD_CLASS_COLORS: Record<string, string> = {
  "'21": "#00FFFF", 
  "'22": "#FF0000", 
  "'23": "#99CC00", 
  "'24": "#FFBB33", 
  "'25": "#007FFF",
  "'26": "#FF69B4"
};

export const PREDEFINED_MAJOR_AREAS = [
  "Arts/Design",
  "Business/Economics",
  "Communications",
  "Computer Science",
  "Education",
  "Engineering",
  "Health Sciences",
  "Humanities",
  "Humanities/Social Sciences",
  "IT",
  "Journalism",
  "Life Sciences",
  "Mathematics",
  "Physical Sciences",
  "Social Sciences",
  "Statistics",
  "STEM",
  "Other",
  "Undecided/Other",
  "Unknown"
];

export const NYC_BOUNDS = { north: 40.92, south: 40.47, west: -74.26, east: -73.70 };
