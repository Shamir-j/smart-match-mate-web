'use client';

import React from 'react';
import { Card, Row, Col, Typography, Space, Button, Avatar, Statistic } from 'antd';
import { 
  HeartOutlined, 
  MessageOutlined, 
  UserOutlined,
  TrophyOutlined,
  EyeOutlined,
  FireOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function AppDashboard() {
  const stats = {
    totalMatches: 42,
    newMessages: 8,
    profileViews: 156,
    likes: 23
  };

  const recentMatches = [
    {
      id: '1',
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
      age: 25,
      matchedAt: '2 hours ago'
    },
    {
      id: '2', 
      name: 'Alex',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      age: 28,
      matchedAt: '1 day ago'
    },
    {
      id: '3',
      name: 'Emma',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      age: 23,
      matchedAt: '2 days ago'
    }
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* Welcome Section */}
        <Card>
          <Space direction="vertical" size="small">
            <Title level={2} style={{ margin: 0 }}>
              Welcome back! 👋
            </Title>
            <Text type="secondary">
              You have {stats.newMessages} new messages and {stats.likes} new likes
            </Text>
          </Space>
        </Card>

        {/* Stats Cards */}
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="Total Matches"
                value={stats.totalMatches}
                prefix={<HeartOutlined style={{ color: '#ff4d4f' }} />}
                valueStyle={{ color: '#ff4d4f' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="New Messages"
                value={stats.newMessages}
                prefix={<MessageOutlined style={{ color: '#1890ff' }} />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="Profile Views"
                value={stats.profileViews}
                prefix={<EyeOutlined style={{ color: '#52c41a' }} />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <Statistic
                title="New Likes"
                value={stats.likes}
                prefix={<FireOutlined style={{ color: '#fa8c16' }} />}
                valueStyle={{ color: '#fa8c16' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Card title="Quick Actions" extra={<TrophyOutlined />}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Button 
                type="primary" 
                size="large" 
                block 
                icon={<HeartOutlined />}
                onClick={() => window.location.href = '/matches'}
              >
                Start Swiping
              </Button>
            </Col>
            <Col xs={24} sm={8}>
              <Button 
                size="large" 
                block 
                icon={<MessageOutlined />}
                onClick={() => window.location.href = '/chat'}
              >
                View Messages
              </Button>
            </Col>
            <Col xs={24} sm={8}>
              <Button 
                size="large" 
                block 
                icon={<UserOutlined />}
                onClick={() => window.location.href = '/profile/edit'}
              >
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Recent Matches */}
        <Card title="Recent Matches" extra={<span>{recentMatches.length} new</span>}>
          <Space direction="vertical" style={{ width: '100%' }}>
            {recentMatches.map(match => (
              <Card 
                key={match.id}
                size="small"
                style={{ cursor: 'pointer' }}
                onClick={() => window.location.href = `/chat`}
                hoverable
              >
                <Card.Meta
                  avatar={<Avatar src={match.avatar} size={48} />}
                  title={`${match.name}, ${match.age}`}
                  description={`Matched ${match.matchedAt}`}
                />
              </Card>
            ))}
          </Space>
          
          <Button 
            type="link" 
            block 
            style={{ marginTop: 16 }}
            onClick={() => window.location.href = '/matches'}
          >
            View All Matches →
          </Button>
        </Card>
      </Space>
    </div>
  );
}