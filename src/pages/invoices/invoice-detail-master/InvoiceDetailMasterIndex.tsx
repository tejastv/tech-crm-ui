import { INVOICE_ROUTES } from "@constants/route-constants";
import React from "react";
import { Route, Routes } from "react-router-dom";

const InvoiceListIndex = React.lazy(
  () => import("./invoice-list/InvoiceListIndex")
);

const InvoiceDetailReportIndex = React.lazy(
  () => import("./invoice-detail-report/InvoiceDetailReportIndex")
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
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_DETAIL_REPORT_PARENT_ROUTE
        }
        element={<InvoiceDetailReportIndex />}
      />
    </Routes>
  );
};

export default InvoiceDetailMasterRoutes;
