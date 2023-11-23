import React from "react";
import { Route, Routes } from "react-router-dom";

import { StdPrice } from "@master/index";

const StdPriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<StdPrice />}></Route>
    </Routes>
  );
};

export default StdPriceMasterIndex;
