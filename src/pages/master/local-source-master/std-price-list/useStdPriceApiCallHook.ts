import { useAxios } from "@hooks/useAxios";
import { AddUpdateStdPriceType, StdPriceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";
import { useNavigate } from "react-router-dom";

export const useStdPriceApiCallHook = () => {
  const { instance } = useAxios();  
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getStdPriceData = (id: string): UseQueryResult<StdPriceType[]> => {
    return useQuery<StdPriceType[]>({
      queryKey: [queryKeys.STDPRICE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_STDPRICE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addStdPrice = async (
    stdPriceData: AddUpdateStdPriceType
  ): Promise<ApiResponseType<StdPriceType>> => {
    const response = await instance.post(apiUrls.GET_ADD_STDPRICE_LOCALSOURCE, stdPriceData);
    return response.data.data;
  };

  const addStdPriceMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateStdPriceType) => addStdPrice(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.STD_PRICE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateStdPriceData = async (
    updateStdPriceData: AddUpdateStdPriceType
  ): Promise<ApiResponseType<StdPriceType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_STDPRICE.replace(
        "{id}",
        "" + updateStdPriceData.currencyId
      ),
      updateStdPriceData
    );
    return response.data.data;
  };

  const updateStdPriceMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateStdPriceType) => updateStdPriceData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.STD_PRICE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteStdPrice = async (id: string): Promise<StdPriceType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_STDPRICE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteStdPriceMutation = () => {
    const mutation = useMutation((id: string) => deleteStdPrice(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.STD_PRICE_DATA] });
      },
    });
    return mutation;
  };

  return {
    getStdPriceData,
    addStdPriceMutation,
    updateStdPriceMutation,
    deleteStdPriceMutation
  };
};
