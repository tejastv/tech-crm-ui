import React from "react";
import { Route, Routes } from "react-router-dom";

import { TRANSACTION_ROUTES } from "@constants/index";

const AddEnquiryIndex = React.lazy(
  () => import("./enquiries/add-new-enquiry/NewEnquiryIndex")
);
const EnquiriesIndex = React.lazy(() => import("./enquiries/EnquiriesIndex"));
const AddBulkEnquiries = React.lazy(
  () => import("./add-bulk-enquiries/AddBulkEnquiriesIndex")
);
const PurchaseBillsof = React.lazy(
  () => import("./purchase-bills/PurchaseBillsIndex")
);

const TransactionRoutes = () => {
  return (
    <Routes>
      <Route
        path={
          TRANSACTION_ROUTES.NEWENQUIRY_TRANSACTION_ROUTES
            .NEWENQUIRY_TRANSACTION_PARENT_ROUTE
        }
        element={<AddEnquiryIndex />}
      ></Route>

      <Route
        path={
          TRANSACTION_ROUTES.ENQUIRYDETAILS_TRANSACTION_ROUTES
            .ENQUIRYDETAILS_TRANSACTION_PARENT_ROUTE
        }
        element={<EnquiriesIndex />}
      ></Route>
      <Route
        path={
          TRANSACTION_ROUTES.ADDBULKENQUIRIES_TRANSACTION_ROUTES
            .ADDBULKENQUIRIES_TRANSACTION_PARENT_ROUTE
        }
        element={<AddBulkEnquiries />}
      ></Route>
      <Route
        path={
          TRANSACTION_ROUTES.PURCHASEBILLS_TRANSACTION_ROUTES
            .PURCHASEBILLS_TRANSACTION_PARENT_ROUTE
        }
        element={<PurchaseBillsof />}
      ></Route>
    </Routes>
  );
};

export default TransactionRoutes;
