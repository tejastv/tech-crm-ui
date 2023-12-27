export interface ReceiptType {
  recDate: string;
  paymentModeId: string;
  chqNo: string;
  chqDate: string;
  chqAmount: string;
  bankId: string;
  depositBankId: string;
  amount: string;
  tds: string;
  expense: string;
  otherCharges: string;
  netAmount: string;
  remarks: string;
  advTransId: string;
  transactionId?: number;
}
