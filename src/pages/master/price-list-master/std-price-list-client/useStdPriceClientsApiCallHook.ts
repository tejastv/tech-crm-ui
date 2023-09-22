import { useAxios } from "@hooks/useAxios";
import { StdPriceClientsType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useStdPriceClientsApiCallHook = () => {
  const { instance } = useAxios();

  const getStdPriceClientsData = (
    id: string
  ): UseQueryResult<StdPriceClientsType[]> => {
    return useQuery<StdPriceClientsType[]>({
      queryKey: [queryKeys.STDPRICE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_STDPRICE_CLIENTS.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getStdPriceClientsData,
  };
};
