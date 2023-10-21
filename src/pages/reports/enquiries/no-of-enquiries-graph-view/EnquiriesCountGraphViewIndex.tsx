import React from "react";

import { Route, Routes } from "react-router-dom";

import { EnquiriesCountGraphView } from "./EnquiriesCountGraphView";

const EnquiriesCountGraphViewIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnquiriesCountGraphView />} />
    </Routes>
  );
};

export default EnquiriesCountGraphViewIndex;
