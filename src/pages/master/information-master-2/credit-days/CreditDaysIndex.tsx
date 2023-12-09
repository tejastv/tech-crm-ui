import React from "react";
import { Route, Routes } from "react-router-dom";

import { CreditDays, CreditDaysForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CreditDays />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CreditDaysForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CreditDaysForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
