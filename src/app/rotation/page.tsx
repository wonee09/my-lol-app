"use client";

import ChampionComponent from "@/components/championComp";
import { useChampionRotations } from "@/hooks/championQueries";
import { getVersion } from "@/utils/serverApi";
import { useEffect, useState } from "react";

function RotationPage() {
  const {
    data: championRotationList,
    isPending,
    isError,
  } = useChampionRotations();

  const [ver, setVer] = useState<string>("");
  useEffect(() => {
    const fetchVersion = async () => {
      const version = await getVersion();
      setVer(version);
    };
    fetchVersion();
  }, []);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mx-4">
      <h2 className="text-2xl text-center pb-6">금주의 무료 챔피언</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {championRotationList.map((champ) => {
          return (
            <ChampionComponent champion={champ} key={champ.id} ver={ver} />
          );
        })}
      </div>
    </div>
  );
}

export default RotationPage;
