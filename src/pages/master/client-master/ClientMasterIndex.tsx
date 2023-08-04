import { Route, Routes } from "react-router-dom";
import { Client, ClientGroup, Segment } from "@master/index";
import { MASTER_ROUTES } from "constants";

const ClientMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT}
        element={<Client />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_GROUP}
        element={<ClientGroup />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.SEGMENT}
        element={<Segment />}
      ></Route>
    </Routes>
  );
};

export default ClientMasterIndex;
