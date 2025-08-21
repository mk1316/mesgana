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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Mesgana - The Amharic SDA Hymnal",
    description: "Download Mesgana, the digital hymnal for Amharic-speaking Seventh-day Adventist communities worldwide.",
    type: "website",
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
