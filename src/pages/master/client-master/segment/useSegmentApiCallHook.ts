import { useAxios } from "@hooks/useAxios";
import { useNavigate } from "react-router-dom";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { SegmentType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, MapType } from "@shared/index";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useSegmentApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSegment = (): UseQueryResult<MapType<SegmentType>> => {
    return useQuery<MapType<SegmentType>>({
      queryKey: [queryKeys.SEGMENT_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SEGMENT);
        const data = response.data.data;
        let mapedData = selectOptionsMapMaker(data, "segmentId", "segmentName");
        return mapedData;
      },
      staleTime: Infinity,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getSegmentData = (id: string, condition: boolean): UseQueryResult<SegmentType> => {
    return useQuery<SegmentType>({
      queryKey: [queryKeys.SEGMENT_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_SEGMENT.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addSegment = async (
    segmentData: Partial<SegmentType>
  ): Promise<ApiResponseType<SegmentType>> => {
    const response = await instance.post(apiUrls.GET_ADD_SEGMENT, segmentData);
    return response.data.data;
  };

  const addSegmentMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<SegmentType>) => addSegment(updatedItem),
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
    updateSegmentData: Partial<SegmentType>
  ): Promise<ApiResponseType<SegmentType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_SEGMENT.replace(
        "{id}",
        "" + updateSegmentData.segmentId
      ),
      updateSegmentData
    );
    return response.data.data;
  };

  const updateSegmentMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<SegmentType>) => updateSegmentData(updatedItem),
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
