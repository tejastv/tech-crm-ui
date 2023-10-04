import React from "react";
import { Route, Routes } from "react-router-dom";

import { PROFOMA_ROUTES } from "@constants/index";

const GeneratePiIndex = React.lazy(
    () => import("./generate-pi/GeneratePiIndex")
  );


  const ProfomaRoutes = () => {
    return (
      <Routes>
        <Route
          path={PROFOMA_ROUTES.GENERATEPI_PROFOMA_ROUTES.GENERATEPI_PROFOMA_PARENT_ROUTE}
          element={<GeneratePiIndex />}
        ></Route>
        </Routes>
        );
    };


 export default ProfomaRoutes;

