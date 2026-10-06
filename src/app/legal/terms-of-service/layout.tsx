import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Review our Terms of Service. Understand the rules, safety guidelines, and terms governing your use of One Night Stand: Meet & Date, developed by Quantum Times Technologies.",
  alternates: {
    canonical: "/legal/terms-of-service/",
  },
};

export default function TermsOfServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
