import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceList } from "@pages/invoices";

const InvoiceListIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceList />} />
    </Routes>
  );
};

export default InvoiceListIndex;
