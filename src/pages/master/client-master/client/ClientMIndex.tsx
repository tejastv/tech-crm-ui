import React from "react";
import { Route, Routes } from "react-router-dom";
import { COMMON_ROUTES } from "constants";
import { AddClient,Client} from "@master/index";

const CityMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Client />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddClient />}></Route>
    </Routes>
  );
};

export default CityMasterIndex;
