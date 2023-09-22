import { useAxios } from "@hooks/useAxios";
import {
  CityWiseGroupType,
  CountryType,
  GroupWiseCurrencyType,
} from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const usePriceListGroupApiCallHook = () => {
  const { instance } = useAxios();

  const getCityWiseGroupData = (
    id: number,
    condition?: any
  ): UseQueryResult<CityWiseGroupType[]> => {
    return useQuery<CityWiseGroupType[]>({
      queryKey: [queryKeys.CITY_WISE_GROUP_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_CITY_WISE_GROUP.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getGroupWiseCurrencyData = (
    id: number,
    condition?: any
  ): UseQueryResult<GroupWiseCurrencyType> => {
    return useQuery<GroupWiseCurrencyType>({
      queryKey: [queryKeys.GROUP_WISE_CURRENCY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_GROUP_WISE_CURRENCY.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getStdPriceData = (
    id: number,
    condition?: any
  ): UseQueryResult<CountryType[]> => {
    return useQuery<CountryType[]>({
      queryKey: [queryKeys.GROUP_WISE_CURRENCY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_PRICE_LIST_STD_DATA.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getPriceListData = (
    id: number,
    condition?: any
  ): UseQueryResult<CountryType[]> => {
    return useQuery<CountryType[]>({
      queryKey: [queryKeys.PRICE_LIST_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_PRICE_LIST_DATA.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getCityWiseGroupData,
    getGroupWiseCurrencyData,
    getStdPriceData,
    getPriceListData,
  };
};
