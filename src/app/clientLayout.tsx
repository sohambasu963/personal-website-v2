"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";

  return (
    <div className={isWorkPage ? "w-4/5 mx-auto" : "w-4/5 mx-auto"}>
      <Navbar />
      {children}
    </div>
  );
}
