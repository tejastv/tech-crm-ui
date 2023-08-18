import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const CompanyMasterIndex = React.lazy(
  () => import("./company-master/CompanyMasterIndex")
);
const ClientMasterIndex = React.lazy(
  () => import("./client-master/ClientMasterIndex")
);

const LocationMasterIndex = React.lazy(
  () => import("./location-master/LocationMasterIndex")
);
const LocalSourceMasterIndex = React.lazy(
  () => import("./local-source-master/LocalSourceMasterIndex")
);
const InformationMasterIndex = React.lazy(
  () => import("./information-master/InformationMasterIndex")
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
       <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.LOCATION_MASTER_PARENT_ROUTE}
        element={
          <React.Suspense>
            <LocationMasterIndex />
          </React.Suspense>
        }
      ></Route>
       <Route
        path={MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.LOCALSOURCEM_MASTER_PARENT_ROUTE}
        element={
          <React.Suspense>
            <LocalSourceMasterIndex />
          </React.Suspense>
        }
      ></Route>
       <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_PARENT_ROUTE}
        element={
          <React.Suspense>
            <InformationMasterIndex />
          </React.Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default MasterRoutes;
