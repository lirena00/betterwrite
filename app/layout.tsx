import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betterwrite",
  description: "Write better with Betterwrite",
  icons: [{ rel: "icon", url: "/icon.svg" }],
  openGraph: {
    images: ["/ogimage.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Betterwrite",
    description: "Write better with Betterwrite",
    images: ["/ogimage.png"],
    creator: "@ronitrajfr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
