(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/mockData.ts
__turbopack_context__.s([
    "getCardStack",
    ()=>getCardStack,
    "isAd",
    ()=>isAd,
    "isProfile",
    ()=>isProfile,
    "mockAds",
    ()=>mockAds,
    "mockMatches",
    ()=>mockMatches,
    "mockMessages",
    ()=>mockMessages,
    "mockProfiles",
    ()=>mockProfiles
]);
function isAd(item) {
    return "type" in item && item.type === "ad";
}
function isProfile(item) {
    return !isAd(item);
}
const mockProfiles = [
    {
        id: "1",
        name: "Precious",
        age: 22,
        bio: "Artist and dreamer ✨ | Love music and good vibes 🎵 | Always positive 😊",
        distance: 2000,
        images: [
            "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Art",
            "Music",
            "Photography",
            "Dance"
        ]
    },
    {
        id: "2",
        name: "Emma",
        age: 26,
        bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Dog mom 🐕",
        distance: 14585.79,
        images: [
            "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Travel",
            "Photography",
            "Yoga",
            "Coffee"
        ]
    },
    {
        id: "3",
        name: "Alex",
        age: 28,
        bio: "Software engineer by day, chef by night 👨‍🍳 | Love hiking and live music",
        distance: 8234.56,
        images: [
            "https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Cooking",
            "Hiking",
            "Music",
            "Tech"
        ]
    },
    {
        id: "3",
        name: "Sophie",
        age: 24,
        bio: "Artist 🎨 | Bookworm 📚 | Always up for spontaneous adventures",
        distance: 12456.23,
        images: [
            "https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Art",
            "Reading",
            "Museums",
            "Wine"
        ]
    },
    {
        id: "4",
        name: "James",
        age: 30,
        bio: "Outdoor enthusiast 🏔️ | Photographer | Looking for someone to explore with",
        distance: 9876.45,
        images: [
            "https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Photography",
            "Hiking",
            "Camping",
            "Nature"
        ]
    },
    {
        id: "5",
        name: "Olivia",
        age: 27,
        bio: "Fitness junkie 💪 | Plant-based lifestyle 🌱 | Weekend warrior",
        distance: 11234.67,
        images: [
            "https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Fitness",
            "Health",
            "Running",
            "Nutrition"
        ]
    },
    {
        id: "6",
        name: "Ryan",
        age: 29,
        bio: "Marketing professional | Traveler ✈️ | Always down for tacos 🌮",
        distance: 7543.21,
        images: [
            "https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        interests: [
            "Travel",
            "Food",
            "Marketing",
            "Sports"
        ]
    }
];
const mockMatches = [
    {
        id: "m1",
        profile: mockProfiles[0],
        matchedAt: new Date(2025, 10, 2),
        lastMessage: "That sounds amazing! I'd love to",
        unread: true
    },
    {
        id: "m2",
        profile: mockProfiles[1],
        matchedAt: new Date(2025, 10, 1),
        lastMessage: "Hey! How's your week going?",
        unread: false
    }
];
const mockAds = [
    {
        id: "ad1",
        type: "ad",
        brand: "Paradise Resorts",
        title: "Your Dream Vacation Awaits",
        description: "Escape to tropical paradise. 30% off all-inclusive packages this month!",
        image: "https://images.unsplash.com/photo-1761927206868-58fedbcdaf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MjA5ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Book Now",
        url: "https://example.com/paradise-resorts",
        category: "Travel"
    },
    {
        id: "ad2",
        type: "ad",
        brand: "Luxe Timepieces",
        title: "Timeless Elegance",
        description: "Premium watches for those who appreciate craftsmanship. Limited edition collection.",
        image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyMDcwNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Shop Collection",
        url: "https://example.com/luxe-watches",
        category: "Fashion"
    },
    {
        id: "ad3",
        type: "ad",
        brand: "FitLife Gym",
        title: "Transform Your Life",
        description: "Join today and get your first month free! Personal training, classes, and more.",
        image: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIxMDU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Start Free Trial",
        url: "https://example.com/fitlife",
        category: "Fitness"
    }
];
function getCardStack() {
    const stack = [];
    let adIndex = 0;
    mockProfiles.forEach((profile, index)=>{
        stack.push(profile);
        // Insert ad every 4 profiles
        if ((index + 1) % 4 === 0 && adIndex < mockAds.length) {
            stack.push(mockAds[adIndex]);
            adIndex++;
        }
    });
    return stack;
}
const mockMessages = {
    "1": [
        {
            id: "msg1",
            senderId: "1",
            text: "Hey! Thanks for the match 😊",
            timestamp: new Date(2025, 10, 2, 10, 30)
        },
        {
            id: "msg2",
            senderId: "me",
            text: "Hi Emma! How's it going?",
            timestamp: new Date(2025, 10, 2, 10, 45)
        },
        {
            id: "msg3",
            senderId: "1",
            text: "Great! I saw you're into hiking too. Have you been to any good trails lately?",
            timestamp: new Date(2025, 10, 2, 11, 0)
        },
        {
            id: "msg4",
            senderId: "me",
            text: "Yes! I went to Eagle Peak last weekend. The views were incredible!",
            timestamp: new Date(2025, 10, 2, 11, 15)
        },
        {
            id: "msg5",
            senderId: "1",
            text: "That sounds amazing! I'd love to",
            timestamp: new Date(2025, 10, 2, 11, 20)
        }
    ],
    "2": [
        {
            id: "msg6",
            senderId: "2",
            text: "Hey! How's your week going?",
            timestamp: new Date(2025, 10, 1, 14, 20)
        },
        {
            id: "msg7",
            senderId: "me",
            text: "Pretty good! How about you?",
            timestamp: new Date(2025, 10, 1, 14, 35)
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/MobileBottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(authenticated)/layout.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/badge/index.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireOutlined.js [app-client] (ecmascript) <export default as FireOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TeamOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TeamOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/TeamOutlined.js [app-client] (ecmascript) <export default as TeamOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [app-client] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/providers/theme.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const { Header, Content, Sider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
const currentUser = {
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
const MobileBottomNav = ({ pathname, onNavigate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].cardBackground,
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].borderLight}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            zIndex: 1000,
            paddingBottom: 'env(safe-area-inset-bottom)'
        },
        children: navItems.map((item)=>{
            const Icon = item.icon;
            const active = pathname === item.key;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>onNavigate(item.key),
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].flexCenter,
                    flexDirection: 'column',
                    minWidth: 60,
                    padding: '8px 12px',
                    borderRadius: 12,
                    cursor: 'pointer',
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].smoothTransition
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                style: {
                                    fontSize: 24,
                                    color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileBottomNav.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            'badge' in item && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                count: item.badge > 99 ? '99+' : item.badge,
                                size: "small",
                                style: {
                                    position: 'absolute',
                                    top: -6,
                                    right: -6,
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                        style: {
                            marginTop: 4,
                            fontSize: 11,
                            fontWeight: active ? 600 : 400,
                            color: active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].textSecondary
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
_c = MobileBottomNav;
MobileBottomNav.displayName = 'MobileBottomNav';
const __TURBOPACK__default__export__ = MobileBottomNav;
var _c;
__turbopack_context__.k.register(_c, "MobileBottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DashboardLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
// import Sidebar from './Sidebar';
// import TopBar from './TopBar';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DesktopSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DesktopSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ClientWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileBottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
const { Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const DashboardLayout = ({ children })=>{
    _s();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawerVisible, setDrawerVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNav = (path)=>router.push(path);
    // ──────────────────────────────────────────────────────────────
    // Resize handling (mobile < 768px)
    // ──────────────────────────────────────────────────────────────
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "DashboardLayout.useCallback[handleResize]": ()=>{
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setCollapsed(true); // always collapsed on mobile
                setDrawerVisible(false); // close drawer when switching
            } else {
                setCollapsed(false);
            }
        }
    }["DashboardLayout.useCallback[handleResize]"], 10), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "DashboardLayout.useEffect": ()=>{
                    handleResize.cancel();
                    window.removeEventListener('resize', handleResize);
                }
            })["DashboardLayout.useEffect"];
        }
    }["DashboardLayout.useEffect"], [
        handleResize
    ]);
    // ──────────────────────────────────────────────────────────────
    // Drawer toggle (mobile only)
    // ──────────────────────────────────────────────────────────────
    const toggleDrawer = ()=>setDrawerVisible((v)=>!v);
    // ──────────────────────────────────────────────────────────────
    // Render
    // ──────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].fullHeight,
            minHeight: '100vh',
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].background
        },
        children: [
            !isMobile && // <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DesktopSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/DashboardLayout.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    marginLeft: isMobile ? 0 : collapsed ? 80 : 350,
                    transition: 'margin-left 0.2s cubic-bezier(0.2, 0, 0, )',
                    minHeight: '100vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                        style: {
                            // padding: isMobile ? '12px' : '24px',
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_COLORS"].background,
                            height: 'calc(100vh - 64px)',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ClientWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMON_STYLES"].customScrollbar,
                            WebkitOverflowScrolling: 'touch'
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/DashboardLayout.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: '#fff',
                            borderTop: '1px solid #eaeaea',
                            zIndex: 100
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(DashboardLayout, "YkSNIiUv7s/G0gwi29gJAFxSauk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardLayout;
const __TURBOPACK__default__export__ = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/src/components/swipe/SwipeActionButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartFilled.js [app-client] (ecmascript) <export default as HeartFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [app-client] (ecmascript) <export default as StarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ThunderboltFilled.js [app-client] (ecmascript) <export default as ThunderboltFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript) <export default as CloseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UndoOutlined.js [app-client] (ecmascript) <export default as UndoOutlined>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
const SwipeActionButtons = ({ onUndo, onReject, onSuperLike, onLike, onBoost, canUndo, className, style })=>{
    _s();
    const screens = useBreakpoint();
    const isMobile = screens.xs || screens.sm;
    // Button size adjustments
    const baseSize = isMobile ? 64 : 72;
    const largeSize = isMobile ? 80 : 90;
    const iconBase = isMobile ? 20 : 24;
    const iconLarge = isMobile ? 26 : 30;
    const hoverStyle = (bg, color)=>({
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            touchAction: 'manipulation',
            '&:hover': {
                background: bg,
                color,
                transform: 'scale(1.06)',
                boxShadow: `0 6px 20px ${bg}40`
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
        className: className,
        style: {
            ...style,
            justifyContent: 'center',
            flexWrap: 'nowrap',
            gap: isMobile ? 14 : 20
        },
        align: "center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                shape: "circle",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UndoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UndoOutlined$3e$__["UndoOutlined"], {
                    style: {
                        fontSize: iconBase
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                    lineNumber: 71,
                    columnNumber: 15
                }, void 0),
                disabled: !canUndo,
                style: {
                    width: baseSize,
                    height: baseSize,
                    background: 'white',
                    border: `2px solid ${canUndo ? '#f43f5e' : '#ccc'}`,
                    color: canUndo ? '#f43f5e' : '#ccc',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    opacity: canUndo ? 1 : 0.6,
                    ...hoverStyle('#f43f5e', 'white')
                },
                onClick: onUndo
            }, void 0, false, {
                fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                shape: "circle",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CloseOutlined$3e$__["CloseOutlined"], {
                    style: {
                        fontSize: iconLarge
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                    lineNumber: 89,
                    columnNumber: 15
                }, void 0),
                style: {
                    width: largeSize,
                    height: largeSize,
                    background: 'white',
                    border: '2px solid #ef4444',
                    color: '#ef4444',
                    boxShadow: '0 4px 15px rgba(239,68,68,0.3)',
                    ...hoverStyle('#ef4444', 'white')
                },
                onClick: onReject
            }, void 0, false, {
                fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                shape: "circle",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__["StarFilled"], {
                    style: {
                        fontSize: iconBase
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                    lineNumber: 105,
                    columnNumber: 15
                }, void 0),
                style: {
                    width: baseSize,
                    height: baseSize,
                    background: 'white',
                    border: '2px solid #3b82f6',
                    color: '#3b82f6',
                    boxShadow: '0 4px 15px rgba(59,130,246,0.3)',
                    ...hoverStyle('#3b82f6', 'white')
                },
                onClick: onSuperLike
            }, void 0, false, {
                fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                shape: "circle",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartFilled$3e$__["HeartFilled"], {
                    style: {
                        fontSize: iconLarge
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                    lineNumber: 121,
                    columnNumber: 15
                }, void 0),
                style: {
                    width: largeSize,
                    height: largeSize,
                    background: '#10b981',
                    border: '2px solid #10b981',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(16,185,129,0.4)',
                    ...hoverStyle('#10b981', 'white')
                },
                onClick: onLike
            }, void 0, false, {
                fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                shape: "circle",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ThunderboltFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThunderboltFilled$3e$__["ThunderboltFilled"], {
                    style: {
                        fontSize: iconBase
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                    lineNumber: 137,
                    columnNumber: 15
                }, void 0),
                style: {
                    width: baseSize,
                    height: baseSize,
                    background: 'white',
                    border: '2px solid #a855f7',
                    color: '#a855f7',
                    boxShadow: '0 4px 15px rgba(168,85,247,0.3)',
                    ...hoverStyle('#a855f7', 'white')
                },
                onClick: onBoost
            }, void 0, false, {
                fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/swipe/SwipeActionButtons.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SwipeActionButtons, "AStFEIQdOiA62uuZ+qEx2bRE/Co=", false, function() {
    return [
        useBreakpoint
    ];
});
_c = SwipeActionButtons;
SwipeActionButtons.displayName = 'SwipeActionButtons';
const __TURBOPACK__default__export__ = SwipeActionButtons;
var _c;
__turbopack_context__.k.register(_c, "SwipeActionButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/swipe/AdCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/card/index.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const AdCard = ({ ad, onSwipe, style, triggerSwipe, onSwipeComplete })=>{
    _s();
    const [showClickPrompt, setShowClickPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        -300,
        0,
        300
    ], [
        -30,
        0,
        30
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        -250,
        -150,
        0,
        150,
        250
    ], [
        0,
        1,
        1,
        1,
        0
    ]);
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"])();
    // --- external trigger swipe animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdCard.useEffect": ()=>{
            if (triggerSwipe) {
                const targetX = triggerSwipe === 'right' ? 400 : -400;
                animate(scope.current, {
                    x: targetX,
                    opacity: 0,
                    rotate: triggerSwipe === 'right' ? 30 : -30
                }, {
                    duration: 0.4,
                    ease: 'easeOut'
                }).then({
                    "AdCard.useEffect": ()=>{
                        onSwipe(triggerSwipe);
                        onSwipeComplete?.();
                    }
                }["AdCard.useEffect"]);
            }
        }
    }["AdCard.useEffect"], [
        triggerSwipe,
        animate,
        scope,
        onSwipe,
        onSwipeComplete
    ]);
    // --- handle swipe gesture
    const handleDragEnd = (_, info)=>{
        const threshold = 120;
        if (Math.abs(info.offset.x) > threshold) {
            const direction = info.offset.x > 0 ? 'right' : 'left';
            const targetX = direction === 'right' ? 400 : -400;
            animate(scope.current, {
                x: targetX,
                opacity: 0
            }, {
                duration: 0.3
            }).then(()=>onSwipe(direction));
        }
    };
    const handleCtaClick = ()=>{
        setShowClickPrompt(true);
        setTimeout(()=>setShowClickPrompt(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: scope,
        style: {
            position: 'absolute',
            inset: 0,
            cursor: 'grab',
            touchAction: 'pan-y',
            width: '100%',
            height: '100%',
            x,
            y,
            rotate,
            opacity,
            ...style
        },
        drag: true,
        dragConstraints: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        dragElastic: 0.7,
        whileTap: {
            cursor: 'grabbing',
            scale: 0.97
        },
        onDragEnd: handleDragEnd,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
            style: {
                width: '100%',
                height: '100%',
                borderRadius: 18,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
                border: '2px solid #facc15',
                background: '#000',
                display: 'flex',
                flexDirection: 'column'
            },
            bodyStyle: {
                padding: 0,
                height: '100%'
            },
            bordered: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: "gold",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                        lineNumber: 101,
                        columnNumber: 27
                    }, void 0),
                    style: {
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 10,
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        padding: '4px 8px'
                    },
                    children: "Sponsored"
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${ad.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 40%, rgba(0,0,0,0.95))'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                    lineNumber: 116,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: 'absolute',
                        top: 56,
                        left: 24,
                        border: '3px solid #10b981',
                        color: '#10b981',
                        padding: '6px 18px',
                        borderRadius: 10,
                        transform: 'rotate(-15deg)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
                            0,
                            150
                        ], [
                            0,
                            1
                        ])
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        level: 4,
                        style: {
                            margin: 0,
                            fontSize: '1rem'
                        },
                        children: "INTERESTED"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: 'absolute',
                        top: 56,
                        right: 24,
                        border: '3px solid #6b7280',
                        color: '#6b7280',
                        padding: '6px 18px',
                        borderRadius: 10,
                        transform: 'rotate(15deg)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
                            -150,
                            0
                        ], [
                            1,
                            0
                        ])
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        level: 4,
                        style: {
                            margin: 0,
                            fontSize: '1rem'
                        },
                        children: "SKIP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                        lineNumber: 169,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: 'env(safe-area-inset-bottom, 16px)',
                        left: 0,
                        right: 0,
                        padding: '0 16px 16px',
                        color: 'white'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                    align: "center",
                                    justify: "flex-start",
                                    gap: 8,
                                    style: {
                                        marginBottom: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                            level: 4,
                                            style: {
                                                color: 'white',
                                                margin: 0,
                                                fontSize: '1.1rem'
                                            },
                                            children: ad.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe/AdCard.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            color: "default",
                                            style: {
                                                color: 'white',
                                                borderColor: 'rgba(255,255,255,0.5)',
                                                fontSize: '0.7rem'
                                            },
                                            children: ad.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe/AdCard.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                    level: 5,
                                    style: {
                                        color: 'white',
                                        marginBottom: 4,
                                        fontSize: '0.95rem',
                                        lineHeight: 1.3
                                    },
                                    children: ad.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                                    lineNumber: 202,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                    style: {
                                        color: 'rgba(255,255,255,0.85)',
                                        fontSize: '0.8rem',
                                        lineHeight: 1.4
                                    },
                                    children: ad.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                                    lineNumber: 213,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/swipe/AdCard.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                            gap: 8,
                            wrap: "wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    block: true,
                                    size: "large",
                                    onClick: handleCtaClick,
                                    style: {
                                        flex: 1,
                                        backgroundColor: 'white',
                                        color: '#111',
                                        border: 'none',
                                        fontWeight: 500,
                                        minHeight: 44
                                    },
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                                        lineNumber: 237,
                                        columnNumber: 35
                                    }, void 0),
                                    children: ad.callToAction
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    size: "large",
                                    shape: "circle",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                                        lineNumber: 245,
                                        columnNumber: 35
                                    }, void 0),
                                    onClick: ()=>onSwipe('left'),
                                    style: {
                                        width: 44,
                                        height: 44,
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        color: 'white',
                                        backdropFilter: 'blur(4px)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/swipe/AdCard.tsx",
                            lineNumber: 224,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                display: 'block',
                                textAlign: 'center',
                                marginTop: 10,
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: 11
                            },
                            children: "Swipe right if interested • Swipe left to skip"
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/AdCard.tsx",
                            lineNumber: 258,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                showClickPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 16px'
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'white',
                            color: '#111',
                            padding: '20px',
                            borderRadius: 10,
                            textAlign: 'center',
                            width: '100%',
                            maxWidth: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                strong: true,
                                children: "This would open:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/AdCard.tsx",
                                lineNumber: 299,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8,
                                    wordBreak: 'break-all',
                                    color: '#1677ff',
                                    fontSize: 13
                                },
                                children: ad.url
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/AdCard.tsx",
                                lineNumber: 300,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/swipe/AdCard.tsx",
                        lineNumber: 288,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/AdCard.tsx",
                    lineNumber: 273,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe/AdCard.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/AdCard.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdCard, "Q2iDBJtvdjRYkS6ZtHb6crydArM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AdCard;
AdCard.displayName = 'AdCard';
const __TURBOPACK__default__export__ = AdCard;
var _c;
__turbopack_context__.k.register(_c, "AdCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/swipe/SwipeCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/card/index.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript) <export default as CheckCircleFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const SwipeCard = ({ profile, onSwipe, style, triggerSwipe, onSwipeComplete })=>{
    _s();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        -300,
        0,
        300
    ], [
        -30,
        0,
        30
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        -250,
        -150,
        0,
        150,
        250
    ], [
        0,
        1,
        1,
        1,
        0
    ]);
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"])();
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwipeCard.useEffect": ()=>{
            if (triggerSwipe && !isAnimating) {
                setIsAnimating(true);
                const targetX = triggerSwipe === 'right' ? 500 : -500;
                animate(scope.current, {
                    x: targetX,
                    opacity: 0,
                    rotate: triggerSwipe === 'right' ? 30 : -30
                }, {
                    duration: 0.45,
                    ease: 'easeOut'
                }).then({
                    "SwipeCard.useEffect": ()=>{
                        onSwipe(triggerSwipe);
                        onSwipeComplete?.();
                        setIsAnimating(false);
                    }
                }["SwipeCard.useEffect"]);
            }
        }
    }["SwipeCard.useEffect"], [
        triggerSwipe,
        animate,
        scope,
        onSwipe,
        onSwipeComplete,
        isAnimating
    ]);
    const handleDragEnd = (_, info)=>{
        if (isAnimating) return;
        const threshold = 180;
        if (Math.abs(info.offset.x) > threshold) {
            const direction = info.offset.x > 0 ? 'right' : 'left';
            const targetX = direction === 'right' ? 500 : -500;
            setIsAnimating(true);
            animate(scope.current, {
                x: targetX,
                opacity: 0
            }, {
                duration: 0.35,
                ease: 'easeOut'
            }).then(()=>{
                onSwipe(direction);
                setIsAnimating(false);
            });
        } else {
            animate(scope.current, {
                x: 0,
                y: 0,
                rotate: 0
            }, {
                type: 'spring',
                stiffness: 260,
                damping: 30
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: scope,
        style: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            cursor: isAnimating ? 'default' : 'grab',
            x,
            y,
            rotate,
            opacity,
            ...style
        },
        drag: !isAnimating,
        dragConstraints: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        dragElastic: 0.7,
        whileTap: {
            cursor: 'grabbing',
            scale: 0.97
        },
        onDragEnd: handleDragEnd,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
            style: {
                width: '100%',
                height: '100%',
                borderRadius: 18,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
                background: '#000'
            },
            bodyStyle: {
                padding: 0,
                height: '100%'
            },
            bordered: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: 'rgba(0, 0, 0, 0.6)',
                        borderRadius: 20,
                        padding: '5px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        backdropFilter: 'blur(10px)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: '#10b981'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                            style: {
                                color: 'white',
                                fontSize: 12,
                                fontWeight: 500
                            },
                            children: "Recently Active"
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${profile.images[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 30%, transparent 50%, rgba(0,0,0,0.85) 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: 'absolute',
                        top: 64,
                        left: 32,
                        border: '4px solid #10b981',
                        color: '#10b981',
                        padding: '10px 24px',
                        borderRadius: 12,
                        transform: 'rotate(-20deg)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
                            0,
                            150
                        ], [
                            0,
                            1
                        ]),
                        scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
                            0,
                            150
                        ], [
                            0.8,
                            1
                        ])
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        level: 3,
                        style: {
                            margin: 0,
                            fontWeight: 700
                        },
                        children: "LIKE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        position: 'absolute',
                        top: 64,
                        right: 32,
                        border: '4px solid #ef4444',
                        color: '#ef4444',
                        padding: '10px 24px',
                        borderRadius: 12,
                        transform: 'rotate(20deg)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
                            -150,
                            0
                        ], [
                            1,
                            0
                        ]),
                        scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
                            -150,
                            0
                        ], [
                            1,
                            0.8
                        ])
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        level: 3,
                        style: {
                            margin: 0,
                            fontWeight: 700
                        },
                        children: "NOPE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: 20,
                        left: 0,
                        right: 0,
                        padding: '0 20px',
                        color: 'white'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                            level: 3,
                                            style: {
                                                color: 'white',
                                                margin: 0,
                                                fontWeight: 600
                                            },
                                            children: [
                                                profile.name,
                                                ", ",
                                                profile.age
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleFilled$3e$__["CheckCircleFilled"], {
                                            style: {
                                                color: '#1DA1F2',
                                                fontSize: 18,
                                                filter: 'drop-shadow(0 0 4px rgba(29,161,242,0.5))'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 14,
                                            color: "rgba(255,255,255,0.8)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                            style: {
                                                color: 'rgba(255,255,255,0.8)',
                                                fontSize: 14
                                            },
                                            children: [
                                                Math.round(profile.distance / 1000),
                                                " km away"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'flex-end'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                shape: "circle",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    size: 18,
                                    color: "#10b981"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                    lineNumber: 219,
                                    columnNumber: 21
                                }, void 0),
                                style: {
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(6px)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                    width: 44,
                                    height: 44
                                },
                                onMouseDown: (e)=>e.currentTarget.style.transform = 'scale(0.9)',
                                onMouseUp: (e)=>e.currentTarget.style.transform = 'scale(1)'
                            }, void 0, false, {
                                fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/swipe/SwipeCard.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/swipe/SwipeCard.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/swipe/SwipeCard.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SwipeCard, "JCn9VZwPXiJ/d8CNxccQsFuyTdI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = SwipeCard;
SwipeCard.displayName = 'SwipeCard';
const __TURBOPACK__default__export__ = SwipeCard;
var _c;
__turbopack_context__.k.register(_c, "SwipeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(authenticated)/swipe/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FireFilled.js [app-client] (ecmascript) <export default as FireFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/SwipeActionButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$AdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/AdCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/swipe/SwipeCard.tsx [app-client] (ecmascript)");
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
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
const Swipe = ()=>{
    _s();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardStack"])());
    const [triggerSwipe, setTriggerSwipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swipeHistory, setSwipeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const screens = useBreakpoint();
    const handleSwipe = (direction)=>{
        setCards((prev)=>prev.slice(0, -1));
    };
    const handleUndo = ()=>{
        const lastSwipe = swipeHistory.pop();
        if (lastSwipe) {
            setCards((prev)=>[
                    ...prev,
                    lastSwipe.card
                ]);
            setSwipeHistory([
                ...swipeHistory
            ]);
        }
    };
    const handleReject = ()=>setTriggerSwipe('left');
    const handleLike = ()=>setTriggerSwipe('right');
    const handleSuperLike = ()=>setTriggerSwipe('right');
    const handleBoost = ()=>console.log('Boost activated!');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: '100dvh',
                background: '#0a0a12',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                paddingBottom: screens.xs ? '80px' : '100px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        width: '100%',
                        maxWidth: screens.md ? 500 : '100%',
                        padding: screens.xs ? '0.5rem' : '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        position: 'relative'
                    },
                    children: cards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        direction: "vertical",
                        align: "center",
                        style: {
                            padding: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                align: "center",
                                justify: "center",
                                style: {
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(to right, rgba(236,72,153,0.2), rgba(239,68,68,0.2))'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FireFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FireFilled$3e$__["FireFilled"], {
                                    style: {
                                        fontSize: 36,
                                        color: '#ec4899'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 4,
                                style: {
                                    color: 'white',
                                    marginBottom: 4,
                                    textAlign: 'center'
                                },
                                children: "You're all caught up!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                style: {
                                    color: '#aaa',
                                    textAlign: 'center'
                                },
                                children: "Check back later for new profiles"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                shape: "round",
                                style: {
                                    background: 'linear-gradient(to right, #ec4899, #ef4444)',
                                    border: 'none',
                                    marginTop: 12
                                },
                                onClick: ()=>setCards((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardStack"])()),
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            width: '100%',
                            height: screens.xs ? '70vh' : 'calc(100vh - 220px)',
                            maxHeight: '800px',
                            margin: '0 auto'
                        },
                        children: cards.slice(-3).reverse().map((card, index)=>{
                            const isTopCard = index === 0;
                            const cardStyle = {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                transform: `scale(${1 - index * 0.04}) translateY(${index * -8}px)`,
                                zIndex: 50 - index,
                                opacity: index === 0 ? 1 : 0.8
                            };
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProfile"])(card)) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    profile: card,
                                    onSwipe: handleSwipe,
                                    style: cardStyle,
                                    triggerSwipe: isTopCard ? triggerSwipe : null,
                                    onSwipeComplete: ()=>setTriggerSwipe(null)
                                }, card.id, false, {
                                    fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0));
                            } else {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$AdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdCard"], {
                                    ad: card,
                                    onSwipe: handleSwipe,
                                    style: cardStyle,
                                    triggerSwipe: isTopCard ? triggerSwipe : null,
                                    onSwipeComplete: ()=>setTriggerSwipe(null)
                                }, card.id, false, {
                                    fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                cards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        bottom: screens.xs ? 16 : 32,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 100,
                        width: screens.xs ? '90%' : 'auto',
                        display: 'flex',
                        justifyContent: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$swipe$2f$SwipeActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onUndo: handleUndo,
                        onReject: handleReject,
                        onSuperLike: handleSuperLike,
                        onLike: handleLike,
                        onBoost: handleBoost,
                        canUndo: swipeHistory.length > 0
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(authenticated)/swipe/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Swipe, "I7dpFCvZ4JejIWThzIg7jvCO/EI=", false, function() {
    return [
        useBreakpoint
    ];
});
_c = Swipe;
const __TURBOPACK__default__export__ = Swipe;
var _c;
__turbopack_context__.k.register(_c, "Swipe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d09edb34._.js.map