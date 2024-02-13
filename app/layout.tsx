import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Header,footerモジュール
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header/>
        <Suspense fallback={<Loading />}>
          {children}
          <Footer/>
        </Suspense>
      </body>
    </html>
  );
}
