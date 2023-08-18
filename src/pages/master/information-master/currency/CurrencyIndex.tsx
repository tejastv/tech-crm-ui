import React from "react";
import { Route, Routes } from "react-router-dom";

import { Currency, AddCurrency} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CurrencyMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Currency />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddCurrency />}></Route>
    </Routes>
  );
};

export default CurrencyMasterIndex;
