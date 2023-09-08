import React from "react";
import { Route, Routes } from "react-router-dom";

import { PurposeMaster, AddUpdatePurposeMaster } from "@master/index";
import { COMMON_ROUTES } from "constants";

const PurposeMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PurposeMaster />}></Route>
      <Route
        path={COMMON_ROUTES.ADD}
        element={<AddUpdatePurposeMaster />}
      ></Route>
      <Route
        path={COMMON_ROUTES.EDIT}
        element={<AddUpdatePurposeMaster />}
      ></Route>
    </Routes>
  );
};

export default PurposeMasterIndex;
