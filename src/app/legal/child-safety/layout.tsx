import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Standards & CSAE Policy | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Official Child Safety Standards and Child Sexual Abuse and Exploitation (CSAE) Prohibition Policy for One Night Stand: Meet & Date, published by Quantum Times Technologies.",
  alternates: {
    canonical: "/legal/child-safety/",
  },
};

export default function ChildSafetyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
