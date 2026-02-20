import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { LanguageProvider } from "@/src/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renaldi-dev.vercel.app/"),
  title: {
    default:
      "Renaldi Mohamad | Engineer building systems that turn complexity into clarity.",
    template: "%s — Renaldi Mohamad",
  },
  description:
    "I’m interested in how systems scale, how ideas spread, and how clarity changes everything.",

  keywords: [
    "Renaldi Mohamad",
    "Full Stack Developer",
    "Dashboard Engineer",
    "Clean UI",
    "System Architecture",
    "Engineering Blog",
  ],

  openGraph: {
    title:
      "Renaldi Mohamad | Engineer building systems that turn complexity into clarity.",
    description:
      "I’m interested in how systems scale, how ideas spread, and how clarity changes everything.",
    url: "https://renaldi-dev.vercel.app/",
    siteName: "Renaldi Mohamad",
    images: [
      {
        url: "https://renaldi-dev.vercel.app/images/profile_aldi_1.png",
        width: 1200,
        height: 630,
        alt: "Renaldi Mohamad — Engineering & Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renaldi Mohamad",
    description: "Engineer building systems that turn complexity into clarity.",
    images: ["https://renaldi-dev.vercel.app/images/profile_aldi_1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <LanguageProvider>{children}</LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
