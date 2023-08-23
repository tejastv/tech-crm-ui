import React from "react";
import { Route, Routes } from "react-router-dom";

import { Continent, AddContinent } from "@master/index";
import { COMMON_ROUTES } from "constants";

const ContinentMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Continent />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddContinent />}></Route>
    </Routes>
  );
};

export default ContinentMasterIndex;
