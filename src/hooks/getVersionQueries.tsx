import { getVersion } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

export const useGetVersion = () => {
  return useQuery({
    queryKey: ["version"],
    queryFn: getVersion,
  });
};
