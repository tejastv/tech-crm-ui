import React from "react";
import { Route, Routes } from "react-router-dom";

import { PaymentMode, PaymentModeForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const PaymentModeMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PaymentMode />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<PaymentModeForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<PaymentModeForm />}></Route>
    </Routes>
  );
};

export default PaymentModeMasterIndex;
