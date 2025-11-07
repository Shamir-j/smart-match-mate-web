// src/providers/ClientWrapper.tsx
"use client";

import { ConfigProvider, Spin, Button, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { HeartFilled, FrownOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

// 💖 Dating App Color Palette - Romantic & Modern Theme
const THEME_COLORS = {
    // Primary Dating App Colors
    primary: '#FF3A8A',      // Hot pink - main brand color
    secondary: '#FF6B9D',    // Lighter pink for secondary elements
    accent: '#C41E3A',       // Deep red for special highlights
    love: '#E91E63',         // Love/heart color

    // Status Colors
    success: '#52C41A',      // Green for matches/success
    warning: '#FAAD14',      // Orange for warnings
    danger: '#FF4D4F',       // Red for errors/blocks
    info: '#1890FF',         // Blue for information

    // Layout & Background Colors
    background: '#FAFAFA',   // Light gray background
    cardBackground: '#FFFFFF', // Pure white cards
    darkBackground: '#000000', // Black sections
    gradientStart: '#000000', // Black gradient start
    gradientEnd: '#FF3A8A',   // Pink gradient end

    // Text Colors
    textPrimary: '#262626',   // Dark gray for primary text
    textSecondary: '#8C8C8C', // Medium gray for secondary text
    textLight: '#BFBFBF',     // Light gray for disabled text
    textWhite: '#FFFFFF',     // White text for dark backgrounds

    // Border & Divider Colors
    borderLight: '#F0F0F0',   // Very light borders
    borderDefault: '#D9D9D9', // Default borders
    borderPink: '#FFE4E1',    // Light pink borders

    // Interactive Colors
    hoverPink: 'rgba(255, 58, 138, 0.06)', // Pink hover
    activePink: 'rgba(255, 58, 138, 0.12)', // Pink active
    hoverBlack: 'rgba(0, 0, 0, 0.04)',     // Black hover
};

// 💖 Common Styles - Dating App Specific
const COMMON_STYLES = {
    // Layout Styles
    fullHeight: { height: '100vh' },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noOverflow: { overflow: 'hidden' },

    // Dating App Gradients
    pinkGradient: {
        background: `linear-gradient(135deg, ${THEME_COLORS.primary} 0%, ${THEME_COLORS.secondary} 100%)`,
    },
    darkGradient: {
        background: `linear-gradient(to bottom, ${THEME_COLORS.darkBackground}, ${THEME_COLORS.primary}, ${THEME_COLORS.darkBackground})`,
    },

    // Scrollbar Styles
    customScrollbar: {
        scrollbarWidth: 'thin' as const,
        scrollbarColor: `${THEME_COLORS.borderLight} ${THEME_COLORS.background}`,
    },

    // Shadow Styles
    cardShadow: {
        boxShadow: '0 8px 32px rgba(255, 58, 138, 0.12)',
    },
    softShadow: {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },

    // Animation Styles
    smoothTransition: {
        transition: 'all 0.3s ease',
    },
    heartBeat: {
        animation: 'heartbeat 1.5s ease-in-out infinite',
    },

    // Border Radius
    roundedCard: {
        borderRadius: 16,
    },
    roundedButton: {
        borderRadius: 25,
    },
};

// 📤 Export theme colors for use in other components
export { THEME_COLORS, COMMON_STYLES };

// Move outside the component for stability
interface QueryClientDefaultOptions {
    queries: {
        retry: number;
        staleTime: number;
        refetchOnWindowFocus: boolean;
        refetchOnReconnect: boolean;
        placeholderData: (prev: unknown) => unknown;
    };
}

const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            placeholderData: (prev: unknown): unknown => prev,
        },
    } as QueryClientDefaultOptions,
});

const ErrorFallback = ({
    error,
    resetErrorBoundary,
}: {
    error: Error;
    resetErrorBoundary: () => void;
}) => (
    <div style={{
        padding: 48,
        textAlign: "center",
        backgroundColor: THEME_COLORS.cardBackground,
        borderRadius: 16,
        margin: "100px auto",
        maxWidth: 500,
        ...COMMON_STYLES.cardShadow,
        border: `1px solid ${THEME_COLORS.borderPink}`
    }}>
        <FrownOutlined style={{ fontSize: 64, color: THEME_COLORS.danger }} />
        <Title level={4} style={{ color: THEME_COLORS.textPrimary, marginTop: 16 }}>
            Oops! Something went wrong
        </Title>
        <Text style={{ color: THEME_COLORS.textSecondary }}>
            Don't worry, it's not you - it's us! Let's try again.
        </Text>
        <div style={{ marginTop: 24 }}>
            <Button
                type="primary"
                size="large"
                onClick={resetErrorBoundary}
                style={{
                    backgroundColor: THEME_COLORS.primary,
                    borderColor: THEME_COLORS.primary,
                    borderRadius: 25,
                    padding: '0 30px',
                    height: 44
                }}
            >
                Try Again
            </Button>
        </div>
    </div>
);

// Global theme initialization flag to prevent re-initialization on navigation
let globalThemeInitialized = false;

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [themeReady, setThemeReady] = useState(globalThemeInitialized);

    useEffect(() => {
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
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
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
                        controlHeightSM: 36,
                    },
                    components: {
                        Layout: {
                            headerBg: THEME_COLORS.cardBackground,
                            siderBg: THEME_COLORS.cardBackground,
                            bodyBg: THEME_COLORS.background,
                            headerHeight: 70,
                            triggerBg: THEME_COLORS.primary,
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
                            collapsedIconSize: 20,
                        },
                        Card: {
                            colorBgContainer: THEME_COLORS.cardBackground,
                            colorBorderSecondary: THEME_COLORS.borderLight,
                            borderRadiusLG: 16,
                            paddingLG: 24,
                            boxShadowTertiary: '0 8px 32px rgba(255, 58, 138, 0.08)',
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
                            fontWeight: 500,
                        },
                        Table: {
                            headerBg: THEME_COLORS.cardBackground,
                            headerColor: THEME_COLORS.textPrimary,
                            rowHoverBg: THEME_COLORS.hoverPink,
                            borderColor: THEME_COLORS.borderLight,
                            colorBgContainer: THEME_COLORS.cardBackground,
                            cellPaddingBlock: 12,
                            cellPaddingInline: 16,
                            borderRadiusLG: 12,
                        },
                        Input: {
                            colorBgContainer: THEME_COLORS.cardBackground,
                            colorBorder: THEME_COLORS.borderDefault,
                            colorTextPlaceholder: THEME_COLORS.textLight,
                            activeBorderColor: THEME_COLORS.primary,
                            hoverBorderColor: THEME_COLORS.primary,
                            borderRadius: 12,
                            controlHeight: 44,
                            paddingInline: 16,
                        },
                        Typography: {
                            colorTextHeading: THEME_COLORS.textPrimary,
                            colorText: THEME_COLORS.textPrimary,
                            colorTextSecondary: THEME_COLORS.textSecondary,
                            colorTextDisabled: THEME_COLORS.textLight,
                            fontFamily: 'Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        },
                        Tabs: {
                            inkBarColor: THEME_COLORS.primary,
                            colorBorder: THEME_COLORS.borderLight,
                            itemSelectedColor: THEME_COLORS.primary,
                            itemHoverColor: THEME_COLORS.primary,
                            itemColor: THEME_COLORS.textSecondary,
                            cardBg: THEME_COLORS.cardBackground,
                            borderRadiusLG: 12,
                        },
                        Tag: {
                            defaultBg: THEME_COLORS.borderPink,
                            defaultColor: THEME_COLORS.primary,
                            colorBorder: THEME_COLORS.borderPink,
                            borderRadiusSM: 12,
                        },
                        Progress: {
                            defaultColor: THEME_COLORS.primary,
                            remainingColor: THEME_COLORS.borderLight,
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
                            paddingLG: 24,
                        },
                        Drawer: {
                            colorBgElevated: THEME_COLORS.cardBackground,
                            colorText: THEME_COLORS.textPrimary,
                            borderRadiusLG: 16,
                        },
                        Select: {
                            colorBgElevated: THEME_COLORS.cardBackground,
                            colorBorder: THEME_COLORS.borderLight,
                            boxShadowSecondary: '0 6px 16px 0 rgba(255, 58, 138, 0.08), 0 3px 6px -4px rgba(255, 58, 138, 0.12), 0 9px 28px 8px rgba(255, 58, 138, 0.05)',
                            borderRadiusLG: 12,
                            controlHeight: 44,
                        },
                        Badge: {
                            colorError: THEME_COLORS.primary,
                            colorErrorHover: THEME_COLORS.secondary,
                        },
                        Avatar: {
                            borderRadius: 50,
                        },
                        Switch: {
                            colorPrimary: THEME_COLORS.primary,
                            colorPrimaryHover: THEME_COLORS.secondary,
                        },
                        Slider: {
                            colorPrimary: THEME_COLORS.primary,
                            colorPrimaryBorder: THEME_COLORS.primary,
                        },
                    },
                }}
            >
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    {themeReady ? (
                        children
                    ) : (
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                            background: COMMON_STYLES.darkGradient.background,
                            gap: "24px",
                        }}>
                            <HeartFilled 
                                style={{ 
                                    fontSize: 48, 
                                    color: THEME_COLORS.primary,
                                    ...COMMON_STYLES.heartBeat
                                }} 
                            />
                            <Spin 
                                size="large" 
                                tip={
                                    <Text style={{ 
                                        color: THEME_COLORS.textWhite,
                                        fontSize: 16,
                                        fontWeight: 500,
                                        marginTop: 16
                                    }}>
                                        Initializing One Night Stand...
                                    </Text>
                                }
                            >
                                <div style={{ minHeight: "60px", minWidth: "60px" }} />
                            </Spin>
                        </div>
                    )}
                </ErrorBoundary>
            </ConfigProvider>
        </QueryClientProvider>
    );
}