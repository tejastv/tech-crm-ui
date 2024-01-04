import { Options } from "@shared/index";

export interface InvoiceGenGstFormType {
  startDate: string;
  endDate: string;
  clientId: Options;
  fYear: Options;
  actualBuyerId: Options;
}
