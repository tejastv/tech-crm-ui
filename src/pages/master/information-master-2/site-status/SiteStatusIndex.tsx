import React from "react";
import { Route, Routes } from "react-router-dom";

import { SiteStatus, AddUpdateSiteStatus } from "@master/index";
import { COMMON_ROUTES } from "constants";

const SiteMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<SiteStatus />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateSiteStatus />}></Route>
      <Route
        path={COMMON_ROUTES.EDIT}
        element={<AddUpdateSiteStatus />}
      ></Route>
    </Routes>
  );
};

export default SiteMasterIndex;
