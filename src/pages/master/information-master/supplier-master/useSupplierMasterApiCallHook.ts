import { useAxios } from "@hooks/useAxios";
import { SupplierMasterFormType, SupplierMasterType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSupplierMasterApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSupplierMaster = (): UseQueryResult<SupplierMasterType[]> => {
    return useQuery<SupplierMasterType[]>({
      queryKey: [queryKeys.SUPPLIER_MASTER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SUPPLIER_MASTER);
        const data = response.data.data.sort(
          (a: { supplierName: string }, b: { supplierName: any }) =>
            a.supplierName.localeCompare(b.supplierName)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getSupplierMasterData = (
    id: string,
    condition: boolean
  ): UseQueryResult<SupplierMasterType> => {
    return useQuery<SupplierMasterType>({
      queryKey: [queryKeys.SUPPLIER_MASTER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_SUPPLIER_MASTER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addSupplierMaster = async (
    supplierMasterData: Partial<SupplierMasterType>
  ): Promise<ApiResponseType<SupplierMasterType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_SUPPLIER_MASTER,
      supplierMasterData
    );
    return response.data.data;
  };

  const addSupplierMasterMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<SupplierMasterType>) => addSupplierMaster(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.SUPPLIER_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateSupplierMasterData = async (
    updateSupplierMasterData: Partial<SupplierMasterType>
  ): Promise<ApiResponseType<SupplierMasterType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_SUPPLIER_MASTER.replace(
        "{id}",
        "" + updateSupplierMasterData.supplierId
      ),
      updateSupplierMasterData
    );
    return response.data.data;
  };

  const updateSupplierMasterMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<SupplierMasterType>) =>
        updateSupplierMasterData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.SUPPLIER_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteSupplierMaster = async (
    id: string
  ): Promise<ApiResponseType<SupplierMasterType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_SUPPLIER_MASTER.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteSupplierMasterMutation = () => {
    const mutation = useMutation((id: string) => deleteSupplierMaster(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.SUPPLIER_MASTER_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getSupplierMaster,
    getSupplierMasterData,
    addSupplierMasterMutation,
    updateSupplierMasterMutation,
    deleteSupplierMasterMutation,
  };
};
