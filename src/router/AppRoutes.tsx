import { Routes, Route } from "react-router-dom";
import NotFound from "../components/error/404";
import AuthRoutes from "../pages/auth/Authroutes";
import RequireAuth from "../guards/auth/RequireAuth";
import React from "react";

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
      <Route path="/*" element={<NotFound />}/>
    </Routes>
  );
};

export default AppRoutes;
