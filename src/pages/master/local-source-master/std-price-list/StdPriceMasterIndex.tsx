import React from "react";
import { Route, Routes } from "react-router-dom";

import { StdPrice, AddStdPrice} from "@master/index";
import { COMMON_ROUTES } from "constants";

const StdPriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<StdPrice />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddStdPrice />}></Route>
    </Routes>
  );
};

export default StdPriceMasterIndex;