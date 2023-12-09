import { Options } from "@shared/index";

export interface InvoiceListPerfomaType {
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
