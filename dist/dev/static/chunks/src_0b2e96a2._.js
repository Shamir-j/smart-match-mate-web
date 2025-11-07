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
"[project]/src/app/(authenticated)/home/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/message/index.js [app-client] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$ActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/ActionButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$MatchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/MatchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeCardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/SwipeCardStack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/swipeData.ts [app-client] (ecmascript)");
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
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
function HomePage() {
    _s();
    const screens = useBreakpoint();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialCards"])());
    const [swipeHistory, setSwipeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchedProfile, setMatchedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triggerSwipe, setTriggerSwipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const currentCard = cards[cards.length - 1];
    /** Handle Swipe */ const handleSwipe = (direction)=>{
        if (!currentCard) return;
        setSwipeHistory((prev)=>[
                ...prev,
                currentCard
            ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProfile"])(currentCard) && direction === 'right') {
            if (Math.random() > 0.7) {
                setMatchedProfile(currentCard);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`🎉 It's a match with ${currentCard.name}!`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`You liked ${currentCard.name}! 💖`);
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProfile"])(currentCard)) {
            if (direction === 'right') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info(`Interested in ${currentCard.brand}? Check it out!`);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('Undo successful! 🔄');
    };
    /** Refresh Deck */ const handleRefresh = ()=>{
        setCards((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialCards"])());
        setSwipeHistory([]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('New profiles loaded! 🔥');
    };
    /** Super Like */ const handleSuperLike = ()=>{
        if (!currentCard || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProfile"])(currentCard)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`⭐ Super liked ${currentCard.name}!`);
        if (Math.random() > 0.4) {
            setMatchedProfile(currentCard);
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`🎉 It's a Super Match with ${currentCard.name}!`);
            }, 500);
        }
        handleSwipe('right');
    };
    const handleBoost = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('🚀 Boost activated! You’ll be a top profile for 30 minutes.');
    };
    /** Auto Refresh */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (cards.length === 0) {
                const timer = setTimeout({
                    "HomePage.useEffect.timer": ()=>handleRefresh()
                }["HomePage.useEffect.timer"], 3000);
                return ({
                    "HomePage.useEffect": ()=>clearTimeout(timer)
                })["HomePage.useEffect"];
            }
        }
    }["HomePage.useEffect"], [
        cards.length
    ]);
    /** Layout Styles */ const containerStyle = {
        width: '100%',
        height: '100vh',
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
        height: screens.xs ? '100vh' : '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
    /** ✅ Action Buttons: float above bottom of card area */ const actionsContainerStyle = {
        position: 'absolute',
        bottom: screens.xs ? '5%' : '6%',
        left: 28,
        right: 28,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 100
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            cards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                justify: "center",
                align: "center",
                style: {
                    height: '100%',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    onRefresh: handleRefresh
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardAreaStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeCardStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwipeCardStack"], {
                        cards: cards,
                        onSwipe: handleSwipe,
                        triggerSwipe: triggerSwipe,
                        onSwipeComplete: ()=>setTriggerSwipe(null)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: actionsContainerStyle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$ActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionButtons"], {
                            onUndo: handleUndo,
                            onPass: ()=>setTriggerSwipe('left'),
                            onSuperLike: handleSuperLike,
                            onLike: ()=>setTriggerSwipe('right'),
                            onBoost: handleBoost,
                            canUndo: swipeHistory.length > 0,
                            hasCard: !!currentCard
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            matchedProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$MatchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatchModal"], {
                profile: matchedProfile,
                onClose: ()=>setMatchedProfile(null),
                onSendMessage: ()=>{
                    setMatchedProfile(null);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('Opening chat...', 1);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
} // 'use client';
 // import React, { useState, useEffect } from 'react';
 // import { message, Flex, Grid } from 'antd';
 // import { ActionButtons } from '@/components/swipe/ActionButtons';
 // import { EmptyState } from '@/components/swipe/EmptyState';
 // import { MatchModal } from '@/components/swipe/MatchModal';
 // import { SwipeCardStack } from '@/components/swipe/SwipeCardStack';
 // import { SwipeCardItem, getInitialCards, Profile, isProfile } from '@/data/swipeData';
 // const { useBreakpoint } = Grid;
 // export default function HomePage() {
 //     const screens = useBreakpoint();
 //     const [cards, setCards] = useState<SwipeCardItem[]>(getInitialCards());
 //     const [swipeHistory, setSwipeHistory] = useState<SwipeCardItem[]>([]);
 //     const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
 //     const [triggerSwipe, setTriggerSwipe] = useState<'left' | 'right' | null>(null);
 //     const currentCard = cards[cards.length - 1];
 //     const handleSwipe = (direction: 'left' | 'right') => {
 //         if (!currentCard) return;
 //         setSwipeHistory((prev) => [...prev, currentCard]);
 //         if (isProfile(currentCard) && direction === 'right') {
 //             if (Math.random() > 0.7) {
 //                 setMatchedProfile(currentCard);
 //                 message.success(`🎉 It's a match with ${currentCard.name}!`);
 //             } else {
 //                 message.success(`You liked ${currentCard.name}! 💖`);
 //             }
 //         }
 //         if (!isProfile(currentCard)) {
 //             if (direction === 'right') {
 //                 message.info(`Interested in ${currentCard.brand}? Check it out!`);
 //             }
 //         }
 //         setCards((prev) => prev.slice(0, -1));
 //     };
 //     const handleUndo = () => {
 //         if (swipeHistory.length === 0) return;
 //         const lastCard = swipeHistory[swipeHistory.length - 1];
 //         setCards((prev) => [...prev, lastCard]);
 //         setSwipeHistory((prev) => prev.slice(0, -1));
 //         message.info('Undo successful! 🔄');
 //     };
 //     const handleRefresh = () => {
 //         setCards(getInitialCards());
 //         setSwipeHistory([]);
 //         message.success('New profiles loaded! 🔥');
 //     };
 //     const handleSuperLike = () => {
 //         if (!currentCard || !isProfile(currentCard)) return;
 //         message.success(`⭐ Super liked ${currentCard.name}!`);
 //         if (Math.random() > 0.4) {
 //             setMatchedProfile(currentCard);
 //             setTimeout(() => {
 //                 message.success(`🎉 It's a Super Match with ${currentCard.name}!`);
 //             }, 500);
 //         }
 //         handleSwipe('right');
 //     };
 //     const handleBoost = () => {
 //         message.info('🚀 Boost activated! You’ll be a top profile for 30 minutes.');
 //     };
 //     useEffect(() => {
 //         if (cards.length === 0) {
 //             setTimeout(() => handleRefresh(), 3000);
 //         }
 //     }, [cards.length]);
 //     /** ✅ Responsive Layout */
 //     const containerStyle: React.CSSProperties = {
 //         width: '100%',
 //         height: '100vh',
 //         backgroundColor: '#000',
 //         display: 'flex',
 //         justifyContent: 'center',
 //         alignItems: 'center',
 //         overflow: 'hidden',
 //         padding: screens.xs ? '0' : '24px',
 //         // position: 'absolute', top: 0, left: 0, right: 0, bottom: 0
 //     };
 //     const cardAreaStyle: React.CSSProperties = {
 //         position: 'relative',
 //         width: screens.xs ? '100%' : '100%', // full width on mobile, fixed center width on desktop
 //         height: screens.xs ? '100%' : '100vh',
 //         maxHeight: '80%',
 //         backgroundColor: '#fff',
 //         display: 'flex',
 //         flexDirection: 'column',
 //         justifyContent: 'center',
 //         alignItems: 'center',
 //     };
 //     const actionsContainerStyle: React.CSSProperties = {
 //         position: 'absolute',
 //         bottom: '1%',
 //         left: 0,
 //         right: 0,
 //         padding: screens.xs ? '0 16px' : '0 24px',
 //     };
 //     return (
 //         <div style={containerStyle}>
 //             {cards.length === 0 ? (
 //                 <Flex justify="center" align="center" style={{ height: '100%', width: '100%' }}>
 //                     <EmptyState onRefresh={handleRefresh} />
 //                 </Flex>
 //             ) : (
 //                 <div style={cardAreaStyle}>
 //                     <SwipeCardStack
 //                         cards={cards}
 //                         onSwipe={handleSwipe}
 //                         triggerSwipe={triggerSwipe}
 //                         onSwipeComplete={() => setTriggerSwipe(null)}
 //                     />
 //                     <div style={actionsContainerStyle}>
 //                         <ActionButtons
 //                             onUndo={handleUndo}
 //                             onPass={() => setTriggerSwipe('left')}
 //                             onSuperLike={handleSuperLike}
 //                             onLike={() => setTriggerSwipe('right')}
 //                             onBoost={handleBoost}
 //                             canUndo={swipeHistory.length > 0}
 //                             hasCard={!!currentCard}
 //                         />
 //                     </div>
 //                 </div>
 //             )}
 //             {matchedProfile && (
 //                 <MatchModal
 //                     profile={matchedProfile}
 //                     onClose={() => setMatchedProfile(null)}
 //                     onSendMessage={() => {
 //                         setMatchedProfile(null);
 //                         message.success('Opening chat...', 1);
 //                     }}
 //                 />
 //             )}
 //         </div>
 //     );
 // }
 // 'use client';
 // import React, { useState, useEffect } from 'react';
 // import { message, Layout, Flex } from 'antd';
 // import { ActionButtons } from '@/components/swipe/ActionButtons';
 // import { EmptyState } from '@/components/swipe/EmptyState';
 // import { MatchModal } from '@/components/swipe/MatchModal';
 // import { SwipeCardStack } from '@/components/swipe/SwipeCardStack';
 // import { SwipeCardItem, getInitialCards, Profile, isProfile } from '@/data/swipeData';
 // const { Content } = Layout;
 // export default function HomePage() {
 //     const [cards, setCards] = useState<SwipeCardItem[]>(getInitialCards());
 //     const [swipeHistory, setSwipeHistory] = useState<SwipeCardItem[]>([]);
 //     const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
 //     const [triggerSwipe, setTriggerSwipe] = useState<"left" | "right" | null>(null);
 //     const currentCard = cards[cards.length - 1];
 //     const handleSwipe = (direction: "left" | "right") => {
 //         if (!currentCard) return;
 //         console.log(`Swiped ${direction} on:`, isProfile(currentCard) ? currentCard.name : currentCard.brand);
 //         // Add to swipe history for undo functionality
 //         setSwipeHistory(prev => [...prev, currentCard]);
 //         // Handle matches only for profile cards
 //         if (isProfile(currentCard) && direction === "right") {
 //             // Simulate match probability (30% chance)
 //             if (Math.random() > 0.7) {
 //                 setMatchedProfile(currentCard);
 //                 message.success({
 //                     content: `🎉 It's a match with ${currentCard.name}!`,
 //                     duration: 3,
 //                     style: {
 //                         marginTop: '10vh',
 //                     }
 //                 });
 //             } else {
 //                 message.success({
 //                     content: `You liked ${currentCard.name}! 💖`,
 //                     duration: 2,
 //                 });
 //             }
 //         }
 //         // Track ad interactions
 //         if (!isProfile(currentCard)) {
 //             if (direction === "right") {
 //                 console.log(`Ad engagement: User interested in ${currentCard.brand}`);
 //                 message.info({
 //                     content: `Interested in ${currentCard.brand}? Check it out!`,
 //                     duration: 2,
 //                 });
 //             } else {
 //                 console.log(`Ad skipped: ${currentCard.brand}`);
 //             }
 //         }
 //         // Remove the swiped card
 //         setCards(prev => prev.slice(0, -1));
 //     };
 //     const handleUndo = () => {
 //         if (swipeHistory.length === 0) return;
 //         const lastCard = swipeHistory[swipeHistory.length - 1];
 //         setCards(prev => [...prev, lastCard]);
 //         setSwipeHistory(prev => prev.slice(0, -1));
 //         message.info({
 //             content: 'Undo successful! 🔄',
 //             duration: 1,
 //         });
 //     };
 //     const handleRefresh = () => {
 //         setCards(getInitialCards());
 //         setSwipeHistory([]);
 //         message.success({
 //             content: 'New profiles loaded! 🔥',
 //             duration: 2,
 //         });
 //     };
 //     const handleSuperLike = () => {
 //         if (!currentCard || !isProfile(currentCard)) return;
 //         // Simulate super like (higher match probability)
 //         message.success({
 //             content: `⭐ Super liked ${currentCard.name}!`,
 //             duration: 2,
 //         });
 //         if (Math.random() > 0.4) { // 60% match chance for super like
 //             setMatchedProfile(currentCard);
 //             setTimeout(() => {
 //                 message.success({
 //                     content: `🎉 It's a Super Match with ${currentCard.name}!`,
 //                     duration: 4,
 //                 });
 //             }, 500);
 //         }
 //         handleSwipe('right');
 //     };
 //     const handleBoost = () => {
 //         message.info({
 //             content: '🚀 Boost activated! You\'ll be a top profile for 30 minutes.',
 //             duration: 3,
 //         });
 //     };
 //     // Auto-refresh when cards run out
 //     useEffect(() => {
 //         if (cards.length === 0) {
 //             setTimeout(() => {
 //                 handleRefresh();
 //             }, 3000); // 3 second delay for better UX
 //         }
 //     }, [cards.length]);
 //     const containerStyle: React.CSSProperties = {
 //         height: '100vh',
 //         backgroundColor: '#000000',
 //         position: 'relative',
 //         overflow: 'hidden'
 //     };
 //     const mainContentStyle: React.CSSProperties = {
 //         position: 'relative',
 //         height: '100%'
 //     };
 //     const emptyStateContainerStyle: React.CSSProperties = {
 //         height: '100%',
 //         backgroundColor: '#000000'
 //     };
 //     const cardStackContainerStyle: React.CSSProperties = {
 //         position: 'relative',
 //         height: '100%'
 //     };
 //     const actionButtonsContainerStyle: React.CSSProperties = {
 //         position: 'absolute',
 //         bottom: 0,
 //         left: 0,
 //         right: 0,
 //         zIndex: 100
 //     };
 //     return (
 //         <Layout style={containerStyle}>
 //             <Content style={mainContentStyle}>
 //                 {cards.length === 0 ? (
 //                     <Flex
 //                         justify="center"
 //                         align="center"
 //                         style={emptyStateContainerStyle}
 //                     >
 //                         <EmptyState onRefresh={handleRefresh} />
 //                     </Flex>
 //                 ) : (
 //                     <>
 //                         {/* Card Stack - Full Screen */}
 //                         <div style={cardStackContainerStyle}>
 //                             <SwipeCardStack
 //                                 cards={cards}
 //                                 onSwipe={handleSwipe}
 //                                 triggerSwipe={triggerSwipe}
 //                                 onSwipeComplete={() => setTriggerSwipe(null)}
 //                             />
 //                         </div>
 //                         {/* Action Buttons - Bottom Overlay */}
 //                         <div style={actionButtonsContainerStyle}>
 //                             <ActionButtons
 //                                 onUndo={handleUndo}
 //                                 onPass={() => setTriggerSwipe("left")}
 //                                 onSuperLike={handleSuperLike}
 //                                 onLike={() => setTriggerSwipe("right")}
 //                                 onBoost={handleBoost}
 //                                 canUndo={swipeHistory.length > 0}
 //                                 hasCard={!!currentCard}
 //                             />
 //                         </div>
 //                     </>
 //                 )}
 //             </Content>
 //             {/* Match Modal */}
 //             {matchedProfile && (
 //                 <MatchModal
 //                     profile={matchedProfile}
 //                     onClose={() => setMatchedProfile(null)}
 //                     onSendMessage={() => {
 //                         setMatchedProfile(null);
 //                         message.success('Opening chat...', 1);
 //                     }}
 //                 />
 //             )}
 //         </Layout>
 //     );
 // }
_s(HomePage, "wXQZIv+esYvmfxcesHu965GgzQs=", false, function() {
    return [
        useBreakpoint
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0b2e96a2._.js.map