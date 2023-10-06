import React from "react";
import { Route, Routes } from "react-router-dom";

import { PROFOMA_ROUTES } from "@constants/index";

const GeneratePiIndex = React.lazy(
    () => import("./generate-pi/GeneratePiIndex")
  );

const EnqPiIndex = React.lazy(
    () => import("./enq-pi/EnqPiIndex")
  );


  const ProfomaRoutes = () => {
    return (
      <Routes>
        <Route
          path={PROFOMA_ROUTES.GENERATEPI_PROFOMA_ROUTES.GENERATEPI_PROFOMA_PARENT_ROUTE}
          element={<GeneratePiIndex />}
        ></Route>

        <Route
          path={PROFOMA_ROUTES.ENQPI_PROFOMA_ROUTES.ENQPI_PROFOMA_PARENT_ROUTE}
          element={<EnqPiIndex />}
        ></Route>
        </Routes>
        );
    };


 export default ProfomaRoutes;

