import React from "react";
import { Route, Routes } from "react-router-dom";

import { LocalSourcePriceList } from "@master/index";

const PriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LocalSourcePriceList />}></Route>
    </Routes>
  );
};

export default PriceMasterIndex;
