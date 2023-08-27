import { useAxios } from "@hooks/useAxios";
import { StateType, AddStateType } from "@master/index";
import { apiUrls } from "@constants/index";

import { ApiResponseType } from "@shared/index";

export const useStateApiCallHook = () => {
  const { instance } = useAxios();

  const getState = async (): Promise<StateType[]> => {
    const response = await instance.get(apiUrls.GET_ADD_STATE);
    return response.data.data;
  };

  const addState = async (
    stateData: AddStateType
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.post(apiUrls.GET_ADD_STATE, stateData);
    return response.data.data;
  };

  const deleteState = async (id: string): Promise<StateType[]> => {
    const response = await instance.delete(
      apiUrls.DELETE_STATE.replace("{id}", id)
    );
    return response.data.data;
  };

  return { getState, addState, deleteState };
};
