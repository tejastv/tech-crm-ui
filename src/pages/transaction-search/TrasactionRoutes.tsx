import React from "react";
import { Route, Routes } from "react-router-dom";

import { TRANSACTION_ROUTES } from "@constants/index";

const AddEnquiryIndex = React.lazy(
  () => import("./add-new-enquiry/NewEnquiryIndex")
);


  
  const MasterRoutes = () => {
    return (
      <Routes>
        <Route
          path={TRANSACTION_ROUTES.NEWENQUIRY_TRANSACTION_ROUTES.NEWENQUIRY_TRANSACTION_PARENT_ROUTE}
          element={<AddEnquiryIndex />}
        ></Route>
  
        
      
      </Routes>
    );
  };
  
  export default MasterRoutes;
  