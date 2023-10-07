import { useAxios } from "@hooks/useAxios";
import { StateType, AddUpdateStateType } from "@master/index";
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
          (a: { state: string }, b: { state: any }) =>
            a.state.localeCompare(b.state)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getStateData = (id: string): UseQueryResult<StateType> => {
    return useQuery<StateType>({
      queryKey: [queryKeys.STATE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addState = async (
    stateData: AddUpdateStateType
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.post(apiUrls.GET_ADD_STATE, stateData);
    return response.data.data;
  };

  const addStateMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateStateType) => addState(updatedItem),
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
    updateStateData: AddUpdateStateType
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_STATE.replace("{id}", "" + updateStateData.id),
      updateStateData
    );
    return response.data.data;
  };

  const updateStateMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateStateType) => updateState(updatedItem),
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
