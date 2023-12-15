import React from "react";
import { Route, Routes } from "react-router-dom";

import { CallType, CallTypeForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CallType />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CallTypeForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CallTypeForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
