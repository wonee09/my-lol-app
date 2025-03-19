"use client";

import { HOME, CHAMPION, ITEMLIST, ROTATION } from "@/constant/routePath";
import { useMenuToggle } from "@/store/menuOpenStore";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/assets/logo.svg";
import { RiCloseLargeFill } from "react-icons/ri";

const SidebarComp = () => {
  const { isMenuOpen, setIsMenuOpenToggle } = useMenuToggle();

  // console.log("토글상태", isMenuOpen);

  return (
    <div>
      {isMenuOpen ? (
        <>
          <span
            onClick={setIsMenuOpenToggle}
            className="absolute right-60 text-primary p-2 bg-background-light dark:bg-background-dark cursor-pointer sm:hidden"
          >
            <RiCloseLargeFill />
          </span>
          <div className="absolute right-0 w-60 h-screen bg-background-light dark:bg-background-dark sm:hidden">
            <aside className="flex flex-col mt-6 ml-4">
              <Link href={HOME} className="p-4" onClick={setIsMenuOpenToggle}>
                <Image src={logo} alt="logo" height={20} />
              </Link>
              <Link href={CHAMPION} onClick={setIsMenuOpenToggle}>
                <div className="p-4 ">챔피언 목록</div>
              </Link>
              <Link href={ITEMLIST} onClick={setIsMenuOpenToggle}>
                <div className="p-4">아이템 목록</div>
              </Link>
              <Link href={ROTATION} onClick={setIsMenuOpenToggle}>
                <div className="p-4">챔피언 로테이션</div>
              </Link>
            </aside>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SidebarComp;
