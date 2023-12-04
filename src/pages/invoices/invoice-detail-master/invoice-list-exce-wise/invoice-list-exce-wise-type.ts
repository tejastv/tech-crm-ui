import { Options } from "@shared/index";

export interface InvoiceListExceWiseType {
  fYearField: Options;
  fromDateField: string;
  toDateField: string;
  cityField: Options;
  clientField: Options;
  allClientDatewiseField: string;
  specificClientDatewiseField: string;

  billAmtField: string;
  stAmtField: string;
  totalField: string;
}
