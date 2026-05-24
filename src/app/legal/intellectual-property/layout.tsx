import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property Policy | One Night Stand",
  description: "Learn about our Intellectual Property Policy, trademark guidelines, and how to report copyright infringement on One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/intellectual-property/",
  },
};

export default function IntellectualPropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
