import { Options } from "@shared/index";

export interface InvoiceDetailReportType {
  fYearField: Options;
  fromSateField: string;
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
