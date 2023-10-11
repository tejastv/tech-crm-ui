import { useAxios } from "@hooks/useAxios";
import { AddUpdateEnquiryType, AllEnquiriesType } from "@transaction-search/index";
import { apiUrls, queryKeys } from "@constants/index";

import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useEnquiryApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // const getState = (): UseQueryResult<StateType[]> => {
  //   return useQuery<StateType[]>({
  //     queryKey: [queryKeys.STATE_DATA],
  //     queryFn: async () => {
  //       const response = await instance.get(apiUrls.GET_ADD_STATE);
  //       const data = response.data.data.sort(
  //         (a: { state: string }, b: { state: any }) =>
  //           a.state.localeCompare(b.state)
  //       );
  //       return data;
  //     },
  //     staleTime: Infinity,
  //   });
  // };

  const getEnquiryData = (id: string): UseQueryResult<AllEnquiriesType> => {
    return useQuery<AllEnquiriesType>({
      queryKey: [queryKeys.ENQUIRY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_ENQUIRY.replace("{id}", id)
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
    const response = await instance.post(apiUrls.GET_ADD_ENQUIRY, enquiryData);
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
      updateStateData
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

  const deleteState = async (id: string): Promise<AddUpdateEnquiryType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", id)
    );
    return response.data.data;
  };

  // const deleteContinentMutation = () => {
  //   const mutation = useMutation((id: string) => deleteState(id), {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: [queryKeys.STATE_DATA] });
  //     },
  //   });
  //   return mutation;
  // };

  return {
    getEnquiryData,
    addEnquiryMutation,
    updateEnquiryMutation,
    // deleteContinentMutation,
  };
};
