import { useAxios } from "@hooks/useAxios";
import { AddLocalSourceType, LocalSourceType } from "@master/index";
import { apiUrls } from "@constants/index";
import { ApiResponseType } from "@shared/index";
// import { ApiResponseType } from "@shared/index";


export const useLocalSourceApiCallHook = () => {
    const { instance } = useAxios();
  
    const getLocalSource = async (): Promise<LocalSourceType[]> => {
      const response = await instance.get(apiUrls.GET_ADD_LOCALSOURCE);
      return response.data.data;
    };
    const addLocalSource = async (
      localsourceData: AddLocalSourceType
    ): Promise<ApiResponseType<LocalSourceType>> => {
      const response = await instance.post(apiUrls.GET_ADD_LOCALSOURCE, localsourceData);
      return response.data.data;
    };
  
    const deleteLocalSource = async (id: string): Promise<LocalSourceType[]> => {
      const response = await instance.delete(
        apiUrls.DELETE_LOCALSOURCE.replace("{id}", id)
      );
      return response.data.data;
    };
  

    return { getLocalSource , addLocalSource , deleteLocalSource};
}