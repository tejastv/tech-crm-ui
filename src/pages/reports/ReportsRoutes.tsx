import React from "react";

import { Route, Routes } from "react-router-dom";

import { REPORT_ROUTES } from "@constants/index";

const EnquiriesCount = React.lazy(
  () => import("./enquiries/no-of-enquiries/EnquiriesCountIndex")
);
const EnquiriesCountGroupCountryWise = React.lazy(
  () =>
    import(
      "./enquiries/no-of-enquiries-group-country-wise/EnquiriesCountGroupCountryWiseIndex"
    )
);
const EnquiriesCountGraphView = React.lazy(
  () =>
    import(
      "./enquiries/no-of-enquiries-graph-view/EnquiriesCountGraphViewIndex"
    )
);
const EnquiriesCountGraphViewGroupWise = React.lazy(
  () =>
    import(
      "./enquiries/no-of-enquiries-graph-view-group-wise/EnquiriesCountGraphViewGroupWiseIndex"
    )
);

const ReportsRoutes = () => {
  return (
    <Routes>
      <Route
        path={
          REPORT_ROUTES.NUMBER_OF_ENQUIRIES_ROUTES
            .NUMBER_OF_ENQUIRIES_PARENT_ROUTE
        }
        element={<EnquiriesCount />}
      />
      <Route
        path={
          REPORT_ROUTES.NUMBER_OF_ENQUIRIES_GROUP_COUNTRY_WISE_ROUTES
            .NUMBER_OF_ENQUIRIES_GROUP_COUNTRY_WISE_PARENT_ROUTE
        }
        element={<EnquiriesCountGroupCountryWise />}
      />
      <Route
        path={
          REPORT_ROUTES.NUMBER_OF_ENQUIRIES_GRAPH_VIEW_ROUTES
            .NUMBER_OF_ENQUIRIES_GRAPH_VIEW_PARENT_ROUTE
        }
        element={<EnquiriesCountGraphView />}
      />
      <Route
        path={
          REPORT_ROUTES.NUMBER_OF_ENQUIRIES_GRAPH_VIEW_GROUP_WISE_ROUTES
            .NUMBER_OF_ENQUIRIES_GRAPH_VIEW_GROUP_WISE_PARENT_ROUTE
        }
        element={<EnquiriesCountGraphViewGroupWise />}
      />
    </Routes>
  );
};

export default ReportsRoutes;
