import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddEnqPi, SearchEnqPi, EnqPi } from "@pages/profoma";
import { COMMON_ROUTES } from "@constants/index";

const EnqPiIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnqPi />}></Route>
      
      <Route path={COMMON_ROUTES.ADD} element={<AddEnqPi />}></Route>
      <Route path={COMMON_ROUTES.LIST} element={<SearchEnqPi />}></Route>
    </Routes>
  );
};

export default EnqPiIndex;
