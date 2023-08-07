import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@hooks/index";
import { LOGIN } from "@constants/index";
import { HeaderLayout } from "@layout/index";

export const RequireAuth: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  return !user ? (
    <Navigate to={LOGIN} state={{ from: location }} replace />
  ) : (
    <HeaderLayout>
      <Outlet />
    </HeaderLayout>
  );
};
