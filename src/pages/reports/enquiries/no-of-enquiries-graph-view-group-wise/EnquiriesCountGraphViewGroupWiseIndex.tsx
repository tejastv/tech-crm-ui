import React from "react";

import { Route, Routes } from "react-router-dom";

import { EnquiriesCountGraphViewGroupWise } from "./EnquiriesCountGraphViewGroupWise";

const EnquiriesCountGraphViewGroupWiseIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnquiriesCountGraphViewGroupWise />} />
    </Routes>
  );
};

export default EnquiriesCountGraphViewGroupWiseIndex;
