(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/providers/theme.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-client] (ecmascript)");
;
const DATING_THEME = {
    // Extend base theme with dating-specific colors
    colors: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"],
        // Match status colors
        newMatch: '#FF6B9D',
        superLike: '#FFD700',
        online: '#52C41A',
        recently: '#FAAD14',
        offline: '#8C8C8C',
        // Interaction colors
        like: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
        pass: '#8C8C8C',
        block: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].danger,
        report: '#FA541C',
        // Chat colors
        myMessage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
        theirMessage: '#F0F0F0',
        typing: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary,
        delivered: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].success,
        read: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
        // Profile verification
        verified: '#1890FF',
        premium: '#FFD700'
    },
    // Gradients for dating app aesthetics
    gradients: {
        primary: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary} 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].secondary} 100%)`,
        dark: `linear-gradient(to bottom, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].darkBackground}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].darkBackground})`,
        card: `linear-gradient(145deg, #ffffff 0%, #fafafa 100%)`,
        love: `linear-gradient(45deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].love})`,
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DesktopSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(authenticated)/layout.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/providers/theme.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-client] (ecmascript) <export default as FireOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-client] (ecmascript) <export default as SettingOutlined>");
'use client';
;
;
;
;
const { Sider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
/* ------------------------------------------------------------------ */ /*  Mock data (replace with real API later)                           */ /* ------------------------------------------------------------------ */ const currentUser = {
    id: '1',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    unreadMessages: 3
};
const navItems = [
    {
        key: '/home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireOutlined$3e$__["FireOutlined"],
        label: 'Discover'
    },
    {
        key: '/app',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__["TeamOutlined"],
        label: 'Matches',
        badge: 12
    },
    {
        key: '/chat',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"],
        label: 'Messages',
        badge: currentUser.unreadMessages
    },
    {
        key: '/profile/edit',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"],
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sider, {
        width: '20%',
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].cardBackground,
            borderRight: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].borderLight}`,
            position: 'fixed',
            flexDirection: 'column',
            display: 'flex',
            left: 0,
            top: 0,
            height: '100vh',
            zIndex: 1000,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].cardShadow
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].pinkGradient,
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        size: 16,
                        children: navItems.slice(0, 3).map((i)=>{
                            const Icon = i.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.2)',
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].flexCenter
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__["SettingOutlined"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].borderLight}`
                },
                children: [
                    'Matches',
                    'Messages'
                ].map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: '12px 0',
                            textAlign: 'center',
                            borderBottom: `3px solid ${idx === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : 'transparent'}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            strong: idx === 0,
                            style: {
                                color: idx === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 8,
                    overflowY: 'auto',
                    flex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 8
                    },
                    children: matches.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                borderRadius: 8,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].smoothTransition
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundImage: `url(${m.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: 80,
                                    position: 'relative'
                                },
                                children: [
                                    i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = DesktopSidebar;
DesktopSidebar.displayName = 'DesktopSidebar';
const __TURBOPACK__default__export__ = DesktopSidebar;
var _c;
__turbopack_context__.k.register(_c, "DesktopSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(authenticated)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-responsive/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DesktopSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DesktopSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const { Sider, Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const AuthenticatedLayout = ({ children })=>{
    _s();
    // Detect screen size for responsive layout
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        maxWidth: 768
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNav = (path)=>router.push(path);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
        },
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DesktopSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 38,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // background: '#000',
                    overflow: 'hidden',
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                    style: {
                        width: '100%',
                        // height: isMobile ? 'calc(100vh - 60px)' : '100vh',
                        maxWidth: isMobile ? '100%' : '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/layout.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/layout.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthenticatedLayout, "afJ9arHxZIS0zgaqpMBaO93u29A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AuthenticatedLayout;
const __TURBOPACK__default__export__ = AuthenticatedLayout;
var _c;
__turbopack_context__.k.register(_c, "AuthenticatedLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // 'use client';
 // import React from 'react';
 // import { Layout } from 'antd';
 // import { useMediaQuery } from 'react-responsive';
 // import { THEME_COLORS } from '@/providers/theme';
 // import DesktopSidebar from '@/components/DesktopSidebar';
 // import MobileBottomNav from '@/components/MobileBottomNav';
 // import { usePathname, useRouter } from 'next/navigation';
 // const { Sider, Content } = Layout;
 // interface AuthenticatedLayoutProps {
 //   children: React.ReactNode;
 // }
 // const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
 //   // Detect screen size for responsive layout
 //   const isMobile = useMediaQuery({ maxWidth: 768 });
 //   const router = useRouter();
 //   const pathname = usePathname();
 //   const handleNav = (path: string) => router.push(path);
 //   return (
 //     <Layout
 //       style={{
 //         minHeight: '100vh',
 //         backgroundColor: '#000', // fallback to black
 //         display: 'flex',
 //         flexDirection: isMobile ? 'column' : 'row',
 //       }}
 //     >
 //       Sidebar for desktop
 //       {!isMobile && (
 //         <Sider
 //           width={260}
 //           theme="light"
 //           style={{
 //             background: '#fff',
 //             borderRight: '1px solid #f0f0f0',
 //             display: 'flex',
 //             flexDirection: 'column',
 //             padding: '1rem',
 //           }}
 //         >
 //           <DesktopSidebar />
 //         </Sider>
 //       )}
 //       {/* Main content area */}
 //       <Layout
 //         style={{
 //           flex: 1,
 //           display: 'flex',
 //           flexDirection: 'column',
 //           justifyContent: 'center',
 //           alignItems: 'center',
 //           // background: '#000',
 //           // overflow: 'hidden',
 //           position: 'relative',
 //         }}
 //       >
 //         <Content
 //           style={{
 //             width: '100%',
 //             maxWidth: '1000px',
 //             display: 'flex',
 //             justifyContent: 'center',
 //             alignItems: 'center',
 //             height: isMobile ? 'calc(100vh - 60px)' : '100vh',
 //           }}
 //         >
 //           {children}
 //         </Content>
 //         {/* Bottom navigation for mobile */}
 //         {isMobile && (
 //           <div
 //             style={{
 //               position: 'fixed',
 //               bottom: 0,
 //               left: 0,
 //               width: '100%',
 //               background: '#fff',
 //               borderTop: '1px solid #eaeaea',
 //               zIndex: 100,
 //             }}
 //           >
 //             <MobileBottomNav pathname={pathname} onNavigate={handleNav} />
 //           </div>
 //         )}
 //       </Layout>
 //     </Layout>
 //   );
 // };
 // export default AuthenticatedLayout;
 // // src/app/(authenticated)/layout.tsx
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
"[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/css-mediaquery/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/ exports.match = matchQuery;
exports.parse = parseQuery;
// -----------------------------------------------------------------------------
var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
function matchQuery(mediaQuery, values) {
    return parseQuery(mediaQuery).some(function(query) {
        var inverse = query.inverse;
        // Either the parsed or specified `type` is "all", or the types must be
        // equal for a match.
        var typeMatch = query.type === 'all' || values.type === query.type;
        // Quit early when `type` doesn't match, but take "not" into account.
        if (typeMatch && inverse || !(typeMatch || inverse)) {
            return false;
        }
        var expressionsMatch = query.expressions.every(function(expression) {
            var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
            // Missing or falsy values don't match.
            if (!value) {
                return false;
            }
            switch(feature){
                case 'orientation':
                case 'scan':
                    return value.toLowerCase() === expValue.toLowerCase();
                case 'width':
                case 'height':
                case 'device-width':
                case 'device-height':
                    expValue = toPx(expValue);
                    value = toPx(value);
                    break;
                case 'resolution':
                    expValue = toDpi(expValue);
                    value = toDpi(value);
                    break;
                case 'aspect-ratio':
                case 'device-aspect-ratio':
                case /* Deprecated */ 'device-pixel-ratio':
                    expValue = toDecimal(expValue);
                    value = toDecimal(value);
                    break;
                case 'grid':
                case 'color':
                case 'color-index':
                case 'monochrome':
                    expValue = parseInt(expValue, 10) || 1;
                    value = parseInt(value, 10) || 0;
                    break;
            }
            switch(modifier){
                case 'min':
                    return value >= expValue;
                case 'max':
                    return value <= expValue;
                default:
                    return value === expValue;
            }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
    });
}
function parseQuery(mediaQuery) {
    return mediaQuery.split(',').map(function(query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || '', parsed = {};
        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
        parsed.type = type ? type.toLowerCase() : 'all';
        // Split expressions into a list.
        expressions = expressions.match(/\([^\)]+\)/g) || [];
        parsed.expressions = expressions.map(function(expression) {
            var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
            return {
                modifier: feature[1],
                feature: feature[2],
                value: captures[2]
            };
        });
        return parsed;
    });
}
// -- Utilities ----------------------------------------------------------------
function toDecimal(ratio) {
    var decimal = Number(ratio), numbers;
    if (!decimal) {
        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
        decimal = numbers[1] / numbers[2];
    }
    return decimal;
}
function toDpi(resolution) {
    var value = parseFloat(resolution), units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
    switch(units){
        case 'dpcm':
            return value / 2.54;
        case 'dppx':
            return value * 96;
        default:
            return value;
    }
}
function toPx(length) {
    var value = parseFloat(length), units = String(length).match(RE_LENGTH_UNIT)[1];
    switch(units){
        case 'em':
            return value * 16;
        case 'rem':
            return value * 16;
        case 'cm':
            return value * 96 / 2.54;
        case 'mm':
            return value * 96 / 2.54 / 10;
        case 'in':
            return value * 96;
        case 'pt':
            return value * 72;
        case 'pc':
            return value * 72 / 12;
        default:
            return value;
    }
}
}),
"[project]/node_modules/matchmediaquery/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var staticMatch = __turbopack_context__.r("[project]/node_modules/css-mediaquery/index.js [app-client] (ecmascript)").match;
var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;
// our fake MediaQueryList
function Mql(query, values, forceStatic) {
    var self = this;
    var mql;
    // matchMedia will return null in FF when it's called in a hidden iframe
    // ref: https://stackoverflow.com/a/12330568
    if (dynamicMatch && !forceStatic) mql = dynamicMatch.call(window, query);
    if (mql) {
        this.matches = mql.matches;
        this.media = mql.media;
        // TODO: is there a time it makes sense to remove this listener?
        mql.addListener(update);
    } else {
        this.matches = staticMatch(query, values);
        this.media = query;
    }
    this.addListener = addListener;
    this.removeListener = removeListener;
    this.dispose = dispose;
    function addListener(listener) {
        if (mql) {
            mql.addListener(listener);
        }
    }
    function removeListener(listener) {
        if (mql) {
            mql.removeListener(listener);
        }
    }
    // update ourselves!
    function update(evt) {
        self.matches = evt.matches;
        self.media = evt.media;
    }
    function dispose() {
        if (mql) {
            mql.removeListener(update);
        }
    }
}
function matchMedia(query, values, forceStatic) {
    return new Mql(query, values, forceStatic);
}
module.exports = matchMedia;
}),
"[project]/node_modules/hyphenate-style-name/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-var, prefer-template */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
    return '-' + match.toLowerCase();
}
function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
        return cache[name];
    }
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}
const __TURBOPACK__default__export__ = hyphenateStyleName;
}),
"[project]/node_modules/shallow-equal/dist/index.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual,
    "shallowEqualArrays",
    ()=>shallowEqualArrays,
    "shallowEqualObjects",
    ()=>shallowEqualObjects
]);
function shallowEqualArrays(arrA, arrB) {
    if (arrA === arrB) {
        return true;
    }
    if (!arrA || !arrB) {
        return false;
    }
    const len = arrA.length;
    if (arrB.length !== len) {
        return false;
    }
    for(let i = 0; i < len; i++){
        if (arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;
}
function shallowEqualObjects(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    const len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for(let i = 0; i < len; i++){
        const key = aKeys[i];
        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
    }
    return true;
}
function shallowEqual(a, b) {
    const aIsArr = Array.isArray(a);
    const bIsArr = Array.isArray(b);
    if (aIsArr !== bIsArr) {
        return false;
    }
    if (aIsArr && bIsArr) {
        return shallowEqualArrays(a, b);
    }
    return shallowEqualObjects(a, b);
}
;
 //# sourceMappingURL=index.modern.mjs.map
}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/node_modules/react-responsive/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Context",
    ()=>Context,
    "MediaQuery",
    ()=>MediaQuery,
    "default",
    ()=>MediaQuery,
    "toQuery",
    ()=>toQuery,
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matchmediaquery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matchmediaquery/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hyphenate-style-name/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shallow$2d$equal$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/shallow-equal/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
;
;
;
;
;
const stringOrNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number
]);
// media types
const types = {
    all: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    aural: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    braille: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    handheld: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    print: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    projection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    screen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    tty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    tv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    embossed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool
};
// properties that match media queries
const matchers = {
    orientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'portrait',
        'landscape'
    ]),
    scan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        'progressive',
        'interlace'
    ]),
    aspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    deviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    height: stringOrNumber,
    deviceHeight: stringOrNumber,
    width: stringOrNumber,
    deviceWidth: stringOrNumber,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    colorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    monochrome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    resolution: stringOrNumber,
    type: Object.keys(types)
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { type, ...featureMatchers } = matchers;
// media features
const features = {
    minAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    maxAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    minDeviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    maxDeviceAspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    minHeight: stringOrNumber,
    maxHeight: stringOrNumber,
    minDeviceHeight: stringOrNumber,
    maxDeviceHeight: stringOrNumber,
    minWidth: stringOrNumber,
    maxWidth: stringOrNumber,
    minDeviceWidth: stringOrNumber,
    maxDeviceWidth: stringOrNumber,
    minColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    maxColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    minColorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    maxColorIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    minMonochrome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    maxMonochrome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    minResolution: stringOrNumber,
    maxResolution: stringOrNumber,
    ...featureMatchers
};
const all = {
    ...types,
    ...features
};
var mq = {
    all: all,
    types: types,
    matchers: matchers,
    features: features
};
const negate = (cond)=>`not ${cond}`;
const keyVal = (k, v)=>{
    const realKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(k);
    // px shorthand
    if (typeof v === 'number') {
        v = `${v}px`;
    }
    if (v === true) {
        return realKey;
    }
    if (v === false) {
        return negate(realKey);
    }
    return `(${realKey}: ${v})`;
};
const join = (conds)=>conds.join(' and ');
const toQuery = (obj)=>{
    const rules = [];
    Object.keys(mq.all).forEach((k)=>{
        const v = obj[k];
        if (v != null) {
            rules.push(keyVal(k, v));
        }
    });
    return join(rules);
};
const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const makeQuery = (settings)=>settings.query || toQuery(settings);
const hyphenateKeys = (obj)=>{
    if (!obj) return undefined;
    const keys = Object.keys(obj);
    return keys.reduce((result, key)=>{
        result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hyphenate$2d$style$2d$name$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key)] = obj[key];
        return result;
    }, {});
};
const useIsUpdate = ()=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsUpdate.useEffect": ()=>{
            ref.current = true;
        }
    }["useIsUpdate.useEffect"], []);
    return ref.current;
};
const useDevice = (deviceFromProps)=>{
    const deviceFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const getDevice = ()=>hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
    const [device, setDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDevice);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDevice.useEffect": ()=>{
            const newDevice = getDevice();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shallow$2d$equal$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(device, newDevice)) {
                setDevice(newDevice);
            }
        }
    }["useDevice.useEffect"], [
        deviceFromProps,
        deviceFromContext
    ]);
    return device;
};
const useQuery = (settings)=>{
    const getQuery = ()=>makeQuery(settings);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getQuery);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuery.useEffect": ()=>{
            const newQuery = getQuery();
            if (query !== newQuery) {
                setQuery(newQuery);
            }
        }
    }["useQuery.useEffect"], [
        settings
    ]);
    return query;
};
const useMatchMedia = (query, device)=>{
    const getMatchMedia = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matchmediaquery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(query, device || {}, !!device);
    const [mq, setMq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getMatchMedia);
    const isUpdate = useIsUpdate();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMatchMedia.useEffect": ()=>{
            if (isUpdate) {
                // skip on mounting, it has already been set
                const newMq = getMatchMedia();
                setMq(newMq);
                return ({
                    "useMatchMedia.useEffect": ()=>{
                        if (newMq) {
                            newMq.dispose();
                        }
                    }
                })["useMatchMedia.useEffect"];
            }
        }
    }["useMatchMedia.useEffect"], [
        query,
        device
    ]);
    return mq;
};
const useMatches = (mediaQuery)=>{
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mediaQuery.matches);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMatches.useEffect": ()=>{
            const updateMatches = {
                "useMatches.useEffect.updateMatches": (ev)=>{
                    setMatches(ev.matches);
                }
            }["useMatches.useEffect.updateMatches"];
            mediaQuery.addListener(updateMatches);
            setMatches(mediaQuery.matches);
            return ({
                "useMatches.useEffect": ()=>{
                    mediaQuery.removeListener(updateMatches);
                }
            })["useMatches.useEffect"];
        }
    }["useMatches.useEffect"], [
        mediaQuery
    ]);
    return matches;
};
const useMediaQuery = (settings, device, onChange)=>{
    const deviceSettings = useDevice(device);
    const query = useQuery(settings);
    if (!query) throw new Error('Invalid or missing MediaQuery!');
    const mq = useMatchMedia(query, deviceSettings);
    const matches = useMatches(mq);
    const isUpdate = useIsUpdate();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            if (isUpdate && onChange) {
                onChange(matches);
            }
        }
    }["useMediaQuery.useEffect"], [
        matches
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>({
                "useMediaQuery.useEffect": ()=>{
                    if (mq) {
                        mq.dispose();
                    }
                }
            })["useMediaQuery.useEffect"]
    }["useMediaQuery.useEffect"], []);
    return matches;
};
// ReactNode and ReactElement typings are a little funky for functional components, so the ReactElement cast is needed on the return
const MediaQuery = ({ children, device, onChange, ...settings })=>{
    const matches = useMediaQuery(settings, device, onChange);
    if (typeof children === 'function') {
        return children(matches);
    }
    return matches ? children : null;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/node_modules/antd/es/avatar/index.js [app-client] (ecmascript) <export default as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Space",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/FireOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var FireOutlined = {
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
                    "d": "M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"
                }
            }
        ]
    },
    "name": "fire",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = FireOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/FireOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var FireOutlined = function FireOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![fire](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTgzNC4xIDQ2OS4yQTM0Ny40OSAzNDcuNDkgMCAwMDc1MS4yIDM1NGwtMjkuMS0yNi43YTguMDkgOC4wOSAwIDAwLTEzIDMuM2wtMTMgMzcuM2MtOC4xIDIzLjQtMjMgNDcuMy00NC4xIDcwLjgtMS40IDEuNS0zIDEuOS00LjEgMi0xLjEuMS0yLjgtLjEtNC4zLTEuNS0xLjQtMS4yLTIuMS0zLTItNC44IDMuNy02MC4yLTE0LjMtMTI4LjEtNTMuNy0yMDJDNTU1LjMgMTcxIDUxMCAxMjMuMSA0NTMuNCA4OS43bC00MS4zLTI0LjNjLTUuNC0zLjItMTIuMyAxLTEyIDcuM2wyLjIgNDhjMS41IDMyLjgtMi4zIDYxLjgtMTEuMyA4NS45LTExIDI5LjUtMjYuOCA1Ni45LTQ3IDgxLjVhMjk1LjY0IDI5NS42NCAwIDAxLTQ3LjUgNDYuMSAzNTIuNiAzNTIuNiAwIDAwLTEwMC4zIDEyMS41QTM0Ny43NSAzNDcuNzUgMCAwMDE2MCA2MTBjMCA0Ny4yIDkuMyA5Mi45IDI3LjcgMTM2YTM0OS40IDM0OS40IDAgMDA3NS41IDExMC45YzMyLjQgMzIgNzAgNTcuMiAxMTEuOSA3NC43QzQxOC41IDk0OS44IDQ2NC41IDk1OSA1MTIgOTU5czkzLjUtOS4yIDEzNi45LTI3LjNBMzQ4LjYgMzQ4LjYgMCAwMDc2MC44IDg1N2MzMi40LTMyIDU3LjgtNjkuNCA3NS41LTExMC45YTM0NC4yIDM0NC4yIDAgMDAyNy43LTEzNmMwLTQ4LjgtMTAtOTYuMi0yOS45LTE0MC45ek03MTMgODA4LjVjLTUzLjcgNTMuMi0xMjUgODIuNC0yMDEgODIuNHMtMTQ3LjMtMjkuMi0yMDEtODIuNGMtNTMuNS01My4xLTgzLTEyMy41LTgzLTE5OC40IDAtNDMuNSA5LjgtODUuMiAyOS4xLTEyNCAxOC44LTM3LjkgNDYuOC03MS44IDgwLjgtOTcuOWEzNDkuNiAzNDkuNiAwIDAwNTguNi01Ni44YzI1LTMwLjUgNDQuNi02NC41IDU4LjItMTAxYTI0MCAyNDAgMCAwMDEyLjEtNDYuNWMyNC4xIDIyLjIgNDQuMyA0OSA2MS4yIDgwLjQgMzMuNCA2Mi42IDQ4LjggMTE4LjMgNDUuOCAxNjUuN2E3NC4wMSA3NC4wMSAwIDAwMjQuNCA1OS44IDczLjM2IDczLjM2IDAgMDA1My40IDE4LjhjMTkuNy0xIDM3LjgtOS43IDUxLTI0LjQgMTMuMy0xNC45IDI0LjgtMzAuMSAzNC40LTQ1LjYgMTQgMTcuOSAyNS43IDM3LjQgMzUgNTguNCAxNS45IDM1LjggMjQgNzMuOSAyNCAxMTMuMSAwIDc0LjktMjkuNSAxNDUuNC04MyAxOTguNHoiIC8+PC9zdmc+) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](FireOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'FireOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-client] (ecmascript) <export default as FireOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FireOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/TeamOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var TeamOutlined = {
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
                    "d": "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"
                }
            }
        ]
    },
    "name": "team",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = TeamOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/TeamOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var TeamOutlined = function TeamOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![team](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTgyNC4yIDY5OS45YTMwMS41NSAzMDEuNTUgMCAwMC04Ni40LTYwLjRDNzgzLjEgNjAyLjggODEyIDU0Ni44IDgxMiA0ODRjMC0xMTAuOC05Mi40LTIwMS43LTIwMy4yLTIwMC0xMDkuMSAxLjctMTk3IDkwLjYtMTk3IDIwMCAwIDYyLjggMjkgMTE4LjggNzQuMiAxNTUuNWEzMDAuOTUgMzAwLjk1IDAgMDAtODYuNCA2MC40QzM0NSA3NTQuNiAzMTQgODI2LjggMzEyIDkwMy44YTggOCAwIDAwOCA4LjJoNTZjNC4zIDAgNy45LTMuNCA4LTcuNyAxLjktNTggMjUuNC0xMTIuMyA2Ni43LTE1My41QTIyNi42MiAyMjYuNjIgMCAwMTYxMiA2ODRjNjAuOSAwIDExOC4yIDIzLjcgMTYxLjMgNjYuOEM4MTQuNSA3OTIgODM4IDg0Ni4zIDg0MCA5MDQuM2MuMSA0LjMgMy43IDcuNyA4IDcuN2g1NmE4IDggMCAwMDgtOC4yYy0yLTc3LTMzLTE0OS4yLTg3LjgtMjAzLjl6TTYxMiA2MTJjLTM0LjIgMC02Ni40LTEzLjMtOTAuNS0zNy41YTEyNi44NiAxMjYuODYgMCAwMS0zNy41LTkxLjhjLjMtMzIuOCAxMy40LTY0LjUgMzYuMy04OCAyNC0yNC42IDU2LjEtMzguMyA5MC40LTM4LjcgMzMuOS0uMyA2Ni44IDEyLjkgOTEgMzYuNiAyNC44IDI0LjMgMzguNCA1Ni44IDM4LjQgOTEuNCAwIDM0LjItMTMuMyA2Ni4zLTM3LjUgOTAuNUExMjcuMyAxMjcuMyAwIDAxNjEyIDYxMnpNMzYxLjUgNTEwLjRjLS45LTguNy0xLjQtMTcuNS0xLjQtMjYuNCAwLTE1LjkgMS41LTMxLjQgNC4zLTQ2LjUuNy0zLjYtMS4yLTcuMy00LjUtOC44LTEzLjYtNi4xLTI2LjEtMTQuNS0zNi45LTI1LjFhMTI3LjU0IDEyNy41NCAwIDAxLTM4LjctOTUuNGMuOS0zMi4xIDEzLjgtNjIuNiAzNi4zLTg1LjYgMjQuNy0yNS4zIDU3LjktMzkuMSA5My4yLTM4LjcgMzEuOS4zIDYyLjcgMTIuNiA4NiAzNC40IDcuOSA3LjQgMTQuNyAxNS42IDIwLjQgMjQuNCAyIDMuMSA1LjkgNC40IDkuMyAzLjIgMTcuNi02LjEgMzYuMi0xMC40IDU1LjMtMTIuNCA1LjYtLjYgOC44LTYuNiA2LjMtMTEuNi0zMi41LTY0LjMtOTguOS0xMDguNy0xNzUuNy0xMDkuOS0xMTAuOS0xLjctMjAzLjMgODkuMi0yMDMuMyAxOTkuOSAwIDYyLjggMjguOSAxMTguOCA3NC4yIDE1NS41LTMxLjggMTQuNy02MS4xIDM1LTg2LjUgNjAuNC01NC44IDU0LjctODUuOCAxMjYuOS04Ny44IDIwNGE4IDggMCAwMDggOC4yaDU2LjFjNC4zIDAgNy45LTMuNCA4LTcuNyAxLjktNTggMjUuNC0xMTIuMyA2Ni43LTE1My41IDI5LjQtMjkuNCA2NS40LTQ5LjggMTA0LjctNTkuNyAzLjktMSA2LjUtNC43IDYtOC43eiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](TeamOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'TeamOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/MessageOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MessageOutlined = {
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
                    "d": "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                }
            }
        ]
    },
    "name": "message",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = MessageOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/MessageOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var MessageOutlined = function MessageOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![message](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ2NCA1MTJhNDggNDggMCAxMDk2IDAgNDggNDggMCAxMC05NiAwem0yMDAgMGE0OCA0OCAwIDEwOTYgMCA0OCA0OCAwIDEwLTk2IDB6bS00MDAgMGE0OCA0OCAwIDEwOTYgMCA0OCA0OCAwIDEwLTk2IDB6bTY2MS4yLTE3My42Yy0yMi42LTUzLjctNTUtMTAxLjktOTYuMy0xNDMuM2E0NDQuMzUgNDQ0LjM1IDAgMDAtMTQzLjMtOTYuM0M2MzAuNiA3NS43IDU3Mi4yIDY0IDUxMiA2NGgtMmMtNjAuNi4zLTExOS4zIDEyLjMtMTc0LjUgMzUuOWE0NDUuMzUgNDQ1LjM1IDAgMDAtMTQyIDk2LjVjLTQwLjkgNDEuMy03MyA4OS4zLTk1LjIgMTQyLjgtMjMgNTUuNC0zNC42IDExNC4zLTM0LjMgMTc0LjlBNDQ5LjQgNDQ5LjQgMCAwMDExMiA3MTR2MTUyYTQ2IDQ2IDAgMDA0NiA0NmgxNTIuMUE0NDkuNCA0NDkuNCAwIDAwNTEwIDk2MGgyLjFjNTkuOSAwIDExOC0xMS42IDE3Mi43LTM0LjNhNDQ0LjQ4IDQ0NC40OCAwIDAwMTQyLjgtOTUuMmM0MS4zLTQwLjkgNzMuOC04OC43IDk2LjUtMTQyIDIzLjYtNTUuMiAzNS42LTExMy45IDM1LjktMTc0LjUuMy02MC45LTExLjUtMTIwLTM0LjgtMTc1LjZ6bS0xNTEuMSA0MzhDNzA0IDg0NS44IDYxMSA4ODQgNTEyIDg4NGgtMS43Yy02MC4zLS4zLTEyMC4yLTE1LjMtMTczLjEtNDMuNWwtOC40LTQuNUgxODhWNjk1LjJsLTQuNS04LjRDMTU1LjMgNjMzLjkgMTQwLjMgNTc0IDE0MCA1MTMuN2MtLjQtOTkuNyAzNy43LTE5My4zIDEwNy42LTI2My44IDY5LjgtNzAuNSAxNjMuMS0xMDkuNSAyNjIuOC0xMDkuOWgxLjdjNTAgMCA5OC41IDkuNyAxNDQuMiAyOC45IDQ0LjYgMTguNyA4NC42IDQ1LjYgMTE5IDgwIDM0LjMgMzQuMyA2MS4zIDc0LjQgODAgMTE5IDE5LjQgNDYuMiAyOS4xIDk1LjIgMjguOSAxNDUuOC0uNiA5OS42LTM5LjcgMTkyLjktMTEwLjEgMjYyLjd6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](MessageOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'MessageOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript) <export default as MessageOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var UserOutlined = {
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
                    "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                }
            }
        ]
    },
    "name": "user",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = UserOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var UserOutlined = function UserOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![user](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1OC41IDc2My42YTM3NCAzNzQgMCAwMC04MC42LTExOS41IDM3NS42MyAzNzUuNjMgMCAwMC0xMTkuNS04MC42Yy0uNC0uMi0uOC0uMy0xLjItLjVDNzE5LjUgNTE4IDc2MCA0NDQuNyA3NjAgMzYyYzAtMTM3LTExMS0yNDgtMjQ4LTI0OFMyNjQgMjI1IDI2NCAzNjJjMCA4Mi43IDQwLjUgMTU2IDEwMi44IDIwMS4xLS40LjItLjguMy0xLjIuNS00NC44IDE4LjktODUgNDYtMTE5LjUgODAuNmEzNzUuNjMgMzc1LjYzIDAgMDAtODAuNiAxMTkuNUEzNzEuNyAzNzEuNyAwIDAwMTM2IDkwMS44YTggOCAwIDAwOCA4LjJoNjBjNC40IDAgNy45LTMuNSA4LTcuOCAyLTc3LjIgMzMtMTQ5LjUgODcuOC0yMDQuMyA1Ni43LTU2LjcgMTMyLTg3LjkgMjEyLjItODcuOXMxNTUuNSAzMS4yIDIxMi4yIDg3LjlDNzc5IDc1Mi43IDgxMCA4MjUgODEyIDkwMi4yYy4xIDQuNCAzLjYgNy44IDggNy44aDYwYTggOCAwIDAwOC04LjJjLTEtNDcuOC0xMC45LTk0LjMtMjkuNS0xMzguMnpNNTEyIDUzNGMtNDUuOSAwLTg5LjEtMTcuOS0xMjEuNi01MC40UzM0MCA0MDcuOSAzNDAgMzYyYzAtNDUuOSAxNy45LTg5LjEgNTAuNC0xMjEuNlM0NjYuMSAxOTAgNTEyIDE5MHM4OS4xIDE3LjkgMTIxLjYgNTAuNFM2ODQgMzE2LjEgNjg0IDM2MmMwIDQ1LjktMTcuOSA4OS4xLTUwLjQgMTIxLjZTNTU3LjkgNTM0IDUxMiA1MzR6IiAvPjwvc3ZnPg==) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](UserOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'UserOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@ant-design/icons-svg/es/asn/SettingOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var SettingOutlined = {
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
                    "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"
                }
            }
        ]
    },
    "name": "setting",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = SettingOutlined;
}),
"[project]/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons-svg/es/asn/SettingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
;
;
;
;
var SettingOutlined = function SettingOutlined(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
};
/**![setting](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkyNC44IDYyNS43bC02NS41LTU2YzMuMS0xOSA0LjctMzguNCA0LjctNTcuOHMtMS42LTM4LjgtNC43LTU3LjhsNjUuNS01NmEzMi4wMyAzMi4wMyAwIDAwOS4zLTM1LjJsLS45LTIuNmE0NDMuNzQgNDQzLjc0IDAgMDAtNzkuNy0xMzcuOWwtMS44LTIuMWEzMi4xMiAzMi4xMiAwIDAwLTM1LjEtOS41bC04MS4zIDI4LjljLTMwLTI0LjYtNjMuNS00NC05OS43LTU3LjZsLTE1LjctODVhMzIuMDUgMzIuMDUgMCAwMC0yNS44LTI1LjdsLTIuNy0uNWMtNTIuMS05LjQtMTA2LjktOS40LTE1OSAwbC0yLjcuNWEzMi4wNSAzMi4wNSAwIDAwLTI1LjggMjUuN2wtMTUuOCA4NS40YTM1MS44NiAzNTEuODYgMCAwMC05OSA1Ny40bC04MS45LTI5LjFhMzIgMzIgMCAwMC0zNS4xIDkuNWwtMS44IDIuMWE0NDYuMDIgNDQ2LjAyIDAgMDAtNzkuNyAxMzcuOWwtLjkgMi42Yy00LjUgMTIuNS0uOCAyNi41IDkuMyAzNS4ybDY2LjMgNTYuNmMtMy4xIDE4LjgtNC42IDM4LTQuNiA1Ny4xIDAgMTkuMiAxLjUgMzguNCA0LjYgNTcuMUw5OSA2MjUuNWEzMi4wMyAzMi4wMyAwIDAwLTkuMyAzNS4ybC45IDIuNmMxOC4xIDUwLjQgNDQuOSA5Ni45IDc5LjcgMTM3LjlsMS44IDIuMWEzMi4xMiAzMi4xMiAwIDAwMzUuMSA5LjVsODEuOS0yOS4xYzI5LjggMjQuNSA2My4xIDQzLjkgOTkgNTcuNGwxNS44IDg1LjRhMzIuMDUgMzIuMDUgMCAwMDI1LjggMjUuN2wyLjcuNWE0NDkuNCA0NDkuNCAwIDAwMTU5IDBsMi43LS41YTMyLjA1IDMyLjA1IDAgMDAyNS44LTI1LjdsMTUuNy04NWEzNTAgMzUwIDAgMDA5OS43LTU3LjZsODEuMyAyOC45YTMyIDMyIDAgMDAzNS4xLTkuNWwxLjgtMi4xYzM0LjgtNDEuMSA2MS42LTg3LjUgNzkuNy0xMzcuOWwuOS0yLjZjNC41LTEyLjMuOC0yNi4zLTkuMy0zNXpNNzg4LjMgNDY1LjljMi41IDE1LjEgMy44IDMwLjYgMy44IDQ2LjFzLTEuMyAzMS0zLjggNDYuMWwtNi42IDQwLjEgNzQuNyA2My45YTM3MC4wMyAzNzAuMDMgMCAwMS00Mi42IDczLjZMNzIxIDcwMi44bC0zMS40IDI1LjhjLTIzLjkgMTkuNi01MC41IDM1LTc5LjMgNDUuOGwtMzguMSAxNC4zLTE3LjkgOTdhMzc3LjUgMzc3LjUgMCAwMS04NSAwbC0xNy45LTk3LjItMzcuOC0xNC41Yy0yOC41LTEwLjgtNTUtMjYuMi03OC43LTQ1LjdsLTMxLjQtMjUuOS05My40IDMzLjJjLTE3LTIyLjktMzEuMi00Ny42LTQyLjYtNzMuNmw3NS41LTY0LjUtNi41LTQwYy0yLjQtMTQuOS0zLjctMzAuMy0zLjctNDUuNSAwLTE1LjMgMS4yLTMwLjYgMy43LTQ1LjVsNi41LTQwLTc1LjUtNjQuNWMxMS4zLTI2LjEgMjUuNi01MC43IDQyLjYtNzMuNmw5My40IDMzLjIgMzEuNC0yNS45YzIzLjctMTkuNSA1MC4yLTM0LjkgNzguNy00NS43bDM3LjktMTQuMyAxNy45LTk3LjJjMjguMS0zLjIgNTYuOC0zLjIgODUgMGwxNy45IDk3IDM4LjEgMTQuM2MyOC43IDEwLjggNTUuNCAyNi4yIDc5LjMgNDUuOGwzMS40IDI1LjggOTIuOC0zMi45YzE3IDIyLjkgMzEuMiA0Ny42IDQyLjYgNzMuNkw3ODEuOCA0MjZsNi41IDM5Ljl6TTUxMiAzMjZjLTk3LjIgMC0xNzYgNzguOC0xNzYgMTc2czc4LjggMTc2IDE3NiAxNzYgMTc2LTc4LjggMTc2LTE3Ni03OC44LTE3Ni0xNzYtMTc2em03OS4yIDI1NS4yQTExMS42IDExMS42IDAgMDE1MTIgNjE0Yy0yOS45IDAtNTgtMTEuNy03OS4yLTMyLjhBMTExLjYgMTExLjYgMCAwMTQwMCA1MDJjMC0yOS45IDExLjctNTggMzIuOC03OS4yQzQ1NCA0MDEuNiA0ODIuMSAzOTAgNTEyIDM5MGMyOS45IDAgNTggMTEuNiA3OS4yIDMyLjhBMTExLjYgMTExLjYgMCAwMTYyNCA1MDJjMCAyOS45LTExLjcgNTgtMzIuOCA3OS4yeiIgLz48L3N2Zz4=) */ var RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](SettingOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'SettingOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-client] (ecmascript) <export default as SettingOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_01cad019._.js.map