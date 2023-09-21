import React from "react";
import { Route, Routes } from "react-router-dom";

import { Segment, AddUpdateSegment } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Segment />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateSegment />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateSegment />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
