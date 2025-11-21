(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const saved = localStorage.getItem('isDarkMode');
            if (saved === 'true') {
                setTheme('dark');
                document.documentElement.classList.add('dark');
            }
        }
    }["ThemeProvider.useEffect"], []);
    const toggleTheme = ()=>{
        setTheme((prev)=>{
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('isDarkMode', String(next === 'dark'));
            if (next === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ThemeContext.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "Z8UCD9KudyQA62DCQ9e5cf9+m5k=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/colleges.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colleges",
    ()=>colleges
]);
const TYPE_IVY_LEAGUE = "Ivy League";
const TYPE_SUNY = "SUNY";
const TYPE_CUNY = "CUNY";
const TYPE_PURDUE = "Purdue University System";
const TYPE_OTHER_PUBLIC = "Other Public";
const TYPE_OTHER_PRIVATE = "Other Private";
const TYPE_UNDECIDED = "Undecided";
const colleges = {
    "Cornell University": {
        name: "Cornell University",
        lat: 42.454323,
        lng: -76.475266,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://images.seeklogo.com/logo-png/19/2/cornell-university-logo-png_seeklogo-190243.png",
        homepageUrl: "https://www.cornell.edu/",
        stateOrCountry: "NY"
    },
    "Princeton University": {
        name: "Princeton University",
        lat: 40.343899,
        lng: -74.660049,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png",
        homepageUrl: "https://www.princeton.edu/",
        stateOrCountry: "NJ"
    },
    "University of Pennsylvania": {
        name: "University of Pennsylvania",
        lat: 39.952305,
        lng: -75.193703,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_Shield_RGB-2.png?h=3c287ac3&itok=HgG1DNc-",
        homepageUrl: "https://www.upenn.edu/",
        stateOrCountry: "PA"
    },
    "Brown University": {
        name: "Brown University",
        lat: 41.826820,
        lng: -71.402931,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://thebruinclub.wordpress.com/wp-content/uploads/2013/11/brown_logo.gif",
        homepageUrl: "https://www.brown.edu/",
        stateOrCountry: "RI"
    },
    "Yale University": {
        name: "Yale University",
        lat: 41.316307,
        lng: -72.922585,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/500px-Yale_University_logo.svg.png",
        homepageUrl: "https://www.yale.edu/",
        stateOrCountry: "CT"
    },
    "Harvard University": {
        name: "Harvard University",
        lat: 42.374443,
        lng: -71.116943,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
        homepageUrl: "https://www.harvard.edu/",
        stateOrCountry: "MA"
    },
    "Dartmouth College": {
        name: "Dartmouth College",
        lat: 43.704540,
        lng: -72.288986,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://logolook.net/wp-content/uploads/2024/04/Dartmouth-College-Logo.png",
        homepageUrl: "https://home.dartmouth.edu/",
        stateOrCountry: "NH"
    },
    "Columbia University": {
        name: "Columbia University",
        lat: 40.807384,
        lng: -73.963036,
        type: TYPE_IVY_LEAGUE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Columbia_coat_of_arms_no_crest.svg/640px-Columbia_coat_of_arms_no_crest.svg.png",
        homepageUrl: "https://www.columbia.edu/",
        stateOrCountry: "NY"
    },
    "Binghamton University": {
        name: "Binghamton University",
        lat: 42.0894,
        lng: -75.9695,
        type: TYPE_SUNY,
        imageUrl: "https://pbs.twimg.com/profile_images/601475591918002177/qeftl81n_400x400.png",
        homepageUrl: "https://www.binghamton.edu/",
        stateOrCountry: "NY"
    },
    "University at Albany": {
        name: "University at Albany",
        lat: 42.6842,
        lng: -73.8261,
        type: TYPE_SUNY,
        imageUrl: "https://www.albany.edu/sites/default/files/UAlbanyMark_F_S01A_HEX_Gold_Black_300ppi_.jpg",
        homepageUrl: "https://www.albany.edu/",
        stateOrCountry: "NY"
    },
    "Stony Brook University": {
        name: "Stony Brook University",
        lat: 40.9041,
        lng: -73.1238,
        type: TYPE_SUNY,
        imageUrl: "https://www.master-of-finance.org/wp-content/uploads/2018/07/stony-brook-university-300x250.png",
        homepageUrl: "https://www.stonybrook.edu/",
        stateOrCountry: "NY"
    },
    "SUNY New Paltz": {
        name: "SUNY New Paltz",
        lat: 41.7386,
        lng: -74.0852,
        type: TYPE_SUNY,
        imageUrl: "https://www.newpaltz.edu/media/ocm/toolkit/the-new-paltz-brand/vdp_pg13-2415x873.jpg",
        homepageUrl: "https://www.newpaltz.edu/",
        stateOrCountry: "NY"
    },
    "Farmingdale State College": {
        name: "Farmingdale State College",
        lat: 40.7529,
        lng: -73.4267,
        type: TYPE_SUNY,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/SUNY_Farmingdale_seal.svg/1200px-SUNY_Farmingdale_seal.svg.png",
        homepageUrl: "https://www.farmingdale.edu/",
        stateOrCountry: "NY"
    },
    "Fashion Institute of Technology": {
        name: "Fashion Institute of Technology",
        lat: 40.7467,
        lng: -73.9942,
        type: TYPE_SUNY,
        imageUrl: "https://www.fitnyc.edu/images/cer/fit-master-brand-wordmark-2-line.jpg",
        homepageUrl: "https://www.fitnyc.edu/",
        stateOrCountry: "NY"
    },
    "University at Buffalo": {
        name: "University at Buffalo",
        lat: 42.9985,
        lng: -78.7892,
        type: TYPE_SUNY,
        imageUrl: "https://images.seeklogo.com/logo-png/30/2/university-at-buffalo-logo-png_seeklogo-307211.png",
        homepageUrl: "https://www.buffalo.edu/",
        stateOrCountry: "NY"
    },
    "Borough of Manhattan Community College": {
        name: "Borough of Manhattan Community College",
        lat: 40.7179,
        lng: -74.0120,
        type: TYPE_CUNY,
        imageUrl: "https://bmccprodstroac.blob.core.windows.net/uploads/2022/01/logo-2line-300x195.jpg",
        homepageUrl: "https://www.bmcc.cuny.edu/",
        stateOrCountry: "NY"
    },
    "City College of New York": {
        name: "City College of New York",
        lat: 40.8194,
        lng: -73.9500,
        type: TYPE_CUNY,
        imageUrl: "https://www.ccny.cuny.edu/sites/default/files/2022-06/RGB_CNNY_Horizontal_Version_P2665C.png",
        homepageUrl: "https://www.ccny.cuny.edu/",
        stateOrCountry: "NY"
    },
    "Baruch College": {
        name: "Baruch College",
        lat: 40.7404,
        lng: -73.9832,
        type: TYPE_CUNY,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeFAV6ipn_I_ijO_HY8NtztoDY3XTt4oRPA&s",
        homepageUrl: "https://www.baruch.cuny.edu/",
        stateOrCountry: "NY"
    },
    "Hunter College": {
        name: "Hunter College",
        lat: 40.7678,
        lng: -73.9645,
        type: TYPE_CUNY,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Hunter_college_logo.png",
        homepageUrl: "https://hunter.cuny.edu/",
        stateOrCountry: "NY"
    },
    "College of Staten Island": {
        name: "College of Staten Island",
        lat: 40.6022,
        lng: -74.1504,
        type: TYPE_CUNY,
        imageUrl: "https://academicworks.cuny.edu/assets/md5images/514e3c424d39651db69ee26172128457.jpg",
        homepageUrl: "https://www.csi.cuny.edu/",
        stateOrCountry: "NY"
    },
    "Brooklyn College": {
        name: "Brooklyn College",
        lat: 40.631268001943816,
        lng: -73.95204807700672,
        type: TYPE_CUNY,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Brooklyn_College_Logo.svg/2560px-Brooklyn_College_Logo.svg.png",
        homepageUrl: "https://www.brooklyn.cuny.edu/",
        stateOrCountry: "NY"
    },
    "Hostos Community College": {
        name: "Hostos Community College",
        lat: 40.817428681718546,
        lng: -73.92720183924145,
        type: TYPE_CUNY,
        imageUrl: "https://www.hostos.cuny.edu/getmedia/6381bdb0-c999-42b2-9baf-f5e7d62b2c64/Brand-Asset_Hostos-Pri-Vertical_2.aspx;.gif;;?width=250&height=144",
        homepageUrl: "https://www.hostos.cuny.edu/",
        stateOrCountry: "NY"
    },
    "Queens College": {
        name: "Queens College",
        lat: 40.73678658620217,
        lng: -73.82015856564789,
        type: TYPE_CUNY,
        imageUrl: "https://micefa.org/wp-content/uploads/2017/09/Queens_College_Logo-300x152.png",
        homepageUrl: "https://www.qc.cuny.edu/",
        stateOrCountry: "NY"
    },
    "Rensselaer Polytechnic Institute": {
        name: "Rensselaer Polytechnic Institute",
        lat: 42.72988889585694,
        lng: -73.67906006172221,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Rensselear_poly_inst_seal.png",
        homepageUrl: "https://www.rpi.edu/",
        stateOrCountry: "NY"
    },
    "University of Edinburgh": {
        name: "University of Edinburgh",
        lat: 55.9445,
        lng: -3.1892,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/University_of_Edinburgh_ceremonial_roundel.svg/250px-University_of_Edinburgh_ceremonial_roundel.svg.png",
        homepageUrl: "https://www.ed.ac.uk/",
        stateOrCountry: "GBR"
    },
    "Oberlin College": {
        name: "Oberlin College",
        lat: 41.29600657516989,
        lng: -82.221110452876,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Formal_Seal_of_Oberlin_College%2C_Oberlin%2C_OH%2C_USA.svg/1200px-Formal_Seal_of_Oberlin_College%2C_Oberlin%2C_OH%2C_USA.svg.png",
        homepageUrl: "https://www.oberlin.edu/",
        stateOrCountry: "OH"
    },
    "Middlebury College": {
        name: "Middlebury College",
        lat: 44.00813840918396,
        lng: -73.17606275693102,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.middlebury.edu/sites/default/files/styles/1136x639/public/2021-09/mdl_master_left_blue.png?fv=paBhF2wq&itok=T-evX_gn",
        homepageUrl: "https://www.middlebury.edu/",
        stateOrCountry: "VT"
    },
    "University of California, Los Angeles": {
        name: "University of California, Los Angeles",
        lat: 34.0689,
        lng: -118.4452,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://brand.ucla.edu/images/logos-and-marks/campus-logo.jpg",
        homepageUrl: "https://www.ucla.edu/",
        stateOrCountry: "CA"
    },
    "University of Southern California": {
        name: "University of Southern California",
        lat: 34.0224,
        lng: -118.2851,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://identity.usc.edu/wp-content/uploads/2022/09/PrimaryMonogram_0921.png",
        homepageUrl: "https://www.usc.edu/",
        stateOrCountry: "CA"
    },
    "Washington University in St. Louis": {
        name: "Washington University in St. Louis",
        lat: 38.6487,
        lng: -90.3048,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oL6U7oIn12tHuQSAoBj657KrWLVTEGa30w&s",
        homepageUrl: "https://wustl.edu/",
        stateOrCountry: "MO"
    },
    "Babson College": {
        name: "Babson College",
        lat: 42.2990,
        lng: -71.2648,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Babson-logo.png",
        homepageUrl: "https://www.babson.edu/",
        stateOrCountry: "MA"
    },
    "Fordham University": {
        name: "Fordham University",
        lat: 40.8613,
        lng: -73.8862,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.fordham.edu/media/review/content-assets/migrated/images/Athletic_Logo_Primary_Letter_Mark_1.jpg",
        homepageUrl: "https://www.fordham.edu/",
        stateOrCountry: "NY"
    },
    "University of Michigan": {
        name: "University of Michigan",
        lat: 42.27716082082987,
        lng: -83.73829293087273,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/University_of_Michigan_Logo.png",
        homepageUrl: "https://umich.edu/",
        stateOrCountry: "MI"
    },
    "Ithaca College": {
        name: "Ithaca College",
        lat: 42.4220,
        lng: -76.4944,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://logowik.com/content/uploads/images/ithaca-college8996.jpg",
        homepageUrl: "https://www.ithaca.edu/",
        stateOrCountry: "NY"
    },
    "Pratt Institute": {
        name: "Pratt Institute",
        lat: 40.6910,
        lng: -73.9631,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.pratt.edu/wp-content/themes/pratt/static/img/og.png",
        homepageUrl: "https://www.pratt.edu/",
        stateOrCountry: "NY"
    },
    "Towson University": {
        name: "Towson University",
        lat: 39.3941,
        lng: -76.6100,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://www.towson.edu/brand/images/brand-brandmarks-horiz-sq.jpg",
        homepageUrl: "https://www.towson.edu/",
        stateOrCountry: "MD"
    },
    "Emerson College": {
        name: "Emerson College",
        lat: 42.352113683371854,
        lng: -71.06584657503319,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://brand.emerson.edu/wp-content/uploads/sites/11/2017/04/Emerson-PrimaryLogo-Purple-600px.png",
        homepageUrl: "https://emerson.edu/",
        stateOrCountry: "MA"
    },
    "Northeastern University": {
        name: "Northeastern University",
        lat: 42.3398,
        lng: -71.0892,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8Gdl0Gui9xl5q_D4acxRtSg-k4HVkE5dYQ&s",
        homepageUrl: "https://www.northeastern.edu/",
        stateOrCountry: "MA"
    },
    "Tufts University": {
        name: "Tufts University",
        lat: 42.4057,
        lng: -71.1186,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tufts_University_wordmark.svg/2560px-Tufts_University_wordmark.svg.png",
        homepageUrl: "https://www.tufts.edu/",
        stateOrCountry: "MA"
    },
    "Northwestern University": {
        name: "Northwestern University",
        lat: 42.0565,
        lng: -87.6753,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.northwestern.edu/brand/images/wordmark/guideline-sm4.gif",
        homepageUrl: "https://www.northwestern.edu/",
        stateOrCountry: "IL"
    },
    "McGill University": {
        name: "McGill University",
        lat: 45.5048,
        lng: -73.5772,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://www.designyourway.net/blog/wp-content/uploads/2024/04/the-meaning-behind-the-mcGill-university-logo.jpg",
        homepageUrl: "https://www.mcgill.ca/",
        stateOrCountry: "CAN"
    },
    "Massachusetts Institute of Technology": {
        name: "Massachusetts Institute of Technology",
        lat: 42.3601,
        lng: -71.0942,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png",
        homepageUrl: "https://web.mit.edu/",
        stateOrCountry: "MA"
    },
    "Wesleyan University": {
        name: "Wesleyan University",
        lat: 41.5557,
        lng: -72.6576,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wesleyan_University.svg/1200px-Wesleyan_University.svg.png",
        homepageUrl: "https://www.wesleyan.edu/",
        stateOrCountry: "CT"
    },
    "Vassar College": {
        name: "Vassar College",
        lat: 41.6870,
        lng: -73.8969,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Vassar_College_Seal.svg",
        homepageUrl: "https://www.vassar.edu/",
        stateOrCountry: "NY"
    },
    "Williams College": {
        name: "Williams College",
        lat: 42.7133,
        lng: -73.2032,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://organizationalperformancegroup.com/wp-content/uploads/2023/11/Williams-College-logo.png",
        homepageUrl: "https://www.williams.edu/",
        stateOrCountry: "MA"
    },
    "Smith College": {
        name: "Smith College",
        lat: 42.3176,
        lng: -72.6370,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Smith_College_logo_%282000%29%2C_color%2C_stacked.svg/693px-Smith_College_logo_%282000%29%2C_color%2C_stacked.svg.png",
        homepageUrl: "https://www.smith.edu/",
        stateOrCountry: "MA"
    },
    "Colgate University": {
        name: "Colgate University",
        lat: 42.8172,
        lng: -75.5370,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.colgate.edu/sites/default/files/2020-10/Col_Athletics_C_RGB_500_0.png",
        homepageUrl: "https://www.colgate.edu/",
        stateOrCountry: "NY"
    },
    "New York University": {
        name: "New York University",
        lat: 40.7295,
        lng: -73.9965,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg",
        homepageUrl: "https://www.nyu.edu/",
        stateOrCountry: "NY"
    },
    "University of Vermont": {
        name: "University of Vermont",
        lat: 44.4774,
        lng: -73.1962,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Vermont_Catamounts_logo.svg/1200px-Vermont_Catamounts_logo.svg.png",
        homepageUrl: "https://www.uvm.edu/",
        stateOrCountry: "VT"
    },
    "Barnard College": {
        name: "Barnard College",
        lat: 40.8095,
        lng: -73.9640,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://barnardstore.com/cdn/shop/products/barnard-seal-blue.jpg?v=1580924558",
        homepageUrl: "https://barnard.edu/",
        stateOrCountry: "NY"
    },
    "Rochester Institute of Technology": {
        name: "Rochester Institute of Technology",
        lat: 43.0849,
        lng: -77.6744,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.rit.edu/brandportal/sites/rit.edu.brandportal/files/2022-10/RIT-00071A_RGB_whiteTM.jpg",
        homepageUrl: "https://www.rit.edu/",
        stateOrCountry: "NY"
    },
    "Georgetown University": {
        name: "Georgetown University",
        lat: 38.9076,
        lng: -77.0723,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.georgetown.edu/wp-content/uploads/2019/10/Georgetown_logo_blueRGB-300x210.jpg",
        homepageUrl: "https://www.georgetown.edu/",
        stateOrCountry: "DC"
    },
    "Boston University": {
        name: "Boston University",
        lat: 42.3505,
        lng: -71.1054,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Boston_University_Terriers_logo.svg/1200px-Boston_University_Terriers_logo.svg.png",
        homepageUrl: "https://www.bu.edu/",
        stateOrCountry: "MA"
    },
    "University of Colorado Boulder": {
        name: "University of Colorado Boulder",
        lat: 40.0076,
        lng: -105.2659,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://www.colorado.edu/brand/sites/default/files/styles/original_image_size/public/2024-12/lockup_center_0.png?itok=6qHN63TX",
        homepageUrl: "https://www.colorado.edu/",
        stateOrCountry: "CO"
    },
    "Bucknell University": {
        name: "Bucknell University",
        lat: 40.9547,
        lng: -76.8836,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Bucknell_Bison_logo.svg/1200px-Bucknell_Bison_logo.svg.png",
        homepageUrl: "https://www.bucknell.edu/",
        stateOrCountry: "PA"
    },
    "University of Wisconsin-Madison": {
        name: "University of Wisconsin-Madison",
        lat: 43.0766,
        lng: -89.4125,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://brand.wisc.edu/content/uploads/2023/09/vert-w-crest-logo-web-digital-color.png",
        homepageUrl: "https://www.wisc.edu/",
        stateOrCountry: "WI"
    },
    "University of Massachusetts Amherst": {
        name: "University of Massachusetts Amherst",
        lat: 42.3862,
        lng: -72.5261,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png",
        homepageUrl: "https://www.umass.edu/",
        stateOrCountry: "MA"
    },
    "Pennsylvania State University": {
        name: "Pennsylvania State University",
        lat: 40.7982,
        lng: -77.8599,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://brand.psu.edu/images/backgrounds/veritcal-1-mark_registered.png",
        homepageUrl: "https://www.psu.edu/",
        stateOrCountry: "PA"
    },
    "Florida State University": {
        name: "Florida State University",
        lat: 30.4414,
        lng: -84.2965,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MvcZLICQ3xHwuSAmLfq0vdf5Bq20ivlXXg&s",
        homepageUrl: "https://www.fsu.edu/",
        stateOrCountry: "FL"
    },
    "Johns Hopkins University": {
        name: "Johns Hopkins University",
        lat: 39.3299,
        lng: -76.6205,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://crystalpng.com/wp-content/uploads/2025/01/johns-hopkins-university-logo-in-circle.png",
        homepageUrl: "https://www.jhu.edu/",
        stateOrCountry: "MD"
    },
    "Syracuse University": {
        name: "Syracuse University",
        lat: 43.0392,
        lng: -76.1347,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://1000logos.net/wp-content/uploads/2022/02/Syracuse-Orange-Logo-2006.png",
        homepageUrl: "https://www.syracuse.edu/",
        stateOrCountry: "NY"
    },
    "American University": {
        name: "American University",
        lat: 38.9379,
        lng: -77.0893,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.american.edu/ucm/images/AU_stacked_logo.png",
        homepageUrl: "https://www.american.edu/",
        stateOrCountry: "DC"
    },
    "Howard University": {
        name: "Howard University",
        lat: 38.92344291674185,
        lng: -77.01977855792838,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://data.org/wp-content/uploads/2022/05/Howard-Logo.png",
        homepageUrl: "https://howard.edu/",
        stateOrCountry: "DC"
    },
    "Carleton College": {
        name: "Carleton College",
        lat: 44.4612,
        lng: -93.1536,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://cdn.carleton.edu/uploads/sites/158/2020/06/full-carleton-c-ray-symbol.png",
        homepageUrl: "https://www.carleton.edu/",
        stateOrCountry: "MN"
    },
    "The Cooper Union": {
        name: "The Cooper Union",
        lat: 40.7296,
        lng: -73.9907,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://studyarchitecture.com/wp-content/uploads/82_TheCooperUnion_icon_white.png",
        homepageUrl: "https://cooper.edu/",
        stateOrCountry: "NY"
    },
    "St. John's University": {
        name: "St. John's University",
        lat: 40.7218,
        lng: -73.7935,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://seeklogo.com/images/S/st-johns-university-logo-62DEF73135-seeklogo.com.png",
        homepageUrl: "https://www.stjohns.edu/",
        stateOrCountry: "NY"
    },
    "Connecticut College": {
        name: "Connecticut College",
        lat: 41.3786,
        lng: -72.1059,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Formal_Seal_of_Connecticut_College%2C_New_London%2C_CT%2C_USA.svg/1200px-Formal_Seal_of_Connecticut_College%2C_New_London%2C_CT%2C_USA.svg.png",
        homepageUrl: "https://www.conncoll.edu/",
        stateOrCountry: "CT"
    },
    "University of Virginia": {
        name: "University of Virginia",
        lat: 38.0336,
        lng: -78.5080,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://1000logos.net/wp-content/uploads/2022/07/University-of-Virginia-Logo.png",
        homepageUrl: "https://www.virginia.edu/",
        stateOrCountry: "VA"
    },
    "Wellesley College": {
        name: "Wellesley College",
        lat: 42.2934,
        lng: -71.3064,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Formal_Logo_of_Wellesley_College%2C_Wellesley%2C_MA%2C_USA.svg/2560px-Formal_Logo_of_Wellesley_College%2C_Wellesley%2C_MA%2C_USA.svg.png",
        homepageUrl: "https://www.wellesley.edu/",
        stateOrCountry: "MA"
    },
    "University of Rhode Island": {
        name: "University of Rhode Island",
        lat: 41.4900,
        lng: -71.5278,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/University_of_Rhode_Island_seal.svg/1200px-University_of_Rhode_Island_seal.svg.png",
        homepageUrl: "https://www.uri.edu/",
        stateOrCountry: "RI"
    },
    "Rutgers University": {
        name: "Rutgers University",
        lat: 40.5008,
        lng: -74.4474,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://1000logos.net/wp-content/uploads/2017/08/Logo-Rutgers-University.jpg",
        homepageUrl: "https://www.rutgers.edu/",
        stateOrCountry: "NJ"
    },
    "AMDA College of the Performing Arts": {
        name: "AMDA College of the Performing Arts",
        lat: 40.7705,
        lng: -73.9850,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://cdn.dancemedia.com/listings/31/kyzPkoIiximk56vFujMgQ6emkV91Iu2n0JEc93Bh.png",
        homepageUrl: "https://www.amda.edu/",
        stateOrCountry: "NY"
    },
    "University of Pittsburgh": {
        name: "University of Pittsburgh",
        lat: 40.444480064496155,
        lng: -79.96147622166838,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://www.brand.pitt.edu/sites/default/files/inline-images/clear_spacing_0.png",
        homepageUrl: "https://www.pitt.edu/",
        stateOrCountry: "PA"
    },
    "NYU Shanghai": {
        name: "NYU Shanghai",
        lat: 31.22586624513313,
        lng: 121.53413452615789,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/NYU_Shanghai_logo.svg/1200px-NYU_Shanghai_logo.svg.png",
        homepageUrl: "https://shanghai.nyu.edu/",
        stateOrCountry: "CHN"
    },
    "University of Arizona": {
        name: "University of Arizona",
        lat: 32.2319,
        lng: -110.9535,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://phoenixmed.arizona.edu/sites/default/files/campus/marcomm/brand/master-logo/1-ua-vertical/ua_stack_rgb_4.png",
        homepageUrl: "https://www.arizona.edu/",
        stateOrCountry: "AZ"
    },
    "Skidmore College": {
        name: "Skidmore College",
        lat: 43.09591225667546,
        lng: -73.7854101443904,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://collegeaim.org/wp-content/uploads/2021/09/Skidmore_Wordmark_Thick_Green.png",
        homepageUrl: "https://www.skidmore.edu/",
        stateOrCountry: "NY"
    },
    "Union College": {
        name: "Union College",
        lat: 42.8174,
        lng: -73.9298,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://images.squarespace-cdn.com/content/v1/540402efe4b014c74d2fd2fe/1614274310286-JEL8U4FSJGKHO090FXT3/Union+College.png",
        homepageUrl: "https://www.union.edu/",
        stateOrCountry: "NY"
    },
    "Temple University": {
        name: "Temple University",
        lat: 39.9813,
        lng: -75.1554,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://logos-world.net/wp-content/uploads/2023/03/Temple-University-Logo.png",
        homepageUrl: "https://www.temple.edu/",
        stateOrCountry: "PA"
    },
    "United States Naval Academy": {
        name: "United States Naval Academy",
        lat: 38.9828,
        lng: -76.4850,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_of_the_United_States_Naval_Academy.svg/1200px-Logo_of_the_United_States_Naval_Academy.svg.png",
        homepageUrl: "https://www.usna.edu/",
        stateOrCountry: "MD"
    },
    "Case Western Reserve University": {
        name: "Case Western Reserve University",
        lat: 41.5043,
        lng: -81.6084,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://case.edu/brand/sites/default/files/2023-05/Centered-Four-Line-Logo-on-Blue_0.jpeg",
        homepageUrl: "https://case.edu/",
        stateOrCountry: "OH"
    },
    "NYU London": {
        name: "NYU London",
        lat: 51.51328636811055,
        lng: -0.11473932462894088,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfc6Ni6I0QzsYKmqhB3yPBVywpPirBeVM9Q&s",
        homepageUrl: "https://www.nyu.edu/london.html",
        stateOrCountry: "GBR"
    },
    "University of California San Diego": {
        name: "University of California San Diego",
        lat: 32.8801,
        lng: -117.2340,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://content.sportslogos.net/logos/35/6819/full/uc_san_diego_tritons_logo_secondary_2002_sportslogosnet-9613.png",
        homepageUrl: "https://ucsd.edu/",
        stateOrCountry: "CA"
    },
    "Haverford College": {
        name: "Haverford College",
        lat: 40.0084,
        lng: -75.3060,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.interfolio.com/wp-content/uploads/Haverford_Logo.png",
        homepageUrl: "https://www.haverford.edu/",
        stateOrCountry: "PA"
    },
    "Pace University": {
        name: "Pace University",
        lat: 40.7111,
        lng: -74.0048,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Pace_University_Logo_2021.png",
        homepageUrl: "https://www.pace.edu/",
        stateOrCountry: "NY"
    },
    "George Washington University": {
        name: "George Washington University",
        lat: 38.8994,
        lng: -77.0489,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://communications.gwu.edu/sites/g/files/zaxdzs5371/files/2024-04/athletics-logo-examples-gw_0.jpg",
        homepageUrl: "https://www.gwu.edu/",
        stateOrCountry: "DC"
    },
    "University of Rochester": {
        name: "University of Rochester",
        lat: 43.1285,
        lng: -77.6275,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://1000logos.net/wp-content/uploads/2022/07/University-of-Rochester-Logo.png",
        homepageUrl: "https://www.rochester.edu/",
        stateOrCountry: "NY"
    },
    "Worcester Polytechnic Institute": {
        name: "Worcester Polytechnic Institute",
        lat: 42.2743,
        lng: -71.8076,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/WPI_logo.svg/1200px-WPI_logo.svg.png",
        homepageUrl: "https://www.wpi.edu/",
        stateOrCountry: "MA"
    },
    "Boston College": {
        name: "Boston College",
        lat: 42.3355,
        lng: -71.1685,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Boston_College_Eagles_logo.svg/1200px-Boston_College_Eagles_logo.svg.png",
        homepageUrl: "https://www.bc.edu/",
        stateOrCountry: "MA"
    },
    "Brandeis University": {
        name: "Brandeis University",
        lat: 42.3659,
        lng: -71.2580,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.brandeis.edu/brand/images/visual-identity.jpg",
        homepageUrl: "https://www.brandeis.edu/",
        stateOrCountry: "MA"
    },
    "Vanderbilt University": {
        name: "Vanderbilt University",
        lat: 36.1447,
        lng: -86.8027,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://cdn.vanderbilt.edu/vu-news/files/20230520091240/2022-Vanderbilt-University-wordmark.jpg",
        homepageUrl: "https://www.vanderbilt.edu/",
        stateOrCountry: "TN"
    },
    "Bard College": {
        name: "Bard College",
        lat: 42.0215,
        lng: -73.9107,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://slsvcoalition.org/wp-content/uploads/2021/06/Bard-College-scaled.jpeg",
        homepageUrl: "https://www.bard.edu/",
        stateOrCountry: "NY"
    },
    "Emory University": {
        name: "Emory University",
        lat: 33.7925,
        lng: -84.3240,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://1000logos.net/wp-content/uploads/2022/06/Emory-University-Logo.png",
        homepageUrl: "https://www.emory.edu/",
        stateOrCountry: "GA"
    },
    "Purdue University": {
        name: "Purdue University",
        lat: 40.4237,
        lng: -86.9212,
        type: TYPE_PURDUE,
        imageUrl: "https://engineering.purdue.edu/ECE/Communications/files/PU-V-Full-RGB.png",
        homepageUrl: "https://www.purdue.edu/",
        stateOrCountry: "IN"
    },
    "University of St Andrews": {
        name: "University of St Andrews",
        lat: 56.3410,
        lng: -2.7924,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpZWJM12MG8E5y6Lx6wTg8ZpYmXrGkznKiw&s",
        homepageUrl: "https://www.st-andrews.ac.uk/",
        stateOrCountry: "GBR"
    },
    "Indiana University Bloomington": {
        name: "Indiana University Bloomington",
        lat: 39.1653,
        lng: -86.5264,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://logos-world.net/wp-content/uploads/2022/01/Indiana-University-Logo.png",
        homepageUrl: "https://www.iu.edu/",
        stateOrCountry: "IN"
    },
    "University of Richmond": {
        name: "University of Richmond",
        lat: 37.5793,
        lng: -77.5353,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMzFe3klcIl1J_FhO02G6r1SBoecRkYhhkA&s",
        homepageUrl: "https://www.richmond.edu/",
        stateOrCountry: "VA"
    },
    "Lehigh University": {
        name: "Lehigh University",
        lat: 40.6073,
        lng: -75.3778,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://collegeaim.org/wp-content/uploads/2021/08/Lehigh-University-logo.png",
        homepageUrl: "https://www1.lehigh.edu/",
        stateOrCountry: "PA"
    },
    "University of Washington": {
        name: "University of Washington",
        lat: 47.6553,
        lng: -122.3035,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/University_of_Washington_seal.svg/1200px-University_of_Washington_seal.svg.png",
        homepageUrl: "https://www.washington.edu/",
        stateOrCountry: "WA"
    },
    "University of Maryland, College Park": {
        name: "University of Maryland, College Park",
        lat: 38.9869,
        lng: -76.9426,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://umd-brand.transforms.svdcdn.com/production/uploads/images/logos-formal-seal.jpg?w=1801&h=1801&auto=compress%2Cformat&fit=crop&dm=1651267392&s=81a14f930f7888983f0f8bc10146c0b2",
        homepageUrl: "https://www.umd.edu/",
        stateOrCountry: "MD"
    },
    "Hamilton College": {
        name: "Hamilton College",
        lat: 43.0509,
        lng: -75.4065,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://s3.amazonaws.com/mediacdn.hamilton.edu/images/3:2/300/logohamiltonlogocolorjpgjpg.jpg",
        homepageUrl: "https://www.hamilton.edu/",
        stateOrCountry: "NY"
    },
    "Fairfield University": {
        name: "Fairfield University",
        lat: 41.159862537939865,
        lng: -73.25779806570878,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://1000logos.net/wp-content/uploads/2021/06/Fairfield-Stags-logo.png",
        homepageUrl: "https://www.fairfield.edu/",
        stateOrCountry: "CT"
    },
    "University of Miami": {
        name: "University of Miami",
        lat: 25.7198,
        lng: -80.2790,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://logos-world.net/wp-content/uploads/2022/02/University-Of-Miami-Symbol.png",
        homepageUrl: "https://welcome.miami.edu/",
        stateOrCountry: "FL"
    },
    "Hobart and William Smith Colleges": {
        name: "Hobart and William Smith Colleges",
        lat: 42.85823553920702,
        lng: -76.98669262110342,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://pbs.twimg.com/profile_images/950488578970259456/zBWqPkOe_400x400.jpg",
        homepageUrl: "https://www.hws.edu/",
        stateOrCountry: "NY"
    },
    "Tulane University": {
        name: "Tulane University",
        lat: 29.9346,
        lng: -90.1220,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Tulane_logo.svg/800px-Tulane_logo.svg.png",
        homepageUrl: "https://tulane.edu/",
        stateOrCountry: "LA"
    },
    "University of Florida": {
        name: "University of Florida",
        lat: 29.6436,
        lng: -82.3549,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://1000logos.net/wp-content/uploads/2022/07/University-of-Florida-Logo.png",
        homepageUrl: "https://www.ufl.edu/",
        stateOrCountry: "FL"
    },
    "University of California, Berkeley": {
        name: "University of California, Berkeley",
        lat: 37.8719,
        lng: -122.2585,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://brand.berkeley.edu/wp-content/uploads/2024/08/logo-variations-thumbnail-gold-blue-1.png",
        homepageUrl: "https://www.berkeley.edu/",
        stateOrCountry: "CA"
    },
    "University of Chicago": {
        name: "University of Chicago",
        lat: 41.7886,
        lng: -87.5987,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://1000logos.net/wp-content/uploads/2022/07/University-of-Chicago-Logo.png",
        homepageUrl: "https://www.uchicago.edu/",
        stateOrCountry: "IL"
    },
    "Carnegie Mellon University": {
        name: "Carnegie Mellon University",
        lat: 40.4433,
        lng: -79.9436,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.cmu.edu/brand/brand-guidelines/images/wordmarksquare-black-600x600.png",
        homepageUrl: "https://www.cmu.edu/",
        stateOrCountry: "PA"
    },
    "Duke University": {
        name: "Duke University",
        lat: 36.0014,
        lng: -78.9382,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://logos-world.net/wp-content/uploads/2023/08/Duke-University-Logo.jpg",
        homepageUrl: "https://duke.edu/",
        stateOrCountry: "NC"
    },
    "Molloy University": {
        name: "Molloy University",
        lat: 40.686304859193,
        lng: -73.62706838655407,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Molloy_University_logo.png/250px-Molloy_University_logo.png",
        homepageUrl: "https://www.molloy.edu/",
        stateOrCountry: "NY"
    },
    "Davidson College": {
        name: "Davidson College",
        lat: 35.50160957320831,
        lng: -80.84241063074866,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.davidson.edu/sites/default/files/styles/max_650x650/public/2023-08/Primary-Lockup-NewsStory.png?itok=BJeJoK6D",
        homepageUrl: "https://www.davidson.edu/",
        stateOrCountry: "NC"
    },
    "Bentley University": {
        name: "Bentley University",
        lat: 42.38559544108198,
        lng: -71.2218761289859,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://d2f5upgbvkx8pz.cloudfront.net/sites/default/files/inline-files/Bentley_Logo_Vertical_Centered_Blue.png",
        homepageUrl: "https://www.bentley.edu/",
        stateOrCountry: "MA"
    },
    "Muhlenberg College": {
        name: "Muhlenberg College",
        lat: 40.598201389145224,
        lng: -75.50810760019013,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.tours.vividmediany.com/wp-content/uploads/2022/06/Muhlenberg-Virtual-tour-logo.png",
        homepageUrl: "https://www.muhlenberg.edu/",
        stateOrCountry: "PA"
    },
    "William and Mary": {
        name: "William and Mary",
        lat: 37.271052088297736,
        lng: -76.71642908892584,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://brand.wm.edu/wp-content/uploads/2022/06/Athletics-WM-Green-on-Gold-300x244.png",
        homepageUrl: "https://www.wm.edu/",
        stateOrCountry: "VA"
    },
    "Bates College": {
        name: "Bates College",
        lat: 44.105883325008925,
        lng: -70.20220795125299,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://www.bates.edu/communications-marketing/files/2013/01/bates-bobcat-primary3-white.jpg",
        homepageUrl: "https://www.bates.edu/",
        stateOrCountry: "ME"
    },
    "Ohio State University": {
        name: "Ohio State University",
        lat: 40.00601488158067,
        lng: -83.02830531874122,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/2082px-Ohio_State_Buckeyes_logo.svg.png",
        homepageUrl: "https://www.osu.edu/",
        stateOrCountry: "OH"
    },
    "Arizona State University": {
        name: "Arizona State University",
        lat: 33.42302431674467,
        lng: -111.92779841036524,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGPodz7sxsDiDzrsxKl5TXj0QitIgIB3yZQ&s",
        homepageUrl: "https://www.asu.edu/",
        stateOrCountry: "AZ"
    },
    "University of East London": {
        name: "University of East London",
        lat: 51.50772556661829,
        lng: 0.06501698390938543,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://www.globalstudentcentre.com/wp-content/uploads/2023/02/UEL-logo-1.png",
        homepageUrl: "https://www.uel.ac.uk/",
        stateOrCountry: "GBR"
    },
    "Occidental College": {
        name: "Occidental College",
        lat: 34.12738460072989,
        lng: -118.21050787222104,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Occidental_College_logo.svg/2560px-Occidental_College_logo.svg.png",
        homepageUrl: "https://www.oxy.edu/",
        stateOrCountry: "CA"
    },
    "University of the Highlands and Islands": {
        name: "University of the Highlands and Islands",
        lat: 57.4754445523381,
        lng: -4.184040112710482,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDB_VSjLIboInFQOK3tYGfA1vZqXtzSaAFYg&s",
        homepageUrl: "https://www.uhi.ac.uk/en/",
        stateOrCountry: "GBR"
    },
    "Lafayette College": {
        name: "Lafayette College",
        lat: 40.698398037581164,
        lng: -75.21018300536727,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Lafayette_Leopards_logo.svg/1200px-Lafayette_Leopards_logo.svg.png",
        homepageUrl: "https://www.lafayette.edu/",
        stateOrCountry: "PA"
    },
    "Maastricht University": {
        name: "Maastricht University",
        lat: 50.84702434518238,
        lng: 5.688130300487597,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://my.aacsb.edu/Portals/0/assets/images/contact/Maastricht-University.png",
        homepageUrl: "https://www.maastrichtuniversity.nl/",
        stateOrCountry: "NLD"
    },
    "University of California, Santa Barbara": {
        name: "University of California, Santa Barbara",
        lat: 34.41402480701875,
        lng: -119.84912938961659,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/UC_Santa_Barbara_Gauchos_logo.svg/1200px-UC_Santa_Barbara_Gauchos_logo.svg.png",
        homepageUrl: "https://www.ucsb.edu/",
        stateOrCountry: "CA"
    },
    "Chapman University": {
        name: "Chapman University",
        lat: 33.7942942972981,
        lng: -117.85179928514427,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://brand.chapman.edu/wp-content/uploads/2020/05/CU-Master-Brand-2018.png",
        homepageUrl: "https://www.chapman.edu/",
        stateOrCountry: "CA"
    },
    "Sciences Po": {
        name: "Sciences Po",
        lat: 48.85382169007917,
        lng: 2.328770612033854,
        type: TYPE_OTHER_PRIVATE,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Logo_Sciences_Po.svg/2560px-Logo_Sciences_Po.svg.png",
        homepageUrl: "https://www.sciencespo.fr/fr/",
        stateOrCountry: "FRA"
    },
    "King's College London": {
        name: "King's College London",
        lat: 51.511631656423596,
        lng: -0.11620537037285264,
        type: TYPE_OTHER_PUBLIC,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/King%27s_College_London_logo.svg/2560px-King%27s_College_London_logo.svg.png",
        homepageUrl: "https://www.kcl.ac.uk/",
        stateOrCountry: "GBR"
    },
    "Generic College": {
        name: "Generic College",
        lat: 0,
        lng: 0,
        type: "Undecided",
        imageUrl: "placeholder-logo.png",
        homepageUrl: "#",
        stateOrCountry: "N/A"
    },
    "Undecided": {
        name: "Undecided",
        lat: 0,
        lng: 0,
        type: TYPE_UNDECIDED,
        imageUrl: "placeholder-logo.png",
        homepageUrl: "#",
        stateOrCountry: "N/A"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/majors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "majorToAreaMapping",
    ()=>majorToAreaMapping
]);
const majorToAreaMapping = {
    "animal behavior": "STEM",
    "astronomy": "STEM",
    "astrophysics": "STEM",
    "biochemistry": "STEM",
    "biochemistry & molecular biology": "STEM",
    "biology": "STEM",
    "biological sciences": "STEM",
    "biotechnology": "STEM",
    "biotechnology & molecular science": "STEM",
    "cell biology": "STEM",
    "chemistry": "STEM",
    "chemistry & mathematics": "STEM",
    "cognitive science": "STEM",
    "cognitive studies": "STEM",
    "computer programming": "STEM",
    "computer science": "STEM",
    "computer science & business": "STEM",
    "cs": "STEM",
    "cybersecurity": "STEM",
    "data analytics": "STEM",
    "data science": "STEM",
    "ecology": "STEM",
    "ecology & evolutionary biology": "STEM",
    "ecology & music": "STEM",
    "entomology": "STEM",
    "environmental & sustainability": "STEM",
    "environmental science": "STEM",
    "environmental science & policy": "STEM",
    "evolutionary biology": "STEM",
    "forestry": "STEM",
    "foresty": "STEM",
    "foresty & urban arboriculture": "STEM",
    "geoscience": "STEM",
    "geology": "STEM",
    "human biology": "STEM",
    "human health & economics": "STEM",
    "information science": "STEM",
    "integrative biology": "STEM",
    "integrative neuroscience": "STEM",
    "marine biology": "STEM",
    "materials science": "STEM",
    "mathematics": "STEM",
    "mathematics & statistics": "STEM",
    "math": "STEM",
    "meteorology": "STEM",
    "molecular and cell biology": "STEM",
    "molecular biology": "STEM",
    "molecular science": "STEM",
    "neuroscience": "STEM",
    "oceanography": "STEM",
    "physics": "STEM",
    "plant science": "STEM",
    "pre-mathematics": "STEM",
    "psychology & brain science": "STEM",
    "robotics": "STEM",
    "statistics": "STEM",
    "urban arboriculture": "STEM",
    "zoology": "STEM",
    "aerospace engineering": "Engineering",
    "aeronautical engineering technology": "Engineering",
    "biomedical engineering": "Engineering",
    "bme": "Engineering",
    "biomolecular engineering": "Engineering",
    "chemical engineering": "Engineering",
    "civil": "Engineering",
    "civil engineering": "Engineering",
    "civil & environmental engineering": "Engineering",
    "computer engineering": "Engineering",
    "design engineering": "Engineering",
    "electrical engineering": "Engineering",
    "engineering": "Engineering",
    "environmental engineering": "Engineering",
    "environmental engineering and ethics": "Engineering",
    "industrial engineering": "Engineering",
    "manufacturing": "Engineering",
    "manufacturing & design engineering": "Engineering",
    "manufacturing engineering": "Engineering",
    "materials engineering": "Engineering",
    "materials science & engineering": "Engineering",
    "mechanical engineering": "Engineering",
    "software engineering": "Engineering",
    "accounting": "Business/Economics",
    "actuarial science": "Business/Economics",
    "advertising": "Business/Economics",
    "applied economics and management": "Business/Economics",
    "biomedical studies & finance": "Business/Economics",
    "business": "Business/Economics",
    "business administration": "Business/Economics",
    "business administration & finanical economics": "Business/Economics",
    "business administration & psychology": "Business/Economics",
    "business adminstration": "Business/Economics",
    "business analytics": "Business/Economics",
    "business economics": "Business/Economics",
    "business management": "Business/Economics",
    "business & economics": "Business/Economics",
    "computer information systems": "Business/Economics",
    "computer programming and information systems": "Business/Economics",
    "econ": "Business/Economics",
    "economics": "Business/Economics",
    "economics & african american studies": "Business/Economics",
    "economics & mathematics": "Business/Economics",
    "entrepreneurship": "Business/Economics",
    "finance": "Business/Economics",
    "finance & international business": "Business/Economics",
    "financial economics": "Business/Economics",
    "hospitality management": "Business/Economics",
    "human resources": "Business/Economics",
    "information systems": "Business/Economics",
    "international business": "Business/Economics",
    "management": "Business/Economics",
    "management & economics": "Business/Economics",
    "marketing": "Business/Economics",
    "marketing & advertising": "Business/Economics",
    "marketing management": "Business/Economics",
    "philsophy & politics and economics": "Business/Economics",
    "political economy": "Business/Economics",
    "politics & economics": "Business/Economics",
    "public relations, advertising and entertainment marketing": "Business/Economics",
    "real estate": "Business/Economics",
    "sport management": "Business/Economics",
    "supply chain management": "Business/Economics",
    "africana studies": "Humanities/Social Sciences",
    "africana studies & economics & multi-cultural media": "Humanities/Social Sciences",
    "africana studies & political science": "Humanities/Social Sciences",
    "african american studies": "Humanities/Social Sciences",
    "ancient history": "Humanities/Social Sciences",
    "anthropology": "Humanities/Social Sciences",
    "applied psychology": "Humanities/Social Sciences",
    "archaeological studies": "Humanities/Social Sciences",
    "archaeology": "Humanities/Social Sciences",
    "area studies": "Humanities/Social Sciences",
    "art history": "Humanities/Social Sciences",
    "art history & religious studies": "Humanities/Social Sciences",
    "classics": "Humanities/Social Sciences",
    "communication studies": "Humanities/Social Sciences",
    "communications": "Humanities/Social Sciences",
    "comparative literature": "Humanities/Social Sciences",
    "creative writing": "Humanities/Social Sciences",
    "criminal justice": "Humanities/Social Sciences",
    "criminology": "Humanities/Social Sciences",
    "development": "Humanities/Social Sciences",
    "digital journalism": "Humanities/Social Sciences",
    "english": "Humanities/Social Sciences",
    "english & creative writing": "Humanities/Social Sciences",
    "english language & literature": "Humanities/Social Sciences",
    "english literature": "Humanities/Social Sciences",
    "environmental policy": "Humanities/Social Sciences",
    "environmental studies": "Humanities/Social Sciences",
    "environmental studies & economics": "Humanities/Social Sciences",
    "ethics": "Humanities/Social Sciences",
    "foreign languages": "Humanities/Social Sciences",
    "gender studies": "Humanities/Social Sciences",
    "geography": "Humanities/Social Sciences",
    "global affairs": "Humanities/Social Sciences",
    "government": "Humanities/Social Sciences",
    "history": "Humanities/Social Sciences",
    "history of art": "Humanities/Social Sciences",
    "history & politics": "Humanities/Social Sciences",
    "humanities": "Humanities/Social Sciences",
    "industrial and labor relations": "Humanities/Social Sciences",
    "industrial labor relations": "Humanities/Social Sciences",
    "industiral and labor relations": "Humanities/Social Sciences",
    "international development": "Humanities/Social Sciences",
    "international relations": "Humanities/Social Sciences",
    "ir": "Humanities/Social Sciences",
    "journalism": "Humanities/Social Sciences",
    "labor relations": "Humanities/Social Sciences",
    "law": "Humanities/Social Sciences",
    "law & society": "Humanities/Social Sciences",
    "law, history, and society": "Humanities/Social Sciences",
    "liberal arts": "Humanities/Social Sciences",
    "liberal studies": "Humanities/Social Sciences",
    "linguistics": "Humanities/Social Sciences",
    "literature": "Humanities/Social Sciences",
    "magazine": "Humanities/Social Sciences",
    "magazine, news & digital journalism": "Humanities/Social Sciences",
    "mandarin": "Humanities/Social Sciences",
    "mathematics & ancient history": "Humanities/Social Sciences",
    "media arts production": "Humanities/Social Sciences",
    "media studies": "Humanities/Social Sciences",
    "modern languages": "Humanities/Social Sciences",
    "multi-cultural media": "Humanities/Social Sciences",
    "news": "Humanities/Social Sciences",
    "philosophy": "Humanities/Social Sciences",
    "philosophy & journalism": "Humanities/Social Sciences",
    "philosophy & sociology": "Humanities/Social Sciences",
    "philsophy": "Humanities/Social Sciences",
    "policy": "Humanities/Social Sciences",
    "policy studies": "Humanities/Social Sciences",
    "polisci": "Humanities/Social Sciences",
    "political science": "Humanities/Social Sciences",
    "political science & anthropology": "Humanities/Social Sciences",
    "politics": "Humanities/Social Sciences",
    "pre-law": "Humanities/Social Sciences",
    "psych": "Humanities/Social Sciences",
    "psychology": "Humanities/Social Sciences",
    "psychology & political science": "Humanities/Social Sciences",
    "public policy": "Humanities/Social Sciences",
    "public relations": "Humanities/Social Sciences",
    "religious studies": "Humanities/Social Sciences",
    "social anthropology": "Humanities/Social Sciences",
    "social sciences": "Humanities/Social Sciences",
    "sociology": "Humanities/Social Sciences",
    "society": "Humanities/Social Sciences",
    "urban planning": "Humanities/Social Sciences",
    "urban studies": "Humanities/Social Sciences",
    "women's studies": "Humanities/Social Sciences",
    "acting": "Arts/Design",
    "animation": "Arts/Design",
    "art": "Arts/Design",
    "architecture": "Arts/Design",
    "cinema studies": "Arts/Design",
    "collaborative arts": "Arts/Design",
    "dance": "Arts/Design",
    "design": "Arts/Design",
    "design & production": "Arts/Design",
    "digital design": "Arts/Design",
    "digital design & animation": "Arts/Design",
    "drama": "Arts/Design",
    "fashion design": "Arts/Design",
    "fashion merchandising": "Arts/Design",
    "film": "Arts/Design",
    "film production": "Arts/Design",
    "film studies": "Arts/Design",
    "film, photography, and visual arts": "Arts/Design",
    "fine arts": "Arts/Design",
    "flim": "Arts/Design",
    "game design": "Arts/Design",
    "game design and development": "Arts/Design",
    "graphic design": "Arts/Design",
    "industrial design": "Arts/Design",
    "interior design": "Arts/Design",
    "music": "Arts/Design",
    "music composition": "Arts/Design",
    "music performance": "Arts/Design",
    "musical studies": "Arts/Design",
    "performing arts": "Arts/Design",
    "photography": "Arts/Design",
    "politics & flim": "Arts/Design",
    "production": "Arts/Design",
    "studio art": "Arts/Design",
    "television, radio and flim": "Arts/Design",
    "theater": "Arts/Design",
    "theatre": "Arts/Design",
    "theatre & english": "Arts/Design",
    "urban design": "Arts/Design",
    "visual arts": "Arts/Design",
    "clinical health studies & physical therapy": "Health Sciences",
    "biomedical studies": "Health Sciences",
    "exercise science": "Health Sciences",
    "food science": "Health Sciences",
    "global public health": "Health Sciences",
    "global public health & biology": "Health Sciences",
    "health sciences": "Health Sciences",
    "hssp": "Health Sciences",
    "occupational thearpy": "Health Sciences",
    "kinesiology": "Health Sciences",
    "medicine": "Health Sciences",
    "medicine, science, and the humanities": "Health Sciences",
    "nursing": "Health Sciences",
    "nutrition": "Health Sciences",
    "occupational therapy": "Health Sciences",
    "pharmacology": "Health Sciences",
    "pharmacy": "Health Sciences",
    "physical therapy": "Health Sciences",
    "pre-dental": "Health Sciences",
    "pre-health": "Health Sciences",
    "pre-med": "Health Sciences",
    "pre-medicine": "Health Sciences",
    "pre-pharmacy": "Health Sciences",
    "public health": "Health Sciences",
    "public health science": "Health Sciences",
    "social work": "Health Sciences",
    "speech pathology": "Health Sciences",
    "education": "Education",
    "elementary education": "Education",
    "secondary english education": "Education",
    "special education": "Education",
    "teacher tech design": "Education",
    "teaching": "Education",
    "exploratory": "Undecided/Other",
    "general studies": "Undecided/Other",
    "n/a": "Undecided/Other",
    "other": "Undecided/Other",
    "undecided": "Undecided/Other",
    "undecided major": "Undecided/Other"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "normalizeCollegeName",
    ()=>normalizeCollegeName,
    "parseRawData",
    ()=>parseRawData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$colleges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/colleges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$majors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/majors.ts [app-client] (ecmascript)");
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function normalizeForFilename(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[èé]/g, 'e').replace(/\s+/g, '_').replace(/[()']/g, '');
}
function normalizeCollegeName(name) {
    const originalNameLower = name.trim().toLowerCase();
    const mapping = {
        "bing": "Binghamton University",
        "ualbany": "University at Albany",
        "sbu": "Stony Brook University",
        "ccny": "City College of New York",
        "bmcc": "Borough of Manhattan Community College",
        "csi": "College of Staten Island",
        "ub": "University at Buffalo",
        "u rhode island": "University of Rhode Island",
        "maastricht": "Maastricht University",
        "ucsb": "University of California, Santa Barbara",
        "union": "Union College",
        "nyu shanghai": "NYU Shanghai",
        "nyu london": "NYU London",
        "mit": "Massachusetts Institute of Technology",
        "lafayette": "Lafayette College",
        "u washington": "University of Washington",
        "flordia state university": "Florida State University",
        "farifield university": "Fairfield University",
        "uflorida": "University of Florida",
        "uflordia": "University of Florida",
        "amda": "AMDA College of the Performing Arts"
    };
    if (mapping[originalNameLower]) return mapping[originalNameLower];
    // Partial matches
    const partials = [
        [
            "harvard",
            "Harvard University"
        ],
        [
            "hobart and william smith colleges",
            "Hobart and William Smith Colleges"
        ],
        [
            "bates",
            "Bates College"
        ],
        [
            "brooklyn college",
            "Brooklyn College"
        ],
        [
            "yale",
            "Yale University"
        ],
        [
            "arizona state university",
            "Arizona State University"
        ],
        [
            "muhlenberg",
            "Muhlenberg College"
        ],
        [
            "hostos",
            "Hostos Community College"
        ],
        [
            "columbia",
            "Columbia University"
        ],
        [
            "occidental",
            "Occidental College"
        ],
        [
            "bentley",
            "Bentley University"
        ],
        [
            "davidson",
            "Davidson College"
        ],
        [
            "molloy",
            "Molloy University"
        ],
        [
            "rutgers",
            "Rutgers University"
        ],
        [
            "pratt",
            "Pratt Institute"
        ],
        [
            "fordham",
            "Fordham University"
        ],
        [
            "brown",
            "Brown University"
        ],
        [
            "dartmouth",
            "Dartmouth College"
        ],
        [
            "tufts",
            "Tufts University"
        ],
        [
            "northwestern",
            "Northwestern University"
        ],
        [
            "syracuse",
            "Syracuse University"
        ],
        [
            "brandeis",
            "Brandeis University"
        ],
        [
            "middlebury",
            "Middlebury College"
        ],
        [
            "hamilton",
            "Hamilton College"
        ],
        [
            "emerson",
            "Emerson College"
        ],
        [
            "emory",
            "Emory University"
        ],
        [
            "pace",
            "Pace University"
        ],
        [
            "williams",
            "Williams College"
        ],
        [
            "bard",
            "Bard College"
        ],
        [
            "barnard",
            "Barnard College"
        ],
        [
            "ithaca",
            "Ithaca College"
        ],
        [
            "vassar",
            "Vassar College"
        ],
        [
            "haverford",
            "Haverford College"
        ],
        [
            "smith",
            "Smith College"
        ],
        [
            "oberlin",
            "Oberlin College"
        ],
        [
            "cornell",
            "Cornell University"
        ],
        [
            "vanderbilt",
            "Vanderbilt University"
        ],
        [
            "princeton",
            "Princeton University"
        ],
        [
            "duke",
            "Duke University"
        ],
        [
            "tulane",
            "Tulane University"
        ],
        [
            "bucknell",
            "Bucknell University"
        ],
        [
            "skidmore",
            "Skidmore College"
        ],
        [
            "babson",
            "Babson College"
        ],
        [
            "colgate",
            "Colgate University"
        ],
        [
            "towson",
            "Towson University"
        ],
        [
            "boston college",
            "Boston College"
        ],
        [
            "boston u",
            "Boston University"
        ],
        [
            "georgetown",
            "Georgetown University"
        ],
        [
            "baruch",
            "Baruch College"
        ],
        [
            "hunter",
            "Hunter College"
        ],
        [
            "upenn",
            "University of Pennsylvania"
        ],
        [
            "u penn",
            "University of Pennsylvania"
        ],
        [
            "washu",
            "Washington University in St. Louis"
        ],
        [
            "umich",
            "University of Michigan"
        ],
        [
            "neu",
            "Northeastern University"
        ],
        [
            "mcgill",
            "McGill University"
        ],
        [
            "nyu",
            "New York University"
        ],
        [
            "usc",
            "University of Southern California"
        ],
        [
            "ucla",
            "University of California, Los Angeles"
        ],
        [
            "ucsd",
            "University of California San Diego"
        ],
        [
            "uc berkeley",
            "University of California, Berkeley"
        ],
        [
            "rit",
            "Rochester Institute of Technology"
        ],
        [
            "uvm",
            "University of Vermont"
        ],
        [
            "u colorado boulder",
            "University of Colorado Boulder"
        ],
        [
            "howard",
            "Howard University"
        ],
        [
            "uw madison",
            "University of Wisconsin-Madison"
        ],
        [
            "umass amherst",
            "University of Massachusetts Amherst"
        ],
        [
            "penn state",
            "Pennsylvania State University"
        ],
        [
            "florida state university",
            "Florida State University"
        ],
        [
            "johns hopkins",
            "Johns Hopkins University"
        ],
        [
            "john hopkins",
            "Johns Hopkins University"
        ],
        [
            "cooper union",
            "The Cooper Union"
        ],
        [
            "uva",
            "University of Virginia"
        ],
        [
            "upitt",
            "University of Pittsburgh"
        ],
        [
            "uarizona",
            "University of Arizona"
        ],
        [
            "us naval academy",
            "United States Naval Academy"
        ],
        [
            "case western",
            "Case Western Reserve University"
        ],
        [
            "gwu",
            "George Washington University"
        ],
        [
            "urochester",
            "University of Rochester"
        ],
        [
            "wpi",
            "Worcester Polytechnic Institute"
        ],
        [
            "indiana university",
            "Indiana University Bloomington"
        ],
        [
            "indiania university",
            "Indiana University Bloomington"
        ],
        [
            "university of washington",
            "University of Washington"
        ],
        [
            "umaryland college park",
            "University of Maryland, College Park"
        ],
        [
            "u maryland college park",
            "University of Maryland, College Park"
        ],
        [
            "fairfield university",
            "Fairfield University"
        ],
        [
            "umiami",
            "University of Miami"
        ],
        [
            "university of florida",
            "University of Florida"
        ],
        [
            "uchicago",
            "University of Chicago"
        ],
        [
            "carnegie mellon",
            "Carnegie Mellon University"
        ],
        [
            "st andrews",
            "University of St Andrews"
        ],
        [
            "purdue",
            "Purdue University"
        ],
        [
            "fit",
            "Fashion Institute of Technology"
        ],
        [
            "university of the highlands and islands",
            "University of the Highlands and Islands"
        ],
        [
            "osu",
            "Ohio State University"
        ],
        [
            "ohio state",
            "Ohio State University"
        ]
    ];
    for (const [key, val] of partials){
        if (originalNameLower.includes(key)) return val;
    }
    // Direct lookup in college list
    for(const key in __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$colleges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colleges"]){
        if (key.toLowerCase() === originalNameLower) return key;
    }
    // Suffix stripping
    let baseName = name;
    const posseMatch = name.match(/\s*\(posse\)/i);
    const questbridgeMatch = name.match(/\s*\(questbridge\)/i);
    const macaulayMatch = name.match(/\s*\(macaulay\)/i);
    if (posseMatch) baseName = name.replace(posseMatch[0], '').trim();
    else if (questbridgeMatch) baseName = name.replace(questbridgeMatch[0], '').trim();
    else if (macaulayMatch) baseName = name.replace(macaulayMatch[0], '').trim();
    if (baseName !== name) {
        const normalizedBase = normalizeCollegeName(baseName);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$colleges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colleges"][normalizedBase]) return normalizedBase;
        return baseName;
    }
    return name;
}
function getMajorArea(specificMajor) {
    if (!specificMajor) return "Unknown";
    const lowerSpecificMajor = specificMajor.toLowerCase().trim();
    if ([
        "",
        "undecided",
        "undecided major",
        "n/a",
        "exploratory"
    ].includes(lowerSpecificMajor)) {
        return "Undecided/Other";
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$majors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["majorToAreaMapping"][lowerSpecificMajor]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$majors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["majorToAreaMapping"][lowerSpecificMajor];
    // Heuristic matching
    if (lowerSpecificMajor.includes('&') || lowerSpecificMajor.includes(' and ')) {
        return "Other"; // Simplified for brevity, can expand if needed
    }
    // Fallback keywords
    if (lowerSpecificMajor.includes("engineering")) return "Engineering";
    if (lowerSpecificMajor.includes("business") || lowerSpecificMajor.includes("finance")) return "Business/Economics";
    if (lowerSpecificMajor.includes("art") || lowerSpecificMajor.includes("design")) return "Arts/Design";
    if (lowerSpecificMajor.includes("biology") || lowerSpecificMajor.includes("health")) return "Life Sciences";
    return "Other";
}
function parseRawData(jsonData) {
    const rawEntries = jsonData.map((entry)=>({
            seniorName: entry.name.trim(),
            collegeNameRaw: entry.college.trim(),
            major: entry.major && entry.major.trim() !== "" ? entry.major.trim() : "Undecided Major",
            gradClass: `'${entry.classYear.trim()}`,
            originalFirstName: entry.name.trim().split(/\s+/)[0],
            linkedin: entry.linkedin && entry.linkedin.trim() !== "" ? entry.linkedin.trim() : undefined,
            instagram: entry.instagram && entry.instagram.trim() !== "" ? entry.instagram.trim() : undefined,
            github: entry.github && entry.github.trim() !== "" ? entry.github.trim() : undefined,
            congratsCaption: entry.congratsCaption && entry.congratsCaption.trim() !== "" ? entry.congratsCaption.trim() : undefined
        }));
    // Handle duplicate first names in a grad class
    const firstNameCountsByClass = new Map();
    for (const entry of rawEntries){
        if (!firstNameCountsByClass.has(entry.gradClass)) {
            firstNameCountsByClass.set(entry.gradClass, new Map());
        }
        const classCounts = firstNameCountsByClass.get(entry.gradClass);
        const normName = normalizeForFilename(entry.originalFirstName);
        classCounts.set(normName, (classCounts.get(normName) || 0) + 1);
    }
    return rawEntries.map((entry, index)=>{
        const photoYear = entry.gradClass.replace("'", "");
        const normFirstName = normalizeForFilename(entry.originalFirstName);
        const classCounts = firstNameCountsByClass.get(entry.gradClass);
        let photoFilename = normFirstName;
        if (classCounts.get(normFirstName) > 1) {
            photoFilename = normalizeForFilename(entry.seniorName);
        }
        // Images live in public/<gradYear>/<filename>.{jpg,png}
        const seniorPhotoUrlBase = `/${photoYear}/${photoFilename}`;
        const normalizedNameKey = normalizeCollegeName(entry.collegeNameRaw);
        const collegeDetails = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$colleges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colleges"][normalizedNameKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$colleges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colleges"]["Generic College"];
        // Derive locationFocus when not provided in data
        let locationFocus = collegeDetails.locationFocus;
        if (!locationFocus) {
            if (collegeDetails.stateOrCountry === 'NY') {
                const inNYC = collegeDetails.lat >= 40.47 && collegeDetails.lat <= 40.92 && collegeDetails.lng >= -74.26 && collegeDetails.lng <= -73.70;
                locationFocus = inNYC ? "InCityNYC" : "InStateNYOther";
            } else if (collegeDetails.stateOrCountry && collegeDetails.stateOrCountry.length === 2) {
                locationFocus = "OutOfStateUS";
            } else {
                locationFocus = "International";
            }
        }
        // Derive isCampusPublic when not provided
        let isCampusPublic = collegeDetails.isCampusPublic;
        if (typeof isCampusPublic === 'undefined') {
            const t = (collegeDetails.type || '').toLowerCase();
            isCampusPublic = t.includes('public') || t.includes('suny') || t.includes('cuny') || t.includes('university system');
        }
        let finalCollegeName = collegeDetails.name;
        if (collegeDetails.name === "Generic College" && normalizedNameKey !== "Undecided") {
            finalCollegeName = normalizedNameKey;
        }
        if (normalizedNameKey === "Undecided") finalCollegeName = "Undecided";
        return {
            id: index,
            originalIndex: index,
            seniorName: entry.seniorName,
            gradClass: entry.gradClass,
            collegeName: finalCollegeName,
            collegeKey: normalizedNameKey,
            collegeNameRaw: entry.collegeNameRaw,
            major: entry.major,
            majorArea: getMajorArea(entry.major),
            lat: collegeDetails.lat,
            lng: collegeDetails.lng,
            collegeType: collegeDetails.type,
            collegeImageUrl: collegeDetails.imageUrl,
            collegeHomepageUrl: collegeDetails.homepageUrl,
            isCampusPublic: !!isCampusPublic,
            locationFocus: locationFocus || "N/A",
            stateOrCountry: collegeDetails.stateOrCountry,
            seniorPhotoUrl: `${seniorPhotoUrlBase}.jpg`,
            seniorPhotoUrlPng: `${seniorPhotoUrlBase}.png`,
            linkedInUrl: entry.linkedin,
            instagramUrl: entry.instagram,
            githubUrl: entry.github,
            bioCaption: entry.congratsCaption,
            isIndividuallyVisible: true,
            isVisible: true
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/DataContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/data/students.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const DataProvider = ({ children })=>{
    _s();
    const allStudents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DataProvider.useMemo[allStudents]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRawData"])(rawData);
        }
    }["DataProvider.useMemo[allStudents]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
        value: {
            allStudents
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/DataContext.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DataProvider, "r7vLKqryY9/avfA+qJRJsVyW0Ug=");
_c = DataProvider;
const useData = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (!context) throw new Error('useData must be used within a DataProvider');
    return context;
};
_s1(useData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "DataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GRAD_CLASS_COLORS",
    ()=>GRAD_CLASS_COLORS,
    "MAP_ID_DARK",
    ()=>MAP_ID_DARK,
    "MAP_ID_LIGHT",
    ()=>MAP_ID_LIGHT,
    "MAP_STYLE_DARK",
    ()=>MAP_STYLE_DARK,
    "NYC_BOUNDS",
    ()=>NYC_BOUNDS,
    "PREDEFINED_MAJOR_AREAS",
    ()=>PREDEFINED_MAJOR_AREAS
]);
const MAP_ID_DARK = '27f65917b8e0eec9e9450357';
const MAP_ID_LIGHT = '27f65917b8e0eec92a95d812';
const MAP_STYLE_DARK = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#1f2937"
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1f2937"
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9ca3af"
            }
        ]
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#d1d5db"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#d1d5db"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#374151"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9ca3af"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                color: "#4b5563"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#111827"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#e5e7eb"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#2c3340"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#0f172a"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#60a5fa"
            }
        ]
    }
];
const GRAD_CLASS_COLORS = {
    "'21": "#00FFFF",
    "'22": "#FF0000",
    "'23": "#99CC00",
    "'24": "#FFBB33",
    "'25": "#007FFF",
    "'26": "#FF69B4"
};
const PREDEFINED_MAJOR_AREAS = [
    "Engineering",
    "Physical Sciences",
    "Life Sciences",
    "Business/Economics",
    "Humanities",
    "Social Sciences",
    "Arts/Design",
    "Health Sciences",
    "Education",
    "Undecided/Other",
    "Other"
];
const NYC_BOUNDS = {
    north: 40.92,
    south: 40.47,
    west: -74.26,
    east: -73.70
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterProvider",
    ()=>FilterProvider,
    "useFilters",
    ()=>useFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DataContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const FilterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FilterProvider = ({ children })=>{
    _s();
    const { allStudents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])();
    const initialGradClasses = {
        "'21": true,
        "'22": true,
        "'23": true,
        "'24": true,
        "'25": true,
        "'26": true
    };
    const initialLocationFocus = {
        "InCityNYC": true,
        "InStateNYOther": true,
        "OutOfStateUS": true,
        "International": true,
        "N/A": true
    };
    const initialMajorAreas = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREDEFINED_MAJOR_AREAS"].reduce((acc, area)=>({
            ...acc,
            [area]: true
        }), {});
    const [filterState, setFilterState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gradClasses: initialGradClasses,
        locationFocus: initialLocationFocus,
        majorAreas: initialMajorAreas,
        stateCountry: {},
        searchQuery: ""
    });
    const filteredStudents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FilterProvider.useMemo[filteredStudents]": ()=>{
            return allStudents.filter({
                "FilterProvider.useMemo[filteredStudents]": (student)=>{
                    if (!student.isIndividuallyVisible) return false;
                    // Grad Class
                    if (!filterState.gradClasses[student.gradClass]) return false;
                    // Location Focus
                    if (!filterState.locationFocus[student.locationFocus]) return false;
                    // Major Area
                    // Logic handles complex majors roughly
                    const areas = student.majorArea.split(' & ').map({
                        "FilterProvider.useMemo[filteredStudents].areas": (s)=>s.trim()
                    }["FilterProvider.useMemo[filteredStudents].areas"]);
                    const hasMatchingArea = areas.some({
                        "FilterProvider.useMemo[filteredStudents].hasMatchingArea": (area)=>filterState.majorAreas[area]
                    }["FilterProvider.useMemo[filteredStudents].hasMatchingArea"]);
                    if (!hasMatchingArea) return false;
                    // Search
                    if (filterState.searchQuery) {
                        const q = filterState.searchQuery.toLowerCase();
                        const matches = student.seniorName.toLowerCase().includes(q) || student.collegeName.toLowerCase().includes(q) || student.major.toLowerCase().includes(q);
                        if (!matches) return false;
                    }
                    return true;
                }
            }["FilterProvider.useMemo[filteredStudents]"]);
        }
    }["FilterProvider.useMemo[filteredStudents]"], [
        allStudents,
        filterState
    ]);
    const toggleGradClass = (cls)=>{
        setFilterState((prev)=>({
                ...prev,
                gradClasses: {
                    ...prev.gradClasses,
                    [cls]: !prev.gradClasses[cls]
                }
            }));
    };
    const toggleLocationFocus = (focus)=>{
        setFilterState((prev)=>({
                ...prev,
                locationFocus: {
                    ...prev.locationFocus,
                    [focus]: !prev.locationFocus[focus]
                }
            }));
    };
    const toggleMajorArea = (area)=>{
        setFilterState((prev)=>({
                ...prev,
                majorAreas: {
                    ...prev.majorAreas,
                    [area]: !prev.majorAreas[area]
                }
            }));
    };
    const resetFilters = ()=>{
        setFilterState({
            gradClasses: initialGradClasses,
            locationFocus: initialLocationFocus,
            majorAreas: initialMajorAreas,
            stateCountry: {},
            searchQuery: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterContext.Provider, {
        value: {
            filterState,
            setFilterState,
            filteredStudents,
            toggleGradClass,
            toggleLocationFocus,
            toggleMajorArea,
            resetFilters
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/FilterContext.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilterProvider, "9K2QnA4UavmYFrVV1qgNrsVYvq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = FilterProvider;
const useFilters = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FilterContext);
    if (!context) throw new Error('useFilters must be used within a FilterProvider');
    return context;
};
_s1(useFilters, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "FilterProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/UIContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UIProvider",
    ()=>UIProvider,
    "useUI",
    ()=>useUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const UIContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const UIProvider = ({ children })=>{
    _s();
    const [selectedStudent, setSelectedStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPhotoPopupOpen, setIsPhotoPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeHoverId, setActiveHoverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [popupAnchorRect, setPopupAnchorRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openPhotoPopup = (student, anchorRect)=>{
        setSelectedStudent(student);
        setPopupAnchorRect(anchorRect ?? null);
        setIsPhotoPopupOpen(true);
    };
    const closePhotoPopup = ()=>{
        setIsPhotoPopupOpen(false);
    // Don't clear selectedStudent immediately to avoid flicker
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UIContext.Provider, {
        value: {
            selectedStudent,
            setSelectedStudent,
            isPhotoPopupOpen,
            openPhotoPopup,
            closePhotoPopup,
            activeHoverId,
            setActiveHoverId,
            popupAnchorRect
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/UIContext.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UIProvider, "HD73DAM1ozEXAFCCpBBlpst10So=");
_c = UIProvider;
const useUI = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UIContext);
    if (!context) throw new Error('useUI must be used within a UIProvider');
    return context;
};
_s1(useUI, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "UIProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_401906c8._.js.map