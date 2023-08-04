import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

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
        path={MASTER_ROUTES.COMPANY_ROUTES.COMPANY_PARENT_ROUTE}
        element={<CompanyMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_MASTER_PARENT_ROUTE}
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
