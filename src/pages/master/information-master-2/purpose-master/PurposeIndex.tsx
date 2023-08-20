import React from "react";
import { Route, Routes } from "react-router-dom";

import {  Purpose,AddPurpose} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Purpose />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddPurpose />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
