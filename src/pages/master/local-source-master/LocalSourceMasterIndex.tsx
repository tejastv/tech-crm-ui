import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const LocalSMasterIndex = React.lazy(
  () => import("./local-source/LocalSMasterIndex")
);
const PriceMasterIndex = React.lazy(
  () => import("./price-list/PriceMasterIndex")
);
const  StdPriceMasterIndex= React.lazy(
  () => import("./std-price-list/StdPriceMasterIndex")
);

const LocalSourceMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.LOCALSOURCE_PARENT_ROUTE}
        element={<LocalSMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.PRICE_PARENT_ROUTE}
        element={<PriceMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.STDPRICE_PARENT_ROUTE}
        element={<StdPriceMasterIndex />}
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

export default LocalSourceMasterIndex;