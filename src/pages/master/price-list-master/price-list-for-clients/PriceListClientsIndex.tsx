import React from "react";
import { Route, Routes } from "react-router-dom";

import { PriceListForClients } from "@master/index";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<PriceListForClients />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;
