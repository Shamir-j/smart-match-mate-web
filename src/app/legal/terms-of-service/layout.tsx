import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | One Night Stand",
  description: "Review our Terms of Service. Understand the rules, safety guidelines, and terms governing your use of One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/terms-of-service/",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
