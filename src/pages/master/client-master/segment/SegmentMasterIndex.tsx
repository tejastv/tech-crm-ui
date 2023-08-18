import React from "react";
import { Route, Routes } from "react-router-dom";

import { Segment, AddSegment} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Segment />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddSegment />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
