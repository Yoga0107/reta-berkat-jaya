import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "Reta Berkat Jaya",
  description: "Ekspedisi cargo terpercaya dan aman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar /> {/* Now using a functional navbar */}
        <main className="pt-20">{children}</main> {/* Adjusted for fixed navbar height */}
      </body>
    </html>
  );
}
