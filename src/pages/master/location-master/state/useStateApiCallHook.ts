import { useAxios } from "@hooks/useAxios";
import { StateType, AddStateType } from "@master/index";
import { locationMasterApiUrls } from "@constants/index";

import { ApiResponseType } from "@shared/index";

export const useStateApiCallHook = () => {
  const { instance } = useAxios();

  const getState = async (): Promise<StateType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_STATE);
    return response.data.data;
  };

  const addState = async (
    stateData: AddStateType
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_STATE,
      stateData
    );
    return response.data.data;
  };

  const deleteState = async (id: string): Promise<StateType[]> => {
    const response = await instance.delete(
      locationMasterApiUrls.DELETE_STATE.replace("{id}", id)
    );
    return response.data.data;
  };

  return { getState, addState, deleteState };
};
