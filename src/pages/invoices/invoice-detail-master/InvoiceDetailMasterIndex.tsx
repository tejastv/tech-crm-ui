import { INVOICE_ROUTES } from "@constants/route-constants";
import React from "react";
import { Route, Routes } from "react-router-dom";

const InvoiceDetailGroupWiseIndex = React.lazy(
  () => import("./invoice-detail-group-wise/InvoiceDetailGroupWiseIndex")
);

const InvoiceDetailReportIndex = React.lazy(
  () => import("./invoice-detail-report/InvoiceDetailReportIndex")
);

const InvoiceDetailReportProIndex = React.lazy(
  () => import("./invoice-detail-report-pro/InvoiceDetailReportProIndex")
);

const InvoiceListIndex = React.lazy(
  () => import("./invoice-list/InvoiceListIndex")
);

const InvoiceListExceWiseIndex = React.lazy(
  () => import("./invoice-list-exce-wise/InvoiceListExceWiseIndex")
);

const InvoiceListPerfomaIndex = React.lazy(
  () => import("./invoice-list-perfoma/InvoiceListPerfomaIndex")
);

const InvoiceListTdxIndex = React.lazy(
  () => import("./invoice-list-tds/InvoiceListTdsIndex")
);

const InvoiceListSetteldIndex = React.lazy(
  () => import("./invoice-setteld/InvoiceSetteldIndex")
);

const InvoiceListServiceIndex = React.lazy(
  () => import("./invoice-list-service-tax/InvoiceListServiceIndex")
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
      />
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_LIST_PERFOMA_PARENT_ROUTE
        }
        element={<InvoiceListPerfomaIndex />}
      />
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_LIST_SERVICE_TAX_PARENT_ROUTE
        }
        element={<InvoiceListServiceIndex />}
      />
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_LIST_EXCE_WISE_PARENT_ROUTE
        }
        element={<InvoiceListExceWiseIndex />}
      />
      <Route
        path={
          INVOICE_ROUTES.INVOICE_DETAIL_MASTER_ROUTES
            .INVOICE_SETTLED_PARENT_ROUTE
        }
        element={<InvoiceListSetteldIndex />}
      />
    </Routes>
  );
};

export default InvoiceDetailMasterRoutes;
