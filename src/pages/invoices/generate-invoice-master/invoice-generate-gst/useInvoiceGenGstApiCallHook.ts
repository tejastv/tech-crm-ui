import { useAxios } from "@hooks/useAxios";
// import { IndustryType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
// import { ApiResponseType } from "@shared/index";
// import {
//   UseQueryResult,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { InvoiceGenGstFormType } from "@invoices/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const useInvoiceGenGstApiCallHook = () => {
  const { instance } = useAxios();
  // const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const getEnquires = async (queryParams: any): Promise<any | undefined> => {
    console.log(queryParams);

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
    const response = await instance.get(apiUrls.GET_INVOICES, params);
    const data = await response.data.data;
    let mapedData = selectOptionsMaker(data, "partyId", "partyName");
    return mapedData;
  };

  return {
    getEnquires,
  };
};
