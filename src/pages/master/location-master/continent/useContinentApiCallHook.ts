import { useAxios } from "@hooks/useAxios";
import { ContinentType, AddContinentType } from "@master/index";
import { apiUrls } from "@constants/index";
import { ApiResponseType } from "@shared/index";

export const useContinentApiCallHook = () => {
  const { instance } = useAxios();

  const getContinent = async (): Promise<ContinentType[]> => {
    const response = await instance.get(apiUrls.GET_ADD_CONTINENT);
    return response.data.data;
  };

  const addContinent = async (
    continentData: AddContinentType
  ): Promise<ApiResponseType<ContinentType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CONTINENT,
      continentData
    );
    return response.data.data;
  };

  const deleteContinent = async (id: string): Promise<ContinentType[]> => {
    const response = await instance.delete(
      apiUrls.DELETE_CONTINENT.replace("{id}", id)
    );
    return response.data.data;
  };

  return { getContinent, addContinent, deleteContinent };
};
