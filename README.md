# NEST+m College Map (Next.js)

Interactive map of NEST+m seniors (classes '21-'26) and their college destinations. Built with Next.js, Google Maps, Tailwind CSS, and Chart.js.

## Features
- Google Maps view with custom clusters, dark/light themes, satellite toggle, transit overlay, My Location, and a quick jump to the NEST+m campus.
- Rich marker info: student list per college, majors, class colors, honoraries, local time zone toggle (12/24 hr), and optional live weather.
- Sidebar filters for class year, major area, region/state, search, hide/show toggles, and class Instagram shortcuts; preferences persist to local storage.
- Student list and gallery modes with sorting and visibility controls; map and photo popups stay in sync.
- Statistics and trend charts (majors, regions, top colleges), plus in-app tutorial, FAQ, and update log modals.

## Local Setup
Prereqs: Node.js 18+ and npm.

1) Install dependencies  
`npm install`

2) Create `.env.local` with your API keys:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_key   # optional; enables weather in marker popups
```

3) Start the dev server  
`npm run dev`

Other scripts: `npm run lint` and `npm run build && npm start`.

## Data Updates
- Student records live in `src/data/students.json` (name, classYear, college, major, optional linkedin/instagram/github, congratsCaption).
- Colleges are defined in `src/data/colleges.ts`; add a new entry with `lat`, `lng`, `stateOrCountry`, `imageUrl`, and `homepageUrl` for new schools.
- Senior photos are loaded from `public/<gradYear>/<first_or_full_name>.jpg|png` (filenames are normalized to lowercase, spaces -> underscores, punctuation stripped; duplicates in a class fall back to full name).
- Majors are mapped to areas in `src/data/majors.ts`; adjust there if you introduce a new category.

## Stack
Next.js 16, React 19, Tailwind CSS, @vis.gl/react-google-maps, @googlemaps/markerclusterer, Chart.js with react-chartjs-2.

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
