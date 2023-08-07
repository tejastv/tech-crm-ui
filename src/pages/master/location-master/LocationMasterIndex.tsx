import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const CityMasterIndex = React.lazy(
  () => import("./city/CityMasterIndex")
);
const StateMasterIndex = React.lazy(
  () => import("./state/StateMasterIndex")
);

const LocationMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.CITY_PARENT_ROUTE}
        element={<CityMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.STATE_PARENT_ROUTE}
        element={<StateMasterIndex />}
      ></Route>
      {/* <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.STATE}
        element={<Segment />}
      ></Route>
       <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.CONTINENT}
        element={<Segment />}
      ></Route> */}
    </Routes>
  );
};

export default LocationMasterIndex;