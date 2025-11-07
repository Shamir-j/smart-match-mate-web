// src/app/(authenticated)/layout.tsx
'use client';

import React, { } from 'react';
import { Layout, Badge, Typography, Grid, } from 'antd';
import { FireOutlined, TeamOutlined, MessageOutlined, UserOutlined, } from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';
import { THEME_COLORS, COMMON_STYLES } from '@/providers/theme';
import DesktopSidebar from './DesktopSidebar';
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const { useBreakpoint } = Grid;

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


const MobileBottomNav = ({ pathname, onNavigate, }: { pathname: string; onNavigate: (path: string) => void; }) => (
    <div
        style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: THEME_COLORS.cardBackground,
            borderTop: `1px solid ${THEME_COLORS.borderLight}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            zIndex: 1000,
            paddingBottom: 'env(safe-area-inset-bottom)',
        }}
    >
        {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.key;
            return (
                <div
                    key={item.key}
                    onClick={() => onNavigate(item.key)}
                    style={{
                        ...COMMON_STYLES.flexCenter,
                        flexDirection: 'column',
                        minWidth: 60,
                        padding: '8px 12px',
                        borderRadius: 12,
                        cursor: 'pointer',
                        ...COMMON_STYLES.smoothTransition,
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <Icon style={{ fontSize: 24, color: active ? THEME_COLORS.primary : THEME_COLORS.textSecondary, }} />
                        {'badge' in item && item.badge && (
                            <Badge
                                count={item.badge > 99 ? '99+' : item.badge}
                                size="small"
                                style={{
                                    position: 'absolute',
                                    top: -6,
                                    right: -6,
                                    background: THEME_COLORS.primary,
                                    fontSize: 10,
                                }}
                            />
                        )}
                    </div>
                    <Text
                        style={{
                            marginTop: 4,
                            fontSize: 11,
                            fontWeight: active ? 600 : 400,
                            color: active ? THEME_COLORS.primary : THEME_COLORS.textSecondary,
                        }}
                    >
                        {item.label}
                    </Text>
                </div>
            );
        })}
    </div>
);


MobileBottomNav.displayName = 'MobileBottomNav';

export default MobileBottomNav;