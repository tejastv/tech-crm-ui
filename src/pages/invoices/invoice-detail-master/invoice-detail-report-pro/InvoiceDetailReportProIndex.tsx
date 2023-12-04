import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceDetailReportPro } from "@pages/invoices";

const InvoiceDetailReportProIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceDetailReportPro />} />
    </Routes>
  );
};

export default InvoiceDetailReportProIndex;
