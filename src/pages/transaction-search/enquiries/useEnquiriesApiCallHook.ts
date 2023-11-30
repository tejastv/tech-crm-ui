import { useAxios } from "@hooks/useAxios";
import { EnquiriesType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

export const useEnquiriesApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();

  const [queryParam, setQueryParam] = useState<{
    [key: string]: string | undefined;
  }>({});

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnquiries = (): UseQueryResult<EnquiriesType[]> => {
    return useQuery<EnquiriesType[]>({
      queryKey: [queryKeys.ENQUIRY_DATA, queryParam],
      queryFn: async () => {
        const baseUrl = apiUrls.GET_ADD_ALL_ENQUIRY_SEARCH;
        const queryParams = [];
        for (const key in queryParam) {
          if (queryParam[key] !== undefined) {
            queryParams.push(`${key}=${queryParam[key]!}`);
          }
        }
        const fullUrl =
          queryParams.length > 0
            ? `${baseUrl}?${queryParams.join("&")}`
            : baseUrl;
        const response = await instance.get(fullUrl, callFormConfig);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getEnquiryBasedOnSearchParam = (params: any) => {
    setQueryParam(params);
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
    getEnquiryBasedOnSearchParam,
  };
};
