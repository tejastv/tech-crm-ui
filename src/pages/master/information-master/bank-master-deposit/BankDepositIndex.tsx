import React from "react";
import { Route, Routes } from "react-router-dom";

import { BankMasterDeposit, BankMasterDepositForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const BankDepositMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<BankMasterDeposit />}></Route>
      <Route
        path={COMMON_ROUTES.ADD}
        element={<BankMasterDepositForm />}
      ></Route>
      <Route
        path={COMMON_ROUTES.EDIT}
        element={<BankMasterDepositForm />}
      ></Route>
    </Routes>
  );
};

export default BankDepositMasterIndex;
