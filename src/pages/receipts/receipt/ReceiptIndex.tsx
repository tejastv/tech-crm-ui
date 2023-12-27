import React from "react";

import { Route, Routes } from "react-router-dom";

import { Receipt } from "@pages/receipts";

const ReceiptIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Receipt />} />
    </Routes>
  );
};

export default ReceiptIndex;
