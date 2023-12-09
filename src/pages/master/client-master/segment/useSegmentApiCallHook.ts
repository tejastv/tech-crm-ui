import { useAxios } from "@hooks/useAxios";
import { useNavigate } from "react-router-dom";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { SegmentFormType, SegmentType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";

export const useSegmentApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSegment = (): UseQueryResult<SegmentType[]> => {
    return useQuery<SegmentType[]>({
      queryKey: [queryKeys.SEGMENT_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SEGMENT);
        const data = response.data.data.sort(
          (a: { segmentName: string }, b: { segmentName: any }) =>
            a.segmentName.localeCompare(b.segmentName)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getSegmentData = (id: string): UseQueryResult<SegmentType> => {
    return useQuery<SegmentType>({
      queryKey: [queryKeys.SEGMENT_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_SEGMENT.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addSegment = async (
    segmentData: SegmentFormType
  ): Promise<ApiResponseType<SegmentType>> => {
    const response = await instance.post(apiUrls.GET_ADD_SEGMENT, segmentData);
    return response.data.data;
  };

  const addSegmentMutation = () => {
    const mutation = useMutation(
      (updatedItem: SegmentFormType) => addSegment(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.SEGMENT_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateSegmentData = async (
    updateSegmentData: SegmentFormType
  ): Promise<ApiResponseType<SegmentType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_SEGMENT.replace(
        "{id}",
        "" + updateSegmentData.id
      ),
      updateSegmentData
    );
    return response.data.data;
  };

  const updateSegmentMutation = () => {
    const mutation = useMutation(
      (updatedItem: SegmentFormType) => updateSegmentData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.SEGMENT_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteSegment = async (
    id: string
  ): Promise<ApiResponseType<SegmentType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_SEGMENT.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteSegmentMutation = () => {
    const mutation = useMutation((id: string) => deleteSegment(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.SEGMENT_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getSegment,
    getSegmentData,
    addSegmentMutation,
    updateSegmentMutation,
    deleteSegmentMutation,
  };
};
