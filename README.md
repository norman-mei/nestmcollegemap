# NEST+m Senior College Destinations Map 🦅
Interactive Next.js app that pairs a Google Maps view with live filters, charts, and a photo-forward student directory so anyone can explore where NEST+m seniors (classes '21–'26) are headed.

## ✨ Features
| Feature                      | Description                                                                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 🗺️ **Interactive Map**      | Clustered markers per college with student rollups, class colors, honoraries, quick recenter to campus, satellite/transit layers, and My Location. |
| 🎛️ **Powerful Filters**     | Filter by graduating class, region/state, major area, or geographic focus; hide individual students/colleges; preferences persist to local storage. |
| 🔍 **Search & Autocomplete** | Type-ahead suggestions for students, colleges, and majors with keyboard navigation and instant filtering.                                       |
| 🖼️ **List & Gallery Views**  | Toggle between dense list and gallery cards; student visibility and map/photo popups stay in sync.                                              |
| 📊 **Trend Dashboards**      | Year-over-year charts for major popularity, geographic distribution, and top-attended colleges (pannable/zoomable).                              |
| 💡 **Interactive Tutorial**  | Guided tour plus FAQ and update log modals to onboard new viewers.                                                                              |
| ⌨️ **Keyboard Navigation**   | Navigate the list with ↑/↓, jump photos with ←/→ when zoomed, close any popup with Esc.                                                         |
| 🌙 **Light/Dark Mode**       | One-click theme toggle that also re-styles the map.                                                                                             |
| 📱 **Responsive Layout**     | Resizable sidebar on desktop and a collapsible layout for mobile.                                                                              |

## 🚀 Quick Start
Prerequisites: Node.js 18+ and npm.

1) Install dependencies  
`npm install`

2) Create `.env.local` with your keys:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_key   # optional, enables live weather in popups
```

3) Run the dev server  
`npm run dev`

Other scripts: `npm run lint`, `npm run build`, and `npm start` (after build).

## 📁 Project Structure
```
src/
  app/             # Next.js App Router pages/layout
  components/      # Map, sidebar, charts, UI modals, and shared primitives
  contexts/        # Data, filter, theme, and UI providers
  data/            # students.json roster, colleges/majors helpers
  lib/             # types, constants, and utilities
public/            # Favicons, logos, and senior photos
```

## ✍️ Customizing Data
| Task                     | File / Path                | Instructions                                                                                                      |
| ------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Edit students**        | `src/data/students.json`   | Add/update entries (`name`, `classYear`, `college`, `major`, optional socials, `congratsCaption`, `honoraries`). |
| **Edit colleges**        | `src/data/colleges.ts`     | Add an object with `lat`, `lng`, `stateOrCountry`, `imageUrl`, `homepageUrl`, and `type` metadata.               |
| **Adjust major areas**   | `src/data/majors.ts`       | Map specific majors to broader areas; add a new category if needed.                                               |
| **Photo assets**         | `public/<gradYear>/`       | Place JPG/PNG files; filenames are normalized to lowercase with spaces as underscores.                            |
| **Class colors/constants** | `src/lib/constants.ts`     | Update color tokens or predefined filters (e.g., major areas).                                                    |

## 🛠️ Tech Stack
Next.js 16, React 19, TypeScript, Tailwind CSS, @vis.gl/react-google-maps, @googlemaps/markerclusterer, Chart.js + react-chartjs-2.

## 🌍 Deployment
Static-friendly; deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Be sure to set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (and optional `NEXT_PUBLIC_OPENWEATHER_API_KEY`) in the hosting environment.

## 🤝 Contributing
Pull requests and issues are welcome. Open an issue first for major changes to discuss direction before implementation.

## 📝 License
MIT License © 2025 Norman Mei
