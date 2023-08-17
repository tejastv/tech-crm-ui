import { Route, Routes } from "react-router-dom";
// import { Client, ClientGroup, ClientSegment } from "@master/index";
import { MASTER_ROUTES } from "constants";
import React from "react";

// const ClientMasterIndex = React.lazy(
//   () => import("./client/")
// );
// const ClientGroupMasterIndex = React.lazy(
//   () => import("./client-group/")
// );
const  ClientSegmentMasterIndex= React.lazy(
  () => import("./cilent-segment/ClientSegmentMasterIndex")
);


const ClientMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT}
        // element={<Client />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_GROUP}
        // element={<ClientGroup />}
      ></Route>
      <Route
        path={MASTER_ROUTES.CLIENT_MASTER_ROUTES.SEGMENT_PARENT_ROUTE}
        element={<ClientSegmentMasterIndex />}
      ></Route>
    </Routes>
  );
};

export default ClientMasterIndex;
