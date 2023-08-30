import React from "react";
import { Route, Routes } from "react-router-dom";

import { Country, AddUpdateCountry } from "@master/index";
import { COMMON_ROUTES } from "constants";

const CountryMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Country />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateCountry />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateCountry />}></Route>
    </Routes>
  );
};

export default CountryMasterIndex;
