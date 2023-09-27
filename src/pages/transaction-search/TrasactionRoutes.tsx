import React from "react";
import { Route, Routes } from "react-router-dom";

import { TRANSACTION_ROUTES } from "@constants/index";

const AddEnquiryIndex = React.lazy(
  () => import("./add-new-enquiry/NewEnquiryIndex")
);
const AllEnquiriesIndex = React.lazy(
  () => import("./all-enquiries/AllEnquiriesIndex")
);
const EnquirySearchIndex = React.lazy(
  () => import("./enquiry-search/EnquirySearchIndex")
);


  
  const MasterRoutes = () => {
    return (
      <Routes>
        <Route
          path={TRANSACTION_ROUTES.NEWENQUIRY_TRANSACTION_ROUTES.NEWENQUIRY_TRANSACTION_PARENT_ROUTE}
          element={<AddEnquiryIndex />}>
          </Route>

        <Route
          path={TRANSACTION_ROUTES.ENQUIRYDETAILS_TRANSACTION_ROUTES.ENQUIRYDETAILS_TRANSACTION_PARENT_ROUTE}
          element={<AllEnquiriesIndex />}>
          </Route>

        <Route
          path={TRANSACTION_ROUTES.ENQUIRYSEARCH_TRANSACTION_ROUTES.ENQUIRYSEARCH_TRANSACTION_PARENT_ROUTE}
          element={<EnquirySearchIndex />}>
          </Route>

      </Routes>
    );
  };
  
  export default MasterRoutes;
  