import React from "react";
import { Route, Routes } from "react-router-dom";

import { LocalSource, AddUpdateLocalSource } from "@master/index";
import { COMMON_ROUTES } from "constants";

const LocalSMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LocalSource />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateLocalSource />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateLocalSource />}></Route>
    </Routes>
  );
};

export default LocalSMasterIndex;
