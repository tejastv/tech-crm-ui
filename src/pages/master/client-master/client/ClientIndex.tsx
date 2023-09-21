import React from "react";
import { Route, Routes } from "react-router-dom";
import { COMMON_ROUTES } from "@constants/index";
import { AddUpdateClient, Client } from "@master/index";

const ClientMasterIndex: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Client />}></Route>
      <Route path={COMMON_ROUTES.ADD} element={<AddUpdateClient />}></Route>
      <Route path={COMMON_ROUTES.EDIT} element={<AddUpdateClient />}></Route>
    </Routes>
  );
};

export default ClientMasterIndex;
