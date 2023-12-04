import { INVOICE_ROUTES } from "@constants/route-constants";
import React from "react";
import { Route, Routes } from "react-router-dom";

const InvoiceListIndex = React.lazy(
  () => import("./invoice-list/InvoiceListIndex")
);

const InvoiceDetailReportIndex = React.lazy(
  () => import("./invoice-detail-report/InvoiceDetailReportIndex")
);

const InvoiceDetailReportProIndex = React.lazy(
  () => import("./invoice-detail-report-pro/InvoiceDetailReportProIndex")
);
const InvoiceDetailGroupWiseIndex = React.lazy(
  () => import("./invoice-detail-group-wise/InvoiceDetailGroupWiseIndex")
);

const InvoiceListTdxIndex = React.lazy(
  () => import("./invoice-list-tds/InvoiceListTdsIndex")
);

const InvoiceListPerfomaIndex = React.lazy(
  () => import("./invoice-list-perfoma/InvoiceListPerfomaIndex")
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
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_DETAIL_REPORT_PRO_PARENT_ROUTE
        }
        element={<InvoiceDetailReportProIndex />}
      />
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_DETAIL_REPORT_GROUP_WISE
        }
        element={<InvoiceDetailGroupWiseIndex />}
      />
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_LIST_TDS_PARENT_ROUTE
        }
        element={<InvoiceListTdxIndex />}
      />{" "}
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_LIST_PERFOMA_PARENT_ROUTE
        }
        element={<InvoiceListPerfomaIndex />}
      />
    </Routes>
  );
};

export default InvoiceDetailMasterRoutes;
