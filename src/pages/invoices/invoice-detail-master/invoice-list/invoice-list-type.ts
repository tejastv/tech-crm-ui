import { Options } from "@shared/index";

export interface InvoiceListType {
  fYearField: Options;
  fromDateField: string;
  toDateField: string;
  cityField: Options;
  clientField: Options;
  allClientDatewiseField: string;
  specificClientDatewiseField: string;
  bobField: string;
  ubField: string;
  boiField: string;
  sourthIndBankField: string;
  iobField: string;
  billAmtField: string;
  stAmtField: string;
  totalField: string;
}
