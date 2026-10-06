import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Generated Content Policy | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Review our guidelines for user-generated content, profiles, and media to keep One Night Stand: Meet & Date safe and respectful.",
  alternates: {
    canonical: "/legal/user-generated-content/",
  },
};

export default function UserGeneratedContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
