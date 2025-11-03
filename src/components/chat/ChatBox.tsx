'use client';

import React, { useState, useRef } from 'react';
import { List, Avatar, Badge, Typography, Input, Button, Space, Empty } from 'antd';
import { SendOutlined, SearchOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;
const { TextArea } = Input;

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

interface ChatBoxProps {
  conversation?: Conversation;
  messages: Message[];
  currentUserId: string;
  onSendMessage: (content: string) => void;
  onTyping?: () => void;
  isTyping?: boolean;
}

export default function ChatBox({ 
  conversation, 
  messages, 
  currentUserId, 
  onSendMessage,
  onTyping,
  isTyping = false
}: ChatBoxProps) {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!messageText.trim()) return;
    onSendMessage(messageText.trim());
    setMessageText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
    onTyping?.();
  };

  if (!conversation) {
    return (
      <div style={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 40
      }}>
        <Empty
          description={
            <div>
              <Title level={4} type="secondary">Select a match to start chatting</Title>
              <Text type="secondary">
                Choose someone from your matches to begin a conversation
              </Text>
            </div>
          }
        />
      </div>
    );
  }

  return (
    <div style={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      border: '1px solid #f0f0f0',
      borderRadius: 8
    }}>
      {/* Chat Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fafafa',
        borderRadius: '8px 8px 0 0'
      }}>
        <Space>
          <Badge dot={conversation.isOnline} offset={[-8, 8]}>
            <Avatar 
              src={conversation.matchAvatar} 
              size={40}
              style={{ backgroundColor: '#FF3A8A' }}
            >
              {conversation.matchName[0]}
            </Avatar>
          </Badge>
          <div>
            <Title level={5} style={{ margin: 0 }}>
              {conversation.matchName}
            </Title>
            <Text type="secondary" style={{ fontSize: 12 }}>
              {conversation.isOnline ? (
                isTyping ? 'typing...' : 'online'
              ) : (
                conversation.lastSeen ? 
                `last seen ${new Date(conversation.lastSeen).toLocaleTimeString()}` : 
                'offline'
              )}
            </Text>
          </div>
        </Space>
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        padding: 20,
        overflowY: 'auto',
        backgroundColor: '#fff'
      }}>
        {messages.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: 40,
            color: '#999'
          }}>
            <Title level={4} type="secondary">
              👋 Say hello to {conversation.matchName}!
            </Title>
            <Text type="secondary">
              This is the beginning of your conversation
            </Text>
          </div>
        ) : (
          <>
            {messages.map((message, index) => {
              const isOwn = message.senderId === currentUserId;
              const showTime = index === 0 || 
                new Date(message.timestamp).getTime() - new Date(messages[index - 1].timestamp).getTime() > 300000; // 5 minutes

              return (
                <div key={message.id}>
                  {showTime && (
                    <div style={{
                      textAlign: 'center',
                      margin: '20px 0 10px',
                      color: '#999',
                      fontSize: 12
                    }}>
                      {new Date(message.timestamp).toLocaleString()}
                    </div>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: isOwn ? 'flex-end' : 'flex-start',
                      marginBottom: 8,
                      alignItems: 'flex-end'
                    }}
                  >
                    {!isOwn && (
                      <Avatar 
                        src={conversation.matchAvatar} 
                        size={24}
                        style={{ marginRight: 8, backgroundColor: '#FF3A8A' }}
                      >
                        {conversation.matchName[0]}
                      </Avatar>
                    )}
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '8px 12px',
                        borderRadius: 18,
                        backgroundColor: isOwn ? '#FF3A8A' : '#f0f0f0',
                        color: isOwn ? 'white' : 'black',
                        wordWrap: 'break-word'
                      }}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div style={{
        padding: 20,
        borderTop: '1px solid #f0f0f0',
        backgroundColor: '#fafafa',
        borderRadius: '0 0 8px 8px'
      }}>
        <Space.Compact style={{ width: '100%' }}>
          <TextArea
            value={messageText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={`Message ${conversation.matchName}...`}
            autoSize={{ minRows: 1, maxRows: 4 }}
            style={{ 
              borderRadius: '20px 0 0 20px',
              resize: 'none'
            }}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={!messageText.trim()}
            style={{
              height: 'auto',
              minHeight: 32,
              borderRadius: '0 20px 20px 0',
              backgroundColor: '#FF3A8A',
              borderColor: '#FF3A8A'
            }}
          />
        </Space.Compact>
      </div>
    </div>
  );
}