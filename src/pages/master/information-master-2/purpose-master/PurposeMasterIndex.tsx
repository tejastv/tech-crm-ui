import React from "react";
import { Route, Routes } from "react-router-dom";

import { PurposeMaster, PurposeMasterForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const PurposeMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PurposeMaster />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<PurposeMasterForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<PurposeMasterForm />}></Route>
    </Routes>
  );
};

export default PurposeMasterIndex;
