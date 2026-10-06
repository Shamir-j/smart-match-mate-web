import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Our commitment to digital accessibility. Read how we make One Night Stand: Meet & Date inclusive and accessible for all users.",
  alternates: {
    canonical: "/legal/accessibility/",
  },
};

export default function AccessibilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
