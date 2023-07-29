import React from "react";
import { Route, Routes } from "react-router-dom";

import { CompanyMaster } from "./pages";
import { CLIENT_MASTER_PARENT_ROUTE, COMPANY_MASTER } from "./features";

const ClientMasterRoutes = React.lazy(
  () => import("./pages/client-master/ClientMasterRoutes")
);

const MasterRoutes = () => {
  return (
    <Routes>
      <Route path={COMPANY_MASTER} element={<CompanyMaster />}></Route>
      <Route
        path={CLIENT_MASTER_PARENT_ROUTE}
        element={
          <React.Suspense>
            <ClientMasterRoutes />
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default MasterRoutes;
