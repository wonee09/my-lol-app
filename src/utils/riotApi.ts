import { Champion } from "@/types/Champion";
import { fetchChampionList } from "./serverApi";

export const getChampionRotation = async ():Promise<Champion[]> => {
  const response = await fetch("api/rotation");
  const { freeChampionIds }= await response.json();
  const championList = await fetchChampionList();
  // response 의 결과값 가지고
  //챔피언 아이디랑 매칭해서 정보 가져오기
    // console.log("response", freeChampionIds);
    // console.log("champions", championList);

  return freeChampionIds.map((id: number) => {
    return championList.find((champion) => champion.key === String(id))
  })
};
