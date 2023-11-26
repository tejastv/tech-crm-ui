import { useAxios } from "@hooks/useAxios";
import { StateType, StateFormType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";

import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useStateApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getState = (): UseQueryResult<StateType[]> => {
    return useQuery<StateType[]>({
      queryKey: [queryKeys.STATE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_STATE);
        const data = response.data.data.sort(
          (a: { stateName: string }, b: { stateName: any }) =>
            a.stateName.localeCompare(b.stateName)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getStateData = (
    id: string,
    conditions: any
  ): UseQueryResult<StateType> => {
    return useQuery<StateType>({
      queryKey: [queryKeys.STATE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: conditions, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addState = async (
    stateData: Partial<StateFormType>
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.post(apiUrls.GET_ADD_STATE, stateData);
    return response.data.data;
  };

  const addStateMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<StateFormType>) => addState(updatedItem),
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

  const updateState = async (
    updateStateData: Partial<StateFormType>
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", "" + updateStateData.id),
      updateStateData
    );
    return response.data.data;
  };

  const updateStateMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<StateFormType>) => updateState(updatedItem),
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

  const deleteState = async (id: string): Promise<StateType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteContinentMutation = () => {
    const mutation = useMutation((id: string) => deleteState(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.STATE_DATA] });
      },
    });
    return mutation;
  };

  return {
    getState,
    getStateData,
    addStateMutation,
    updateStateMutation,
    deleteContinentMutation,
  };
};
