module.exports = [
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
"[project]/src/components/MobileBottomNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(authenticated)/layout.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/badge/index.js [app-ssr] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FireOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-ssr] (ecmascript) <export default as FireOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-ssr] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-ssr] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-ssr] (ecmascript) <export default as UserOutlined>");
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
const currentUser = {
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
const MobileBottomNav = ({ pathname, onNavigate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].cardBackground,
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].borderLight}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            zIndex: 1000,
            paddingBottom: 'env(safe-area-inset-bottom)'
        },
        children: navItems.map((item)=>{
            const Icon = item.icon;
            const active = pathname === item.key;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>onNavigate(item.key),
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].flexCenter,
                    flexDirection: 'column',
                    minWidth: 60,
                    padding: '8px 12px',
                    borderRadius: 12,
                    cursor: 'pointer',
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMMON_STYLES"].smoothTransition
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                style: {
                                    fontSize: 24,
                                    color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileBottomNav.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            'badge' in item && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                count: item.badge > 99 ? '99+' : item.badge,
                                size: "small",
                                style: {
                                    position: 'absolute',
                                    top: -6,
                                    right: -6,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
                                    fontSize: 10
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileBottomNav.tsx",
                                lineNumber: 67,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MobileBottomNav.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        style: {
                            marginTop: 4,
                            fontSize: 11,
                            fontWeight: active ? 600 : 400,
                            color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileBottomNav.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, item.key, true, {
                fileName: "[project]/src/components/MobileBottomNav.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/MobileBottomNav.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
MobileBottomNav.displayName = 'MobileBottomNav';
const __TURBOPACK__default__export__ = MobileBottomNav;
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileBottomNav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNav = (path)=>router.push(path);
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
                lineNumber: 91,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    marginLeft: isMobile ? 0 : collapsed ? 80 : 350,
                    transition: 'margin-left 0.2s cubic-bezier(0.2, 0, 0, )',
                    minHeight: '100vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
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
                        lineNumber: 102,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: '#fff',
                            borderTop: '1px solid #eaeaea',
                            zIndex: 100
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            pathname: pathname,
                            onNavigate: handleNav
                        }, void 0, false, {
                            fileName: "[project]/src/components/DashboardLayout.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DashboardLayout.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DashboardLayout.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DashboardLayout.tsx",
        lineNumber: 66,
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
"[project]/src/app/(authenticated)/test-swipe/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/card/index.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-ssr] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/empty/index.js [app-ssr] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/index.js [app-ssr] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tooltip/index.js [app-ssr] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-ssr] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-ssr] (ecmascript) <export default as HeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-ssr] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SyncOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SyncOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SyncOutlined.js [app-ssr] (ecmascript) <export default as SyncOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-ssr] (ecmascript) <export default as StarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvironmentOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/EnvironmentOutlined.js [app-ssr] (ecmascript) <export default as EnvironmentOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-ssr] (ecmascript) <export default as CheckCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardLayout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// Mock Context (replace with real context/zustand)
const useLocation = ()=>{
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchUsersData = async ()=>{
        setLoading(true);
        // Enhanced mock data with 10 diverse profiles
        setTimeout(()=>{
            setProfiles([
                {
                    id: 'ad_1',
                    type: 'ad',
                    user_account_information: {
                        user_account_first_name: 'Sponsored'
                    },
                    nativeAd: {
                        headline: 'Try Premium Dating!',
                        body: 'Unlock unlimited likes, see who viewed your profile, and get priority matches with Premium subscription.'
                    }
                },
                {
                    id: '1',
                    user_account_information: {
                        user_account_first_name: 'Alexandra',
                        user_account_last_name: 'Johnson',
                        user_account_age: 28,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
                        user_account_bio: 'Adventure seeker and coffee enthusiast ☕️',
                        user_account_occupation: 'Software Engineer',
                        user_account_verified: true
                    },
                    location: {
                        distance: 2,
                        city: 'San Francisco'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: '2',
                    user_account_information: {
                        user_account_first_name: 'Marcus',
                        user_account_last_name: 'Chen',
                        user_account_age: 31,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
                        user_account_bio: 'Photographer capturing life\'s moments 📸',
                        user_account_occupation: 'Creative Director',
                        user_account_verified: false
                    },
                    location: {
                        distance: 5,
                        city: 'Oakland'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: '3',
                    user_account_information: {
                        user_account_first_name: 'Emma',
                        user_account_last_name: 'Rodriguez',
                        user_account_age: 26,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
                        user_account_bio: 'Yoga instructor and nature lover 🧘‍♀️',
                        user_account_occupation: 'Wellness Coach',
                        user_account_verified: true
                    },
                    location: {
                        distance: 3,
                        city: 'Berkeley'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: '4',
                    user_account_information: {
                        user_account_first_name: 'James',
                        user_account_last_name: 'Wilson',
                        user_account_age: 29,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop',
                        user_account_bio: 'Chef by day, musician by night 🎵',
                        user_account_occupation: 'Executive Chef',
                        user_account_verified: false
                    },
                    location: {
                        distance: 7,
                        city: 'Palo Alto'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: '5',
                    user_account_information: {
                        user_account_first_name: 'Sophia',
                        user_account_last_name: 'Kim',
                        user_account_age: 27,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=600&fit=crop',
                        user_account_bio: 'Travel blogger exploring the world 🌍',
                        user_account_occupation: 'Content Creator',
                        user_account_verified: true
                    },
                    location: {
                        distance: 4,
                        city: 'San Jose'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: '6',
                    user_account_information: {
                        user_account_first_name: 'David',
                        user_account_last_name: 'Anderson',
                        user_account_age: 32,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
                        user_account_bio: 'Fitness enthusiast and entrepreneur 💪',
                        user_account_occupation: 'Gym Owner',
                        user_account_verified: false
                    },
                    location: {
                        distance: 6,
                        city: 'Mountain View'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: 'ad_2',
                    type: 'ad',
                    user_account_information: {
                        user_account_first_name: 'Sponsored'
                    },
                    nativeAd: {
                        headline: 'Try Premium Dating!',
                        body: 'Unlock unlimited likes, see who viewed your profile, and get priority matches with Premium subscription.'
                    }
                },
                {
                    id: '7',
                    user_account_information: {
                        user_account_first_name: 'Isabella',
                        user_account_last_name: 'Garcia',
                        user_account_age: 25,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
                        user_account_bio: 'Artist and coffee addict ☕️🎨',
                        user_account_occupation: 'Graphic Designer',
                        user_account_verified: true
                    },
                    location: {
                        distance: 3,
                        city: 'Fremont'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: '8',
                    user_account_information: {
                        user_account_first_name: 'Michael',
                        user_account_last_name: 'Thompson',
                        user_account_age: 30,
                        user_account_profile_picture_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
                        user_account_bio: 'Tech lead who loves hiking 🏔️',
                        user_account_occupation: 'Senior Developer',
                        user_account_verified: true
                    },
                    location: {
                        distance: 8,
                        city: 'Sunnyvale'
                    },
                    images: [
                        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop'
                    ]
                },
                {
                    id: 'ad_3',
                    type: 'ad',
                    user_account_information: {
                        user_account_first_name: 'Sponsored'
                    },
                    nativeAd: {
                        headline: 'Learn to Code Today!',
                        body: 'Master programming with our interactive courses. Join thousands of successful developers.'
                    }
                }
            ]);
            setLoading(false);
        }, 1000);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchUsersData();
    }, []);
    return {
        userAccountNearByProfilesInformation: profiles,
        setUserAccountNearByProfilesInformation: setProfiles,
        isLoadingNearbyProfile: loading,
        userLocation: {
            lat: 37.7,
            lng: -122.4
        },
        fetchUsersData
    };
};
const useUserProfile = ()=>{
    return {
        userAccountInformation: {
            user_account_profile_picture_url: 'https://i.pravatar.cc/300?u=self'
        }
    };
};
// Enhanced Constants
const AD_FREQUENCY = 8;
const SWIPE_THRESHOLD = 100;
const SWIPE_VELOCITY_THRESHOLD = 500;
const SWIPE_OUT_DISTANCE = 500;
const ROTATION_FACTOR = 0.08;
const MAX_ROTATION = 15;
const CARD_WIDTH = 350;
const CARD_HEIGHT = 750;
const STACK_OFFSET = 8;
const SCALE_FACTOR = 0.03;
const { width } = {
    width: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 400
};
const circleDiameter = Math.min(width * 0.9, 500);
// Animation variants
const cardVariants = {
    enter: (index)=>({
            scale: 1 - index * SCALE_FACTOR,
            y: index * STACK_OFFSET,
            rotateY: index * -2,
            opacity: 1,
            zIndex: 10 - index,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }),
    exit: (direction)=>({
            x: direction > 0 ? SWIPE_OUT_DISTANCE : -SWIPE_OUT_DISTANCE,
            rotateZ: direction > 0 ? 30 : -30,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.4,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            }
        })
};
// Mock Ads
const preloadNativeAds = async ()=>{
    return [
        {
            headline: 'Try Premium!',
            body: 'Unlock unlimited swipes'
        }
    ];
};
const getNextNativeAd = ()=>{
    return {
        headline: 'Ad: Learn React',
        body: 'Best course ever!'
    };
};
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
// Swipe Component
const SwipePage = ()=>{
    const screens = useBreakpoint();
    const theme = {
        colors: {
            background_color: '#000',
            text_color_black: '#000',
            primaryColor: '#ff4d4f'
        }
    };
    const { userAccountInformation } = useUserProfile();
    const { userAccountNearByProfilesInformation, setUserAccountNearByProfilesInformation, isLoadingNearbyProfile, fetchUsersData } = useLocation();
    const [swipeCount, setSwipeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [adQueue, setAdQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const swipeX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const swipeY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(swipeX, [
        -200,
        0,
        200
    ], [
        -30,
        0,
        30
    ]);
    const opacityLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(swipeX, [
        -SWIPE_THRESHOLD,
        0
    ], [
        1,
        0
    ]);
    const opacityRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(swipeX, [
        0,
        SWIPE_THRESHOLD
    ], [
        0,
        1
    ]);
    const topUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Preload ads
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initAds = async ()=>{
            const ads = await preloadNativeAds();
            setAdQueue(ads);
        };
        initAds();
    }, []);
    // Refill ads
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (adQueue.length < 2) {
            preloadNativeAds().then(setAdQueue);
        }
    }, [
        adQueue.length
    ]);
    // Auto-refresh
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userAccountNearByProfilesInformation.length === 0 && !isLoadingNearbyProfile && fetchUsersData) {
            const timer = setTimeout(()=>fetchUsersData(), 1000);
            return ()=>clearTimeout(timer);
        }
    }, [
        userAccountNearByProfilesInformation.length,
        isLoadingNearbyProfile,
        fetchUsersData
    ]);
    // Update top card
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        topUserId.current = userAccountNearByProfilesInformation[0]?.id || null;
    }, [
        userAccountNearByProfilesInformation
    ]);
    // Ad injection
    const handleAdInjection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((count)=>{
        if (count % AD_FREQUENCY === 0) {
            const ad = getNextNativeAd();
            if ("TURBOPACK compile-time truthy", 1) {
                const adProfile = {
                    id: `ad_${Date.now()}`,
                    type: 'ad',
                    user_account_information: {
                        user_account_first_name: 'Sponsored'
                    },
                    nativeAd: ad
                };
                setUserAccountNearByProfilesInformation((prev)=>[
                        adProfile,
                        ...prev
                    ]);
            }
        }
    }, [
        setUserAccountNearByProfilesInformation
    ]);
    // Swipe API
    const createUserSwipeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, direction)=>{
        console.log('Swipe:', id, direction);
    // await api.call(...)
    }, []);
    // Remove top card
    const removeTopCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUserAccountNearByProfilesInformation((prev)=>{
            if (prev.length === 0) return [];
            const [, ...rest] = prev;
            setSwipeCount((c)=>{
                const next = c + 1;
                handleAdInjection(next);
                return next;
            });
            return rest;
        });
        setTimeout(()=>{
            swipeX.set(0);
            swipeY.set(0);
        }, 100);
    }, [
        swipeX,
        swipeY,
        handleAdInjection,
        setUserAccountNearByProfilesInformation
    ]);
    // Handle swipe completion
    const processSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        const top = userAccountNearByProfilesInformation[0];
        if (top && top.type !== 'ad') {
            createUserSwipeInfo(top.id, direction);
        }
        removeTopCard();
    }, [
        userAccountNearByProfilesInformation,
        createUserSwipeInfo,
        removeTopCard
    ]);
    // Polling for swipe completion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            if (pendingSwipe.current && !isDragging.current) {
                processSwipe(pendingSwipe.current);
                pendingSwipe.current = null;
            }
        }, 16);
        return ()=>clearInterval(interval);
    }, [
        processSwipe
    ]);
    // Enhanced drag handlers with better gesture detection
    const onDragEnd = (event, info)=>{
        isDragging.current = false;
        const x = swipeX.get();
        const y = swipeY.get();
        const { velocity } = info;
        // Enhanced swipe detection with velocity and distance
        const swipeVelocity = Math.abs(velocity.x);
        const swipeDistance = Math.abs(x);
        const verticalDistance = Math.abs(y);
        // Super like detection (swipe up)
        if (verticalDistance > 150 && y < -100 && Math.abs(velocity.y) > 300) {
            handleSuperLike();
            return;
        }
        // Regular swipe detection
        if (swipeVelocity > SWIPE_VELOCITY_THRESHOLD || swipeDistance > SWIPE_THRESHOLD) {
            const direction = x > 0 ? 'right' : 'left';
            pendingSwipe.current = direction;
            // Add haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(30);
            }
            swipeX.set(x > 0 ? SWIPE_OUT_DISTANCE : -SWIPE_OUT_DISTANCE);
            setTimeout(()=>{
                if (pendingSwipe.current === direction) {
                    processSwipe(direction);
                    pendingSwipe.current = null;
                }
            }, 300);
        } else {
            // Spring back to center with animation
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(swipeX, 0, {
                type: "spring",
                stiffness: 300,
                damping: 30
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(swipeY, 0, {
                type: "spring",
                stiffness: 300,
                damping: 30
            });
        }
    };
    const handleSuperLike = ()=>{
        if (userAccountNearByProfilesInformation.length === 0) return;
        const top = userAccountNearByProfilesInformation[0];
        if (top && top.type !== 'ad') {
            // Enhanced haptic feedback for super like
            if (navigator.vibrate) {
                navigator.vibrate([
                    50,
                    50,
                    50
                ]);
            }
            // Super like animation
            swipeY.set(-SWIPE_OUT_DISTANCE);
            setTimeout(()=>{
                removeTopCard();
                // Show super like notification
                console.log('Super liked!', top.user_account_information.user_account_first_name);
            }, 300);
        }
    };
    const handleChoice = (direction)=>{
        if (userAccountNearByProfilesInformation.length === 0) return;
        const top = userAccountNearByProfilesInformation[0];
        if (top && top.type !== 'ad') {
            createUserSwipeInfo(top.id, direction);
        }
        swipeX.set(direction === 'right' ? SWIPE_OUT_DISTANCE : -SWIPE_OUT_DISTANCE);
        setTimeout(()=>{
            removeTopCard();
        }, 300);
    };
    // Visible profiles
    const visibleProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>userAccountNearByProfilesInformation.slice(0, 3), [
        userAccountNearByProfilesInformation
    ]);
    const hasProfiles = visibleProfiles.length > 0;
    // Card Component
    const ProfileCard = ({ profile, index })=>{
        const isTop = index === 0;
        const zIndex = visibleProfiles.length - index;
        if (profile.type === 'ad') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    position: 'absolute',
                    width: '19%',
                    height: '79%',
                    top: '13%',
                    zIndex,
                    x: isTop ? swipeX : 0,
                    y: isTop ? swipeY : 0,
                    rotate: isTop ? rotate : 0
                },
                drag: isTop,
                dragConstraints: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                dragElastic: 0.1,
                onDragStart: ()=>isDragging.current = true,
                onDragEnd: onDragEnd,
                initial: {
                    scale: 1 - index * 0.05,
                    y: index * 10
                },
                animate: {
                    scale: 1 - index * 0.05,
                    y: index * 10
                },
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                },
                whileDrag: isTop ? {
                    cursor: 'grabbing',
                    scale: 1.02,
                    transition: {
                        duration: 0
                    }
                } : {},
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                    hoverable: true,
                    style: {
                        borderRadius: 16,
                        overflow: 'hidden',
                        boxShadow: `0 ${8 + index * 2}px ${20 + index * 5}px rgba(0, 0, 0, ${0.15 - index * 0.03})`,
                        height: CARD_HEIGHT,
                        width: '100%',
                        display: 'flex',
                        cursor: isTop ? 'grab' : 'default',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    },
                    styles: {
                        body: {
                            padding: 0,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            position: 'relative'
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                background: 'rgba(255, 255, 255, 0.9)',
                                color: '#667eea',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            },
                            children: "Sponsored"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 581,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: 40,
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Title, {
                                    level: 2,
                                    style: {
                                        margin: '0 0 16px 0',
                                        color: 'white'
                                    },
                                    children: profile.nativeAd?.headline
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Paragraph, {
                                    style: {
                                        margin: '0 0 24px 0',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '16px'
                                    },
                                    children: profile.nativeAd?.body
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "primary",
                                    size: "large",
                                    style: {
                                        background: 'white',
                                        borderColor: 'white',
                                        color: '#667eea',
                                        fontWeight: 'bold',
                                        height: '48px',
                                        padding: '0 32px'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'white';
                                    },
                                    children: "Learn More"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 606,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 595,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        isTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        position: 'absolute',
                                        top: '50%',
                                        left: 20,
                                        transform: 'translateY(-50%) rotate(-25deg)',
                                        background: 'rgba(255, 71, 87, 0.95)',
                                        color: 'white',
                                        padding: '12px 20px',
                                        borderRadius: '25px',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        opacity: opacityLeft,
                                        border: '3px solid #ff4757',
                                        boxShadow: '0 4px 15px rgba(255, 71, 87, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "❌"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " SKIP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 631,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        position: 'absolute',
                                        top: '50%',
                                        right: 20,
                                        transform: 'translateY(-50%) rotate(25deg)',
                                        background: 'rgba(76, 175, 80, 0.95)',
                                        color: 'white',
                                        padding: '12px 20px',
                                        borderRadius: '25px',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        opacity: opacityRight,
                                        border: '3px solid #4CAF50',
                                        boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "👆"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " VIEW"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 653,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                    lineNumber: 555,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                lineNumber: 530,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                position: 'absolute',
                backdropFilter: 'blur(10px)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                width: '20%',
                height: '80%',
                zIndex,
                x: isTop ? swipeX : 0,
                y: isTop ? swipeY : 0,
                rotate: isTop ? rotate : 0
            },
            drag: isTop ? 'x' : false,
            dragConstraints: {
                left: 0,
                right: 0
            },
            onDragStart: ()=>isDragging.current = true,
            onDragEnd: onDragEnd,
            initial: {
                scale: 1 - index * 0.05,
                y: index * 10
            },
            animate: {
                scale: 1 - index * 0.05,
                y: index * 10
            },
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                hoverable: true,
                style: {
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    cursor: isTop ? 'grab' : 'default'
                },
                styles: {
                    body: {
                        padding: 0,
                        height: '100%'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: profile.user_account_information.user_account_profile_picture_url || '/placeholder.png',
                                    alt: profile.user_account_information.user_account_first_name,
                                    width: 400,
                                    height: 600,
                                    draggable: true,
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 715,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                profile.user_account_information.user_account_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        background: 'rgba(33, 150, 243, 0.9)',
                                        borderRadius: '50%',
                                        padding: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__["CheckCircleFilled"], {
                                        style: {
                                            color: 'white',
                                            fontSize: '16px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                profile.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                        background: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '12px',
                                        fontSize: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EnvironmentOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvironmentOutlined$3e$__["EnvironmentOutlined"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 761,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        profile.location.distance,
                                        " km away"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 748,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 714,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Title, {
                                            level: 4,
                                            style: {
                                                margin: 0,
                                                fontSize: '20px'
                                            },
                                            children: [
                                                profile.user_account_information.user_account_first_name,
                                                profile.user_account_information.user_account_last_name && ` ${profile.user_account_information.user_account_last_name}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        profile.user_account_information.user_account_age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Text, {
                                            type: "secondary",
                                            style: {
                                                fontSize: '18px'
                                            },
                                            children: profile.user_account_information.user_account_age
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 776,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 769,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                profile.user_account_information.user_account_occupation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Text, {
                                    type: "secondary",
                                    style: {
                                        fontSize: '14px',
                                        display: 'block',
                                        marginBottom: '8px'
                                    },
                                    children: profile.user_account_information.user_account_occupation
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 783,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                profile.user_account_information.user_account_bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Paragraph, {
                                    style: {
                                        margin: 0,
                                        fontSize: '14px',
                                        color: '#666'
                                    },
                                    children: profile.user_account_information.user_account_bio
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 789,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 768,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        isTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        position: 'absolute',
                                        top: '20%',
                                        left: 60,
                                        transform: 'translateY(-50%) rotate(-25deg)',
                                        background: 'rgba(255, 71, 87, 0.95)',
                                        color: 'white',
                                        padding: '12px 20px',
                                        borderRadius: '25px',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        opacity: opacityLeft,
                                        border: '3px solid #ff4757',
                                        boxShadow: '0 4px 15px rgba(255, 71, 87, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "👎"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " NOPE"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 798,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        position: 'absolute',
                                        top: '20%',
                                        right: 50,
                                        transform: 'translateY(-50%) rotate(25deg)',
                                        background: 'rgba(76, 175, 80, 0.95)',
                                        color: 'white',
                                        padding: '12px 20px',
                                        borderRadius: '25px',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        opacity: opacityRight,
                                        border: '3px solid #4CAF50',
                                        boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "❤️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 840,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " LIKE"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 820,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                    lineNumber: 713,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                lineNumber: 703,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
            lineNumber: 683,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    const containerStyle = {
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
        width: screens.xs ? '100%' : '100%',
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
    // Loading
    if (isLoadingNearbyProfile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: theme.colors.background_color
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                    size: "large"
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                    lineNumber: 891,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Text, {
                    style: {
                        marginTop: 16
                    },
                    children: "Finding people near you..."
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                    lineNumber: 892,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
            lineNumber: 890,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: cardAreaStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: visibleProfiles.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileCard, {
                                    profile: profile,
                                    index: index
                                }, `${profile.id}-${index}`, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 910,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 908,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: actionsContainerStyle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButtons, {
                                onUndo: handleUndo,
                                onPass: ()=>setTriggerSwipe('left'),
                                onSuperLike: handleSuperLike,
                                onLike: ()=>setTriggerSwipe('right'),
                                onBoost: handleBoost,
                                canUndo: swipeHistory.length > 0,
                                hasCard: !!currentCard
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                lineNumber: 920,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 918,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                    lineNumber: 907,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                lineNumber: 904,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: hasProfiles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: visibleProfiles.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileCard, {
                                    profile: profile,
                                    index: index
                                }, `${profile.id}-${index}`, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 943,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 941,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                zIndex: 1000,
                                bottom: 150,
                                left: 0,
                                right: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                    title: "Pass",
                                    placement: "top",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        shape: "circle",
                                        size: "large",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 963,
                                            columnNumber: 43
                                        }, void 0),
                                        style: {
                                            width: 56,
                                            height: 56,
                                            fontSize: 20,
                                            boxShadow: '0 4px 15px rgba(255, 71, 87, 0.3)',
                                            border: '2px solid #ff4757',
                                            color: '#ff4757',
                                            background: 'white'
                                        },
                                        onClick: ()=>handleChoice('left'),
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = '#ff4757';
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'white';
                                            e.currentTarget.style.color = '#ff4757';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                        lineNumber: 960,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 959,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                    title: "Super Like",
                                    placement: "top",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        shape: "circle",
                                        size: "large",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__["StarFilled"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 43
                                        }, void 0),
                                        style: {
                                            width: 48,
                                            height: 48,
                                            fontSize: 18,
                                            boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
                                            border: '2px solid #2196F3',
                                            color: '#2196F3',
                                            background: 'white'
                                        },
                                        onClick: ()=>handleSuperLike(),
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = '#2196F3';
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'white';
                                            e.currentTarget.style.color = '#2196F3';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                        lineNumber: 988,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 987,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                    title: "Like",
                                    placement: "top",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                        shape: "circle",
                                        size: "large",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 43
                                        }, void 0),
                                        style: {
                                            width: 56,
                                            height: 56,
                                            fontSize: 20,
                                            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                                            border: '2px solid #4CAF50',
                                            color: '#4CAF50',
                                            background: 'white'
                                        },
                                        onClick: ()=>handleChoice('right'),
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = '#4CAF50';
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = 'white';
                                            e.currentTarget.style.color = '#4CAF50';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 948,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    flex: 1,
                    vertical: true,
                    justify: "center",
                    align: "center",
                    style: {
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                        image: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: userAccountInformation.user_account_profile_picture_url || '/placeholder.png',
                            alt: "You",
                            width: circleDiameter,
                            height: circleDiameter,
                            style: {
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 1051,
                            columnNumber: 33
                        }, void 0),
                        description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Text, {
                            style: {
                                color: theme.colors.text_color_black
                            },
                            children: "There's no one new in your area."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 1060,
                            columnNumber: 33
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SyncOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SyncOutlined$3e$__["SyncOutlined"], {}, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                                lineNumber: 1067,
                                columnNumber: 39
                            }, void 0),
                            onClick: ()=>fetchUsersData(),
                            loading: isLoadingNearbyProfile,
                            children: "Refresh"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                            lineNumber: 1065,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                        lineNumber: 1049,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                    lineNumber: 1047,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
                lineNumber: 938,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/test-swipe/page.tsx",
        lineNumber: 901,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SwipePage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__18745d64._.js.map