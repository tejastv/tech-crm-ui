import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const ClientMIndex = React.lazy(
  () => import("./client/ClientMIndex")
);
const ClientGroupMasterIndex = React.lazy(
  () => import("./client-group/ClientGroupMasterIndex")
);
const SegmentMasterIndex = React.lazy(
  () => import("./segment/SegmentMasterIndex")
);

const LocationMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.CLIENTM_MASTER_ROUTES.CLIENT_PARENT_ROUTE}
        element={<ClientMIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENTM_MASTER_ROUTES.CLIENTGROUP_PARENT_ROUTE}
        element={<ClientGroupMasterIndex />}
      ></Route>
       <Route
        path={MASTER_ROUTES.CLIENTM_MASTER_ROUTES.SEGMENT_PARENT_ROUTE}
        element={<SegmentMasterIndex />}
      ></Route>
    </Routes>
  );
};

export default LocationMasterIndex;