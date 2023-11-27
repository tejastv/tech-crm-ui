import { useAxios } from "@hooks/useAxios";
import { ContinentType, AddUpdateContinentType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useContinentApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getContinent = (): UseQueryResult<ContinentType[]> => {
    return useQuery<ContinentType[]>({
      queryKey: [queryKeys.CONTINENT_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CONTINENT);
        const data = response.data.data.sort(
          (a: { continent: string }, b: { continent: any }) =>
            a.continent.localeCompare(b.continent)
        );
        let mapedData = selectOptionsMapMaker(data, "id", "continent");
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  const getContinentData = (
    id: string,
    condition?: any
  ): UseQueryResult<ContinentType> => {
    return useQuery<ContinentType>({
      queryKey: [queryKeys.CONTINENT_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CONTINENT.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addContinent = async (
    continentData: AddUpdateContinentType
  ): Promise<ApiResponseType<ContinentType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CONTINENT,
      continentData
    );
    return response.data.data;
  };

  const addContinentMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateContinentType) => addContinent(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CONTINENT_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateContinentData = async (
    updateContinentData: AddUpdateContinentType
  ): Promise<ApiResponseType<ContinentType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CONTINENT.replace(
        "{id}",
        "" + updateContinentData.id
      ),
      updateContinentData
    );
    return response.data.data;
  };

  const updateContinentMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateContinentType) => updateContinentData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CONTINENT_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteContinent = async (id: string): Promise<ContinentType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CONTINENT.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteContinentMutation = () => {
    const mutation = useMutation((id: string) => deleteContinent(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.CONTINENT_DATA] });
      },
    });
    return mutation;
  };

  return {
    getContinent,
    getContinentData,
    addContinentMutation,
    updateContinentMutation,
    deleteContinentMutation,
  };
};
