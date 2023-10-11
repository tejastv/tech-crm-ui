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

import { AddUpdateEnquiryType } from "@transaction-search/index";
import { useNavigate } from "react-router-dom";

export const useAllEnquiriesApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const callFormConfig = {
    headers: {
      "callFrom": "transaction",
    },
  };

  const getEnquiries = (): UseQueryResult<AllEnquiriesType[]> => {
    return useQuery<AllEnquiriesType[]>({
      queryKey: [queryKeys.ALL_ENQUIRIES_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ALL_ENQUIRY,callFormConfig);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };


  const getEnquiryData = (id: string): UseQueryResult<AllEnquiriesType> => {
    return useQuery<AllEnquiriesType>({
      queryKey: [queryKeys.ENQUIRY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_ALL_ENQUIRY.replace("{id}", id),callFormConfig
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addEnquiry = async (
    enquiryData: AddUpdateEnquiryType
  ): Promise<ApiResponseType<AllEnquiriesType>> => {
    const response = await instance.post(apiUrls.GET_ADD_ALL_ENQUIRY, enquiryData,callFormConfig);
    return response.data.data;
  };

  const addEnquiryMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateEnquiryType) => addEnquiry(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.ENQUIRY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateEnquiry = async (
    updateStateData: AddUpdateEnquiryType
  ): Promise<ApiResponseType<AllEnquiriesType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", "" + updateStateData.id),
      updateStateData,callFormConfig
    );
    return response.data.data;
  };

  const updateEnquiryMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateEnquiryType) => updateEnquiry(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.STATE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

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
    getEnquiryData,
    addEnquiryMutation,
    updateEnquiryMutation,
    getEnquiries,
    deleteEnquiryMutation,
    // deleteContinentMutation,
  };
};
