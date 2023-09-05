import React from "react";
import { Route, Routes } from "react-router-dom";

import { Continent, AddUpdateContinent } from "@master/index";
import { COMMON_ROUTES } from "constants";

const ContinentMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Continent />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateContinent />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateContinent />}></Route>
    </Routes>
  );
};

export default ContinentMasterIndex;
