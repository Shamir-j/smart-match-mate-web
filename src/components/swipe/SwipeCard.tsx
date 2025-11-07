'use client';

import { motion, useMotionValue, useTransform, PanInfo, useAnimate } from 'motion/react';
import { MapPin, ChevronUp } from 'lucide-react';
import { Card, Typography, Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Profile } from '@/utils/mockData';

const { Title, Text } = Typography;

interface SwipeCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
  style?: React.CSSProperties;
  triggerSwipe?: 'left' | 'right' | null;
  onSwipeComplete?: () => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ profile, onSwipe, style, triggerSwipe, onSwipeComplete, }: SwipeCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-30, 0, 30]);
  const opacity = useTransform(x, [-250, -150, 0, 150, 250], [0, 1, 1, 1, 0]);
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (triggerSwipe && !isAnimating) {
      setIsAnimating(true);
      const targetX = triggerSwipe === 'right' ? 500 : -500;
      animate(
        scope.current,
        { x: targetX, opacity: 0, rotate: triggerSwipe === 'right' ? 30 : -30 },
        { duration: 0.45, ease: 'easeOut' }
      ).then(() => {
        onSwipe(triggerSwipe);
        onSwipeComplete?.();
        setIsAnimating(false);
      });
    }
  }, [triggerSwipe, animate, scope, onSwipe, onSwipeComplete, isAnimating]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (isAnimating) return;
    const threshold = 180;
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      const targetX = direction === 'right' ? 500 : -500;
      setIsAnimating(true);
      animate(scope.current, { x: targetX, opacity: 0 }, { duration: 0.35, ease: 'easeOut' }).then(() => {
        onSwipe(direction);
        setIsAnimating(false);
      });
    } else {
      animate(scope.current, { x: 0, y: 0, rotate: 0 }, { type: 'spring', stiffness: 260, damping: 30 });
    }
  };

  return (
    <motion.div
      ref={scope}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        cursor: isAnimating ? 'default' : 'grab',
        x,
        y,
        rotate,
        opacity,
        ...style,
      }}
      drag={!isAnimating}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      whileTap={{ cursor: 'grabbing', scale: 0.97 }}
      onDragEnd={handleDragEnd}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Card
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 18,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
          background: '#000',
        }}
        styles={{ body: { padding: 0, height: '100%' } }}
        variant='borderless'
      >
        {/* Active Badge */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: 20,
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#10b981',
            }}
          />
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 500 }}>
            Recently Active
          </Text>
        </div>

        {/* Profile Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${profile.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.2) 30%, transparent 50%, rgba(0,0,0,0.85) 100%)',
            }}
          />
        </div>

        {/* LIKE / NOPE */}
        <motion.div
          style={{
            position: 'absolute',
            top: 64,
            left: 32,
            border: '4px solid #10b981',
            color: '#10b981',
            padding: '10px 24px',
            borderRadius: 12,
            transform: 'rotate(-20deg)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            opacity: useTransform(x, [0, 150], [0, 1]),
            scale: useTransform(x, [0, 150], [0.8, 1]),
          }}
        >
          <Title level={3} style={{ margin: 0, fontWeight: 700 }}>
            LIKE
          </Title>
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: 64,
            right: 32,
            border: '4px solid #ef4444',
            color: '#ef4444',
            padding: '10px 24px',
            borderRadius: 12,
            transform: 'rotate(20deg)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            opacity: useTransform(x, [-150, 0], [1, 0]),
            scale: useTransform(x, [-150, 0], [1, 0.8]),
          }}
        >
          <Title level={3} style={{ margin: 0, fontWeight: 700 }}>
            NOPE
          </Title>
        </motion.div>

        {/* Bottom Info */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            padding: '0 20px',
            color: 'white',
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Title level={3} style={{ color: 'white', margin: 0, fontWeight: 600 }}>
                {profile.name}, {profile.age}
              </Title>
              <CheckCircleFilled
                style={{
                  color: '#1DA1F2',
                  fontSize: 18,
                  filter: 'drop-shadow(0 0 4px rgba(29,161,242,0.5))',
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <MapPin size={14} color="rgba(255,255,255,0.8)" />
              <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                {Math.round(profile.distance / 1000)} km away
              </Text>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              shape="circle"
              icon={<ChevronUp size={18} color="#10b981" />}
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(6px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                width: 44,
                height: 44,
              }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.9)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

SwipeCard.displayName = 'SwipeCard';

export default SwipeCard;
