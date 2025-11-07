(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/providers/ClientWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/providers/ClientWrapper.tsx
__turbopack_context__.s([
    "COMMON_STYLES",
    ()=>COMMON_STYLES,
    "THEME_COLORS",
    ()=>THEME_COLORS,
    "default",
    ()=>ClientWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/config-provider/index.js [app-client] (ecmascript) <locals> <export default as ConfigProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-error-boundary/dist/react-error-boundary.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-client] (ecmascript) <export default as HeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FrownOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FrownOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FrownOutlined.js [app-client] (ecmascript) <export default as FrownOutlined>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
// 💖 Dating App Color Palette - Romantic & Modern Theme
const THEME_COLORS = {
    // Primary Dating App Colors
    primary: '#FF3A8A',
    secondary: '#FF6B9D',
    accent: '#C41E3A',
    love: '#E91E63',
    // Status Colors
    success: '#52C41A',
    warning: '#FAAD14',
    danger: '#FF4D4F',
    info: '#1890FF',
    // Layout & Background Colors
    background: '#FAFAFA',
    cardBackground: '#FFFFFF',
    darkBackground: '#000000',
    gradientStart: '#000000',
    gradientEnd: '#FF3A8A',
    // Text Colors
    textPrimary: '#262626',
    textSecondary: '#8C8C8C',
    textLight: '#BFBFBF',
    textWhite: '#FFFFFF',
    // Border & Divider Colors
    borderLight: '#F0F0F0',
    borderDefault: '#D9D9D9',
    borderPink: '#FFE4E1',
    // Interactive Colors
    hoverPink: 'rgba(255, 58, 138, 0.06)',
    activePink: 'rgba(255, 58, 138, 0.12)',
    hoverBlack: 'rgba(0, 0, 0, 0.04)'
};
// 💖 Common Styles - Dating App Specific
const COMMON_STYLES = {
    // Layout Styles
    fullHeight: {
        height: '100vh'
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noOverflow: {
        overflow: 'hidden'
    },
    // Dating App Gradients
    pinkGradient: {
        background: `linear-gradient(135deg, ${THEME_COLORS.primary} 0%, ${THEME_COLORS.secondary} 100%)`
    },
    darkGradient: {
        background: `linear-gradient(to bottom, ${THEME_COLORS.darkBackground}, ${THEME_COLORS.primary}, ${THEME_COLORS.darkBackground})`
    },
    // Scrollbar Styles
    customScrollbar: {
        scrollbarWidth: 'thin',
        scrollbarColor: `${THEME_COLORS.borderLight} ${THEME_COLORS.background}`
    },
    // Shadow Styles
    cardShadow: {
        boxShadow: '0 8px 32px rgba(255, 58, 138, 0.12)'
    },
    softShadow: {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
    },
    // Animation Styles
    smoothTransition: {
        transition: 'all 0.3s ease'
    },
    heartBeat: {
        animation: 'heartbeat 1.5s ease-in-out infinite'
    },
    // Border Radius
    roundedCard: {
        borderRadius: 16
    },
    roundedButton: {
        borderRadius: 25
    }
};
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            retry: 2,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            placeholderData: (prev)=>prev
        }
    }
});
const ErrorFallback = ({ error, resetErrorBoundary })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 48,
            textAlign: "center",
            backgroundColor: THEME_COLORS.cardBackground,
            borderRadius: 16,
            margin: "100px auto",
            maxWidth: 500,
            ...COMMON_STYLES.cardShadow,
            border: `1px solid ${THEME_COLORS.borderPink}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FrownOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FrownOutlined$3e$__["FrownOutlined"], {
                style: {
                    fontSize: 64,
                    color: THEME_COLORS.danger
                }
            }, void 0, false, {
                fileName: "[project]/src/providers/ClientWrapper.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                level: 4,
                style: {
                    color: THEME_COLORS.textPrimary,
                    marginTop: 16
                },
                children: "Oops! Something went wrong"
            }, void 0, false, {
                fileName: "[project]/src/providers/ClientWrapper.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                style: {
                    color: THEME_COLORS.textSecondary
                },
                children: "Don't worry, it's not you - it's us! Let's try again."
            }, void 0, false, {
                fileName: "[project]/src/providers/ClientWrapper.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 24
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "primary",
                    size: "large",
                    onClick: resetErrorBoundary,
                    style: {
                        backgroundColor: THEME_COLORS.primary,
                        borderColor: THEME_COLORS.primary,
                        borderRadius: 25,
                        padding: '0 30px',
                        height: 44
                    },
                    children: "Try Again"
                }, void 0, false, {
                    fileName: "[project]/src/providers/ClientWrapper.tsx",
                    lineNumber: 151,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/providers/ClientWrapper.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/providers/ClientWrapper.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = ErrorFallback;
// Global theme initialization flag to prevent re-initialization on navigation
let globalThemeInitialized = false;
function ClientWrapper({ children }) {
    _s();
    const [themeReady, setThemeReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(globalThemeInitialized);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientWrapper.useEffect": ()=>{
            // Only initialize once globally
            if (!globalThemeInitialized) {
                // Add heartbeat animation keyframes to document
                const style = document.createElement('style');
                style.id = 'dating-app-animations';
                style.textContent = `
                @keyframes heartbeat {
                    0% { transform: scale(1); }
                    14% { transform: scale(1.1); }
                    28% { transform: scale(1); }
                    42% { transform: scale(1.1); }
                    70% { transform: scale(1); }
                }
            `;
                // Only add if not already present
                if (!document.getElementById('dating-app-animations')) {
                    document.head.appendChild(style);
                }
                globalThemeInitialized = true;
                setThemeReady(true);
            } else {
                // Already initialized, just set ready immediately
                setThemeReady(true);
            }
        }
    }["ClientWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__["ConfigProvider"], {
            theme: {
                token: {
                    // Dating App Primary Colors
                    colorPrimary: THEME_COLORS.primary,
                    colorSuccess: THEME_COLORS.success,
                    colorWarning: THEME_COLORS.warning,
                    colorError: THEME_COLORS.danger,
                    colorInfo: THEME_COLORS.info,
                    // Background Colors
                    colorBgBase: THEME_COLORS.background,
                    colorBgContainer: THEME_COLORS.cardBackground,
                    colorBgElevated: THEME_COLORS.cardBackground,
                    // Text Colors
                    colorTextBase: THEME_COLORS.textPrimary,
                    colorTextSecondary: THEME_COLORS.textSecondary,
                    colorTextTertiary: THEME_COLORS.textLight,
                    colorTextQuaternary: THEME_COLORS.textLight,
                    // Border Colors
                    colorBorder: THEME_COLORS.borderDefault,
                    colorBorderSecondary: THEME_COLORS.borderLight,
                    // Border Radius - More rounded for modern dating app feel
                    borderRadius: 12,
                    borderRadiusLG: 16,
                    borderRadiusSM: 8,
                    // Font Family - Modern and clean
                    fontFamily: 'Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: 14,
                    fontSizeLG: 16,
                    fontSizeXL: 20,
                    // Layout spacing
                    paddingLG: 24,
                    paddingMD: 16,
                    paddingSM: 12,
                    marginLG: 24,
                    marginMD: 16,
                    // Component specific
                    controlHeight: 44,
                    controlHeightLG: 48,
                    controlHeightSM: 36
                },
                components: {
                    Layout: {
                        headerBg: THEME_COLORS.cardBackground,
                        siderBg: THEME_COLORS.cardBackground,
                        bodyBg: THEME_COLORS.background,
                        headerHeight: 70,
                        triggerBg: THEME_COLORS.primary
                    },
                    Menu: {
                        colorBgContainer: THEME_COLORS.cardBackground,
                        itemSelectedColor: THEME_COLORS.primary,
                        itemSelectedBg: THEME_COLORS.activePink,
                        itemHoverBg: THEME_COLORS.hoverPink,
                        colorText: THEME_COLORS.textPrimary,
                        colorTextSecondary: THEME_COLORS.textSecondary,
                        iconSize: 18,
                        itemHeight: 48,
                        collapsedIconSize: 20
                    },
                    Card: {
                        colorBgContainer: THEME_COLORS.cardBackground,
                        colorBorderSecondary: THEME_COLORS.borderLight,
                        borderRadiusLG: 16,
                        paddingLG: 24,
                        boxShadowTertiary: '0 8px 32px rgba(255, 58, 138, 0.08)'
                    },
                    Button: {
                        // Primary button (pink theme)
                        colorPrimary: THEME_COLORS.primary,
                        colorPrimaryHover: THEME_COLORS.secondary,
                        colorPrimaryActive: THEME_COLORS.accent,
                        // Error/danger button
                        colorError: THEME_COLORS.danger,
                        colorErrorHover: "#ff7875",
                        colorErrorActive: "#d9363e",
                        // Border radius for modern look
                        borderRadius: 12,
                        borderRadiusLG: 16,
                        borderRadiusSM: 8,
                        // Heights
                        controlHeight: 44,
                        controlHeightLG: 48,
                        controlHeightSM: 36,
                        // Font weight
                        fontWeight: 500
                    },
                    Table: {
                        headerBg: THEME_COLORS.cardBackground,
                        headerColor: THEME_COLORS.textPrimary,
                        rowHoverBg: THEME_COLORS.hoverPink,
                        borderColor: THEME_COLORS.borderLight,
                        colorBgContainer: THEME_COLORS.cardBackground,
                        cellPaddingBlock: 12,
                        cellPaddingInline: 16,
                        borderRadiusLG: 12
                    },
                    Input: {
                        colorBgContainer: THEME_COLORS.cardBackground,
                        colorBorder: THEME_COLORS.borderDefault,
                        colorTextPlaceholder: THEME_COLORS.textLight,
                        activeBorderColor: THEME_COLORS.primary,
                        hoverBorderColor: THEME_COLORS.primary,
                        borderRadius: 12,
                        controlHeight: 44,
                        paddingInline: 16
                    },
                    Typography: {
                        colorTextHeading: THEME_COLORS.textPrimary,
                        colorText: THEME_COLORS.textPrimary,
                        colorTextSecondary: THEME_COLORS.textSecondary,
                        colorTextDisabled: THEME_COLORS.textLight,
                        fontFamily: 'Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                    },
                    Tabs: {
                        inkBarColor: THEME_COLORS.primary,
                        colorBorder: THEME_COLORS.borderLight,
                        itemSelectedColor: THEME_COLORS.primary,
                        itemHoverColor: THEME_COLORS.primary,
                        itemColor: THEME_COLORS.textSecondary,
                        cardBg: THEME_COLORS.cardBackground,
                        borderRadiusLG: 12
                    },
                    Tag: {
                        defaultBg: THEME_COLORS.borderPink,
                        defaultColor: THEME_COLORS.primary,
                        colorBorder: THEME_COLORS.borderPink,
                        borderRadiusSM: 12
                    },
                    Progress: {
                        defaultColor: THEME_COLORS.primary,
                        remainingColor: THEME_COLORS.borderLight
                    },
                    Modal: {
                        contentBg: THEME_COLORS.cardBackground,
                        headerBg: THEME_COLORS.cardBackground,
                        titleColor: THEME_COLORS.textPrimary,
                        colorBgElevated: THEME_COLORS.cardBackground,
                        colorText: THEME_COLORS.textPrimary,
                        colorTextSecondary: THEME_COLORS.textSecondary,
                        borderRadiusLG: 16,
                        paddingContentHorizontalLG: 24,
                        paddingLG: 24
                    },
                    Drawer: {
                        colorBgElevated: THEME_COLORS.cardBackground,
                        colorText: THEME_COLORS.textPrimary,
                        borderRadiusLG: 16
                    },
                    Select: {
                        colorBgElevated: THEME_COLORS.cardBackground,
                        colorBorder: THEME_COLORS.borderLight,
                        boxShadowSecondary: '0 6px 16px 0 rgba(255, 58, 138, 0.08), 0 3px 6px -4px rgba(255, 58, 138, 0.12), 0 9px 28px 8px rgba(255, 58, 138, 0.05)',
                        borderRadiusLG: 12,
                        controlHeight: 44
                    },
                    Badge: {
                        colorError: THEME_COLORS.primary,
                        colorErrorHover: THEME_COLORS.secondary
                    },
                    Avatar: {
                        borderRadius: 50
                    },
                    Switch: {
                        colorPrimary: THEME_COLORS.primary,
                        colorPrimaryHover: THEME_COLORS.secondary
                    },
                    Slider: {
                        colorPrimary: THEME_COLORS.primary,
                        colorPrimaryBorder: THEME_COLORS.primary
                    }
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                FallbackComponent: ErrorFallback,
                children: themeReady ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        background: COMMON_STYLES.darkGradient.background,
                        gap: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                            style: {
                                fontSize: 48,
                                color: THEME_COLORS.primary,
                                ...COMMON_STYLES.heartBeat
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/providers/ClientWrapper.tsx",
                            lineNumber: 404,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                            size: "large",
                            tip: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                style: {
                                    color: THEME_COLORS.textWhite,
                                    fontSize: 16,
                                    fontWeight: 500,
                                    marginTop: 16
                                },
                                children: "Initializing One Night Stand..."
                            }, void 0, false, {
                                fileName: "[project]/src/providers/ClientWrapper.tsx",
                                lineNumber: 414,
                                columnNumber: 37
                            }, void 0),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    minHeight: "60px",
                                    minWidth: "60px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/providers/ClientWrapper.tsx",
                                lineNumber: 424,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/providers/ClientWrapper.tsx",
                            lineNumber: 411,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/providers/ClientWrapper.tsx",
                    lineNumber: 395,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/providers/ClientWrapper.tsx",
                lineNumber: 391,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/providers/ClientWrapper.tsx",
            lineNumber: 206,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/providers/ClientWrapper.tsx",
        lineNumber: 205,
        columnNumber: 9
    }, this);
}
_s(ClientWrapper, "qWDnmWiB0LOGjKG03C/384Ezoe8=");
_c1 = ClientWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "ErrorFallback");
__turbopack_context__.k.register(_c1, "ClientWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_providers_ClientWrapper_tsx_7454a36d._.js.map