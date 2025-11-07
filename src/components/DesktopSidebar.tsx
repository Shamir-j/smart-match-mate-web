// src/app/(authenticated)/layout.tsx
'use client';

import { Layout, Grid, Avatar, Typography, Space } from 'antd';
import { THEME_COLORS, COMMON_STYLES } from '@/providers/theme';
import { FireOutlined, TeamOutlined, MessageOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

/* ------------------------------------------------------------------ */
/*  Mock data (replace with real API later)                           */
/* ------------------------------------------------------------------ */
const currentUser = {
    id: '1',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    unreadMessages: 3,
};

const navItems = [
    { key: '/home', icon: FireOutlined, label: 'Discover' },
    { key: '/app', icon: TeamOutlined, label: 'Matches', badge: 12, },
    { key: '/chat', icon: MessageOutlined, label: 'Messages', badge: currentUser.unreadMessages, },
    { key: '/profile/edit', icon: UserOutlined, label: 'Profile' },
] as const;

/* ------------------------------------------------------------------ */
/*  Desktop left panel – matches grid (Tinder style)                  */
/* ------------------------------------------------------------------ */
const DesktopSidebar: React.FC = () => {
    const matches = [
        {
            id: '1',
            name: 'Brender',
            avatar:
                'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
            gold: true,
        },
        {
            id: '2',
            name: 'Tiffany',
            avatar:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
        },
        {
            id: '3',
            name: 'Matheu',
            avatar:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
        {
            id: '4',
            name: 'Lindra',
            avatar:
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
        },
        {
            id: '5',
            name: 'Sharon',
            avatar:
                'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
        },
        {
            id: '6',
            name: 'Mel',
            avatar:
                'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop',
        },
        {
            id: '7',
            name: 'Becky',
            avatar:
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
        },
        {
            id: '8',
            name: 'Rish',
            avatar:
                'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop',
        },
    ];


    //   style={{
        //     background: '#fff',
        //     borderRight: '1px solid #f0f0f0',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     padding: '1rem',
        //   }}
        // >


    return (
        <Sider
            width={'20%'}
            style={{
                background: THEME_COLORS.cardBackground,
                borderRight: `1px solid ${THEME_COLORS.borderLight}`,
                position: 'fixed',
                flexDirection: 'column',
                display: 'flex',
                left: 0,
                top: 0,
                height: '100vh',
                zIndex: 1000,
                ...COMMON_STYLES.cardShadow,
            }}
        >
            {/* Gradient Header */}
            <div
                style={{
                    ...COMMON_STYLES.pinkGradient,
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* User avatar (top-left) */}
                <Avatar
                    src={currentUser.avatar}
                    size={36}
                    style={{
                        position: 'absolute',
                        left: 20,
                        top: 20,
                        border: '2px solid white',
                    }}
                />

                {/* Center icons */}
                <Space size={16}>
                    {navItems.slice(0, 3).map((i) => {
                        const Icon = i.icon;
                        return (
                            <div
                                key={i.key}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.2)',
                                    ...COMMON_STYLES.flexCenter,
                                }}
                            >
                                <Icon style={{ color: 'white', fontSize: 20 }} />
                            </div>
                        );
                    })}
                </Space>

                {/* Settings (top-right) */}
                <SettingOutlined
                    style={{
                        position: 'absolute',
                        right: 20,
                        top: 20,
                        color: 'white',
                        fontSize: 20,
                    }}
                />
            </div>

            {/* Tabs – Matches / Messages */}
            <div
                style={{
                    display: 'flex',
                    borderBottom: `1px solid ${THEME_COLORS.borderLight}`,
                }}
            >
                {['Matches', 'Messages'].map((tab, idx) => (
                    <div
                        key={tab}
                        style={{
                            flex: 1,
                            padding: '12px 0',
                            textAlign: 'center',
                            borderBottom: `3px solid ${idx === 0 ? THEME_COLORS.primary : 'transparent'
                                }`,
                        }}
                    >
                        <Text
                            strong={idx === 0}
                            style={{
                                color:
                                    idx === 0 ? THEME_COLORS.primary : THEME_COLORS.textSecondary,
                            }}
                        >
                            {tab}
                        </Text>
                    </div>
                ))}
            </div>

            {/* Matches Grid */}
            <div
                style={{
                    padding: 8,
                    overflowY: 'auto',
                    flex: 1,
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 8,
                    }}
                >
                    {matches.map((m, i) => (
                        <div
                            key={m.id}
                            style={{
                                position: 'relative',
                                borderRadius: 8,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                ...COMMON_STYLES.smoothTransition,
                            }}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${m.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: 80,
                                    position: 'relative',
                                }}
                            >
                                {/* Gold badge for first match */}
                                {i === 0 && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 4,
                                            left: 4,
                                            background: '#FFD700',
                                            color: '#000',
                                            fontSize: 10,
                                            fontWeight: 'bold',
                                            padding: '2px 6px',
                                            borderRadius: 8,
                                        }}
                                    >
                                        99+
                                    </div>
                                )}

                                {/* Name overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background:
                                            'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                        color: '#fff',
                                        padding: '8px 4px 4px',
                                        fontSize: 11,
                                        fontWeight: 500,
                                    }}
                                >
                                    {m.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Sider>
    );
};

DesktopSidebar.displayName = 'DesktopSidebar';

export default DesktopSidebar;