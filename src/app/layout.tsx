import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF3A8A" },
    { media: "(prefers-color-scheme: dark)", color: "#FF3A8A" },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "One Night Stand – No Drama. No Commitments. Just Vibes.",
  description: "One Night Stand is the hookup app for people who know what they want — tonight. Swipe, match, and meet in a safe and discreet space. No drama, no commitments, just vibes.",
  keywords: [
    "casual dating app",
    "hookup app", 
    "one night stand app",
    "dating tonight",
    "no-strings-attached dating",
    "casual encounters",
    "swipe match meet",
    "discreet dating app",
    "local hookups",
    "casual dating near me",
    "no commitments dating",
    "fun dating app",
    "quick hookups",
    "safe hookup app",
    "modern dating app",
    "swipe to meet",
    "casual meetup app",
    "vibes only dating",
    "adult dating app",
    "fast casual dating",
  ],
  applicationName: "One Night Stand",
  authors: [{ name: "Zaam Technologies" }],
  creator: "Zaam Technologies", 
  publisher: "Zaam Technologies",
  metadataBase: new URL("https://one-night-stand.co"),
  category: "dating",
  alternates: {
    canonical: "https://one-night-stand.co",
  },
  openGraph: {
    type: "website",
    url: "https://one-night-stand.co",
    title: "One Night Stand – No Drama. No Commitments. Just Vibes.",
    description: "Swipe, match, and meet tonight. One Night Stand is the casual dating app built for hookups, not relationships.",
    siteName: "One Night Stand",
    images: [
      {
        url: "https://lumenpix.one-night-stand.co/zaam-technologies/image/upload/v1721149132/resources/Zaam_Technologies_Design_a_bold,_modern,_and_seductive_app_preview_card_for__One_Ni_9b661ef4-704b-470d-8739-23447f1f7b62.jpg",
        width: 1200,
        height: 630,
        alt: "One Night Stand – Casual Hookup App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Night Stand – No Drama. No Commitments. Just Vibes.",
    description: "The hookup app for people who know what they want — tonight. Safe, discreet, and easy.",
    images: ["https://lumenpix.one-night-stand.co/zaam-technologies/image/upload/v1721149132/resources/Zaam_Technologies_Design_a_bold,_modern,_and_seductive_app_preview_card_for__One_Ni_9b661ef4-704b-470d-8739-23447f1f7b62.jpg"],
    creator: "@onenightstand",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-167x167.png", sizes: "167x167", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#FF3A8A",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large", 
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
