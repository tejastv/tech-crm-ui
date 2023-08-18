import React from "react";

import { MASTER_ROUTES } from "@constants/route-constants";
import { Routes, Route } from "react-router-dom";

const ClientIndex = React.lazy(() => import("./client/ClientIndex"));
const ClientGroupIndex = React.lazy(() => import("./client-group/ClientGroupMasterIndex"));
const ClientSegmentIndex = React.lazy(
  () => import("./segment/SegmentMasterIndex")
);

const ClientMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_PARENT_ROUTE}
        element={<ClientIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENTGROUP_PARENT_ROUTE}
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