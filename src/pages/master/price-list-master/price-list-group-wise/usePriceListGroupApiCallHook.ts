import { useAxios } from "@hooks/useAxios";
import {
  CityWiseGroupType,
  CountryType,
  GroupWiseCurrencyType,
  UpdatePriceListForGroup,
} from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import {
  QueryClient,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";
import { useNavigate } from "react-router-dom";

export const usePriceListGroupApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = new QueryClient();
  const navigate = useNavigate();

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

  const updatePriceListForGroup = async (
    updatePriceListForGroup: Array<UpdatePriceListForGroup>
  ): Promise<ApiResponseType<any>> => {
    console.log(updatePriceListForGroup);
    const response = await instance.post(
      apiUrls.UPDATE_PRICE_LIST_FOR_GROUP.replace(
        "{id}",
        "" + updatePriceListForGroup[0].groupId
      ),
      updatePriceListForGroup
    );
    return response.data.data;
  };

  const updatePriceListForGroupMutation = () => {
    const mutation = useMutation(
      (updatedItem: Array<UpdatePriceListForGroup>) =>
        updatePriceListForGroup(updatedItem),
      {
        onSuccess: () => {
          // queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
          // navigate("..");
        },
      }
    );
    return mutation;
  };

  return {
    getCityWiseGroupData,
    getGroupWiseCurrencyData,
    getStdPriceData,
    getPriceListData,
    updatePriceListForGroupMutation,
  };
};
