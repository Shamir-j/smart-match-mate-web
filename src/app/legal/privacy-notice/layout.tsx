import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | One Night Stand",
  description: "Read our privacy policy to understand how we protect, collect, and manage your personal data on One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/privacy-notice/",
  },
};

export default function PrivacyNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
