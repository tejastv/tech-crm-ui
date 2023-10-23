import React from "react";
import { Route, Routes } from "react-router-dom";
import { GeneratePi, AddGeneratePi, SearchGeneratePi } from "@pages/proforma";
import { COMMON_ROUTES } from "@constants/index";

const GeneratePiIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GeneratePi />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddGeneratePi />}></Route>
      <Route path={COMMON_ROUTES.LIST} element={<SearchGeneratePi />}></Route>
    </Routes>
  );
};

export default GeneratePiIndex;
