// CompanyMaster.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { COMMON_ROUTES } from "@constants/index";
import { ActualBuyer, AddUpdateActualBuyer } from "@master/index";

const CompanyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ActualBuyer />}></Route>
      <Route
        path={COMMON_ROUTES.ADD}
        element={<AddUpdateActualBuyer />}
      ></Route>
      <Route
        path={COMMON_ROUTES.EDIT}
        element={<AddUpdateActualBuyer />}
      ></Route>
    </Routes>
  );
};

export default CompanyMasterIndex;
