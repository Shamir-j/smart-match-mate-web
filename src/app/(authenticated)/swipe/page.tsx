'use client';
import React, { useState } from 'react';
import { Button, Flex, Typography, Space, Grid } from 'antd';
import { FireFilled } from '@ant-design/icons';
import { getCardStack, isProfile } from '@/utils/mockData';
import DashboardLayout from '@/components/DashboardLayout';
import SwipeActionButtons from '@/components/swipe/SwipeActionButtons';
import SwipeCard from '@/components/swipe/SwipeCard';
import AdCard from '@/components/swipe/AdCard';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Swipe: React.FC = () => {
  const [cards, setCards] = useState(getCardStack());
  const [triggerSwipe, setTriggerSwipe] = useState<'left' | 'right' | null>(null);
  const [swipeHistory, setSwipeHistory] = useState<any[]>([]);
  const screens = useBreakpoint();

  const handleSwipe = (direction: 'left' | 'right') => {
    setCards((prev) => prev.slice(0, -1));
  };

  const handleUndo = () => {
    const lastSwipe = swipeHistory.pop();
    if (lastSwipe) {
      setCards((prev) => [...prev, lastSwipe.card]);
      setSwipeHistory([...swipeHistory]);
    }
  };

  const handleReject = () => setTriggerSwipe('left');
  const handleLike = () => setTriggerSwipe('right');
  const handleSuperLike = () => setTriggerSwipe('right');
  const handleBoost = () => console.log('Boost activated!');

  return (
    <DashboardLayout>
      <div
        style={{
          height: '100dvh',
          width: '100%',
          background: '#0a0a12',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Main swipe area */}
        <div style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', maxWidth: '100%', margin: '0 auto', overflow: 'hidden', }}>
          {cards.length === 0 ? (
            <Space direction="vertical" align="center" style={{ height: '100%', justifyContent: 'center', background: '#0a0a12', }}>
              <Flex
                align="center"
                justify="center"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(to right, rgba(236,72,153,0.2), rgba(239,68,68,0.2))',
                }}
              >
                <FireFilled style={{ fontSize: 36, color: '#ec4899' }} />
              </Flex>
              <Title
                level={4}
                style={{
                  color: 'white',
                  marginBottom: 4,
                  textAlign: 'center',
                }}
              >
                You're all caught up!
              </Title>
              <Text style={{ color: '#aaa', textAlign: 'center' }}>
                Check back later for new profiles
              </Text>
              <Button
                type="primary"
                shape="round"
                style={{
                  background: 'linear-gradient(to right, #ec4899, #ef4444)',
                  border: 'none',
                  marginTop: 12,
                }}
                onClick={() => setCards(getCardStack())}
              >
                Refresh
              </Button>
            </Space>
          ) : (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              {cards.slice(-3).reverse().map((card, index) => {
                const isTopCard = index === 0;
                const cardStyle = {
                  position: 'absolute' as const,
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: `scale(${1 - index * 0.04}) translateY(${index * -8}px)`,
                  zIndex: 50 - index,
                  opacity: index === 0 ? 1 : 0.9,
                };

                return isProfile(card) ? (
                  <SwipeCard
                    key={card.id}
                    profile={card}
                    onSwipe={handleSwipe}
                    style={cardStyle}
                    triggerSwipe={isTopCard ? triggerSwipe : null}
                    onSwipeComplete={() => setTriggerSwipe(null)}
                  />
                ) : (
                  <AdCard
                    key={card.id}
                    ad={card}
                    onSwipe={handleSwipe}
                    style={cardStyle}
                    triggerSwipe={isTopCard ? triggerSwipe : null}
                    onSwipeComplete={() => setTriggerSwipe(null)}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Action Buttons (overlayed at bottom) */}
        {cards.length > 0 && (
          <div
            style={{
              position: 'absolute',
              bottom: screens.xs ? '90px' : '200px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              width: screens.xs ? '90%' : 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SwipeActionButtons
              onUndo={handleUndo}
              onReject={handleReject}
              onSuperLike={handleSuperLike}
              onLike={handleLike}
              onBoost={handleBoost}
              canUndo={swipeHistory.length > 0}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Swipe;
