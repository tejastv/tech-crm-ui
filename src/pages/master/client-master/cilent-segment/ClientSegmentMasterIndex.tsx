import React from "react";
import { Route, Routes } from "react-router-dom";

import { ClientSegment, AddClientSegment} from "@master/index";
import { COMMON_ROUTES } from "constants";

const StdPriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ClientSegment />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddClientSegment />}></Route>
    </Routes>
  );
};

export default StdPriceMasterIndex;