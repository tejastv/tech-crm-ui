import { useAxios } from "@hooks/useAxios";
import { LocalSourceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, MapType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useLocalSourceApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getLocalSource = () => {
    // const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
    // return response.data.data;
    return useQuery<MapType<LocalSourceType>>({
      queryKey: [queryKeys.LOCALSOURCE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_LOCALSOURCE);
        const data = response.data.data.sort(
          (a: { localSource: string }, b: { localSource: any }) =>
            a.localSource.localeCompare(b.localSource)
        );
        let mapedData = selectOptionsMapMaker(
          data,
          "localSourceId",
          "localSource"
        );
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  const getLocalSourceData = (id: string, condition: any) => {
    return useQuery<LocalSourceType>({
      queryKey: [queryKeys.LOCALSOURCE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_LOCALSOURCE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addLocalSource = async (
    localsourceData: Partial<LocalSourceType>
  ): Promise<ApiResponseType<LocalSourceType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_LOCALSOURCE,
      localsourceData
    );
    return response.data.data;
  };

  const addLocalSourceMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<LocalSourceType>) => addLocalSource(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.LOCALSOURCE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateLocalSourceData = async (
    updateLocalSourceData: Partial<LocalSourceType>
  ): Promise<ApiResponseType<LocalSourceType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_LOCALSOURCE.replace(
        "{id}",
        "" + updateLocalSourceData.id
      ),
      updateLocalSourceData
    );
    return response.data.data;
  };

  const updateLocalSourceMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<LocalSourceType>) =>
        updateLocalSourceData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.LOCALSOURCE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteLocalSource = async (id: string): Promise<LocalSourceType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_LOCALSOURCE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteLocalSourceMutation = () => {
    const mutation = useMutation((id: string) => deleteLocalSource(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.LOCALSOURCE_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getLocalSource,
    getLocalSourceData,
    addLocalSourceMutation,
    updateLocalSourceMutation,
    deleteLocalSourceMutation,
  };
};
