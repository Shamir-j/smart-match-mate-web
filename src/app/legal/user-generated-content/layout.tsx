import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Generated Content Policy | One Night Stand",
  description: "Review our guidelines for user-generated content, profiles, and media to keep One Night Stand safe and respectful.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/user-generated-content/",
  },
};

export default function UserGeneratedContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
