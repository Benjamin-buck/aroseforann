import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A Rose for Ann",
  description: "A Pop-Punk band from Ontario Canada!",
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
        <Image
          src="/bg.svg"
          alt="background"
          width={1920}
          height={1080}
          className="-z-10 top-0 left-0 opacity-75 max-md:hidden w-[100vw] fixed"
        />
        <Image
          src="/bg-2.svg"
          alt="background"
          width={1920}
          height={1080}
          className="-z-20 top-0 left-0 opacity-75 max-md:hidden w-[100vw] fixed"
        />
        <Image
          src="/iphone-bg.png"
          alt="background"
          width={430}
          height={932}
          className="-z-20 fixed top-0 left-0 opacity-75 md:hidden w-[100%]"
        />
        <Navbar />
        <div className="max-sm:px-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
