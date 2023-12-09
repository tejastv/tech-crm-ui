import { useAxios } from "@hooks/useAxios";
import { StdPriceType, UpdateLsStandardPriceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";

export const useStdPriceApiCallHook = () => {
  const { instance } = useAxios();

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

  const updateStandardPrice = async (
    updateStandardPrice: Array<UpdateLsStandardPriceType>
  ): Promise<ApiResponseType<any>> => {
    const response = await instance.post(
      apiUrls.UPDATE_LOCALSOURCE_STANDARD_PRICE.replace(
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
    getStdPriceData,
    updateStandardPriceMutation,
  };
};
