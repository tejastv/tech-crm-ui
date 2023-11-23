import { useAxios } from "@hooks/useAxios";
import { CurrencyWisePrice, UpdateStandardPrice } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";

export const useStdPriceClientsApiCallHook = () => {
  const { instance } = useAxios();

  const getStdPriceClientsData = (
    id: string
  ): UseQueryResult<CurrencyWisePrice[]> => {
    return useQuery<CurrencyWisePrice[]>({
      queryKey: [queryKeys.PRICE_LIST_STANDARD_PRICE, id],
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
    const mutation = useMutation(updateStandardPrice);
    return mutation;
  };

  return {
    getStdPriceClientsData,
    updateStandardPriceMutation,
  };
};
