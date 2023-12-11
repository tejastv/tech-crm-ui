import { useAxios } from "@hooks/useAxios";
import { ExecutiveType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useExecutiveApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getExecutive = (): UseQueryResult<ExecutiveType[]> => {
    return useQuery<ExecutiveType[]>({
      queryKey: [queryKeys.EXECUTIVE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_EXECUTIVE);
        const data = response.data.data.sort(
          (a: { executive: string }, b: { executive: any }) =>
            a.executive.localeCompare(b.executive)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getExecutiveData = (
    id: string,
    condition: boolean
  ): UseQueryResult<ExecutiveType> => {
    return useQuery<ExecutiveType>({
      queryKey: [queryKeys.EXECUTIVE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_EXECUTIVE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addExecutive = async (
    executiveData: Partial<ExecutiveType>
  ): Promise<ApiResponseType<ExecutiveType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_EXECUTIVE,
      executiveData
    );
    return response.data.data;
  };

  const addExecutiveMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<ExecutiveType>) => addExecutive(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.EXECUTIVE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateExecutiveData = async (
    updateExecutiveData: Partial<ExecutiveType>
  ): Promise<ApiResponseType<ExecutiveType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_EXECUTIVE.replace(
        "{id}",
        "" + updateExecutiveData.executiveId
      ),
      updateExecutiveData
    );
    return response.data.data;
  };

  const updateExecutiveMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<ExecutiveType>) => updateExecutiveData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.EXECUTIVE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteExecutive = async (
    id: string
  ): Promise<ApiResponseType<ExecutiveType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_EXECUTIVE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteExecutiveMutation = () => {
    const mutation = useMutation((id: string) => deleteExecutive(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.EXECUTIVE_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getExecutive,
    getExecutiveData,
    addExecutiveMutation,
    updateExecutiveMutation,
    deleteExecutiveMutation,
  };
};
