import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Read our Cookie Policy to learn how we use cookies and tracking technologies to enhance your experience on One Night Stand: Meet & Date.",
  alternates: {
    canonical: "/legal/cookie-policy/",
  },
};

export default function CookiePolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
