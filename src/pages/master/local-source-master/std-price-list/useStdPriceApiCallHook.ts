import { useAxios } from "@hooks/useAxios";
<<<<<<< HEAD
import { AddUpdateStdPriceType, StdPriceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";
import { useNavigate } from "react-router-dom";
=======
import { StdPriceType, UpdateLsStandardPrice } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";
>>>>>>> 86ad2ea880f5ddd356a32b18a93bf1eccd378edb

export const useStdPriceApiCallHook = () => {
  const { instance } = useAxios();  
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getStdPriceData = (id: string): UseQueryResult<StdPriceType[]> => {
    return useQuery<StdPriceType[]>({
      queryKey: [queryKeys.LOCALSOURCE_STANDARD_PRCE, id],
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

<<<<<<< HEAD
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
=======
  const updateStandardPrice = async (
    updateStandardPrice: Array<UpdateLsStandardPrice>
  ): Promise<ApiResponseType<any>> => {
    const response = await instance.post(
      apiUrls.UPDATE_LOCALSOURCE_STANDARD_PRICE.replace(
        "{id}",
        "" + updateStandardPrice[0].currency_id
      ),
      updateStandardPrice
>>>>>>> 86ad2ea880f5ddd356a32b18a93bf1eccd378edb
    );
    return response.data.data;
  };

<<<<<<< HEAD
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
=======
  const updateStandardPriceMutation = () => {
    const mutation = useMutation(updateStandardPrice);
>>>>>>> 86ad2ea880f5ddd356a32b18a93bf1eccd378edb
    return mutation;
  };

  return {
    getStdPriceData,
<<<<<<< HEAD
    addStdPriceMutation,
    updateStdPriceMutation,
    deleteStdPriceMutation
=======
    updateStandardPriceMutation,
>>>>>>> 86ad2ea880f5ddd356a32b18a93bf1eccd378edb
  };
};
