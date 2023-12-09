import React from "react";
import { Route, Routes } from "react-router-dom";

import { City, CityForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<City />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CityForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CityForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
