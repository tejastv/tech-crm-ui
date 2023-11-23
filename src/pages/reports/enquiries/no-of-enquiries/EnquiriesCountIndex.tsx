import React from "react";

import { Route, Routes } from "react-router-dom";

import { EnquiriesCount } from "@pages/reports";

const EnquiriesCountIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnquiriesCount />} />
    </Routes>
  );
};

export default EnquiriesCountIndex;
