'use client';

import React from 'react';
import { Button, Typography, Space, Flex } from 'antd';
import { ReloadOutlined, FireFilled } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

interface EmptyStateProps {
  onRefresh: () => void;
}

export function EmptyState({ onRefresh }: EmptyStateProps) {
  const containerStyle: React.CSSProperties = {
    height: '100%',
    padding: 32
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center' as const,
    maxWidth: 384
  };

  const iconContainerStyle: React.CSSProperties = {
    width: 96,
    height: 96,
    margin: '0 auto 24px auto',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #fce7f3 0%, #fde2e7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const primaryButtonStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
    border: 'none',
    borderRadius: 24,
    height: 48,
    padding: '0 32px',
    fontWeight: 600
  };

  const secondaryButtonStyle: React.CSSProperties = {
    color: '#ec4899',
    fontWeight: 500,
    border: 'none',
    padding: 0,
    height: 'auto'
  };

  return (
    <Flex justify="center" align="center" style={containerStyle}>
      <div style={contentStyle}>
        <div style={iconContainerStyle}>
          <FireFilled style={{ color: '#ec4899', fontSize: 48 }} />
        </div>
        
        <Title level={2} style={{ 
          color: '#1f2937', 
          fontSize: 32, 
          fontWeight: 700, 
          marginBottom: 8 
        }}>
          You're all caught up!
        </Title>
        
        <Paragraph style={{ 
          color: '#6b7280', 
          fontSize: 16, 
          marginBottom: 24, 
          lineHeight: 1.6 
        }}>
          No more profiles to show right now. Check back later for fresh faces, 
          or try expanding your discovery preferences.
        </Paragraph>
        
        <Button
          type="primary"
          size="large"
          icon={<ReloadOutlined />}
          onClick={onRefresh}
          style={primaryButtonStyle}
        >
          Refresh Discovery
        </Button>
        
        <Space direction="vertical" size="small" style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 14, color: '#9ca3af' }}>or</Text>
          <Button
            type="link"
            style={secondaryButtonStyle}
          >
            Adjust Preferences
          </Button>
        </Space>
      </div>
    </Flex>
  );
}