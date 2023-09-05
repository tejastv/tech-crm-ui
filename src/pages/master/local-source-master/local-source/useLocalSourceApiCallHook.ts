import { useAxios } from "@hooks/useAxios";
import { AddUpdateLocalSourceType, LocalSourceType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { ApiResponseType } from "@shared/index";


export const useLocalSourceApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

    const getLocalSource = () => {
      // const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
      // return response.data.data;
      return useQuery<LocalSourceType[]>({
        queryKey: [queryKeys.LOCALSOURCE_DATA],
        queryFn: async () => {
          const response = await instance.get(apiUrls.GET_ADD_LOCALSOURCE);
          return response.data.data;
        },
        staleTime: Infinity,
      });
    };
    const getLocalSourceData = (id: string) => {
      return useQuery<LocalSourceType>({
    
        queryKey: [queryKeys.LOCALSOURCE_DATA, id],
        queryFn: async () => {
          const response = await instance.get(
            apiUrls.GET_UPDATE_DELETE_LOCALSOURCE.replace("{id}", id)
          );
          debugger
          return response.data.data;
          
        },
        enabled: true, // Query is initially enabled
        refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
      });
    };

    const addLocalSource = async (
      localsourceData: AddUpdateLocalSourceType
    ): Promise<ApiResponseType<LocalSourceType>> => {
      const response = await instance.post(apiUrls.GET_ADD_LOCALSOURCE, localsourceData);
      return response.data.data;
    };

    const addLocalSourceMutation = () => {
      const mutation = useMutation(
        (updatedItem: AddUpdateLocalSourceType) => addLocalSource(updatedItem),
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [queryKeys.LOCALSOURCE_DATA],
            });
            navigate("..");
          },
        }
      );
      return mutation;
    };

    const updateLocalSourceData = async (
      updateLocalSourceData: AddUpdateLocalSourceType
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
        (updatedItem: AddUpdateLocalSourceType) => updateLocalSourceData(updatedItem),
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [queryKeys.COUNTRY_DATA],
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
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.LOCALSOURCE_DATA] });
        },
      });
      return mutation;
    };

    return { 
      getLocalSource,
      getLocalSourceData,
      addLocalSourceMutation,
      updateLocalSourceMutation,
      deleteLocalSourceMutation};
}