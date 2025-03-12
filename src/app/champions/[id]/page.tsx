import { DDRAGON_URL } from "@/constant/fetchURL";
import { fetchChampionDetail, getVersion } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
const ChampionDetailPage = async ({ params }: Props) => {
  const ver = await getVersion();
  const id = params.id;
  const championData = await fetchChampionDetail(id);
  //   console.log("championData", championData);
  return (
    <div>
      <div>{championData.name}</div>
      <div>{championData.title}</div>
      <Image
        src={`${DDRAGON_URL}${ver}/img/champion/${championData.image.full}`}
        alt={championData.image.full}
        width={200}
        height={200}
      />
      <div>{championData.blurb}</div>

      <div>
        스탯 
        {Object.entries(championData.info).map(([key, value], i) => {
          return (
            <div key={i}>
              {key}:{value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
