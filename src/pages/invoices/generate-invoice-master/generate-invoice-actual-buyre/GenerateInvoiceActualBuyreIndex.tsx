import React from "react";

import { Route, Routes } from "react-router-dom";

import { GenerateInvoiceActualBuyre } from "@pages/invoices";

const GenerateInvoiceActualBuyreIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GenerateInvoiceActualBuyre />} />
    </Routes>
  );
};

export default GenerateInvoiceActualBuyreIndex;
