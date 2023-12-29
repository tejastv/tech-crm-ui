import { useEffect, useState } from "react";

import { ReceiptType } from "..";

export const useCalculateReceiptAmounts = (receipts: ReceiptType[]) => {
  const [receiptSummary, setReceiptSummary] = useState({
    amountRecd: 0,
    tdsDed: 0,
    expense: 0,
    otherCharges: 0,
    total: 0,
    due: 0,
  });

  const amountSummary = {
    amountRecd: 0,
    tdsDed: 0,
    expense: 0,
    otherCharges: 0,
    total: 0,
    due: 0,
  };

  useEffect(() => {
    receipts?.forEach((receipt) => {
      amountSummary.amountRecd += +receipt.amount;
      amountSummary.tdsDed += +receipt.tds;
      amountSummary.expense += +receipt.expense;
      amountSummary.otherCharges += +receipt.otherCharges;
      amountSummary.total += +receipt.netAmount;
    });
    setReceiptSummary(amountSummary);
  }, [receipts]);

  return receiptSummary;
};
