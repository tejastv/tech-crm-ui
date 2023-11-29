import { Options } from "@shared/index";

export interface InvoiceListTdsType {
  fyearField: Options;
  fromdateField: string;
  todateeField: string;
  cityField: Options;
  ClientField: Options;
  allClientDatewiseField: string;

  CurrencyField: string;
  invoicesField: string;
  tdsField: string;
  certiAmtField: string;
}
