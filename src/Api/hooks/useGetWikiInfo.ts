import { useQuery, UseQueryResult } from "react-query";
import { GET_WIKI_INFO } from "../constants/queryNames";
import { getWikiInfo, IWikiInfo } from "../wikiApi";

export function useGetWikiInfo(
  searchTerm?: string,
  onError?: () => void
): UseQueryResult<IWikiInfo, unknown> {
  return useQuery([GET_WIKI_INFO, searchTerm], () => getWikiInfo(searchTerm), {
    enabled: !!searchTerm,
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      onError?.();
    },
  });
}
