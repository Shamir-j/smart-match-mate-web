(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(authenticated)/home/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(authenticated)/page.tsx  (example)
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/card/index.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-client] (ecmascript) <export default as Typography>");
'use client';
;
;
const { Title } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        style: {
            margin: 16,
            borderRadius: 16
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
            level: 3,
            children: "Welcome to the Discover page"
        }, void 0, false, {
            fileName: "[project]/src/app/(authenticated)/home/page.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(authenticated)/home/page.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
} // 'use client';
 // import React, { useState, useEffect } from 'react';
 // import { message, Layout, Flex } from 'antd';
 // import { ActionButtons } from '@/components/swipe/ActionButtons';
 // import { EmptyState } from '@/components/swipe/EmptyState';
 // import { MatchModal } from '@/components/swipe/MatchModal';
 // import { SwipeCardStack } from '@/components/swipe/SwipeCardStack';
 // import { SwipeCardItem, getInitialCards, Profile, isProfile } from '@/data/swipeData';
 // const { Content } = Layout;
 // export default function HomePage() {
 //     const [cards, setCards] = useState<SwipeCardItem[]>(getInitialCards());
 //     const [swipeHistory, setSwipeHistory] = useState<SwipeCardItem[]>([]);
 //     const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
 //     const [triggerSwipe, setTriggerSwipe] = useState<"left" | "right" | null>(null);
 //     const currentCard = cards[cards.length - 1];
 //     const handleSwipe = (direction: "left" | "right") => {
 //         if (!currentCard) return;
 //         console.log(`Swiped ${direction} on:`, isProfile(currentCard) ? currentCard.name : currentCard.brand);
 //         // Add to swipe history for undo functionality
 //         setSwipeHistory(prev => [...prev, currentCard]);
 //         // Handle matches only for profile cards
 //         if (isProfile(currentCard) && direction === "right") {
 //             // Simulate match probability (30% chance)
 //             if (Math.random() > 0.7) {
 //                 setMatchedProfile(currentCard);
 //                 message.success({
 //                     content: `🎉 It's a match with ${currentCard.name}!`,
 //                     duration: 3,
 //                     style: {
 //                         marginTop: '10vh',
 //                     }
 //                 });
 //             } else {
 //                 message.success({
 //                     content: `You liked ${currentCard.name}! 💖`,
 //                     duration: 2,
 //                 });
 //             }
 //         }
 //         // Track ad interactions
 //         if (!isProfile(currentCard)) {
 //             if (direction === "right") {
 //                 console.log(`Ad engagement: User interested in ${currentCard.brand}`);
 //                 message.info({
 //                     content: `Interested in ${currentCard.brand}? Check it out!`,
 //                     duration: 2,
 //                 });
 //             } else {
 //                 console.log(`Ad skipped: ${currentCard.brand}`);
 //             }
 //         }
 //         // Remove the swiped card
 //         setCards(prev => prev.slice(0, -1));
 //     };
 //     const handleUndo = () => {
 //         if (swipeHistory.length === 0) return;
 //         const lastCard = swipeHistory[swipeHistory.length - 1];
 //         setCards(prev => [...prev, lastCard]);
 //         setSwipeHistory(prev => prev.slice(0, -1));
 //         message.info({
 //             content: 'Undo successful! 🔄',
 //             duration: 1,
 //         });
 //     };
 //     const handleRefresh = () => {
 //         setCards(getInitialCards());
 //         setSwipeHistory([]);
 //         message.success({
 //             content: 'New profiles loaded! 🔥',
 //             duration: 2,
 //         });
 //     };
 //     const handleSuperLike = () => {
 //         if (!currentCard || !isProfile(currentCard)) return;
 //         // Simulate super like (higher match probability)
 //         message.success({
 //             content: `⭐ Super liked ${currentCard.name}!`,
 //             duration: 2,
 //         });
 //         if (Math.random() > 0.4) { // 60% match chance for super like
 //             setMatchedProfile(currentCard);
 //             setTimeout(() => {
 //                 message.success({
 //                     content: `🎉 It's a Super Match with ${currentCard.name}!`,
 //                     duration: 4,
 //                 });
 //             }, 500);
 //         }
 //         handleSwipe('right');
 //     };
 //     const handleBoost = () => {
 //         message.info({
 //             content: '🚀 Boost activated! You\'ll be a top profile for 30 minutes.',
 //             duration: 3,
 //         });
 //     };
 //     // Auto-refresh when cards run out
 //     useEffect(() => {
 //         if (cards.length === 0) {
 //             setTimeout(() => {
 //                 handleRefresh();
 //             }, 3000); // 3 second delay for better UX
 //         }
 //     }, [cards.length]);
 //     const containerStyle: React.CSSProperties = {
 //         height: '100vh',
 //         backgroundColor: '#000000',
 //         position: 'relative',
 //         overflow: 'hidden'
 //     };
 //     const mainContentStyle: React.CSSProperties = {
 //         position: 'relative',
 //         height: '100%'
 //     };
 //     const emptyStateContainerStyle: React.CSSProperties = {
 //         height: '100%',
 //         backgroundColor: '#000000'
 //     };
 //     const cardStackContainerStyle: React.CSSProperties = {
 //         position: 'relative',
 //         height: '100%'
 //     };
 //     const actionButtonsContainerStyle: React.CSSProperties = {
 //         position: 'absolute',
 //         bottom: 0,
 //         left: 0,
 //         right: 0,
 //         zIndex: 100
 //     };
 //     return (
 //         <Layout style={containerStyle}>
 //             <Content style={mainContentStyle}>
 //                 {cards.length === 0 ? (
 //                     <Flex 
 //                         justify="center" 
 //                         align="center" 
 //                         style={emptyStateContainerStyle}
 //                     >
 //                         <EmptyState onRefresh={handleRefresh} />
 //                     </Flex>
 //                 ) : (
 //                     <>
 //                         {/* Card Stack - Full Screen */}
 //                         <div style={cardStackContainerStyle}>
 //                             <SwipeCardStack
 //                                 cards={cards}
 //                                 onSwipe={handleSwipe}
 //                                 triggerSwipe={triggerSwipe}
 //                                 onSwipeComplete={() => setTriggerSwipe(null)}
 //                             />
 //                         </div>
 //                         {/* Action Buttons - Bottom Overlay */}
 //                         <div style={actionButtonsContainerStyle}>
 //                             <ActionButtons
 //                                 onUndo={handleUndo}
 //                                 onPass={() => setTriggerSwipe("left")}
 //                                 onSuperLike={handleSuperLike}
 //                                 onLike={() => setTriggerSwipe("right")}
 //                                 onBoost={handleBoost}
 //                                 canUndo={swipeHistory.length > 0}
 //                                 hasCard={!!currentCard}
 //                             />
 //                         </div>
 //                     </>
 //                 )}
 //             </Content>
 //             {/* Match Modal */}
 //             {matchedProfile && (
 //                 <MatchModal
 //                     profile={matchedProfile}
 //                     onClose={() => setMatchedProfile(null)}
 //                     onSendMessage={() => {
 //                         setMatchedProfile(null);
 //                         message.success('Opening chat...', 1);
 //                     }}
 //                 />
 //             )}
 //         </Layout>
 //     );
 // }
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28authenticated%29_home_page_tsx_85264b97._.js.map