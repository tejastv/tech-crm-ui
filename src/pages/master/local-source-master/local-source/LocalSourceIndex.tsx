import React from "react";
import { Route, Routes } from "react-router-dom";

import { LocalSource, LocalSourceForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const LocalSMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LocalSource />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<LocalSourceForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<LocalSourceForm />}></Route>
    </Routes>
  );
};

export default LocalSMasterIndex;
