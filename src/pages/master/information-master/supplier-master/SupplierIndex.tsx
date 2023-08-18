import React from "react";
import { Route, Routes } from "react-router-dom";

import { Supplier, AddSupplier} from "@master/index";
import { COMMON_ROUTES } from "constants";

const SupplierMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Supplier />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddSupplier />}></Route>
    </Routes>
  );
};

export default SupplierMasterIndex;
