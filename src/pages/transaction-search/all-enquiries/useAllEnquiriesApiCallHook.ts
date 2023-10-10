import { useAxios } from "@hooks/useAxios";
import { AllEnquiriesType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const useAllEnquiriesApiCallHook = () => {
  const { instance } = useAxios();
    const queryClient = useQueryClient();

  const headersForTransactionMaster = {
    'X-Transaction-Master': 'true',
  };

  const getEnquiries = (): UseQueryResult<AllEnquiriesType[]> => {
    return useQuery<AllEnquiriesType[]>({
      queryKey: [queryKeys.ALL_ENQUIRIES_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ALL_ENQUIRY, { headers: headersForTransactionMaster });
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };


    const deleteEnquiry = async (id: string): Promise<ApiResponseType<AllEnquiriesType>> => {
      const response = await instance.delete(
        apiUrls.GET_UPDATE_DELETE_ALL_ENQUIRY.replace("{id}", id), { headers: headersForTransactionMaster }
      );
      return response.data.data;
    };

    const deleteEnquiryMutation = () => {
      const mutation = useMutation((id: string) => deleteEnquiry(id), {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [queryKeys.ALL_ENQUIRIES_DATA] });
        },
      });
      return mutation;
    };

  return {
    getEnquiries,
    deleteEnquiryMutation,
  };
};
