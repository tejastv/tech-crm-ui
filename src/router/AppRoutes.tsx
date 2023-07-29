import React from "react";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "../guards";

import { NotFound } from "../shared";

import {
  DASHBOARD,
  LOGIN,
  MASTER_PARENT_ROUTE,
  ROOT,
  UNKNOWN,
} from "../constants";

import { MainLayout } from "../layout";
import { Login } from "../pages/auth";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const MasterRoutes = React.lazy(() => import("../pages/master/MasterRoutes"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<MainLayout />}>
        {/* Auth Module */}
        <Route path={LOGIN} element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route
            path={DASHBOARD}
            element={
              <React.Suspense>
                <Dashboard />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={MASTER_PARENT_ROUTE}
            element={
              <React.Suspense>
                <MasterRoutes />
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
