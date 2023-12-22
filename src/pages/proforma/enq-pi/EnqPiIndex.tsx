import React from "react";
import { Route, Routes } from "react-router-dom";
import { EnqPiForm, SearchEnqPi, EnqPi } from "@pages/proforma";
import { COMMON_ROUTES } from "@constants/index";

const EnqPiIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<EnqPi />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<EnqPiForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<EnqPiForm />}></Route>
      <Route path={COMMON_ROUTES.LIST} element={<SearchEnqPi />}></Route>
    </Routes>
  );
};

export default EnqPiIndex;
