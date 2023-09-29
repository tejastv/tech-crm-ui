import React from "react";
import { Route, Routes } from "react-router-dom";
import { EnquirySearch} from "@pages/transaction-search";
import { COMMON_ROUTES } from "@constants/index";

const EnquirySearchIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnquirySearch />}></Route>
    </Routes>
  );
};

export default EnquirySearchIndex;

