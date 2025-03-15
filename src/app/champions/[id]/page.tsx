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
  console.log("championData", championData);
  return (
    <div className="flex flex-col gap-2 mx-4">
      <h2 className="text-4xl font-bold">{championData.name}</h2>
      <h3 className="text-xl">{championData.title}</h3>
      <Image
        src={`${DDRAGON_URL}${ver}/img/champion/${championData.image.full}`}
        alt={championData.image.full}
        width={200}
        height={200}
      />
      <div className="mt-4 text-lg">{championData.blurb}</div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] mt-4 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold pl-4">Info</h4>
          {Object.entries(championData.info).map(([key, value], i) => {
            return (
              <div key={i}>
                <div className="rounded-lg p-4 border-neutral-200 border-2 flex justify-between">
                  <div>{key}:</div>
                  <div className="font-semibold text-primary">{value}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold pl-4">Stats</h4>
          {Object.entries(championData.stats).map(([key, value], i) => {
            return (
              <div key={i}>
                <div className="rounded-lg p-4 border-neutral-200 border-2 flex justify-between">
                  <div>{key}:</div>
                  <div className="font-semibold text-primary">{value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
