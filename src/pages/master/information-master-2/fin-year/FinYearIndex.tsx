import React from "react";
import { Route, Routes } from "react-router-dom";

import { FinYear, AddUpdateFinYear } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const FinYearIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<FinYear />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateFinYear />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateFinYear />}></Route>
    </Routes>
  );
};

export default FinYearIndex;
