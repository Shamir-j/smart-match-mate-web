'use client';

import React, { useState, useEffect } from 'react';
import { message, Flex, Grid } from 'antd';
import { ActionButtons } from '@/components/swipe/ActionButtons';
import { EmptyState } from '@/components/swipe/EmptyState';
import { MatchModal } from '@/components/swipe/MatchModal';
import { SwipeCardStack } from '@/components/swipe/SwipeCardStack';
import { SwipeCardItem, getInitialCards, Profile, isProfile } from '@/data/swipeData';
import DashboardLayout from '../layout';

const { useBreakpoint } = Grid;

export default function HomePage() {
  const screens = useBreakpoint();
  const [cards, setCards] = useState<SwipeCardItem[]>(getInitialCards());
  const [swipeHistory, setSwipeHistory] = useState<SwipeCardItem[]>([]);
  const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
  const [triggerSwipe, setTriggerSwipe] = useState<'left' | 'right' | null>(null);

  const currentCard = cards[cards.length - 1];

  /** Handle Swipe */
  const handleSwipe = (direction: 'left' | 'right') => {
    if (!currentCard) return;

    setSwipeHistory((prev) => [...prev, currentCard]);

    if (isProfile(currentCard) && direction === 'right') {
      if (Math.random() > 0.7) {
        setMatchedProfile(currentCard);
        message.success(`🎉 It's a match with ${currentCard.name}!`);
      } else {
        message.success(`You liked ${currentCard.name}! 💖`);
      }
    }

    if (!isProfile(currentCard)) {
      if (direction === 'right') {
        message.info(`Interested in ${currentCard.brand}? Check it out!`);
      }
    }

    setCards((prev) => prev.slice(0, -1));
  };

  /** Undo Last Swipe */
  const handleUndo = () => {
    if (swipeHistory.length === 0) return;
    const lastCard = swipeHistory[swipeHistory.length - 1];
    setCards((prev) => [...prev, lastCard]);
    setSwipeHistory((prev) => prev.slice(0, -1));
    message.info('Undo successful! 🔄');
  };

  /** Refresh Deck */
  const handleRefresh = () => {
    setCards(getInitialCards());
    setSwipeHistory([]);
    message.success('New profiles loaded! 🔥');
  };

  /** Super Like */
  const handleSuperLike = () => {
    if (!currentCard || !isProfile(currentCard)) return;
    message.success(`⭐ Super liked ${currentCard.name}!`);
    if (Math.random() > 0.4) {
      setMatchedProfile(currentCard);
      setTimeout(() => {
        message.success(`🎉 It's a Super Match with ${currentCard.name}!`);
      }, 500);
    }
    handleSwipe('right');
  };

  const handleBoost = () => {
    message.info('🚀 Boost activated! You’ll be a top profile for 30 minutes.');
  };

  /** Auto Refresh */
  useEffect(() => {
    if (cards.length === 0) {
      const timer = setTimeout(() => handleRefresh(), 3000);
      return () => clearTimeout(timer);
    }
  }, [cards.length]);

  /** Layout Styles */
  const containerStyle: React.CSSProperties = {
    // width: '100%',
    // height: '100vh',
    backgroundColor: '#e02222ff',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // overflow: 'hidden',
    // padding: screens.xs ? '0' : '24px',
  };

  const cardAreaStyle: React.CSSProperties = {
    position: 'relative',
    width: screens.xs ? '100%' : '50%',
    height: screens.xs ? '100vh' : '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  /** ✅ Action Buttons: float above bottom of card area */
  const actionsContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: screens.xs ? '5%' : '6%',
    left: 28,
    right: 28,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 100,
  };

  return (




<DashboardLayout>
      <div style={containerStyle}>
      {cards.length === 0 ? (
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%' }}>
          <EmptyState onRefresh={handleRefresh} />
        </Flex>
      ) : (
        <div style={cardAreaStyle}>
          {/* <SwipeCardStack
            cards={cards}
            onSwipe={handleSwipe}
            triggerSwipe={triggerSwipe}
            onSwipeComplete={() => setTriggerSwipe(null)}
          /> */}

          {/* ✅ Floating Buttons above the card stack */}
          <div style={actionsContainerStyle}>
            <ActionButtons
              onUndo={handleUndo}
              onPass={() => setTriggerSwipe('left')}
              onSuperLike={handleSuperLike}
              onLike={() => setTriggerSwipe('right')}
              onBoost={handleBoost}
              canUndo={swipeHistory.length > 0}
              hasCard={!!currentCard}
            />
          </div>
        </div>
      )}

      {/* Match Modal */}
      {matchedProfile && (
        <MatchModal
          profile={matchedProfile}
          onClose={() => setMatchedProfile(null)}
          onSendMessage={() => {
            setMatchedProfile(null);
            message.success('Opening chat...', 1);
          }}
        />
      )}
    </div>
</DashboardLayout>


  );
}


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { message, Flex, Grid } from 'antd';
// import { ActionButtons } from '@/components/swipe/ActionButtons';
// import { EmptyState } from '@/components/swipe/EmptyState';
// import { MatchModal } from '@/components/swipe/MatchModal';
// import { SwipeCardStack } from '@/components/swipe/SwipeCardStack';
// import { SwipeCardItem, getInitialCards, Profile, isProfile } from '@/data/swipeData';

// const { useBreakpoint } = Grid;

// export default function HomePage() {
//     const screens = useBreakpoint();
//     const [cards, setCards] = useState<SwipeCardItem[]>(getInitialCards());
//     const [swipeHistory, setSwipeHistory] = useState<SwipeCardItem[]>([]);
//     const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);
//     const [triggerSwipe, setTriggerSwipe] = useState<'left' | 'right' | null>(null);

//     const currentCard = cards[cards.length - 1];

//     const handleSwipe = (direction: 'left' | 'right') => {
//         if (!currentCard) return;

//         setSwipeHistory((prev) => [...prev, currentCard]);

//         if (isProfile(currentCard) && direction === 'right') {
//             if (Math.random() > 0.7) {
//                 setMatchedProfile(currentCard);
//                 message.success(`🎉 It's a match with ${currentCard.name}!`);
//             } else {
//                 message.success(`You liked ${currentCard.name}! 💖`);
//             }
//         }

//         if (!isProfile(currentCard)) {
//             if (direction === 'right') {
//                 message.info(`Interested in ${currentCard.brand}? Check it out!`);
//             }
//         }

//         setCards((prev) => prev.slice(0, -1));
//     };

//     const handleUndo = () => {
//         if (swipeHistory.length === 0) return;
//         const lastCard = swipeHistory[swipeHistory.length - 1];
//         setCards((prev) => [...prev, lastCard]);
//         setSwipeHistory((prev) => prev.slice(0, -1));
//         message.info('Undo successful! 🔄');
//     };

//     const handleRefresh = () => {
//         setCards(getInitialCards());
//         setSwipeHistory([]);
//         message.success('New profiles loaded! 🔥');
//     };

//     const handleSuperLike = () => {
//         if (!currentCard || !isProfile(currentCard)) return;
//         message.success(`⭐ Super liked ${currentCard.name}!`);
//         if (Math.random() > 0.4) {
//             setMatchedProfile(currentCard);
//             setTimeout(() => {
//                 message.success(`🎉 It's a Super Match with ${currentCard.name}!`);
//             }, 500);
//         }
//         handleSwipe('right');
//     };

//     const handleBoost = () => {
//         message.info('🚀 Boost activated! You’ll be a top profile for 30 minutes.');
//     };

//     useEffect(() => {
//         if (cards.length === 0) {
//             setTimeout(() => handleRefresh(), 3000);
//         }
//     }, [cards.length]);

//     /** ✅ Responsive Layout */
//     const containerStyle: React.CSSProperties = {
//         width: '100%',
//         height: '100vh',
//         backgroundColor: '#000',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden',
//         padding: screens.xs ? '0' : '24px',
//         // position: 'absolute', top: 0, left: 0, right: 0, bottom: 0

//     };


//     const cardAreaStyle: React.CSSProperties = {
//         position: 'relative',
//         width: screens.xs ? '100%' : '100%', // full width on mobile, fixed center width on desktop
//         height: screens.xs ? '100%' : '100vh',
//         maxHeight: '80%',
//         backgroundColor: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     };

//     const actionsContainerStyle: React.CSSProperties = {
//         position: 'absolute',
//         bottom: '1%',
//         left: 0,
//         right: 0,
        
//         padding: screens.xs ? '0 16px' : '0 24px',
//     };

//     return (
//         <div style={containerStyle}>
//             {cards.length === 0 ? (
//                 <Flex justify="center" align="center" style={{ height: '100%', width: '100%' }}>
//                     <EmptyState onRefresh={handleRefresh} />
//                 </Flex>
//             ) : (
//                 <div style={cardAreaStyle}>
//                     <SwipeCardStack
//                         cards={cards}
//                         onSwipe={handleSwipe}
//                         triggerSwipe={triggerSwipe}
//                         onSwipeComplete={() => setTriggerSwipe(null)}
//                     />

//                     <div style={actionsContainerStyle}>
//                         <ActionButtons
//                             onUndo={handleUndo}
//                             onPass={() => setTriggerSwipe('left')}
//                             onSuperLike={handleSuperLike}
//                             onLike={() => setTriggerSwipe('right')}
//                             onBoost={handleBoost}
//                             canUndo={swipeHistory.length > 0}
//                             hasCard={!!currentCard}
//                         />
//                     </div>
//                 </div>
//             )}

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
//         </div>
//     );
// }



// 'use client';

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