import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceListTDS } from "@pages/invoices";

const InvoiceListTdxIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceListTDS />} />
    </Routes>
  );
};

export default InvoiceListTdxIndex;
