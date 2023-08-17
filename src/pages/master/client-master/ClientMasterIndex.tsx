import { Route, Routes } from "react-router-dom";
// import { Client, ClientGroup, ClientSegment } from "@master/index";
import { MASTER_ROUTES } from "constants";
import React from "react";

const ClientIndex = React.lazy(() => import("./client/Client"));
const ClientGroupIndex = React.lazy(() => import("./client-group/ClientGroup"));
const ClientSegmentIndex = React.lazy(
  () => import("./cilent-segment/ClientSegmentMasterIndex")
);

const ClientMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT}
        element={<ClientIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_GROUP}
        element={<ClientGroupIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.SEGMENT_PARENT_ROUTE}
        element={<ClientSegmentIndex />}
      ></Route>
    </Routes>
  );
};

export default ClientMasterIndex;
