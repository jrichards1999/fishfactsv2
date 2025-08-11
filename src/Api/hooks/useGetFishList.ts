import { UseQueryResult, useQuery } from "react-query";
import { GET_FISH_LIST } from "../constants/queryNames";
import { getFishList } from "../wikiApi";

export function useGetFishList(
   onError?: () => void
): UseQueryResult<string[], unknown> {
   return useQuery([GET_FISH_LIST], () => getFishList(), {
      refetchOnWindowFocus: false,
      retry: false,
      onError: () => {
         onError?.();
      },
   });
}
