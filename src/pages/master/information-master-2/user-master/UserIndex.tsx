import React from "react";
import { Route, Routes } from "react-router-dom";

import {  User,AddUser} from "@master/index";
import { COMMON_ROUTES } from "constants";

const UserIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<User />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUser />}></Route>
    </Routes>
  );
};

export default UserIndex;
