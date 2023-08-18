import React from "react";
import { Route, Routes } from "react-router-dom";

import { GroupMaster, AddClientGroup} from "@master/index";
import { COMMON_ROUTES } from "constants";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GroupMaster />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddClientGroup />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
