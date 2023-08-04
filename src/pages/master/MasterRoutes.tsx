import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  CLIENT_MASTER_PARENT_ROUTE,
  COMPANY_MASTER_PARENT_ROUTE,
} from "@master/index";

const CompanyMasterIndex = React.lazy(
  () => import("./company-master/CompanyMasterIndex")
);

const ClientMasterIndex = React.lazy(
  () => import("./client-master/ClientMasterIndex")
);

const MasterRoutes = () => {
  return (
    <Routes>
      <Route
        path={COMPANY_MASTER_PARENT_ROUTE}
        element={<CompanyMasterIndex />}
      ></Route>
      <Route
        path={CLIENT_MASTER_PARENT_ROUTE}
        element={
          <React.Suspense>
            <ClientMasterIndex />
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default MasterRoutes;
