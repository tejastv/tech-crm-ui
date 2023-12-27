import React from "react";

import { Route, Routes } from "react-router-dom";

import { RECEIPTS_ROUTES } from "@constants/index";

const Receipt = React.lazy(() => import("./receipt/ReceiptIndex"));
const ReceiptAdvance = React.lazy(
  () => import("./receipt-advance/ReceiptAdvanceIndex")
);
// const EnquiriesCountGraphView = React.lazy(
//   () =>
//     import(
//       "./enquiries/no-of-enquiries-graph-view/EnquiriesCountGraphViewIndex"
//     )
// );
// const EnquiriesCountGraphViewGroupWise = React.lazy(
//   () =>
//     import(
//       "./enquiries/no-of-enquiries-graph-view-group-wise/EnquiriesCountGraphViewGroupWiseIndex"
//     )
// );

const ReceiptsRoutes = () => {
  return (
    <Routes>
      <Route
        path={RECEIPTS_ROUTES.RECEIPT_ROUTES.RECEIPT_PARENT_ROUTE}
        element={<Receipt />}
      />
      <Route
        path={
          RECEIPTS_ROUTES.RECEIPT_ADVANCE_ROUTES.RECEIPT_ADVANCE_PARENT_ROUTE
        }
        element={<ReceiptAdvance />}
      />
      {/* <Route
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
      /> */}
    </Routes>
  );
};

export default ReceiptsRoutes;
