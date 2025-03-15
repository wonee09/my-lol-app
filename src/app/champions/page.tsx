import { DDRAGON_URL } from "@/constant/fetchURL";
import { fetchChampionList, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

async function ChampionPage() {
  const championList = await fetchChampionList();
  const ver = await getVersion();

  return (
    <div className="mt-12 mb-12">
      <div className="grid grid-cols-4 gap-4">
        {championList.map((champion) => {
          return (
            <Link href={`/champions/${champion.id}`} key={champion.key}>
              <div
                className="flex flex-col items-center justify-start rounded-lg py-2 border-neutral-200 gap-2 border-2 hover:border-primary
"
              >
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
        })}
      </div>
    </div>
  );
}

export default ChampionPage;
