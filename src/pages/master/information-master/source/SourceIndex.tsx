import React from "react";
import { Route, Routes } from "react-router-dom";

import { Source, AddUpdateSource } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const SourceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Source />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateSource />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateSource />}></Route>
    </Routes>
  );
};

export default SourceMasterIndex;
