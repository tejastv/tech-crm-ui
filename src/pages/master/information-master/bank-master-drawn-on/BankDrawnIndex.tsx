import React from "react";
import { Route, Routes } from "react-router-dom";

import {BankMasterDrawn , AddBankMasterDrawn} from "@master/index";
import { COMMON_ROUTES } from "constants";

const BankDrawnMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<BankMasterDrawn/>}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddBankMasterDrawn />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddBankMasterDrawn />}></Route>
    </Routes>
  );
};

export default BankDrawnMasterIndex;
