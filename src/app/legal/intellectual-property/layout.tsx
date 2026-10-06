import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Property Policy | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Learn about our Intellectual Property Policy, trademark guidelines, and how to report copyright infringement for One Night Stand: Meet & Date.",
  alternates: {
    canonical: "/legal/intellectual-property/",
  },
};

export default function IntellectualPropertyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
