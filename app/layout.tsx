import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://iprok.com.ua";
const BRAND = "iProk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} — інженерна система збірного будівництва`,
    template: `%s | ${BRAND}`,
  },

  description:
    "iProk — інженерна система збірного будівництва: виробництво в цеху, мінімум робіт на об’єкті, прогнозовані строки та стабільна якість.",

  applicationName: BRAND,
  category: "construction",
  generator: "Next.js",

  keywords: [
    "iProk",
    "збірне будівництво",
    "інженерна система",
    "каркас",
    "модульні стіни",
    "енергоефективність",
    "швидкий монтаж",
  ],

  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,

  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: BRAND,
    locale: "uk_UA",
    title: `${BRAND} — інженерна система збірного будівництва`,
    description:
      "Каркас, утеплення та обшивка працюють як єдиний моноліт. Більшість критичних процесів — у контрольованих умовах виробництва.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND} — інженерна система`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — інженерна система збірного будівництва`,
    description:
      "Модульне виробництво, швидкий монтаж, контроль якості та прогнозований результат.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#2c5cf2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className="scroll-smooth bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
