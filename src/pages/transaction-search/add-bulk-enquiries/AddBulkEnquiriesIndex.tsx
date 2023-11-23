import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddBulkEnquiries} from "@pages/transaction-search";

const AddBulkEnquiriesIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AddBulkEnquiries />}></Route>
    </Routes>
  );
};

export default AddBulkEnquiriesIndex;
