import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/app/_header/header";
import {Suspense} from "react";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Orion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background inter antialiased',
        inter.className
      )}>
        <Header />
        <div className={'md:container md:mx-auto'}>
          <Suspense>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
