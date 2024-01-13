import { useAxios } from "@hooks/useAxios";
import { FinYearType } from "@master/index";
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

export const useFinYearApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getFinYear = (): UseQueryResult<Array<FinYearType>> => {
    return useQuery<Array<FinYearType>>({
      queryKey: [queryKeys.FIN_YEAR_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_FIN_YEAR);
        const data = response.data.data;
        let mappedData = selectOptionsMapMaker(data, "finYear", "finYear");
        // return data;
        return mappedData;
      },
      staleTime: Infinity,
    });
  };

  const getFormatedFinYear = (): UseQueryResult<Array<FinYearType>> => {
    return useQuery<Array<FinYearType>>({
      queryKey: [queryKeys.FORMATED_FIN_YEAR_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_FIN_YEAR);
        const data = await response.data.data.map((year: FinYearType) => ({
          ...year,
          finYear: year.finYear + "-" + (Number(year.finYear) + 1),
        }));
        console.log(data);

        let mappedData = selectOptionsMapMaker(data, "finYear", "finYear");
        // return data;
        return mappedData;
      },
      staleTime: Infinity,
    });
  };

  const getLastFinYear = (condition: any): UseQueryResult<string> => {
    return useQuery<string>({
      queryKey: [queryKeys.LAST_FIN_YEAR],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_LAST_FIN_YEAR);
        return response.data.data;
      },
      enabled: condition,
      staleTime: 0,
      cacheTime: 0,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getFinYearData = (
    id: string,
    condition: boolean
  ): UseQueryResult<FinYearType> => {
    return useQuery<FinYearType>({
      queryKey: [queryKeys.FIN_YEAR_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_FIN_YEAR.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addFinYear = async (
    finYearData: Partial<FinYearType>
  ): Promise<ApiResponseType<FinYearType>> => {
    const response = await instance.post(apiUrls.GET_ADD_FIN_YEAR, finYearData);
    return response.data.data;
  };

  const addFinYearMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<FinYearType>) => addFinYear(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.FIN_YEAR_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateFinYearData = async (
    updateFinYearData: Partial<FinYearType>
  ): Promise<ApiResponseType<FinYearType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_FIN_YEAR.replace(
        "{id}",
        "" + updateFinYearData.id
      ),
      updateFinYearData
    );
    return response.data.data;
  };

  const updateFinYearMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<FinYearType>) => updateFinYearData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.FIN_YEAR_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteFinYear = async (
    id: string
  ): Promise<ApiResponseType<FinYearType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_FIN_YEAR.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteFinYearMutation = () => {
    const mutation = useMutation((id: string) => deleteFinYear(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.FIN_YEAR_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getFinYear,
    getFormatedFinYear,
    getFinYearData,
    getLastFinYear,
    addFinYearMutation,
    updateFinYearMutation,
    deleteFinYearMutation,
  };
};
