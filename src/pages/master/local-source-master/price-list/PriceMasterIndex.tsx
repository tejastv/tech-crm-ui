import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddPrice } from "@master/index";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AddPrice />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;
