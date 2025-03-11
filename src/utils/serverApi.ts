"use server";
import { CHAMPIONLIST_URL, ITEMLIST_URL } from "@/constant/fetchURL";
import { ChampionResponse } from "@/types/Champion";
import { ItemDataResponse } from "@/types/Item";

// 서버액션 정의
// 아이템 리스트 불러오기
export const fetchItemList = async () => {
  const res = await fetch(ITEMLIST_URL, {
    cache: "force-cache",
  });
  const { data }: ItemDataResponse = await res.json();

  //아이템 정보를 필요한 것만 골라서 사용
  const itemData = Object.entries(data).map(([key, value]) => {
    return {
      id: Number(key),
      name: value.name,
      plaintext: value.plaintext,
      image: value.image,
    };
  });
  // console.log("itemData", itemData);
  return itemData;
};

// 챔피언 목록 불러오기
export const fetchChampionList = async () => {
  const res = await fetch(CHAMPIONLIST_URL);
  const { data: championData }: ChampionResponse = await res.json();
  // console.log("championData", championData)
  return championData;
};

// 챔피언 상세정보 불러오기
export const fetchChampionDetail = () => {};
