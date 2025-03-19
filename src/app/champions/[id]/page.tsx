import DetailStatsComp from "@/components/DetailStatsComp";
import { DDRAGON_URL } from "@/constant/fetchURL";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
const ChampionDetailPage = async ({ params }: Props) => {
  const id = params.id;
  const championData = await fetchChampionDetail(id);
  // console.log("championData", championData);
  return (
    <div className="flex flex-col gap-2 mx-4 py-24">
      <h2 className="text-4xl font-bold">{championData.name}</h2>
      <h3 className="text-xl">{championData.title}</h3>
        <div className="bg-neutral-500 h-96 relative">
          <Image
            src={`${DDRAGON_URL}img/champion/splash/${championData.id}_0.jpg`}
            alt={championData.image.full}
            quality={100}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      <div className="mt-4 text-lg">{championData.blurb}</div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] mt-4 md:grid-cols-2 gap-8">
        <DetailStatsComp title="Info" detailData={championData.info} />
        <DetailStatsComp title="Stats" detailData={championData.stats} />
      </div>
    </div>
  );
};

export default ChampionDetailPage;
