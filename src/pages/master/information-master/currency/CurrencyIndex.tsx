import React from "react";
import { Route, Routes } from "react-router-dom";

import { Currency, CurrencyForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CurrencyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Currency />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CurrencyForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CurrencyForm />}></Route>
    </Routes>
  );
};

export default CurrencyMasterIndex;
