import React from "react";
import { Route, Routes } from "react-router-dom";

import { PurchaseBills,AddUpdatePurchase } from "@transaction-search/index";
import { COMMON_ROUTES } from "@constants/route-constants";

const AddEnquiryIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PurchaseBills  />}></Route>
      
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdatePurchase />}></Route>
    </Routes>
  );
};

export default AddEnquiryIndex;
