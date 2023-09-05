import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const IndustryIndex = React.lazy(() => import("./industry/IndustryIndex"));
const CallTypeIndex = React.lazy(() => import("./call-type/CallTypeIndex"));
const PurposeMasterIndex = React.lazy(
  () => import("./purpose-master/PurposeMasterIndex")
);
const CreditDaysIndex = React.lazy(
  () => import("./credit-days/CreditDaysIndex")
);
const SiteStatusIndex = React.lazy(
  () => import("./site-status/SiteStatusIndex")
);
const ExecutiveIndex = React.lazy(() => import("./executive/ExecutiveIndex"));
const FinYearIndex = React.lazy(() => import("./fin-year/FinYearIndex"));
const UserIndex = React.lazy(() => import("./user-master/UserIndex"));

const Information_2MasterIndex = () => {
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
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.SITESTATUS_PARENT_ROUTE}
        element={<SiteStatusIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.EXECUTIVE_PARENT_ROUTE}
        element={<ExecutiveIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.FINYEAR_PARENT_ROUTE}
        element={<FinYearIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.USER_PARENT_ROUTE}
        element={<UserIndex />}
      ></Route>
    </Routes>
  );
};

export default Information_2MasterIndex;
