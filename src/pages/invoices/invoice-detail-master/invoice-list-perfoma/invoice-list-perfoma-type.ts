import { Options } from "@shared/index";

export interface InvoiceListPerfomaType {
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
