import { INVOICE_ROUTES } from "@constants/route-constants";
import React from "react";
import { Route, Routes } from "react-router-dom";

const InvoiceGenerateGstIndex = React.lazy(
  () => import("./invoice-generate-gst/InvoiceGenGstIndex")
);
const GenerateInvoiceAutoIndex = React.lazy(
  () => import("./generate-invoice-auto/GenerateInvoiceAutoIndex")
);

const GenerateInvoiceRoutes = () => {
  return (
    <Routes>
      <Route
        path={
          INVOICE_ROUTES.GENERATE_INVOICE_ROUTES
            .INVOICE_GENERATE_GST_PARENT_ROUTE
        }
        element={<InvoiceGenerateGstIndex />}
      />{" "}
      <Route
        path={
          INVOICE_ROUTES.GENERATE_INVOICE_ROUTES
            .INVOICE_GENERATE_AUTO_GST_PARENT_ROUTE
        }
        element={<GenerateInvoiceAutoIndex />}
      />
    </Routes>
  );
};

export default GenerateInvoiceRoutes;
