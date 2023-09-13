import React from "react";
import { Route, Routes } from "react-router-dom";

import { GroupMaster, AddUpdateClientGroup } from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GroupMaster />}></Route>
      <Route
        path={COMMON_ROUTES.ADD}
        element={<AddUpdateClientGroup />}
      ></Route>
      <Route
        path={COMMON_ROUTES.EDIT}
        element={<AddUpdateClientGroup />}
      ></Route>
    </Routes>
  );
};

export default CityMasterIndex;
