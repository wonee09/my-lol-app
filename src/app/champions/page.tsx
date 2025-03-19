import ChampionComponent from "@/components/ChampionComp"
import { fetchChampionList } from "@/utils/serverApi";
import { getVersion } from "@/utils/serverApi";

async function ChampionPage() {
  const championList = await fetchChampionList();
  const ver = await getVersion();

  return (
    <div className="mx-4 py-24">
      <h2 className="text-2xl text-center pb-6">챔피언 목록</h2>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4">
        {championList.map((champion) => {
          return (
            <ChampionComponent
              champion={champion}
              key={champion.key}
              ver={ver}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChampionPage;
