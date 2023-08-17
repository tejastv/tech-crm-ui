import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const CityMasterIndex = React.lazy(
  () => import("./city/CityMasterIndex")
);
const StateMasterIndex = React.lazy(
  () => import("./state/StateMasterIndex")
);
const CountryMasterIndex = React.lazy(
  () => import("./country/CountryMasterIndex")
);
const ContinentMasterIndex = React.lazy(
  () => import("./continent/ContinentMasterIndex")
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
      <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.COUNTRY_PARENT_ROUTE}
        element={<CountryMasterIndex />}
      ></Route>
       <Route
        path={MASTER_ROUTES.LOCATION_MASTER_ROUTES.CONTINENT_PARENT_ROUTE}
        element={<ContinentMasterIndex />}
      ></Route>
    </Routes>
  );
};

export default LocationMasterIndex;