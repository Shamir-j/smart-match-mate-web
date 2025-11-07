# Dating App Rendering Strategy - Performance Optimized

## Hybrid SSR/CSR Architecture for One Night Stand App

### 1. Static Site Generation (SSG) - Public Routes
**Routes**: `/`, `/about`, `/privacy`, `/terms`
- **Method**: `generateStaticParams()` at build time
- **Caching**: CDN + Browser caching (24 hours)
- **Performance**: Instant loading, SEO optimized

### 2. Incremental Static Regeneration (ISR) - User Profiles
**Route**: `/user/[userId]`
- **Method**: ISR with 60-second revalidation
- **Fallback**: `true` for new profiles
- **Performance**: Fast initial load, fresh data within 1 minute

```typescript
// /app/(authenticated)/user/[userId]/page.tsx
export const dynamic = 'auto';
export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  // Pre-generate top 1000 most active users
  const topUsers = await getTopActiveUsers(1000);
  return topUsers.map(user => ({ userId: user.id }));
}
```

### 3. Client-Side Rendering (CSR) - Real-time Content  
**Routes**: `/matches`, `/chat/[conversationId]`
- **Method**: Client-side with React Query caching
- **Real-time**: Socket.io for live updates
- **Performance**: Instant navigation, real-time sync

### 4. Server-Side Rendering (SSR) - Dynamic SEO Pages
**Routes**: Profile edit, settings (when sharing enabled)
- **Method**: SSR for social sharing optimization
- **Performance**: SEO-friendly with dynamic meta tags

## Performance Optimizations

### Navigation Strategy
✅ **Current Implementation**: Client-side routing with Next.js `useRouter`
- No full page reloads
- Instant transitions
- Preserve scroll position

### Data Fetching Strategy
```typescript
// React Query setup for optimal caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 minutes
      gcTime: 10 * 60 * 1000,       // 10 minutes  
      retry: 2,
      refetchOnWindowFocus: false,   // Prevent unnecessary refetches
    },
  },
});
```

### Loading States
- **Critical**: Hero content loads immediately (SSG)
- **Above-fold**: User cards preload on hover
- **Below-fold**: Lazy load with `React.lazy()` + `Suspense`

## Route-Specific Strategies

### 📱 Mobile-First Considerations
- **Bottom Navigation**: Instant switching (no loading)
- **Swipe Gestures**: Client-side with optimistic updates  
- **Image Loading**: Progressive with blur placeholder
- **Background Sync**: Queue actions offline (PWA)

### 🔥 Match Discovery (`/matches`)
```typescript
export default function MatchesPage() {
  // Client-side only - real-time swiping
  const { data: users } = useInfiniteQuery({
    queryKey: ['discovery'],
    queryFn: fetchDiscoveryUsers,
    staleTime: 30000, // 30 seconds
  });
}
```

### 💬 Chat System (`/chat/[conversationId]`)
```typescript
export default function ChatPage({ params }: { params: { conversationId: string } }) {
  // Hybrid: SSR initial messages + CSR real-time
  const initialMessages = await getChatHistory(params.conversationId);
  
  return (
    <ChatComponent 
      initialMessages={initialMessages}
      conversationId={params.conversationId}
    />
  );
}
```

### 👤 User Profiles (`/user/[userId]`)
```typescript
// ISR with smart caching
export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getUser(params.userId);
  
  return {
    title: `${user.name}, ${user.age} - One Night Stand`,
    description: user.bio,
    openGraph: {
      images: [user.photos[0]],
    },
  };
}
```

## Performance Metrics Targets

### Core Web Vitals
- **LCP**: < 2.5s (Hero image + user card)
- **FID**: < 100ms (Swipe responsiveness)  
- **CLS**: < 0.1 (Stable layout during image loads)

### Dating App Specific
- **Swipe Latency**: < 50ms
- **Message Send**: < 200ms
- **Profile Load**: < 1s
- **Match Animation**: 60fps

## Implementation Priority

1. ✅ **DONE**: Client-side navigation (useRouter)
2. 🔄 **NEXT**: ISR for user profiles
3. ⏳ **LATER**: Background sync for offline swiping
4. ⏳ **LATER**: Image optimization with blur placeholders

## Code Split Strategy

```typescript
// Critical: Load immediately
import { MatchCard, SwipeContainer } from '@/components/matches';

// Non-critical: Lazy load
const ProfileModal = lazy(() => import('@/components/ProfileModal'));
const ChatWindow = lazy(() => import('@/components/ChatWindow'));
const SettingsPanel = lazy(() => import('@/components/SettingsPanel'));
```

This hybrid approach ensures:
- ⚡ **Fast initial loads** (SSG/ISR)
- 🔄 **Real-time updates** (CSR + Socket.io)
- 🔍 **SEO optimization** (SSR meta tags)
- 📱 **Smooth mobile experience** (Client-side navigation)