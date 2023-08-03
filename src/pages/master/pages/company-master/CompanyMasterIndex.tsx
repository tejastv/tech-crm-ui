// CompanyMaster.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddCompany, CompanyMaster } from "..";
import { ADD_COMPANY } from "../..";

const CompanyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CompanyMaster />}></Route>
      <Route path={ADD_COMPANY} element={<AddCompany />}></Route>
    </Routes>
  );
};

export default CompanyMasterIndex;
