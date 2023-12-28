import { useAxios } from "@hooks/useAxios";
import { IndustryType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { InvoiceGenGstFormType } from "@invoices/index";

export const useInvoiceGenGstApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getInvoices = (
    params: InvoiceGenGstFormType
  ): UseQueryResult<Array<IndustryType>> => {
    return useQuery<Array<IndustryType>>({
      queryKey: [queryKeys.INDUSTRY_DATA, params.clientId],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_INVOICES);
        const data = response.data.data;
        return data;
      },
      staleTime: Infinity,
    });
  };

  // const getIndustryData = (
  //   id: string,
  //   condition: boolean
  // ): UseQueryResult<IndustryType> => {
  //   return useQuery<IndustryType>({
  //     queryKey: [queryKeys.INDUSTRY_DATA, id],
  //     queryFn: async () => {
  //       const response = await instance.get(
  //         apiUrls.GET_UPDATE_DELETE_INDUSTRY.replace("{id}", id)
  //       );
  //       return response.data.data;
  //     },
  //     enabled: condition, // Query is initially enabled
  //     refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
  //   });
  // };

  // const addIndustry = async (
  //   industryData: Partial<IndustryType>
  // ): Promise<ApiResponseType<IndustryType>> => {
  //   const response = await instance.post(
  //     apiUrls.GET_ADD_INDUSTRY,
  //     industryData
  //   );
  //   return response.data.data;
  // };

  // const addIndustryMutation = () => {
  //   const mutation = useMutation(
  //     (updatedItem: Partial<IndustryType>) => addIndustry(updatedItem),
  //     {
  //       onSuccess: async () => {
  //         await queryClient.invalidateQueries({
  //           queryKey: [queryKeys.INDUSTRY_DATA],
  //         });
  //         navigate("..");
  //       },
  //     }
  //   );
  //   return mutation;
  // };

  // const updateIndustryData = async (
  //   updateIndustryData: Partial<IndustryType>
  // ): Promise<ApiResponseType<IndustryType>> => {
  //   const response = await instance.put(
  //     apiUrls.GET_UPDATE_DELETE_INDUSTRY.replace(
  //       "{id}",
  //       "" + updateIndustryData.industryId
  //     ),
  //     updateIndustryData
  //   );
  //   return response.data.data;
  // };

  // const updateIndustryMutation = () => {
  //   const mutation = useMutation(
  //     (updatedItem: Partial<IndustryType>) => updateIndustryData(updatedItem),
  //     {
  //       onSuccess: async () => {
  //         await queryClient.invalidateQueries({
  //           queryKey: [queryKeys.INDUSTRY_DATA],
  //         });
  //         navigate("..");
  //       },
  //     }
  //   );
  //   return mutation;
  // };

  // const deleteIndustry = async (
  //   id: string
  // ): Promise<ApiResponseType<IndustryType>> => {
  //   const response = await instance.delete(
  //     apiUrls.GET_UPDATE_DELETE_INDUSTRY.replace("{id}", id)
  //   );
  //   return response.data.data;
  // };

  // const deleteIndustryMutation = () => {
  //   const mutation = useMutation((id: string) => deleteIndustry(id), {
  //     onSuccess: async () => {
  //       await queryClient.invalidateQueries({
  //         queryKey: [queryKeys.INDUSTRY_DATA],
  //       });
  //     },
  //   });
  //   return mutation;
  // };

  return {
    getInvoices,
    // getIndustry,
    // getIndustryData,
    // addIndustryMutation,
    // updateIndustryMutation,
    // deleteIndustryMutation,
  };
};
