'use client';

import React, { useState, useEffect } from 'react';
import { message, Flex, Grid } from 'antd';
import { ActionButtons } from '@/components/swipe/ActionButtons';
import { EmptyState } from '@/components/swipe/EmptyState';
import { MatchModal } from '@/components/swipe/MatchModal';
import { SwipeCardStack } from '@/components/swipe/SwipeCardStack';
import { SwipeCardItem, getInitialCards, Profile, isProfile } from '@/data/swipeData';
import Title from 'antd/es/skeleton/Title';
import DashboardLayout from '@/components/DashboardLayout';

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
        width: '100%',
        height: '100%',
        backgroundColor: '#e02222ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        padding: screens.xs ? '0' : '24px',
    };

    const cardAreaStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        // width: screens.xs ? '100%' : '50%',
        height: screens.xs ? '100vh' : '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    /** ✅ Action Buttons: float above bottom of card area */
    const actionsContainerStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: screens.xs ? '5%' : '6%',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 100,
    };

    return (

        <DashboardLayout>


            <div style={containerStyle}>
                {/* 
                <Flex flex={1} justify="center" align="center" style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <EmptyState onRefresh={handleRefresh} />
                </Flex> */}


                <div style={cardAreaStyle}>
                    <SwipeCardStack
                        cards={cards}
                        onSwipe={handleSwipe}
                        triggerSwipe={triggerSwipe}
                        onSwipeComplete={() => setTriggerSwipe(null)}
                    />

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













            </div>




        </DashboardLayout>


    );
}

