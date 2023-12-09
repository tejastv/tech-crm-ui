import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceDetailReport } from "@pages/invoices";

const InvoiceDetailReporttIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceDetailReport />} />
    </Routes>
  );
};

export default InvoiceDetailReporttIndex;
