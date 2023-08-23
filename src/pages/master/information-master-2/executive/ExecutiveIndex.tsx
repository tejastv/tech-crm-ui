import React from "react";
import { Route, Routes } from "react-router-dom";

import { Executive, AddExecutive} from "@master/index";
import { COMMON_ROUTES } from "constants";

const ExecutiveIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Executive />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddExecutive />}></Route>
    </Routes>
  );
};

export default ExecutiveIndex;
