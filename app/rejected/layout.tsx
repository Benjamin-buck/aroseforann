import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Outfit } from "next/font/google";

const DharmaPunk = localFont({
  src: "../fonts/Dharma_Punk.ttf",
  variable: "--font-DharmaPunk",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A Rose for Ann",
  description: "A Pop-Punk band from Ontario Canada!",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${DharmaPunk.variable} ${outfit.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
