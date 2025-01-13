import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
  const size = 21;
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body data-theme="corporate">
        <div className="font-times flex flex-col w-full justify-center">
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-row gap-4 py-16 px-4 justify-start w-11/12 md:w-11/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
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
        <div className="text-center font-times">Contact</div>
        <div className="flex flex-row gap-3 p-3 pb-8 justify-center">
          <a
            href="https://www.linkedin.com/in/suryagganesan/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="icons/linkedin.svg"
              alt="linkedin"
              width={size}
              height={size}
            />
          </a>
          <a href="https://github.com/cod-ux" target="_blank" rel="noreferrer">
            <Image
              src="icons/github.svg"
              alt="github"
              width={size}
              height={size}
            />
          </a>
          <a
            href="https://x.com/suryaganesan925"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="icons/twitter.svg"
              alt="twitter"
              width={size}
              height={size}
            />
          </a>
        </div>
      </body>
    </html>
  );
}
