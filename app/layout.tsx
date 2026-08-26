import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} · ${profile.role}`,
  description: profile.valueProposition,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.valueProposition,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: profile.valueProposition,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background font-body text-foreground antialiased">{children}</body>
    </html>
  );
}
