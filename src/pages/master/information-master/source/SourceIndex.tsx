import React from "react";
import { Route, Routes } from "react-router-dom";

import { Source, SourceForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const SourceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Source />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<SourceForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<SourceForm />}></Route>
    </Routes>
  );
};

export default SourceMasterIndex;
