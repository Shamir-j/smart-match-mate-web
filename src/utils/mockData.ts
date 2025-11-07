// src/data/mockData.ts

export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  distance: number;
  images: string[];
  interests: string[];
}

export interface Match {
  id: string;
  profile: Profile;
  matchedAt: Date;
  lastMessage?: string;
  unread?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export interface Ad {
  id: string;
  type: "ad";
  brand: string;
  title: string;
  description: string;
  image: string;
  callToAction: string;
  url: string;
  category: string;
}

export type CardItem = Profile | Ad;

export function isAd(item: CardItem): item is Ad {
  return "type" in item && item.type === "ad";
}

export function isProfile(item: CardItem): item is Profile {
  return !isAd(item);
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Precious",
    age: 22,
    bio: "Artist and dreamer ✨ | Love music and good vibes 🎵 | Always positive 😊",
    distance: 2000, // 2 kilometers
    images: ["https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Art", "Music", "Photography", "Dance"]
  },
  {
    id: "2",
    name: "Emma",
    age: 26,
    bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Dog mom 🐕",
    distance: 14585.79,
    images: ["https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Travel", "Photography", "Yoga", "Coffee"]
  },
  {
    id: "3",
    name: "Alex",
    age: 28,
    bio: "Software engineer by day, chef by night 👨‍🍳 | Love hiking and live music",
    distance: 8234.56,
    images: ["https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Cooking", "Hiking", "Music", "Tech"]
  },
  {
    id: "3",
    name: "Sophie",
    age: 24,
    bio: "Artist 🎨 | Bookworm 📚 | Always up for spontaneous adventures",
    distance: 12456.23,
    images: ["https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Art", "Reading", "Museums", "Wine"]
  },
  {
    id: "4",
    name: "James",
    age: 30,
    bio: "Outdoor enthusiast 🏔️ | Photographer | Looking for someone to explore with",
    distance: 9876.45,
    images: ["https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Photography", "Hiking", "Camping", "Nature"]
  },
  {
    id: "5",
    name: "Olivia",
    age: 27,
    bio: "Fitness junkie 💪 | Plant-based lifestyle 🌱 | Weekend warrior",
    distance: 11234.67,
    images: ["https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Fitness", "Health", "Running", "Nutrition"]
  },
  {
    id: "6",
    name: "Ryan",
    age: 29,
    bio: "Marketing professional | Traveler ✈️ | Always down for tacos 🌮",
    distance: 7543.21,
    images: ["https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
    interests: ["Travel", "Food", "Marketing", "Sports"]
  }
];

export const mockMatches: Match[] = [
  {
    id: "m1",
    profile: mockProfiles[0],
    matchedAt: new Date(2025, 10, 2),
    lastMessage: "That sounds amazing! I'd love to",
    unread: true
  },
  {
    id: "m2",
    profile: mockProfiles[1],
    matchedAt: new Date(2025, 10, 1),
    lastMessage: "Hey! How's your week going?",
    unread: false
  }
];

export const mockAds: Ad[] = [
  {
    id: "ad1",
    type: "ad",
    brand: "Paradise Resorts",
    title: "Your Dream Vacation Awaits",
    description: "Escape to tropical paradise. 30% off all-inclusive packages this month!",
    image: "https://images.unsplash.com/photo-1761927206868-58fedbcdaf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MjA5ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    callToAction: "Book Now",
    url: "https://example.com/paradise-resorts",
    category: "Travel"
  },
  {
    id: "ad2",
    type: "ad",
    brand: "Luxe Timepieces",
    title: "Timeless Elegance",
    description: "Premium watches for those who appreciate craftsmanship. Limited edition collection.",
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyMDcwNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    callToAction: "Shop Collection",
    url: "https://example.com/luxe-watches",
    category: "Fashion"
  },
  {
    id: "ad3",
    type: "ad",
    brand: "FitLife Gym",
    title: "Transform Your Life",
    description: "Join today and get your first month free! Personal training, classes, and more.",
    image: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIxMDU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    callToAction: "Start Free Trial",
    url: "https://example.com/fitlife",
    category: "Fitness"
  }
];

// Mix ads into profiles every 4-5 cards
export function getCardStack(): CardItem[] {
  const stack: CardItem[] = [];
  let adIndex = 0;
  
  mockProfiles.forEach((profile, index) => {
    stack.push(profile);
    
    // Insert ad every 4 profiles
    if ((index + 1) % 4 === 0 && adIndex < mockAds.length) {
      stack.push(mockAds[adIndex]);
      adIndex++;
    }
  });
  
  return stack;
}

export const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "msg1",
      senderId: "1",
      text: "Hey! Thanks for the match 😊",
      timestamp: new Date(2025, 10, 2, 10, 30)
    },
    {
      id: "msg2",
      senderId: "me",
      text: "Hi Emma! How's it going?",
      timestamp: new Date(2025, 10, 2, 10, 45)
    },
    {
      id: "msg3",
      senderId: "1",
      text: "Great! I saw you're into hiking too. Have you been to any good trails lately?",
      timestamp: new Date(2025, 10, 2, 11, 0)
    },
    {
      id: "msg4",
      senderId: "me",
      text: "Yes! I went to Eagle Peak last weekend. The views were incredible!",
      timestamp: new Date(2025, 10, 2, 11, 15)
    },
    {
      id: "msg5",
      senderId: "1",
      text: "That sounds amazing! I'd love to",
      timestamp: new Date(2025, 10, 2, 11, 20)
    }
  ],
  "2": [
    {
      id: "msg6",
      senderId: "2",
      text: "Hey! How's your week going?",
      timestamp: new Date(2025, 10, 1, 14, 20)
    },
    {
      id: "msg7",
      senderId: "me",
      text: "Pretty good! How about you?",
      timestamp: new Date(2025, 10, 1, 14, 35)
    }
  ]
};
