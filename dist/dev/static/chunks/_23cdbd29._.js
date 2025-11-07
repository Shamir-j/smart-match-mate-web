(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/swipe/ActionButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButtons",
    ()=>ActionButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-client] (ecmascript) <export default as UndoOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-client] (ecmascript) <export default as HeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-client] (ecmascript) <export default as StarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-client] (ecmascript) <export default as ThunderboltFilled>");
'use client';
;
;
;
function ActionButtons({ onUndo, onPass, onSuperLike, onLike, onBoost, canUndo, hasCard }) {
    if (!hasCard) return null;
    const containerStyle = {
        position: 'absolute',
        bottom: 16,
        left: 0,
        right: 0,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'center',
        // background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
        zIndex: 10
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
    const isMobile = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768;
    const smallButtonStyle = {
        ...baseButtonStyle,
        width: isMobile ? 46 : 52,
        height: isMobile ? 46 : 52
    };
    const largeButtonStyle = {
        ...baseButtonStyle,
        width: isMobile ? 58 : 66,
        height: isMobile ? 58 : 66
    };
    const iconSize = isMobile ? 20 : 24;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: buttonGroupStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff',
                        opacity: canUndo ? 1 : 0.5
                    },
                    onClick: onUndo,
                    disabled: !canUndo,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__["UndoOutlined"], {
                        style: {
                            color: '#666',
                            fontSize: iconSize
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 93,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...largeButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: onPass,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {
                        style: {
                            color: '#ff4d4f',
                            fontSize: iconSize + 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 103,
                        columnNumber: 27
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: onSuperLike,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__["StarFilled"], {
                        style: {
                            color: '#1890ff',
                            fontSize: iconSize
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...largeButtonStyle,
                        backgroundColor: '#52c41a'
                    },
                    onClick: onLike,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                        style: {
                            color: '#fff',
                            fontSize: iconSize + 4
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    style: {
                        ...smallButtonStyle,
                        backgroundColor: '#ffffff'
                    },
                    onClick: onBoost,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__["ThunderboltFilled"], {
                        style: {
                            color: '#722ed1',
                            fontSize: iconSize
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
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
            lineNumber: 83,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
_c = ActionButtons;
var _c;
__turbopack_context__.k.register(_c, "ActionButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/swipe/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [app-client] (ecmascript) <export default as ReloadOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireFilled.js [app-client] (ecmascript) <export default as FireFilled>");
'use client';
;
;
;
const { Title, Paragraph, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function EmptyState({ onRefresh }) {
    const containerStyle = {
        height: '100%',
        padding: 32
    };
    const contentStyle = {
        textAlign: 'center',
        maxWidth: 384
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
    const secondaryButtonStyle = {
        color: '#ec4899',
        fontWeight: 500,
        border: 'none',
        padding: 0,
        height: 'auto'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
        justify: "center",
        align: "center",
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: contentStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: iconContainerStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireFilled$3e$__["FireFilled"], {
                        style: {
                            color: '#ec4899',
                            fontSize: 48
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/EmptyState.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/EmptyState.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    level: 2,
                    style: {
                        color: '#1f2937',
                        fontSize: 32,
                        fontWeight: 700,
                        marginBottom: 8
                    },
                    children: "You're all caught up!"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/EmptyState.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Paragraph, {
                    style: {
                        color: '#6b7280',
                        fontSize: 16,
                        marginBottom: 24,
                        lineHeight: 1.6
                    },
                    children: "No more profiles to show right now. Check back later for fresh faces, or try expanding your discovery preferences."
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/EmptyState.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "primary",
                    size: "large",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ReloadOutlined$3e$__["ReloadOutlined"], {}, void 0, false, {
                        fileName: "[project]/src/components/swipe/EmptyState.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, void 0),
                    onClick: onRefresh,
                    style: primaryButtonStyle,
                    children: "Refresh Discovery"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/EmptyState.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                    direction: "vertical",
                    size: "small",
                    style: {
                        marginTop: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                fontSize: 14,
                                color: '#9ca3af'
                            },
                            children: "or"
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/EmptyState.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "link",
                            style: secondaryButtonStyle,
                            children: "Adjust Preferences"
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/EmptyState.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe/EmptyState.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe/EmptyState.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/EmptyState.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/swipe/MatchModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatchModal",
    ()=>MatchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-client] (ecmascript) <export default as HeartFilled>");
'use client';
;
;
;
const { Title, Paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: contentStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: matchHeaderStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...heartAnimationStyle,
                                    top: -16,
                                    left: -16,
                                    color: '#ec4899'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                    style: {
                                        fontSize: 32
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...heartAnimationStyle,
                                    top: -8,
                                    right: -16,
                                    color: '#ef4444',
                                    animationDelay: '0.3s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                    style: {
                                        fontSize: 24
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...heartAnimationStyle,
                                    bottom: -16,
                                    left: -8,
                                    color: '#f472b6',
                                    animationDelay: '0.5s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                    style: {
                                        fontSize: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 1,
                                style: matchTitleStyle,
                                children: "IT'S A MATCH!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe/MatchModal.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                        justify: "center",
                        align: "center",
                        gap: "large",
                        style: {
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                size: 80,
                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
                                style: avatarContainerStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                                style: {
                                    color: '#ec4899',
                                    fontSize: 48,
                                    animation: 'pulse 1.5s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                size: 80,
                                src: profile.images[0],
                                style: avatarContainerStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe/MatchModal.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 3,
                                style: {
                                    color: '#1f2937',
                                    fontSize: 20,
                                    fontWeight: 600,
                                    marginBottom: 8
                                },
                                children: [
                                    "You and ",
                                    profile.name,
                                    " liked each other!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Paragraph, {
                                style: {
                                    color: '#6b7280',
                                    fontSize: 16,
                                    margin: 0
                                },
                                children: "Start a conversation and make plans to meet up tonight."
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe/MatchModal.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        direction: "vertical",
                        size: "middle",
                        style: {
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                size: "large",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {}, void 0, false, {
                                    fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, void 0),
                                onClick: onSendMessage,
                                style: primaryButtonStyle,
                                children: "Send Message"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "default",
                                size: "large",
                                onClick: onClose,
                                style: secondaryButtonStyle,
                                children: "Keep Swiping"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe/MatchModal.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
                fileName: "[project]/src/components/swipe/MatchModal.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/swipe/MatchModal.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = MatchModal;
var _c;
__turbopack_context__.k.register(_c, "MatchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/swipeData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/swipe/SwipeCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwipeCard",
    ()=>SwipeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvironmentOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/EnvironmentOutlined.js [app-client] (ecmascript) <export default as EnvironmentOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript) <export default as CheckCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoCircleOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js [app-client] (ecmascript) <export default as InfoCircleOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/swipeData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function SwipeCard({ card, onSwipe, style = {}, triggerSwipe, onSwipeComplete, isTopCard = false }) {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Handle programmatic swipe triggers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwipeCard.useEffect": ()=>{
            if (triggerSwipe && isTopCard) {
                const direction = triggerSwipe === 'right' ? 1 : -1;
                animateSwipeOut(direction);
            }
        }
    }["SwipeCard.useEffect"], [
        triggerSwipe,
        isTopCard
    ]);
    const animateSwipeOut = (direction)=>{
        if (!cardRef.current) return;
        const targetX = direction * 400;
        const targetRotation = direction * 30;
        cardRef.current.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
        cardRef.current.style.transform = `translateX(${targetX}px) rotate(${targetRotation}deg)`;
        cardRef.current.style.opacity = '0';
        setTimeout(()=>{
            onSwipe(direction > 0 ? 'right' : 'left');
            onSwipeComplete?.();
        }, 400);
    };
    const handleMouseDown = (e)=>{
        if (!isTopCard) return;
        e.preventDefault();
        setIsDragging(true);
        startPos.current = {
            x: e.clientX,
            y: e.clientY
        };
    };
    const handleTouchStart = (e)=>{
        if (!isTopCard) return;
        setIsDragging(true);
        const touch = e.touches[0];
        startPos.current = {
            x: touch.clientX,
            y: touch.clientY
        };
    };
    const handleMouseMove = (e)=>{
        if (!isDragging || !isTopCard) return;
        const deltaX = e.clientX - startPos.current.x;
        const deltaY = e.clientY - startPos.current.y;
        setDragOffset({
            x: deltaX,
            y: deltaY
        });
        setRotation(deltaX * 0.1); // Subtle rotation based on drag
    };
    const handleTouchMove = (e)=>{
        if (!isDragging || !isTopCard) return;
        const touch = e.touches[0];
        const deltaX = touch.clientX - startPos.current.x;
        const deltaY = touch.clientY - startPos.current.y;
        setDragOffset({
            x: deltaX,
            y: deltaY
        });
        setRotation(deltaX * 0.1);
    };
    const handleDragEnd = ()=>{
        if (!isDragging || !isTopCard) return;
        setIsDragging(false);
        const threshold = 120;
        if (Math.abs(dragOffset.x) > threshold) {
            const direction = dragOffset.x > 0 ? 1 : -1;
            animateSwipeOut(direction);
        } else {
            // Snap back to center
            if (cardRef.current) {
                cardRef.current.style.transition = 'transform 0.3s ease-out';
                cardRef.current.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
            }
            setDragOffset({
                x: 0,
                y: 0
            });
            setRotation(0);
        }
    };
    // Add global event listeners for mouse/touch events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwipeCard.useEffect": ()=>{
            const handleGlobalMouseMove = {
                "SwipeCard.useEffect.handleGlobalMouseMove": (e)=>{
                    if (!isDragging || !isTopCard) return;
                    const deltaX = e.clientX - startPos.current.x;
                    const deltaY = e.clientY - startPos.current.y;
                    setDragOffset({
                        x: deltaX,
                        y: deltaY
                    });
                    setRotation(deltaX * 0.1);
                }
            }["SwipeCard.useEffect.handleGlobalMouseMove"];
            const handleGlobalTouchMove = {
                "SwipeCard.useEffect.handleGlobalTouchMove": (e)=>{
                    if (!isDragging || !isTopCard) return;
                    const touch = e.touches[0];
                    const deltaX = touch.clientX - startPos.current.x;
                    const deltaY = touch.clientY - startPos.current.y;
                    setDragOffset({
                        x: deltaX,
                        y: deltaY
                    });
                    setRotation(deltaX * 0.1);
                }
            }["SwipeCard.useEffect.handleGlobalTouchMove"];
            if (isDragging) {
                document.addEventListener('mousemove', handleGlobalMouseMove);
                document.addEventListener('mouseup', handleDragEnd);
                document.addEventListener('touchmove', handleGlobalTouchMove);
                document.addEventListener('touchend', handleDragEnd);
            }
            return ({
                "SwipeCard.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleGlobalMouseMove);
                    document.removeEventListener('mouseup', handleDragEnd);
                    document.removeEventListener('touchmove', handleGlobalTouchMove);
                    document.removeEventListener('touchend', handleDragEnd);
                }
            })["SwipeCard.useEffect"];
        }
    }["SwipeCard.useEffect"], [
        isDragging,
        isTopCard
    ]);
    const cardTransform = isTopCard ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) rotate(${rotation}deg)` : 'translateX(0) translateY(0) rotate(0deg)';
    const likeOpacity = Math.max(0, Math.min(1, dragOffset.x / 150));
    const nopeOpacity = Math.max(0, Math.min(1, Math.abs(dragOffset.x) / 150));
    const profileCardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        cursor: isTopCard ? 'grab' : 'default',
        pointerEvents: isTopCard ? 'auto' : 'none',
        transform: `${style?.transform} ${cardTransform}`,
        zIndex: style?.zIndex || (isTopCard ? 50 : 40),
        width: style?.width || '100%',
        height: style?.height || '100%',
        position: style?.position,
        top: style?.top,
        left: style?.left
    };
    const imageContainerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%'
    };
    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };
    const gradientOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.5) 100%)'
    };
    const likeIndicatorStyle = {
        position: 'absolute',
        top: 80,
        left: 32,
        border: '4px solid #52c41a',
        color: '#52c41a',
        backgroundColor: 'rgba(255,255,255,0.95)',
        padding: '8px 16px',
        borderRadius: 8,
        transform: 'rotate(-15deg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        fontWeight: 900,
        fontSize: 24,
        opacity: likeOpacity
    };
    const nopeIndicatorStyle = {
        position: 'absolute',
        top: 80,
        right: 32,
        border: '4px solid #ff4d4f',
        color: '#ff4d4f',
        backgroundColor: 'rgba(255,255,255,0.95)',
        padding: '8px 16px',
        borderRadius: 8,
        transform: 'rotate(15deg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        fontWeight: 900,
        fontSize: 24,
        opacity: nopeOpacity
    };
    const verificationBadgeStyle = {
        position: 'absolute',
        top: 16,
        right: 16
    };
    const profileInfoStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        color: '#ffffff'
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
        marginLeft: 16
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProfile"])(card)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cardRef,
            style: profileCardStyle,
            onMouseDown: handleMouseDown,
            onTouchStart: handleTouchStart,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: imageContainerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: card.images[0],
                        alt: card.name,
                        style: imageStyle,
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: gradientOverlayStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    isTopCard && dragOffset.x > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: likeIndicatorStyle,
                        children: "LIKE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, this),
                    isTopCard && dragOffset.x < -50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: nopeIndicatorStyle,
                        children: "NOPE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 281,
                        columnNumber: 13
                    }, this),
                    card.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: verificationBadgeStyle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__["CheckCircleFilled"], {
                            style: {
                                color: '#1890ff',
                                fontSize: 32,
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 289,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 288,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: profileInfoStyle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                            justify: "space-between",
                            align: "end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                            align: "baseline",
                                            size: "small",
                                            style: {
                                                marginBottom: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                                    level: 1,
                                                    style: {
                                                        color: '#ffffff',
                                                        fontSize: 48,
                                                        fontWeight: 700,
                                                        margin: 0,
                                                        lineHeight: 1
                                                    },
                                                    children: card.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                                    level: 1,
                                                    style: {
                                                        color: '#ffffff',
                                                        fontSize: 48,
                                                        fontWeight: 300,
                                                        margin: 0,
                                                        lineHeight: 1
                                                    },
                                                    children: card.age
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this),
                                                card.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__["CheckCircleFilled"], {
                                                    style: {
                                                        color: '#1890ff',
                                                        fontSize: 20
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                            align: "center",
                                            size: "small",
                                            style: {
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvironmentOutlined$3e$__["EnvironmentOutlined"], {
                                                    style: {
                                                        fontSize: 14,
                                                        color: 'rgba(255,255,255,0.9)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                    style: {
                                                        color: 'rgba(255,255,255,0.9)',
                                                        fontSize: 14,
                                                        fontWeight: 500
                                                    },
                                                    children: [
                                                        card.distance,
                                                        " kilometers away"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: infoButtonStyle,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InfoCircleOutlined$3e$__["InfoCircleOutlined"], {
                                        style: {
                                            color: '#ffffff',
                                            fontSize: 20
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
            lineNumber: 257,
            columnNumber: 7
        }, this);
    }
    // Ad Card Rendering
    const adCardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        cursor: isTopCard ? 'grab' : 'default',
        pointerEvents: isTopCard ? 'auto' : 'none',
        transform: `${style?.transform} ${cardTransform}`,
        zIndex: style?.zIndex || (isTopCard ? 50 : 40),
        width: style?.width || '100%',
        height: style?.height || '100%',
        position: style?.position,
        top: style?.top,
        left: style?.left
    };
    const adGradientOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)'
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
    const adContentStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        color: '#ffffff'
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
        width: '100%'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        style: adCardStyle,
        onMouseDown: handleMouseDown,
        onTouchStart: handleTouchStart,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: imageContainerStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: card.image,
                    alt: card.title,
                    style: imageStyle,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: adGradientOverlayStyle
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    style: sponsoredLabelStyle,
                    children: "SPONSORED"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: adContentStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                            level: 2,
                            style: {
                                color: '#ffffff',
                                fontSize: 32,
                                fontWeight: 700,
                                margin: '0 0 8px 0'
                            },
                            children: card.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                color: 'rgba(255,255,255,0.9)',
                                fontSize: 16,
                                display: 'block',
                                marginBottom: 16
                            },
                            children: card.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: ctaButtonStyle,
                            children: card.callToAction
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
            lineNumber: 409,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
        lineNumber: 403,
        columnNumber: 5
    }, this);
}
_s(SwipeCard, "j6DitLFXgWC1YDosRepaaOPPa0k=");
_c = SwipeCard;
var _c;
__turbopack_context__.k.register(_c, "SwipeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/swipe/SwipeCardStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwipeCardStack",
    ()=>SwipeCardStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/SwipeCard.tsx [app-client] (ecmascript)");
'use client';
;
;
function SwipeCardStack({ cards, onSwipe, triggerSwipe, onSwipeComplete }) {
    if (cards.length === 0) return null;
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: cards.slice(-3).reverse().map((card, index)=>{
            const isTopCard = index === 0;
            // Layered card styling
            const cardStyle = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${1 - index * 0.05}) rotate(${index * 1.5}deg)`,
                zIndex: 50 - index,
                opacity: isTopCard ? 1 : 0.85,
                width: '90%',
                maxWidth: '400px',
                height: '80%',
                maxHeight: '600px',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
                backgroundColor: '#000',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, opacity 0.3s ease'
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwipeCard"], {
                card: card,
                onSwipe: onSwipe,
                style: cardStyle,
                triggerSwipe: isTopCard ? triggerSwipe : null,
                onSwipeComplete: onSwipeComplete,
                isTopCard: isTopCard
            }, `${card.id}-${cards.length}`, false, {
                fileName: "[project]/src/components/swipe/SwipeCardStack.tsx",
                lineNumber: 55,
                columnNumber: 25
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/SwipeCardStack.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
} // 'use client';
 // import React from 'react';
 // import { SwipeCard } from './SwipeCard';
 // import { SwipeCardItem } from '../../data/swipeData';
 // interface SwipeCardStackProps {
 //     cards: SwipeCardItem[];
 //     onSwipe: (direction: "left" | "right") => void;
 //     triggerSwipe?: "left" | "right" | null;
 //     onSwipeComplete?: () => void;
 // }
 // export function SwipeCardStack({ cards, onSwipe, triggerSwipe, onSwipeComplete }: SwipeCardStackProps) {
 //     if (cards.length === 0) return null;
 //     const containerStyle: React.CSSProperties = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' };
 //     return (
 //         <div style={containerStyle}>
 //             {/* Show up to 3 cards in the stack for performance */}
 //             {cards.slice(-3).reverse().map((card, index) => {
 //                 const isTopCard = index === 0;
 //                 // Card stacking effect - each card positioned absolutely on top of each other
 //                 const cardStyle: React.CSSProperties = {
 //                     position: 'absolute',
 //                     top: '20%',
 //                     left: '50%',
 //                     transform: `translate(-50%, -50%) scale(${1 - index * 0.05}) rotate(${index * 2}deg)`,
 //                     zIndex: 50 - index,
 //                     opacity: index === 0 ? 1 : 0.8,
 //                     width: '100%',
 //                     height: '90%',
 //                     borderRadius: '16px',
 //                     boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
 //                 };
 //                 return (
 //                     <SwipeCard
 //                         key={`${card.id}-${cards.length}`} // Include length to force re-render
 //                         card={card}
 //                         onSwipe={onSwipe}
 //                         style={cardStyle}
 //                         triggerSwipe={isTopCard ? triggerSwipe : null}
 //                         onSwipeComplete={onSwipeComplete}
 //                         isTopCard={isTopCard}
 //                     />
 //                 );
 //             })}
 //         </div>
 //     );
 // }
_c = SwipeCardStack;
var _c;
__turbopack_context__.k.register(_c, "SwipeCardStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(authenticated)/home/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/(authenticated)/home/page.tsx'\n\nExpected ',', got 'style'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/antd/es/message/index.js [app-client] (ecmascript) <export default as message>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "message",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/message/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/UndoOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var UndoOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"
                }
            }
        ]
    },
    "name": "undo",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = UndoOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/UndoOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var UndoOutlined = function UndoOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![undo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMS40IDEyNEMyOTAuNSAxMjQuMyAxMTIgMzAzIDExMiA1MjMuOWMwIDEyOCA2MC4yIDI0MiAxNTMuOCAzMTUuMmwtMzcuNSA0OGMtNC4xIDUuMy0uMyAxMyA2LjMgMTIuOWwxNjctLjhjNS4yIDAgOS00LjkgNy43LTkuOUwzNjkuOCA3MjdhOCA4IDAgMDAtMTQuMS0zTDMxNSA3NzYuMWMtMTAuMi04LTIwLTE2LjctMjkuMy0yNmEzMTguNjQgMzE4LjY0IDAgMDEtNjguNi0xMDEuN0MyMDAuNCA2MDkgMTkyIDU2Ny4xIDE5MiA1MjMuOXM4LjQtODUuMSAyNS4xLTEyNC41YzE2LjEtMzguMSAzOS4yLTcyLjMgNjguNi0xMDEuNyAyOS40LTI5LjQgNjMuNi01Mi41IDEwMS43LTY4LjZDNDI2LjkgMjEyLjQgNDY4LjggMjA0IDUxMiAyMDRzODUuMSA4LjQgMTI0LjUgMjUuMWMzOC4xIDE2LjEgNzIuMyAzOS4yIDEwMS43IDY4LjYgMjkuNCAyOS40IDUyLjUgNjMuNiA2OC42IDEwMS43IDE2LjcgMzkuNCAyNS4xIDgxLjMgMjUuMSAxMjQuNXMtOC40IDg1LjEtMjUuMSAxMjQuNWEzMTguNjQgMzE4LjY0IDAgMDEtNjguNiAxMDEuN2MtNy41IDcuNS0xNS4zIDE0LjUtMjMuNCAyMS4yYTcuOTMgNy45MyAwIDAwLTEuMiAxMS4xbDM5LjQgNTAuNWMyLjggMy41IDcuOSA0LjEgMTEuNCAxLjNDODU0LjUgNzYwLjggOTEyIDY0OS4xIDkxMiA1MjMuOWMwLTIyMS4xLTE3OS40LTQwMC4yLTQwMC42LTM5OS45eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](UndoOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'UndoOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-client] (ecmascript) <export default as UndoOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UndoOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-client] (ecmascript) <export default as StarFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/ThunderboltFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var ThunderboltFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"
                }
            }
        ]
    },
    "name": "thunderbolt",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = ThunderboltFilled;
}),
"[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/ThunderboltFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var ThunderboltFilled = function ThunderboltFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![thunderbolt](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg0OCAzNTkuM0g2MjcuN0w4MjUuOCAxMDljNC4xLTUuMy40LTEzLTYuMy0xM0g0MzZjLTIuOCAwLTUuNSAxLjUtNi45IDRMMTcwIDU0Ny41Yy0zLjEgNS4zLjcgMTIgNi45IDEyaDE3NC40bC04OS40IDM1Ny42Yy0xLjkgNy44IDcuNSAxMy4zIDEzLjMgNy43TDg1My41IDM3M2M1LjItNC45IDEuNy0xMy43LTUuNS0xMy43eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ThunderboltFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'ThunderboltFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-client] (ecmascript) <export default as ThunderboltFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThunderboltFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [app-client] (ecmascript) <export default as ReloadOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReloadOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ReloadOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ReloadOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/FireFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FireFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9z"
                }
            }
        ]
    },
    "name": "fire",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = FireFilled;
}),
"[project]/node_modules/@ant-design/icons/es/icons/FireFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/FireFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var FireFilled = function FireFilled(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![fire](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTgzNC4xIDQ2OS4yQTM0Ny40OSAzNDcuNDkgMCAwMDc1MS4yIDM1NGwtMjkuMS0yNi43YTguMDkgOC4wOSAwIDAwLTEzIDMuM2wtMTMgMzcuM2MtOC4xIDIzLjQtMjMgNDcuMy00NC4xIDcwLjgtMS40IDEuNS0zIDEuOS00LjEgMi0xLjEuMS0yLjgtLjEtNC4zLTEuNS0xLjQtMS4yLTIuMS0zLTItNC44IDMuNy02MC4yLTE0LjMtMTI4LjEtNTMuNy0yMDJDNTU1LjMgMTcxIDUxMCAxMjMuMSA0NTMuNCA4OS43bC00MS4zLTI0LjNjLTUuNC0zLjItMTIuMyAxLTEyIDcuM2wyLjIgNDhjMS41IDMyLjgtMi4zIDYxLjgtMTEuMyA4NS45LTExIDI5LjUtMjYuOCA1Ni45LTQ3IDgxLjVhMjk1LjY0IDI5NS42NCAwIDAxLTQ3LjUgNDYuMSAzNTIuNiAzNTIuNiAwIDAwLTEwMC4zIDEyMS41QTM0Ny43NSAzNDcuNzUgMCAwMDE2MCA2MTBjMCA0Ny4yIDkuMyA5Mi45IDI3LjcgMTM2YTM0OS40IDM0OS40IDAgMDA3NS41IDExMC45YzMyLjQgMzIgNzAgNTcuMiAxMTEuOSA3NC43QzQxOC41IDk0OS44IDQ2NC41IDk1OSA1MTIgOTU5czkzLjUtOS4yIDEzNi45LTI3LjNBMzQ4LjYgMzQ4LjYgMCAwMDc2MC44IDg1N2MzMi40LTMyIDU3LjgtNjkuNCA3NS41LTExMC45YTM0NC4yIDM0NC4yIDAgMDAyNy43LTEzNmMwLTQ4LjgtMTAtOTYuMi0yOS45LTE0MC45eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](FireFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FireFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/FireFilled.js [app-client] (ecmascript) <export default as FireFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FireFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireFilled.js [app-client] (ecmascript)");
}),
"[project]/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/modal/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/EnvironmentOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var EnvironmentOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"
                }
            }
        ]
    },
    "name": "environment",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = EnvironmentOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/EnvironmentOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EnvironmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/EnvironmentOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var EnvironmentOutlined = function EnvironmentOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EnvironmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![environment](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OS4xYTM2Mi40OSAzNjIuNDkgMCAwMC03OS45LTExNS43IDM3MC44MyAzNzAuODMgMCAwMC0xMTguMi03Ny44QzYxMC43IDc2LjYgNTYyLjEgNjcgNTEyIDY3Yy01MC4xIDAtOTguNyA5LjYtMTQ0LjUgMjguNS00NC4zIDE4LjMtODQgNDQuNS0xMTguMiA3Ny44QTM2My42IDM2My42IDAgMDAxNjkuNCAyODljLTE5LjUgNDUtMjkuNCA5Mi44LTI5LjQgMTQyIDAgNzAuNiAxNi45IDE0MC45IDUwLjEgMjA4LjcgMjYuNyA1NC41IDY0IDEwNy42IDExMSAxNTguMSA4MC4zIDg2LjIgMTY0LjUgMTM4LjkgMTg4LjQgMTUzYTQzLjkgNDMuOSAwIDAwMjIuNCA2LjFjNy44IDAgMTUuNS0yIDIyLjQtNi4xIDIzLjktMTQuMSAxMDguMS02Ni44IDE4OC40LTE1MyA0Ny01MC40IDg0LjMtMTAzLjYgMTExLTE1OC4xQzg2Ny4xIDU3MiA4ODQgNTAxLjggODg0IDQzMS4xYzAtNDkuMi05LjktOTctMjkuNC0xNDJ6TTUxMiA4ODAuMmMtNjUuOS00MS45LTMwMC0yMDcuOC0zMDAtNDQ5LjEgMC03Ny45IDMxLjEtMTUxLjEgODcuNi0yMDYuM0MzNTYuMyAxNjkuNSA0MzEuNyAxMzkgNTEyIDEzOXMxNTUuNyAzMC41IDIxMi40IDg1LjlDNzgwLjkgMjgwIDgxMiAzNTMuMiA4MTIgNDMxLjFjMCAyNDEuMy0yMzQuMSA0MDcuMi0zMDAgNDQ5LjF6bTAtNjE3LjJjLTk3LjIgMC0xNzYgNzguOC0xNzYgMTc2czc4LjggMTc2IDE3NiAxNzYgMTc2LTc4LjggMTc2LTE3Ni03OC44LTE3Ni0xNzYtMTc2em03OS4yIDI1NS4yQTExMS42IDExMS42IDAgMDE1MTIgNTUxYy0yOS45IDAtNTgtMTEuNy03OS4yLTMyLjhBMTExLjYgMTExLjYgMCAwMTQwMCA0MzljMC0yOS45IDExLjctNTggMzIuOC03OS4yQzQ1NCAzMzguNiA0ODIuMSAzMjcgNTEyIDMyN2MyOS45IDAgNTggMTEuNiA3OS4yIDMyLjhDNjEyLjQgMzgxIDYyNCA0MDkuMSA2MjQgNDM5YzAgMjkuOS0xMS42IDU4LTMyLjggNzkuMnoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](EnvironmentOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EnvironmentOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/EnvironmentOutlined.js [app-client] (ecmascript) <export default as EnvironmentOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnvironmentOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/EnvironmentOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript) <export default as CheckCircleFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircleFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/InfoCircleOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var InfoCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
                }
            }
        ]
    },
    "name": "info-circle",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = InfoCircleOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$InfoCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/InfoCircleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$InfoCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![info-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiIC8+PHBhdGggZD0iTTQ2NCAzMzZhNDggNDggMCAxMDk2IDAgNDggNDggMCAxMC05NiAwem03MiAxMTJoLTQ4Yy00LjQgMC04IDMuNi04IDh2MjcyYzAgNC40IDMuNiA4IDggOGg0OGM0LjQgMCA4LTMuNiA4LThWNDU2YzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InfoCircleOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'InfoCircleOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js [app-client] (ecmascript) <export default as InfoCircleOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoCircleOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$InfoCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_23cdbd29._.js.map