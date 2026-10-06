import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Health Privacy Policy | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Review our Consumer Health Privacy Policy regarding the collection and protection of health-related data on One Night Stand: Meet & Date.",
  alternates: {
    canonical: "/legal/consumer-health-privacy/",
  },
};

export default function ConsumerHealthPrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
