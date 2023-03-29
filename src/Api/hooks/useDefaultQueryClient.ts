import { QueryClient } from "react-query";

export default function useDefaultQueryClient(): QueryClient {
  const queryClient = new QueryClient();

  // Use this area to set default options for all react query hooks
  queryClient.setDefaultOptions({
    queries: {
      retryDelay: (retryCount: number) => (retryCount === 0 ? 1000 : 3000),
    },
  });

  return queryClient;
}
