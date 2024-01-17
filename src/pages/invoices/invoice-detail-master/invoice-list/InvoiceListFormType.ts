import { Options } from "@shared/index";

export interface InvoiceListFormType {
  startDate: string;
  endDate: string;
  fYear: Options;
  clientId: Options;
  cityId?: Options;
  allClientDatewise?: string;
}
