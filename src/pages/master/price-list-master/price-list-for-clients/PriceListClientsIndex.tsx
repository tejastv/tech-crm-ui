import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddPriceClients } from "@master/index";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AddPriceClients />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;
