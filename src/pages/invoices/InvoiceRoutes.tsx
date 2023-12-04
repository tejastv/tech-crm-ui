import { INVOICE_ROUTES } from "@constants/route-constants";
import React from "react";
import { Route, Routes } from "react-router-dom";

const GenerateInvoiceMasterIndex = React.lazy(
  () => import("./generate-invoice-master/GenerateInvoiceMasterIndex")
);

const InvoicesRoutes = () => {
  return (
    <Routes>
      <Route
        path={
          INVOICE_ROUTES.GENERATE_INVOICE_ROUTES
            .GENERATE_INVOICE_MASTER_PERENT_ROUTE
        }
        element={
          <React.Suspense>
            <GenerateInvoiceMasterIndex />
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default InvoicesRoutes;
