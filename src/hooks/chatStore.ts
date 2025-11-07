import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Chat Message Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
  status: 'sent' | 'delivered' | 'read';
  isEdited?: boolean;
  replyTo?: string;
}

export interface ChatRoom {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
  isTyping: string[]; // userIds who are typing
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  lastSeen?: Date;
  location?: {
    latitude: number;
    longitude: number;
    city?: string;
  };
}

// Chat Store State
interface ChatState {
  // Current user
  currentUser: User | null;
  
  // Chat rooms and messages
  rooms: Record<string, ChatRoom>;
  messages: Record<string, Message[]>; // roomId -> messages
  
  // Active chat
  activeRoomId: string | null;
  
  // Online users
  onlineUsers: Record<string, User>;
  
  // UI state
  isConnected: boolean;
  isLoading: boolean;
  typingUsers: Record<string, string[]>; // roomId -> userIds
  
  // Notifications
  notifications: {
    newMatches: number;
    unreadMessages: number;
  };
}

// Chat Store Actions
interface ChatActions {
  // User actions
  setCurrentUser: (user: User) => void;
  updateUserStatus: (userId: string, isOnline: boolean, lastSeen?: Date) => void;
  
  // Room actions
  addRoom: (room: ChatRoom) => void;
  updateRoom: (roomId: string, updates: Partial<ChatRoom>) => void;
  setActiveRoom: (roomId: string | null) => void;
  
  // Message actions
  addMessage: (roomId: string, message: Message) => void;
  updateMessage: (roomId: string, messageId: string, updates: Partial<Message>) => void;
  deleteMessage: (roomId: string, messageId: string) => void;
  markMessagesAsRead: (roomId: string) => void;
  
  // Typing indicators
  setTyping: (roomId: string, userId: string, isTyping: boolean) => void;
  
  // Connection status
  setConnectionStatus: (isConnected: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  
  // Notifications
  incrementUnreadMessages: () => void;
  resetUnreadMessages: () => void;
  setNewMatches: (count: number) => void;
  
  // Reset store
  reset: () => void;
}

type ChatStore = ChatState & ChatActions;

const initialState: ChatState = {
  currentUser: null,
  rooms: {},
  messages: {},
  activeRoomId: null,
  onlineUsers: {},
  isConnected: false,
  isLoading: false,
  typingUsers: {},
  notifications: {
    newMatches: 0,
    unreadMessages: 0,
  },
};

export const useChatStore = create<ChatStore>()(
  devtools(
    subscribeWithSelector(
      immer((set, get) => ({
        ...initialState,

        // User actions
        setCurrentUser: (user: User) => {
          set((state) => {
            state.currentUser = user;
            state.onlineUsers[user.id] = user;
          });
        },

        updateUserStatus: (userId: string, isOnline: boolean, lastSeen?: Date) => {
          set((state) => {
            if (state.onlineUsers[userId]) {
              state.onlineUsers[userId].isOnline = isOnline;
              if (lastSeen) {
                state.onlineUsers[userId].lastSeen = lastSeen;
              }
            }
          });
        },

        // Room actions
        addRoom: (room: ChatRoom) => {
          set((state) => {
            state.rooms[room.id] = room;
            if (!state.messages[room.id]) {
              state.messages[room.id] = [];
            }
          });
        },

        updateRoom: (roomId: string, updates: Partial<ChatRoom>) => {
          set((state) => {
            if (state.rooms[roomId]) {
              Object.assign(state.rooms[roomId], updates);
            }
          });
        },

        setActiveRoom: (roomId: string | null) => {
          set((state) => {
            state.activeRoomId = roomId;
          });
        },

        // Message actions
        addMessage: (roomId: string, message: Message) => {
          set((state) => {
            if (!state.messages[roomId]) {
              state.messages[roomId] = [];
            }
            state.messages[roomId].push(message);
            
            // Update room's last message
            if (state.rooms[roomId]) {
              state.rooms[roomId].lastMessage = message;
              state.rooms[roomId].updatedAt = new Date();
              
              // Increment unread count if not the current user
              if (message.senderId !== state.currentUser?.id) {
                state.rooms[roomId].unreadCount += 1;
                state.notifications.unreadMessages += 1;
              }
            }
          });
        },

        updateMessage: (roomId: string, messageId: string, updates: Partial<Message>) => {
          set((state) => {
            const messages = state.messages[roomId];
            if (messages) {
              const messageIndex = messages.findIndex((m: Message) => m.id === messageId);
              if (messageIndex !== -1) {
                Object.assign(messages[messageIndex], updates);
              }
            }
          });
        },

        deleteMessage: (roomId: string, messageId: string) => {
          set((state) => {
            const messages = state.messages[roomId];
            if (messages) {
              const messageIndex = messages.findIndex((m: Message) => m.id === messageId);
              if (messageIndex !== -1) {
                messages.splice(messageIndex, 1);
              }
            }
          });
        },

        markMessagesAsRead: (roomId: string) => {
          set((state) => {
            const room = state.rooms[roomId];
            if (room) {
              const previousUnread = room.unreadCount;
              room.unreadCount = 0;
              state.notifications.unreadMessages = Math.max(0, 
                state.notifications.unreadMessages - previousUnread
              );
            }
            
            // Mark messages as read
            const messages = state.messages[roomId];
            if (messages) {
              messages.forEach((message: Message) => {
                if (message.receiverId === state.currentUser?.id && message.status !== 'read') {
                  message.status = 'read';
                }
              });
            }
          });
        },

        // Typing indicators
        setTyping: (roomId: string, userId: string, isTyping: boolean) => {
          set((state) => {
            if (!state.typingUsers[roomId]) {
              state.typingUsers[roomId] = [];
            }
            
            const typingList = state.typingUsers[roomId];
            const userIndex = typingList.indexOf(userId);
            
            if (isTyping && userIndex === -1) {
              typingList.push(userId);
            } else if (!isTyping && userIndex !== -1) {
              typingList.splice(userIndex, 1);
            }
          });
        },

        // Connection status
        setConnectionStatus: (isConnected: boolean) => {
          set((state) => {
            state.isConnected = isConnected;
          });
        },

        setLoading: (isLoading: boolean) => {
          set((state) => {
            state.isLoading = isLoading;
          });
        },

        // Notifications
        incrementUnreadMessages: () => {
          set((state) => {
            state.notifications.unreadMessages += 1;
          });
        },

        resetUnreadMessages: () => {
          set((state) => {
            state.notifications.unreadMessages = 0;
          });
        },

        setNewMatches: (count: number) => {
          set((state) => {
            state.notifications.newMatches = count;
          });
        },

        // Reset store
        reset: () => {
          set(() => ({ ...initialState }));
        },
      }))
    ),
    {
      name: 'chat-store',
      enabled: process.env.NODE_ENV === 'development',
    }
  )
);

// Selectors for better performance
export const selectCurrentUser = (state: ChatStore) => state.currentUser;
export const selectActiveRoom = (state: ChatStore) => 
  state.activeRoomId ? state.rooms[state.activeRoomId] : null;
export const selectActiveMessages = (state: ChatStore) => 
  state.activeRoomId ? state.messages[state.activeRoomId] || [] : [];
export const selectUnreadCount = (state: ChatStore) => 
  state.notifications.unreadMessages;
export const selectIsTyping = (state: ChatStore, roomId: string) => 
  state.typingUsers[roomId] || [];