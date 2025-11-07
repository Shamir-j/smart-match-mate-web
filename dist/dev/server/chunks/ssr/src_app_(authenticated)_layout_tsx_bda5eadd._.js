module.exports = [
"[project]/src/app/(authenticated)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
(()=>{
    const e = new Error("Cannot find module '@/components/navigation/Sidebar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/navigation/BottomNav'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-responsive/dist/esm/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const { Sider, Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const AuthenticatedLayout = ({ children })=>{
    // Detect screen size for responsive layout
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        maxWidth: 768
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            minHeight: '100vh',
            backgroundColor: THEME_COLORS.darkBg || '#000',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row'
        },
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sider, {
                width: 260,
                theme: "light",
                style: {
                    background: '#fff',
                    borderRight: '1px solid #f0f0f0',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sidebar, {}, void 0, false, {
                    fileName: "[project]/src/app/(authenticated)/layout.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: THEME_COLORS.darkBg || '#000',
                    overflow: 'hidden',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                        style: {
                            width: '100%',
                            maxWidth: '450px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: isMobile ? 'calc(100vh - 60px)' : '100vh'
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/layout.tsx",
                        lineNumber: 58,
                        columnNumber: 9
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomNav, {}, void 0, false, {
                            fileName: "[project]/src/app/(authenticated)/layout.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(authenticated)/layout.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(authenticated)/layout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AuthenticatedLayout;
 // // src/app/(authenticated)/layout.tsx
 // 'use client';
 // import React, { useEffect, useState } from 'react';
 // import {
 //   Layout, Avatar, Badge, Space, Typography, Grid,
 // } from 'antd';
 // import {
 //   FireOutlined, TeamOutlined, MessageOutlined,
 //   UserOutlined, SettingOutlined,
 // } from '@ant-design/icons';
 // import { useRouter, usePathname } from 'next/navigation';
 // import { THEME_COLORS, COMMON_STYLES } from '@/providers/theme';
 // import DesktopSidebar from '@/components/DesktopSidebar';
 // import MobileBottomNav from '@/components/MobileBottomNav';
 // const { Header, Content, Sider } = Layout;
 // const { Text } = Typography;
 // const { useBreakpoint } = Grid;
 // /* ------------------------------------------------------------------ */
 // /*  Main layout component                                              */
 // /* ------------------------------------------------------------------ */
 // export default function AuthenticatedLayout({ children, }: { children: React.ReactNode; }) {
 //   const router = useRouter();
 //   const pathname = usePathname();
 //   const screens = useBreakpoint();               // AntD responsive helper
 //   const isMobile = screens.xs || (screens.sm && !screens.md);
 //   const handleNav = (path: string) => router.push(path);
 //   return (
 //     <Layout style={{ minHeight: '100vh', background: THEME_COLORS.background }}>
 //       {/* Desktop Sidebar */}
 //       {!isMobile && <DesktopSidebar />}
 //       {/* Main content area */}
 //       <Layout
 //         style={{
 //           marginLeft: isMobile ? 0 : 280,
 //           marginBottom: isMobile ? 80 : 0,
 //           transition: 'margin 0.3s ease',
 //         }}
 //       >
 //         <Content>{children}</Content>
 //       </Layout>
 //       {/* Mobile Bottom Nav */}
 //       {isMobile && <MobileBottomNav pathname={pathname} onNavigate={handleNav} />}
 //     </Layout>
 //   );
 // }
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
];

//# sourceMappingURL=src_app_%28authenticated%29_layout_tsx_bda5eadd._.js.map