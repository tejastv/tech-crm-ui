import React from "react";
import { Route, Routes } from "react-router-dom";

import { Executive, ExecutiveForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const ExecutiveIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Executive />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<ExecutiveForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<ExecutiveForm />}></Route>
    </Routes>
  );
};

export default ExecutiveIndex;
