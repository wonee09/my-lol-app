import { ROTATION_URL } from "@/constant/fetchURL";
import type { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(ROTATION_URL, {
    headers: {
      "X-Riot-Token": process.env.RIOT_API_KEY as string,
    },
  });
  if (!res.ok) {
    return new Response("데이터를 불러오는데 실패했습니다.", {
      status: res.status,
    });
  }
  const data: ChampionRotation = await res.json();

  return NextResponse.json(data);
}

