import { useAxios } from "@hooks/useAxios";
import { apiUrls } from "@constants/index";
import { InvoiceListFormType } from "@invoices/index";

export const useInvoiceListApiCallHook = () => {
  const { instance } = useAxios();

  const headers = {
    callFrom: "transaction",
  };

  const getInvoiceList = async (
    queryParams: InvoiceListFormType
  ): Promise<any | undefined> => {
    if (Object.values(queryParams).length == 0) return;
    let params = {};
    params = {
      ...queryParams,
      headers: headers,
    };
    console.log(params);

    let url = apiUrls.GET_INVOICE_LIST;
    const response = await instance.get(url, params);
    const data = await response.data.data;
    return data;
  };

  return {
    getInvoiceList,
  };
};
