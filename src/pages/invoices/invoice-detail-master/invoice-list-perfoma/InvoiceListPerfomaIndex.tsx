import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceListPerfoma } from "@pages/invoices";

const InvoiceListPerfomaIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceListPerfoma />} />
    </Routes>
  );
};

export default InvoiceListPerfomaIndex;
