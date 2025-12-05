// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Modern portfolio of a Next.js and TypeScript developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-900 text-white py-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Frontend Developer Portfolio.
            Built with Next.js & TypeScript.
          </p>
        </footer>
      </body>
    </html>
  );
}
