import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { HOME, CHAMPION, ITEMLIST, ROTATION } from "@/constant/routePath";
import Provider from "./provider";
import Image from "next/image";
import logo from "@public/assets/logo.svg";
import localFont from "next/font/local";


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
          <nav className="flex items-center p-8 h-20 box-border bg-neutral-400/[0.8] dark:bg-neutral-900/[0.6] dark:text-primary-dark font-semibold text-lg z-50">
            <Link href={HOME}>
              <Image src={logo} alt="logo" height={50} />
            </Link>
            <div className="container mx-auto flex justify-around">
              <Link href={CHAMPION}>
                <div className="p-4 ">챔피언 목록</div>
              </Link>
              <Link href={ITEMLIST}>
                <div className="p-4">아이템 목록</div>
              </Link>
              <Link href={ROTATION}>
                <div className="p-4">챔피언 로테이션</div>
              </Link>
            </div>
          </nav>
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
