(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sidebar/SidebarContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SidebarContainer({ children }) {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(400);
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startResizing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "SidebarContainer.useCallback[startResizing]": ()=>{
            setIsResizing(true);
        }
    }["SidebarContainer.useCallback[startResizing]"], []);
    const stopResizing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "SidebarContainer.useCallback[stopResizing]": ()=>{
            setIsResizing(false);
        }
    }["SidebarContainer.useCallback[stopResizing]"], []);
    const resize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "SidebarContainer.useCallback[resize]": (mouseMoveEvent)=>{
            if (isResizing) {
                const newWidth = mouseMoveEvent.clientX;
                if (newWidth > 300 && newWidth < 800) {
                    setWidth(newWidth);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.localStorage.setItem('sidebar-width', String(newWidth));
                    }
                }
            }
        }
    }["SidebarContainer.useCallback[resize]"], [
        isResizing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarContainer.useEffect": ()=>{
            // apply stored width after mount to avoid SSR mismatch
            if ("TURBOPACK compile-time truthy", 1) {
                const stored = window.localStorage.getItem('sidebar-width');
                const parsed = stored ? parseInt(stored, 10) : NaN;
                if (parsed && parsed > 300 && parsed < 800) {
                    setWidth(parsed);
                }
            }
            window.addEventListener("mousemove", resize);
            window.addEventListener("mouseup", stopResizing);
            return ({
                "SidebarContainer.useEffect": ()=>{
                    window.removeEventListener("mousemove", resize);
                    window.removeEventListener("mouseup", stopResizing);
                }
            })["SidebarContainer.useEffect"];
        }
    }["SidebarContainer.useEffect"], [
        resize,
        stopResizing
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full relative z-20 shadow-xl",
        style: {
            width: width
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sidebarRef,
                className: "flex-1 bg-gray-50 dark:bg-neutral-900 border-r border-gray-300 dark:border-neutral-800 h-full flex flex-col overflow-hidden",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/SidebarContainer.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 bg-gray-300 dark:bg-neutral-800 hover:bg-blue-500 cursor-col-resize transition-colors",
                onMouseDown: startResizing
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/SidebarContainer.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sidebar/SidebarContainer.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(SidebarContainer, "w0evySL4Mn+KtkN5O7QYKFDFk2M=");
_c = SidebarContainer;
var _c;
__turbopack_context__.k.register(_c, "SidebarContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sidebar/StudentList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UIContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const gradOrder = [
    "'21",
    "'22",
    "'23",
    "'24",
    "'25",
    "'26"
];
const getFirstName = (full)=>full.trim().split(/\s+/)[0] || full;
const getLastName = (full)=>{
    const parts = full.trim().split(/\s+/);
    return parts.length > 1 ? parts[parts.length - 1] : full;
};
const displayGradClass = (gradClass)=>gradClass.replace(/^'+/, '');
function StudentList() {
    _s();
    const { filteredStudents, filterState, setFilterState, toggleStudentVisibility, toggleCollegeVisibility, isStudentVisible, isCollegeVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const { openPhotoPopup, setActiveHoverId, activeHoverId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const [isGallery, setIsGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortTarget, setSortTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('students');
    const [studentSort, setStudentSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('grad_first');
    const [collegeSort, setCollegeSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('name_asc');
    const [collapsedClasses, setCollapsedClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Load persisted collapsed state after mount to avoid SSR/client mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentList.useEffect": ()=>{
            try {
                const stored = localStorage.getItem('collapsedGradClasses');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed && typeof parsed === 'object') setCollapsedClasses(parsed);
                }
            } catch  {
            // ignore malformed storage
            }
        }
    }["StudentList.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentList.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            localStorage.setItem('collapsedGradClasses', JSON.stringify(collapsedClasses));
        }
    }["StudentList.useEffect"], [
        collapsedClasses
    ]);
    const sortedStudents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentList.useMemo[sortedStudents]": ()=>{
            const list = [
                ...filteredStudents
            ];
            return list.sort({
                "StudentList.useMemo[sortedStudents]": (a, b)=>{
                    if (studentSort === 'grad_first' || studentSort === 'grad_last') {
                        const gradCompare = gradOrder.indexOf(a.gradClass) - gradOrder.indexOf(b.gradClass);
                        if (gradCompare !== 0) return gradCompare;
                        if (studentSort === 'grad_first') {
                            const first = getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
                            if (first !== 0) return first;
                            return getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
                        }
                        const last = getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
                        if (last !== 0) return last;
                        return getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
                    }
                    if (studentSort === 'first') {
                        const first = getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
                        if (first !== 0) return first;
                        return getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
                    }
                    const last = getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
                    if (last !== 0) return last;
                    return getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
                }
            }["StudentList.useMemo[sortedStudents]"]);
        }
    }["StudentList.useMemo[sortedStudents]"], [
        filteredStudents,
        studentSort
    ]);
    const groupedByGrad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentList.useMemo[groupedByGrad]": ()=>{
            if (sortTarget !== 'students' || studentSort !== 'grad_first' && studentSort !== 'grad_last') return [];
            const groups = new Map();
            sortedStudents.forEach({
                "StudentList.useMemo[groupedByGrad]": (s)=>{
                    const key = s.gradClass;
                    if (!groups.has(key)) groups.set(key, []);
                    groups.get(key).push(s);
                }
            }["StudentList.useMemo[groupedByGrad]"]);
            return Array.from(groups.entries()).sort({
                "StudentList.useMemo[groupedByGrad]": ([a], [b])=>gradOrder.indexOf(a) - gradOrder.indexOf(b)
            }["StudentList.useMemo[groupedByGrad]"]);
        }
    }["StudentList.useMemo[groupedByGrad]"], [
        sortedStudents,
        sortTarget,
        studentSort
    ]);
    const collegesAggregated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentList.useMemo[collegesAggregated]": ()=>{
            const map = new Map();
            filteredStudents.forEach({
                "StudentList.useMemo[collegesAggregated]": (s)=>{
                    if (s.collegeName === 'Undecided') return;
                    if (!map.has(s.collegeName)) {
                        map.set(s.collegeName, {
                            name: s.collegeName,
                            count: 0,
                            sampleStudent: s,
                            image: s.collegeImageUrl
                        });
                    }
                    const entry = map.get(s.collegeName);
                    entry.count += 1;
                    if (!entry.image && s.collegeImageUrl) entry.image = s.collegeImageUrl;
                }
            }["StudentList.useMemo[collegesAggregated]"]);
            const arr = Array.from(map.values());
            return arr.sort({
                "StudentList.useMemo[collegesAggregated]": (a, b)=>{
                    if (collegeSort === 'name_asc') return a.name.localeCompare(b.name);
                    if (collegeSort === 'name_desc') return b.name.localeCompare(a.name);
                    if (collegeSort === 'count_desc') return b.count - a.count || a.name.localeCompare(b.name);
                    return a.count - b.count || a.name.localeCompare(b.name);
                }
            }["StudentList.useMemo[collegesAggregated]"]);
        }
    }["StudentList.useMemo[collegesAggregated]"], [
        filteredStudents,
        collegeSort
    ]);
    // Respond to map marker clicks by opening the right class section, highlighting, and showing the popup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentList.useEffect": ()=>{
            const handleFocusFromMap = {
                "StudentList.useEffect.handleFocusFromMap": (ev)=>{
                    const custom = ev;
                    if (!custom.detail) return;
                    const targetId = custom.detail.id;
                    const target = filteredStudents.find({
                        "StudentList.useEffect.handleFocusFromMap.target": (s)=>s.id === targetId
                    }["StudentList.useEffect.handleFocusFromMap.target"]);
                    if (!target) return;
                    // Ensure the grad class accordion is open
                    setCollapsedClasses({
                        "StudentList.useEffect.handleFocusFromMap": (prev)=>({
                                ...prev,
                                [target.gradClass]: false
                            })
                    }["StudentList.useEffect.handleFocusFromMap"]);
                    // Highlight and open popup after DOM updates
                    requestAnimationFrame({
                        "StudentList.useEffect.handleFocusFromMap": ()=>{
                            const el = document.querySelector(`[data-student-id="${target.id}"]`);
                            if (el) {
                                el.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center'
                                });
                                el.classList.add('ring-2', 'ring-[#188BFE]', 'ring-offset-2');
                                setTimeout({
                                    "StudentList.useEffect.handleFocusFromMap": ()=>el.classList.remove('ring-2', 'ring-[#188BFE]', 'ring-offset-2')
                                }["StudentList.useEffect.handleFocusFromMap"], 1600);
                            }
                            setActiveHoverId(target.id);
                            openPhotoPopup(target, el?.getBoundingClientRect());
                        }
                    }["StudentList.useEffect.handleFocusFromMap"]);
                }
            }["StudentList.useEffect.handleFocusFromMap"];
            window.addEventListener('focus-student-from-map', handleFocusFromMap);
            return ({
                "StudentList.useEffect": ()=>window.removeEventListener('focus-student-from-map', handleFocusFromMap)
            })["StudentList.useEffect"];
        }
    }["StudentList.useEffect"], [
        filteredStudents,
        setActiveHoverId,
        openPhotoPopup
    ]);
    const handleSearch = (e)=>{
        setFilterState((prev)=>({
                ...prev,
                searchQuery: e.target.value
            }));
    };
    const toggleClass = (gradClass)=>{
        setCollapsedClasses((prev)=>({
                ...prev,
                [gradClass]: !prev[gradClass]
            }));
    };
    const ListItem = ({ student })=>{
        const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][student.gradClass] || '#ccc';
        const isHovered = activeHoverId === student.id;
        const honoraries = student.honoraries || [];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `px-4 py-2 border-b border-gray-200 dark:border-neutral-800 transition-colors cursor-pointer ${isHovered ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-100 dark:hover:bg-neutral-800'}`,
            "data-student-id": student.id,
            onClick: (e)=>{
                window.dispatchEvent(new CustomEvent('center-student-marker', {
                    detail: {
                        id: student.id,
                        lat: student.lat,
                        lng: student.lng
                    }
                }));
                openPhotoPopup(student, e.currentTarget.getBoundingClientRect());
            },
            onMouseEnter: (e)=>{
                setActiveHoverId(student.id);
                openPhotoPopup(student, e.currentTarget.getBoundingClientRect());
            },
            onMouseLeave: ()=>setActiveHoverId(null),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        className: "mt-3",
                        checked: isStudentVisible(student.id),
                        onChange: (e)=>{
                            e.stopPropagation();
                            toggleStudentVisibility(student.id);
                        },
                        onClick: (e)=>e.stopPropagation()
                    }, void 0, false, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 rounded bg-gray-200 dark:bg-neutral-800 overflow-hidden flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: student.seniorPhotoUrl,
                            alt: student.seniorName,
                            className: "h-full w-full object-cover",
                            onError: (e)=>{
                                const img = e.target;
                                img.src = student.seniorPhotoUrlPng || '/placeholder-logo.png';
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-gray-900 dark:text-gray-100 truncate",
                                            children: student.seniorName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold px-1.5 py-0.5 rounded text-white",
                                            style: {
                                                backgroundColor: color
                                            },
                                            children: displayGradClass(student.gradClass)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                honoraries.includes('dean_scholars') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/logos/dean scholars.png",
                                                    alt: "Dean Scholars",
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                honoraries.includes('macaulay') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/logos/macaulay.png",
                                                    alt: "Macaulay Honors",
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this),
                                                honoraries.includes('posse') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/logos/posse.png",
                                                    alt: "Posse Scholar",
                                                    className: "h-4",
                                                    style: {
                                                        width: 20
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this),
                                                honoraries.includes('questbridge') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/logos/questbridge.png",
                                                    alt: "QuestBridge Scholar",
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this),
                                                student.instagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: student.instagramUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/logos/instagram.svg",
                                                        alt: "Instagram",
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this),
                                                student.linkedInUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: student.linkedInUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/logos/linkedin.svg",
                                                        alt: "LinkedIn",
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this),
                                                student.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: student.githubUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/logos/github.svg",
                                                        alt: "GitHub",
                                                        className: "h-4 w-4 dark:invert"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-blue-600 dark:text-blue-400 font-medium truncate",
                                children: student.collegeName
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 225,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 dark:text-gray-400 truncate",
                                children: student.major || 'Undecided'
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 226,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sidebar/StudentList.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this);
    };
    const GalleryItem = ({ student })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-square bg-gray-200 dark:bg-neutral-800 rounded overflow-hidden group cursor-pointer",
            "data-student-id": student.id,
            onClick: (e)=>{
                window.dispatchEvent(new CustomEvent('center-student-marker', {
                    detail: {
                        id: student.id,
                        lat: student.lat,
                        lng: student.lng
                    }
                }));
                openPhotoPopup(student, e.currentTarget.getBoundingClientRect());
            },
            onMouseEnter: ()=>setActiveHoverId(student.id),
            onMouseLeave: ()=>setActiveHoverId(null),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: student.seniorPhotoUrl,
                    alt: student.seniorName,
                    className: "object-cover w-full h-full",
                    onError: (e)=>{
                        e.target.src = '/placeholder-logo.png';
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 246,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-sm font-bold",
                        children: [
                            student.seniorName,
                            " ",
                            '->',
                            " ",
                            student.collegeName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 254,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1 right-1 text-xs font-bold text-white px-1.5 py-0.5 rounded",
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][student.gradClass]
                    },
                    children: displayGradClass(student.gradClass)
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 259,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sidebar/StudentList.tsx",
            lineNumber: 234,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "student-list-toolbar",
                className: "p-4 border-b border-gray-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold mb-2",
                        children: "College List & Seniors"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search...",
                                id: "student-search-input",
                                className: "flex-1 px-3 py-2 border rounded-full text-sm dark:bg-neutral-800 dark:border-neutral-700",
                                value: filterState.searchQuery,
                                onChange: handleSearch
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "px-2 py-1 border rounded text-sm dark:bg-neutral-800 dark:border-neutral-700",
                                id: "list-mode-select",
                                value: sortTarget,
                                onChange: (e)=>{
                                    const next = e.target.value;
                                    setSortTarget(next);
                                    if (next === 'colleges') setIsGallery(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "students",
                                        children: "Students"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "colleges",
                                        children: "Colleges"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            sortTarget === 'students' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "px-2 py-1 border rounded text-sm dark:bg-neutral-800 dark:border-neutral-700",
                                id: "student-sort-select",
                                value: studentSort,
                                onChange: (e)=>setStudentSort(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "grad_first",
                                        children: "Grad Class, First Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "grad_last",
                                        children: "Grad Class, Last Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "first",
                                        children: "First Name (Overall)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "last",
                                        children: "Last Name (Overall)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "px-2 py-1 border rounded text-sm dark:bg-neutral-800 dark:border-neutral-700",
                                id: "college-sort-select",
                                value: collegeSort,
                                onChange: (e)=>setCollegeSort(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "name_asc",
                                        children: "Name (A-Z)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "name_desc",
                                        children: "Name (Z-A)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "count_desc",
                                        children: "Student Count (Most)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "count_asc",
                                        children: "Student Count (Least)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            sortTarget === 'students' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsGallery(!isGallery),
                                id: "gallery-toggle-btn",
                                className: "px-3 py-1 bg-gray-200 dark:bg-neutral-700 rounded text-sm",
                                children: isGallery ? 'List' : 'Gallery'
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500",
                        children: sortTarget === 'students' ? `Showing ${filteredStudents.length} students` : `Showing ${collegesAggregated.length} colleges`
                    }, void 0, false, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "student-list-scroll",
                className: "flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400",
                style: {
                    scrollbarGutter: 'stable',
                    maxHeight: 'calc(100vh - 240px)'
                },
                children: sortTarget === 'students' && filteredStudents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-gray-500",
                    children: "No results found."
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 342,
                    columnNumber: 13
                }, this) : sortTarget === 'students' && (studentSort === 'grad_first' || studentSort === 'grad_last') ? groupedByGrad.map(([gradClass, students])=>{
                    const isCollapsed = collapsedClasses[gradClass] ?? false;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-neutral-800 text-left font-semibold",
                                onClick: ()=>toggleClass(gradClass),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block h-3 w-3 rounded-full",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][gradClass] || '#ccc'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                lineNumber: 353,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    displayGradClass(gradClass),
                                                    " Seniors"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                lineNumber: 357,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 ml-1",
                                                children: [
                                                    "(",
                                                    students.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                                lineNumber: 358,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 352,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: isCollapsed ? '[+]' : '[-]'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 360,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 348,
                                columnNumber: 17
                            }, this),
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: isGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                                    children: students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryItem, {
                                            student: s
                                        }, s.id, false, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 368,
                                            columnNumber: 27
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                    lineNumber: 366,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y divide-gray-200 dark:divide-neutral-800",
                                    children: students.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItem, {
                                            student: s
                                        }, s.id, false, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 374,
                                            columnNumber: 27
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                    lineNumber: 372,
                                    columnNumber: 23
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                lineNumber: 364,
                                columnNumber: 19
                            }, this)
                        ]
                    }, gradClass, true, {
                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                        lineNumber: 347,
                        columnNumber: 15
                    }, this);
                }) : sortTarget === 'students' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-gray-200 dark:divide-neutral-800",
                    children: sortedStudents.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListItem, {
                            student: s
                        }, s.id, false, {
                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                            lineNumber: 386,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 384,
                    columnNumber: 11
                }, this) : collegesAggregated.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center text-gray-500",
                    children: "No colleges found."
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 390,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-gray-200 dark:divide-neutral-800",
                    children: collegesAggregated.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer",
                            onClick: ()=>{
                                if (c.sampleStudent) {
                                    window.dispatchEvent(new CustomEvent('center-student-marker', {
                                        detail: {
                                            id: c.sampleStudent.id,
                                            lat: c.sampleStudent.lat,
                                            lng: c.sampleStudent.lng
                                        }
                                    }));
                                    window.dispatchEvent(new CustomEvent('focus-student-from-map', {
                                        detail: {
                                            id: c.sampleStudent.id
                                        }
                                    }));
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "mt-1",
                                    checked: isCollegeVisible(c.name),
                                    onChange: (e)=>{
                                        e.stopPropagation();
                                        toggleCollegeVisibility(c.name);
                                    },
                                    onClick: (e)=>e.stopPropagation()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                    lineNumber: 408,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-10 rounded bg-gray-200 dark:bg-neutral-700 overflow-hidden flex items-center justify-center",
                                    children: c.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: c.image,
                                        alt: c.name,
                                        className: "object-contain h-full w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 420,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "No Logo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                        lineNumber: 422,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-sm text-gray-900 dark:text-gray-100 truncate",
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                c.count,
                                                " ",
                                                c.count === 1 ? 'student' : 'students'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                                    lineNumber: 425,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, c.name, true, {
                            fileName: "[project]/src/components/sidebar/StudentList.tsx",
                            lineNumber: 394,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/StudentList.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/StudentList.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sidebar/StudentList.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
_s(StudentList, "i5RQ8mxzVXJ1mxjrAdc6z9VO3r8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c = StudentList;
var _c;
__turbopack_context__.k.register(_c, "StudentList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sidebar/FilterPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DataContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const INSTAGRAM_LINKS = {
    "'21": 'https://www.instagram.com/nestmdecisions2021/',
    "'22": 'https://www.instagram.com/nestm2022decisions/',
    "'23": 'https://www.instagram.com/nestmdecisions2023/',
    "'24": 'https://www.instagram.com/nestmdecisions2024/',
    "'25": 'https://www.instagram.com/nestmdecisions25/',
    "'26": 'https://www.instagram.com/nestmseniors2026/'
};
const REGION_OPTIONS = [
    {
        key: 'InCityNYC',
        label: 'NYC',
        detail: 'NYC schools',
        icon: '🗽'
    },
    {
        key: 'InStateNYOther',
        label: 'NY State',
        detail: 'Outside NYC',
        icon: '🧭'
    },
    {
        key: 'OutOfStateUS',
        label: 'Out-of-State US',
        detail: 'US outside NY',
        icon: '✈️'
    },
    {
        key: 'International',
        label: 'International',
        detail: 'Outside US',
        icon: '🌍'
    }
];
const MAJOR_COUNT_OVERRIDES = {
    "Arts/Design": 24,
    "Business/Economics": 53,
    "Communications": 1,
    "Computer Science": 5,
    "Education": 3,
    "Engineering": 37,
    "Health Sciences": 26,
    "Humanities": 10,
    "Humanities/Social Sciences": 67,
    "IT": 5,
    "Journalism": 1,
    "Life Sciences": 2,
    "Mathematics": 2,
    "Physical Sciences": 4,
    "Social Sciences": 7,
    "Statistics": 2,
    "STEM": 68,
    "Other": 0,
    "Undecided/Other": 66
};
const MAJOR_EMOJIS = {
    "Arts/Design": "🎨",
    "Business/Economics": "💼",
    "Communications": "🗣️",
    "Computer Science": "💻",
    "Education": "📚",
    "Engineering": "🛠️",
    "Health Sciences": "🩺",
    "Humanities": "📖",
    "Humanities/Social Sciences": "🌐",
    "IT": "🖥️",
    "Journalism": "📰",
    "Life Sciences": "🧬",
    "Mathematics": "➗",
    "Physical Sciences": "🔬",
    "Social Sciences": "🏛️",
    "Statistics": "📊",
    "STEM": "🚀",
    "Other": "✨",
    "Undecided/Other": "🤔",
    "Unknown": "❓"
};
function FilterPanel() {
    _s();
    const { allStudents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])();
    const { filterState, setFilterState, toggleGradClass, toggleMajorArea, toggleLocationFocus, toggleStateCountry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const regionCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FilterPanel.useMemo[regionCounts]": ()=>{
            const counts = {};
            allStudents.forEach({
                "FilterPanel.useMemo[regionCounts]": (s)=>{
                    counts[s.locationFocus] = (counts[s.locationFocus] || 0) + 1;
                }
            }["FilterPanel.useMemo[regionCounts]"]);
            return counts;
        }
    }["FilterPanel.useMemo[regionCounts]"], [
        allStudents
    ]);
    const majorCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FilterPanel.useMemo[majorCounts]": ()=>{
            const counts = {};
            allStudents.forEach({
                "FilterPanel.useMemo[majorCounts]": (s)=>{
                    const areas = s.majorArea.split(' & ').map({
                        "FilterPanel.useMemo[majorCounts].areas": (a)=>a.trim()
                    }["FilterPanel.useMemo[majorCounts].areas"]);
                    areas.forEach({
                        "FilterPanel.useMemo[majorCounts]": (area)=>{
                            counts[area] = (counts[area] || 0) + 1;
                        }
                    }["FilterPanel.useMemo[majorCounts]"]);
                }
            }["FilterPanel.useMemo[majorCounts]"]);
            return counts;
        }
    }["FilterPanel.useMemo[majorCounts]"], [
        allStudents
    ]);
    const outOfStateCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FilterPanel.useMemo[outOfStateCounts]": ()=>{
            const counts = {};
            allStudents.forEach({
                "FilterPanel.useMemo[outOfStateCounts]": (s)=>{
                    if (s.stateOrCountry && s.stateOrCountry.length === 2 && s.stateOrCountry !== 'NY') {
                        counts[s.stateOrCountry] = (counts[s.stateOrCountry] || 0) + 1;
                    }
                }
            }["FilterPanel.useMemo[outOfStateCounts]"]);
            return Object.entries(counts).filter({
                "FilterPanel.useMemo[outOfStateCounts]": ([, count])=>count > 0
            }["FilterPanel.useMemo[outOfStateCounts]"]).sort({
                "FilterPanel.useMemo[outOfStateCounts]": (a, b)=>a[0].localeCompare(b[0])
            }["FilterPanel.useMemo[outOfStateCounts]"]);
        }
    }["FilterPanel.useMemo[outOfStateCounts]"], [
        allStudents
    ]);
    const setRegions = (keys)=>{
        const nextState = {};
        REGION_OPTIONS.forEach(({ key })=>{
            nextState[key] = keys.includes(key);
        });
        // Keep "N/A" untouched (hidden) if it exists
        if (filterState.locationFocus['N/A'] !== undefined) {
            nextState['N/A'] = filterState.locationFocus['N/A'];
        }
        setFilterState((prev)=>({
                ...prev,
                locationFocus: nextState
            }));
    };
    const DEFAULT_SECTIONS = {
        grad: true,
        major: true,
        region: false,
        stateBreakdown: false,
        instagram: true
    };
    // Match SSR/CSR on first paint; hydrate preferences after mount
    const [sectionsOpen, setSectionsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(DEFAULT_SECTIONS);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "FilterPanel.useEffect": ()=>{
            try {
                const stored = window.localStorage.getItem('filter-sections-open');
                const parsed = stored ? JSON.parse(stored) : null;
                if (parsed && typeof parsed === 'object') {
                    setSectionsOpen({
                        "FilterPanel.useEffect": (prev)=>({
                                ...prev,
                                ...parsed
                            })
                    }["FilterPanel.useEffect"]);
                }
            } catch  {
            // ignore malformed storage
            }
        }
    }["FilterPanel.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "FilterPanel.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem('filter-sections-open', JSON.stringify(sectionsOpen));
        }
    }["FilterPanel.useEffect"], [
        sectionsOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border-b border-gray-300 dark:border-neutral-800 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                id: "class-instagram-section",
                open: sectionsOpen.instagram,
                className: "group",
                onToggle: (e)=>setSectionsOpen((prev)=>({
                            ...prev,
                            instagram: e.target.open
                        })),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "font-bold cursor-pointer list-none flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Class Instagrams"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-open:rotate-180 transition-transform",
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"]).map((cls)=>{
                                const bg = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][cls] || '#e5e7eb';
                                const textColor = '#ffffff';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-neutral-700 hover:opacity-90 flex items-center gap-1",
                                    style: {
                                        backgroundColor: bg,
                                        color: textColor
                                    },
                                    onClick: ()=>{
                                        const next = {};
                                        Object.keys(filterState.gradClasses || {}).forEach((k)=>{
                                            next[k] = k === cls;
                                        });
                                        setFilterState((prev)=>({
                                                ...prev,
                                                gradClasses: next
                                            }));
                                        const link = INSTAGRAM_LINKS[cls];
                                        if (link && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                                            window.open(link, '_blank', 'noopener,noreferrer');
                                        }
                                    },
                                    title: `View ${cls} Instagram & filter`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                className: "instagram-logo fill-current",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 181,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: cls.replace("'", '')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                            lineNumber: 185,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, cls, true, {
                                    fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                id: "grad-class-filter",
                open: sectionsOpen.grad,
                className: "group",
                onToggle: (e)=>setSectionsOpen((prev)=>({
                            ...prev,
                            grad: e.target.open
                        })),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "font-bold cursor-pointer list-none flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter by Graduating Class"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 201,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-open:rotate-180 transition-transform",
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-1",
                        children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"]).map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center space-x-2 text-sm cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: !!filterState.gradClasses[cls],
                                        onChange: ()=>toggleGradClass(cls),
                                        className: "rounded border-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 207,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 inline-block rounded-full",
                                        style: {
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][cls]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cls
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 214,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, cls, true, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                id: "major-area-filter",
                className: "group",
                open: sectionsOpen.major,
                onToggle: (e)=>setSectionsOpen((prev)=>({
                            ...prev,
                            major: e.target.open
                        })),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "font-bold cursor-pointer list-none flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter by Major Area"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 228,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-open:rotate-180 transition-transform",
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 229,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 227,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800",
                                        onClick: ()=>{
                                            const next = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREDEFINED_MAJOR_AREAS"].reduce((acc, a)=>({
                                                    ...acc,
                                                    [a]: true
                                                }), {});
                                            setFilterState((prev)=>({
                                                    ...prev,
                                                    majorAreas: next
                                                }));
                                        },
                                        children: "✅ Select All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800",
                                        onClick: ()=>{
                                            const next = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREDEFINED_MAJOR_AREAS"].reduce((acc, a)=>({
                                                    ...acc,
                                                    [a]: false
                                                }), {});
                                            setFilterState((prev)=>({
                                                    ...prev,
                                                    majorAreas: next
                                                }));
                                        },
                                        children: "🧹 Clear All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREDEFINED_MAJOR_AREAS"].filter((area)=>(majorCounts[area] ?? MAJOR_COUNT_OVERRIDES[area] ?? 0) > 0).map((area)=>{
                                    const checked = !!filterState.majorAreas[area];
                                    const displayCount = majorCounts[area] ?? MAJOR_COUNT_OVERRIDES[area] ?? 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `flex items-center justify-between rounded border px-3 py-2 text-sm cursor-pointer transition-colors ${checked ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800'}`,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            toggleMajorArea(area);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: MAJOR_EMOJIS[area] || "📌"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: area
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            displayCount,
                                                            " students"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 270,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                readOnly: true,
                                                checked: checked,
                                                className: "w-4 h-4 rounded border-gray-300 dark:border-neutral-600 accent-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 277,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, area, true, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 258,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                lineNumber: 221,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                id: "region-filter",
                className: "group",
                open: sectionsOpen.region,
                onToggle: (e)=>setSectionsOpen((prev)=>({
                            ...prev,
                            region: e.target.open
                        })),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "font-bold cursor-pointer list-none flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Filter by Region"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 298,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-open:rotate-180 transition-transform",
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 299,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 297,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800",
                                        onClick: ()=>setRegions(REGION_OPTIONS.map((r)=>r.key)),
                                        children: "Select All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800",
                                        onClick: ()=>setRegions([
                                                'InCityNYC'
                                            ]),
                                        children: "NYC Only"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800",
                                        onClick: ()=>setRegions([
                                                'InCityNYC',
                                                'InStateNYOther'
                                            ]),
                                        children: "All NY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800",
                                        onClick: ()=>setRegions([
                                                'OutOfStateUS',
                                                'International'
                                            ]),
                                        children: "Beyond NY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: REGION_OPTIONS.map(({ key, label, detail, icon })=>{
                                    const checked = !!filterState.locationFocus[key];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `flex items-center justify-between rounded border px-3 py-2 text-sm cursor-pointer transition-colors ${checked ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800'}`,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            toggleLocationFocus(key);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                children: detail
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 345,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            "(",
                                                            regionCounts[key] || 0,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        readOnly: true,
                                                        checked: checked,
                                                        className: "w-4 h-4 rounded border-gray-300 dark:border-neutral-600 accent-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 352,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 333,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this),
                            outOfStateCounts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "group",
                                open: sectionsOpen.stateBreakdown,
                                onToggle: (e)=>setSectionsOpen((prev)=>({
                                            ...prev,
                                            stateBreakdown: e.target.open
                                        })),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "font-semibold cursor-pointer list-none flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Out-of-State breakdown"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 373,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "group-open:rotate-180 transition-transform",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 374,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 372,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid grid-cols-2 gap-2 text-sm",
                                        children: outOfStateCounts.map(([state, count])=>{
                                            const checked = filterState.stateCountry[state] ?? true;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `flex items-center justify-between rounded border px-3 py-2 cursor-pointer transition-colors ${checked ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700' : 'bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-800'}`,
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    toggleStateCountry(state);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: state
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            "(",
                                                            count,
                                                            ")",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                readOnly: true,
                                                                checked: checked,
                                                                className: "w-4 h-4 rounded border-gray-300 dark:border-neutral-600 accent-purple-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, state, true, {
                                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                                lineNumber: 380,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                        lineNumber: 376,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                                lineNumber: 367,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
                lineNumber: 291,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sidebar/FilterPanel.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(FilterPanel, "1awgQbhO1tr/Kwve6lgdj161wEY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"]
    ];
});
_c = FilterPanel;
var _c;
__turbopack_context__.k.register(_c, "FilterPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sidebar/StatisticsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatisticsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DataContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StatisticsPanel() {
    _s();
    const { filteredStudents, filterState, toggleLocationFocus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const { allStudents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])();
    const regionStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StatisticsPanel.useMemo[regionStats]": ()=>{
            const template = {
                "StatisticsPanel.useMemo[regionStats].template": ()=>({
                        Public: 0,
                        Private: 0,
                        Total: 0,
                        grads: {}
                    })
            }["StatisticsPanel.useMemo[regionStats].template"];
            const stats = {
                InCityNYC: template(),
                InStateNYOther: template(),
                OutOfStateUS: template(),
                International: template(),
                Total: template()
            };
            filteredStudents.forEach({
                "StatisticsPanel.useMemo[regionStats]": (student)=>{
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
                }
            }["StatisticsPanel.useMemo[regionStats]"]);
            return stats;
        }
    }["StatisticsPanel.useMemo[regionStats]"], [
        filteredStudents
    ]);
    const topColleges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StatisticsPanel.useMemo[topColleges]": ()=>{
            const counts = {};
            filteredStudents.forEach({
                "StatisticsPanel.useMemo[topColleges]": (s)=>{
                    counts[s.collegeName] = (counts[s.collegeName] || 0) + 1;
                }
            }["StatisticsPanel.useMemo[topColleges]"]);
            return Object.entries(counts).sort({
                "StatisticsPanel.useMemo[topColleges]": (a, b)=>b[1] - a[1]
            }["StatisticsPanel.useMemo[topColleges]"]).slice(0, 5);
        }
    }["StatisticsPanel.useMemo[topColleges]"], [
        filteredStudents
    ]);
    const totalStudents = allStudents.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border-b border-gray-300 dark:border-neutral-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
            className: "group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                    className: "font-bold cursor-pointer list-none flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "College Attendance Statistics"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                            lineNumber: 61,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "group-open:rotate-180 transition-transform",
                            children: "▼"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                            lineNumber: 62,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm",
                            children: [
                                {
                                    key: "InCityNYC",
                                    label: "In City (NYC)"
                                },
                                {
                                    key: "InStateNYOther",
                                    label: "In State (NY)"
                                },
                                {
                                    key: "OutOfStateUS",
                                    label: "Out of State"
                                },
                                {
                                    key: "International",
                                    label: "International"
                                }
                            ].map(({ key, label })=>{
                                const region = regionStats[key];
                                const percent = totalStudents ? Math.round(region.Total / totalStudents * 100) : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-sm flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                                            children: [
                                                                region.Total,
                                                                " students • ",
                                                                percent,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: !!filterState.locationFocus[key],
                                                            onChange: ()=>toggleLocationFocus(key)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Show"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                            lineNumber: 80,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
                                                    children: [
                                                        "Public: ",
                                                        region.Public
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
                                                    children: [
                                                        "Private: ",
                                                        region.Private
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                            lineNumber: 94,
                                            columnNumber: 23
                                        }, this),
                                        Object.keys(region.grads).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 text-xs",
                                            children: Object.entries(region.grads).sort().map(([grad, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded text-white font-semibold",
                                                    style: {
                                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][grad] || '#666'
                                                    },
                                                    children: [
                                                        grad,
                                                        ": ",
                                                        count
                                                    ]
                                                }, grad, true, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 29
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                            lineNumber: 99,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                    lineNumber: 76,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-sm",
                                            children: "Top Colleges (Filtered)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: [
                                                filteredStudents.length,
                                                " students"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                topColleges.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "No colleges in current filters."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-xs space-y-1",
                                    children: topColleges.map(([college, count], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        idx + 1,
                                                        ". ",
                                                        college
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, college, true, {
                                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                            lineNumber: 127,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sidebar/StatisticsPanel.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(StatisticsPanel, "HyshLHDx7o3J7k7hy4V+ENJmrBY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = StatisticsPanel;
var _c;
__turbopack_context__.k.register(_c, "StatisticsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sidebar/TrendCharts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DataContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function TrendCharts() {
    _s();
    const { allStudents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme === 'dark';
    const years = [
        "'21",
        "'22",
        "'23",
        "'24",
        "'25",
        "'26"
    ];
    const palette = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#8A2BE2',
        '#5F9EA0',
        '#D2691E',
        '#FF7F50',
        '#6495ED',
        '#20c997',
        '#f472b6',
        '#f59e0b',
        '#22c55e',
        '#6366f1',
        '#06b6d4'
    ];
    const totalsByYear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "TrendCharts.useMemo[totalsByYear]": ()=>{
            const map = {};
            years.forEach({
                "TrendCharts.useMemo[totalsByYear]": (y)=>{
                    map[y] = 0;
                }
            }["TrendCharts.useMemo[totalsByYear]"]);
            allStudents.forEach({
                "TrendCharts.useMemo[totalsByYear]": (s)=>{
                    if (map[s.gradClass] !== undefined) map[s.gradClass] += 1;
                }
            }["TrendCharts.useMemo[totalsByYear]"]);
            return map;
        }
    }["TrendCharts.useMemo[totalsByYear]"], [
        allStudents,
        years
    ]);
    const majorDatasets = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREDEFINED_MAJOR_AREAS"].map((area, idx)=>{
        const data = years.map((year)=>{
            const total = totalsByYear[year] || 0;
            if (!total) return 0;
            const count = allStudents.filter((s)=>s.gradClass === year && s.majorArea === area).length;
            return count / total * 100;
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
        {
            key: 'InCityNYC',
            label: 'NYC'
        },
        {
            key: 'InStateNYOther',
            label: 'Rest of NY'
        },
        {
            key: 'OutOfStateUS',
            label: 'Out of State'
        },
        {
            key: 'International',
            label: 'International'
        }
    ];
    const locationDatasets = locationKeys.map((loc, idx)=>{
        const data = years.map((year)=>{
            const total = totalsByYear[year] || 0;
            if (!total) return 0;
            const count = allStudents.filter((s)=>s.gradClass === year && s.locationFocus === loc.key).length;
            return count / total * 100;
        });
        return {
            label: loc.label,
            data,
            borderColor: palette[(idx + 5) % palette.length],
            backgroundColor: palette[(idx + 5) % palette.length],
            tension: 0.3
        };
    });
    const topFiveColleges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "TrendCharts.useMemo[topFiveColleges]": ()=>{
            const counts = {};
            allStudents.forEach({
                "TrendCharts.useMemo[topFiveColleges]": (s)=>{
                    if (!s.collegeName || s.collegeName === 'Undecided') return;
                    counts[s.collegeName] = (counts[s.collegeName] || 0) + 1;
                }
            }["TrendCharts.useMemo[topFiveColleges]"]);
            return Object.entries(counts).sort({
                "TrendCharts.useMemo[topFiveColleges]": (a, b)=>b[1] - a[1]
            }["TrendCharts.useMemo[topFiveColleges]"]).slice(0, 5).map({
                "TrendCharts.useMemo[topFiveColleges]": ([name])=>name
            }["TrendCharts.useMemo[topFiveColleges]"]);
        }
    }["TrendCharts.useMemo[topFiveColleges]"], [
        allStudents
    ]);
    const collegeDatasets = topFiveColleges.map((college, idx)=>{
        const data = years.map((year)=>{
            const total = totalsByYear[year] || 0;
            if (!total) return 0;
            const count = allStudents.filter((s)=>s.gradClass === year && s.collegeName === college).length;
            return count / total * 100;
        });
        return {
            label: college,
            data,
            borderColor: palette[(idx + 9) % palette.length],
            backgroundColor: palette[(idx + 9) % palette.length],
            tension: 0.3
        };
    });
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: isDark ? '#e5e5e5' : '#333',
                    boxWidth: 10,
                    font: {
                        size: 10
                    }
                }
            },
            title: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (ctx)=>{
                        const value = typeof ctx.parsed?.y === 'number' ? ctx.parsed.y : 0;
                        return `${ctx.dataset.label}: ${value.toFixed(1)}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                },
                ticks: {
                    color: isDark ? '#ccc' : '#666'
                }
            },
            y: {
                grid: {
                    color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                },
                ticks: {
                    color: isDark ? '#ccc' : '#666',
                    callback: (v)=>`${v}%`
                },
                min: 0,
                max: 100
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border-b border-gray-300 dark:border-neutral-800 space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
            className: "group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                    className: "font-bold cursor-pointer list-none flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Data Trends Over Time"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "group-open:rotate-180 transition-transform",
                            children: "▼"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-xs font-bold text-center mb-2 dark:text-gray-300",
                                    children: "Major Area Popularity (% of Grads/Year)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full pb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        options: options,
                                        data: {
                                            labels: years,
                                            datasets: majorDatasets
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-xs font-bold text-center mb-2 dark:text-gray-300",
                                    children: "Location Focus (% of Grads/Year)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full pb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        options: options,
                                        data: {
                                            labels: years,
                                            datasets: locationDatasets
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "text-xs font-bold text-center mb-2 dark:text-gray-300",
                                    children: "Top 5 Colleges by Attendance (% of Grads/Year)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full pb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        options: options,
                                        data: {
                                            labels: years,
                                            datasets: collegeDatasets
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sidebar/TrendCharts.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(TrendCharts, "+o9XwcDvcDRYhOIoqgfacys4ItQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = TrendCharts;
var _c;
__turbopack_context__.k.register(_c, "TrendCharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/MapMarkers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapMarkers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$markerclusterer$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@googlemaps/markerclusterer/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UIContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const TIME_FORMAT_STORAGE_KEY = 'college-info-time-format';
const isMarkerDebugEnabled = ()=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MARKER_DEBUG === 'true') return true;
    if ("TURBOPACK compile-time truthy", 1) {
        return window.localStorage?.getItem('marker-debug') === 'true';
    }
    //TURBOPACK unreachable
    ;
};
const debugLog = (...args)=>{
    if (isMarkerDebugEnabled()) {
        console.debug('[MapMarkers]', ...args);
    }
};
function MapMarkers({ students }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { activeHoverId, setActiveHoverId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const clustererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const infowindowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastHighlightedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastInfoWindowStudentIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const weatherCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const transitCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const timeFormatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('24');
    const lastMarkerBuildRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const locationFocusChipClasses = {
        InCityNYC: 'chip-nyc',
        InStateNYOther: 'chip-nystate',
        OutOfStateUS: 'chip-outofstate',
        International: 'chip-international',
        'N/A': 'muted'
    };
    const renderChip = (label, extraClass = '')=>`<span class="info-chip${extraClass ? ` ${extraClass}` : ''}">${label}</span>`;
    const buildIcon = (color, scale = 7, strokeWeight = 1.5)=>({
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: theme === 'dark' ? '#111' : '#fff',
            strokeWeight,
            scale
        });
    // Cleanup markers on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMarkers.useEffect": ()=>{
            return ({
                "MapMarkers.useEffect": ()=>{
                    if (clustererRef.current) {
                        clustererRef.current.clearMarkers();
                    }
                }
            })["MapMarkers.useEffect"];
        }
    }["MapMarkers.useEffect"], []);
    // Initialize info window once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMarkers.useEffect": ()=>{
            if (typeof google === 'undefined') return;
            if (!infowindowRef.current) {
                infowindowRef.current = new google.maps.InfoWindow();
            }
        }
    }["MapMarkers.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMarkers.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const storedFormat = window.localStorage.getItem(TIME_FORMAT_STORAGE_KEY);
            if (storedFormat === '12' || storedFormat === '24') {
                timeFormatRef.current = storedFormat;
            }
        }
    }["MapMarkers.useEffect"], []);
    // Effect to handle marker highlighting from list hover
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMarkers.useEffect": ()=>{
            if (typeof google === 'undefined') return;
            debugLog('Hover highlight update', {
                activeHoverId,
                previousHighlighted: lastHighlightedRef.current
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
        }
    }["MapMarkers.useEffect"], [
        activeHoverId,
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapMarkers.useEffect": ()=>{
            if (!map || typeof google === 'undefined') return;
            const buildStart = typeof performance !== 'undefined' ? performance.now() : Date.now();
            const reasons = [];
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
                theme
            };
            debugLog('Rebuilding markers', {
                reasons,
                studentsLength: students.length,
                theme
            });
            if (!clustererRef.current) {
                clustererRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$googlemaps$2f$markerclusterer$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerClusterer"]({
                    map,
                    renderer: {
                        render: {
                            "MapMarkers.useEffect": ({ count, position })=>{
                                let color = "red";
                                let diameter = 50;
                                let labelColor = "white";
                                if (count <= 5) {
                                    color = "green";
                                    diameter = 30;
                                } else if (count <= 10) {
                                    color = "#90EE90";
                                    diameter = 35;
                                    labelColor = "black";
                                } else if (count <= 20) {
                                    color = "yellow";
                                    diameter = 40;
                                    labelColor = "black";
                                } else if (count <= 50) {
                                    color = "orange";
                                    diameter = 45;
                                }
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
                                        fontWeight: 'bold'
                                    },
                                    zIndex: 100 + count
                                });
                            }
                        }["MapMarkers.useEffect"]
                    }
                });
                debugLog('Created marker clusterer instance');
            }
            const previousCount = clustererRef.current.getMarkers?.().length;
            clustererRef.current.clearMarkers();
            debugLog('Cleared clusterer markers', {
                previousCount
            });
            markersRef.current = {};
            lastHighlightedRef.current = null;
            const mapsApiKey = ("TURBOPACK compile-time value", "AIzaSyCVEZB2WjUpEhqnqGjY_zMCQSKUHTdjAWc");
            const weatherApiKey = ("TURBOPACK compile-time value", "ba2c0bba257594f5f32cd53d2abc2be7");
            const newMarkers = [];
            const createSocialLinkSVG = {
                "MapMarkers.useEffect.createSocialLinkSVG": (platform, size = 16)=>{
                    const invert = platform === 'github' && theme === 'dark' ? 'filter: invert(1);' : '';
                    return `<img src="/logos/${platform}.svg" alt="${platform}" style="width:${size}px;height:${size}px;vertical-align:middle;${invert}" />`;
                }
            }["MapMarkers.useEffect.createSocialLinkSVG"];
            const createHonoraryIcons = {
                "MapMarkers.useEffect.createHonoraryIcons": (honoraries)=>{
                    if (!honoraries || honoraries.length === 0) return '';
                    const icons = {
                        dean_scholars: '/logos/dean scholars.png',
                        macaulay: '/logos/macaulay.png',
                        posse: '/logos/posse.png',
                        questbridge: '/logos/questbridge.png'
                    };
                    return honoraries.map({
                        "MapMarkers.useEffect.createHonoraryIcons": (h)=>{
                            if (!icons[h]) return '';
                            const width = h === 'posse' ? 20 : 16;
                            return `<img src="${icons[h]}" alt="${h}" style="height:16px;width:${width}px;vertical-align:middle;margin-left:4px;">`;
                        }
                    }["MapMarkers.useEffect.createHonoraryIcons"]).join('');
                }
            }["MapMarkers.useEffect.createHonoraryIcons"];
            const getLastName = {
                "MapMarkers.useEffect.getLastName": (full)=>{
                    const parts = full.trim().split(/\s+/);
                    return parts.length > 1 ? parts[parts.length - 1] : full;
                }
            }["MapMarkers.useEffect.getLastName"];
            const getFirstName = {
                "MapMarkers.useEffect.getFirstName": (full)=>{
                    const parts = full.trim().split(/\s+/);
                    return parts[0] || full;
                }
            }["MapMarkers.useEffect.getFirstName"];
            const formatLocationFocus = {
                "MapMarkers.useEffect.formatLocationFocus": (focus)=>{
                    const lookup = {
                        InCityNYC: 'NYC',
                        InStateNYOther: 'NY State (Outside NYC)',
                        OutOfStateUS: 'Out of State (US)',
                        International: 'International',
                        'N/A': 'N/A'
                    };
                    return lookup[focus] || focus || 'N/A';
                }
            }["MapMarkers.useEffect.formatLocationFocus"];
            const buildStudentsHtml = {
                "MapMarkers.useEffect.buildStudentsHtml": (student)=>{
                    if (student.collegeName === 'Undecided') {
                        return `<div style="line-height:1.6;">
          <b>${student.seniorName}</b>
          <span style="color:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][student.gradClass] || '#ccc'};"> (Class ${student.gradClass})</span>
          <div><small>Major: ${student.major || 'Undecided'} (${student.majorArea || 'N/A'})</small></div>
        </div>`;
                    }
                    const studentsAtSameCollege = students.filter({
                        "MapMarkers.useEffect.buildStudentsHtml.studentsAtSameCollege": (s)=>s.collegeName === student.collegeName && s.collegeName !== 'Undecided' && s.isIndividuallyVisible
                    }["MapMarkers.useEffect.buildStudentsHtml.studentsAtSameCollege"]).sort({
                        "MapMarkers.useEffect.buildStudentsHtml.studentsAtSameCollege": (a, b)=>{
                            if (a.gradClass !== b.gradClass) return a.gradClass.localeCompare(b.gradClass);
                            const lastCompare = getLastName(a.seniorName).localeCompare(getLastName(b.seniorName));
                            if (lastCompare !== 0) return lastCompare;
                            return getFirstName(a.seniorName).localeCompare(getFirstName(b.seniorName));
                        }
                    }["MapMarkers.useEffect.buildStudentsHtml.studentsAtSameCollege"]);
                    if (studentsAtSameCollege.length === 0) {
                        return 'No other visible students found for this college with current filters.';
                    }
                    const studentWord = studentsAtSameCollege.length === 1 ? 'Student' : 'Students';
                    let html = `<u>${studentsAtSameCollege.length} ${studentWord} Attending Visible:</u><ol style="margin-top: 3px; margin-bottom: 3px; padding-left: 22px; list-style: decimal;">`;
                    studentsAtSameCollege.forEach({
                        "MapMarkers.useEffect.buildStudentsHtml": (s)=>{
                            const socials = `
          ${s.linkedInUrl ? `<a href="${s.linkedInUrl}" target="_blank" rel="noreferrer" class="social-icon-link">${createSocialLinkSVG('linkedin')}</a>` : ''}
          ${s.instagramUrl ? `<a href="${s.instagramUrl}" target="_blank" rel="noreferrer" class="social-icon-link">${createSocialLinkSVG('instagram')}</a>` : ''}
          ${s.githubUrl ? `<a href="${s.githubUrl}" target="_blank" rel="noreferrer" class="social-icon-link">${createSocialLinkSVG('github')}</a>` : ''}
        `;
                            const badges = createHonoraryIcons(s.honoraries);
                            html += `<li style="padding:4px 2px; border-radius:3px;">
          <div style="line-height:1.5; display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
            ${s.seniorName} <span style="color:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][s.gradClass] || '#ccc'};">(${s.gradClass})</span>
            ${badges}
            ${socials}
          </div>
          <small style="padding-left:10px;">Major: ${s.major || 'Undecided'} (${s.majorArea || 'N/A'})</small>
        </li>`;
                        }
                    }["MapMarkers.useEffect.buildStudentsHtml"]);
                    html += '</ol>';
                    return html;
                }
            }["MapMarkers.useEffect.buildStudentsHtml"];
            const computeTimeOfDay = {
                "MapMarkers.useEffect.computeTimeOfDay": (collegeHour)=>{
                    if (collegeHour >= 5 && collegeHour < 7) return 'Dawn / Early Morning';
                    if (collegeHour >= 7 && collegeHour < 9) return 'Morning';
                    if (collegeHour >= 9 && collegeHour < 12) return 'Late Morning';
                    if (collegeHour >= 12 && collegeHour < 14) return 'Afternoon';
                    if (collegeHour >= 14 && collegeHour < 17) return 'Late Afternoon';
                    if (collegeHour >= 17 && collegeHour < 19) return 'Dusk / Evening';
                    if (collegeHour >= 19 && collegeHour < 22) return 'Nighttime';
                    return 'Late Night';
                }
            }["MapMarkers.useEffect.computeTimeOfDay"];
            const getTimeCacheKey = {
                "MapMarkers.useEffect.getTimeCacheKey": (target)=>`${target.lat},${target.lng}`
            }["MapMarkers.useEffect.getTimeCacheKey"];
            const formatTimeString = {
                "MapMarkers.useEffect.formatTimeString": (date, format, timeZoneId)=>{
                    const options = {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: format === '12'
                    };
                    if (timeZoneId) options.timeZone = timeZoneId;
                    const formatter = new Intl.DateTimeFormat('en-US', options);
                    const formatted = formatter.format(date);
                    if (format !== '12') return formatted;
                    const parts = formatter.formatToParts(date);
                    const dayPeriod = parts.find({
                        "MapMarkers.useEffect.formatTimeString": (p)=>p.type === 'dayPeriod'
                    }["MapMarkers.useEffect.formatTimeString"])?.value?.toUpperCase() || '';
                    if (dayPeriod) {
                        return formatted.replace(/(am|pm)/i, dayPeriod);
                    }
                    const hourPart = parts.find({
                        "MapMarkers.useEffect.formatTimeString": (p)=>p.type === 'hour'
                    }["MapMarkers.useEffect.formatTimeString"])?.value;
                    const hourNumber = hourPart ? parseInt(hourPart, 10) : date.getHours();
                    const suffix = hourNumber >= 12 ? 'PM' : 'AM';
                    return `${formatted} ${suffix}`;
                }
            }["MapMarkers.useEffect.formatTimeString"];
            const renderTimeDisplay = {
                "MapMarkers.useEffect.renderTimeDisplay": (details, format)=>{
                    const timeZoneId = details.timeZoneId || 'UTC';
                    const now = new Date();
                    const collegeTimeStr = formatTimeString(now, format, timeZoneId);
                    const collegeHour = parseInt(now.toLocaleTimeString('en-US', {
                        timeZone: timeZoneId,
                        hour: 'numeric',
                        hour12: false
                    }), 10);
                    const collegeTimeZoneAbbr = now.toLocaleTimeString('en-US', {
                        timeZone: timeZoneId,
                        timeZoneName: 'short',
                        hour12: true
                    }).split(' ').pop();
                    const userTimeStr = formatTimeString(now, format);
                    return `
        <div>${collegeTimeStr} (${collegeTimeZoneAbbr}) - ${computeTimeOfDay(collegeHour)}</div>
        <div>Your Time: ${userTimeStr}</div>
      `;
                }
            }["MapMarkers.useEffect.renderTimeDisplay"];
            const buildTimeSection = {
                "MapMarkers.useEffect.buildTimeSection": (target, details, format, labelOverride)=>{
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
                }
            }["MapMarkers.useEffect.buildTimeSection"];
            const fetchCollegeTimeDetails = {
                "MapMarkers.useEffect.fetchCollegeTimeDetails": async (target, label = 'Time Info')=>{
                    const cacheKey = getTimeCacheKey(target);
                    if (timeCacheRef.current.has(cacheKey)) return timeCacheRef.current.get(cacheKey);
                    if (!target.lat && !target.lng || !mapsApiKey) return null;
                    const timestamp = Math.floor(Date.now() / 1000);
                    const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${target.lat},${target.lng}&timestamp=${timestamp}&key=${mapsApiKey}`;
                    try {
                        const response = await fetch(apiUrl);
                        const data = await response.json();
                        if (data.status !== 'OK') {
                            const fallback = {
                                timeZoneId: 'UTC',
                                label: `${label} (API Error)`
                            };
                            timeCacheRef.current.set(cacheKey, fallback);
                            return fallback;
                        }
                        const timeZoneId = data.timeZoneId;
                        const details = {
                            timeZoneId,
                            label
                        };
                        timeCacheRef.current.set(cacheKey, details);
                        return details;
                    } catch (error) {
                        console.error('Error fetching timezone data:', error);
                        const fallback = {
                            timeZoneId: 'UTC',
                            label: `${label} (Fetch Error)`
                        };
                        timeCacheRef.current.set(cacheKey, fallback);
                        return fallback;
                    }
                }
            }["MapMarkers.useEffect.fetchCollegeTimeDetails"];
            const wireTimeDropdown = {
                "MapMarkers.useEffect.wireTimeDropdown": (target)=>{
                    if (!infowindowRef.current || typeof google === 'undefined') return;
                    const cacheKey = getTimeCacheKey(target);
                    google.maps.event.addListenerOnce(infowindowRef.current, 'domready', {
                        "MapMarkers.useEffect.wireTimeDropdown": ()=>{
                            const container = document.querySelector('.info-window-content');
                            if (!container) return;
                            const select = container.querySelector(`.time-format-select[data-cache-key="${cacheKey}"]`);
                            const body = container.querySelector(`.time-info-body[data-cache-key="${cacheKey}"]`);
                            if (!select || !body) return;
                            const applyFormat = {
                                "MapMarkers.useEffect.wireTimeDropdown.applyFormat": (format)=>{
                                    const details = timeCacheRef.current.get(cacheKey);
                                    if (!details) return;
                                    body.innerHTML = renderTimeDisplay(details, format);
                                }
                            }["MapMarkers.useEffect.wireTimeDropdown.applyFormat"];
                            select.value = timeFormatRef.current;
                            applyFormat(timeFormatRef.current);
                            const handleChange = {
                                "MapMarkers.useEffect.wireTimeDropdown.handleChange": (event)=>{
                                    const newFormat = event.target.value === '12' ? '12' : '24';
                                    timeFormatRef.current = newFormat;
                                    if ("TURBOPACK compile-time truthy", 1) {
                                        window.localStorage.setItem(TIME_FORMAT_STORAGE_KEY, newFormat);
                                    }
                                    applyFormat(newFormat);
                                }
                            }["MapMarkers.useEffect.wireTimeDropdown.handleChange"];
                            select.addEventListener('change', handleChange);
                            google.maps.event.addListenerOnce(infowindowRef.current, 'closeclick', {
                                "MapMarkers.useEffect.wireTimeDropdown": ()=>{
                                    select.removeEventListener('change', handleChange);
                                }
                            }["MapMarkers.useEffect.wireTimeDropdown"]);
                        }
                    }["MapMarkers.useEffect.wireTimeDropdown"]);
                }
            }["MapMarkers.useEffect.wireTimeDropdown"];
            const fetchCollegeWeatherHTML = {
                "MapMarkers.useEffect.fetchCollegeWeatherHTML": async (target)=>{
                    const cacheKey = `${target.lat},${target.lng}`;
                    if (weatherCacheRef.current.has(cacheKey)) return weatherCacheRef.current.get(cacheKey);
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
                            const description = data.weather[0].description.replace(/\b\w/g, {
                                "MapMarkers.useEffect.fetchCollegeWeatherHTML.description": (l)=>l.toUpperCase()
                            }["MapMarkers.useEffect.fetchCollegeWeatherHTML.description"]);
                            const iconCode = data.weather[0].icon;
                            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                            const tempF = Math.round(data.main.temp);
                            const feelsLikeF = Math.round(data.main.feels_like);
                            const tempC = Math.round((tempF - 32) * 5 / 9);
                            const feelsLikeC = Math.round((feelsLikeF - 32) * 5 / 9);
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
                }
            }["MapMarkers.useEffect.fetchCollegeWeatherHTML"];
            const haversineDistance = {
                "MapMarkers.useEffect.haversineDistance": (lat1, lon1, lat2, lon2)=>{
                    const toRad = {
                        "MapMarkers.useEffect.haversineDistance.toRad": (deg)=>deg * Math.PI / 180
                    }["MapMarkers.useEffect.haversineDistance.toRad"];
                    const R = 6371000;
                    const dLat = toRad(lat2 - lat1);
                    const dLon = toRad(lon2 - lon1);
                    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    return R * c;
                }
            }["MapMarkers.useEffect.haversineDistance"];
            const isWithinNYC = {
                "MapMarkers.useEffect.isWithinNYC": (lat, lng)=>lat >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NYC_BOUNDS"].south && lat <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NYC_BOUNDS"].north && lng >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NYC_BOUNDS"].west && lng <= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NYC_BOUNDS"].east
            }["MapMarkers.useEffect.isWithinNYC"];
            const fetchNearbyTransitStopsHTML = {
                "MapMarkers.useEffect.fetchNearbyTransitStopsHTML": async (target)=>{
                    const cacheKey = `${target.lat},${target.lng}`;
                    if (transitCacheRef.current.has(cacheKey)) return transitCacheRef.current.get(cacheKey);
                    if (!google?.maps?.places || !target.lat || !target.lng) return '';
                    const ICONS = {
                        BUS: '<img class="transit-icon" alt="Bus" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/bus2.svg">',
                        TRAIN: '<img class="transit-icon" alt="Train" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/rail2.svg">',
                        LIGHT_RAIL: '<img class="transit-icon" alt="Light rail" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/tram2.svg">',
                        SUBWAY: '<img class="transit-icon" alt="Subway" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/subway2.svg">',
                        STREETCAR: '<img class="transit-icon" alt="Streetcar" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/cablecar.svg">',
                        FERRY: '<img class="transit-icon" alt="Ferry" src="//maps.gstatic.com/mapfiles/transit/iw2/svg/ferry.svg">'
                    };
                    const getTransitDetails = {
                        "MapMarkers.useEffect.fetchNearbyTransitStopsHTML.getTransitDetails": (types = [], name = '')=>{
                            const lowerName = name.toLowerCase();
                            if (types.includes('ferry_terminal')) return {
                                type: 'Ferry',
                                icon: ICONS.FERRY,
                                labelClass: 'ferry'
                            };
                            if (types.includes('subway_station')) return {
                                type: 'Subway',
                                icon: ICONS.SUBWAY,
                                labelClass: 'subway'
                            };
                            if (types.includes('light_rail_station')) return {
                                type: 'Light Rail',
                                icon: ICONS.LIGHT_RAIL,
                                labelClass: 'light-rail'
                            };
                            if (types.includes('train_station')) return {
                                type: 'Rail',
                                icon: ICONS.TRAIN,
                                labelClass: 'rail'
                            };
                            if (types.includes('bus_station') || types.includes('bus_stop')) return {
                                type: 'Bus',
                                icon: ICONS.BUS,
                                labelClass: 'bus'
                            };
                            if (types.includes('transit_station')) {
                                if (lowerName.includes('streetcar')) return {
                                    type: 'Streetcar',
                                    icon: ICONS.STREETCAR,
                                    labelClass: 'streetcar'
                                };
                                if (lowerName.includes('light rail')) return {
                                    type: 'Light Rail',
                                    icon: ICONS.LIGHT_RAIL,
                                    labelClass: 'light-rail'
                                };
                                return {
                                    type: 'Bus',
                                    icon: ICONS.BUS,
                                    labelClass: 'bus'
                                };
                            }
                            return {
                                type: 'Transit',
                                icon: ICONS.TRAIN,
                                labelClass: 'rail'
                            };
                        }
                    }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML.getTransitDetails"];
                    const service = new google.maps.places.PlacesService(map);
                    const location = new google.maps.LatLng(target.lat, target.lng);
                    const baseRequest = {
                        location,
                        keyword: 'transit subway bus stop rail station light rail ferry terminal',
                        type: 'transit_station'
                    };
                    const request = target.locationFocus === 'InCityNYC' || isWithinNYC(target.lat, target.lng) ? {
                        ...baseRequest,
                        rankBy: google.maps.places.RankBy.DISTANCE
                    } : {
                        ...baseRequest,
                        radius: 7500
                    };
                    const html = await new Promise({
                        "MapMarkers.useEffect.fetchNearbyTransitStopsHTML": (resolve)=>{
                            service.nearbySearch(request, {
                                "MapMarkers.useEffect.fetchNearbyTransitStopsHTML": (results, status)=>{
                                    if (status !== google.maps.places.PlacesServiceStatus.OK || !results || results.length === 0) {
                                        resolve('');
                                        return;
                                    }
                                    const uniqueStops = new Map();
                                    results.slice(0, 25).forEach({
                                        "MapMarkers.useEffect.fetchNearbyTransitStopsHTML": (place)=>{
                                            if (!place.geometry?.location) return;
                                            const details = getTransitDetails(place.types || [], place.name || '');
                                            const distance = google.maps.geometry?.spherical?.computeDistanceBetween ? google.maps.geometry.spherical.computeDistanceBetween(location, place.geometry.location) : haversineDistance(target.lat, target.lng, place.geometry.location.lat(), place.geometry.location.lng());
                                            const cleanName = (place.name || '').replace(/\s*\([^)]+\)$/, '').trim();
                                            const groupKey = `${cleanName}|${details.type}`;
                                            if (!uniqueStops.has(groupKey) || distance < uniqueStops.get(groupKey).distance) {
                                                uniqueStops.set(groupKey, {
                                                    place,
                                                    distance,
                                                    typeDetails: details
                                                });
                                            }
                                        }
                                    }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML"]);
                                    const stops = Array.from(uniqueStops.values()).sort({
                                        "MapMarkers.useEffect.fetchNearbyTransitStopsHTML.stops": (a, b)=>a.distance - b.distance
                                    }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML.stops"]).slice(0, 5);
                                    if (stops.length === 0) {
                                        resolve('');
                                        return;
                                    }
                                    let htmlString = '<b>Nearby Transit Stops:</b><ol style="margin-top: 3px; margin-bottom: 3px; padding-left: 22px; list-style: decimal;">';
                                    stops.forEach({
                                        "MapMarkers.useEffect.fetchNearbyTransitStopsHTML": ({ place, distance, typeDetails })=>{
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
                                        }
                                    }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML"]);
                                    htmlString += '</ol>';
                                    resolve(htmlString);
                                }
                            }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML"]);
                        }
                    }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML"]);
                    transitCacheRef.current.set(cacheKey, html);
                    return html;
                }
            }["MapMarkers.useEffect.fetchNearbyTransitStopsHTML"];
            const buildInfoWindowContent = {
                "MapMarkers.useEffect.buildInfoWindowContent": async (student)=>{
                    let contentString = `<div class="info-window-content">`;
                    const targetUrl = student.collegeHomepageUrl && student.collegeHomepageUrl !== '#' ? student.collegeHomepageUrl : '#';
                    const openInNewTab = targetUrl !== '#' ? 'target="_blank" rel="noreferrer"' : '';
                    const badges = createHonoraryIcons(student.honoraries);
                    const collegeTypeChipClasses = {
                        'Ivy League': 'chip-ivy',
                        SUNY: 'chip-suny',
                        CUNY: 'chip-cuny',
                        'Purdue University System': 'chip-purdue'
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
                    const typeParts = [];
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
                }
            }["MapMarkers.useEffect.buildInfoWindowContent"];
            const buildNestmInfoContent = {
                "MapMarkers.useEffect.buildNestmInfoContent": async (detail)=>{
                    const { coords, name = 'NEST+m', homepageUrl = 'https://nestmk12.net/', imageUrl = '/logos/NEST+m_Logo.png', typeLabel = 'Public K-12 School', locationFocus = 'InCityNYC' } = detail;
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
                    const chips = [];
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
                    const transitHtml = await fetchNearbyTransitStopsHTML({
                        ...coords,
                        locationFocus
                    });
                    if (transitHtml) contentString += `<hr style="margin: 5px 0;">${transitHtml}`;
                    contentString += `</div>`;
                    return contentString;
                }
            }["MapMarkers.useEffect.buildNestmInfoContent"];
            const openStudentInfo = {
                "MapMarkers.useEffect.openStudentInfo": async (student, marker, positionOverride)=>{
                    if (!infowindowRef.current) return;
                    lastInfoWindowStudentIdRef.current = student.id;
                    const position = positionOverride || marker?.getPosition?.() || (student.lat && student.lng ? new google.maps.LatLng(student.lat, student.lng) : null);
                    const html = await buildInfoWindowContent(student);
                    if (infowindowRef.current && lastInfoWindowStudentIdRef.current === student.id) {
                        infowindowRef.current.setContent(html);
                        if (position) {
                            infowindowRef.current.setPosition(position);
                        }
                        if (marker) {
                            infowindowRef.current.open({
                                map,
                                anchor: marker
                            });
                        } else if (position) {
                            infowindowRef.current.open({
                                map,
                                position
                            });
                        } else {
                            infowindowRef.current.open(map);
                        }
                        wireTimeDropdown(student);
                    }
                }
            }["MapMarkers.useEffect.openStudentInfo"];
            // Scatter overlapping coordinates so markers don't perfectly overlap
            const assignedCoordinatesCount = {};
            students.forEach({
                "MapMarkers.useEffect": (student)=>{
                    if (student.lat === 0 && student.lng === 0) return;
                    if (student.collegeName === "Undecided") return;
                    const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][student.gradClass] || "#cccccc";
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
                        position: {
                            lat,
                            lng
                        },
                        title: `${student.seniorName} -> ${student.collegeName}`,
                        icon: buildIcon(color)
                    });
                    marker.addListener("click", {
                        "MapMarkers.useEffect": ()=>{
                            // Open InfoWindow
                            openStudentInfo(student, marker);
                            // Trigger sidebar focus + popup sync
                            window.dispatchEvent(new CustomEvent('focus-student-from-map', {
                                detail: {
                                    id: student.id
                                }
                            }));
                            setActiveHoverId(student.id);
                        }
                    }["MapMarkers.useEffect"]);
                    marker.addListener("mouseover", {
                        "MapMarkers.useEffect": ()=>{
                            setActiveHoverId(student.id);
                        }
                    }["MapMarkers.useEffect"]);
                    marker.addListener("mouseout", {
                        "MapMarkers.useEffect": ()=>{
                            setActiveHoverId(null);
                        }
                    }["MapMarkers.useEffect"]);
                    newMarkers.push(marker);
                    markersRef.current[student.id] = {
                        marker,
                        color
                    };
                }
            }["MapMarkers.useEffect"]);
            clustererRef.current.addMarkers(newMarkers);
            const durationMs = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - buildStart;
            debugLog('Added markers to clusterer', {
                added: newMarkers.length,
                clusterCount: clustererRef.current.getMarkers?.().length,
                durationMs: Math.round(durationMs)
            });
            const handleOpenNestmInfo = {
                "MapMarkers.useEffect.handleOpenNestmInfo": (ev)=>{
                    const { detail } = ev;
                    if (!detail || !detail.marker || !infowindowRef.current || !detail.coords) return;
                    lastInfoWindowStudentIdRef.current = null;
                    infowindowRef.current.close();
                    infowindowRef.current.setContent(`<div class="info-window-content"><b>${detail.name || 'NEST+m'}</b><div style="margin-top:4px;">Loading details...</div></div>`);
                    infowindowRef.current.open(map, detail.marker);
                    buildNestmInfoContent(detail).then({
                        "MapMarkers.useEffect.handleOpenNestmInfo": (html)=>{
                            if (infowindowRef.current) {
                                infowindowRef.current.setContent(html);
                                infowindowRef.current.open(map, detail.marker);
                                wireTimeDropdown(detail.coords);
                            }
                        }
                    }["MapMarkers.useEffect.handleOpenNestmInfo"]);
                }
            }["MapMarkers.useEffect.handleOpenNestmInfo"];
            const handleCenterEvent = {
                "MapMarkers.useEffect.handleCenterEvent": (e)=>{
                    const targetStudent = students.find({
                        "MapMarkers.useEffect.handleCenterEvent.targetStudent": (s)=>s.id === e.detail.id
                    }["MapMarkers.useEffect.handleCenterEvent.targetStudent"]);
                    if (!targetStudent) return;
                    const target = markersRef.current[e.detail.id];
                    const positionExplicit = e.detail.lat && e.detail.lng ? new google.maps.LatLng(e.detail.lat, e.detail.lng) : null;
                    const position = positionExplicit || target?.marker?.getPosition?.() || (targetStudent.lat && targetStudent.lng ? new google.maps.LatLng(targetStudent.lat, targetStudent.lng) : null);
                    if (map && position) {
                        map.panTo(position);
                        const desiredZoom = 14;
                        map.setZoom(desiredZoom);
                    }
                    if (target) {
                        openStudentInfo(targetStudent, target.marker, position);
                    } else if (position && typeof google !== 'undefined') {
                        const tempMarker = new google.maps.Marker({
                            position,
                            map
                        });
                        openStudentInfo(targetStudent, tempMarker, position);
                        setTimeout({
                            "MapMarkers.useEffect.handleCenterEvent": ()=>tempMarker.setMap(null)
                        }["MapMarkers.useEffect.handleCenterEvent"], 600);
                    }
                    debugLog('center-student-marker event', {
                        id: e.detail.id,
                        hadMarker: !!target,
                        usedExplicitPosition: !!positionExplicit
                    });
                    setActiveHoverId(e.detail.id);
                }
            }["MapMarkers.useEffect.handleCenterEvent"];
            window.addEventListener('center-student-marker', handleCenterEvent);
            window.addEventListener('open-nestm-info', handleOpenNestmInfo);
            return ({
                "MapMarkers.useEffect": ()=>{
                    window.removeEventListener('center-student-marker', handleCenterEvent);
                    window.removeEventListener('open-nestm-info', handleOpenNestmInfo);
                }
            })["MapMarkers.useEffect"];
        }
    }["MapMarkers.useEffect"], [
        map,
        students,
        theme,
        setActiveHoverId
    ]);
    return null;
}
_s(MapMarkers, "UDIWDf1rYu9x0frdV+JmcGMi8S4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"]
    ];
});
_c = MapMarkers;
var _c;
__turbopack_context__.k.register(_c, "MapMarkers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/MapControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapControls",
    ()=>MapControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const HOME_COORDS = {
    lat: 40.720735,
    lng: -73.983154
}; // NEST+m approx
const NESTM_INFO = {
    coords: HOME_COORDS,
    name: 'NEST+m',
    homepageUrl: 'https://nestmk12.net/',
    imageUrl: '/logos/NEST+m_Logo.png',
    typeLabel: 'Public K-12 School',
    locationFocus: 'InCityNYC'
};
function MapControls() {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const { toggleTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { resetFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const [transitLayer, setTransitLayer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mapType, setMapType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('roadmap');
    const [showNestm, setShowNestm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "MapControls.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = window.localStorage.getItem('show-nestm');
            return stored === 'false' ? false : true;
        }
    }["MapControls.useState"]);
    const homeMarkerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [controlsCollapsed, setControlsCollapsed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MapControls.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
        }
    }["MapControls.useEffect"], [
        map
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MapControls.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem('map-controls-collapsed', controlsCollapsed ? 'true' : 'false');
        }
    }["MapControls.useEffect"], [
        controlsCollapsed
    ]);
    // Place Google map type control in the upper left
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MapControls.useEffect": ()=>{
            if (!map || typeof google === 'undefined') return;
            map.setOptions({
                mapTypeControl: true,
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }
            });
        }
    }["MapControls.useEffect"], [
        map
    ]);
    // Home marker toggle/persist
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MapControls.useEffect": ()=>{
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
                        strokeWeight: 2
                    },
                    zIndex: 9999
                });
                marker.addListener('click', {
                    "MapControls.useEffect": ()=>{
                        window.dispatchEvent(new CustomEvent('open-nestm-info', {
                            detail: {
                                marker,
                                ...NESTM_INFO
                            }
                        }));
                    }
                }["MapControls.useEffect"]);
                homeMarkerRef.current = marker;
                if ("TURBOPACK compile-time truthy", 1) window.localStorage.setItem('show-nestm', 'true');
            } else {
                if (homeMarkerRef.current) {
                    homeMarkerRef.current.setMap(null);
                    homeMarkerRef.current = null;
                }
                if ("TURBOPACK compile-time truthy", 1) window.localStorage.setItem('show-nestm', 'false');
            }
            return ({
                "MapControls.useEffect": ()=>{
                    if (homeMarkerRef.current) {
                        homeMarkerRef.current.setMap(null);
                        homeMarkerRef.current = null;
                    }
                }
            })["MapControls.useEffect"];
        }
    }["MapControls.useEffect"], [
        showNestm,
        map
    ]);
    const handleToggleTransit = ()=>{
        if (!map) return;
        if (transitLayer) {
            transitLayer.setMap(null);
            setTransitLayer(null);
            if ("TURBOPACK compile-time truthy", 1) window.localStorage.setItem('transit-visible', 'false');
        } else {
            const layer = new google.maps.TransitLayer();
            layer.setMap(map);
            setTransitLayer(layer);
            if ("TURBOPACK compile-time truthy", 1) window.localStorage.setItem('transit-visible', 'true');
        }
    };
    const handleLocateMe = ()=>{
        if (!map || !navigator.geolocation) {
            alert('Geolocation not supported by your browser.');
            return;
        }
        navigator.geolocation.getCurrentPosition((pos)=>{
            const coords = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
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
                    strokeWeight: 2
                },
                zIndex: 99999
            });
        }, ()=>alert('Unable to retrieve your location.'), {
            enableHighAccuracy: true,
            timeout: 10000
        });
    };
    const toggleMapType = ()=>{
        if (!map) return;
        const next = mapType === 'roadmap' ? 'satellite' : 'roadmap';
        map.setMapTypeId(next);
        setMapType(next);
        if ("TURBOPACK compile-time truthy", 1) {
            window.localStorage.setItem('map-type', next);
        }
    };
    const handleZoomVisible = ()=>{
        // In a real implementation, calculate bounds of filteredStudents and map.fitBounds(bounds)
        if (!map) return;
        map.setZoom(7);
        map.setCenter({
            lat: 41.8,
            lng: -74.5
        });
    };
    const handleZoomHome = ()=>{
        if (!map) return;
        map.setCenter(HOME_COORDS);
        map.setZoom(15);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "map-controls-bar",
            className: "absolute top-2 right-4 w-full flex flex-col items-end gap-2 pointer-events-none",
            style: {
                transform: 'translateX(0px)'
            },
            children: [
                !controlsCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 dark:bg-neutral-800/90 p-2 rounded shadow flex flex-wrap justify-center gap-2 pointer-events-auto backdrop-blur-sm border border-gray-200 dark:border-neutral-700 max-w-[min(85vw,700px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleTheme,
                            id: "darkModeToggle",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: theme === 'dark' ? '☀️ Light' : '🌙 Dark'
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLocateMe,
                            id: "locateMeBtn",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: "📍 My Location"
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleToggleTransit,
                            id: "toggleTransitBtn",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: transitLayer ? '🚇 Hide Transit' : '🚇 Transit'
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleZoomHome,
                                    id: "zoomToNestmBtn",
                                    className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                                    children: "🏫 NEST+m"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MapControls.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNestm((v)=>!v),
                                    id: "toggleNestmBtn",
                                    className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                                    "aria-pressed": showNestm,
                                    children: showNestm ? '👁️ Hide NEST+m' : '👀 Show NEST+m'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/map/MapControls.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleZoomVisible,
                            id: "zoomToVisibleBtn",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: "👁️ Reset View"
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.dispatchEvent(new CustomEvent('open-update-log')),
                            id: "showUpdateLogBtn",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: "📝 Update Log"
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.dispatchEvent(new CustomEvent('open-faq')),
                            id: "showFaqBtn",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: "❓ FAQ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetFilters,
                            id: "clearAllFiltersBtn",
                            className: "px-3 py-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 text-sm",
                            children: "🧹 Clear Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/map/MapControls.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setControlsCollapsed((v)=>!v),
                    className: "pointer-events-auto px-2 py-1 bg-white/90 dark:bg-neutral-800/90 rounded shadow border border-gray-200 dark:border-neutral-700 text-sm",
                    "aria-pressed": controlsCollapsed,
                    "aria-label": controlsCollapsed ? 'Show map controls' : 'Hide map controls',
                    children: controlsCollapsed ? '<<' : '>>'
                }, void 0, false, {
                    fileName: "[project]/src/components/map/MapControls.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/map/MapControls.tsx",
            lineNumber: 178,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_s(MapControls, "kHDZ6bbWHN0Fe+YJvpSwuyuRqSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"]
    ];
});
_c = MapControls;
var _c;
__turbopack_context__.k.register(_c, "MapControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/CollegeMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollegeMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapMarkers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MapMarkers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MapControls.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const DEFAULT_CENTER = {
    lat: 41.8,
    lng: -74.5
};
const DEFAULT_ZOOM = 7;
// Sync map styling with theme without recreating the map instance
function MapStyleSync({ theme }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapStyleSync.useEffect": ()=>{
            if (!map) return;
            const styles = theme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_STYLE_DARK"] : [];
            map.setOptions({
                styles
            });
        }
    }["MapStyleSync.useEffect"], [
        map,
        theme
    ]);
    return null;
}
_s(MapStyleSync, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = MapStyleSync;
function CollegeMap() {
    _s1();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { filteredStudents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const [mapType, setMapType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('roadmap');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollegeMap.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = window.localStorage.getItem('map-type');
            if (stored === 'satellite' || stored === 'roadmap') {
                setMapType(stored);
            }
        }
    }["CollegeMap.useEffect"], []);
    // Persist map type
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollegeMap.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem('map-type', mapType);
            }
        }
    }["CollegeMap.useEffect"], [
        mapType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full bg-gray-200 dark:bg-neutral-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIProvider"], {
            apiKey: ("TURBOPACK compile-time value", "AIzaSyCVEZB2WjUpEhqnqGjY_zMCQSKUHTdjAWc") || '',
            libraries: [
                'places',
                'geometry'
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                defaultCenter: DEFAULT_CENTER,
                defaultZoom: DEFAULT_ZOOM,
                gestureHandling: 'greedy',
                disableDefaultUI: false,
                fullscreenControl: false,
                defaultMapTypeId: mapType,
                onMapTypeIdChanged: (e)=>{
                    const newType = e?.mapTypeId || mapType;
                    if (newType === 'satellite' || newType === 'roadmap') setMapType(newType);
                },
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapStyleSync, {
                        theme: theme
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/CollegeMap.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapMarkers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        students: filteredStudents
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/CollegeMap.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapControls"], {}, void 0, false, {
                        fileName: "[project]/src/components/map/CollegeMap.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/CollegeMap.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/map/CollegeMap.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/map/CollegeMap.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s1(CollegeMap, "xvQC1qLOS4VJuTAORtEOi26z6wA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"]
    ];
});
_c1 = CollegeMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapStyleSync");
__turbopack_context__.k.register(_c1, "CollegeMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/PhotoPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UIContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function PhotoPopup() {
    _s();
    const { selectedStudent, isPhotoPopupOpen, closePhotoPopup, openPhotoPopup, popupAnchorRect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"])();
    const { filteredStudents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"])();
    const [isZoomed, setIsZoomed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wasOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const captionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhotoPopup.useMemo[captionText]": ()=>{
            if (!selectedStudent) return '';
            return selectedStudent.bioCaption && selectedStudent.bioCaption.trim().length > 0 ? selectedStudent.bioCaption : `Congrats to ${selectedStudent.seniorName} on committing to ${selectedStudent.collegeName}!`;
        }
    }["PhotoPopup.useMemo[captionText]"], [
        selectedStudent
    ]);
    // Reset zoom when the popup is first opened or closed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoPopup.useEffect": ()=>{
            if (isPhotoPopupOpen && !wasOpenRef.current) {
                setIsZoomed(false);
            }
            if (!isPhotoPopupOpen) {
                setIsZoomed(false);
            }
            wasOpenRef.current = isPhotoPopupOpen;
        }
    }["PhotoPopup.useEffect"], [
        isPhotoPopupOpen
    ]);
    // Close on Escape (mirrors vanilla zoom popup behavior)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoPopup.useEffect": ()=>{
            const handleEsc = {
                "PhotoPopup.useEffect.handleEsc": (e)=>{
                    if (e.key === 'Escape' && isPhotoPopupOpen) {
                        e.preventDefault();
                        setIsZoomed(false);
                        closePhotoPopup();
                    }
                }
            }["PhotoPopup.useEffect.handleEsc"];
            if (isPhotoPopupOpen) window.addEventListener('keydown', handleEsc);
            return ({
                "PhotoPopup.useEffect": ()=>window.removeEventListener('keydown', handleEsc)
            })["PhotoPopup.useEffect"];
        }
    }["PhotoPopup.useEffect"], [
        isPhotoPopupOpen,
        closePhotoPopup
    ]);
    const handleNext = (e)=>{
        e?.stopPropagation?.();
        if (!selectedStudent || filteredStudents.length === 0) return;
        const currentIndex = filteredStudents.findIndex((s)=>s.id === selectedStudent.id);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % filteredStudents.length;
        openPhotoPopup(filteredStudents[nextIndex]);
        setIsZoomed(true);
    };
    const handlePrev = (e)=>{
        e?.stopPropagation?.();
        if (!selectedStudent || filteredStudents.length === 0) return;
        const currentIndex = filteredStudents.findIndex((s)=>s.id === selectedStudent.id);
        const prevIndex = currentIndex === -1 ? filteredStudents.length - 1 : (currentIndex - 1 + filteredStudents.length) % filteredStudents.length;
        openPhotoPopup(filteredStudents[prevIndex]);
        setIsZoomed(true);
    };
    // Arrow key navigation only while zoomed (matches original behavior)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoPopup.useEffect": ()=>{
            const handleArrow = {
                "PhotoPopup.useEffect.handleArrow": (e)=>{
                    if (!isPhotoPopupOpen || !isZoomed) return;
                    if (e.key === 'ArrowRight') {
                        handleNext(e);
                        e.preventDefault();
                    } else if (e.key === 'ArrowLeft') {
                        handlePrev(e);
                        e.preventDefault();
                    }
                }
            }["PhotoPopup.useEffect.handleArrow"];
            window.addEventListener('keydown', handleArrow);
            return ({
                "PhotoPopup.useEffect": ()=>window.removeEventListener('keydown', handleArrow)
            })["PhotoPopup.useEffect"];
        }
    }["PhotoPopup.useEffect"], [
        isPhotoPopupOpen,
        isZoomed,
        filteredStudents,
        selectedStudent
    ]);
    if (!isPhotoPopupOpen || !selectedStudent) return null;
    const gradColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRAD_CLASS_COLORS"][selectedStudent.gradClass] || '#888';
    const HonoraryBadges = ({ size = 16 } = {})=>{
        const h = selectedStudent.honoraries || [];
        if (h.length === 0) return null;
        const icons = {
            dean_scholars: '/logos/dean scholars.png',
            macaulay: '/logos/macaulay.png',
            posse: '/logos/posse.png',
            questbridge: '/logos/questbridge.png'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: h.map((key)=>icons[key] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: icons[key],
                    alt: key,
                    className: "h-4 w-4",
                    style: {
                        height: size,
                        width: key === 'posse' ? size * 1.3 : size
                    }
                }, key, false, {
                    fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                    lineNumber: 104,
                    columnNumber: 13
                }, this) : null)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/PhotoPopup.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    };
    const SocialLinks = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-center gap-2 items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HonoraryBadges, {
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            selectedStudent.instagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: selectedStudent.instagramUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "hover:scale-110 transition-transform",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logos/instagram.svg",
                    alt: "Instagram",
                    className: "h-7 w-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            selectedStudent.linkedInUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: selectedStudent.linkedInUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "hover:scale-110 transition-transform",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logos/linkedin.svg",
                    alt: "LinkedIn",
                    className: "h-7 w-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            selectedStudent.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: selectedStudent.githubUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "hover:scale-110 transition-transform",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logos/github.svg",
                    alt: "GitHub",
                    className: "h-7 w-7 dark:invert"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
    const closeAll = (e)=>{
        e?.stopPropagation();
        setIsZoomed(false);
        closePhotoPopup();
    };
    const computePreviewPosition = (anchor)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const viewportMargin = 12;
        const gapFromList = 16;
        const preferredWidth = 320;
        const maxLeft = window.innerWidth - preferredWidth - viewportMargin;
        const maxHeight = Math.max(240, window.innerHeight - viewportMargin * 2);
        if (!anchor) {
            return {
                top: viewportMargin,
                left: Math.max(viewportMargin, maxLeft),
                width: preferredWidth,
                maxHeight
            };
        }
        let left = anchor.right + gapFromList; // keep a gap from the list scrollbar
        if (left > maxLeft) {
            // If pushing right would overflow, place it to the left of the list item
            left = anchor.left - preferredWidth - gapFromList;
        }
        left = Math.max(viewportMargin, Math.min(left, maxLeft));
        const maxTopAllowed = window.innerHeight - maxHeight - viewportMargin;
        let top = Math.min(anchor.top, Math.max(viewportMargin, maxTopAllowed));
        return {
            top,
            left,
            width: preferredWidth,
            maxHeight
        };
    };
    const previewPos = computePreviewPosition(popupAnchorRect);
    const FloatingPreview = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed z-[9999] rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden",
        style: {
            top: previewPos.top + 50,
            left: previewPos.left + 12,
            width: previewPos.width,
            maxWidth: '90vw',
            maxHeight: previewPos.maxHeight,
            overflowY: 'auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: selectedStudent.seniorName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HonoraryBadges, {}, void 0, false, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-xs text-blue-600 dark:text-blue-300 font-semibold underline-offset-2 hover:underline",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    window.dispatchEvent(new CustomEvent('center-student-marker', {
                                        detail: {
                                            id: selectedStudent.id
                                        }
                                    }));
                                },
                                children: selectedStudent.collegeName
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full text-white font-bold",
                                        style: {
                                            backgroundColor: gradColor
                                        },
                                        children: [
                                            "Class of ",
                                            selectedStudent.gradClass
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: selectedStudent.major || 'Undecided'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: closeAll,
                        className: "p-1 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                        "aria-label": "Close senior photo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: selectedStudent.seniorPhotoUrl,
                        alt: selectedStudent.seniorName,
                        className: "w-full object-contain max-h-80 cursor-zoom-in",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsZoomed(true);
                        },
                        onError: (e)=>{
                            e.target.src = selectedStudent.seniorPhotoUrlPng || '/placeholder-logo.png';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded",
                        children: "Click to zoom & browse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed",
                        children: captionText
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-3 border-t border-gray-200 dark:border-neutral-800",
                        children: SocialLinks
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
    const ZoomOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex items-center justify-center",
        onClick: closeAll,
        children: [
            filteredStudents.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        className: "absolute left-4 top-1/2 -translate-y-1/2 z-[10001] p-3 bg-black/80 text-white rounded-full hover:bg-black/90 transition-colors shadow-xl",
                        "aria-label": "Previous senior",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "absolute right-4 top-1/2 -translate-y-1/2 z-[10001] p-3 bg-black/80 text-white rounded-full hover:bg-black/90 transition-colors shadow-xl",
                        "aria-label": "Next senior",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: closeAll,
                className: "absolute top-4 right-4 z-[10002] p-2 bg-black/70 text-white rounded-full hover:bg-red-500 transition-colors shadow-lg",
                "aria-label": "Close zoomed photo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl w-[min(1100px,95vw)] max-h-[90vh] px-4",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-center max-h-[90vh] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-2 py-1 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HonoraryBadges, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: selectedStudent.seniorPhotoUrl,
                                alt: selectedStudent.seniorName,
                                className: "max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl bg-black",
                                onError: (e)=>{
                                    e.target.src = selectedStudent.seniorPhotoUrlPng || '/placeholder-logo.png';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-[420px] max-h-[90vh] overflow-y-auto rounded-xl bg-white/95 dark:bg-neutral-900/95 text-gray-900 dark:text-gray-50 shadow-2xl border border-gray-200/70 dark:border-neutral-700/70 p-6 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center md:text-left space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: selectedStudent.seniorName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full text-white font-bold",
                                                style: {
                                                    backgroundColor: gradColor
                                                },
                                                children: [
                                                    "Class of ",
                                                    selectedStudent.gradClass
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HonoraryBadges, {}, void 0, false, {
                                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    window.dispatchEvent(new CustomEvent('center-student-marker', {
                                                        detail: {
                                                            id: selectedStudent.id
                                                        }
                                                    }));
                                                },
                                                className: "text-blue-600 dark:text-blue-300 font-semibold underline-offset-2 hover:underline",
                                                children: selectedStudent.collegeName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 dark:text-gray-300",
                                        children: selectedStudent.major || 'Undecided'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HonoraryBadges, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                            lineNumber: 325,
                                            columnNumber: 54
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm whitespace-pre-wrap leading-relaxed text-gray-800 dark:text-gray-200",
                                children: captionText
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-gray-200 dark:border-neutral-800",
                                children: SocialLinks
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 dark:text-gray-400 text-center border-t border-gray-200 dark:border-neutral-800 pt-3",
                                children: "Use ←/→ to browse seniors. Click outside the photo or press Esc to exit zoom."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PhotoPopup.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PhotoPopup.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
    // Floating preview mirrors the small popup; zoom overlay mirrors the zoomed view.
    if (!isZoomed) {
        return typeof document !== 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(FloatingPreview, document.body) : null;
    }
    return typeof document !== 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(ZoomOverlay, document.body) : null;
}
_s(PhotoPopup, "1Q+q4K20nU6m7q6CElX8fqC6Iw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UIContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUI"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilters"]
    ];
});
_c = PhotoPopup;
var _c;
__turbopack_context__.k.register(_c, "PhotoPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TutorialTour.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorialTour
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function getScrollableAncestors(element) {
    if (!element || ("TURBOPACK compile-time value", "object") === 'undefined') return [];
    const ancestors = [];
    let parent = element.parentElement;
    const scrollRegex = /(auto|scroll)/;
    while(parent && parent !== document.body){
        const style = window.getComputedStyle(parent);
        if (scrollRegex.test(style.overflowY) || scrollRegex.test(style.overflowX) || scrollRegex.test(style.overflow)) {
            ancestors.push(parent);
        }
        parent = parent.parentElement;
    }
    return ancestors;
}
function getHighlightPosition(selector, padding = 12) {
    if (typeof document === 'undefined') return null;
    const el = document.querySelector(selector);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top - padding,
        left: rect.left - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2
    };
}
function getDescriptionPosition(highlight, boxWidth = 320) {
    const viewportWidth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.innerWidth;
    const viewportHeight = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.innerHeight;
    const clampLeft = (val)=>{
        if (!viewportWidth) return 24;
        return Math.min(Math.max(val, 16), viewportWidth - boxWidth - 16);
    };
    if (!highlight || !viewportWidth || !viewportHeight) {
        return {
            top: 80,
            left: clampLeft(24),
            arrow: 'top'
        };
    }
    const margin = 16;
    const spaceBelow = viewportHeight - (highlight.top + highlight.height) - margin;
    const spaceAbove = highlight.top - margin;
    if (spaceBelow >= 180 || spaceBelow >= spaceAbove) {
        return {
            top: Math.min(highlight.top + highlight.height + margin, viewportHeight - 200),
            left: clampLeft(highlight.left + highlight.width / 2 - boxWidth / 2),
            arrow: 'top'
        };
    }
    return {
        top: Math.max(highlight.top - margin - 160, 12),
        left: clampLeft(highlight.left + highlight.width / 2 - boxWidth / 2),
        arrow: 'bottom'
    };
}
function scrollStepIntoView(selector) {
    if (typeof document === 'undefined') return;
    const target = document.querySelector(selector);
    if (!target) return;
    const parents = getScrollableAncestors(target);
    if (parents.length === 0) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
        return;
    }
    parents.forEach((parent)=>{
        const parentRect = parent.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const nextTop = targetRect.top - parentRect.top - parent.clientHeight / 2 + targetRect.height / 2;
        const nextLeft = targetRect.left - parentRect.left - parent.clientWidth / 2 + targetRect.width / 2;
        parent.scrollTo({
            top: parent.scrollTop + nextTop,
            left: parent.scrollLeft + nextLeft,
            behavior: 'smooth'
        });
    });
    requestAnimationFrame(()=>{
        const rect = target.getBoundingClientRect();
        if (rect.top < 80 || rect.bottom > (window.innerHeight || 0) - 80) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
    });
}
function TutorialTour({ onClose }) {
    _s();
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TutorialTour.useMemo[steps]": ()=>[
                {
                    selector: 'body',
                    headline: 'Welcome!',
                    title: 'Tour intro',
                    text: 'Welcome! This quick tutorial will guide you through the main features of the NEST+m Senior College Destinations Map.'
                },
                {
                    selector: '#sidebar-header',
                    headline: 'App Header',
                    title: 'Navigation anchor',
                    text: 'This purple banner anchors the app title plus the Tutorial button—come back here anytime for a refresher.'
                },
                {
                    selector: '#map-controls-bar',
                    headline: 'Map Controls',
                    title: 'Command strip',
                    text: 'All quick map tools live here so you can toggle themes, overlays, and focus options in one sweep.'
                },
                {
                    selector: '#darkModeToggle',
                    headline: 'Theme Toggle',
                    title: 'Light & dark',
                    text: 'Swap the entire experience between bright daytime mode and relaxed night mode.'
                },
                {
                    selector: '.gm-style-mtc',
                    headline: 'Map Type',
                    title: 'Map vs satellite',
                    text: 'Use the built-in Google control (top-left) to flip between map and high-resolution satellite imagery.'
                },
                {
                    selector: '#locateMeBtn',
                    headline: 'Locate Me',
                    title: 'Center on you',
                    text: 'Drop a marker right where you are standing and zoom the map there automatically.'
                },
                {
                    selector: '#toggleTransitBtn',
                    headline: 'Transit Layer',
                    title: 'Routes overlay',
                    text: 'Overlay subway and rail routes to compare real-world commutes to each college.'
                },
                {
                    selector: '#zoomToNestmBtn',
                    headline: 'Home Focus',
                    title: 'Zoom to NEST+m',
                    text: 'Snap back to home base whenever you want to re-orient on the school campus.'
                },
                {
                    selector: '#toggleNestmBtn',
                    headline: 'Campus Marker',
                    title: 'Show/hide NEST+m',
                    text: 'Temporarily hide the purple campus pin to declutter wide map views.'
                },
                {
                    selector: '#zoomToVisibleBtn',
                    headline: 'Reset View',
                    title: 'Fit visible',
                    text: 'Fit every currently visible college onto the screen—perfect after lots of panning.'
                },
                {
                    selector: '#showUpdateLogBtn',
                    headline: 'Update Log',
                    title: 'What changed',
                    text: 'See the latest data drops and feature tweaks pulled straight from the project changelog.'
                },
                {
                    selector: '#showFaqBtn',
                    headline: 'FAQ & Tips',
                    title: 'Quick answers',
                    text: 'Open the FAQ drawer for quick answers to common “How do I…?” questions.'
                },
                {
                    selector: '#clearAllFiltersBtn',
                    headline: 'Clear Filters',
                    title: 'Start fresh',
                    text: 'Reset every filter, search, and visibility toggle so you can start fresh.'
                },
                {
                    selector: '#filter-panel-section',
                    headline: 'Filters',
                    title: 'Console',
                    text: 'This stack of accordions controls classes, majors, and regions—the rest of the dashboard listens.'
                },
                {
                    selector: '#grad-class-filter',
                    headline: 'Classes',
                    title: 'Graduate years',
                    text: 'Turn individual classes on/off or use the color-coded Instagram shortcuts to auto-filter and open their page.'
                },
                {
                    selector: '#class-instagram-links',
                    headline: 'Class Instagrams',
                    title: 'Decision pages',
                    text: 'Each chip opens the class decision page in a new tab and filters the map to that class.'
                },
                {
                    selector: '#major-area-filter',
                    headline: 'Majors',
                    title: 'Areas of study',
                    text: 'Filter by broad areas of study using quick select/clear buttons plus live student counts.'
                },
                {
                    selector: '#region-filter',
                    headline: 'Regions',
                    title: 'Location filters',
                    text: 'Dial in NYC, the rest of NY, out-of-state, or international destinations—including state-by-state toggles.'
                },
                {
                    selector: '#statistics-section',
                    headline: 'Stats',
                    title: 'Attendance mix',
                    text: 'Regional totals, public/private mix, and top colleges summarize whatever filters are active.'
                },
                {
                    selector: '#trend-section',
                    headline: 'Trends',
                    title: 'Line charts',
                    text: 'Line charts track majors, location focus, and most popular colleges across graduating classes.'
                },
                {
                    selector: '#student-list-toolbar',
                    headline: 'Search & Sort',
                    title: 'List tools',
                    text: 'Use the omnibox, view chooser, sorting menus, and gallery toggle to reshape the list instantly.'
                },
                {
                    selector: '#student-search-input',
                    headline: 'Search',
                    title: 'Omnibox',
                    text: 'Type any student, college, or major keyword and the list + map react immediately.'
                },
                {
                    selector: '#student-list-scroll',
                    headline: 'Student List',
                    title: 'List & gallery',
                    text: 'Hover to preview photos, click for the popup, collapse by class, or switch to a gallery grid.'
                },
                {
                    selector: '#map-area',
                    headline: 'Interactive Map',
                    title: 'Linked to filters',
                    text: 'Pan, zoom, and click markers. Everything stays linked to the filters and list on the left.'
                }
            ]
    }["TutorialTour.useMemo[steps]"], []);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlight, setHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasCompleted, setHasCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTutorial = ()=>{
        setIsOpen(true);
        setCurrent(0);
    };
    const closeTutorial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TutorialTour.useCallback[closeTutorial]": ()=>{
            setIsOpen(false);
            if (onClose) onClose();
        }
    }["TutorialTour.useCallback[closeTutorial]"], [
        onClose
    ]);
    const markCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TutorialTour.useCallback[markCompleted]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.localStorage.setItem('tutorial-completed', 'true');
            }
            setHasCompleted(true);
        }
    }["TutorialTour.useCallback[markCompleted]"], []);
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TutorialTour.useCallback[goPrev]": ()=>setCurrent({
                "TutorialTour.useCallback[goPrev]": (c)=>Math.max(0, c - 1)
            }["TutorialTour.useCallback[goPrev]"])
    }["TutorialTour.useCallback[goPrev]"], []);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TutorialTour.useCallback[goNext]": ()=>{
            setCurrent({
                "TutorialTour.useCallback[goNext]": (c)=>{
                    if (c >= steps.length - 1) {
                        markCompleted();
                        closeTutorial();
                        return c;
                    }
                    return Math.min(steps.length - 1, c + 1);
                }
            }["TutorialTour.useCallback[goNext]"]);
        }
    }["TutorialTour.useCallback[goNext]"], [
        closeTutorial,
        markCompleted,
        steps.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorialTour.useEffect": ()=>{
            if (!isOpen) return;
            const selector = steps[current]?.selector;
            if (!selector) return;
            if (current === 0) {
                setHighlight(null);
                return;
            }
            const target = document.querySelector(selector);
            const scrollParents = getScrollableAncestors(target);
            let raf = requestAnimationFrame({
                "TutorialTour.useEffect.raf": ()=>setHighlight(getHighlightPosition(selector))
            }["TutorialTour.useEffect.raf"]);
            const update = {
                "TutorialTour.useEffect.update": ()=>{
                    cancelAnimationFrame(raf);
                    raf = requestAnimationFrame({
                        "TutorialTour.useEffect.update": ()=>setHighlight(getHighlightPosition(selector))
                    }["TutorialTour.useEffect.update"]);
                }
            }["TutorialTour.useEffect.update"];
            window.addEventListener('resize', update);
            window.addEventListener('scroll', update, {
                passive: true
            });
            scrollParents.forEach({
                "TutorialTour.useEffect": (node)=>node.addEventListener('scroll', update, {
                        passive: true
                    })
            }["TutorialTour.useEffect"]);
            return ({
                "TutorialTour.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener('resize', update);
                    window.removeEventListener('scroll', update);
                    scrollParents.forEach({
                        "TutorialTour.useEffect": (node)=>node.removeEventListener('scroll', update)
                    }["TutorialTour.useEffect"]);
                }
            })["TutorialTour.useEffect"];
        }
    }["TutorialTour.useEffect"], [
        current,
        isOpen,
        steps
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorialTour.useEffect": ()=>{
            if (!isOpen || current === 0) return;
            const selector = steps[current]?.selector;
            if (!selector) return;
            const raf = requestAnimationFrame({
                "TutorialTour.useEffect.raf": ()=>scrollStepIntoView(selector)
            }["TutorialTour.useEffect.raf"]);
            return ({
                "TutorialTour.useEffect": ()=>cancelAnimationFrame(raf)
            })["TutorialTour.useEffect"];
        }
    }["TutorialTour.useEffect"], [
        current,
        isOpen,
        steps
    ]);
    // Arrow key navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorialTour.useEffect": ()=>{
            if (!isOpen) return;
            const handleKey = {
                "TutorialTour.useEffect.handleKey": (e)=>{
                    if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        goNext();
                    } else if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        goPrev();
                    }
                }
            }["TutorialTour.useEffect.handleKey"];
            window.addEventListener('keydown', handleKey);
            return ({
                "TutorialTour.useEffect": ()=>window.removeEventListener('keydown', handleKey)
            })["TutorialTour.useEffect"];
        }
    }["TutorialTour.useEffect"], [
        isOpen,
        goNext,
        goPrev
    ]);
    // Initialize completion state and auto-open if not completed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TutorialTour.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const done = window.localStorage.getItem('tutorial-completed') === 'true';
            setHasCompleted(done);
            if (!done) {
                setIsOpen(true);
                setCurrent(0);
            }
        }
    }["TutorialTour.useEffect"], []);
    const handleRestart = ()=>{
        setCurrent(0);
        setIsOpen(true);
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "ml-2 px-3 py-1 text-sm rounded border border-white/40 bg-white/20 text-white hover:bg-white/30 transition-colors",
            onClick: openTutorial,
            type: "button",
            children: "❓ Tutorial"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/TutorialTour.tsx",
            lineNumber: 247,
            columnNumber: 7
        }, this);
    }
    const step = steps[current];
    const descPos = current === 0 ? (()=>{
        const vw = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
        const vh = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
        return {
            top: Math.max((vh ? vh / 2 : 200) - 120, 40),
            left: Math.max((vw ? vw / 2 : 200) - 160, 24)
        };
    })() : getDescriptionPosition(highlight);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-[12000] ${current === 0 ? 'bg-black/70' : ''}`,
                onClick: ()=>hasCompleted && closeTutorial()
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TutorialTour.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-[12001] pointer-events-none transition-all duration-200 ease-out",
                style: {
                    top: highlight.top,
                    left: highlight.left,
                    width: highlight.width,
                    height: highlight.height,
                    borderRadius: '14px',
                    boxShadow: '0 0 0 9999px rgba(0,0,0,0.72)',
                    border: '2px solid rgba(59,130,246,0.95)',
                    background: 'rgba(59,130,246,0.12)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TutorialTour.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-[12002] w-[min(340px,90vw)] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xl p-4 text-sm",
                style: {
                    top: descPos.top,
                    left: descPos.left
                },
                children: [
                    step?.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                        lineNumber: 295,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg mb-1 text-gray-900 dark:text-gray-100",
                        children: step?.headline
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 dark:text-gray-300 mb-3 leading-relaxed font-normal",
                        children: step?.text
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                        onClick: goPrev,
                                        disabled: current === 0,
                                        type: "button",
                                        children: "Prev"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-300 dark:border-neutral-700 bg-blue-600 text-white hover:bg-blue-700",
                                        onClick: ()=>{
                                            if (current === steps.length - 1) {
                                                markCompleted();
                                                closeTutorial();
                                            } else {
                                                goNext();
                                            }
                                        },
                                        type: "button",
                                        children: current === steps.length - 1 ? 'Finish' : 'Next'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-200 dark:border-neutral-700 bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200",
                                        onClick: handleRestart,
                                        type: "button",
                                        children: "Restart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-2 py-1 rounded border border-gray-200 dark:border-neutral-700 bg-rose-100 text-rose-900 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-200",
                                        onClick: ()=>{
                                            markCompleted();
                                            closeTutorial();
                                        },
                                        type: "button",
                                        children: "Skip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/TutorialTour.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 dark:text-gray-400",
                                children: [
                                    "Step ",
                                    current + 1,
                                    " / ",
                                    steps.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/TutorialTour.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/TutorialTour.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/TutorialTour.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TutorialTour, "MdNqnCAAqYNDk0cNs5kmkhrkM/w=");
_c = TutorialTour;
var _c;
__turbopack_context__.k.register(_c, "TutorialTour");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/updateLog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateLog",
    ()=>updateLog
]);
const updateLog = [
    {
        version: "v1.2.0",
        date: "2025-02-01",
        notes: [
            "Added collapsible class groups, gallery view, and hover-triggered photo previews.",
            "Persist filters, theme, map type, transit, and sidebar width to local storage.",
            "Revamped trends with majors, regions, and top colleges per year."
        ]
    },
    {
        version: "v1.1.0",
        date: "2025-01-20",
        notes: [
            "Introduced interactive tutorial overlay.",
            "Added update log and FAQ modals.",
            "Improved senior photo popup navigation and map sync."
        ]
    },
    {
        version: "v1.0.0",
        date: "2025-01-10",
        notes: [
            "Initial React port of NEST+m College Map with map markers, filters, and photo popups."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/InfoModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoModals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$updateLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/updateLog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const faqEntries = [
    {
        q: 'I have questions, concerns, and comments about the project.',
        a: 'For any questions, concerns and comments, please message me on Instagram: @normanmei_'
    },
    {
        q: 'How is the data collected?',
        a: 'Data is pulled / sourced all done manually from publicly available Instagram posts (e.g., "college decisions" accounts for NEST+m graduating classes) and voluntarily submitted information. All data aims to be respectful of privacy and focuses on publicly shared commitments.'
    },
    {
        q: 'How often is the data updated?',
        a: 'During decision season I refresh the dataset roughly once a week; outside that window, I batch updates every few weeks or when new info is submitted.'
    },
    {
        q: 'What is the next thing you are going to add?',
        a: 'Next up: shareable filter presets (so you can link friends directly to a view) and a compact “year-over-year” trends tab that compares classes.'
    },
    {
        q: 'How long did this project take? What was the inspiration?',
        a: "I started this project in late May 2025 for my APCSP final project just for fun. Putting in all the data manually probably took a combined total of 60 hours or more."
    },
    {
        q: 'Is my personal information shared publicly?',
        a: 'Only your first and last name, graduating class, the school you commmited to, Instagram profile, LinkedIn profile, and college choice are displayed. No other personal details (e.g., home address, email) are collected or shown, to respect privacy.'
    },
    {
        q: 'Have you considered using the Instagram API?',
        a: `Yes, I thought of this at first to completely futureproof my project for future graduating classes but as I did a little more research, I found out that I simply can't do it because I need a solution that works for accounts I don’t own and maintains minimal ongoing effort, the official Instagram APIs simply won’t do.

Basic Display API is gone: Meta deprecated it on December 4, 2024, so any calls now just error out.
Graph API requires ownership & verification: I’d have to convert the school’s accounts to Business/Creator, pass App Review, and complete Business Verification—none of which I control.
oEmbed only returns embed HTML: I can’t pull separate JSON fields for photos, bios, or profile pics—just a blockquote snippet.
Scraping is brittle (& against IG ToS): While it’s technically possible, it can break whenever the site changes (too much work to fix over time if it keeps breaking) and not to mention it violates Instagram’s Terms of Service, and risks bans.

Bottom line: Without owning and verifying the accounts, there’s no official API route to auto-fetch seniors’ photos or bios, so I that's why I don't use any API of sort, everything is done manually.`
    },
    {
        q: 'How are "Major Areas" determined?',
        a: 'Specific majors are mapped to broader "Major Areas" using a combination of a JS file and keyword-based logic in the main script. This helps in summarizing trends. Combined majors (e.g., "CS & Econ") may be split or categorized based on their components.'
    },
    {
        q: "Why can't I see a specific senior's photo?",
        a: 'Photos are linked based on filenames derived from senior names and graduating years. If a photo is missing, it might be because it wasn\'t available or a naming convention mismatch. The system attempts fallbacks (PNG, college logo) if the primary JPG is not found.'
    },
    {
        q: 'How do the filters work?',
        a: 'You can filter by graduating class, state/country of the college, location focus (NYC, NY State, Out of State, International), and major area. Filters are generally additive (AND logic). The lists and map will update to show only seniors matching all active filter criteria. "Clear All Filters" resets everything.'
    },
    {
        q: 'What do the different colors for map markers mean?',
        a: 'Map marker colors correspond to the graduating class of the senior, using the same color scheme as in the "Filter by Graduating Class" section.'
    },
    {
        q: 'What is "Gallery View"?',
        a: 'Gallery View changes the student list into a card-based layout, often showing senior photos or college logos more prominently. It\'s an alternative way to browse the data.'
    },
    {
        q: 'How can I use the list navigation with keyboard?',
        a: 'When the list has focus (and you\'re not typing in the search bar), use the Up and Down arrow keys to navigate between seniors. If a senior\'s photo is zoomed in, use Left and Right arrow keys to navigate to the previous/next senior\'s photo. Press Escape to close popups or zoomed photos.'
    }
];
function ModalShell({ title, open, onClose, children }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[13000] bg-black/60",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InfoModals.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-[13001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] max-h-[80vh] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xl overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/InfoModals.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-lg px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-800",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/InfoModals.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/InfoModals.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 text-sm",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/InfoModals.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/InfoModals.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ModalShell;
function InfoModals() {
    _s();
    const [showUpdateLog, setShowUpdateLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFaq, setShowFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [releases, setReleases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$updateLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLog"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoModals.useEffect": ()=>{
            const openLog = {
                "InfoModals.useEffect.openLog": ()=>setShowUpdateLog(true)
            }["InfoModals.useEffect.openLog"];
            const openFaq = {
                "InfoModals.useEffect.openFaq": ()=>setShowFaq(true)
            }["InfoModals.useEffect.openFaq"];
            window.addEventListener('open-update-log', openLog);
            window.addEventListener('open-faq', openFaq);
            return ({
                "InfoModals.useEffect": ()=>{
                    window.removeEventListener('open-update-log', openLog);
                    window.removeEventListener('open-faq', openFaq);
                }
            })["InfoModals.useEffect"];
        }
    }["InfoModals.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoModals.useEffect": ()=>{
            if (!showUpdateLog) return;
            if (releases !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$updateLog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLog"] && releases.length > 0) return;
            const fetchReleases = {
                "InfoModals.useEffect.fetchReleases": async ()=>{
                    const controller = new AbortController();
                    const timeout = setTimeout({
                        "InfoModals.useEffect.fetchReleases.timeout": ()=>controller.abort()
                    }["InfoModals.useEffect.fetchReleases.timeout"], 5000);
                    try {
                        setLoading(true);
                        setError(null);
                        const resp = await fetch('https://api.github.com/repos/norman-mei/nestmcollegemap/releases?per_page=10', {
                            signal: controller.signal
                        });
                        if (!resp.ok) throw new Error(`GitHub responded ${resp.status}`);
                        const json = await resp.json();
                        const mapped = (json || []).map({
                            "InfoModals.useEffect.fetchReleases.mapped": (r)=>({
                                    version: r.name || r.tag_name || 'Untitled',
                                    date: r.published_at ? new Date(r.published_at).toISOString().slice(0, 10) : 'Unknown',
                                    notes: r.body?.split('\n').map({
                                        "InfoModals.useEffect.fetchReleases.mapped": (l)=>l.trim().replace(/^[-*]\s*/, '')
                                    }["InfoModals.useEffect.fetchReleases.mapped"]).filter({
                                        "InfoModals.useEffect.fetchReleases.mapped": (l)=>l.length > 0
                                    }["InfoModals.useEffect.fetchReleases.mapped"]) || [
                                        'No notes provided.'
                                    ]
                                })
                        }["InfoModals.useEffect.fetchReleases.mapped"]);
                        if (mapped.length > 0) {
                            setReleases(mapped);
                        } else {
                            setReleases([]);
                        }
                    } catch (e) {
                        setError('Could not load update log from GitHub.');
                        setReleases([]);
                    } finally{
                        clearTimeout(timeout);
                        setLoading(false);
                    }
                }
            }["InfoModals.useEffect.fetchReleases"];
            fetchReleases();
        }
    }["InfoModals.useEffect"], [
        showUpdateLog,
        releases
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
                title: "Update Log / Releases",
                open: showUpdateLog,
                onClose: ()=>setShowUpdateLog(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500",
                            children: "Loading latest releases from GitHub…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/InfoModals.tsx",
                            lineNumber: 161,
                            columnNumber: 23
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-red-500",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/InfoModals.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this),
                        releases.length === 0 && !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600 dark:text-gray-300",
                            children: "No updates found."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/InfoModals.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this) : releases.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 dark:border-neutral-800 pb-3 last:border-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between flex-wrap gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold",
                                                children: r.version
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/InfoModals.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: r.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/InfoModals.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/InfoModals.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-4 space-y-1",
                                        children: r.notes.map((n, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: n
                                            }, idx, false, {
                                                fileName: "[project]/src/components/ui/InfoModals.tsx",
                                                lineNumber: 174,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/InfoModals.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${r.version}-${r.date}`, true, {
                                fileName: "[project]/src/components/ui/InfoModals.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/InfoModals.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InfoModals.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
                title: "FAQ",
                open: showFaq,
                onClose: ()=>setShowFaq(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: faqEntries.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-200 dark:border-neutral-800 pb-3 last:border-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold mb-1",
                                    children: item.q
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/InfoModals.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700 dark:text-gray-300",
                                    children: item.a
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/InfoModals.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/ui/InfoModals.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/InfoModals.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/InfoModals.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(InfoModals, "f0eGjlJZnBliEclmZP4OG1LDpYU=");
_c1 = InfoModals;
var _c, _c1;
__turbopack_context__.k.register(_c, "ModalShell");
__turbopack_context__.k.register(_c1, "InfoModals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$SidebarContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/SidebarContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$StudentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/StudentList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/FilterPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/StatisticsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$TrendCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/TrendCharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$CollegeMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/CollegeMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PhotoPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PhotoPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TutorialTour$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TutorialTour.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InfoModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/InfoModals.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const NORMAN_ID = 346;
    // Load sidebar collapsed preference
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = window.localStorage.getItem('sidebar-collapsed');
            if (stored === 'true') setSidebarCollapsed(true);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.__sidebarCollapsed = sidebarCollapsed;
                window.dispatchEvent(new CustomEvent('sidebar-visibility-change', {
                    detail: {
                        collapsed: sidebarCollapsed
                    }
                }));
                window.localStorage.setItem('sidebar-collapsed', sidebarCollapsed ? 'true' : 'false');
            }
        }
    }["Home.useEffect"], [
        sidebarCollapsed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex h-screen w-screen overflow-hidden text-gray-800 dark:text-gray-200 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PhotoPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$InfoModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$SidebarContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full min-h-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "sidebar-header",
                            className: "bg-purple-700 text-white p-4 font-bold shadow-md shrink-0 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSidebarCollapsed(true),
                                    className: "px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded border border-white/30 text-xs",
                                    "aria-label": "Collapse sidebar",
                                    children: '<<'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-center flex-1",
                                    children: "NEST+m Senior College Destinations 🦅"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TutorialTour$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "sidebar-scroll-container",
                            className: "flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 pr-2",
                            style: {
                                scrollbarGutter: 'stable'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "filter-panel-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 50
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "statistics-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$StatisticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 48
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "trend-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$TrendCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 43
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "student-list-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$StudentList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 50
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 text-xs text-center border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "font-bold text-[#188BFE] hover:underline focus:underline",
                                onClick: ()=>{
                                    window.dispatchEvent(new CustomEvent('focus-student-from-map', {
                                        detail: {
                                            id: NORMAN_ID
                                        }
                                    }));
                                    const fallback = document.querySelector(`[data-student-id=\"${NORMAN_ID}\"]`);
                                    if (fallback) {
                                        fallback.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'center'
                                        });
                                        fallback.classList.add('ring-2', 'ring-[#188BFE]', 'ring-offset-2');
                                        setTimeout(()=>fallback.classList.remove('ring-2', 'ring-[#188BFE]', 'ring-offset-2'), 1500);
                                    }
                                },
                                children: "Created by Norman Mei ('25)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSidebarCollapsed(false),
                className: "absolute top-1/2 -translate-y-1/2 left-3 z-30 px-2 py-1 bg-white/90 dark:bg-neutral-800/90 rounded shadow border border-gray-200 dark:border-neutral-700 text-sm",
                "aria-label": "Expand sidebar",
                children: '>>'
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "map-area",
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$CollegeMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Home, "upIfUgYXvpwV9NkIME3Wa4mkFYY=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c684129f._.js.map