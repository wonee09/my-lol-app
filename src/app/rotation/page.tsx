"use client";

import ChampionComponent from "@/components/ChampionComp";
import { useChampionRotations } from "@/hooks/championQueries";
import { getVersion } from "@/utils/serverApi";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

function RotationPage() {
  const {
    data: championRotationList,
    isError,
    isLoading,
  } = useChampionRotations();

  const [ver, setVer] = useState<string>("");
  useEffect(() => {
    const fetchVersion = async () => {
      const version = await getVersion();
      setVer(version);
    };
    fetchVersion();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Data Error...</div>;
  }

  return (
    <div className="mx-4 py-24">
      <h2 className="text-2xl text-center pb-6">금주의 무료 챔피언</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {championRotationList?.map((champ) => {
          return (
            <ChampionComponent champion={champ} key={champ.id} ver={ver} />
          );
        })}
      </div>
    </div>
  );
}

export default RotationPage;
