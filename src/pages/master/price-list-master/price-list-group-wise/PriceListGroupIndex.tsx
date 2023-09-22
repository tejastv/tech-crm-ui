import React from "react";
import { Route, Routes } from "react-router-dom";

import { PriceListGroup } from "@master/index";

const PriceGroupIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PriceListGroup />}></Route>
    </Routes>
  );
};

export default PriceGroupIndex;
