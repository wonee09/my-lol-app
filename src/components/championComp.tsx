"use client";

import { DDRAGON_URL } from "@/constant/fetchURL";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  champion: Champion;
  ver: string;
};

function ChampionComponent({ champion, ver }: Props) {
  return (
    <Link href={`/champions/${champion.id}`}>
      <div className="flex flex-col items-center justify-start rounded-lg py-2 border-neutral-200 gap-2 border-2 hover:border-primary">
        <Image
          src={`${DDRAGON_URL}${ver}/img/champion/${champion.image.full}`}
          alt={champion.image.full}
          width={100}
          height={100}
        />
        <h2 className="text-xl font-bold">{champion.name}</h2>
        <div>{champion.title}</div>
      </div>
    </Link>
  );
}

export default ChampionComponent;
