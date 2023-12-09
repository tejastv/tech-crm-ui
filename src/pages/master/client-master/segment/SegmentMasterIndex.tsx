import React from "react";
import { Route, Routes } from "react-router-dom";

import { Segment, SegmentForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Segment />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<SegmentForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<SegmentForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
