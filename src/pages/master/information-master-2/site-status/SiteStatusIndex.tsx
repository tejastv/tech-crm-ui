import React from "react";
import { Route, Routes } from "react-router-dom";

import { SiteStatus, SiteStatusForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const SiteMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<SiteStatus />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<SiteStatusForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<SiteStatusForm />}></Route>
    </Routes>
  );
};

export default SiteMasterIndex;
