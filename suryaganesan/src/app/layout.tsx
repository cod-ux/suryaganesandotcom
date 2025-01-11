import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Surya Ganesan's Personal Website",
  description:
    "A Next js + Tpescript website that showcases my work and thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body data-theme="corporate">
        <div className="font-times flex flex-col w-full justify-center">
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-row gap-4 py-16 px-4 w-5/12 justify-start">
              <Link href="/" className="row-span-1">
                home
              </Link>
              <Link href="/journal" className="row-span-1">
                journal
              </Link>
              <Link href="/pinterest" className="row-span-1">
                pinterest
              </Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
