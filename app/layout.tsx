import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dolphin Group — цифровые продукты и автоматизация бизнеса",
    template: "%s — Dolphin Group",
  },
  description:
    "Разрабатываем MVP, веб-приложения, CRM, AI-агентов и облачную инфраструктуру. Соединяем продукты, данные и бизнес-процессы в единую систему.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Dolphin Group",
    title: "Dolphin Group — цифровые продукты и автоматизация бизнеса",
    description:
      "Проектируем, разрабатываем и соединяем цифровые продукты, данные, AI и облачную инфраструктуру.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dolphin Group — цифровые системы для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin Group — цифровые продукты и автоматизация бизнеса",
    description:
      "Проектируем, разрабатываем и соединяем цифровые продукты, данные, AI и облачную инфраструктуру.",
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
    <html lang="ru" className="scroll-pt-24">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
