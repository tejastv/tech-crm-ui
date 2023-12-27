import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { RequireAuth } from "@guards/index";
import { Login } from "@auth/index";
import { NotFound } from "@shared/index";
import { MainLayout } from "@layout/index";
import {
  DASHBOARD,
  INVOICE_ROUTES,
  LOGIN,
  MASTER_ROUTES,
  PROFORMA_ROUTES,
  RECEIPTS_ROUTES,
  REPORT_ROUTES,
  ROOT,
  TRANSACTION_ROUTES,
  UNKNOWN,
} from "@constants/index";
import ReportsRoutes from "@pages/reports/ReportsRoutes";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const MasterRoutes = React.lazy(() => import("../pages/master/MasterRoutes"));
const TransactionRoutes = React.lazy(
  () => import("../pages/transaction-search/TransactionRoutes")
);
const ProformaRoutes = React.lazy(() => import("@proforma/ProformaRoutes"));
const InvoicesRoutes = React.lazy(
  () => import("../pages/invoices/InvoiceRoutes")
);
const ReceiptsRoutes = React.lazy(
  () => import("../pages/receipts/ReceiptRoutes")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<MainLayout />}>
        {/* Auth Module */}
        <Route path={LOGIN} element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route index element={<Navigate to={DASHBOARD} />} />
          <Route
            path={DASHBOARD}
            element={
              <React.Suspense>
                <Dashboard />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={MASTER_ROUTES.MASTER_PARENT_ROUTE}
            element={
              <React.Suspense>
                <MasterRoutes />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={TRANSACTION_ROUTES.TRANSACTION_PARENT_ROUTE}
            element={
              <React.Suspense>
                <TransactionRoutes />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={PROFORMA_ROUTES.PROFORMA_PARENT_ROUTE}
            element={
              <React.Suspense>
                <ProformaRoutes />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={REPORT_ROUTES.REPORT_PARENT_ROUTE}
            element={
              <React.Suspense>
                <ReportsRoutes />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={INVOICE_ROUTES.INVOICE_PARENT_ROUTE}
            element={
              <React.Suspense>
                <InvoicesRoutes />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={RECEIPTS_ROUTES.RECEIPTS_PARENT_ROUTE}
            element={
              <React.Suspense>
                <ReceiptsRoutes />
              </React.Suspense>
            }
          ></Route>
        </Route>
        {/* Fallback route for unknown paths */}
        <Route path={UNKNOWN} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
