import React from "react";
import { Route, Routes } from "react-router-dom";

import { State, AddState} from "@master/index";
import { COMMON_ROUTES } from "constants";

const StateMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<State />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddState />}></Route>
    </Routes>
  );
};

export default StateMasterIndex;
