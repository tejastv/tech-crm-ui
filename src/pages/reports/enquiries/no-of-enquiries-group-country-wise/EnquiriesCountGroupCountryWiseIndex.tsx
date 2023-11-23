import React from "react";

import { Route, Routes } from "react-router-dom";

import { EnquiriesCountGroupCountryWise } from "./EnquiriesCountGroupCountryWise";

const EnquiriesCountGroupCountryWiseIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnquiriesCountGroupCountryWise />} />
    </Routes>
  );
};

export default EnquiriesCountGroupCountryWiseIndex;
