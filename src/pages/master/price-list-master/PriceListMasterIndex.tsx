import React from "react";
import { Route, Routes } from "react-router-dom";

import { MASTER_ROUTES } from "@constants/index";

const PriceListClientIndex = React.lazy(
  () => import("./price-list-for-clients/PriceListClientsIndex")
);
const PriceGroupIndex = React.lazy(
  () => import("./priice-list-group-wise/PriceListGroupIndex")
);
const StdPriceClientMasterIndex = React.lazy(
  () => import("./std-price-list-client/StdPriceListClientIndex")
);
const ActualBuyerMasterIndex = React.lazy(
  () => import("./actual-buyer/ActualBuyerIndex")
);

const PriceListMasterIndex = () => {
  return (
    <Routes>
      <Route
        path={
          MASTER_ROUTES.PRICE_LIST_MASTER_ROUTES.PRICE_LIST_CLIENT_PARENT_ROUTE
        }
        element={<PriceListClientIndex />}
      ></Route>
      <Route
        path={MASTER_ROUTES.PRICE_LIST_MASTER_ROUTES.PRICE_GROUP_PARENT_ROUTE}
        element={<PriceGroupIndex />}
      ></Route>
      <Route
        path={
          MASTER_ROUTES.PRICE_LIST_MASTER_ROUTES
            .STD_PRICE_LIST_CLIENT_PARENT_ROUTE
        }
        element={<StdPriceClientMasterIndex />}
      ></Route>
      <Route
        path={
          MASTER_ROUTES.PRICE_LIST_MASTER_ROUTES
            .ACTUAL_BUYER_CLIENT_PARENT_ROUTE
        }
        element={<ActualBuyerMasterIndex />}
      ></Route>
    </Routes>
  );
};

export default PriceListMasterIndex;
