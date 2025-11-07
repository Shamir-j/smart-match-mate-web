module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/providers/theme.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Theme utilities and constants for the One Night Stand dating app
// This file provides easy access to theme colors and common styles throughout the app
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
"[project]/src/app/(authenticated)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(authenticated)/layout.tsx
__turbopack_context__.s([
    "default",
    ()=>AuthenticatedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/providers/theme.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const { Header, Content, Sider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
function AuthenticatedLayout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const screens = useBreakpoint(); // AntD responsive helper
    const isMobile = screens.xs || screens.sm && !screens.md;
    const handleNav = (path)=>router.push(path);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            minHeight: '100vh',
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].background
        },
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopSidebar, {}, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 38,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    marginLeft: isMobile ? 0 : 280,
                    marginBottom: isMobile ? 80 : 0,
                    transition: 'margin 0.3s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileBottomNav, {
                pathname: pathname,
                onNavigate: handleNav
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 52,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/layout.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
} // // src/app/(authenticated)/layout.tsx
 // 'use client';
 // import React, { useState, useEffect } from "react";
 // import { Layout, Avatar, Badge, Space, Typography } from 'antd';
 // import { useRouter, usePathname } from 'next/navigation';
 // import {
 //   UserOutlined,
 //   HeartOutlined,
 //   MessageOutlined,
 //   SettingOutlined,
 //   FireOutlined,
 //   TeamOutlined,
 // } from '@ant-design/icons';
 // import { DATING_THEME } from '../../providers/theme';
 // const { Content } = Layout;
 // const { Text } = Typography;
 // // Mock user data
 // const currentUser = {
 //   id: '1',
 //   name: 'John Doe',
 //   avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
 //   unreadMessages: 3
 // };
 // // Navigation items for Tinder-style layout
 // const navigationItems = [
 //   {
 //     key: '/home',
 //     icon: FireOutlined,
 //     label: 'Discover',
 //     activeColor: DATING_THEME.colors.primary,
 //   },
 //   {
 //     key: '/app',
 //     icon: TeamOutlined,
 //     label: 'Matches',
 //     activeColor: DATING_THEME.colors.primary,
 //     badge: 12, // New matches count
 //   },
 //   {
 //     key: '/chat',
 //     icon: MessageOutlined,
 //     label: 'Messages',
 //     activeColor: DATING_THEME.colors.primary,
 //     badge: currentUser.unreadMessages,
 //   },
 //   {
 //     key: '/profile/edit',
 //     icon: UserOutlined,
 //     label: 'Profile',
 //     activeColor: DATING_THEME.colors.primary,
 //   },
 // ];
 // // Tinder-style Authenticated Layout
 // export default function AuthenticatedLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
 //   const router = useRouter();
 //   const pathname = usePathname();
 //   const [isMobile, setIsMobile] = useState(false);
 //   // Check if mobile on mount and resize
 //   useEffect(() => {
 //     const checkMobile = () => {
 //       setIsMobile(window.innerWidth < 768);
 //     };
 //     checkMobile();
 //     window.addEventListener('resize', checkMobile);
 //     return () => window.removeEventListener('resize', checkMobile);
 //   }, []);
 //   // Handle navigation using Next.js router for client-side routing
 //   const handleNavigation = (key: string) => {
 //     router.push(key);
 //   };
 //   // Desktop Left Panel - Matches List (like Tinder desktop)
 //   const DesktopLeftPanel = () => {
 //     // Mock matches data for the left panel
 //     const matches = [
 //       { id: '1', name: 'Brender', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop', hasGoldBadge: true },
 //       { id: '2', name: 'Tiffany', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop' },
 //       { id: '3', name: 'Matheu', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
 //       { id: '4', name: 'Lindra', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
 //       { id: '5', name: 'Sharon', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop' },
 //       { id: '6', name: 'Mel', avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop' },
 //       { id: '7', name: 'Becky', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop' },
 //       { id: '8', name: 'Rish', avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop' },
 //     ];
 //     return (
 //       <div style={{
 //         width: 280,
 //         height: '100vh',
 //         background: DATING_THEME.colors.cardBackground,
 //         borderRight: `1px solid ${DATING_THEME.colors.borderLight}`,
 //         display: 'flex',
 //         flexDirection: 'column',
 //         position: 'fixed',
 //         left: 0,
 //         top: 0,
 //         zIndex: 1000,
 //       }}>
 //         {/* Header with Tinder-style gradient */}
 //         <div style={{
 //           height: 100,
 //           background: DATING_THEME.gradients.primary,
 //           display: 'flex',
 //           alignItems: 'center',
 //           justifyContent: 'center',
 //           position: 'relative',
 //         }}>
 //           {/* User profile icon */}
 //           <div style={{
 //             position: 'absolute',
 //             left: 20,
 //             top: 20,
 //           }}>
 //             <Avatar
 //               src={currentUser.avatar}
 //               size={32}
 //               style={{
 //                 border: '2px solid white',
 //                 cursor: 'pointer',
 //               }}
 //             />
 //           </div>
 //           {/* Navigation icons like Tinder */}
 //           <Space size={16}>
 //             <div style={{
 //               width: 40,
 //               height: 40,
 //               borderRadius: '50%',
 //               backgroundColor: 'rgba(255,255,255,0.2)',
 //               display: 'flex',
 //               alignItems: 'center',
 //               justifyContent: 'center',
 //               cursor: 'pointer',
 //             }}>
 //               <FireOutlined style={{ color: 'white', fontSize: 20 }} />
 //             </div>
 //             <div style={{
 //               width: 40,
 //               height: 40,
 //               borderRadius: '50%',
 //               backgroundColor: 'rgba(255,255,255,0.2)',
 //               display: 'flex',
 //               alignItems: 'center',
 //               justifyContent: 'center',
 //               cursor: 'pointer',
 //             }}>
 //               <TeamOutlined style={{ color: 'white', fontSize: 20 }} />
 //             </div>
 //             <div style={{
 //               width: 40,
 //               height: 40,
 //               borderRadius: '50%',
 //               backgroundColor: 'rgba(255,255,255,0.2)',
 //               display: 'flex',
 //               alignItems: 'center',
 //               justifyContent: 'center',
 //               cursor: 'pointer',
 //             }}>
 //               <MessageOutlined style={{ color: 'white', fontSize: 20 }} />
 //             </div>
 //           </Space>
 //           {/* Settings icon */}
 //           <div style={{
 //             position: 'absolute',
 //             right: 20,
 //             top: 20,
 //           }}>
 //             <SettingOutlined
 //               style={{
 //                 color: 'white',
 //                 fontSize: 20,
 //                 cursor: 'pointer',
 //               }}
 //             />
 //           </div>
 //         </div>
 //         {/* Tabs */}
 //         <div style={{
 //           display: 'flex',
 //           borderBottom: `1px solid ${DATING_THEME.colors.borderLight}`,
 //         }}>
 //           <div style={{
 //             flex: 1,
 //             padding: '12px 0',
 //             textAlign: 'center',
 //             borderBottom: `3px solid ${DATING_THEME.colors.primary}`,
 //             cursor: 'pointer',
 //           }}>
 //             <Text style={{ color: DATING_THEME.colors.primary, fontWeight: 600 }}>
 //               Matches
 //             </Text>
 //           </div>
 //           <div style={{
 //             flex: 1,
 //             padding: '12px 0',
 //             textAlign: 'center',
 //             borderBottom: '3px solid transparent',
 //             cursor: 'pointer',
 //           }}>
 //             <Text style={{ color: DATING_THEME.colors.textSecondary }}>
 //               Messages
 //             </Text>
 //           </div>
 //         </div>
 //         {/* Matches List */}
 //         <div style={{
 //           flex: 1,
 //           overflowY: 'auto',
 //           padding: '8px',
 //         }}>
 //           <div style={{
 //             display: 'grid',
 //             gridTemplateColumns: 'repeat(3, 1fr)',
 //             gap: '8px',
 //           }}>
 //             {matches.map((match, index) => (
 //               <div
 //                 key={match.id}
 //                 style={{
 //                   position: 'relative',
 //                   cursor: 'pointer',
 //                   borderRadius: 8,
 //                   overflow: 'hidden',
 //                 }}
 //               >
 //                 <div
 //                   style={{
 //                     width: '100%',
 //                     height: 80,
 //                     backgroundImage: `url(${match.avatar})`,
 //                     backgroundSize: 'cover',
 //                     backgroundPosition: 'center',
 //                     borderRadius: 8,
 //                     position: 'relative',
 //                   }}
 //                 >
 //                   {/* Gold badge for first item like in Tinder */}
 //                   {index === 0 && (
 //                     <div style={{
 //                       position: 'absolute',
 //                       top: 4,
 //                       left: 4,
 //                       backgroundColor: '#FFD700',
 //                       color: 'black',
 //                       fontSize: 10,
 //                       fontWeight: 'bold',
 //                       padding: '2px 6px',
 //                       borderRadius: 8,
 //                     }}>
 //                       99+
 //                     </div>
 //                   )}
 //                   {/* Name overlay */}
 //                   <div style={{
 //                     position: 'absolute',
 //                     bottom: 0,
 //                     left: 0,
 //                     right: 0,
 //                     background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
 //                     color: 'white',
 //                     padding: '8px 4px 4px',
 //                     fontSize: 11,
 //                     fontWeight: 500,
 //                   }}>
 //                     {match.name}
 //                   </div>
 //                 </div>
 //               </div>
 //             ))}
 //           </div>
 //         </div>
 //       </div>
 //     );
 //   };
 //   // Mobile Bottom Navigation (like first Tinder image)
 //   const MobileBottomNav = () => (
 //     <div style={{
 //       position: 'fixed',
 //       bottom: 0,
 //       left: 0,
 //       right: 0,
 //       height: 80,
 //       background: DATING_THEME.colors.cardBackground,
 //       borderTop: `1px solid ${DATING_THEME.colors.borderLight}`,
 //       display: 'flex',
 //       alignItems: 'center',
 //       justifyContent: 'space-around',
 //       zIndex: 1000,
 //       paddingBottom: 'env(safe-area-inset-bottom, 0px)', // Handle iPhone notch
 //     }}>
 //       {navigationItems.map((item) => {
 //         const Icon = item.icon;
 //         const isActive = pathname === item.key; return (
 //           <div
 //             key={item.key}
 //             onClick={() => handleNavigation(item.key)}
 //             style={{
 //               display: 'flex',
 //               flexDirection: 'column',
 //               alignItems: 'center',
 //               cursor: 'pointer',
 //               padding: '8px 12px',
 //               borderRadius: 12,
 //               minWidth: 60,
 //               transition: 'all 0.2s ease',
 //             }}
 //           >
 //             <div style={{ position: 'relative', marginBottom: 4 }}>
 //               <Icon
 //                 style={{
 //                   fontSize: 24,
 //                   color: isActive
 //                     ? DATING_THEME.colors.primary
 //                     : DATING_THEME.colors.textSecondary
 //                 }}
 //               />
 //               {item.badge && (
 //                 <Badge
 //                   count={item.badge > 99 ? '99+' : item.badge}
 //                   size="small"
 //                   style={{
 //                     position: 'absolute',
 //                     top: -6,
 //                     right: -6,
 //                     backgroundColor: DATING_THEME.colors.primary,
 //                     fontSize: 10,
 //                   }}
 //                 />
 //               )}
 //             </div>
 //             <Text
 //               style={{
 //                 color: isActive
 //                   ? DATING_THEME.colors.primary
 //                   : DATING_THEME.colors.textSecondary,
 //                 fontSize: 11,
 //                 fontWeight: isActive ? 600 : 400,
 //                 textAlign: 'center',
 //               }}
 //             >
 //               {item.label}
 //             </Text>
 //           </div>
 //         );
 //       })}
 //     </div>
 //   );
 //   return (
 //     <Layout style={{
 //       minHeight: '100vh',
 //       backgroundColor: DATING_THEME.colors.background,
 //     }}>
 //       {/* Desktop Left Panel */}
 //       {!isMobile && <DesktopLeftPanel />}
 //       {/* Main Content */}
 //       <Content style={{
 //         marginLeft: isMobile ? 0 : 280,
 //         marginBottom: isMobile ? 80 : 0,
 //         minHeight: '100vh',
 //         backgroundColor: DATING_THEME.colors.background,
 //       }}>
 //         {children}
 //       </Content>
 //       {/* Mobile Bottom Navigation */}
 //       {isMobile && <MobileBottomNav />}
 //     </Layout>
 //   );
 // }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6e4de234._.js.map