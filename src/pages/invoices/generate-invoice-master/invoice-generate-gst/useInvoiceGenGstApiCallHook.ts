import { useAxios } from "@hooks/useAxios";
// import { IndustryType } from "@master/index";
import { apiUrls } from "@constants/index";
import { EnquiriesType } from "@transaction-search/index";
// import { ApiResponseType } from "@shared/index";
// import {
//   UseQueryResult,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { InvoiceGenGstTableType } from "@invoices/index";
// import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const useInvoiceGenGstApiCallHook = () => {
  const { instance } = useAxios();
  // const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const getEnquires = async (
    queryParams: any
  ): Promise<EnquiriesType[] | undefined> => {
    if (Object.values(queryParams).length == 0) return;
    let params = {};
    params = {
      params: {
        ...queryParams,
      },
      headers: {
        callFrom: "transaction",
      },
    };
    const response = await instance.get(apiUrls.GET_ADD_ALL_ENQUIRY, params);
    const data = await response.data.data.records;
    return data;
  };

  return {
    getEnquires,
  };
};
