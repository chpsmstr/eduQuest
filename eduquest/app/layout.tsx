import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
const pixelfySans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduQuest",
  description: "Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixelfySans.className}>{children}</body>
    </html>
  );
}
