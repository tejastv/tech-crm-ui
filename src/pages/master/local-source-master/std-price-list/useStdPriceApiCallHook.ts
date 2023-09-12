import { useAxios } from "@hooks/useAxios";
import { StdPriceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useStdPriceApiCallHook = () => {
  const { instance } = useAxios();

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

  return {
    getStdPriceData,
  };
};
