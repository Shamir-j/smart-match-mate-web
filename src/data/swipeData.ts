export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  distance: number;
  images: string[];
  interests: string[];
  occupation?: string;
  education?: string;
  location?: string;
  verified?: boolean;
  isOnline?: boolean;
}

// New interface for the swipe system
export interface UserProfile {
  id: string;
  type?: 'user' | 'ad';
  firstName: string;
  lastName: string;
  age: number;
  images: string[];
  bio: string;
  location: string;
  distance: number;
  verified: boolean;
  interests?: string[];
  occupation?: string;
  isOnline?: boolean;
  adData?: {
    title: string;
    description: string;
    callToAction: string;
  };
}

export type SwipeDirection = 'left' | 'right';

export interface AdCard {
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

export type SwipeCardItem = Profile | AdCard;

export function isProfile(item: SwipeCardItem): item is Profile {
  return !('type' in item && item.type === 'ad');
}

export function isAd(item: SwipeCardItem): item is AdCard {
  return 'type' in item && item.type === 'ad';
}

// Mock profiles data for One Night Stand app
export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Emma",
    age: 26,
    bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Looking for casual fun and good vibes ✨",
    distance: 2.5,
    images: [
      "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=600&fit=crop"
    ],
    interests: ["Travel", "Photography", "Yoga", "Coffee", "Nightlife"],
    occupation: "Marketing Manager",
    location: "Downtown, CA",
    verified: true,
    isOnline: true
  },
  {
    id: "2", 
    name: "Alex",
    age: 28,
    bio: "Software engineer by day, party animal by night 🎉 | No strings attached 💫",
    distance: 5.2,
    images: [
      "https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
    ],
    interests: ["Coding", "Gaming", "Music", "Bars", "Tech"],
    occupation: "Software Engineer",
    location: "Tech District, CA",
    verified: false,
    isOnline: true
  },
  {
    id: "3",
    name: "Sophie",
    age: 24,
    bio: "Artist 🎨 | Free spirit | Living in the moment and loving every second 🌙",
    distance: 3.8,
    images: [
      "https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop"
    ],
    interests: ["Art", "Museums", "Wine", "Dancing", "Creativity"],
    occupation: "Graphic Designer",
    location: "Arts District, CA",
    verified: true,
    isOnline: false
  },
  {
    id: "4",
    name: "James",
    age: 30,
    bio: "Outdoor enthusiast 🏔️ | Photographer | Adventure awaits, let's make it happen 📸",
    distance: 7.1,
    images: [
      "https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=600&fit=crop"
    ],
    interests: ["Photography", "Hiking", "Camping", "Nature", "Adventure"],
    occupation: "Travel Photographer", 
    location: "Westside, CA",
    verified: true,
    isOnline: true
  },
  {
    id: "5",
    name: "Olivia",
    age: 27,
    bio: "Fitness enthusiast 💪 | Yoga instructor | Living my best life, join me? 🌟",
    distance: 4.3,
    images: [
      "https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop"
    ],
    interests: ["Fitness", "Yoga", "Health", "Running", "Wellness"],
    occupation: "Yoga Instructor",
    location: "Beach City, CA", 
    verified: false,
    isOnline: true
  },
  {
    id: "6",
    name: "Ryan",
    age: 29,
    bio: "Marketing professional | World traveler ✈️ | Always down for spontaneous adventures 🌮",
    distance: 6.7,
    images: [
      "https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
    ],
    interests: ["Travel", "Food", "Marketing", "Sports", "Socializing"],
    occupation: "Marketing Director",
    location: "Uptown, CA",
    verified: true,
    isOnline: false
  },
  {
    id: "7",
    name: "Maya",
    age: 25,
    bio: "Dance instructor 💃 | Night owl | Let's dance until sunrise 🌅",
    distance: 1.8,
    images: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop"
    ],
    interests: ["Dancing", "Music", "Nightlife", "Fitness", "Performance"],
    occupation: "Dance Instructor",
    location: "Entertainment District, CA",
    verified: true,
    isOnline: true
  },
  {
    id: "8",
    name: "Jake",
    age: 32,
    bio: "Bartender & mixologist 🍸 | Know all the best spots in town | Let's grab a drink 🥂",
    distance: 2.1,
    images: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop"
    ],
    interests: ["Cocktails", "Nightlife", "Music", "Food", "Socializing"],
    occupation: "Bartender",
    location: "Bar District, CA",
    verified: false,
    isOnline: true
  }
];

// Mock ads for monetization
export const mockAds: AdCard[] = [
  {
    id: "ad1",
    type: "ad",
    brand: "Luxury Hotels",
    title: "Weekend Getaway Special",
    description: "Book your romantic escape today. 50% off luxury suites this weekend only!",
    image: "https://images.unsplash.com/photo-1761927206868-58fedbcdaf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MjA5ODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    callToAction: "Book Now",
    url: "https://example.com/luxury-hotels",
    category: "Travel"
  },
  {
    id: "ad2", 
    type: "ad",
    brand: "Premium Drinks",
    title: "Craft Your Night",
    description: "Premium cocktails delivered to your door. Perfect for spontaneous dates!",
    image: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIxMDU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    callToAction: "Order Now",
    url: "https://example.com/premium-drinks",
    category: "Food & Drink"
  },
  {
    id: "ad3",
    type: "ad", 
    brand: "Fashion Forward",
    title: "Date Night Ready",
    description: "Look your best tonight. New arrivals perfect for any casual encounter.",
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyMDcwNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    callToAction: "Shop Now",
    url: "https://example.com/fashion-forward",
    category: "Fashion"
  }
];

// Create mixed card stack with ads interspersed
export function getInitialCards(): SwipeCardItem[] {
  const stack: SwipeCardItem[] = [];
  let adIndex = 0;
  
  // Shuffle profiles for variety
  const shuffledProfiles = [...mockProfiles].sort(() => Math.random() - 0.5);
  
  shuffledProfiles.forEach((profile, index) => {
    stack.push(profile);
    
    // Insert ad every 3-4 profiles
    if ((index + 1) % 4 === 0 && adIndex < mockAds.length) {
      stack.push(mockAds[adIndex]);
      adIndex++;
    }
  });
  
  return stack;
}

// Get fresh card stack for refresh functionality
export function getRefreshCards(): SwipeCardItem[] {
  return getInitialCards();
}

// Mock user profiles for the new swipe system
export const mockUserProfiles: UserProfile[] = [
  {
    id: "1",
    firstName: "Emma",
    lastName: "Johnson", 
    age: 26,
    bio: "Coffee enthusiast ☕ | Adventure seeker 🌍 | Looking for casual fun and good vibes ✨",
    distance: 2.5,
    images: [
      "https://images.unsplash.com/photo-1690444963408-9573a17a8058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTg2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=600&fit=crop"
    ],
    interests: ["Travel", "Photography", "Yoga", "Coffee", "Nightlife"],
    occupation: "Marketing Manager",
    location: "Downtown, CA",
    verified: true,
    isOnline: true
  },
  {
    id: "2", 
    firstName: "Alex",
    lastName: "Chen",
    age: 28,
    bio: "Software engineer by day, party animal by night 🎉 | No strings attached 💫",
    distance: 5.2,
    images: [
      "https://images.unsplash.com/photo-1597202992582-9ee5c6672095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjIwODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
    ],
    interests: ["Coding", "Gaming", "Music", "Bars", "Tech"],
    occupation: "Software Engineer",
    location: "Tech District, CA",
    verified: false,
    isOnline: true
  },
  {
    id: "3",
    firstName: "Sophie",
    lastName: "Martinez",
    age: 24,
    bio: "Artist 🎨 | Free spirit | Living in the moment and loving every second 🌙",
    distance: 3.8,
    images: [
      "https://images.unsplash.com/photo-1675705444858-97005ce93298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW58ZW58MXx8fHwxNzYyMDc0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop"
    ],
    interests: ["Art", "Museums", "Wine", "Dancing", "Creativity"],
    occupation: "Graphic Designer", 
    location: "Arts District, CA",
    verified: true,
    isOnline: false
  },
  {
    id: "4",
    firstName: "James",
    lastName: "Wilson",
    age: 30,
    bio: "Outdoor enthusiast 🏔️ | Photographer | Adventure awaits, let's make it happen 📸",
    distance: 7.1,
    images: [
      "https://images.unsplash.com/photo-1680557345345-6f9ef109d252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMG91dGRvb3J8ZW58MXx8fHwxNzYyMDczNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=600&fit=crop"
    ],
    interests: ["Photography", "Hiking", "Camping", "Nature", "Adventure"],
    occupation: "Travel Photographer",
    location: "Westside, CA", 
    verified: true,
    isOnline: true
  },
  {
    id: "5",
    firstName: "Olivia",
    lastName: "Davis",
    age: 27,
    bio: "Fitness enthusiast 💪 | Yoga instructor | Living my best life, join me? 🌟",
    distance: 4.3,
    images: [
      "https://images.unsplash.com/photo-1586550823286-613574af32a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjE1NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop"
    ],
    interests: ["Fitness", "Yoga", "Health", "Running", "Wellness"],
    occupation: "Yoga Instructor",
    location: "Beach City, CA",
    verified: false,
    isOnline: true
  },
  {
    id: "6",
    firstName: "Ryan",
    lastName: "Thompson",
    age: 29,
    bio: "Marketing professional | World traveler ✈️ | Always down for spontaneous adventures 🌮",
    distance: 6.7,
    images: [
      "https://images.unsplash.com/photo-1592234789031-94bf65f630ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxlfGVufDF8fHx8MTc2MjE2ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
    ],
    interests: ["Travel", "Food", "Marketing", "Sports", "Socializing"],
    occupation: "Marketing Director",
    location: "Uptown, CA",
    verified: true,
    isOnline: false
  },
  {
    id: "7",
    firstName: "Maya",
    lastName: "Rodriguez",
    age: 25,
    bio: "Dance instructor 💃 | Night owl | Let's dance until sunrise 🌅",
    distance: 1.8,
    images: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop"
    ],
    interests: ["Dancing", "Music", "Nightlife", "Fitness", "Performance"],
    occupation: "Dance Instructor",
    location: "Entertainment District, CA",
    verified: true,
    isOnline: true
  },
  {
    id: "8",
    firstName: "Jake",
    lastName: "Anderson",
    age: 32,
    bio: "Bartender & mixologist 🍸 | Know all the best spots in town | Let's grab a drink 🥂",
    distance: 2.1,
    images: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop"
    ],
    interests: ["Cocktails", "Nightlife", "Music", "Food", "Socializing"],
    occupation: "Bartender",
    location: "Bar District, CA",
    verified: false,
    isOnline: true
  }
];

// API functions for the swipe system
export async function getUserProfiles(): Promise<UserProfile[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Shuffle profiles for variety
  const shuffled = [...mockUserProfiles].sort(() => Math.random() - 0.5);
  return shuffled;
}

export async function createSwipeRecord(profileId: string, direction: SwipeDirection): Promise<void> {
  // Simulate API call to record swipe
  await new Promise(resolve => setTimeout(resolve, 200));
  
  console.log(`Swipe recorded: ${profileId} - ${direction}`);
}