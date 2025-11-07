(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/swipe/ActionButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButtons",
    ()=>ActionButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
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
        paddingBottom: 32,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)'
    };
    const buttonGroupStyle = {
        maxWidth: 384,
        margin: '0 auto'
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
            justify: "center",
            align: "center",
            style: buttonGroupStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                size: "large",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        style: {
                            ...smallButtonStyle,
                            backgroundColor: '#ffffff',
                            opacity: canUndo ? 1 : 0.5,
                            cursor: canUndo ? 'pointer' : 'not-allowed'
                        },
                        onClick: onUndo,
                        disabled: !canUndo,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__["UndoOutlined"], {
                            style: {
                                color: '#666666',
                                fontSize: 18
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                            lineNumber: 83,
                            columnNumber: 19
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 74,
                        columnNumber: 11
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
                                fontSize: 24,
                                fontWeight: 'bold'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                            lineNumber: 93,
                            columnNumber: 19
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 87,
                        columnNumber: 11
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
                                fontSize: 18
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                            lineNumber: 103,
                            columnNumber: 19
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        style: {
                            ...largeButtonStyle,
                            backgroundColor: '#52c41a'
                        },
                        onClick: onLike,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                            style: {
                                color: '#ffffff',
                                fontSize: 24
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                            lineNumber: 113,
                            columnNumber: 19
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 107,
                        columnNumber: 11
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
                                fontSize: 18
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                            lineNumber: 123,
                            columnNumber: 19
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/swipe/ActionButtons.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/swipe/ActionButtons.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/ActionButtons.tsx",
        lineNumber: 70,
        columnNumber: 5
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
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
function HomePage() {
    _s();
    const screens = useBreakpoint();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialCards"])());
    const [swipeHistory, setSwipeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchedProfile, setMatchedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triggerSwipe, setTriggerSwipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const currentCard = cards[cards.length - 1];
    const handleSwipe = (direction)=>{
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
    const handleUndo = ()=>{
        if (swipeHistory.length === 0) return;
        const lastCard = swipeHistory[swipeHistory.length - 1];
        setCards((prev)=>[
                ...prev,
                lastCard
            ]);
        setSwipeHistory((prev)=>prev.slice(0, -1));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('Undo successful! 🔄');
    };
    const handleRefresh = ()=>{
        setCards((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialCards"])());
        setSwipeHistory([]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('New profiles loaded! 🔥');
    };
    const handleSuperLike = ()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (cards.length === 0) {
                setTimeout({
                    "HomePage.useEffect": ()=>handleRefresh()
                }["HomePage.useEffect"], 3000);
            }
        }
    }["HomePage.useEffect"], [
        cards.length
    ]);
    /** ✅ Responsive Layout */ const containerStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: screens.xs ? '0' : '24px'
    };
    const cardAreaStyle = {
        position: 'relative',
        width: screens.xs ? '100%' : '100%',
        height: screens.xs ? '100%' : '100vh',
        maxHeight: '720px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 16,
        alignItems: 'center'
    };
    const actionsContainerStyle = {
        position: 'absolute',
        bottom: '1%',
        left: 0,
        right: 0,
        padding: screens.xs ? '0 16px' : '0 24px'
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
                    lineNumber: 118,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                lineNumber: 117,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: cardAreaStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 130,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                    lineNumber: 129,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/home/page.tsx",
                lineNumber: 121,
                columnNumber: 17
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
                lineNumber: 144,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
} // 'use client';
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

//# sourceMappingURL=src_12cf14a5._.js.map