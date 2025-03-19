"use client";

import Image from "next/image";
import Link from "next/link";
import { HOME, CHAMPION, ITEMLIST, ROTATION } from "@/constant/routePath";
import logo from "@public/assets/logo.svg";
import { HiMiniBars3 } from "react-icons/hi2";
import { useMenuToggle } from "@/store/menuOpenStore";
import SidebarComp from "@/components/SidebarComp"

const NavBar = () => {
  const setIsMenuOpenToggle = useMenuToggle(
    (state) => state.setIsMenuOpenToggle
  );

  // console.log("토글상태", isMenuOpen);

  return (
    <div>
      <SidebarComp />
      <nav className="flex items-center p-8 h-20 box-border bg-neutral-400/[0.8] dark:bg-neutral-900/[0.6] dark:text-primary-dark font-semibold text-lg z-50">
        <div className="flex items-center w-full ">
          <Link href={HOME}>
            <Image src={logo} alt="logo" height={50} />
          </Link>
          <div className="container mx-auto sm:flex justify-around hidden ">
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
        </div>
        <button className="sm:hidden" onClick={setIsMenuOpenToggle}>
          <HiMiniBars3 />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
