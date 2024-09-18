import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DubHacks Next",
  description: "Coolest Club on Campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="min-h-screen">
          <Navbar className="top-2" />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
