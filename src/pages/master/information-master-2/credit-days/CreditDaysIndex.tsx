import React from "react";
import { Route, Routes } from "react-router-dom";

import {  CreditDays,AddCreditDays} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CreditDays />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddCreditDays />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
