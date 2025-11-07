module.exports = [
"[project]/src/components/swipe-stack/SwipeChoice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwipeChoice",
    ()=>SwipeChoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
'use client';
;
;
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function SwipeChoice({ type }) {
    const color = type === 'like' ? '#52c41a' : '#ff4d4f';
    const containerStyle = {
        borderRadius: 15,
        padding: '8px 16px',
        border: `4px solid ${color}`,
        backgroundColor: 'rgba(255,255,255,0.95)',
        transform: type === 'like' ? 'rotate(-15deg)' : 'rotate(15deg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    };
    const textStyle = {
        fontSize: 32,
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: 4,
        color: color,
        margin: 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
            style: textStyle,
            children: type
        }, void 0, false, {
            fileName: "[project]/src/components/swipe-stack/SwipeChoice.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe-stack/SwipeChoice.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/swipe-stack/SwipeCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwipeCard",
    ()=>SwipeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-ssr] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-ssr] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvironmentOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/EnvironmentOutlined.js [app-ssr] (ecmascript) <export default as EnvironmentOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-ssr] (ecmascript) <export default as CheckCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoCircleOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js [app-ssr] (ecmascript) <export default as InfoCircleOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/SwipeChoice.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function SwipeCard({ profile, style, isTopCard, onMouseDown, onTouchStart, swipeX }) {
    const cardStyle = {
        ...style,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundImage: `url(${profile.images[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    };
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.8) 100%)'
    };
    const contentStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        color: '#ffffff'
    };
    const verificationBadgeStyle = {
        position: 'absolute',
        top: 16,
        right: 16
    };
    const infoButtonStyle = {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        marginLeft: 16,
        cursor: 'pointer'
    };
    const likeOpacity = Math.max(0, Math.min(1, swipeX / 150));
    const nopeOpacity = Math.max(0, Math.min(1, Math.abs(swipeX) / 150));
    // Handle ad type cards
    if (profile.type === 'ad') {
        const adContentStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 24,
            color: '#ffffff'
        };
        const sponsoredLabelStyle = {
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: '#faad14',
            color: '#000000',
            padding: '4px 8px',
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 700
        };
        const ctaButtonStyle = {
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '12px 24px',
            borderRadius: 24,
            textAlign: 'center',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            marginTop: 16
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: cardStyle,
            onMouseDown: isTopCard ? onMouseDown : undefined,
            onTouchStart: isTopCard ? onTouchStart : undefined,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: overlayStyle
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    style: sponsoredLabelStyle,
                    children: "SPONSORED"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: adContentStyle,
                    children: profile.adData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 2,
                                style: {
                                    color: '#ffffff',
                                    fontSize: 32,
                                    fontWeight: 700,
                                    margin: '0 0 8px 0'
                                },
                                children: profile.adData.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                style: {
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: 16,
                                    display: 'block',
                                    marginBottom: 16
                                },
                                children: profile.adData.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: ctaButtonStyle,
                                children: profile.adData.callToAction
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                isTopCard && swipeX > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 80,
                        left: 32,
                        opacity: likeOpacity
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeChoice"], {
                        type: "like"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this),
                isTopCard && swipeX < -50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 80,
                        right: 32,
                        opacity: nopeOpacity
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeChoice"], {
                        type: "nope"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this);
    }
    // Regular user profile card
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: cardStyle,
        onMouseDown: isTopCard ? onMouseDown : undefined,
        onTouchStart: isTopCard ? onTouchStart : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: overlayStyle
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            profile.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: verificationBadgeStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__["CheckCircleFilled"], {
                    style: {
                        color: '#1890ff',
                        fontSize: 32,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: contentStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    justify: "space-between",
                    align: "end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                    align: "baseline",
                                    size: "small",
                                    style: {
                                        marginBottom: 4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                            level: 1,
                                            style: {
                                                color: '#ffffff',
                                                fontSize: 48,
                                                fontWeight: 700,
                                                margin: 0,
                                                lineHeight: 1
                                            },
                                            children: profile.firstName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                            level: 1,
                                            style: {
                                                color: '#ffffff',
                                                fontSize: 48,
                                                fontWeight: 300,
                                                margin: 0,
                                                lineHeight: 1
                                            },
                                            children: profile.age
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        profile.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__["CheckCircleFilled"], {
                                            style: {
                                                color: '#1890ff',
                                                fontSize: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                    align: "center",
                                    size: "small",
                                    style: {
                                        marginBottom: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvironmentOutlined$3e$__["EnvironmentOutlined"], {
                                            style: {
                                                fontSize: 14,
                                                color: 'rgba(255,255,255,0.9)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            style: {
                                                color: 'rgba(255,255,255,0.9)',
                                                fontSize: 14,
                                                fontWeight: 500
                                            },
                                            children: [
                                                profile.distance,
                                                " km away"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                profile.occupation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    style: {
                                        color: 'rgba(255,255,255,0.8)',
                                        fontSize: 14,
                                        display: 'block',
                                        marginBottom: 4
                                    },
                                    children: profile.occupation
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    style: {
                                        color: 'rgba(255,255,255,0.8)',
                                        fontSize: 14,
                                        display: 'block'
                                    },
                                    children: profile.location
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: infoButtonStyle,
                            onClick: ()=>console.log('View profile:', profile.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoCircleOutlined$3e$__["InfoCircleOutlined"], {
                                style: {
                                    color: '#ffffff',
                                    fontSize: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            isTopCard && swipeX > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 80,
                    left: 32,
                    opacity: likeOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeChoice"], {
                    type: "like"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this),
            isTopCard && swipeX < -50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 80,
                    right: 32,
                    opacity: nopeOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeChoice"], {
                    type: "nope"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                    lineNumber: 290,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/swipe-stack/SwipeCard.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/swipe-stack/SwipeCardStack.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwipeCardStack",
    ()=>SwipeCardStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/SwipeCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const SWIPE_THRESHOLD = 100;
const SWIPE_POWER_THRESHOLD = 50000;
function SwipeCardStack({ profiles, onSwipeComplete, onSwipeProgress }) {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px'
    };
    const handleDragEnd = (event, info)=>{
        const swipeVelocity = info.velocity.x;
        const swipeDistance = info.offset.x;
        const swipePower = Math.abs(swipeVelocity) * Math.abs(swipeDistance);
        if (swipePower > SWIPE_POWER_THRESHOLD || Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
            const direction = swipeDistance > 0 ? 'right' : 'left';
            onSwipeComplete(direction);
        }
    };
    const handleDrag = (event, info)=>{
        const rotation = info.offset.x * 0.1;
        onSwipeProgress?.(info.offset.x, info.offset.y, rotation);
    };
    if (profiles.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: profiles.slice(0, 3).map((profile, index)=>{
            const isTopCard = index === 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    position: 'absolute',
                    width: 320,
                    height: 520,
                    borderRadius: 20,
                    cursor: isTopCard ? 'grab' : 'default',
                    zIndex: profiles.length - index
                },
                initial: false,
                animate: {
                    scale: isTopCard ? 1 : 0.95 - index * 0.05,
                    y: isTopCard ? 0 : index * 8,
                    rotateY: isTopCard ? 0 : index * -2,
                    opacity: 1,
                    boxShadow: isTopCard ? '0 8px 32px rgba(0, 0, 0, 0.3)' : `0 ${4 + index * 2}px ${16 + index * 4}px rgba(0, 0, 0, ${0.2 - index * 0.05})`
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                },
                drag: isTopCard ? "x" : false,
                dragConstraints: {
                    left: 0,
                    right: 0
                },
                dragElastic: 0.2,
                onDrag: isTopCard ? handleDrag : undefined,
                onDragEnd: isTopCard ? handleDragEnd : undefined,
                whileDrag: {
                    cursor: 'grabbing',
                    scale: 1.05,
                    zIndex: 1000
                },
                exit: {
                    x: 400,
                    opacity: 0,
                    scale: 0.8,
                    transition: {
                        duration: 0.3
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeCard"], {
                    profile: profile
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeCardStack.tsx",
                    lineNumber: 101,
                    columnNumber: 13
                }, this)
            }, `${profile.id}-${index}`, false, {
                fileName: "[project]/src/components/swipe-stack/SwipeCardStack.tsx",
                lineNumber: 59,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/swipe-stack/SwipeCardStack.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/swipe-stack/SwipeFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwipeFooter",
    ()=>SwipeFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-ssr] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-ssr] (ecmascript) <export default as UndoOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-ssr] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-ssr] (ecmascript) <export default as HeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-ssr] (ecmascript) <export default as StarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-ssr] (ecmascript) <export default as ThunderboltFilled>");
'use client';
;
;
;
;
const COLORS = {
    like: '#52c41a',
    nope: '#ff4d4f',
    star: '#1890ff',
    undo: '#8c8c8c',
    boost: '#722ed1'
};
function SwipeFooter({ onChoice, onUndo, canUndo, topCard }) {
    const handleReload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('Reload action');
    }, []);
    const handleFlash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('Boost action');
    }, []);
    const handleStar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('Super like action');
        onChoice(1); // Treat as like for now
    }, [
        onChoice
    ]);
    // Check if current top card is an ad
    const isAd = topCard?.type === 'ad';
    const containerStyle = {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
        padding: '16px 24px',
        borderRadius: 40,
        backdropFilter: 'blur(10px)'
    };
    const baseButtonStyle = {
        borderRadius: '50%',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        transition: 'all 0.2s ease',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const smallButtonStyle = {
        ...baseButtonStyle,
        width: 48,
        height: 48
    };
    const largeButtonStyle = {
        ...baseButtonStyle,
        width: 56,
        height: 56
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
            justify: "center",
            align: "center",
            gap: "large",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff',
                        opacity: canUndo ? 1 : 0.5,
                        cursor: canUndo ? 'pointer' : 'not-allowed'
                    },
                    onClick: onUndo,
                    disabled: !canUndo,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__["UndoOutlined"], {
                        style: {
                            color: COLORS.undo,
                            fontSize: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...largeButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: ()=>onChoice(-1),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {
                        style: {
                            color: COLORS.nope,
                            fontSize: 24,
                            fontWeight: 'bold'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff',
                        opacity: isAd ? 0.5 : 1,
                        cursor: isAd ? 'not-allowed' : 'pointer'
                    },
                    onClick: handleStar,
                    disabled: isAd,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__["StarFilled"], {
                        style: {
                            color: COLORS.star,
                            fontSize: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...largeButtonStyle,
                        backgroundColor: COLORS.like
                    },
                    onClick: ()=>onChoice(1),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                        style: {
                            color: '#ffffff',
                            fontSize: 24
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff',
                        opacity: isAd ? 0.5 : 1,
                        cursor: isAd ? 'not-allowed' : 'pointer'
                    },
                    onClick: handleFlash,
                    disabled: isAd,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__["ThunderboltFilled"], {
                        style: {
                            color: COLORS.boost,
                            fontSize: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe-stack/SwipeFooter.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/swipe-stack/EmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-ssr] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [app-ssr] (ecmascript) <export default as ReloadOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FireFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireFilled.js [app-ssr] (ecmascript) <export default as FireFilled>");
'use client';
;
;
;
const { Title, Paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function EmptyState({ onRefresh }) {
    const containerStyle = {
        textAlign: 'center',
        maxWidth: 384,
        padding: 32
    };
    const iconContainerStyle = {
        width: 96,
        height: 96,
        margin: '0 auto 24px auto',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #fce7f3 0%, #fde2e7 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const primaryButtonStyle = {
        background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
        border: 'none',
        borderRadius: 24,
        height: 48,
        padding: '0 32px',
        fontWeight: 600
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
        justify: "center",
        align: "center",
        style: {
            height: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: iconContainerStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FireFilled$3e$__["FireFilled"], {
                        style: {
                            color: '#ec4899',
                            fontSize: 48
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    level: 2,
                    style: {
                        color: '#ffffff',
                        fontSize: 32,
                        fontWeight: 700,
                        marginBottom: 8
                    },
                    children: "No More Profiles!"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Paragraph, {
                    style: {
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: 16,
                        marginBottom: 24,
                        lineHeight: 1.6
                    },
                    children: "You've seen all available profiles in your area. Check back later for fresh faces!"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "primary",
                    size: "large",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__["ReloadOutlined"], {}, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, void 0),
                    onClick: onRefresh,
                    style: primaryButtonStyle,
                    children: "Refresh Profiles"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe-stack/EmptyState.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/swipe-stack/MatchModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatchModal",
    ()=>MatchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/modal/index.js [app-ssr] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-ssr] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-ssr] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-ssr] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-ssr] (ecmascript) <export default as HeartFilled>");
'use client';
;
;
;
const { Title, Paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function MatchModal({ profile, onClose, onSendMessage }) {
    const modalStyle = {
        background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 100%)',
        borderRadius: 20,
        overflow: 'hidden'
    };
    const contentStyle = {
        textAlign: 'center',
        padding: 24
    };
    const matchHeaderStyle = {
        position: 'relative',
        display: 'inline-block',
        marginBottom: 24
    };
    const heartAnimationStyle = {
        position: 'absolute',
        animation: 'pulse 1.5s ease-in-out infinite'
    };
    const matchTitleStyle = {
        fontSize: 48,
        fontWeight: 700,
        background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        margin: 0
    };
    const avatarContainerStyle = {
        border: '4px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    };
    const primaryButtonStyle = {
        background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
        border: 'none',
        borderRadius: 24,
        height: 48,
        width: '100%',
        fontWeight: 600
    };
    const secondaryButtonStyle = {
        borderRadius: 24,
        height: 48,
        width: '100%',
        fontWeight: 500
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        open: true,
        onCancel: onClose,
        footer: null,
        centered: true,
        width: 400,
        styles: {
            content: modalStyle,
            mask: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(5px)'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: contentStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: matchHeaderStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...heartAnimationStyle,
                                    top: -16,
                                    left: -16,
                                    color: '#ec4899'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                    style: {
                                        fontSize: 32
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...heartAnimationStyle,
                                    top: -8,
                                    right: -16,
                                    color: '#ef4444',
                                    animationDelay: '0.3s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                    style: {
                                        fontSize: 24
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...heartAnimationStyle,
                                    bottom: -16,
                                    left: -8,
                                    color: '#f472b6',
                                    animationDelay: '0.5s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                    style: {
                                        fontSize: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 1,
                                style: matchTitleStyle,
                                children: "IT'S A MATCH!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                        justify: "center",
                        align: "center",
                        gap: "large",
                        style: {
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                size: 80,
                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
                                style: avatarContainerStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                style: {
                                    color: '#ec4899',
                                    fontSize: 48,
                                    animation: 'pulse 1.5s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                size: 80,
                                src: profile.images[0],
                                style: avatarContainerStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 3,
                                style: {
                                    color: '#1f2937',
                                    fontSize: 20,
                                    fontWeight: 600,
                                    marginBottom: 8
                                },
                                children: [
                                    "You and ",
                                    profile.firstName,
                                    " liked each other!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Paragraph, {
                                style: {
                                    color: '#6b7280',
                                    fontSize: 16,
                                    margin: 0
                                },
                                children: "Start a conversation and make plans to meet up tonight."
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        direction: "vertical",
                        size: "middle",
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                size: "large",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {}, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, void 0),
                                onClick: onSendMessage,
                                style: primaryButtonStyle,
                                children: "Send Message"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "default",
                                size: "large",
                                onClick: onClose,
                                style: secondaryButtonStyle,
                                children: "Keep Swiping"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/swipe-stack/MatchModal.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/swipe-stack/LoadingScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-ssr] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/index.js [app-ssr] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-ssr] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-ssr] (ecmascript) <export default as LoadingOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartOutlined.js [app-ssr] (ecmascript) <export default as HeartOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CompassOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompassOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CompassOutlined.js [app-ssr] (ecmascript) <export default as CompassOutlined>");
'use client';
;
;
;
const { Title, Paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function LoadingScreen({ message = "Finding your perfect matches...", stage = 'loading' }) {
    const containerStyle = {
        minHeight: '60vh',
        width: '100%',
        background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #f0f9ff 100%)',
        borderRadius: 24,
        position: 'relative',
        overflow: 'hidden'
    };
    const contentStyle = {
        textAlign: 'center',
        padding: '40px 24px',
        zIndex: 2
    };
    const titleStyle = {
        fontSize: 28,
        fontWeight: 700,
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 16
    };
    const subtitleStyle = {
        color: '#6b7280',
        fontSize: 16,
        marginBottom: 32
    };
    const spinnerStyle = {
        fontSize: 48,
        color: '#ec4899'
    };
    const floatingElementsStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
    };
    const getStageMessage = ()=>{
        switch(stage){
            case 'initial':
                return "Welcome to Smart Match Mate";
            case 'loading':
                return "Loading your matches...";
            case 'searching':
                return "Searching for compatible profiles...";
            case 'finding_matches':
                return "Finding your perfect matches...";
            default:
                return message;
        }
    };
    const getStageSubtitle = ()=>{
        switch(stage){
            case 'initial':
                return "Get ready to discover amazing connections";
            case 'loading':
                return "Please wait while we prepare your experience";
            case 'searching':
                return "Using AI to find the most compatible profiles for you";
            case 'finding_matches':
                return "Almost ready! Preparing your personalized matches";
            default:
                return "We're working hard to find the best matches for you";
        }
    };
    const getIcon = ()=>{
        switch(stage){
            case 'initial':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__["HeartOutlined"], {
                    style: spinnerStyle
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                    lineNumber: 97,
                    columnNumber: 16
                }, this);
            case 'searching':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CompassOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CompassOutlined$3e$__["CompassOutlined"], {
                    style: {
                        ...spinnerStyle,
                        animation: 'spin 2s linear infinite'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                    lineNumber: 99,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingOutlined$3e$__["LoadingOutlined"], {
                    style: spinnerStyle
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                    lineNumber: 101,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: floatingElementsStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            animation: 'float 6s ease-in-out infinite'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__["HeartOutlined"], {
                            style: {
                                fontSize: 24,
                                color: '#ec4899',
                                opacity: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '20%',
                            right: '15%',
                            animation: 'float 8s ease-in-out infinite reverse'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            size: 40,
                            src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop",
                            style: {
                                opacity: 0.4
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '30%',
                            left: '20%',
                            animation: 'float 7s ease-in-out infinite'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            size: 32,
                            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop",
                            style: {
                                opacity: 0.4
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '20%',
                            right: '25%',
                            animation: 'float 5s ease-in-out infinite reverse'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__["HeartOutlined"], {
                            style: {
                                fontSize: 20,
                                color: '#8b5cf6',
                                opacity: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                align: "center",
                justify: "center",
                vertical: true,
                style: contentStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                    direction: "vertical",
                    size: "large",
                    align: "center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                            indicator: getIcon(),
                            spinning: stage !== 'initial'
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                            level: 1,
                            style: titleStyle,
                            children: getStageMessage()
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Paragraph, {
                            style: subtitleStyle,
                            children: getStageSubtitle()
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        stage === 'finding_matches' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                            size: "small",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: '#ec4899',
                                        animation: 'pulse 1s ease-in-out infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: '#ec4899',
                                        animation: 'pulse 1s ease-in-out infinite 0.2s'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: '#ec4899',
                                        animation: 'pulse 1s ease-in-out infinite 0.4s'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(5px) rotate(-3deg);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/swipe-stack/LoadingScreen.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/swipeData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSwipeRecord",
    ()=>createSwipeRecord,
    "getInitialCards",
    ()=>getInitialCards,
    "getRefreshCards",
    ()=>getRefreshCards,
    "getUserProfiles",
    ()=>getUserProfiles,
    "isAd",
    ()=>isAd,
    "isProfile",
    ()=>isProfile,
    "mockAds",
    ()=>mockAds,
    "mockProfiles",
    ()=>mockProfiles,
    "mockUserProfiles",
    ()=>mockUserProfiles
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
const mockUserProfiles = [
    {
        id: "1",
        firstName: "Emma",
        lastName: "Johnson",
        age: 26,
        bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Looking for casual fun and good vibes ✨",
        distance: 2.5,
        images: [
            "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
        firstName: "Alex",
        lastName: "Chen",
        age: 28,
        bio: "Software engineer by day, party animal by night 🎉 | No strings attached 💫",
        distance: 5.2,
        images: [
            "https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
        firstName: "Sophie",
        lastName: "Martinez",
        age: 24,
        bio: "Artist 🎨 | Free spirit | Living in the moment and loving every second 🌙",
        distance: 3.8,
        images: [
            "https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
        firstName: "James",
        lastName: "Wilson",
        age: 30,
        bio: "Outdoor enthusiast 🏔️ | Photographer | Adventure awaits, let's make it happen 📸",
        distance: 7.1,
        images: [
            "https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
        firstName: "Olivia",
        lastName: "Davis",
        age: 27,
        bio: "Fitness enthusiast 💪 | Yoga instructor | Living my best life, join me? 🌟",
        distance: 4.3,
        images: [
            "https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080",
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
        firstName: "Ryan",
        lastName: "Thompson",
        age: 29,
        bio: "Marketing professional | World traveler ✈️ | Always down for spontaneous adventures 🌮",
        distance: 6.7,
        images: [
            "https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080",
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
        firstName: "Maya",
        lastName: "Rodriguez",
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
        firstName: "Jake",
        lastName: "Anderson",
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
async function getUserProfiles() {
    // Simulate API delay
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    // Shuffle profiles for variety
    const shuffled = [
        ...mockUserProfiles
    ].sort(()=>Math.random() - 0.5);
    return shuffled;
}
async function createSwipeRecord(profileId, direction) {
    // Simulate API call to record swipe
    await new Promise((resolve)=>setTimeout(resolve, 200));
    console.log(`Swipe recorded: ${profileId} - ${direction}`);
}
}),
"[project]/src/app/(authenticated)/swipe/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/message/index.js [app-ssr] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeCardStack$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/SwipeCardStack.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/SwipeFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/EmptyState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$MatchModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/MatchModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe-stack/LoadingScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/swipeData.ts [app-ssr] (ecmascript)");
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
const { Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
/** Configuration constants */ const SWIPE_THRESHOLD = 100;
const SWIPE_OUT_DISTANCE = 400;
const AD_FREQUENCY = 8;
/**
 * SwipeScreen Component
 * 
 * A Next.js/Ant Design implementation of a Tinder-style swipe interface featuring:
 * - Gesture-based swipe interactions (mouse/touch)
 * - Button-based swipe controls  
 * - Real-time profile matching
 * - Smooth animations and transitions
 * - Ad integration support
 * - Modular component architecture
 * 
 * @component
 */ const SwipePage = ()=>{
    // Animation values for card movement and rotation
    const [swipeX, setSwipeX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [swipeY, setSwipeY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // State management
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [swipeCount, setSwipeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [matchedProfile, setMatchedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swipeHistory, setSwipeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs for gesture handling
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /**
   * Styles for the main container
   */ const containerStyle = {
        height: '100vh',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden'
    };
    const contentStyle = {
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    /**
   * Performance Optimizations
   * Memoized values to prevent unnecessary re-renders
   */ const visibleProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>profiles.slice(0, 3), [
        profiles
    ]);
    const hasProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>profiles.length > 0, [
        profiles.length
    ]);
    const topCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>profiles[0], [
        profiles
    ]);
    /**
   * Initialize profiles on component mount
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeProfiles = async ()=>{
            try {
                setIsLoading(true);
                const userProfiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfiles"])();
                setProfiles(userProfiles);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error('Failed to load profiles');
            } finally{
                setIsLoading(false);
            }
        };
        initializeProfiles();
    }, []);
    /**
   * Auto-refresh profiles when stack becomes empty
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profiles.length === 0 && !isLoading) {
            const refreshTimeout = setTimeout(async ()=>{
                try {
                    const newProfiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfiles"])();
                    setProfiles(newProfiles);
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error('Failed to refresh profiles');
                }
            }, 1000);
            return ()=>clearTimeout(refreshTimeout);
        }
    }, [
        profiles.length,
        isLoading
    ]);
    /**
   * Handle ad injection every AD_FREQUENCY swipes
   */ const handleAdInjection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((swipeCount)=>{
        if (swipeCount % AD_FREQUENCY === 0) {
            const adProfile = {
                id: `ad_${Date.now()}`,
                type: 'ad',
                firstName: 'Sponsored',
                lastName: 'Content',
                age: 0,
                images: [
                    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop'
                ],
                bio: 'Discover amazing products and services',
                location: 'Sponsored',
                distance: 0,
                verified: false,
                adData: {
                    title: 'Premium Dating Features',
                    description: 'Unlock unlimited likes and see who liked you!',
                    callToAction: 'Get Premium Now'
                }
            };
            setProfiles((prev)=>[
                    adProfile,
                    ...prev
                ]);
        }
    }, []);
    /**
   * Record swipe information
   */ const recordSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (profileId, direction)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSwipeRecord"])(profileId, direction);
        } catch (error) {
            // Swipe recording failed - not critical for UX
            console.warn('Failed to record swipe:', error);
        }
    }, []);
    /**
   * Remove the top card from the stack
   */ const removeTopCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setProfiles((prev)=>{
            if (prev.length === 0) return [];
            const [removedCard, ...remaining] = prev;
            // Add to history for undo functionality
            setSwipeHistory((history)=>[
                    removedCard,
                    ...history.slice(0, 9)
                ]);
            // Reset animation values
            setTimeout(()=>{
                setSwipeX(0);
                setSwipeY(0);
                setRotation(0);
            }, 50);
            return remaining;
        });
        setSwipeCount((prev)=>{
            const nextCount = prev + 1;
            handleAdInjection(nextCount);
            return nextCount;
        });
    }, [
        handleAdInjection
    ]);
    /**
   * Handle swipe completion
   */ const handleSwipeComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (direction)=>{
        const currentProfile = profiles[0];
        if (!currentProfile) return;
        // Record swipe for non-ad profiles
        if (currentProfile.type !== 'ad') {
            await recordSwipe(currentProfile.id, direction);
            // Check for match (30% probability for likes)
            if (direction === 'right' && Math.random() > 0.7) {
                setMatchedProfile(currentProfile);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success({
                    content: `🎉 It's a match with ${currentProfile.firstName}!`,
                    duration: 3
                });
            } else if (direction === 'right') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success({
                    content: `You liked ${currentProfile.firstName}! 💖`,
                    duration: 2
                });
            }
        } else {
            // Handle ad interaction
            if (direction === 'right') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info({
                    content: 'Interested in this offer? Check it out!',
                    duration: 2
                });
            }
        }
        removeTopCard();
    }, [
        profiles,
        recordSwipe,
        removeTopCard
    ]);
    /**
   * Mouse/Touch gesture handlers for swipe functionality
   */ const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!hasProfiles) return;
        setIsDragging(true);
        startPos.current = {
            x: e.clientX,
            y: e.clientY
        };
        e.preventDefault();
    }, [
        hasProfiles
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!hasProfiles) return;
        setIsDragging(true);
        const touch = e.touches[0];
        startPos.current = {
            x: touch.clientX,
            y: touch.clientY
        };
    }, [
        hasProfiles
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDragging) return;
        const deltaX = e.clientX - startPos.current.x;
        const deltaY = e.clientY - startPos.current.y;
        setSwipeX(deltaX);
        setSwipeY(deltaY);
        setRotation(deltaX * 0.1);
    }, [
        isDragging
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isDragging) return;
        const touch = e.touches[0];
        const deltaX = touch.clientX - startPos.current.x;
        const deltaY = touch.clientY - startPos.current.y;
        setSwipeX(deltaX);
        setSwipeY(deltaY);
        setRotation(deltaX * 0.1);
    }, [
        isDragging
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isDragging) return;
        setIsDragging(false);
        if (Math.abs(swipeX) > SWIPE_THRESHOLD) {
            // Complete the swipe
            const direction = swipeX > 0 ? 'right' : 'left';
            const targetX = swipeX > 0 ? SWIPE_OUT_DISTANCE : -SWIPE_OUT_DISTANCE;
            // Animate out
            setSwipeX(targetX);
            setRotation(targetX * 0.05);
            setTimeout(()=>{
                handleSwipeComplete(direction);
            }, 300);
        } else {
            // Snap back to center
            setSwipeX(0);
            setSwipeY(0);
            setRotation(0);
        }
    }, [
        isDragging,
        swipeX,
        handleSwipeComplete
    ]);
    /**
   * Global event listeners for mouse/touch events
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleDragEnd);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleDragEnd);
        }
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleDragEnd);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleDragEnd);
        };
    }, [
        isDragging,
        handleMouseMove,
        handleTouchMove,
        handleDragEnd
    ]);
    /**
   * Handle button-based swipe choices
   */ const handleChoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        if (!hasProfiles) return;
        const swipeDirection = direction > 0 ? 'right' : 'left';
        const animationDistance = direction * SWIPE_OUT_DISTANCE;
        // Animate button swipe
        setSwipeX(animationDistance);
        setRotation(animationDistance * 0.05);
        setTimeout(()=>{
            handleSwipeComplete(swipeDirection);
        }, 300);
    }, [
        hasProfiles,
        handleSwipeComplete
    ]);
    /**
   * Handle undo functionality
   */ const handleUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (swipeHistory.length === 0) return;
        const [lastProfile, ...remainingHistory] = swipeHistory;
        setProfiles((prev)=>[
                lastProfile,
                ...prev
            ]);
        setSwipeHistory(remainingHistory);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info({
            content: 'Undo successful! 🔄',
            duration: 1
        });
    }, [
        swipeHistory
    ]);
    /**
   * Handle refresh profiles
   */ const handleRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setIsLoading(true);
            const newProfiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfiles"])();
            setProfiles(newProfiles);
            setSwipeHistory([]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success({
                content: 'New profiles loaded! 🔥',
                duration: 2
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].error('Failed to refresh profiles');
        } finally{
            setIsLoading(false);
        }
    }, []);
    /**
   * Conditional rendering based on loading and profile states
   */ if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingScreen"], {}, void 0, false, {
            fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
            lineNumber: 376,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                style: contentStyle,
                children: hasProfiles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeCardStack$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeCardStack"], {
                            profiles: visibleProfiles,
                            swipeX: swipeX,
                            swipeY: swipeY,
                            rotation: rotation,
                            onMouseDown: handleMouseDown,
                            onTouchStart: handleTouchStart
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$SwipeFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwipeFooter"], {
                            onChoice: handleChoice,
                            onUndo: handleUndo,
                            canUndo: swipeHistory.length > 0,
                            topCard: topCard
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {
                    onRefresh: handleRefresh
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            matchedProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2d$stack$2f$MatchModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MatchModal"], {
                profile: matchedProfile,
                onClose: ()=>setMatchedProfile(null),
                onSendMessage: ()=>{
                    setMatchedProfile(null);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('Opening chat...', 1);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                lineNumber: 409,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SwipePage;
}),
];

//# sourceMappingURL=src_6ab2bee4._.js.map