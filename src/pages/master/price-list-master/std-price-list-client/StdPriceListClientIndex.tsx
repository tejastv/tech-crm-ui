import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddStdPriceClients } from "@master/index";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<AddStdPriceClients />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;
