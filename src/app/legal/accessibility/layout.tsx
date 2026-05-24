import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | One Night Stand",
  description: "Our commitment to digital accessibility. Read how we make One Night Stand inclusive and accessible for all users.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/accessibility/",
  },
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
