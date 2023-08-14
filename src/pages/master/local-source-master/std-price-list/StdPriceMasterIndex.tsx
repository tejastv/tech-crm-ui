import React from "react";
import { Route, Routes } from "react-router-dom";

import { AddStdPrice} from "@master/index";

const StdPriceMasterIndex: React.FC = () => {
  return (
    <Routes>
      {/* Added Form Component */}
      <Route index element={<AddStdPrice />}></Route>
    </Routes>
  );
};

export default StdPriceMasterIndex;