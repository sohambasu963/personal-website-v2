import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soham Basu",
  description:
    "Soham Basu | Software Developer and Computer Science + Finance at the University of Waterloo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className={inter.className}>
        <link rel="icon" href="/images/SohamEmoji.png" sizes="any" />
        <div className="w-4/5 mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
