import React, { PropsWithChildren } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { HeaderLayout } from "../../layout";
import { LOGIN } from "../../constants";

export const RequireAuth: React.FC<PropsWithChildren> = (props) => {
  const { auth } = useAuth();
  const location = useLocation();
  return !auth?.user ? (
    <Navigate to={LOGIN} state={{ from: location }} replace />
  ) : (
    <HeaderLayout>{props.children}</HeaderLayout>
  );
};
