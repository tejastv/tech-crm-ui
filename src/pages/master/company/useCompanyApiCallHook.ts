import { useAxios } from "@hooks/useAxios";
import { CompanyType, AddUpdateCompanyType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


export const useCompanyApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCompany = () => {
    return useQuery<CompanyType[]>({
      queryKey: [queryKeys.COMPANY_MASTER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_COMPANY_MASTER);
        const data = response.data.data.sort((a: { companyName: string; }, b: { companyName: any; }) => a.companyName.localeCompare(b.companyName));
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getCompanyData = (id: string) => {
    return useQuery<CompanyType>({
      queryKey: [queryKeys.COMPANY_MASTER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_COMPANY_MASTER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCompany = async (
    companyData: AddUpdateCompanyType
  ): Promise<ApiResponseType<CompanyType>> => {
    debugger;
    const response = await instance.post(apiUrls.GET_ADD_COMPANY_MASTER, companyData);
    return response.data.data;
  };

  const addCompanyMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCompanyType) => addCompany(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.COMPANY_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCompanyData = async (
    updateCompanyData: AddUpdateCompanyType
  ): Promise<ApiResponseType<CompanyType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_COMPANY_MASTER.replace(
        "{id}",
        "" + updateCompanyData.id
      ),
      updateCompanyData
    );
    return response.data.data;
  };

  const updateCompanyMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCompanyType) => updateCompanyData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
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
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.COMPANY_MASTER_DATA] });
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