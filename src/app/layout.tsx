// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "../providers/ClientWrapper";
import "./globals.css";
import { App } from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One Night Stand - No Drama, No Commitments, Just Vibes",
  description: "Your go-to app for casual encounters. Swipe, match, and meet tonight. No drama, no commitments, just vibes.",
  keywords: "dating app, casual dating, hookup app, one night stand, meet tonight",
  openGraph: {
    title: "One Night Stand - No Drama, No Commitments",
    description: "Your go-to app for casual encounters. Swipe, match, and meet tonight.",
    url: "https://one-night-stand.co",
    siteName: "One Night Stand",
    type: "website",
    images: [
      {
        url: "https://one-night-stand.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One Night Stand - Dating App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Night Stand - No Drama, No Commitments",
    description: "Your go-to app for casual encounters. Swipe, match, and meet tonight.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <App>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </App>
      </body>
    </html>
  );
}
