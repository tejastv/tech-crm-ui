import { Options } from "@shared/index";

export interface InvoiceListExceWiseType {
  fyearField: Options;
  fromdateField: string;
  todateeField: string;
  cityField: Options;
  ClientField: Options;
  allClientDatewiseField: string;
  specificClientDatewiseField: string;

  billAmtField: string;
  stAmtField: string;
  totalField: string;
}
