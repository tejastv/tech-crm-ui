import React from "react";
import { Route, Routes } from "react-router-dom";

import { BankMasterDrawn, BankMasterDrawnForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const BankDrawnMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<BankMasterDrawn />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<BankMasterDrawnForm />}></Route>
      <Route
        path={COMMON_ROUTES.EDIT}
        element={<BankMasterDrawnForm />}
      ></Route>
    </Routes>
  );
};

export default BankDrawnMasterIndex;
