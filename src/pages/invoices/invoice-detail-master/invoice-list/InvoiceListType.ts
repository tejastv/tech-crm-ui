export interface InvoiceListType {
  finYear: string;
  invoiceNo: string;
  invoiceDate: string;
  chequeAmount: null;
  bankName: null;
  billAmount: number;
  discountAmount: number;
  subTotal: number;
  stPer: number;
  stAmount: number;
  total: number;
  currencyId: number;
  serviceTax: number;
  eduCess: null;
  staxAmount: null;
  edCessAmount: number;
  serviceTaxPer: number;
  edCessPer: number;
  lockedSTaxSubmitted: string;
  oldFormat: string;
  krishiCessPer: null;
  krishiCessAmt: number;
  cgstPer: number;
  sgstPer: number;
  igstPer: number;
  cgstAmount: number;
  sgstAmount: number;
  igstAmount: number;
  actualBuyerId: number;
  crDays: number;
  locked: null;
  clientName: null;
  clientRefNo: null;
  currencyName: null;
  partyName: string;
  creditPeriod: null;
  outStandingAmount: null;
  receivedAmount: null;
  expneses: null;
  tds: null;
  client: {
    clientId: number;
    clientName: string;
  };
  invoiceLink: string;
  receipts: null;
}
