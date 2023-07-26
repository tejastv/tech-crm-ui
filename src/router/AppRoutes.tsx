import React from "react";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "../guards";

import { NotFound } from "../shared";
import { DASHBOARD, LOGIN, ROOT, UNKNOWN } from "../constants";
import { MainLayout } from "../layout";
import Login from "../pages/auth/Login";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<MainLayout />}>
        {/* Auth Module */}
        <Route path={LOGIN} element={<Login />} />

        <Route
          path={DASHBOARD}
          element={
            <RequireAuth>
              <React.Suspense>
                <Dashboard />
              </React.Suspense>
            </RequireAuth>
          }
        ></Route>

        {/* Fallback route for unknown paths */}
        <Route path={UNKNOWN} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
