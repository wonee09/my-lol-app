import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "My LoL Page",
  description: "LoL 데이터를 활용한 정보 사이트",
};

const myFont = localFont({
  src: "./fonts/ChosunCentennial_otf.otf",
  variable: "--font-chosun",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={myFont.variable}>
      <body className="bg-background-light font-chosun dark:bg-background-dark dark:text-text-dark h-screen">
        <header className="fixed top-0 w-full z-50">
          <NavBar />
        </header>
        <main className="container mx-auto h-full">
          <Provider>{children}</Provider>
        </main>
        <footer className="fixed bottom-0 w-full text-center p-8 h-20 box-border items-center bg-neutral-400/[0.8] dark:bg-neutral-900/[0.6] dark:text-text-dark">
          이것이 푸터다
        </footer>
      </body>
    </html>
  );
}
