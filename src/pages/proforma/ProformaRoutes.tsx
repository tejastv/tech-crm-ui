import React from "react";
import { Route, Routes } from "react-router-dom";

import { PROFORMA_ROUTES } from "@constants/index";

const GeneratePiIndex = React.lazy(
  () => import("./generate-pi/GeneratePiIndex")
);

const EnqPiIndex = React.lazy(() => import("./enq-pi/EnqPiIndex"));

const ProformaRoutes = () => {
  return (
    <Routes>
      <Route
        path={
          PROFORMA_ROUTES.GENERATE_PI_PROFORMA_ROUTES
            .GENERATE_PI_PROFORMA_PARENT_ROUTE
        }
        element={<GeneratePiIndex />}
      ></Route>

      <Route
        path={PROFORMA_ROUTES.ENQ_PI_PROFORMA_ROUTES.ENQ_PI_PROFORMA_PARENT_ROUTE}
        element={<EnqPiIndex />}
      ></Route>
    </Routes>
  );
};

export default ProformaRoutes;
