"use client";

import { useChampionRotations } from "@/hooks/championQueries";

function RotationPage() {
  const { data:championRotationList, isPending, isError } = useChampionRotations();

  // console.log("championRotationList", championRotationList);

  if (isPending) {
  return <div>Loading...</div>;}
  
  if (isError) {
  return <div>Error...</div>;}

  return (
    <div>
      {championRotationList.map((champ) => {
        return <div key={champ.id}>{champ.name}</div>;
      })}
    </div>
  );
}

export default RotationPage;
