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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
