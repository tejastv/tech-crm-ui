import React from "react";

import { Route, Routes } from "react-router-dom";

import { InvoiceSetteld } from "@pages/invoices";

const InvoiceSetteldIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<InvoiceSetteld />} />
    </Routes>
  );
};

export default InvoiceSetteldIndex;
