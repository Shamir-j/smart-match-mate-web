import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Request | One Night Stand",
  description: "Submit a data deletion request to permanently remove your account, profile, and personal data from One Night Stand.",
  alternates: {
    canonical: "https://one-night-stand.co/legal/data-deletion-request/",
  },
};

export default function DataDeletionRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
