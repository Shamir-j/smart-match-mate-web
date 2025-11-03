'use client';

import React, { useState, useEffect } from 'react';
import { Card, Avatar, Button, Tag, Row, Col, Divider, message, Space, Modal } from 'antd';
import { 
  HeartOutlined, 
  MessageOutlined, 
  CloseOutlined, 
  EnvironmentOutlined,
  CalendarOutlined,
  StarOutlined,
  UserOutlined,

  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';

interface UserProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  bio: string;
  location: string;
  distance: number;
  photos: string[];
  interests: string[];
  occupation: string;
  education: string;
  height: string;
  lookingFor: string;
  isVerified: boolean;
  joinDate: Date;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  preferences: {
    ageRange: [number, number];
    maxDistance: number;
    interests: string[];
  };
  isLiked?: boolean;
  isMatched?: boolean;
  mutualFriends?: number;
  commonInterests?: string[];
}

// Mock user data
const mockUsers: Record<string, UserProfile> = {
  '1': {
    id: '1',
    name: 'Sarah Mitchell',
    age: 25,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
    bio: 'Adventure seeker, coffee enthusiast, and dog lover. I enjoy hiking, trying new restaurants, and exploring the city. Looking to meet someone genuine who shares similar passions!',
    location: 'San Francisco, CA',
    distance: 2,
    photos: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop'
    ],
    interests: ['Hiking', 'Photography', 'Coffee', 'Travel', 'Yoga', 'Dogs', 'Art'],
    occupation: 'UX Designer',
    education: 'Stanford University',
    height: "5&apos;6&quot;",
    lookingFor: 'Long-term relationship',
    isVerified: true,
    joinDate: new Date(2023, 5, 15),
    socialLinks: {
      instagram: '@sarahm_adventures',
      linkedin: 'sarah-mitchell-ux'
    },
    preferences: {
      ageRange: [23, 30],
      maxDistance: 25,
      interests: ['Hiking', 'Travel', 'Photography']
    },
    isMatched: true,
    mutualFriends: 3,
    commonInterests: ['Hiking', 'Photography', 'Coffee']
  },
  '2': {
    id: '2',
    name: 'Alex Thompson',
    age: 28,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Software engineer by day, chef by night. I love cooking, rock climbing, and good conversations over wine. Always up for trying new cuisines or exploring hidden gems in the city.',
    location: 'San Francisco, CA',
    distance: 5,
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=600&fit=crop'
    ],
    interests: ['Cooking', 'Rock Climbing', 'Wine', 'Technology', 'Music', 'Travel'],
    occupation: 'Software Engineer',
    education: 'UC Berkeley',
    height: "6&apos;1&quot;",
    lookingFor: 'Serious dating',
    isVerified: true,
    joinDate: new Date(2023, 3, 8),
    socialLinks: {
      linkedin: 'alex-thompson-dev',
      twitter: '@alexcodes'
    },
    preferences: {
      ageRange: [24, 32],
      maxDistance: 20,
      interests: ['Cooking', 'Technology', 'Travel']
    },
    isMatched: true,
    mutualFriends: 1,
    commonInterests: ['Travel', 'Technology']
  },
  'user-456': {
    id: 'user-456',
    name: 'Demo User',
    age: 26,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
    bio: 'This is a demo profile to showcase the dynamic routing feature. In a real app, this would be populated from your database based on the user ID.',
    location: 'Demo City, CA',
    distance: 3,
    photos: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop'
    ],
    interests: ['Demo', 'Testing', 'Development', 'Code'],
    occupation: 'Demo Profile',
    education: 'Demo University',
    height: "5&apos;10&quot;",
    lookingFor: 'Demo purposes',
    isVerified: false,
    joinDate: new Date(),
    socialLinks: {},
    preferences: {
      ageRange: [25, 30],
      maxDistance: 15,
      interests: ['Demo', 'Testing']
    },
    isLiked: false,
    mutualFriends: 0,
    commonInterests: []
  }
};

export default function UserProfilePage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.userId as string;
  
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false);

  useEffect(() => {
    console.log('User ID from URL:', userId);
    
    // In a real app, you would fetch user data from your API
    const userData = mockUsers[userId];
    
    if (userData) {
      setUser(userData);
    } else {
      // Generate a dynamic demo user for any user ID
      const demoUser: UserProfile = {
        id: userId,
        name: `User ${userId}`,
        age: Math.floor(Math.random() * 15) + 22, // Age between 22-36
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
        bio: `This is a dynamically generated profile for user ${userId}. In a real application, this would be fetched from your database.`,
        location: 'Demo City, CA',
        distance: Math.floor(Math.random() * 25) + 1,
        photos: [
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop',
          'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop'
        ],
        interests: ['Dynamic', 'Routing', 'Demo', 'Next.js'],
        occupation: 'Demo Profile',
        education: 'Demo University',
        height: "5'9\"",
        lookingFor: 'Demo connection',
        isVerified: Math.random() > 0.5,
        joinDate: new Date(),
        socialLinks: {},
        preferences: {
          ageRange: [25, 35],
          maxDistance: 20,
          interests: ['Demo', 'Testing']
        },
        isLiked: false,
        mutualFriends: 0,
        commonInterests: []
      };
      setUser(demoUser);
    }
  }, [userId]);

  const handleLike = () => {
    if (!user) return;
    
    setUser(prev => prev ? { ...prev, isLiked: true } : null);
    message.success(`You liked ${user.name}!`);
  };

  const handleMessage = () => {
    if (!user) return;
    
    // Navigate to chat with this user
    router.push(`/chat/${user.id}`);
  };

  const handlePass = () => {
    if (!user) return;
    
    message.info(`You passed on ${user.name}`);
    router.back();
  };

  const openPhotoModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setIsPhotoModalVisible(true);
  };

  if (!user) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <h2>User not found</h2>
        <p>The user with ID &quot;{userId}&quot; could not be found.</p>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <Row gutter={[24, 24]}>
          {/* Profile Header */}
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center' }}>
              <Avatar
                size={200}
                src={user.avatar}
                icon={<UserOutlined />}
                style={{ marginBottom: '16px', cursor: 'pointer' }}
                onClick={() => openPhotoModal(0)}
              />
              
              <div style={{ marginBottom: '16px' }}>
                <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  {user.name}, {user.age}
                  {user.isVerified && (
                    <Tag color="blue" icon={<StarOutlined />}>
                      Verified
                    </Tag>
                  )}
                </h2>
                <p style={{ color: '#666', margin: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <EnvironmentOutlined />
                  {user.location} • {user.distance} miles away
                </p>
              </div>

              {/* Action Buttons */}
              <Space size="middle">
                <Button 
                  type="primary" 
                  danger 
                  icon={<CloseOutlined />}
                  size="large"
                  onClick={handlePass}
                >
                  Pass
                </Button>
                <Button 
                  type="primary" 
                  icon={<MessageOutlined />}
                  size="large"
                  onClick={handleMessage}
                  disabled={!user.isMatched}
                >
                  {user.isMatched ? 'Message' : 'Match First'}
                </Button>
                <Button 
                  type="primary" 
                  icon={<HeartOutlined />}
                  size="large"
                  onClick={handleLike}
                  disabled={user.isLiked}
                >
                  {user.isLiked ? 'Liked!' : 'Like'}
                </Button>
              </Space>
            </div>
          </Col>

          {/* Profile Details */}
          <Col xs={24} md={16}>
            <div style={{ marginBottom: '24px' }}>
              <h3>About</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{user.bio}</p>
            </div>

            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col span={12}>
                <strong>Occupation:</strong><br />
                {user.occupation}
              </Col>
              <Col span={12}>
                <strong>Education:</strong><br />
                {user.education}
              </Col>
              <Col span={12}>
                <strong>Height:</strong><br />
                {user.height}
              </Col>
              <Col span={12}>
                <strong>Looking for:</strong><br />
                {user.lookingFor}
              </Col>
            </Row>

            {user.mutualFriends && user.mutualFriends > 0 && (
              <div style={{ marginBottom: '16px' }}>
                <Tag color="green">{user.mutualFriends} mutual friends</Tag>
              </div>
            )}

            {user.commonInterests && user.commonInterests.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h4>Common Interests</h4>
                <Space wrap>
                  {user.commonInterests.map((interest) => (
                    <Tag key={interest} color="blue">{interest}</Tag>
                  ))}
                </Space>
              </div>
            )}

            <div style={{ marginBottom: '24px' }}>
              <h4>Interests</h4>
              <Space wrap>
                {user.interests.map((interest) => (
                  <Tag key={interest}>{interest}</Tag>
                ))}
              </Space>
            </div>

            {/* Social Links */}
            {Object.keys(user.socialLinks).length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h4>Social Media</h4>
                <Space>
                  {user.socialLinks.instagram && (
                    <Button icon={<InstagramOutlined />} type="link">
                      {user.socialLinks.instagram}
                    </Button>
                  )}
                  {user.socialLinks.linkedin && (
                    <Button icon={<LinkedinOutlined />} type="link">
                      {user.socialLinks.linkedin}
                    </Button>
                  )}
                  {user.socialLinks.twitter && (
                    <Button icon={<TwitterOutlined />} type="link">
                      {user.socialLinks.twitter}
                    </Button>
                  )}
                </Space>
              </div>
            )}

            <div style={{ color: '#666', fontSize: '14px' }}>
              <CalendarOutlined /> Joined {user.joinDate.toLocaleDateString()}
            </div>
          </Col>
        </Row>

        {/* Photo Gallery */}
        {user.photos.length > 1 && (
          <>
            <Divider />
            <h4>Photos</h4>
            <Row gutter={[8, 8]}>
              {user.photos.map((photo, index) => (
                <Col key={index} xs={12} sm={8} md={6}>
                  <div
                    style={{
                      width: '100%',
                      height: '150px',
                      backgroundImage: `url(${photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      border: '1px solid #f0f0f0'
                    }}
                    onClick={() => openPhotoModal(index)}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Card>

      {/* Photo Modal */}
      <Modal
        open={isPhotoModalVisible}
        onCancel={() => setIsPhotoModalVisible(false)}
        footer={null}
        width="80vw"
        style={{ top: 20 }}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src={user.photos[currentPhotoIndex]}
            alt={`${user.name} - Photo ${currentPhotoIndex + 1}`}
            style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
          />
          <div style={{ marginTop: '16px' }}>
            <Space>
              {user.photos.map((_, index) => (
                <Button
                  key={index}
                  type={index === currentPhotoIndex ? 'primary' : 'default'}
                  size="small"
                  onClick={() => setCurrentPhotoIndex(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
}