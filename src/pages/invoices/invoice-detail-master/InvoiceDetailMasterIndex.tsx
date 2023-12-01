import { INVOICE_ROUTES } from "@constants/route-constants";
import React from "react";
import { Route, Routes } from "react-router-dom";

const InvoiceListIndex = React.lazy(
  () => import("./invoice-list/InvoiceListIndex")
);

const InvoiceDetailMasterRoutes = () => {
  return (
    <Routes>
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES.INVOICE_LIST_PARENT_ROUTE
        }
        element={<InvoiceListIndex />}
      />
    </Routes>
  );
};

export default InvoiceDetailMasterRoutes;
