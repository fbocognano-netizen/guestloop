import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guest Loop - Fidelisation pour restaurants",
  description:
    "Landing page Guest Loop pour aider les restaurants a fideliser leurs clients avec QR code, recompenses digitales et campagnes de relance.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
