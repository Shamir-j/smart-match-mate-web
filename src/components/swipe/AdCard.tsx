'use client';

import { motion, useMotionValue, useTransform, PanInfo, useAnimate } from 'motion/react';
import { ExternalLink, X, Sparkles } from 'lucide-react';
import { Card, Typography, Button, Flex, Tag } from 'antd';
import { useState, useEffect } from 'react';
import { Ad } from '@/utils/mockData';

const { Title, Text } = Typography;

interface AdCardProps {
    ad: Ad;
    onSwipe: (direction: 'left' | 'right') => void;
    style?: React.CSSProperties;
    triggerSwipe?: 'left' | 'right' | null;
    onSwipeComplete?: () => void;
}

const AdCard: React.FC<AdCardProps> = ({ ad, onSwipe, style, triggerSwipe, onSwipeComplete, }: AdCardProps) => {
    const [showClickPrompt, setShowClickPrompt] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotate = useTransform(x, [-300, 0, 300], [-30, 0, 30]);
    const opacity = useTransform(x, [-250, -150, 0, 150, 250], [0, 1, 1, 1, 0]);
    const [scope, animate] = useAnimate();

    // --- external trigger swipe animation
    useEffect(() => {
        if (triggerSwipe) {
            const targetX = triggerSwipe === 'right' ? 400 : -400;
            animate(
                scope.current,
                { x: targetX, opacity: 0, rotate: triggerSwipe === 'right' ? 30 : -30 },
                { duration: 0.4, ease: 'easeOut' }
            ).then(() => {
                onSwipe(triggerSwipe);
                onSwipeComplete?.();
            });
        }
    }, [triggerSwipe, animate, scope, onSwipe, onSwipeComplete]);

    // --- handle swipe gesture
    const handleDragEnd = (_: any, info: PanInfo) => {
        const threshold = 120;
        if (Math.abs(info.offset.x) > threshold) {
            const direction = info.offset.x > 0 ? 'right' : 'left';
            const targetX = direction === 'right' ? 400 : -400;
            animate(scope.current, { x: targetX, opacity: 0 }, { duration: 0.3 }).then(() =>
                onSwipe(direction)
            );
        }
    };

    const handleCtaClick = () => {
        setShowClickPrompt(true);
        setTimeout(() => setShowClickPrompt(false), 2000);
    };

    return (
        <motion.div
            ref={scope}
            style={{
                position: 'absolute',
                inset: 0,
                cursor: 'grab',
                touchAction: 'pan-y',
                width: '100%',
                height: '100%',
                x,
                y,
                rotate,
                opacity,
                ...style,
            }}
            drag
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
                    boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
                    border: '2px solid #facc15',
                    background: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                bodyStyle={{ padding: 0, height: '100%' }}
                bordered={false}
            >
                {/* Sponsored Tag */}
                <Tag
                    color="gold"
                    icon={<Sparkles size={14} />}
                    style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 10,
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        padding: '4px 8px',
                    }}
                >
                    Sponsored
                </Tag>

                {/* Ad Image */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${ad.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 40%, rgba(0,0,0,0.95))',
                        }}
                    />
                </div>

                {/* INTERESTED / SKIP indicators */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 56,
                        left: 24,
                        border: '3px solid #10b981',
                        color: '#10b981',
                        padding: '6px 18px',
                        borderRadius: 10,
                        transform: 'rotate(-15deg)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        opacity: useTransform(x, [0, 150], [0, 1]),
                    }}
                >
                    <Title level={4} style={{ margin: 0, fontSize: '1rem' }}>
                        INTERESTED
                    </Title>
                </motion.div>

                <motion.div
                    style={{
                        position: 'absolute',
                        top: 56,
                        right: 24,
                        border: '3px solid #6b7280',
                        color: '#6b7280',
                        padding: '6px 18px',
                        borderRadius: 10,
                        transform: 'rotate(15deg)',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        opacity: useTransform(x, [-150, 0], [1, 0]),
                    }}
                >
                    <Title level={4} style={{ margin: 0, fontSize: '1rem' }}>
                        SKIP
                    </Title>
                </motion.div>

                {/* Ad Details */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 'env(safe-area-inset-bottom, 16px)',
                        left: 0,
                        right: 0,
                        padding: '0 16px 16px',
                        color: 'white',
                    }}
                >
                    <div style={{ marginBottom: 12 }}>
                        <Flex align="center" justify="flex-start" gap={8} style={{ marginBottom: 8 }}>
                            <Title level={4} style={{ color: 'white', margin: 0, fontSize: '1.1rem' }}>
                                {ad.brand}
                            </Title>
                            <Tag
                                color="default"
                                style={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.5)',
                                    fontSize: '0.7rem',
                                }}
                            >
                                {ad.category}
                            </Tag>
                        </Flex>

                        <Title
                            level={5}
                            style={{
                                color: 'white',
                                marginBottom: 4,
                                fontSize: '0.95rem',
                                lineHeight: 1.3,
                            }}
                        >
                            {ad.title}
                        </Title>
                        <Text
                            style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: '0.8rem',
                                lineHeight: 1.4,
                            }}
                        >
                            {ad.description}
                        </Text>
                    </div>

                    <Flex gap={8} wrap="wrap">
                        <Button
                            block
                            size="large"
                            onClick={handleCtaClick}
                            style={{
                                flex: 1,
                                backgroundColor: 'white',
                                color: '#111',
                                border: 'none',
                                fontWeight: 500,
                                minHeight: 44,
                            }}
                            icon={<ExternalLink size={16} />}
                        >
                            {ad.callToAction}
                        </Button>

                        <Button
                            size="large"
                            shape="circle"
                            icon={<X size={18} />}
                            onClick={() => onSwipe('left')}
                            style={{
                                width: 44,
                                height: 44,
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                color: 'white',
                                backdropFilter: 'blur(4px)',
                            }}
                        />
                    </Flex>

                    <Text
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            marginTop: 10,
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: 11,
                        }}
                    >
                        Swipe right if interested • Swipe left to skip
                    </Text>
                </div>

                {/* Click Prompt */}
                {showClickPrompt && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(6px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 16px',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            style={{
                                background: 'white',
                                color: '#111',
                                padding: '20px',
                                borderRadius: 10,
                                textAlign: 'center',
                                width: '100%',
                                maxWidth: 300,
                            }}
                        >
                            <Text strong>This would open:</Text>
                            <div
                                style={{
                                    marginTop: 8,
                                    wordBreak: 'break-all',
                                    color: '#1677ff',
                                    fontSize: 13,
                                }}
                            >
                                {ad.url}
                            </div>
                        </div>
                    </motion.div>
                )}
            </Card>
        </motion.div>
    );
}

AdCard.displayName = 'AdCard';

export default AdCard;

