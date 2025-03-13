"use server";

import {
  API_VERSION_URL,
  CHAMPION_DETAIL,
  CHAMPIONLIST_URL,
  ITEMLIST_URL,
  DDRAGON_URL,
} from "@/constant/fetchURL";
import { Champion, ChampionResponse } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";
import { ItemDataResponse, ItemData } from "@/types/Item";
const ONE_DAY = 60 * 60 * 24;

//api버전 정보 불러오기
export const getVersion = async () => {
  const res = await fetch(API_VERSION_URL);
  const data: string[] = await res.json();
  // console.log("data", data[0]);
  return data[0];
};

// 서버액션 정의
// 아이템 리스트 불러오기 SSG
export const fetchItemList = async () => {
  const ver = await getVersion();
  const res = await fetch(`${DDRAGON_URL}${ver}${ITEMLIST_URL}`, {
    cache: "force-cache",
  });
  const { data }: ItemDataResponse = await res.json();

  //아이템 정보를 필요한 것만 골라서 사용
  const itemData: ItemData[] = Object.entries(data).map(([key, value]) => {
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

// 챔피언 목록 불러오기 ISR
export const fetchChampionList = async () => {
  const ver = await getVersion();
  const res = await fetch(`${DDRAGON_URL}${ver}${CHAMPIONLIST_URL}`, {
    next: {
      revalidate: ONE_DAY,
    },
  });
  const { data }: ChampionResponse = await res.json();
  const championData: Champion[] = Object.values(data);
  // console.log("championData", championData);
  return championData;
};

// 챔피언 상세정보 불러오기 SSR
export const fetchChampionDetail = async (id: string) => {
  const ver = await getVersion();
  const res = await fetch(`${DDRAGON_URL}${ver}${CHAMPION_DETAIL}${id}.json`, {
    cache: "no-store",
  });
  
  const { data } = await res.json();
  // console.log("data", data);
  const championDetailData: ChampionDetail = data[id];
  // console.log("championDetailData", championDetailData);
  return championDetailData;
};
