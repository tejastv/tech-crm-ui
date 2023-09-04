import React from "react";
import { Route, Routes } from "react-router-dom";

import { Executive, AddUpdateExecutive } from "@master/index";
import { COMMON_ROUTES } from "constants";

const ExecutiveIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Executive />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateExecutive />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateExecutive />}></Route>
    </Routes>
  );
};

export default ExecutiveIndex;
