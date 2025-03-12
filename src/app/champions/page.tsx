import { DDRAGON_URL } from "@/constant/fetchURL";
import { fetchChampionList, getVersion } from "@/utils/serverApi";
import Image from "next/image";

async function ChampionPage() {
  const championList = await fetchChampionList();
  const ver = await getVersion();

  return (
    <div>
      {championList.map((champion) => {
        return (
          <div key={champion.key}>
            <Image
              src={`${DDRAGON_URL}${ver}/img/champion/${champion.image.full}`}
              alt={champion.image.full}
              width={100}
              height={100}
            />
            <div>{champion.name}</div>
            <div>{champion.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ChampionPage;
