import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "@constants/index";

const BankDepositMasterIndex = React.lazy(
  () => import("./bank-master-deposit/BankDepositIndex")
);
const BankDrawnMasterIndex = React.lazy(
  () => import("./bank-master-drawn-on/BankDrawnIndex")
);
const PaymentModeMasterIndex = React.lazy(
  () => import("./payment-mode/PaymentModeIndex")
);
const SupplierMasterIndex = React.lazy(
  () => import("./supplier-master/SupplierIndex")
);
const SourceMasterIndex = React.lazy(
  () => import("./source/SourceIndex")
);
const CurrencyMasterIndex = React.lazy(
  () => import("./currency/CurrencyIndex")
);
const InformationMasterIndex = () => {
  return (
    <Routes>
      
      <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.BANKDEPOSIT_PARENT_ROUTE}
        element={<BankDepositMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.BANKDRAWN_PARENT_ROUTE}
        element={<BankDrawnMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.PAYMENTMODE_PARENT_ROUTE}
        element={<PaymentModeMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.CURRENCY_PARENT_ROUTE}
        element={<CurrencyMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.SUPPLIER_PARENT_ROUTE}
        element={<SupplierMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.INFORMATION_MASTER_ROUTES.SOURCE_PARENT_ROUTE}
        element={<SourceMasterIndex />}
      ></Route>
      
    </Routes>
  );
};

export default InformationMasterIndex;
