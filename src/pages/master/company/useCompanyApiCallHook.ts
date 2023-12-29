import { useAxios } from "@hooks/useAxios";
import { CompanyType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useCompanyApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCompany = (queryObject: any, condition?: boolean) => {
    return useQuery<{
      data: { [key: string | number]: CompanyType };
      count: number;
    }>({
      queryKey: [queryKeys.COMPANY_MASTER_DATA, queryObject],
      queryFn: async () => {
        let params = {
          limit: queryObject.searchString ? 500 : queryObject.limit,
          offset: queryObject.offset,
          searchString: "",
        } as any;
        if (queryObject.searchString) {
          params.searchString = queryObject.searchString;
        } else {
          delete params.searchString;
        }
        const response = await instance.get(apiUrls.GET_ADD_COMPANY_MASTER, {
          params: params,
        });
        const data = response.data.data.records.sort(
          (a: { companyName: string }, b: { companyName: any }) =>
            a.companyName.localeCompare(b.companyName)
        );
        let mappedData = selectOptionsMapMaker(
          data,
          "companyId",
          "companyName"
        );
        // return data;
        return { data: mappedData, count: response.data.data.count };
      },
      enabled: condition,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getCompanyData = (id: string, condition: any) => {
    return useQuery<CompanyType>({
      queryKey: [queryKeys.COMPANY_MASTER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_COMPANY_MASTER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCompany = async (
    companyData: Partial<CompanyType>
  ): Promise<ApiResponseType<CompanyType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_COMPANY_MASTER,
      companyData
    );
    return response.data.data;
  };

  const addCompanyMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<CompanyType>) => addCompany(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.COMPANY_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCompanyData = async (
    updateCompanyData: Partial<CompanyType>
  ): Promise<ApiResponseType<CompanyType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_COMPANY_MASTER.replace(
        "{id}",
        "" + updateCompanyData.companyId
      ),
      updateCompanyData
    );
    return response.data.data;
  };

  const updateCompanyMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<CompanyType>) => updateCompanyData(updatedItem),
      {
        onSuccess: async () => {
          await await queryClient.invalidateQueries({
            queryKey: [queryKeys.COMPANY_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCompany = async (id: string): Promise<CompanyType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_COMPANY_MASTER.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCompanyMutation = () => {
    const mutation = useMutation((id: string) => deleteCompany(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.COMPANY_MASTER_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getCompany,
    getCompanyData,
    addCompanyMutation,
    updateCompanyMutation,
    deleteCompanyMutation,
  };
};
