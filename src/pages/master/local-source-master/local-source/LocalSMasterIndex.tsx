import React from "react";
import { Route, Routes } from "react-router-dom";

import { LocalSource, AddSource} from "@master/index";
import { COMMON_ROUTES } from "constants";

const LocalSMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LocalSource />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddSource />}></Route>
    </Routes>
  );
};

export default LocalSMasterIndex;
