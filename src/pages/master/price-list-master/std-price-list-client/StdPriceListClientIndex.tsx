import React from "react";
import { Route, Routes } from "react-router-dom";

import { StdPriceListClient } from "@master/index";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<StdPriceListClient />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;
