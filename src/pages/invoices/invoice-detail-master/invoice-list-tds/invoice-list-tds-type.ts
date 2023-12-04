import { Options } from "@shared/index";

export interface InvoiceListTdsType {
  fYearField: Options;
  fromDateField: string;
  toDateField: string;
  cityField: Options;
  clientField: Options;
  allClientDatewiseField: string;

  currencyField: string;
  invoicesField: string;
  tdsField: string;
  certiAmtField: string;
}
