import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "constants";


const PriceListClientIndex = React.lazy(
  () => import("./price-list-for-clients/PriceListClientsIndex")
);
const StdPriceClientMasterIndex = React.lazy(
  () => import("./std-price-list-client/StdPriceListClientIndex")
);


const PriceListMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={MASTER_ROUTES.PRICE_LIST_MASTER_ROUTES.STD_PRICE_LIST_CLIENT_PARENT_ROUTE}
        element={<StdPriceClientMasterIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.PRICE_LIST_MASTER_ROUTES.PRICE_LIST_CLIENT_PARENT_ROUTE}
        element={<PriceListClientIndex />}
      ></Route>
      {/* <Route
        path={MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.STDPRICE_PARENT_ROUTE}
        element={<StdPriceMasterIndex />}
      ></Route> */}
    </Routes>
  );
};

export default PriceListMasterIndex;
