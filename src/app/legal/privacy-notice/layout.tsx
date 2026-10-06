import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Read our privacy policy to understand how we protect, collect, and manage your personal data on One Night Stand: Meet & Date, developed by Quantum Times Technologies.",
  alternates: {
    canonical: "/legal/privacy-notice/",
  },
};

export default function PrivacyNoticeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
