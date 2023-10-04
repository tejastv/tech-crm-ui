import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Enquiries,
  AddEnquiry,
  EnquirySearch,
} from "@pages/transaction-search";
// import { State, AddUpdateState } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const AllEnquiriesIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Enquiries />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddEnquiry />}></Route>
      <Route path={COMMON_ROUTES.LIST} element={<EnquirySearch />}></Route>
    </Routes>
  );
};

export default AllEnquiriesIndex;
