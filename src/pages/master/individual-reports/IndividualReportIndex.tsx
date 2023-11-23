import React from "react";
import { Route, Routes } from "react-router-dom";

import { IndividualReport } from "@master/index";

const IndividualReportMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<IndividualReport />}></Route>
    </Routes>
  );
};

export default IndividualReportMasterIndex;
