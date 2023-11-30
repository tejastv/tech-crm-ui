import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceGenerateGst } from "@pages/invoices";

const InvoiceGenerateGstIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceGenerateGst />} />
    </Routes>
  );
};

export default InvoiceGenerateGstIndex;
