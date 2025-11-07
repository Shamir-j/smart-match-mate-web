(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(authenticated)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-responsive/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
            minHeight: '100vh',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
            style: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // background: '#000',
                // overflow: 'hidden',
                position: 'relative'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                style: {
                    width: '100%',
                    maxWidth: '1000px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: isMobile ? 'calc(100vh - 60px)' : '100vh'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/(authenticated)/layout.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(authenticated)/layout.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
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
]);

//# sourceMappingURL=src_app_%28authenticated%29_layout_tsx_4fec93b0._.js.map