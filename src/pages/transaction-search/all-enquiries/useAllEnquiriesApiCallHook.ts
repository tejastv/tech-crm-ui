import { useAxios } from "@hooks/useAxios";
import { AllEnquiriesType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

export const useAllEnquiriesApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const [queryParam, setQueryParam] = useState<{ [key: string]: string | undefined }>({});
  
  const callFormConfig = {
    headers: {
      "callFrom": "transaction",
    },
  };

  // const getEnquiries = (): UseQueryResult<AllEnquiriesType[]> => {
  //   return useQuery<AllEnquiriesType[]>({
  //     queryKey: [queryKeys.ALL_ENQUIRIES_DATA],
  //     queryFn: async () => {
  //       const response = await instance.get(apiUrls.GET_ADD_ALL_ENQUIRY,callFormConfig);
  //       return response.data.data;
  //     },
  //     staleTime: Infinity,
  //   });
  // };

  const getEnquiries = (): UseQueryResult<AllEnquiriesType[]> => {
    return useQuery<AllEnquiriesType[]>({
      queryKey: [queryKeys.ALL_ENQUIRIES_DATA, queryParam],
      queryFn: async () => {
        const baseUrl = apiUrls.GET_ADD_ALL_ENQUIRY_SEARCH;
        const queryParams = [];
        
        for (const key in queryParam) {
          if (queryParam[key] !== undefined) {
            queryParams.push(`${key}=${encodeURIComponent(queryParam[key]!)}`);
          }
        }
        const fullUrl = `${baseUrl}?${queryParams.join('&')}`
        const response = await instance.get(fullUrl, callFormConfig);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getSearchParam = (params: any) => {
    setQueryParam(params);

  }

  const deleteEnquiry = async (id: string): Promise<ApiResponseType<AllEnquiriesType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_ALL_ENQUIRY.replace("{id}", id),callFormConfig );
    return response.data.data;
  };

  const deleteEnquiryMutation = () => {
    const mutation = useMutation((id: string) => deleteEnquiry(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.ALL_ENQUIRIES_DATA] });
      },
    });
    return mutation;
  };

  return {
    getEnquiries,
    deleteEnquiryMutation,
    getSearchParam,
  };
};
