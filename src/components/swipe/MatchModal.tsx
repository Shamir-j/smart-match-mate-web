'use client';

import React from 'react';
import { Modal, Button, Avatar, Typography, Space, Flex } from 'antd';
import { MessageOutlined, HeartFilled } from '@ant-design/icons';
import { Profile } from '../../data/swipeData';

const { Title, Paragraph } = Typography;

interface MatchModalProps {
  profile: Profile;
  onClose: () => void;
  onSendMessage: () => void;
}

export function MatchModal({ profile, onClose, onSendMessage }: MatchModalProps) {
  const modalStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 100%)',
    borderRadius: 20,
    overflow: 'hidden'
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center' as const,
    padding: 24
  };

  const matchHeaderStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    marginBottom: 24
  };

  const heartAnimationStyle: React.CSSProperties = {
    position: 'absolute',
    animation: 'pulse 1.5s ease-in-out infinite'
  };

  const matchTitleStyle: React.CSSProperties = {
    fontSize: 48,
    fontWeight: 700,
    background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0
  };

  const avatarContainerStyle: React.CSSProperties = {
    border: '4px solid #ffffff',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  };

  const primaryButtonStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
    border: 'none',
    borderRadius: 24,
    height: 48,
    width: '100%',
    fontWeight: 600
  };

  const secondaryButtonStyle: React.CSSProperties = {
    borderRadius: 24,
    height: 48,
    width: '100%',
    fontWeight: 500
  };

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      styles={{
        content: modalStyle,
        mask: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(5px)'
        }
      }}
    >
      <div style={contentStyle}>
        {/* Match Animation */}
        <div style={matchHeaderStyle}>
          {/* Hearts Animation */}
          <div style={{
            ...heartAnimationStyle,
            top: -16,
            left: -16,
            color: '#ec4899'
          }}>
            <HeartFilled style={{ fontSize: 32 }} />
          </div>
          <div style={{
            ...heartAnimationStyle,
            top: -8,
            right: -16,
            color: '#ef4444',
            animationDelay: '0.3s'
          }}>
            <HeartFilled style={{ fontSize: 24 }} />
          </div>
          <div style={{
            ...heartAnimationStyle,
            bottom: -16,
            left: -8,
            color: '#f472b6',
            animationDelay: '0.5s'
          }}>
            <HeartFilled style={{ fontSize: 20 }} />
          </div>
          
          <Title level={1} style={matchTitleStyle}>
            IT'S A MATCH!
          </Title>
        </div>

        {/* Profile Images */}
        <Flex justify="center" align="center" gap="large" style={{ marginBottom: 24 }}>
          <Avatar
            size={80}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            style={avatarContainerStyle}
          />

          <HeartFilled style={{ 
            color: '#ec4899', 
            fontSize: 48, 
            animation: 'pulse 1.5s ease-in-out infinite' 
          }} />

          <Avatar
            size={80}
            src={profile.images[0]}
            style={avatarContainerStyle}
          />
        </Flex>

        {/* Match Info */}
        <div style={{ marginBottom: 24 }}>
          <Title level={3} style={{ 
            color: '#1f2937', 
            fontSize: 20, 
            fontWeight: 600, 
            marginBottom: 8 
          }}>
            You and {profile.name} liked each other!
          </Title>
          <Paragraph style={{ color: '#6b7280', fontSize: 16, margin: 0 }}>
            Start a conversation and make plans to meet up tonight.
          </Paragraph>
        </div>

        {/* Action Buttons */}
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Button
            type="primary"
            size="large"
            icon={<MessageOutlined />}
            onClick={onSendMessage}
            style={primaryButtonStyle}
          >
            Send Message
          </Button>
          
          <Button
            type="default"
            size="large"
            onClick={onClose}
            style={secondaryButtonStyle}
          >
            Keep Swiping
          </Button>
        </Space>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </Modal>
  );
}