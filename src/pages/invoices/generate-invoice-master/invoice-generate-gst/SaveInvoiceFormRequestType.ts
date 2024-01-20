import { InvoiceMasterDto } from "@invoices/index";

export interface SaveInvoiceFormRequestType {
  invoiceMasterDto: InvoiceMasterDto;
  enquiryId: Array<number>;
}
