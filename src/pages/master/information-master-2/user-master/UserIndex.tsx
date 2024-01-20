import React from "react";
import { Route, Routes } from "react-router-dom";

import { User, UserForm } from "@master/index";
import { COMMON_ROUTES } from "@constants/index";

const UserIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<User />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<UserForm />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<UserForm />}></Route>
    </Routes>
  );
};

export default UserIndex;
