import React from "react";
import { Route, Routes } from "react-router-dom";

import { GroupMaster, ClientGroupForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GroupMaster />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<ClientGroupForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<ClientGroupForm />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
