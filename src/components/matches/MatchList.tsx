'use client';

import React, { useState } from 'react';
import { List, Avatar, Badge, Typography, Input, Empty, Space, Tag } from 'antd';
import { SearchOutlined, MessageOutlined, HeartOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Search } = Input;

interface Match {
  id: string;
  name: string;
  avatar: string;
  age: number;
  distance: number;
  lastMessage?: {
    content: string;
    timestamp: Date;
    isRead: boolean;
  };
  unreadCount: number;
  isOnline: boolean;
  matchDate: Date;
  isNewMatch: boolean;
}

interface MatchListProps {
  matches: Match[];
  onSelectMatch: (matchId: string) => void;
  selectedMatchId?: string;
}

export default function MatchList({ matches, onSelectMatch, selectedMatchId }: MatchListProps) {
  const [searchText, setSearchText] = useState('');

  const filteredMatches = matches.filter(match =>
    match.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const newMatches = filteredMatches.filter(match => match.isNewMatch);
  const existingMatches = filteredMatches.filter(match => !match.isNewMatch);

  const formatMessageTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'now';
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    return timestamp.toLocaleDateString();
  };

  const renderMatchItem = (match: Match) => (
    <List.Item
      key={match.id}
      onClick={() => onSelectMatch(match.id)}
      style={{
        padding: '12px 16px',
        cursor: 'pointer',
        backgroundColor: selectedMatchId === match.id ? '#f6ffed' : 'transparent',
        borderLeft: selectedMatchId === match.id ? '3px solid #FF3A8A' : '3px solid transparent',
        transition: 'all 0.2s ease'
      }}
      className="match-item"
    >
      <List.Item.Meta
        avatar={
          <Badge dot={match.isOnline} offset={[-8, 8]}>
            <Avatar 
              src={match.avatar} 
              size={48}
              style={{ backgroundColor: '#FF3A8A' }}
            >
              {match.name[0]}
            </Avatar>
          </Badge>
        }
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Space>
              <Text strong style={{ fontSize: 16 }}>
                {match.name}
              </Text>
              {match.isNewMatch && (
                <Tag color="pink" style={{ margin: 0, fontSize: 10 }}>
                  NEW
                </Tag>
              )}
            </Space>
            {match.unreadCount > 0 && (
              <Badge 
                count={match.unreadCount} 
                size="small"
                style={{ backgroundColor: '#FF3A8A' }}
              />
            )}
          </div>
        }
        description={
          <div>
            {match.lastMessage ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text 
                  type={match.lastMessage.isRead ? 'secondary' : undefined}
                  style={{ 
                    fontSize: 13,
                    maxWidth: '150px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {match.lastMessage.content}
                </Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {formatMessageTime(match.lastMessage.timestamp)}
                </Text>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  {match.distance}km away • Start a conversation
                </Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {formatMessageTime(match.matchDate)}
                </Text>
              </div>
            )}
          </div>
        }
      />
    </List.Item>
  );

  if (matches.length === 0) {
    return (
      <div style={{ 
        padding: 40, 
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Empty
          image={<HeartOutlined style={{ fontSize: 64, color: '#FF3A8A' }} />}
          description={
            <div>
              <Title level={4} type="secondary">No matches yet</Title>
              <Text type="secondary">
                Start swiping to find your matches!
              </Text>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ 
        padding: '20px 16px 16px',
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fafafa'
      }}>
        <Title level={4} style={{ margin: '0 0 16px 0' }}>
          Matches ({matches.length})
        </Title>
        <Search
          placeholder="Search matches..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ borderRadius: 20 }}
        />
      </div>

      {/* Matches List */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {newMatches.length > 0 && (
          <>
            <div style={{ 
              padding: '16px 16px 8px',
              backgroundColor: '#fff2f0',
              borderBottom: '1px solid #ffd6cc'
            }}>
              <Text strong style={{ color: '#FF3A8A' }}>
                🎉 New Matches ({newMatches.length})
              </Text>
            </div>
            <List
              dataSource={newMatches}
              renderItem={renderMatchItem}
              split={false}
            />
          </>
        )}

        {existingMatches.length > 0 && (
          <>
            {newMatches.length > 0 && (
              <div style={{ 
                padding: '16px 16px 8px',
                backgroundColor: '#fafafa',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <Text strong type="secondary">
                  <MessageOutlined /> Messages
                </Text>
              </div>
            )}
            <List
              dataSource={existingMatches}
              renderItem={renderMatchItem}
              split={false}
            />
          </>
        )}

        {filteredMatches.length === 0 && searchText && (
          <div style={{ 
            padding: 40, 
            textAlign: 'center'
          }}>
            <Empty
              description={`No matches found for "${searchText}"`}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .match-item:hover {
          background-color: #f5f5f5 !important;
        }
      `}</style>
    </div>
  );
}