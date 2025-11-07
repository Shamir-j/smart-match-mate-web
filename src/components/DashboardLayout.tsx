'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Drawer, Badge, Avatar, Tooltip } from 'antd';
// import Sidebar from './Sidebar';
// import TopBar from './TopBar';
import DesktopSidebar from '@/components/DesktopSidebar';
import { debounce } from 'lodash';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import { COMMON_STYLES, THEME_COLORS } from '@/providers/ClientWrapper';
import MobileBottomNav from './MobileBottomNav';
import { usePathname, useRouter } from 'next/navigation';

const { Content } = Layout;

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const router = useRouter();
    const pathname = usePathname();



    const handleNav = (path: string) => router.push(path);
    // ──────────────────────────────────────────────────────────────
    // Resize handling (mobile < 768px)
    // ──────────────────────────────────────────────────────────────
    const handleResize = useCallback(
        debounce(() => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            if (mobile) {
                setCollapsed(true);          // always collapsed on mobile
                setDrawerVisible(false);     // close drawer when switching
            } else {
                setCollapsed(false);
            }
        }, 10),
        []
    );

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            handleResize.cancel();
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    // ──────────────────────────────────────────────────────────────
    // Drawer toggle (mobile only)
    // ──────────────────────────────────────────────────────────────
    const toggleDrawer = () => setDrawerVisible((v) => !v);

    // ──────────────────────────────────────────────────────────────
    // Render
    // ──────────────────────────────────────────────────────────────
    return (
        <Layout
            style={{
                ...COMMON_STYLES.fullHeight,
                minHeight: '100vh',               // <-- essential
                background: THEME_COLORS.background,
            }}
        >
            {/* ────── MOBILE DRAWER ────── */}
            {/* {isMobile && (
                <Drawer
                    placement="left"
                    open={drawerVisible}
                    onClose={toggleDrawer}
                    width={256}
                    closable={false}
                    styles={{ body: { padding: 0, background: THEME_COLORS.sidebarBackground } }}
                    style={{ zIndex: 1002 }}
                >
                    <Sidebar collapsed={false} onCollapse={setCollapsed} toggleDrawer={toggleDrawer} />
                </Drawer>
            )} */}

            {/* ────── DESKTOP SIDEBAR (fixed) ────── */}
            {!isMobile && (
                // <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
                <DesktopSidebar />
            )}

            {/* ────── MAIN CONTENT AREA ────── */}
            <Layout
                style={{
                    marginLeft: isMobile ? 0 : collapsed ? 80 : 350,
                    transition: 'margin-left 0.2s cubic-bezier(0.2, 0, 0, )',
                    minHeight: '100vh',
                }}
            >
                <Content
                    style={{
                        // padding: isMobile ? '12px' : '24px',
                        background: THEME_COLORS.background,
                        height: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        ...COMMON_STYLES.customScrollbar,
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {children}
                </Content>

                {/* Bottom navigation for mobile */}
                {isMobile && (
                    <div
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            background: '#fff',
                            borderTop: '1px solid #eaeaea',
                            zIndex: 100,
                        }}
                    >
                        <MobileBottomNav pathname={pathname} onNavigate={handleNav} />
                    </div>
                )}


            </Layout>
        </Layout>
    );
};

export default DashboardLayout;

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