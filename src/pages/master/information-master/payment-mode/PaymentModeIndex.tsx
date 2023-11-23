import React from "react";
import { Route, Routes } from "react-router-dom";

import { PaymentMode, AddPaymentMode} from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const PaymentModeMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PaymentMode />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddPaymentMode />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddPaymentMode />}></Route>
    </Routes>
  );
};

export default PaymentModeMasterIndex;
