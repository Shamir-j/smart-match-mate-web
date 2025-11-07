import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private readonly url: string;

  constructor(url: string = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001') {
    this.url = url;
  }

  connect(userId: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
      if (this.socket?.connected) {
        resolve(this.socket);
        return;
      }

      this.socket = io(this.url, {
        query: { userId },
        transports: ['websocket', 'polling'],
        timeout: 20000,
        forceNew: false,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
      });

      this.socket.on('connect', () => {
        console.log('Connected to Socket.io server');
        resolve(this.socket!);
      });

      this.socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
        reject(error);
      });

      this.socket.on('disconnect', (reason) => {
        console.log('Disconnected from Socket.io server:', reason);
      });

      this.socket.on('reconnect', () => {
        console.log('Reconnected to Socket.io server');
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  emit(event: string, data: unknown): void {
    if (this.socket?.connected) {
      this.socket.emit(event, data);
    } else {
      console.warn('Socket not connected. Cannot emit event:', event);
    }
  }

  on(event: string, callback: (...args: unknown[]) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event: string, callback?: (...args: unknown[]) => void): void {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }

  get isConnected(): boolean {
    return this.socket?.connected || false;
  }

  get socketId(): string | undefined {
    return this.socket?.id;
  }
}

// Export singleton instance
export const socketService = new SocketService();
export default socketService;