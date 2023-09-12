// CompanyMaster.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddUpdateCompany, CompanyMaster } from "..";
import { COMMON_ROUTES } from "@constants/index";

const CompanyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CompanyMaster />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateCompany />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateCompany />}></Route>
    </Routes>
  );
};

export default CompanyMasterIndex;
