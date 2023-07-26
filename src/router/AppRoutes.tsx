import React from "react";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "../guards";
import AuthRoutes from "../pages/auth/Authroutes";

import { NotFound } from "../shared";

const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<AuthRoutes />} />

      {/* Auth Module */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Protected Admin Module */}
      {/* Fallback route for unknown paths */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
