import React from "react";
import { Route, Routes } from "react-router-dom";

import { FinYear, FinYearForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const FinYearIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<FinYear />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<FinYearForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<FinYearForm />}></Route>
    </Routes>
  );
};

export default FinYearIndex;
