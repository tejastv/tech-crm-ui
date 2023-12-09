import React from "react";
import { Route, Routes } from "react-router-dom";

import { CallType, CalltypeForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CallType />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CalltypeForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CalltypeForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
