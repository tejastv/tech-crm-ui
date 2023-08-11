import React from "react";
import { Route, Routes } from "react-router-dom";

import { Price, AddPrice} from "@master/index";
import { COMMON_ROUTES } from "constants";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Price />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddPrice />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;