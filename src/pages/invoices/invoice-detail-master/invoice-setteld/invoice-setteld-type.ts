import { Options } from "@shared/index";

export interface InvoiceListSetteldType {
  fyearField: Options;
  fromdateField: string;
  todateeField: string;
  cityField: Options;
  ClientField: Options;
  allClientDatewiseField: string;

  CurrencyField: Options;

  tdsField: string;
  totalAmountField: string;
  recivedField: string;
  outstandingField: string;
}
