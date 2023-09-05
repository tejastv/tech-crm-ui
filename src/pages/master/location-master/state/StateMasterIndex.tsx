import React from "react";
import { Route, Routes } from "react-router-dom";

import { State, AddUpdateState } from "@master/index";
import { COMMON_ROUTES } from "constants";

const StateMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<State />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateState />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateState />}></Route>
    </Routes>
  );
};

export default StateMasterIndex;
