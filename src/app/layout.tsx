import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/home/Footer";

// import { PageTransition } from "@/components/effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://joeve.com"),
  title: "JOeve Smart Solutions - AI-Powered Digital Transformation",
  description: "Transform your business with AI-powered web apps, social media automation, and video production. Serving Malaysian businesses with cutting-edge digital solutions.",
  keywords: "AI solutions, web development, social media automation, video production, digital transformation, Malaysia",
  authors: [{ name: "JOeve Smart Solutions" }],
  openGraph: {
    title: "JOeve Smart Solutions - AI-Powered Digital Transformation",
    description: "Transform your business with AI-powered web apps, social media automation, and video production.",
    type: "website",
    locale: "en_MY",
    siteName: "JOeve Smart Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOeve Smart Solutions - AI-Powered Digital Transformation",
    description: "Transform your business with AI-powered web apps, social media automation, and video production.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Header />
          <main className="flex-1">
            <div>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
