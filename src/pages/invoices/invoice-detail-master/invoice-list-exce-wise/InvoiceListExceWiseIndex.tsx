import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceListExceWise } from "@pages/invoices";

const InvoiceListExceIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceListExceWise />} />
    </Routes>
  );
};

export default InvoiceListExceIndex;
