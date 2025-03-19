import bg from "@public/assets/StarGuardian19_Celebration_BG.png";
import Image from "next/image";
import { CHAMPION, ITEMLIST, ROTATION } from "@/constant/routePath";
import MainCardComp from "@/components/MainCardComp"

export default function Home() {
  return (
    <div className="mx-4 items-center flex h-full flex-row justify-center static">
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MainCardComp
          link={CHAMPION}
          desc="리그오브레전드의 챔피언들을 만나보세요."
          buttontext="챔피언 목록 보기"
        />
        <MainCardComp
          link={ITEMLIST}
          desc="리그오브레전드의 아이템들을 확인하세요."
          buttontext="아이템 목록 보기"
        />
        <MainCardComp
          link={ROTATION}
          desc="매 주 바뀌는 무료 챔피언을 확인하세요."
          buttontext="금주의 챔피언 보기"
        />
      </div>
    </div>
  );
}
