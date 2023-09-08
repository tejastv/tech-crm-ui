import React from "react";
import { Route, Routes } from "react-router-dom";

import { CallType, AddUpdateCalltype } from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CallType />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateCalltype />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateCalltype />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
