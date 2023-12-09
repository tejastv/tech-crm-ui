import React from "react";
import { Route, Routes } from "react-router-dom";

import { Industry, IndustryForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Industry />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<IndustryForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<IndustryForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
