import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceGenerateAuto } from "@pages/invoices";

const GenerateInvoiceAutoIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceGenerateAuto />} />
    </Routes>
  );
};

export default GenerateInvoiceAutoIndex;
