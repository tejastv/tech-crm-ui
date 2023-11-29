import React from "react";
import { Route, Routes } from "react-router-dom";
import { Enquiries, AddEnquiry } from "@pages/transaction-search";
import { COMMON_ROUTES } from "@constants/index";

const AllEnquiriesIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Enquiries />}></Route>
      <Route path={COMMON_ROUTES.LIST} element={<Enquiries />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddEnquiry />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddEnquiry />}></Route>
    </Routes>
  );
};

export default AllEnquiriesIndex;
