import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";

const LocalSMasterIndex = React.lazy(
  () => import("./local-source/LocalSourceIndex")
);
const PriceMasterIndex = React.lazy(
  () => import("./price-list/PriceIndex")
);
const StdPriceMasterIndex = React.lazy(
  () => import("./std-price-list/StdPriceIndex")
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
    </Routes>
  );
};

export default LocalSourceMasterIndex;
