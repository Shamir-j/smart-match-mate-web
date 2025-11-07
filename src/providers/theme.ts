// Theme utilities and constants for the One Night Stand dating app
// This file provides easy access to theme colors and common styles throughout the app
// src/providers/theme.ts
import { THEME_COLORS, COMMON_STYLES } from './ClientWrapper';

// 💖 Dating App Specific Theme Extensions
export const DATING_THEME = {
    // Extend base theme with dating-specific colors
    colors: {
        ...THEME_COLORS,

        // Match status colors
        newMatch: '#FF6B9D',        // Bright pink for new matches
        superLike: '#FFD700',       // Gold for super likes  
        online: '#52C41A',          // Green for online status
        recently: '#FAAD14',        // Orange for recently active
        offline: '#8C8C8C',         // Gray for offline

        // Interaction colors
        like: THEME_COLORS.primary,     // Pink for likes
        pass: '#8C8C8C',                // Gray for pass
        block: THEME_COLORS.danger,     // Red for block
        report: '#FA541C',              // Orange for report

        // Chat colors
        myMessage: THEME_COLORS.primary,    // Pink bubble for sent messages
        theirMessage: '#F0F0F0',            // Light gray for received messages
        typing: THEME_COLORS.textSecondary, // Gray for typing indicator
        delivered: THEME_COLORS.success,    // Green for delivered
        read: THEME_COLORS.primary,         // Pink for read

        // Profile verification
        verified: '#1890FF',        // Blue checkmark
        premium: '#FFD700',         // Gold for premium users
    },

    // Gradients for dating app aesthetics
    gradients: {
        primary: `linear-gradient(135deg, ${THEME_COLORS.primary} 0%, ${THEME_COLORS.secondary} 100%)`,
        dark: `linear-gradient(to bottom, ${THEME_COLORS.darkBackground}, ${THEME_COLORS.primary}, ${THEME_COLORS.darkBackground})`,
        card: `linear-gradient(145deg, #ffffff 0%, #fafafa 100%)`,
        love: `linear-gradient(45deg, ${THEME_COLORS.primary}, ${THEME_COLORS.love})`,
        sunset: `linear-gradient(135deg, #FF3A8A 0%, #FF6B9D 50%, #FFB6C1 100%)`,
    },

    // Dating app specific shadows
    shadows: {
        card: '0 8px 32px rgba(255, 58, 138, 0.12)',
        hover: '0 12px 40px rgba(255, 58, 138, 0.20)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        strong: '0 16px 48px rgba(255, 58, 138, 0.25)',
    },

    // Animation values
    animations: {
        heartBeat: {
            animation: 'heartbeat 1.5s ease-in-out infinite',
        },
        pulse: {
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        bounce: {
            animation: 'bounce 1s infinite',
        },
        fadeIn: {
            animation: 'fadeIn 0.3s ease-in-out',
        },
    },

    // Border radius values for consistent design
    borderRadius: {
        small: 8,
        medium: 12,
        large: 16,
        xlarge: 20,
        round: 50,
        pill: 25,
    },

    // Spacing values
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
    },
};

// 💖 Component Style Helpers
export const createDatingStyle = {
    // Card styles for profiles, matches, etc.
    profileCard: {
        backgroundColor: DATING_THEME.colors.cardBackground,
        borderRadius: DATING_THEME.borderRadius.large,
        boxShadow: DATING_THEME.shadows.card,
        border: `1px solid ${DATING_THEME.colors.borderLight}`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },

    // Button styles for different actions
    likeButton: {
        backgroundColor: DATING_THEME.colors.like,
        borderColor: DATING_THEME.colors.like,
        borderRadius: DATING_THEME.borderRadius.round,
        color: 'white',
        fontWeight: 600,
        transition: 'all 0.2s ease',
    },

    passButton: {
        backgroundColor: 'white',
        borderColor: DATING_THEME.colors.pass,
        color: DATING_THEME.colors.pass,
        borderRadius: DATING_THEME.borderRadius.round,
        fontWeight: 600,
        transition: 'all 0.2s ease',
    },

    // Message bubble styles
    myMessageBubble: {
        backgroundColor: DATING_THEME.colors.myMessage,
        color: 'white',
        borderRadius: '20px 20px 4px 20px',
        padding: '12px 16px',
        maxWidth: '70%',
        marginLeft: 'auto',
    },

    theirMessageBubble: {
        backgroundColor: DATING_THEME.colors.theirMessage,
        color: DATING_THEME.colors.textPrimary,
        borderRadius: '20px 20px 20px 4px',
        padding: '12px 16px',
        maxWidth: '70%',
        marginRight: 'auto',
    },

    // Status indicators
    onlineIndicator: {
        width: 12,
        height: 12,
        backgroundColor: DATING_THEME.colors.online,
        borderRadius: '50%',
        border: '2px solid white',
        position: 'absolute' as const,
        right: 0,
        bottom: 0,
    },

    verifiedBadge: {
        color: DATING_THEME.colors.verified,
        fontSize: 16,
        marginLeft: 4,
    },

    // Layout helpers
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    flexBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // Text styles
    heading: {
        color: DATING_THEME.colors.textPrimary,
        fontWeight: 600,
        lineHeight: 1.2,
    },

    subtitle: {
        color: DATING_THEME.colors.textSecondary,
        fontWeight: 400,
        lineHeight: 1.4,
    },
};

// 💖 Utility functions
export const datingUtils = {
    // Get age color based on preference match
    getAgeColor: (age: number, preferredRange?: [number, number]) => {
        if (!preferredRange) return DATING_THEME.colors.textPrimary;
        const [min, max] = preferredRange;
        return age >= min && age <= max
            ? DATING_THEME.colors.success
            : DATING_THEME.colors.textSecondary;
    },

    // Get distance color based on proximity
    getDistanceColor: (distance: number) => {
        if (distance <= 5) return DATING_THEME.colors.success;
        if (distance <= 15) return DATING_THEME.colors.warning;
        return DATING_THEME.colors.textSecondary;
    },

    // Get online status style
    getOnlineStatus: (isOnline: boolean, lastSeen?: Date) => {
        if (isOnline) {
            return { color: DATING_THEME.colors.online, text: 'Online now' };
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
    },
};

// Export everything for easy imports
export { THEME_COLORS, COMMON_STYLES };
export default DATING_THEME;