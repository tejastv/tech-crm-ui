// CompanyMaster.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { COMMON_ROUTES } from "@constants/index";
import { ActualBuyer, AddActualBuyer } from "@master/index";

const CompanyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ActualBuyer />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddActualBuyer />}></Route>
    </Routes>
  );
};

export default CompanyMasterIndex;
