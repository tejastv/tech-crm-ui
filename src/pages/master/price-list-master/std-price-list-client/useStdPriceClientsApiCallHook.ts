import { useAxios } from "@hooks/useAxios";
import { StdPriceClientsType, UpdateStandardPrice } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";

export const useStdPriceClientsApiCallHook = () => {
  const { instance } = useAxios();

  const getStdPriceClientsData = (
    id: string
  ): UseQueryResult<StdPriceClientsType[]> => {
    console.log(id);
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

  const updateStandardPrice = async (
    updateStandardPrice: Array<UpdateStandardPrice>
  ): Promise<ApiResponseType<any>> => {
    console.log(updateStandardPrice);
    const response = await instance.post(
      apiUrls.UPDATE_STANDARD_PRICE.replace(
        "{id}",
        "" + updateStandardPrice[0].currency_id
      ),
      updateStandardPrice
    );
    return response.data.data;
  };

  const updateStandardPriceMutation = () => {
    const mutation = useMutation(
      (updatedItem: Array<UpdateStandardPrice>) =>
        updateStandardPrice(updatedItem),
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
    getStdPriceClientsData,
    updateStandardPriceMutation,
  };
};
