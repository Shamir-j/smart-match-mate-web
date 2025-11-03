'use client';

import React, { useEffect, useState } from 'react';
import { Button, Input, List, Badge, Typography, Space, Spin, Alert } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useChatStore, selectActiveMessages } from '../../stores/chatStore';
import { useMessages, useSendMessage, useSocketConnection, useTypingIndicator } from '../../hooks/useChatAPI';

const { TextArea } = Input;
const { Text, Title } = Typography;

interface ChatComponentProps {
  userId: string;
  roomId?: string;
}

export default function ChatComponent({ userId, roomId }: ChatComponentProps) {
  const [messageText, setMessageText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Zustand store
  const {
    setCurrentUser,
    setActiveRoom,
    addMessage,
    setConnectionStatus,
    currentUser,
    isConnected,
  } = useChatStore();

  const activeMessages = useChatStore(selectActiveMessages);

  // React Query hooks
  const { data: messagesData, isLoading: loadingMessages, error: messagesError } = useMessages(roomId || '', 1);
  const sendMessageMutation = useSendMessage();
  
  // Socket connection
  const { connect, disconnect } = useSocketConnection(userId);
  
  // Typing indicator
  const { startTyping, stopTyping } = useTypingIndicator(roomId || '');

  // Initialize user and connection
  useEffect(() => {
    if (userId) {
      // Set current user (normally you'd fetch this from an API)
      setCurrentUser({
        id: userId,
        name: `User ${userId}`,
        isOnline: true,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`,
      });

      // Connect to socket
      connect().then(() => {
        setConnectionStatus(true);
      }).catch((error) => {
        console.error('Failed to connect:', error);
        setConnectionStatus(false);
      });
    }

    return () => {
      disconnect();
      setConnectionStatus(false);
    };
  }, [userId, connect, disconnect, setCurrentUser, setConnectionStatus]);

  // Set active room
  useEffect(() => {
    if (roomId) {
      setActiveRoom(roomId);
    }
  }, [roomId, setActiveRoom]);

  // Sync messages from React Query to Zustand
  useEffect(() => {
    if (messagesData?.messages && roomId) {
      messagesData.messages.forEach(message => {
        addMessage(roomId, message);
      });
    }
  }, [messagesData, roomId, addMessage]);

  // Handle sending message
  const handleSendMessage = async () => {
    if (!messageText.trim() || !roomId) return;

    try {
      await sendMessageMutation.mutateAsync({
        roomId,
        content: messageText.trim(),
        type: 'text',
      });
      setMessageText('');
      stopTyping();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  // Handle typing
  const handleTyping = (text: string) => {
    setMessageText(text);
    
    if (text && !isTyping) {
      setIsTyping(true);
      startTyping();
    } else if (!text && isTyping) {
      setIsTyping(false);
      stopTyping();
    }
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!userId) {
    return (
      <Alert
        message="No User ID"
        description="Please provide a user ID to use the chat."
        type="warning"
        showIcon
      />
    );
  }

  if (!roomId) {
    return (
      <Alert
        message="No Chat Room"
        description="Please select a chat room to start messaging."
        type="info"
        showIcon
      />
    );
  }

  return (
    <div style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid #d9d9d9', borderRadius: '8px' }}>
      {/* Header */}
      <div style={{ 
        padding: '16px', 
        borderBottom: '1px solid #f0f0f0', 
        backgroundColor: '#fafafa',
        borderRadius: '8px 8px 0 0'
      }}>
        <Space>
          <Badge status={isConnected ? 'success' : 'error'} />
          <Title level={4} style={{ margin: 0 }}>
            Chat Room {roomId}
          </Title>
          {currentUser && (
            <Text type="secondary">
              Logged in as {currentUser.name}
            </Text>
          )}
        </Space>
      </div>

      {/* Messages Area */}
      <div style={{ 
        flex: 1, 
        padding: '16px', 
        overflowY: 'auto', 
        backgroundColor: '#fff'
      }}>
        {messagesError ? (
          <Alert
            message="Error loading messages"
            description={messagesError.message}
            type="error"
            showIcon
          />
        ) : loadingMessages ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <Spin size="large" />
            <div>Loading messages...</div>
          </div>
        ) : (
          <List
            dataSource={activeMessages}
            renderItem={(message) => (
              <List.Item
                style={{
                  padding: '8px 0',
                  justifyContent: message.senderId === userId ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '70%',
                    padding: '8px 12px',
                    borderRadius: '18px',
                    backgroundColor: message.senderId === userId ? '#1890ff' : '#f0f0f0',
                    color: message.senderId === userId ? 'white' : 'black',
                  }}
                >
                  <Space direction="vertical" size={4} style={{ width: '100%' }}>
                    <Text 
                      style={{ 
                        color: message.senderId === userId ? 'white' : 'black',
                        fontSize: '14px'
                      }}
                    >
                      {message.content}
                    </Text>
                    <Text 
                      style={{ 
                        color: message.senderId === userId ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.45)',
                        fontSize: '12px'
                      }}
                    >
                      {new Date(message.timestamp).toLocaleTimeString()} • {message.status}
                    </Text>
                  </Space>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>

      {/* Input Area */}
      <div style={{ 
        padding: '16px', 
        borderTop: '1px solid #f0f0f0',
        backgroundColor: '#fafafa',
        borderRadius: '0 0 8px 8px'
      }}>
        <Space.Compact style={{ width: '100%' }}>
          <TextArea
            value={messageText}
            onChange={(e) => handleTyping(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            autoSize={{ minRows: 1, maxRows: 3 }}
            style={{ flex: 1 }}
            disabled={!isConnected}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            loading={sendMessageMutation.isPending}
            disabled={!messageText.trim() || !isConnected}
          >
            Send
          </Button>
        </Space.Compact>
        
        {!isConnected && (
          <Text type="danger" style={{ fontSize: '12px' }}>
            Disconnected from server
          </Text>
        )}
      </div>
    </div>
  );
}

// Example usage component
export function ChatExample() {
  const [userId, setUserId] = useState('user123');
  const [roomId, setRoomId] = useState('room456');

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>Live Chat Example</Title>
      
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Space>
            <Text strong>User ID:</Text>
            <Input 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{ width: 200 }}
              placeholder="Enter user ID"
            />
            <Text strong>Room ID:</Text>
            <Input 
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              style={{ width: 200 }}
              placeholder="Enter room ID"
            />
          </Space>
        </div>

        <ChatComponent userId={userId} roomId={roomId} />

        <div style={{ marginTop: '20px' }}>
          <Title level={4}>Features Demonstrated:</Title>
          <ul>
            <li><strong>Zustand:</strong> Global state management for chat data, users, and UI state</li>
            <li><strong>React Query:</strong> Server state management for fetching/sending messages and caching</li>
            <li><strong>Socket.io:</strong> Real-time messaging, typing indicators, and connection status</li>
            <li><strong>Integration:</strong> All three libraries working together seamlessly</li>
          </ul>
        </div>
      </Space>
    </div>
  );
}