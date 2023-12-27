import React from "react";

import { Route, Routes } from "react-router-dom";

import { ReceiptAdvance } from "@pages/receipts";

const ReceiptAdvanceIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ReceiptAdvance />} />
    </Routes>
  );
};

export default ReceiptAdvanceIndex;
