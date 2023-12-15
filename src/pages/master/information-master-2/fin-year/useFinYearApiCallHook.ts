import { useAxios } from "@hooks/useAxios";
import {
  FinYearFormType,
  FinYearType,
  LastFinYearType,
  // LastFinYearType,
} from "@master/index";
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

  const getFinYear = (): UseQueryResult<FinYearType[]> => {
    return useQuery<FinYearType[]>({
      queryKey: [queryKeys.FIN_YEAR_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_FIN_YEAR);
        const data = response.data.data;
        let mapedData = selectOptionsMapMaker(data, "finYear", "finYear");
        // return data;
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  // const getLastFinYear = (): UseQueryResult<LastFinYearType> => {
  //   return useQuery<LastFinYearType>({
  //     queryKey: [queryKeys.LAST_FIN_YEAR],
  //     queryFn: async () => {
  //       const response = await instance.get(apiUrls.GET_LAST_FIN_YEAR);
  //       return response.data;
  //     },
  //     staleTime: Infinity,
  //   });
  // };

  const getLastFinYear = async (): Promise<LastFinYearType> => {
    const response = await instance.get(apiUrls.GET_LAST_FIN_YEAR);
    return response.data;
  };

  const getFinYearData = (id: string): UseQueryResult<FinYearType> => {
    return useQuery<FinYearType>({
      queryKey: [queryKeys.FIN_YEAR_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_FIN_YEAR.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addFinYear = async (
    finYearData: FinYearFormType
  ): Promise<ApiResponseType<FinYearType>> => {
    const response = await instance.post(apiUrls.GET_ADD_FIN_YEAR, finYearData);
    return response.data.data;
  };

  const addFinYearMutation = () => {
    const mutation = useMutation(
      (updatedItem: FinYearFormType) => addFinYear(updatedItem),
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
    updateFinYearData: FinYearFormType
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
      (updatedItem: FinYearFormType) => updateFinYearData(updatedItem),
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
    getFinYearData,
    getLastFinYear,
    addFinYearMutation,
    updateFinYearMutation,
    deleteFinYearMutation,
  };
};
