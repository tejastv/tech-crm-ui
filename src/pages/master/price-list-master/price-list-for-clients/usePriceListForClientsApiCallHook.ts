import { useAxios } from "@hooks/useAxios";
import { CurrencyAndGroupType, StdPriceClientsType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const usePriceListForClientsApiCallHook = () => {
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

  const getCurrencyAndGroupByClientID = (
    id: number,
    condition: any
  ): UseQueryResult<CurrencyAndGroupType> => {
    return useQuery<CurrencyAndGroupType>({
      queryKey: [queryKeys.STDPRICE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_CLIENT_WISE_CURRENCY_AND_GROUP.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getStdPriceClientsData,
    getCurrencyAndGroupByClientID,
  };
};
