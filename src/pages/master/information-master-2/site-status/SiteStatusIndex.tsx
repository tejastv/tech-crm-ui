import React from "react";
import { Route, Routes } from "react-router-dom";

import {  SiteStatus,AddSiteStatus} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<SiteStatus />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddSiteStatus />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
