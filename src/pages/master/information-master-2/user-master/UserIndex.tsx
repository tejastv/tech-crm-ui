import React from "react";
import { Route, Routes } from "react-router-dom";

import { User, AddUpdateUser } from "@master/index";
import { COMMON_ROUTES } from "constants";

const UserIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<User />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateUser />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateUser />}></Route>
    </Routes>
  );
};

export default UserIndex;
