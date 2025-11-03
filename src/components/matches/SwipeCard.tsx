'use client';

import React, { useState } from 'react';
import { Card, Button, Avatar, Tag, Space, Typography, Row, Col } from 'antd';
import { HeartOutlined, CloseOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  distance: number;
  interests: string[];
  location: string;
}

interface SwipeCardProps {
  user: User;
  onSwipe: (userId: string, direction: 'left' | 'right') => void;
}

export default function SwipeCard({ user, onSwipe }: SwipeCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleLike = () => {
    onSwipe(user.id, 'right');
  };

  const handlePass = () => {
    onSwipe(user.id, 'left');
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev < user.photos.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <Card
      style={{ 
        width: '100%', 
        maxWidth: 400, 
        height: 600,
        margin: '0 auto',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
      }}
      cover={
        <div 
          style={{ 
            height: 400, 
            position: 'relative',
            cursor: 'pointer',
            background: `url(${user.photos[currentPhotoIndex]}) center/cover no-repeat`,
            backgroundColor: '#f0f0f0'
          }}
          onClick={nextPhoto}
        >
          {user.photos.length > 1 && (
            <div style={{
              position: 'absolute',
              top: 10,
              left: 10,
              right: 10,
              display: 'flex',
              gap: 4
            }}>
              {user.photos.map((_, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    height: 3,
                    backgroundColor: index === currentPhotoIndex ? 'white' : 'rgba(255,255,255,0.5)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Age Badge */}
          <div style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 'bold'
          }}>
            {user.age}
          </div>
        </div>
      }
      bodyStyle={{ padding: 16 }}
    >
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        {/* Name and Location */}
        <div>
          <Title level={4} style={{ margin: 0 }}>
            {user.name}
          </Title>
          <Space>
            <EnvironmentOutlined style={{ color: '#1890ff' }} />
            <Text type="secondary">{user.distance}km away</Text>
          </Space>
        </div>

        {/* Bio */}
        <Text style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          color: '#666'
        }}>
          {user.bio}
        </Text>

        {/* Interests */}
        <div>
          <Space wrap size={[0, 4]}>
            {user.interests.slice(0, 3).map((interest, index) => (
              <Tag 
                key={index} 
                color="blue" 
                style={{ margin: '2px', borderRadius: 12 }}
              >
                {interest}
              </Tag>
            ))}
            {user.interests.length > 3 && (
              <Tag color="default" style={{ borderRadius: 12 }}>
                +{user.interests.length - 3} more
              </Tag>
            )}
          </Space>
        </div>
      </Space>

      {/* Action Buttons */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Button
            type="default"
            size="large"
            icon={<CloseOutlined />}
            onClick={handlePass}
            style={{
              width: '100%',
              height: 50,
              borderRadius: 25,
              border: '2px solid #ff4757',
              color: '#ff4757',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18
            }}
          >
            Pass
          </Button>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            size="large"
            icon={<HeartOutlined />}
            onClick={handleLike}
            style={{
              width: '100%',
              height: 50,
              borderRadius: 25,
              backgroundColor: '#FF3A8A',
              borderColor: '#FF3A8A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18
            }}
          >
            Like
          </Button>
        </Col>
      </Row>
    </Card>
  );
}