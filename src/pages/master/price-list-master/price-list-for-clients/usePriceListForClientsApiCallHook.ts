import { useAxios } from "@hooks/useAxios";
import {
  ClientWisePriceType,
  CurrencyAndGroupType,
  StdPriceClientsType,
} from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const usePriceListForClientsApiCallHook = () => {
  const { instance } = useAxios();

  const getStdPriceClientsData = (
    id: string
  ): UseQueryResult<StdPriceClientsType[]> => {
    return useQuery<StdPriceClientsType[]>({
      queryKey: [queryKeys.PRICE_LIST_FOR_CLIENT, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_STDPRICE_CLIENTS.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: false, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus,
    });
  };

  const getCurrencyWiseStandardPrice = (
    id: string
  ): UseQueryResult<StdPriceClientsType[]> => {
    return useQuery<StdPriceClientsType[]>({
      queryKey: [queryKeys.PRICE_LIST_FOR_CLIENT, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_STDPRICE_CLIENTS.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: false, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus,
    });
  };

  const getClientWisePrice = (
    id: string,
    condition: any
  ): UseQueryResult<ClientWisePriceType[]> => {
    return useQuery<ClientWisePriceType[]>({
      queryKey: [queryKeys.CLIENT_WISE_PRICE, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.CLIENT_WISE_PRICE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  // const getPriceBasedOnParamater = (
  //   id: string,
  //   callForm?: string
  // ): UseQueryResult<ClientWisePriceType[]> => {
  //   let queryKey: Array<any> = [];
  //   let apiUrl = "";
  //   if (callForm == "client") {
  //     queryKey = [queryKeys.CLIENT_WISE_PRICE, id];
  //     apiUrl = apiUrls.CLIENT_WISE_PRICE.replace("{id}", id);
  //   } else if (callForm == "stdPrice") {
  //     queryKey = [queryKeys.PRICE_LIST_FOR_CLIENT, id];
  //     apiUrl = apiUrls.GET_UPDATE_DELETE_STDPRICE_CLIENTS.replace("{id}", id);
  //   } else if (callForm == "fromGroup") {
  //     queryKey = [queryKeys.GROUP_WISE_PRICE, id];
  //     apiUrl = apiUrls.GET_GROUP_WISE_PRICE.replace("{id}", id);
  //   }
  //   return useQuery<ClientWisePriceType[]>({
  //     queryKey: queryKey,
  //     queryFn: async () => {
  //       const response = await instance.get(apiUrl);
  //       return response.data.data;
  //     },
  //     enabled: false, // Query is initially enabled
  //     refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
  //   });
  // };

  const getCurrencyAndGroupByClientID = (
    id: number,
    condition: any
  ): UseQueryResult<CurrencyAndGroupType> => {
    return useQuery<CurrencyAndGroupType>({
      queryKey: [queryKeys.PRICE_LIST_FOR_CLIENT, id],
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
    getClientWisePrice,
    getCurrencyWiseStandardPrice,
    // getPriceBasedOnParamater,
  };
};
