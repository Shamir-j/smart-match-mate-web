module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(authenticated)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(authenticated)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(authenticated)/swipe/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import React, { useState } from 'react';
// import { Button, Flex, Typography, Space, Grid } from 'antd';
// import { FireFilled } from '@ant-design/icons';
// import { getCardStack, isProfile } from '@/utils/mockData';
// import DashboardLayout from '@/components/DashboardLayout';
// import SwipeActionButtons from '@/components/swipe/SwipeActionButtons';
// import SwipeCard from '@/components/swipe/SwipeCard';
// import AdCard from '@/components/swipe/AdCard';
// const { Title, Text } = Typography;
// const { useBreakpoint } = Grid;
// const Swipe: React.FC = () => {
//   const [cards, setCards] = useState(getCardStack());
//   const [triggerSwipe, setTriggerSwipe] = useState<'left' | 'right' | null>(null);
//   const [swipeHistory, setSwipeHistory] = useState<any[]>([]);
//   const screens = useBreakpoint();
//   const handleSwipe = (direction: 'left' | 'right') => {
//     const lastCard = cards[cards.length - 1];
//     setSwipeHistory((prev) => [...prev, { direction, card: lastCard }]);
//     setCards((prev) => prev.slice(0, -1));
//   };
//   const handleUndo = () => {
//     const lastSwipe = swipeHistory.pop();
//     if (lastSwipe) {
//       setCards((prev) => [...prev, lastSwipe.card]);
//       setSwipeHistory([...swipeHistory]);
//     }
//   };
//   const handleReject = () => setTriggerSwipe('left');
//   const handleLike = () => setTriggerSwipe('right');
//   const handleSuperLike = () => setTriggerSwipe('right');
//   const handleBoost = () => console.log('Boost activated!');
//   return (
//     <DashboardLayout>
//       <div
//         style={{
//           height: '100dvh',
//           background: '#0a0a12',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative',
//           padding: screens.xs ? '0.5rem' : '1rem',
//         }}
//       >
//         {/* Card Stack */}
//         {cards.length === 0 ? (
//           <Space direction="vertical" align="center" style={{ padding: 40, textAlign: 'center', color: 'white' }} >
//             <Flex
//               align="center"
//               justify="center"
//               style={{
//                 width: 80,
//                 height: 80,
//                 borderRadius: '50%',
//                 background: 'linear-gradient(to right, rgba(236,72,153,0.2), rgba(239,68,68,0.2))',
//               }}
//             >
//               <FireFilled style={{ fontSize: 36, color: '#ec4899' }} />
//             </Flex>
//             <Title level={4} style={{ color: 'white', marginBottom: 4 }}>
//               You’re all caught up!
//             </Title>
//             <Text style={{ color: '#aaa' }}>Check back later for new profiles</Text>
//             <Button
//               type="primary"
//               shape="round"
//               style={{
//                 background: 'linear-gradient(to right, #ec4899, #ef4444)',
//                 border: 'none',
//                 marginTop: 12,
//               }}
//               onClick={() => setCards(getCardStack())}
//             >
//               Refresh
//             </Button>
//           </Space>
//         ) : (
//           <div style={{ position: 'relative', width: '100%', height: screens.xs ? '70vh' : 'calc(100vh - 220px)', maxHeight: '800px', maxWidth: screens.md ? 500 : '100%', margin: '0 auto', }} >
//             {cards.slice(-3).reverse().map((card, index) => {
//               const isTopCard = index === 0;
//               const cardStyle = {
//                 position: 'absolute' as const,
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 transform: `scale(${1 - index * 0.04}) translateY(${index * -8}px)`,
//                 zIndex: 50 - index,
//                 opacity: index === 0 ? 1 : 0.8,
//               };
//               return isProfile(card) ? (
//                 <SwipeCard
//                   key={card.id}
//                   profile={card}
//                   onSwipe={handleSwipe}
//                   style={cardStyle}
//                   triggerSwipe={isTopCard ? triggerSwipe : null}
//                   onSwipeComplete={() => setTriggerSwipe(null)}
//                 />
//               ) : (
//                 <AdCard
//                   key={card.id}
//                   ad={card}
//                   onSwipe={handleSwipe}
//                   style={cardStyle}
//                   triggerSwipe={isTopCard ? triggerSwipe : null}
//                   onSwipeComplete={() => setTriggerSwipe(null)}
//                 />
//               );
//             })}
//           </div>
//         )}
//         {/* Floating Action Buttons */}
//         {cards.length > 0 && (
//           <div
//             style={{
//               position: 'absolute',
//               bottom: screens.xs ? '120px' : '220px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               zIndex: 1000,
//               width: screens.xs ? '90%' : 'auto',
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             <SwipeActionButtons
//               onUndo={handleUndo}
//               onReject={handleReject}
//               onSuperLike={handleSuperLike}
//               onLike={handleLike}
//               onBoost={handleBoost}
//               canUndo={swipeHistory.length > 0}
//             />
//           </div>
//         )}
//       </div>
//     </DashboardLayout>
//   );
// };
// export default Swipe;
}),
"[project]/src/app/(authenticated)/swipe/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(authenticated)/swipe/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3855b08e._.js.map