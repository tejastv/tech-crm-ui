import React from "react";
import { Route, Routes } from "react-router-dom";

import { State, StateForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const StateMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<State />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<StateForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<StateForm />}></Route>
    </Routes>
  );
};

export default StateMasterIndex;
