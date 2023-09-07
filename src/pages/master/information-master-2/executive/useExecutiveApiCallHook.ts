import { useAxios } from "@hooks/useAxios";
import { AddUpdateExecutiveType, ExecutiveType } from "@master/index";
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
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getExecutiveData = (id: string): UseQueryResult<ExecutiveType> => {
    return useQuery<ExecutiveType>({
      queryKey: [queryKeys.EXECUTIVE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_EXECUTIVE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addExecutive = async (
    executiveData: AddUpdateExecutiveType
  ): Promise<ApiResponseType<ExecutiveType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_EXECUTIVE,
      executiveData
    );
    return response.data.data;
  };

  const addExecutiveMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateExecutiveType) => addExecutive(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.EXECUTIVE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateExecutiveData = async (
    updateExecutiveData: AddUpdateExecutiveType
  ): Promise<ApiResponseType<ExecutiveType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_EXECUTIVE.replace(
        "{id}",
        "" + updateExecutiveData.id
      ),
      updateExecutiveData
    );
    return response.data.data;
  };

  const updateExecutiveMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateExecutiveType) => updateExecutiveData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
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
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.EXECUTIVE_DATA] });
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
