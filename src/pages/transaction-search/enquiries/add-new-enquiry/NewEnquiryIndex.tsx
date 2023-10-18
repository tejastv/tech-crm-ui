import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddEnquiry } from "@transaction-search/index";

const AddEnquiryIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AddEnquiry />}></Route>
    </Routes>
  );
};

export default AddEnquiryIndex;
