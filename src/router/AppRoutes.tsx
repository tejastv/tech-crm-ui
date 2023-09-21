import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { RequireAuth } from "@guards/index";
import { Login } from "@auth/index";
import { Components, NotFound } from "@shared/index";
import { MainLayout } from "@layout/index";
import {
  COMPONENTS,
  DASHBOARD,
  LOGIN,
  MASTER_ROUTES,
  ROOT,
  TRANSACTION_ROUTES,
  UNKNOWN,
} from "@constants/index";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const MasterRoutes = React.lazy(() => import("../pages/master/MasterRoutes"));
const TransactionRoutes = React.lazy(() => import("../pages/transaction-search/TrasactionRoutes"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<MainLayout />}>
        {/* Auth Module */}
        <Route path={LOGIN} element={<Login />} />
        <Route path={COMPONENTS} element={<Components />} />
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
        </Route>
        {/* Fallback route for unknown paths */}
        <Route path={UNKNOWN} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
