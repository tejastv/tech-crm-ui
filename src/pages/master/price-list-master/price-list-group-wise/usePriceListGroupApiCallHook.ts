import { useAxios } from "@hooks/useAxios";
import { CityWiseGroupType, GroupWiseCurrencyType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const usePriceListGroupApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCityWiseGroupData = (
    id: number
  ): UseQueryResult<CityWiseGroupType[]> => {
    return useQuery<CityWiseGroupType[]>({
      queryKey: [queryKeys.CITY_WISE_GROUP_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_CITY_WISE_GROUP.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getGroupWiseCurrencyData = (
    id: number
  ): UseQueryResult<GroupWiseCurrencyType[]> => {
    return useQuery<GroupWiseCurrencyType[]>({
      queryKey: [queryKeys.GROUP_WISE_CURRENCY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_GROUP_WISE_CURRENCY.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getCityWiseGroupData,
    getGroupWiseCurrencyData,
  };
};
