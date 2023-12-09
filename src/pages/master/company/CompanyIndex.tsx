// CompanyMaster.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import { CompanyForm, CompanyMaster } from "..";
import { COMMON_ROUTES } from "@constants/index";

const CompanyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CompanyMaster />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CompanyForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CompanyForm />}></Route>
    </Routes>
  );
};

export default CompanyMasterIndex;
