import { useAxios } from "@hooks/useAxios";
import { EnquiriesType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, MapType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useEnquiriesApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnquiries = (
    queryObject: any
  ): UseQueryResult<{
    data: MapType<EnquiriesType>;
    count: number;
  }> => {
    return useQuery<{ data: MapType<EnquiriesType>; count: number }>({
      queryKey: [queryKeys.ENQUIRY_DATA],
      queryFn: async () => {
        const baseUrl = apiUrls.GET_ADD_ALL_ENQUIRY_SEARCH;
        const queryParams = [];
        console.log(queryObject);
        let queryParam: {
          [key: string]: string | undefined;
        } = {};
        for (const key in queryObject) {
          if (!queryParam[key]) {
            console.log(key);
            queryParams.push(`${key}=${queryObject[key]}`);
          }
        }
        console.log(queryParams);

        const fullUrl =
          queryParams.length > 0
            ? `${baseUrl}?${queryParams.join("&")}`
            : baseUrl;
        const response = await instance.get(fullUrl, callFormConfig);
        console.log(response);

        let mapedData = selectOptionsMapMaker(
          response.data.data.records,
          "enqId",
          "partyName"
        );
        return { data: mapedData, count: response.data.data.count };
        // return response.data.data;
      },
      staleTime: Infinity,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getEnquiryData = (
    id: string,
    condition?: any
  ): UseQueryResult<EnquiriesType> => {
    return useQuery<EnquiriesType>({
      queryKey: [queryKeys.ENQUIRY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_ALL_ENQUIRY.replace("{id}", id),
          callFormConfig
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const deleteEnquiry = async (
    id: string
  ): Promise<ApiResponseType<EnquiriesType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_ALL_ENQUIRY.replace("{id}", id),
      callFormConfig
    );
    return response.data.data;
  };

  const deleteEnquiryMutation = () => {
    const mutation = useMutation((id: string) => deleteEnquiry(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.ENQUIRY_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getEnquiryData,
    getEnquiries,
    deleteEnquiryMutation,
    // getEnquiryBasedOnSearchParam,
  };
};
