import { useAxios } from "@hooks/useAxios";
import { AddUpdateCurrencyType, CurrencyType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCurrencyApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCurrency = () => {
    return useQuery<CurrencyType[]>({
      queryKey: [queryKeys.CURRENCY_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CURRENCY);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getCurrencyData = (id: string) => {
    console.log(id);
    // if (!id) queryClient.removeQueries({ queryKey: [queryKeys.CITY_DATA, id] });
    return useQuery<CurrencyType>({
      queryKey: [queryKeys.CURRENCY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CURRENCY.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCurrency = async (
    currencyData: AddUpdateCurrencyType
  ): Promise<ApiResponseType<CurrencyType>> => {
    const response = await instance.post(apiUrls.GET_ADD_CURRENCY, currencyData);
    return response.data.data;
  };

  const addCurrencyMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCurrencyType) => addCurrency(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.CURRENCY_DATA] });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCurrencyData = async (
    updateCurrencyData: AddUpdateCurrencyType
  ): Promise<ApiResponseType<CurrencyType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CURRENCY.replace("{id}", "" + updateCurrencyData.id),
      updateCurrencyData
    );
    return response.data.data;
  };

  const updateCurrencyMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCurrencyType) => updateCurrencyData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.CURRENCY_DATA] });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCity = async (id: string): Promise<ApiResponseType<CurrencyType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CURRENCY.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCurrencyMutation = () => {
    const mutation = useMutation((id: string) => deleteCity(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.CURRENCY_DATA] });
      },
    });
    return mutation;
  };

  return {
    getCurrency,
    getCurrencyData,
    addCurrencyMutation,
    updateCurrencyMutation,
    deleteCurrencyMutation,
  };
};
