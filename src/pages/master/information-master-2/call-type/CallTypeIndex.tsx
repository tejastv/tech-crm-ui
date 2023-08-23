import React from "react";
import { Route, Routes } from "react-router-dom";

import {CallType, AddCallType} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CallType />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddCallType />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
