// CompanyMaster.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddCompany, CompanyMaster } from "..";
import { COMMON_ROUTES } from "constants";

const CompanyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CompanyMaster />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddCompany />}></Route>
    </Routes>
  );
};

export default CompanyMasterIndex;
