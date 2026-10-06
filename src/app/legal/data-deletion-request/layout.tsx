import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Request | One Night Stand: Meet & Date | Quantum Times Technologies",
  description: "Submit a data deletion request to permanently remove your account, profile, and personal data from One Night Stand: Meet & Date.",
  alternates: {
    canonical: "/legal/data-deletion-request/",
  },
};

export default function DataDeletionRequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
