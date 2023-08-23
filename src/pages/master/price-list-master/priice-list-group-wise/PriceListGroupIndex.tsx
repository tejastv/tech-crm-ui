import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddPriceGroup } from "@master/index";

const PriceGroupIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AddPriceGroup />}></Route>
    </Routes>
  );
};

export default PriceGroupIndex;
