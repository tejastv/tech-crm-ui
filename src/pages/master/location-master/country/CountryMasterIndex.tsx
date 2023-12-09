import React from "react";
import { Route, Routes } from "react-router-dom";

import { Country, CountryForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CountryMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Country />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<CountryForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<CountryForm />}></Route>
    </Routes>
  );
};

export default CountryMasterIndex;
