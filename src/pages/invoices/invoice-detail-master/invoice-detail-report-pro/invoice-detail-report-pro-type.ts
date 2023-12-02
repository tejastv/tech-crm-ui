import { Options } from "@shared/index";

export interface InvoiceDetailReportProType {
  fYearField: Options;
  fromDateField: string;
  toDateField: string;
  cityField: Options;
  clientField: Options;
  allClientDatewiseField: string;
  specificClientDatewiseField: string;
  bobField: string;

  billAmtField: string;
  stAmtField: string;
  totalField: string;
}
