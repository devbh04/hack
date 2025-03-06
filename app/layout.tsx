import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Work_Sans({
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BunkIT",
  description: "BunkIT is a web app that helps you find the perfect price for your product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} h-screen text-black max-w-full`}
      >
        {children}
      </body>
    </html>
  );
}
