import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

export const useChampionRotations = () => {
  return useQuery({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });
};
