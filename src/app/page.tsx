import bg from "@public/assets/StarGuardian19_Celebration_BG.png";
import Image from "next/image";
import Link from "next/link";
import {  CHAMPION, ITEMLIST, ROTATION } from "@/constant/routePath";

export default function Home() {
  return (
    <div className="mx-4 items-center static">
      <Image
        src={bg}
        alt="background image"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: "-999",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-neutral-200 h-56 rounded-xl box-border p-4 flex flex-col justify-between text-center">
          <p className="text-lg text-primary">리그오브레전드의 챔피언들을 만나보세요.</p>
          <Link href={CHAMPION} className="border-2 bg-background-light dark:bg-background-dark p-4 rounded-xl hover:bg-primary dark:hover:bg-primary">챔피언 목록 보기</Link>
        </div>
        <div className="border-2 border-neutral-200 h-56 rounded-xl box-border p-4 flex flex-col justify-between text-center">
          <p className="text-lg text-primary">리그오브레전드의 아이템들을 확인하세요.</p>
          <Link href={ITEMLIST} className="border-2 bg-background-light dark:bg-background-dark p-4 rounded-xl hover:bg-primary dark:hover:bg-primary">아이템 목록 보기</Link>
        </div>
        <div className="border-2 border-neutral-200 h-56 rounded-xl box-border p-4 flex flex-col justify-between text-center">
          <p className="text-lg text-primary">매 주 바뀌는 무료 챔피언을 확인하세요.</p>
          <Link href={ROTATION} className="border-2 bg-background-light dark:bg-background-dark p-4 rounded-xl hover:bg-primary dark:hover:bg-primary">금주의 챔피언 보기</Link>
        </div>
      </div>
    </div>
  );
}
