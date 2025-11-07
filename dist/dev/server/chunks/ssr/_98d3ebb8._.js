module.exports = [
"[project]/src/data/swipeData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitialCards",
    ()=>getInitialCards,
    "getRefreshCards",
    ()=>getRefreshCards,
    "isAd",
    ()=>isAd,
    "isProfile",
    ()=>isProfile,
    "mockAds",
    ()=>mockAds,
    "mockProfiles",
    ()=>mockProfiles
]);
function isProfile(item) {
    return !('type' in item && item.type === 'ad');
}
function isAd(item) {
    return 'type' in item && item.type === 'ad';
}
const mockProfiles = [
    {
        id: "1",
        name: "Emma",
        age: 26,
        bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Looking for casual fun and good vibes ✨",
        distance: 2.5,
        images: [
            "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=600&fit=crop"
        ],
        interests: [
            "Travel",
            "Photography",
            "Yoga",
            "Coffee",
            "Nightlife"
        ],
        occupation: "Marketing Manager",
        location: "Downtown, CA",
        verified: true,
        isOnline: true
    },
    {
        id: "2",
        name: "Alex",
        age: 28,
        bio: "Software engineer by day, party animal by night 🎉 | No strings attached 💫",
        distance: 5.2,
        images: [
            "https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
        ],
        interests: [
            "Coding",
            "Gaming",
            "Music",
            "Bars",
            "Tech"
        ],
        occupation: "Software Engineer",
        location: "Tech District, CA",
        verified: false,
        isOnline: true
    },
    {
        id: "3",
        name: "Sophie",
        age: 24,
        bio: "Artist 🎨 | Free spirit | Living in the moment and loving every second 🌙",
        distance: 3.8,
        images: [
            "https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop"
        ],
        interests: [
            "Art",
            "Museums",
            "Wine",
            "Dancing",
            "Creativity"
        ],
        occupation: "Graphic Designer",
        location: "Arts District, CA",
        verified: true,
        isOnline: false
    },
    {
        id: "4",
        name: "James",
        age: 30,
        bio: "Outdoor enthusiast 🏔️ | Photographer | Adventure awaits, let's make it happen 📸",
        distance: 7.1,
        images: [
            "https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=600&fit=crop"
        ],
        interests: [
            "Photography",
            "Hiking",
            "Camping",
            "Nature",
            "Adventure"
        ],
        occupation: "Travel Photographer",
        location: "Westside, CA",
        verified: true,
        isOnline: true
    },
    {
        id: "5",
        name: "Olivia",
        age: 27,
        bio: "Fitness enthusiast 💪 | Yoga instructor | Living my best life, join me? 🌟",
        distance: 4.3,
        images: [
            "https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop"
        ],
        interests: [
            "Fitness",
            "Yoga",
            "Health",
            "Running",
            "Wellness"
        ],
        occupation: "Yoga Instructor",
        location: "Beach City, CA",
        verified: false,
        isOnline: true
    },
    {
        id: "6",
        name: "Ryan",
        age: 29,
        bio: "Marketing professional | World traveler ✈️ | Always down for spontaneous adventures 🌮",
        distance: 6.7,
        images: [
            "https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
        ],
        interests: [
            "Travel",
            "Food",
            "Marketing",
            "Sports",
            "Socializing"
        ],
        occupation: "Marketing Director",
        location: "Uptown, CA",
        verified: true,
        isOnline: false
    },
    {
        id: "7",
        name: "Maya",
        age: 25,
        bio: "Dance instructor 💃 | Night owl | Let's dance until sunrise 🌅",
        distance: 1.8,
        images: [
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop"
        ],
        interests: [
            "Dancing",
            "Music",
            "Nightlife",
            "Fitness",
            "Performance"
        ],
        occupation: "Dance Instructor",
        location: "Entertainment District, CA",
        verified: true,
        isOnline: true
    },
    {
        id: "8",
        name: "Jake",
        age: 32,
        bio: "Bartender & mixologist 🍸 | Know all the best spots in town | Let's grab a drink 🥂",
        distance: 2.1,
        images: [
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop",
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop"
        ],
        interests: [
            "Cocktails",
            "Nightlife",
            "Music",
            "Food",
            "Socializing"
        ],
        occupation: "Bartender",
        location: "Bar District, CA",
        verified: false,
        isOnline: true
    }
];
const mockAds = [
    {
        id: "ad1",
        type: "ad",
        brand: "Luxury Hotels",
        title: "Weekend Getaway Special",
        description: "Book your romantic escape today. 50% off luxury suites this weekend only!",
        image: "https://images.unsplash.com/photo-1761927206868-58fedbcdaf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MjA5ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Book Now",
        url: "https://example.com/luxury-hotels",
        category: "Travel"
    },
    {
        id: "ad2",
        type: "ad",
        brand: "Premium Drinks",
        title: "Craft Your Night",
        description: "Premium cocktails delivered to your door. Perfect for spontaneous dates!",
        image: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIxMDU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Order Now",
        url: "https://example.com/premium-drinks",
        category: "Food & Drink"
    },
    {
        id: "ad3",
        type: "ad",
        brand: "Fashion Forward",
        title: "Date Night Ready",
        description: "Look your best tonight. New arrivals perfect for any casual encounter.",
        image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyMDcwNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        callToAction: "Shop Now",
        url: "https://example.com/fashion-forward",
        category: "Fashion"
    }
];
function getInitialCards() {
    const stack = [];
    let adIndex = 0;
    // Shuffle profiles for variety
    const shuffledProfiles = [
        ...mockProfiles
    ].sort(()=>Math.random() - 0.5);
    shuffledProfiles.forEach((profile, index)=>{
        stack.push(profile);
        // Insert ad every 3-4 profiles
        if ((index + 1) % 4 === 0 && adIndex < mockAds.length) {
            stack.push(mockAds[adIndex]);
            adIndex++;
        }
    });
    return stack;
}
function getRefreshCards() {
    return getInitialCards();
}
}),
"[project]/src/app/(authenticated)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
function DashboardLayout({ children }) {
    return children;
} // 'use client';
 // import React from 'react';
 // import { Layout } from 'antd';
 // import { useMediaQuery } from 'react-responsive';
 // import { COMMON_STYLES, THEME_COLORS } from '@/providers/theme';
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
 //         // ...COMMON_STYLES.fullHeight,
 //         // minHeight: '100vh',
 //         // backgroundColor: '#000',
 //         // display: 'flex',
 //         // flexDirection: isMobile ? 'column' : 'row',
 //       }}
 //     >
 //       {/* Sidebar for desktop */}
 //       {!isMobile && (<DesktopSidebar />)}
 //       {/* Main content area */}
 //       <Layout
 //         style={{
 //           flex: 1,
 //           display: 'flex',
 //           flexDirection: 'column',
 //           justifyContent: 'center',
 //           alignItems: 'center',
 //           // background: '#000',
 //           overflow: 'hidden',
 //           position: 'relative',
 //         }}
 //       >
 //         <Content
 //           style={{
 //             width: '100%',
 //             // height: isMobile ? 'calc(100vh - 60px)' : '100vh',
 //             maxWidth: isMobile ? '100%' : '80%',
 //             display: 'flex',
 //             justifyContent: 'center',
 //             alignItems: 'center',
 //           }}
 //         >
 //           {children}
 //         </Content>
 //       </Layout>
 //     </Layout>
 //   );
 // };
 // export default AuthenticatedLayout;
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
"[project]/src/app/(authenticated)/home/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/message/index.js [app-ssr] (ecmascript) <export default as message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/swipeData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$authenticated$292f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(authenticated)/layout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const { useBreakpoint } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"];
function HomePage() {
    const screens = useBreakpoint();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialCards"])());
    const [swipeHistory, setSwipeHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matchedProfile, setMatchedProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triggerSwipe, setTriggerSwipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const currentCard = cards[cards.length - 1];
    /** Handle Swipe */ const handleSwipe = (direction)=>{
        if (!currentCard) return;
        setSwipeHistory((prev)=>[
                ...prev,
                currentCard
            ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProfile"])(currentCard) && direction === 'right') {
            if (Math.random() > 0.7) {
                setMatchedProfile(currentCard);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`🎉 It's a match with ${currentCard.name}!`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`You liked ${currentCard.name}! 💖`);
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProfile"])(currentCard)) {
            if (direction === 'right') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info(`Interested in ${currentCard.brand}? Check it out!`);
            }
        }
        setCards((prev)=>prev.slice(0, -1));
    };
    /** Undo Last Swipe */ const handleUndo = ()=>{
        if (swipeHistory.length === 0) return;
        const lastCard = swipeHistory[swipeHistory.length - 1];
        setCards((prev)=>[
                ...prev,
                lastCard
            ]);
        setSwipeHistory((prev)=>prev.slice(0, -1));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('Undo successful! 🔄');
    };
    /** Refresh Deck */ const handleRefresh = ()=>{
        setCards((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitialCards"])());
        setSwipeHistory([]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success('New profiles loaded! 🔥');
    };
    /** Super Like */ const handleSuperLike = ()=>{
        if (!currentCard || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$swipeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProfile"])(currentCard)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`⭐ Super liked ${currentCard.name}!`);
        if (Math.random() > 0.4) {
            setMatchedProfile(currentCard);
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].success(`🎉 It's a Super Match with ${currentCard.name}!`);
            }, 500);
        }
        handleSwipe('right');
    };
    const handleBoost = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__message$3e$__["message"].info('🚀 Boost activated! You’ll be a top profile for 30 minutes.');
    };
    /** Auto Refresh */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cards.length === 0) {
            const timer = setTimeout(()=>handleRefresh(), 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        cards.length
    ]);
    /** Layout Styles */ const containerStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor: '#e02222ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: screens.xs ? '0' : '24px'
    };
    const cardAreaStyle = {
        position: 'relative',
        width: screens.xs ? '100%' : '50%',
        height: screens.xs ? '100vh' : '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
    /** ✅ Action Buttons: float above bottom of card area */ const actionsContainerStyle = {
        position: 'absolute',
        bottom: screens.xs ? '5%' : '6%',
        left: 28,
        right: 28,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 100
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$authenticated$292f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Test"
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/antd/es/message/index.js [app-ssr] (ecmascript) <export default as message>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "message",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$message$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/message/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals> <export default as Grid>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-ssr] (ecmascript) <locals>");
}),
];

//# sourceMappingURL=_98d3ebb8._.js.map