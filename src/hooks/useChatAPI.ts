import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { socketService } from '../lib/socket';
import { Message, ChatRoom, User } from '../stores/chatStore';

// API Base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Query Keys
export const QUERY_KEYS = {
  users: ['users'],
  user: (id: string) => ['user', id],
  matches: ['matches'],
  chatRooms: ['chatRooms'],
  chatRoom: (id: string) => ['chatRoom', id],
  messages: (roomId: string) => ['messages', roomId],
  onlineUsers: ['onlineUsers'],
} as const;

// API Functions
const api = {
  // Users
  async getUser(userId: string): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  async updateUser(userId: string, data: Partial<User>): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
  },

  // Matches
  async getMatches(userId: string): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/matches`);
    if (!response.ok) throw new Error('Failed to fetch matches');
    return response.json();
  },

  // Chat Rooms
  async getChatRooms(userId: string): Promise<ChatRoom[]> {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/chat-rooms`);
    if (!response.ok) throw new Error('Failed to fetch chat rooms');
    return response.json();
  },

  async createChatRoom(participantIds: string[]): Promise<ChatRoom> {
    const response = await fetch(`${API_BASE_URL}/chat-rooms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ participantIds }),
    });
    if (!response.ok) throw new Error('Failed to create chat room');
    return response.json();
  },

  // Messages
  async getMessages(roomId: string, page = 1, limit = 50): Promise<{
    messages: Message[];
    hasMore: boolean;
    total: number;
  }> {
    const response = await fetch(`${API_BASE_URL}/chat-rooms/${roomId}/messages?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch messages');
    return response.json();
  },

  async sendMessage(roomId: string, content: string, type: 'text' | 'image' | 'file' = 'text'): Promise<Message> {
    const response = await fetch(`${API_BASE_URL}/chat-rooms/${roomId}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, type }),
    });
    if (!response.ok) throw new Error('Failed to send message');
    return response.json();
  },

  async deleteMessage(roomId: string, messageId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/chat-rooms/${roomId}/messages/${messageId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete message');
  },
};

// User Hooks
export function useUser(userId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.user(userId),
    queryFn: () => api.getUser(userId),
    enabled: !!userId,
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, data }: { userId: string; data: Partial<User> }) =>
      api.updateUser(userId, data),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(QUERY_KEYS.user(updatedUser.id), updatedUser);
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.users });
    },
  });
}

// Match Hooks
export function useMatches(userId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.matches,
    queryFn: () => api.getMatches(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Chat Room Hooks
export function useChatRooms(userId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.chatRooms,
    queryFn: () => api.getChatRooms(userId),
    enabled: !!userId,
    staleTime: 60 * 1000, // 1 minute
  });
}

export function useCreateChatRoom() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (participantIds: string[]) => api.createChatRoom(participantIds),
    onSuccess: (newRoom) => {
      queryClient.setQueryData(QUERY_KEYS.chatRoom(newRoom.id), newRoom);
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chatRooms });
      
      // Emit socket event for real-time updates
      socketService.emit('room:created', { roomId: newRoom.id, participants: newRoom.participants });
    },
  });
}

// Message Hooks
export function useMessages(roomId: string, page = 1) {
  return useQuery({
    queryKey: [...QUERY_KEYS.messages(roomId), page],
    queryFn: () => api.getMessages(roomId, page),
    enabled: !!roomId,
    placeholderData: (previousData) => previousData,
  });
}

export function useSendMessage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ roomId, content, type }: { 
      roomId: string; 
      content: string; 
      type?: 'text' | 'image' | 'file' 
    }) => api.sendMessage(roomId, content, type),
    onSuccess: (newMessage, { roomId }) => {
      // Update messages cache
        queryClient.setQueryData(
          [...QUERY_KEYS.messages(roomId), 1],
          (oldData: unknown) => {
            const typedOldData = oldData as { messages: Message[]; hasMore: boolean; total: number } | undefined;
            if (!typedOldData) return { messages: [newMessage], hasMore: false, total: 1 };
            return {
              ...typedOldData,
              messages: [...typedOldData.messages, newMessage],
              total: typedOldData.total + 1,
            };
          }
        );      // Update chat rooms to reflect latest message
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chatRooms });
      
      // Emit socket event for real-time delivery
      socketService.emit('message:send', {
        roomId,
        message: newMessage,
      });
    },
    onError: (error) => {
      console.error('Failed to send message:', error);
      // You can add toast notification here
    },
  });
}

export function useDeleteMessage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ roomId, messageId }: { roomId: string; messageId: string }) =>
      api.deleteMessage(roomId, messageId),
    onSuccess: (_, { roomId, messageId }) => {
      // Remove message from cache
        queryClient.setQueryData(
          [...QUERY_KEYS.messages(roomId), 1],
          (oldData: unknown) => {
            const typedOldData = oldData as { messages: Message[]; hasMore: boolean; total: number } | undefined;
            if (!typedOldData) return oldData;
            return {
              ...typedOldData,
              messages: typedOldData.messages.filter((msg: Message) => msg.id !== messageId),
              total: Math.max(0, typedOldData.total - 1),
            };
          }
        );      // Emit socket event for real-time updates
      socketService.emit('message:delete', { roomId, messageId });
    },
  });
}

// Typing Indicator Hook
export function useTypingIndicator(roomId: string) {
  const queryClient = useQueryClient();
  let typingTimeout: NodeJS.Timeout;

  const startTyping = () => {
    socketService.emit('typing:start', { roomId });
    
    // Clear existing timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    // Stop typing after 3 seconds of inactivity
    typingTimeout = setTimeout(() => {
      socketService.emit('typing:stop', { roomId });
    }, 3000);
  };

  const stopTyping = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    socketService.emit('typing:stop', { roomId });
  };

  return { startTyping, stopTyping };
}

// Real-time Connection Hook
export function useSocketConnection(userId: string) {
  const queryClient = useQueryClient();

  const connect = async () => {
    try {
      await socketService.connect(userId);
      
      // Set up real-time event listeners
      socketService.on('message:received', (...args: unknown[]) => {
        const data = args[0] as { roomId: string; message: Message };
        // Update messages cache
        queryClient.setQueryData(
          [...QUERY_KEYS.messages(data.roomId), 1],
          (oldData: unknown) => {
            const typedOldData = oldData as { messages: Message[]; hasMore: boolean; total: number } | undefined;
            if (!typedOldData) return { messages: [data.message], hasMore: false, total: 1 };
            return {
              ...typedOldData,
              messages: [...typedOldData.messages, data.message],
              total: typedOldData.total + 1,
            };
          }
        );
        
        // Invalidate chat rooms to update last message
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.chatRooms });
      });

      socketService.on('user:online', (...args: unknown[]) => {
        const user = args[0] as User;
        queryClient.setQueryData(QUERY_KEYS.user(user.id), user);
      });

      socketService.on('user:offline', (...args: unknown[]) => {
        const userId = args[0] as string;
        queryClient.setQueryData(QUERY_KEYS.user(userId), (oldUser: unknown) => ({
          ...(oldUser as User),
          isOnline: false,
          lastSeen: new Date(),
        }));
      });

      socketService.on('typing:user', (...args: unknown[]) => {
        const data = args[0] as { roomId: string; userId: string; isTyping: boolean };
        // Handle typing indicators in your UI
        console.log('Typing indicator:', data);
      });

    } catch (error) {
      console.error('Failed to connect to socket:', error);
    }
  };

  const disconnect = () => {
    socketService.disconnect();
  };

  return { connect, disconnect, isConnected: socketService.isConnected };
}