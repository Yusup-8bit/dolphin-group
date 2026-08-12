import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dolphin Group — Digital Products, AI & Automation",
    template: "%s — Dolphin Group",
  },
  description:
    "We design and build MVPs, web applications, CRM systems, AI agents, and cloud infrastructure — connected around the way your business works.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dolphin Group",
    title: "Dolphin Group — Digital Products, AI & Automation",
    description:
      "We design, build, and connect digital products, data, AI, and cloud infrastructure.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dolphin Group — connected digital systems for business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin Group — Digital Products, AI & Automation",
    description:
      "We design, build, and connect digital products, data, AI, and cloud infrastructure.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1531" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-24">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
