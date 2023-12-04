import { Options } from "@shared/index";

export interface InvoiceListSetteldType {
  fYearField: Options;
  fromDateField: string;
  toDateField: string;
  cityField: Options;
  clientField: Options;
  allClientDatewiseField: string;

  currencyField: Options;

  tdsField: string;
  totalAmountField: string;
  recivedField: string;
  outStandingField: string;
}
