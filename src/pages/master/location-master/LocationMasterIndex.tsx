import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const CityMasterIndex = React.lazy(
  () => import("./city/CityMasterIndex")
);
const LocationMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.CITY_PARENT_ROUTE}
        element={<CityMasterIndex />}
      ></Route>
      {/* <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.COUNTRY}
        element={<ClientGroup />}
      ></Route>
      <Route
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