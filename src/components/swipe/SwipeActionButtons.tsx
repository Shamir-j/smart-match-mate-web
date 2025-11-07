'use client';

import React from 'react';
import { Button, Grid, Space } from 'antd';
import {
  HeartFilled,
  StarFilled,
  ThunderboltFilled,
  CloseOutlined,
  UndoOutlined,
} from '@ant-design/icons';

const { useBreakpoint } = Grid;

interface SwipeActionButtonsProps {
  onUndo: () => void;
  onReject: () => void;
  onSuperLike: () => void;
  onLike: () => void;
  onBoost: () => void;
  canUndo: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SwipeActionButtons: React.FC<SwipeActionButtonsProps> = ({
  onUndo,
  onReject,
  onSuperLike,
  onLike,
  onBoost,
  canUndo,
  className,
  style,
}) => {
  const screens = useBreakpoint();
  const isMobile = screens.xs || screens.sm;

  // Button size adjustments
  const baseSize = isMobile ? 64 : 72;
  const largeSize = isMobile ? 80 : 90;
  const iconBase = isMobile ? 20 : 24;
  const iconLarge = isMobile ? 26 : 30;

  const hoverStyle = (bg: string, color: string) => ({
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    touchAction: 'manipulation',
    '&:hover': {
      background: bg,
      color,
      transform: 'scale(1.06)',
      boxShadow: `0 6px 20px ${bg}40`,
    },
  });

  return (
    <Space
      style={{
        ...style,
        justifyContent: 'center',
        flexWrap: 'nowrap',
        gap: isMobile ? 14 : 20,
      }}
      align="center"
    >
      {/* Undo */}
      <Button
        shape="circle"
        icon={<UndoOutlined style={{ fontSize: iconBase }} />}
        disabled={!canUndo}
        style={{
          width: baseSize,
          height: baseSize,
          background: 'white',
          border: `2px solid ${canUndo ? '#f43f5e' : '#ccc'}`,
          color: canUndo ? '#f43f5e' : '#ccc',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          opacity: canUndo ? 1 : 0.6,
          ...hoverStyle('#f43f5e', 'white'),
        }}
        onClick={onUndo}
      />

      {/* Reject */}
      <Button
        shape="circle"
        icon={<CloseOutlined style={{ fontSize: iconLarge }} />}
        style={{
          width: largeSize,
          height: largeSize,
          background: 'white',
          border: '2px solid #ef4444',
          color: '#ef4444',
          boxShadow: '0 4px 15px rgba(239,68,68,0.3)',
          ...hoverStyle('#ef4444', 'white'),
        }}
        onClick={onReject}
      />

      {/* Super Like */}
      <Button
        shape="circle"
        icon={<StarFilled style={{ fontSize: iconBase }} />}
        style={{
          width: baseSize,
          height: baseSize,
          background: 'white',
          border: '2px solid #3b82f6',
          color: '#3b82f6',
          boxShadow: '0 4px 15px rgba(59,130,246,0.3)',
          ...hoverStyle('#3b82f6', 'white'),
        }}
        onClick={onSuperLike}
      />

      {/* Like */}
      <Button
        shape="circle"
        icon={<HeartFilled style={{ fontSize: iconLarge }} />}
        style={{
          width: largeSize,
          height: largeSize,
          background: '#10b981',
          border: '2px solid #10b981',
          color: 'white',
          boxShadow: '0 4px 15px rgba(16,185,129,0.4)',
          ...hoverStyle('#10b981', 'white'),
        }}
        onClick={onLike}
      />

      {/* Boost */}
      <Button
        shape="circle"
        icon={<ThunderboltFilled style={{ fontSize: iconBase }} />}
        style={{
          width: baseSize,
          height: baseSize,
          background: 'white',
          border: '2px solid #a855f7',
          color: '#a855f7',
          boxShadow: '0 4px 15px rgba(168,85,247,0.3)',
          ...hoverStyle('#a855f7', 'white'),
        }}
        onClick={onBoost}
      />
    </Space>
  );
};


SwipeActionButtons.displayName = 'SwipeActionButtons';

export default SwipeActionButtons;
