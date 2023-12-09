import React from "react";
import { Route, Routes } from "react-router-dom";

import { Supplier, SupplierForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const SupplierMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Supplier />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<SupplierForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<SupplierForm />}></Route>
    </Routes>
  );
};

export default SupplierMasterIndex;
