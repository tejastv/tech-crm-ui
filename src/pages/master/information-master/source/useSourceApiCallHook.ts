import { useAxios } from "@hooks/useAxios";
import { AddUpdateSourceType, SourceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, MapType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useSourceApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSource = (): UseQueryResult<MapType<SourceType>> => {
    return useQuery<MapType<SourceType>>({
      queryKey: [queryKeys.SOURCE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SOURCE);
        let mapedData = selectOptionsMapMaker(
          response.data.data,
          "sourceID",
          "source"
        );
        return mapedData;
        // return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getSourceData = (id: string): UseQueryResult<SourceType> => {
    return useQuery<SourceType>({
      queryKey: [queryKeys.SOURCE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_SOURCE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addSource = async (
    sourceData: AddUpdateSourceType
  ): Promise<ApiResponseType<SourceType>> => {
    const response = await instance.post(apiUrls.GET_ADD_SOURCE, sourceData);
    return response.data.data;
  };

  const addSourceMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateSourceType) => addSource(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.SOURCE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateSourceData = async (
    updateSourceData: AddUpdateSourceType
  ): Promise<ApiResponseType<SourceType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_SOURCE.replace(
        "{id}",
        "" + updateSourceData.id
      ),
      updateSourceData
    );
    return response.data.data;
  };

  const updateSourceMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateSourceType) => updateSourceData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.SOURCE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteSource = async (
    id: string
  ): Promise<ApiResponseType<SourceType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_SOURCE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteSourceMutation = () => {
    const mutation = useMutation((id: string) => deleteSource(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.SOURCE_DATA] });
      },
    });
    return mutation;
  };

  return {
    getSource,
    getSourceData,
    addSourceMutation,
    updateSourceMutation,
    deleteSourceMutation,
  };
};
