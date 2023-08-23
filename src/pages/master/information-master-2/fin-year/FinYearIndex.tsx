import React from "react";
import { Route, Routes } from "react-router-dom";

import { FinYear, AddFinYear } from "@master/index";
import { COMMON_ROUTES } from "constants";

const FinYearIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<FinYear />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddFinYear />}></Route>
    </Routes>
  );
};

export default FinYearIndex;
