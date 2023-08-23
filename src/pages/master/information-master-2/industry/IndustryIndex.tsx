import React from "react";
import { Route, Routes } from "react-router-dom";

import { Industry, AddIndustry} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Industry />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddIndustry />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
