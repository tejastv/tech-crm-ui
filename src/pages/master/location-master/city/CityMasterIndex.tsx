import React from "react";
import { Route, Routes } from "react-router-dom";

import { City, AddCity } from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<City />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddCity />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
