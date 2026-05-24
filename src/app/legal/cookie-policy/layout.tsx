import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | One Night Stand",
  description: "Read our Cookie Policy to learn how we use cookies and tracking technologies to enhance your experience on One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/cookie-policy/",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
