import { Info, Stats } from "@/types/ChampionDetail";
import React from "react";

type Props = {
  title: string;
  detailData: Info | Stats;
};

const DetailStatsComp = ({ detailData, title }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold pl-4">{title}</h4>
      {Object.entries(detailData).map(([key, value], i) => {
        return (
          <div key={i}>
            <div className="rounded-lg p-4 border-neutral-200 border-2 flex justify-between">
              <div>{key}:</div>
              <div className="font-bold text-primary">{value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailStatsComp;
