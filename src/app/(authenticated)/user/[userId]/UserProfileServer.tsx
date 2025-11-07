import React from 'react';
import type { Metadata } from 'next';
import UserProfileClient from './UserProfileClient';

// ISR Configuration for optimal performance
export const dynamic = 'auto';
export const revalidate = 60; // Revalidate every 60 seconds for fresh data

// Pre-generate static paths for top users (performance optimization)
export async function generateStaticParams() {
  // In production, this would fetch your most active users
  // For now, generate paths for demo users
  const topUserIds = ['sarah', 'mike', 'jessica', 'alex', 'emma'];
  
  return topUserIds.map((userId) => ({
    userId: userId,
  }));
}

// Mock user data fetching (in production, this would be your API call)
async function getUserData(userId: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const mockUsers: Record<string, any> = {
    sarah: {
      id: 'sarah',
      name: 'Sarah Johnson',
      age: 28,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      bio: 'Love hiking, good coffee, and spontaneous adventures. Let\'s grab drinks and see where the night takes us! 🌃',
      location: 'San Francisco, CA',
      distance: 2,
      photos: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop'
      ],
      interests: ['Hiking', 'Photography', 'Coffee', 'Travel', 'Yoga', 'Dogs', 'Art'],
      occupation: 'UX Designer',
      education: 'Stanford University',
      height: "5'6\"",
      lookingFor: 'Long-term relationship',
      socialMedia: {
        instagram: 'sarah_adventures',
        linkedin: 'sarah-johnson-ux'
      }
    }
  };

  if (mockUsers[userId]) {
    return mockUsers[userId];
  }

  // Generate dynamic demo user for any user ID
  return {
    id: userId,
    name: `User ${userId}`,
    age: Math.floor(Math.random() * 15) + 22,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
    bio: `This is a dynamically generated profile for user ${userId}. In a real application, this would be fetched from your database.`,
    location: 'Demo City, CA',
    distance: Math.floor(Math.random() * 25) + 1,
    photos: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=600&fit=crop'
    ],
    interests: ['Dynamic', 'Routing', 'Demo', 'Next.js'],
    occupation: 'Demo Profile',
    education: 'Demo University',
    height: "5'9\"",
    lookingFor: 'Demo connection',
    socialMedia: {}
  };
}

// Dynamic metadata for social sharing (SEO optimization)
export async function generateMetadata({ params }: {
  params: { userId: string }
}): Promise<Metadata> {
  const userData = await getUserData(params.userId);
  
  return {
    title: `${userData.name}, ${userData.age} - One Night Stand`,
    description: `Check out ${userData.name}'s profile on One Night Stand. ${userData.bio.slice(0, 150)}...`,
    openGraph: {
      title: `${userData.name} on One Night Stand`,
      description: `View ${userData.name}'s profile and photos`,
      images: [
        {
          url: userData.photos[0] || userData.avatar,
          width: 400,
          height: 600,
          alt: `${userData.name}'s profile photo`,
        },
      ],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${userData.name}, ${userData.age}`,
      description: userData.bio.slice(0, 200),
      images: [userData.photos[0] || userData.avatar],
    },
  };
}

// Server Component - handles ISR and SEO
export default async function UserProfilePage({ params }: { params: { userId: string } }) {
  // Fetch user data on server for ISR
  const initialUserData = await getUserData(params.userId);
  
  return (
    <UserProfileClient 
      initialUserData={initialUserData}
      userId={params.userId}
    />
  );
}