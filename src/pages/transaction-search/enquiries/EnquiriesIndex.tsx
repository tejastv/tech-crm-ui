import React from "react";
import { Route, Routes } from "react-router-dom";
import { Enquiries, EnquiryForm } from "@pages/transaction-search";
import { COMMON_ROUTES } from "@constants/index";

const EnquiriesIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Enquiries />}></Route>
      <Route path={COMMON_ROUTES.LIST} element={<Enquiries />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<EnquiryForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<EnquiryForm />}></Route>
    </Routes>
  );
};

export default EnquiriesIndex;
