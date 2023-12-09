import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceListService } from "@pages/invoices";

const InvoiceListServiceIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceListService />} />
    </Routes>
  );
};

export default InvoiceListServiceIndex;
