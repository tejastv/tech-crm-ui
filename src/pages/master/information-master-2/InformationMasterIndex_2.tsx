import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const IndustryIndex = React.lazy(
  () => import("./industry/IndustryIndex")
);
const CallTypeIndex = React.lazy(
  () => import("./call-type/CallTypeIndex")
);
const PurposeMasterIndex = React.lazy(
  () => import("./purpose-master/PurposeIndex")
);
const CreditDaysIndex = React.lazy(
  () => import("./credit-days/CreditDaysIndex")
);
const SiteStatusIndex = React.lazy(
  () => import("./site-status/SiteStatusIndex")
);


const LocationMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.INDUSTRY_PARENT_ROUTE}
        element={<IndustryIndex />}
      ></Route>
       <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.CALLTYPE_PARENT_ROUTE}
        element={<CallTypeIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.PURPOSE_PARENT_ROUTE}
        element={<PurposeMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.CREDITDAYS_PARENT_ROUTE}
        element={<CreditDaysIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.CREDITDAYS_PARENT_ROUTE}
        element={<SiteStatusIndex />}
      ></Route>
    </Routes>
  );
};

export default LocationMasterIndex;