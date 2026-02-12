import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://iprok.vercel.app"; // лучше потом заменить на свой домен
const SITE_NAME = "iProk";
const DEFAULT_TITLE = "iProk — інженерна система будівництва";
const DEFAULT_DESCRIPTION =
  "iProk — інженерна екосистема: каркас, утеплення та обшивка працюють як єдиний моноліт. Заводська точність, швидкий монтаж і прогнозований результат.";

export const metadata: Metadata = {
  // Базовое
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,

  keywords: [
    "iProk",
    "інженерна система",
    "будівництво",
    "каркас",
    "енергоефективність",
    "заводське виробництво",
    "модульне будівництво",
    "швидкий монтаж",
  ],

  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
    },
  },

  // Роботы
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "uk_UA",
    images: [
      {
        url: "/og.jpg", // ✅ положи public/og.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "iProk — інженерна система будівництва",
      },
    ],
  },

  // Twitter cards
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.jpg"],
    // если есть твиттер аккаунт — раскомментируй:
    // site: "@iprok",
    // creator: "@iprok",
  },

  // Иконки/манифест
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  category: "construction",
  creator: SITE_NAME,
  publisher: SITE_NAME,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
