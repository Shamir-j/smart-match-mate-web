'use client';

import React, { useState } from 'react';
import { Card, Button, Typography, Space, message, Tag, Spin } from 'antd';
import { HeartOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import SwipeCard from '../../../components/matches/SwipeCard';

const { Title, Text } = Typography;

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

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 25,
    bio: 'Love hiking, yoga, and good coffee. Looking for someone to explore the city with! 🌟',
    photos: ['https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop'],
    distance: 2,
    interests: ['Hiking', 'Yoga', 'Coffee', 'Photography'],
    location: 'Downtown'
  },
  {
    id: '2',
    name: 'Alex',
    age: 28,
    bio: 'Fitness enthusiast and foodie. Always up for trying new restaurants or hitting the gym! 💪',
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'],
    distance: 5,
    interests: ['Fitness', 'Food', 'Travel', 'Music'],
    location: 'Midtown'
  },
  {
    id: '3',
    name: 'Emma',
    age: 23,
    bio: 'Artist and dreamer. Looking for spontaneous adventures and deep conversations ✨',
    photos: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'],
    distance: 8,
    interests: ['Art', 'Music', 'Books', 'Movies'],
    location: 'Arts District'
  }
];

export default function MatchesPage() {
    const [currentUsers] = useState<User[]>(mockUsers.slice(0, 1));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);

  const currentUser = currentUsers[currentIndex];

  const handleSwipe = async (userId: string, direction: 'left' | 'right') => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (direction === 'right') {
      setMatches(prev => [...prev, userId]);
      message.success({
        content: `You liked ${currentUser.name}! 💖`,
        duration: 2
      });

      // Simulate match notification (50% chance)
      if (Math.random() > 0.5) {
        setTimeout(() => {
          message.success({
            content: `🎉 It's a match with ${currentUser.name}!`,
            duration: 4
          });
        }, 1000);
      }
    }

    // Move to next user
    setCurrentIndex(prev => prev + 1);
    setIsLoading(false);
  };

  const loadMoreUsers = () => {
    // In a real app, this would fetch more users from the API
    setCurrentIndex(0);
    message.info('Loading more potential matches...');
  };

  const resetSwipes = () => {
    setCurrentIndex(0);
    setMatches([]);
    message.info('Reset complete! Start swiping again.');
  };

  if (isLoading) {
    return (
      <div style={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{ maxWidth: 500, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 30,
          padding: '20px 0'
        }}>
          <Title level={2} style={{ color: '#FF3A8A', margin: 0 }}>
            Discover
          </Title>
          <Text type="secondary">
            Find people near you • {matches.length} matches so far
          </Text>
        </div>

        {/* Swipe Cards */}
        {currentIndex < currentUsers.length ? (
          <SwipeCard
            key={currentUser.id}
            user={currentUser}
            onSwipe={handleSwipe}
          />
        ) : (
          /* No more users */
          <Card
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              borderRadius: 16,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
            }}
          >
            <Space direction="vertical" size="large">
              <div style={{ fontSize: 48 }}>🎯</div>
              <div>
                <Title level={3}>You&apos;ve seen everyone!</Title>
                <Text type="secondary">
                  Check back later for new people, or expand your discovery settings.
                </Text>
              </div>
              
              <Space>
                <Button 
                  type="primary" 
                  size="large"
                  icon={<ReloadOutlined />}
                  onClick={loadMoreUsers}
                  style={{ 
                    backgroundColor: '#FF3A8A',
                    borderColor: '#FF3A8A',
                    borderRadius: 25,
                    padding: '0 30px'
                  }}
                >
                  Load More
                </Button>
                <Button 
                  size="large"
                  icon={<SettingOutlined />}
                  onClick={resetSwipes}
                  style={{ 
                    borderRadius: 25,
                    padding: '0 30px'
                  }}
                >
                  Settings
                </Button>
              </Space>
            </Space>
          </Card>
        )}

        {/* Stats */}
        {matches.length > 0 && (
          <div style={{ 
            marginTop: 30,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 12,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            <Space>
              <HeartOutlined style={{ color: '#FF3A8A', fontSize: 20 }} />
              <Text strong>
                You have {matches.length} match{matches.length !== 1 ? 'es' : ''}
              </Text>
            </Space>
          </div>
        )}

        {/* Navigation Hint */}
        <div style={{
          marginTop: 20,
          textAlign: 'center',
          color: '#999',
          fontSize: 12
        }}>
          <Text type="secondary">
            Tap the photo to see more • Swipe or use buttons to decide
          </Text>
        </div>
      </div>
    </div>
  );
}