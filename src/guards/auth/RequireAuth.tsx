import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";
import { LOGIN } from "../../constants";
import { HeaderLayout } from "../../layout";

export const RequireAuth: React.FC = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return !auth?.user ? (
    <Navigate to={LOGIN} state={{ from: location }} replace />
  ) : (
    <HeaderLayout>
      <Outlet />
    </HeaderLayout>
  );
};
