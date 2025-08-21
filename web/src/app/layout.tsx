import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mesgana - The Amharic SDA Hymnal",
  description: "Download Mesgana, the digital hymnal for Amharic-speaking Seventh-day Adventist communities worldwide.",
  keywords: ["Mesgana", "Amharic", "SDA", "Hymnal", "Ethiopian", "Seventh-day Adventist", "Worship", "Hymns"],
  authors: [{ name: "Mesgana Team" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Mesgana - The Amharic SDA Hymnal",
    description: "Download Mesgana, the digital hymnal for Amharic-speaking Seventh-day Adventist communities worldwide.",
    type: "website",
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Mesgana - The Amharic SDA Hymnal',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
