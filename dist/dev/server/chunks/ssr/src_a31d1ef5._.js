module.exports = [
"[project]/src/components/swipe/ActionButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButtons",
    ()=>ActionButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-ssr] (ecmascript) <export default as UndoOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-ssr] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-ssr] (ecmascript) <export default as HeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-ssr] (ecmascript) <export default as StarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-ssr] (ecmascript) <export default as ThunderboltFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionS__as__s$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-ssr] (ecmascript) <export MotionS as s>");
'use client';
;
;
;
;
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
function ActionButtons({ onUndo, onPass, onSuperLike, onLike, onBoost, canUndo, hasCard }) {
    const screens = useBreakpoint();
    if (!hasCard) return null;
    const containerStyle = {
        position: 'absolute',
        bottom: 40,
        left: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionS__as__s$3e$__["s"],
        right: 0,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
        zIndex: 100
    };
    const buttonGroupStyle = {
        width: '100%',
        // maxWidth: 400,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    };
    const baseButtonStyle = {
        borderRadius: '50%',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.15s ease'
    };
    // Responsive sizing (mobile vs desktop)
    const isMobile = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 768;
    const smallButtonStyle = {
        ...baseButtonStyle,
        width: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 52,
        height: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 52
    };
    const largeButtonStyle = {
        ...baseButtonStyle,
        width: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 66,
        height: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 66
    };
    const iconSize = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 24;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: buttonGroupStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff',
                        opacity: canUndo ? 1 : 0.5
                    },
                    onClick: onUndo,
                    disabled: !canUndo,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__["UndoOutlined"], {
                        style: {
                            color: '#666',
                            fontSize: iconSize
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 103,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...largeButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: onPass,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {
                        style: {
                            color: '#ff4d4f',
                            fontSize: iconSize + 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 113,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: onSuperLike,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__["StarFilled"], {
                        style: {
                            color: '#1890ff',
                            fontSize: iconSize
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 123,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...largeButtonStyle,
                        backgroundColor: '#52c41a'
                    },
                    onClick: onLike,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                        style: {
                            color: '#fff',
                            fontSize: iconSize + 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 133,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: onBoost,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__["ThunderboltFilled"], {
                        style: {
                            color: '#722ed1',
                            fontSize: iconSize
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 143,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
            lineNumber: 93,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/data/swipeData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitialCards",
    ()=>getInitialCards,
    "getRefreshCards",
    ()=>getRefreshCards,
    "isAd",
    ()=>isAd,
    "isProfile",
    ()=>isProfile,
    "mockAds",
    ()=>mockAds,
    "mockProfiles",
    ()=>mockProfiles
]);
function isProfile(item) {
    return !('type' in item && item.type === 'ad');
}
function isAd(item) {
    return 'type' in item && item.type === 'ad';
}
const mockProfiles = [
    {
        id: "1",
        name: "Emma",
        age: 26,
        bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Looking for casual fun and good vibes ✨",
        distance: 2.5,
        images: [
            "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=600&fit=crop"
        ],
        interests: [
            "Travel",
            "Photography",
            "Yoga",
            "Coffee",
            "Nightlife"
        ],
        occupation: "Marketing Manager",
        location: "Downtown, CA",
        verified: true,
        isOnline: true
    },
    {
        id: "2",
        name: "Alex",
        age: 28,
        bio: "Software engineer by day, party animal by night 🎉 | No strings attached 💫",
        distance: 5.2,
        images: [
            "https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
        ],
        interests: [
            "Coding",
            "Gaming",
            "Music",
            "Bars",
            "Tech"
        ],
        occupation: "Software Engineer",
        location: "Tech District, CA",
        verified: false,
        isOnline: true
    },
    {
        id: "3",
        name: "Sophie",
        age: 24,
        bio: "Artist 🎨 | Free spirit | Living in the moment and loving every second 🌙",
        distance: 3.8,
        images: [
            "https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop"
        ],
        interests: [
            "Art",
            "Museums",
            "Wine",
            "Dancing",
            "Creativity"
        ],
        occupation: "Graphic Designer",
        location: "Arts District, CA",
        verified: true,
        isOnline: false
    },
    {
        id: "4",
        name: "James",
        age: 30,
        bio: "Outdoor enthusiast 🏔️ | Photographer | Adventure awaits, let's make it happen 📸",
        distance: 7.1,
        images: [
            "https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=600&fit=crop"
        ],
        interests: [
            "Photography",
            "Hiking",
            "Camping",
            "Nature",
            "Adventure"
        ],
        occupation: "Travel Photographer",
        location: "Westside, CA",
        verified: true,
        isOnline: true
    },
    {
        id: "5",
        name: "Olivia",
        age: 27,
        bio: "Fitness enthusiast 💪 | Yoga instructor | Living my best life, join me? 🌟",
        distance: 4.3,
        images: [
            "https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop"
        ],
        interests: [
            "Fitness",
            "Yoga",
            "Health",
            "Running",
            "Wellness"
        ],
        occupation: "Yoga Instructor",
        location: "Beach City, CA",
        verified: false,
        isOnline: true
    },
    {
        id: "6",
        name: "Ryan",
        age: 29,
        bio: "Marketing professional | World traveler ✈️ | Always down for spontaneous adventures 🌮",
        distance: 6.7,
        images: [
            "https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
        ],
        interests: [
            "Travel",
            "Food",
            "Marketing",
            "Sports",
            "Socializing"
        ],
        occupation: "Marketing Director",
        location: "Uptown, CA",
        verified: true,
        isOnline: false
    },
    {
        id: "7",
        name: "Maya",
        age: 25,
        bio: "Dance instructor 💃 | Night owl | Let's dance until sunrise 🌅",
        distance: 1.8,
        images: [
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop"
        ],
        interests: [
            "Dancing",
            "Music",
            "Nightlife",
            "Fitness",
            "Performance"
        ],
        occupation: "Dance Instructor",
        location: "Entertainment District, CA",
        verified: true,
        isOnline: true
    },
    {
        id: "8",
        name: "Jake",
        age: 32,
        bio: "Bartender & mixologist 🍸 | Know all the best spots in town | Let's grab a drink 🥂",
        distance: 2.1,
        images: [
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop",
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop"
        ],
        interests: [
            "Cocktails",
            "Nightlife",
            "Music",
            "Food",
            "Socializing"
        ],
        occupation: "Bartender",
        location: "Bar District, CA",
        verified: false,
        isOnline: true
    }
];
const mockAds = [
    {
        id: "ad1",
        type: "ad",
        brand: "Luxury Hotels",
        title: "Weekend Getaway Special",
        description: "Book your romantic escape today. 50% off luxury suites this weekend only!",
        image: "https://images.unsplash.com/photo-1761927206868-58fedbcdaf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MjA5ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Book Now",
        url: "https://example.com/luxury-hotels",
        category: "Travel"
    },
    {
        id: "ad2",
        type: "ad",
        brand: "Premium Drinks",
        title: "Craft Your Night",
        description: "Premium cocktails delivered to your door. Perfect for spontaneous dates!",
        image: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIxMDU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Order Now",
        url: "https://example.com/premium-drinks",
        category: "Food & Drink"
    },
    {
        id: "ad3",
        type: "ad",
        brand: "Fashion Forward",
        title: "Date Night Ready",
        description: "Look your best tonight. New arrivals perfect for any casual encounter.",
        image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyMDcwNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Shop Now",
        url: "https://example.com/fashion-forward",
        category: "Fashion"
    }
];
function getInitialCards() {
    const stack = [];
    let adIndex = 0;
    // Shuffle profiles for variety
    const shuffledProfiles = [
        ...mockProfiles
    ].sort(()=>Math.random() - 0.5);
    shuffledProfiles.forEach((profile, index)=>{
        stack.push(profile);
        // Insert ad every 3-4 profiles
        if ((index + 1) % 4 === 0 && adIndex < mockAds.length) {
            stack.push(mockAds[adIndex]);
            adIndex++;
        }
    });
    return stack;
}
function getRefreshCards() {
    return getInitialCards();
}
}),
"[project]/src/providers/theme.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Theme utilities and constants for the One Night Stand dating app
// This file provides easy access to theme colors and common styles throughout the app
// src/providers/theme.ts
__turbopack_context__.s([
    "DATING_THEME",
    ()=>DATING_THEME,
    "createDatingStyle",
    ()=>createDatingStyle,
    "datingUtils",
    ()=>datingUtils,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-ssr] (ecmascript)");
;
const DATING_THEME = {
    // Extend base theme with dating-specific colors
    colors: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"],
        // Match status colors
        newMatch: '#FF6B9D',
        superLike: '#FFD700',
        online: '#52C41A',
        recently: '#FAAD14',
        offline: '#8C8C8C',
        // Interaction colors
        like: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
        pass: '#8C8C8C',
        block: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].danger,
        report: '#FA541C',
        // Chat colors
        myMessage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
        theirMessage: '#F0F0F0',
        typing: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary,
        delivered: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].success,
        read: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
        // Profile verification
        verified: '#1890FF',
        premium: '#FFD700'
    },
    // Gradients for dating app aesthetics
    gradients: {
        primary: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary} 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].secondary} 100%)`,
        dark: `linear-gradient(to bottom, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].darkBackground}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].darkBackground})`,
        card: `linear-gradient(145deg, #ffffff 0%, #fafafa 100%)`,
        love: `linear-gradient(45deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].love})`,
        sunset: `linear-gradient(135deg, #FF3A8A 0%, #FF6B9D 50%, #FFB6C1 100%)`
    },
    // Dating app specific shadows
    shadows: {
        card: '0 8px 32px rgba(255, 58, 138, 0.12)',
        hover: '0 12px 40px rgba(255, 58, 138, 0.20)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        strong: '0 16px 48px rgba(255, 58, 138, 0.25)'
    },
    // Animation values
    animations: {
        heartBeat: {
            animation: 'heartbeat 1.5s ease-in-out infinite'
        },
        pulse: {
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        },
        bounce: {
            animation: 'bounce 1s infinite'
        },
        fadeIn: {
            animation: 'fadeIn 0.3s ease-in-out'
        }
    },
    // Border radius values for consistent design
    borderRadius: {
        small: 8,
        medium: 12,
        large: 16,
        xlarge: 20,
        round: 50,
        pill: 25
    },
    // Spacing values
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48
    }
};
const createDatingStyle = {
    // Card styles for profiles, matches, etc.
    profileCard: {
        backgroundColor: DATING_THEME.colors.cardBackground,
        borderRadius: DATING_THEME.borderRadius.large,
        boxShadow: DATING_THEME.shadows.card,
        border: `1px solid ${DATING_THEME.colors.borderLight}`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    // Button styles for different actions
    likeButton: {
        backgroundColor: DATING_THEME.colors.like,
        borderColor: DATING_THEME.colors.like,
        borderRadius: DATING_THEME.borderRadius.round,
        color: 'white',
        fontWeight: 600,
        transition: 'all 0.2s ease'
    },
    passButton: {
        backgroundColor: 'white',
        borderColor: DATING_THEME.colors.pass,
        color: DATING_THEME.colors.pass,
        borderRadius: DATING_THEME.borderRadius.round,
        fontWeight: 600,
        transition: 'all 0.2s ease'
    },
    // Message bubble styles
    myMessageBubble: {
        backgroundColor: DATING_THEME.colors.myMessage,
        color: 'white',
        borderRadius: '20px 20px 4px 20px',
        padding: '12px 16px',
        maxWidth: '70%',
        marginLeft: 'auto'
    },
    theirMessageBubble: {
        backgroundColor: DATING_THEME.colors.theirMessage,
        color: DATING_THEME.colors.textPrimary,
        borderRadius: '20px 20px 20px 4px',
        padding: '12px 16px',
        maxWidth: '70%',
        marginRight: 'auto'
    },
    // Status indicators
    onlineIndicator: {
        width: 12,
        height: 12,
        backgroundColor: DATING_THEME.colors.online,
        borderRadius: '50%',
        border: '2px solid white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    verifiedBadge: {
        color: DATING_THEME.colors.verified,
        fontSize: 16,
        marginLeft: 4
    },
    // Layout helpers
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // Text styles
    heading: {
        color: DATING_THEME.colors.textPrimary,
        fontWeight: 600,
        lineHeight: 1.2
    },
    subtitle: {
        color: DATING_THEME.colors.textSecondary,
        fontWeight: 400,
        lineHeight: 1.4
    }
};
const datingUtils = {
    // Get age color based on preference match
    getAgeColor: (age, preferredRange)=>{
        if (!preferredRange) return DATING_THEME.colors.textPrimary;
        const [min, max] = preferredRange;
        return age >= min && age <= max ? DATING_THEME.colors.success : DATING_THEME.colors.textSecondary;
    },
    // Get distance color based on proximity
    getDistanceColor: (distance)=>{
        if (distance <= 5) return DATING_THEME.colors.success;
        if (distance <= 15) return DATING_THEME.colors.warning;
        return DATING_THEME.colors.textSecondary;
    },
    // Get online status style
    getOnlineStatus: (isOnline, lastSeen)=>{
        if (isOnline) {
            return {
                color: DATING_THEME.colors.online,
                text: 'Online now'
            };
        }
        if (lastSeen) {
            const hoursAgo = Math.floor((Date.now() - lastSeen.getTime()) / (1000 * 60 * 60));
            if (hoursAgo < 24) {
                return {
                    color: DATING_THEME.colors.recently,
                    text: `Active ${hoursAgo}h ago`
                };
            }
        }
        return {
            color: DATING_THEME.colors.offline,
            text: 'Offline'
        };
    }
};
;
const __TURBOPACK__default__export__ = DATING_THEME;
}),
"[project]/src/components/DesktopSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(authenticated)/layout.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-ssr] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/providers/theme.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FireOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-ssr] (ecmascript) <export default as FireOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-ssr] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-ssr] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-ssr] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-ssr] (ecmascript) <export default as SettingOutlined>");
'use client';
;
;
;
;
const { Sider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
/* ------------------------------------------------------------------ */ /*  Mock data (replace with real API later)                           */ /* ------------------------------------------------------------------ */ const currentUser = {
    id: '1',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    unreadMessages: 3
};
const navItems = [
    {
        key: '/home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FireOutlined$3e$__["FireOutlined"],
        label: 'Discover'
    },
    {
        key: '/app',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__["TeamOutlined"],
        label: 'Matches',
        badge: 12
    },
    {
        key: '/chat',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"],
        label: 'Messages',
        badge: currentUser.unreadMessages
    },
    {
        key: '/profile/edit',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"],
        label: 'Profile'
    }
];
/* ------------------------------------------------------------------ */ /*  Desktop left panel – matches grid (Tinder style)                  */ /* ------------------------------------------------------------------ */ const DesktopSidebar = ()=>{
    const matches = [
        {
            id: '1',
            name: 'Brender',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
            gold: true
        },
        {
            id: '2',
            name: 'Tiffany',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop'
        },
        {
            id: '3',
            name: 'Matheu',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
        },
        {
            id: '4',
            name: 'Lindra',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
        },
        {
            id: '5',
            name: 'Sharon',
            avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop'
        },
        {
            id: '6',
            name: 'Mel',
            avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop'
        },
        {
            id: '7',
            name: 'Becky',
            avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop'
        },
        {
            id: '8',
            name: 'Rish',
            avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop'
        }
    ];
    //   style={{
    //     background: '#fff',
    //     borderRight: '1px solid #f0f0f0',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     padding: '1rem',
    //   }}
    // >
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sider, {
        width: '20%',
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].cardBackground,
            borderRight: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].borderLight}`,
            position: 'fixed',
            flexDirection: 'column',
            display: 'flex',
            left: 0,
            top: 0,
            height: '100vh',
            zIndex: 1000,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].cardShadow
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].pinkGradient,
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                        src: currentUser.avatar,
                        size: 36,
                        style: {
                            position: 'absolute',
                            left: 20,
                            top: 20,
                            border: '2px solid white'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DesktopSidebar.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        size: 16,
                        children: navItems.slice(0, 3).map((i)=>{
                            const Icon = i.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.2)',
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].flexCenter
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    style: {
                                        color: 'white',
                                        fontSize: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DesktopSidebar.tsx",
                                    lineNumber: 149,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, i.key, false, {
                                fileName: "[project]/src/components/DesktopSidebar.tsx",
                                lineNumber: 139,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/DesktopSidebar.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__["SettingOutlined"], {
                        style: {
                            position: 'absolute',
                            right: 20,
                            top: 20,
                            color: 'white',
                            fontSize: 20
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DesktopSidebar.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DesktopSidebar.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].borderLight}`
                },
                children: [
                    'Matches',
                    'Messages'
                ].map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: '12px 0',
                            textAlign: 'center',
                            borderBottom: `3px solid ${idx === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : 'transparent'}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            strong: idx === 0,
                            style: {
                                color: idx === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary
                            },
                            children: tab
                        }, void 0, false, {
                            fileName: "[project]/src/components/DesktopSidebar.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, tab, false, {
                        fileName: "[project]/src/components/DesktopSidebar.tsx",
                        lineNumber: 175,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/DesktopSidebar.tsx",
                lineNumber: 168,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 8,
                    overflowY: 'auto',
                    flex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 8
                    },
                    children: matches.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                borderRadius: 8,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].smoothTransition
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundImage: `url(${m.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: 80,
                                    position: 'relative'
                                },
                                children: [
                                    i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 4,
                                            left: 4,
                                            background: '#FFD700',
                                            color: '#000',
                                            fontSize: 10,
                                            fontWeight: 'bold',
                                            padding: '2px 6px',
                                            borderRadius: 8
                                        },
                                        children: "99+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DesktopSidebar.tsx",
                                        lineNumber: 235,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                            color: '#fff',
                                            padding: '8px 4px 4px',
                                            fontSize: 11,
                                            fontWeight: 500
                                        },
                                        children: m.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DesktopSidebar.tsx",
                                        lineNumber: 253,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DesktopSidebar.tsx",
                                lineNumber: 224,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, m.id, false, {
                            fileName: "[project]/src/components/DesktopSidebar.tsx",
                            lineNumber: 214,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/DesktopSidebar.tsx",
                    lineNumber: 206,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/DesktopSidebar.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DesktopSidebar.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
DesktopSidebar.displayName = 'DesktopSidebar';
const __TURBOPACK__default__export__ = DesktopSidebar;
}),
"[project]/src/components/DashboardLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
// import Sidebar from './Sidebar';
// import TopBar from './TopBar';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DesktopSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DesktopSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const { Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const DashboardLayout = ({ children })=>{
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawerVisible, setDrawerVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ──────────────────────────────────────────────────────────────
    // Resize handling (mobile < 768px)
    // ──────────────────────────────────────────────────────────────
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (mobile) {
            setCollapsed(true); // always collapsed on mobile
            setDrawerVisible(false); // close drawer when switching
        } else {
            setCollapsed(false);
        }
    }, 10), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>{
            handleResize.cancel();
            window.removeEventListener('resize', handleResize);
        };
    }, [
        handleResize
    ]);
    // ──────────────────────────────────────────────────────────────
    // Drawer toggle (mobile only)
    // ──────────────────────────────────────────────────────────────
    const toggleDrawer = ()=>setDrawerVisible((v)=>!v);
    // ──────────────────────────────────────────────────────────────
    // Render
    // ──────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].fullHeight,
            minHeight: '100vh',
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].background
        },
        children: [
            !isMobile && // <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DesktopSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/DashboardLayout.tsx",
                lineNumber: 84,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    marginLeft: isMobile ? 0 : collapsed ? 80 : 350,
                    transition: 'margin-left 0.2s cubic-bezier(0.2, 0, 0, )',
                    minHeight: '100vh'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                    style: {
                        // padding: isMobile ? '12px' : '24px',
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].background,
                        height: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].customScrollbar,
                        WebkitOverflowScrolling: 'touch'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/DashboardLayout.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/DashboardLayout.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DashboardLayout.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DashboardLayout;
 // 'use client';
 // import React, { useState, useEffect, useCallback } from 'react';
 // import { Layout, Drawer, Dropdown, Tooltip, Badge, Avatar, Button, Input } from 'antd';
 // import Sidebar from './Sidebar';
 // import TopBar from './TopBar';
 // import { COMMON_STYLES, THEME_COLORS } from '@/components/layout/ClientWrapper';
 // import { debounce } from 'lodash'; // Install lodash for debouncing
 // import { Header } from 'antd/lib/layout/layout';
 // import { BellOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';
 // import { userInfo } from 'os';
 // const { Content } = Layout;
 // interface DashboardLayoutProps {
 //     children: React.ReactNode;
 // }
 // const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
 //     const [collapsed, setCollapsed] = useState(false);
 //     const [isMobile, setIsMobile] = useState(false);
 //     const [drawerVisible, setDrawerVisible] = useState(false);
 //     // Debounced resize handler to improve performance
 //     const handleResize = useCallback(
 //         debounce(() => {
 //             const mobile = window.innerWidth < 768;
 //             setIsMobile(mobile);
 //             if (mobile) {
 //                 setCollapsed(true);
 //                 setDrawerVisible(false); // Close drawer on resize to mobile
 //             } else {
 //                 setCollapsed(false);
 //             }
 //         }, 100),
 //         []
 //     );
 //     useEffect(() => {
 //         handleResize();
 //         window.addEventListener('resize', handleResize);
 //         return () => {
 //             handleResize.cancel(); // Cleanup debounce
 //             window.removeEventListener('resize', handleResize);
 //         };
 //     }, [handleResize]);
 //     const toggleDrawer = () => {
 //         setDrawerVisible(!drawerVisible);
 //     };
 //     return (
 //         <Layout style={{ ...COMMON_STYLES.fullHeight, background: THEME_COLORS.background }}>
 //             {isMobile ? (
 //                 <Drawer
 //                     placement="left"
 //                     closable={true}
 //                     onClose={toggleDrawer}
 //                     open={drawerVisible}
 //                     width={200}
 //                     styles={{ body: { padding: 0, background: THEME_COLORS.sidebarBackground } }}
 //                     style={{ zIndex: 1002 }}
 //                 >
 //                     <Sidebar collapsed={false} onCollapse={setCollapsed} toggleDrawer={toggleDrawer} />
 //                 </Drawer>
 //             ) : (
 //                 <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
 //             )}
 //             <Layout
 //                 style={{
 //                     marginLeft: isMobile ? 0 : collapsed ? 80 : 256,
 //                     transition: 'margin-left 0.2s',
 //                     ...COMMON_STYLES.fullHeight,
 //                 }}
 //             >
 //                 <TopBar collapsed={collapsed} toggleDrawer={isMobile ? toggleDrawer : undefined} />
 //                 <Content
 //                     style={{
 //                         padding: isMobile ? '16px' : '24px',
 //                         background: THEME_COLORS.background,
 //                         // paddingBottom: isMobile ? '0' : '24px',
 //                         height: 'calc(100vh - 80px)',
 //                         overflowY: 'auto',
 //                         overflowX: 'hidden',
 //                         ...COMMON_STYLES.customScrollbar,
 //                     }}
 //                 >
 //                     {children}
 //                 </Content>
 //             </Layout>
 //         </Layout>
 //     );
 // };
 // export default DashboardLayout;
}),
"[project]/src/app/(authenticated)/home/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/message/index.js [app-ssr] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$ActionButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/ActionButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/swipeData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardLayout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
function HomePage() {
    const screens = useBreakpoint();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialCards"])());
    const [swipeHistory, setSwipeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchedProfile, setMatchedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triggerSwipe, setTriggerSwipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const currentCard = cards[cards.length - 1];
    /** Handle Swipe */ const handleSwipe = (direction)=>{
        if (!currentCard) return;
        setSwipeHistory((prev)=>[
                ...prev,
                currentCard
            ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProfile"])(currentCard) && direction === 'right') {
            if (Math.random() > 0.7) {
                setMatchedProfile(currentCard);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`🎉 It's a match with ${currentCard.name}!`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`You liked ${currentCard.name}! 💖`);
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProfile"])(currentCard)) {
            if (direction === 'right') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info(`Interested in ${currentCard.brand}? Check it out!`);
            }
        }
        setCards((prev)=>prev.slice(0, -1));
    };
    /** Undo Last Swipe */ const handleUndo = ()=>{
        if (swipeHistory.length === 0) return;
        const lastCard = swipeHistory[swipeHistory.length - 1];
        setCards((prev)=>[
                ...prev,
                lastCard
            ]);
        setSwipeHistory((prev)=>prev.slice(0, -1));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('Undo successful! 🔄');
    };
    /** Refresh Deck */ const handleRefresh = ()=>{
        setCards((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialCards"])());
        setSwipeHistory([]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('New profiles loaded! 🔥');
    };
    /** Super Like */ const handleSuperLike = ()=>{
        if (!currentCard || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProfile"])(currentCard)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`⭐ Super liked ${currentCard.name}!`);
        if (Math.random() > 0.4) {
            setMatchedProfile(currentCard);
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`🎉 It's a Super Match with ${currentCard.name}!`);
            }, 500);
        }
        handleSwipe('right');
    };
    const handleBoost = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('🚀 Boost activated! You’ll be a top profile for 30 minutes.');
    };
    /** Auto Refresh */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cards.length === 0) {
            const timer = setTimeout(()=>handleRefresh(), 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        cards.length
    ]);
    /** Layout Styles */ const containerStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: '#e02222ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: screens.xs ? '0' : '24px'
    };
    const cardAreaStyle = {
        position: 'relative',
        width: screens.xs ? '100%' : '50%',
        height: screens.xs ? '100vh' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
    /** ✅ Action Buttons: float above bottom of card area */ const actionsContainerStyle = {
        position: 'absolute',
        bottom: screens.xs ? '5%' : '6%',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 100
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardAreaStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: actionsContainerStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$ActionButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionButtons"], {
                        onUndo: handleUndo,
                        onPass: ()=>setTriggerSwipe('left'),
                        onSuperLike: handleSuperLike,
                        onLike: ()=>setTriggerSwipe('right'),
                        onBoost: handleBoost,
                        canUndo: swipeHistory.length > 0,
                        hasCard: !!currentCard
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                        lineNumber: 144,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                    lineNumber: 143,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                lineNumber: 134,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(authenticated)/home/page.tsx",
            lineNumber: 127,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_a31d1ef5._.js.map