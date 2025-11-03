'use client';

import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import ChatBox from '../../../components/chat/ChatBox';
import MatchList from '../../../components/matches/MatchList';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  senderId: string;
  type: 'text' | 'image';
}

interface Conversation {
  id: string;
  matchId: string;
  matchName: string;
  matchAvatar: string;
  lastMessage?: Message;
  unreadCount: number;
  isOnline: boolean;
  lastSeen?: Date;
}

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
  lastSeen?: Date;
}

// Mock data
const mockMatches: Match[] = [
  {
    id: '1',
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
    age: 25,
    distance: 2,
    lastMessage: {
      content: 'Hey! How was your day?',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      isRead: false
    },
    unreadCount: 2,
    isOnline: true,
    matchDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    isNewMatch: false
  },
  {
    id: '2',
    name: 'Alex',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    age: 28,
    distance: 5,
    lastMessage: {
      content: 'That restaurant was amazing! 😍',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isRead: true
    },
    unreadCount: 0,
    isOnline: false,
    lastSeen: new Date(Date.now() - 1 * 60 * 60 * 1000),
    matchDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    isNewMatch: false
  },
  {
    id: '3',
    name: 'Emma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    age: 23,
    distance: 8,
    unreadCount: 0,
    isOnline: true,
    matchDate: new Date(Date.now() - 1 * 60 * 60 * 1000),
    isNewMatch: true
  }
];

const mockMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      content: 'Hey there! 👋',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      senderId: '1',
      type: 'text'
    },
    {
      id: '2',
      content: 'Hi! Nice to match with you!',
      timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
      senderId: 'current-user',
      type: 'text'
    },
    {
      id: '3',
      content: 'How was your day?',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      senderId: '1',
      type: 'text'
    },
  ],
  '2': [
    {
      id: '4',
      content: 'That restaurant was amazing! 😍',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      senderId: '2',
      type: 'text'
    }
  ],
  '3': []
};

export default function ChatPage() {
  const [matches, setMatches] = useState<Match[]>(mockMatches);
  const [messages, setMessages] = useState<Message[]>(mockMessages['1'] || []);
  const [selectedMatchId, setSelectedMatchId] = useState<string>('1');
  const [conversation, setConversation] = useState<Conversation | undefined>(() => {
    const match = mockMatches[0];
    return {
      id: '1',
      matchId: match.id,
      matchName: match.name,
      matchAvatar: match.avatar,
      lastMessage: match.lastMessage ? {
        id: 'last',
        content: match.lastMessage.content,
        timestamp: match.lastMessage.timestamp,
        senderId: match.id,
        type: 'text'
      } : undefined,
      unreadCount: match.unreadCount,
      isOnline: match.isOnline,
      lastSeen: match.lastSeen
    };
  });
  const [isTyping, setIsTyping] = useState(false);

  const currentUserId = 'current-user';

  const handleSelectMatch = (matchId: string) => {
    setSelectedMatchId(matchId);
    
    const match = matches.find(m => m.id === matchId);
    if (match) {
      setConversation({
        id: matchId,
        matchId: match.id,
        matchName: match.name,
        matchAvatar: match.avatar,
        lastMessage: match.lastMessage ? {
          id: 'last',
          content: match.lastMessage.content,
          timestamp: match.lastMessage.timestamp,
          senderId: match.id,
          type: 'text'
        } : undefined,
        unreadCount: match.unreadCount,
        isOnline: match.isOnline,
        lastSeen: match.lastSeen
      });
      
      setMessages(mockMessages[matchId] || []);
      
      // Mark as read and no longer new
      setMatches(prev => prev.map(m => 
        m.id === matchId ? { ...m, unreadCount: 0, isNewMatch: false } : m
      ));
    }
  };

  const handleSendMessage = (content: string) => {
    if (!conversation) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      senderId: currentUserId,
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Update match last message
    setMatches(prev => prev.map(match => 
      match.id === conversation.matchId 
        ? {
            ...match,
            lastMessage: {
              content,
              timestamp: new Date(),
              isRead: true
            }
          }
        : match
    ));

    message.success('Message sent!');

    // Simulate response (in real app, this would come via WebSocket)
    setTimeout(() => {
      const responses = [
        'That sounds great!',
        'I agree! 😊',
        'Tell me more!',
        'Interesting!',
        'Haha, nice!',
        'What do you think about that?'
      ];
      
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        senderId: conversation.matchId,
        type: 'text'
      };

      setMessages(prev => [...prev, responseMessage]);
      
      // Update match last message
      setMatches(prev => prev.map(match => 
        match.id === conversation.matchId 
          ? {
              ...match,
              lastMessage: {
                content: responseMessage.content,
                timestamp: responseMessage.timestamp,
                isRead: false
              },
              unreadCount: match.unreadCount + 1
            }
          : match
      ));
    }, 2000 + Math.random() * 3000);
  };

  const handleTyping = () => {
    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 3000);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#fafafa' }}>
      <Row style={{ height: '100%' }}>
        <Col xs={24} sm={8} md={8} lg={6} xl={6} style={{ 
          borderRight: '1px solid #f0f0f0',
          backgroundColor: 'white',
          height: '100%'
        }}>
          <MatchList
            matches={matches}
            onSelectMatch={handleSelectMatch}
            selectedMatchId={selectedMatchId}
          />
        </Col>
        <Col xs={0} sm={16} md={16} lg={18} xl={18} style={{ height: '100%' }}>
          <ChatBox
            conversation={conversation}
            messages={messages}
            currentUserId={currentUserId}
            onSendMessage={handleSendMessage}
            onTyping={handleTyping}
            isTyping={isTyping}
          />
        </Col>
      </Row>
    </div>
  );
}