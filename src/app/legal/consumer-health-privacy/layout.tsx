import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Health Privacy Policy | One Night Stand",
  description: "Review our Consumer Health Privacy Policy regarding the collection and protection of health-related data on One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/consumer-health-privacy/",
  },
};

export default function ConsumerHealthPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
