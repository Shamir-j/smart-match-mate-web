import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Policy | One Night Stand",
  description: "Our zero-tolerance Child Safety Policy. Learn about our strict measures to protect minors and keep the platform safe on One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/child-safety/",
  },
};

export default function ChildSafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
