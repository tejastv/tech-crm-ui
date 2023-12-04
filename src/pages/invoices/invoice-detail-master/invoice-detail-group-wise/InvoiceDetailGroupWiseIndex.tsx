import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceDetailGroupWise } from "@pages/invoices";

const InvoiceGenerateGstIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceDetailGroupWise />} />
    </Routes>
  );
};

export default InvoiceGenerateGstIndex;
