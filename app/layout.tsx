import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { LanguageProvider } from "@/src/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renaldi.fun/"),

  title: {
    default: "Renaldi Mohamad | Fullstack Developer & Web Builder",
    template: "%s — Renaldi Mohamad",
  },

  description:
    "Renaldi Mohamad is a Fullstack Developer building systems that turn complexity into clarity. Specializing in React, Next.js, and scalable web architectures.",

  keywords: [
    "Renaldi Mohamad",
    "Full Stack Developer Indonesia",
    "Next.js Developer",
    "React Engineer",
    "Web Systems Architect",
    "Freelance Developer",
  ],

  verification: {
    google: "wIvMP-UwQdSEbK3W0bmFYUyKduu53tnFzB0lDJojc9c",
  },
  openGraph: {
    title: "Renaldi Mohamad | Fullstack Developer & Web Builder",
    description:
      "Engineer building systems that turn complexity into clarity. Specialized in React, Next.js, and high-performance web apps.",
    url: "https://renaldi.fun/",
    siteName: "Renaldi Mohamad",
    images: [
      {
        url: "/images/og-main.png",
        width: 1200,
        height: 630,
        alt: "Renaldi Mohamad — Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renaldi Mohamad",
    description:
      "Fullstack Developer building systems that turn complexity into clarity.",
    images: ["/images/og-main.png"],
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

  alternates: {
    canonical: "https://renaldi.fun/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Renaldi Mohamad",
    url: "https://renaldi.fun",
    image: "https://renaldi.fun/images/blog_cover_2.webp",
    jobTitle: "Fullstack Developer",
    description: "Engineer building systems that turn complexity into clarity.",
    sameAs: [
      "https://github.com/renaldimohamad",
      "https://linkedin.com/in/renaldimohamad",
      "https://me.renaldi.fun",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Renaldi Mohamad",
    url: "https://renaldi.fun",
    description:
      "Personal thinking space and developer journal of Renaldi Mohamad.",
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
