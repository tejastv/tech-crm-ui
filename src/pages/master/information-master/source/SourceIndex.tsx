import React from "react";
import { Route, Routes } from "react-router-dom";

import { Source, AddInfoSource} from "@master/index";
import { COMMON_ROUTES } from "constants";

const SourceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Source />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddInfoSource />}></Route>
    </Routes>
  );
};

export default SourceMasterIndex;