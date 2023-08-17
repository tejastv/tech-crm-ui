import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const BankDepositMasterIndex = React.lazy(
  () => import("./bank-master-deposit/BankMasterDepositIndex")
);
const BankDrawnMasterIndex = React.lazy(
  () => import("./bank-master-drawn-on/BankMasterDrawnIndex")
);
const PaymentModeMasterIndex = React.lazy(
  () => import("./payment-mode/PaymentModeMasterIndex")
);
const SupplierMasterIndex = React.lazy(
  () => import("./supplier-master/SupplierMasterIndex")
);
const SourceMasterIndex = React.lazy(
  () => import("./source/SourceMasterIndex")
);
const CurrencyMasterIndex = React.lazy(
  () => import("./currency/CurrencyMasterIndex")
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
