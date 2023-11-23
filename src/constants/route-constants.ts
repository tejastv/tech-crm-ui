export const ROOT = "/";
export const UNKNOWN = "*";

export const LOGIN = "login";
export const COMPONENTS = "/components";
export const DASHBOARD = "/dashboard";

export const MASTER_ROUTES = {
  MASTER_PARENT_ROUTE: "/master/*",
  MASTER: "/master/",
  COMPANY_ROUTES: {
    COMPANY_PARENT_ROUTE: "/company/*",
    COMPANY: "company",
  },
  // CLIENT_MASTER_ROUTES: {
  //   CLIENT_MASTER_PARENT_ROUTE: "/client-master/*",
  //   CLIENT_MASTER_ROUTE: "client-master/",
  //   CLIENT: "client",
  //   CLIENT_GROUP: "client-group",
  //   SEGMENT_PARENT_ROUTE: "/sengment/*",
  //   SEGMENT: "segment",

  // },

  CLIENT_MASTER_ROUTES: {
    CLIENT_MASTER_PARENT_ROUTE: "/client-master/*",
    CLIENT_MASTER_ROUTE: "client-master/",
    CLIENT_PARENT_ROUTE: "/client/*",
    CLIENTGROUP_PARENT_ROUTE: "/group/*",
    SEGMENT_PARENT_ROUTE: "/segment/*",
    CLIENT: "client",
    CLIENTGROUP: "group",
    SEGMENT: "segment",
  },

  // PRICE_LIST_MASTER_ROUTES: {
  //   PRICE_LIST_MASTER_PARENT_ROUTE: "/price-list-master/*",
  //   PRICE_LIST_MASTER_ROUTE: "price-list-master/",
  //   PRICE_CLIENT_PARENT_ROUTE: "/price-list-client/*",
  //   // LOCALSOURCE_PARENT_ROUTE: "/local-source/*",
  //   // STDPRICE_PARENT_ROUTE: "/stdprice/*",
  //   // LOCALSOURCE: "local-source",
  //   PRICE_CLIENT: "price-list-clients",
  //   // STDPRICE: "stdprice",

  // },
  LOCATION_MASTER_ROUTES: {
    LOCATION_MASTER_PARENT_ROUTE: "/location/*",
    LOCATION_MASTER_ROUTE: "location/",
    CITY_PARENT_ROUTE: "/city/*",
    STATE_PARENT_ROUTE: "/state/*",
    COUNTRY_PARENT_ROUTE: "/country/*",
    CONTINENT_PARENT_ROUTE: "/continent/*",
    CITY: "city",
    STATE: "state",
    COUNTRY: "country",
    CONTINENT: "continent",
  },
  LOCALSOURCEM_MASTER_ROUTES: {
    LOCALSOURCEM_MASTER_PARENT_ROUTE: "/local-source-master/*",
    LOCALSOURCEM_MASTER_ROUTE: "local-source-master/",
    LOCALSOURCE_PARENT_ROUTE: "/local-source/*",
    PRICE_PARENT_ROUTE: "/price/*",
    STDPRICE_PARENT_ROUTE: "/stdprice/*",
    LOCALSOURCE: "local-source",
    PRICE: "price",
    STDPRICE: "stdprice",
  },
  PRICE_LIST_MASTER_ROUTES: {
    PRICE_LIST_MASTER_PARENT_ROUTE: "/price-list-master/*",
    PRICE_LIST_MASTER_ROUTE: "price-list-master/",
    STD_PRICE_LIST_CLIENT_PARENT_ROUTE: "/std-price-client/*",
    PRICE_LIST_CLIENT_PARENT_ROUTE: "/price-list-client/*",
    PRICE_GROUP_PARENT_ROUTE: "/price-list-group/*",
    ACTUAL_BUYER_CLIENT_PARENT_ROUTE: "/actual-buyer/*",
    STD_PRICE_LIST_CLIENT_ROUTE: "/std-price-client/*",
    STD_PRICE_CLIENT: "std-price-client",
    PRICE_CLIENT: "price-list-client",
    PRICE_GROUP: "price-list-group",
    STDPRICE: "stdprice",
    ACTUALBUYER: "actual-buyer",
  },
  INFORMATION_MASTER_ROUTES: {
    INFORMATION_MASTER_PARENT_ROUTE: "/information-master/*",
    INFORMATION_MASTER_ROUTE: "information-master/",
    SUPPLIER_PARENT_ROUTE: "/supplier/*",
    SOURCE_PARENT_ROUTE: "/source/*",
    PAYMENTMODE_PARENT_ROUTE: "/payment-mode/*",
    BANKDEPOSIT_PARENT_ROUTE: "/bank-master-deposit/*",
    BANKDRAWN_PARENT_ROUTE: "/bank-master-drawn/*",
    CURRENCY_PARENT_ROUTE: "/currency/*",
    SUPPLIER: "supplier",
    SOURCE: "source",
    PAYMENTMODE: "payment-mode",
    BANKDEPOSIT: "bank-master-deposit",
    BANKDRAWN: "bank-master-drawn",
    CURRENCY: "currency",
  },
  INFORMATION_2_MASTER_ROUTES: {
    INFORMATION_2_MASTER_PARENT_ROUTE: "/information-master-2/*",
    INFORMATION_2_MASTER_ROUTE: "information-master-2/",
    EXECUTIVE_PARENT_ROUTE: "/executive/*",
    SITESTATUS_PARENT_ROUTE: "/site-status/*",
    CREDITDAYS_PARENT_ROUTE: "/credit-days/*",
    PURPOSE_PARENT_ROUTE: "/purpose-master/*",
    CALLTYPE_PARENT_ROUTE: "/calltype/*",
    INDUSTRY_PARENT_ROUTE: "/industry/*",
    FINYEAR_PARENT_ROUTE: "/finyear/*",
    USER_PARENT_ROUTE: "/user/*",
    EXECUTIVE: "executive",
    SITESTATUS: "site-status",
    CREDITDAYS: "credit-days",
    PURPOSE: "purpose-master",
    CALLTYPE: "calltype",
    INDUSTRY: "industry",
    FINYEAR: "finyear",
    USER: "user",
  },
};
export const TRANSACTION_ROUTES = {
  TRANSACTION_PARENT_ROUTE: "/transaction/*",
  TRANSACTION: "/transaction/",

  NEWENQUIRY_TRANSACTION_ROUTES: {
    NEWENQUIRY_TRANSACTION_PARENT_ROUTE: "/add-new-enquiry/*",
    NEWENQUIRY: "add-new-enquiry",
  },
  ENQUIRYDETAILS_TRANSACTION_ROUTES: {
    ENQUIRYDETAILS_TRANSACTION_PARENT_ROUTE: "/enquiry-details/*",
    ENQUIRYDETAILS: "enquiry-details",
  },
  ENQUIRYSEARCH_TRANSACTION_ROUTES: {
    ENQUIRYSEARCH_TRANSACTION_PARENT_ROUTE: "/enquiry-search/*",
    ENQUIRYSEARCH: "enquiry-search",
  },
  ADDBULKENQUIRIES_TRANSACTION_ROUTES: {
    ADDBULKENQUIRIES_TRANSACTION_PARENT_ROUTE: "add-bulk-enquiries/*",
    ADDBULKENQUIRIES: "add-bulk-enquiries/",
  },
  PURCHASEBILLS_TRANSACTION_ROUTES: {
    PURCHASEBILLS_TRANSACTION_PARENT_ROUTE: "purchase-bills/*",
    PURCHASEBILLS_MASTER: "purchase-bills/",
  },
  LOCATION_MASTER_ROUTES: {
    LOCATION_MASTER_PARENT_ROUTE: "/location/*",
    LOCATION_MASTER_ROUTE: "location/",
    CITY_PARENT_ROUTE: "/city/*",
    STATE_PARENT_ROUTE: "/state/*",
    COUNTRY_PARENT_ROUTE: "/country/*",
    CONTINENT_PARENT_ROUTE: "/continent/*",
    CITY: "city",
    STATE: "state",
    COUNTRY: "country",
    CONTINENT: "continent",
  },
};

export const PROFOMA_ROUTES = {
  PROFOMA_PARENT_ROUTE: "/profoma/*",
  PROFOMA: "/profoma/",

  GENERATEPI_PROFOMA_ROUTES: {
    GENERATEPI_PROFOMA_PARENT_ROUTE: "/generate-pi/*",
    GENERATEPI: "generate-pi",
  },
  ENQPI_PROFOMA_ROUTES: {
    ENQPI_PROFOMA_PARENT_ROUTE: "/enq-pi/*",
    ENQPI: "enq-pi",
  },
};

export const COMMON_ROUTES = {
  ADD: "add",
  EDIT: "edit/:id",
  LIST: "list",
};

export const REPORT_ROUTES = {
  REPORT_PARENT_ROUTE: "/report/*",
  REPORT: "/report/",

  NUMBER_OF_ENQUIRIES_ROUTES: {
    NUMBER_OF_ENQUIRIES_PARENT_ROUTE: "/no-of-enquiries/*",
    NUMBER_OF_ENQUIRIES: "no-of-enquiries",
  },
  NUMBER_OF_ENQUIRIES_GROUP_COUNTRY_WISE_ROUTES: {
    NUMBER_OF_ENQUIRIES_GROUP_COUNTRY_WISE_PARENT_ROUTE:
      "/no-of-enquiries-group-country-wise/*",
    NUMBER_OF_ENQUIRIES_GROUP_COUNTRY_WISE:
      "no-of-enquiries-group-country-wise",
  },
  NUMBER_OF_ENQUIRIES_GRAPH_VIEW_ROUTES: {
    NUMBER_OF_ENQUIRIES_GRAPH_VIEW_PARENT_ROUTE:
      "/no-of-enquiries-graph-view/*",
    NUMBER_OF_ENQUIRIES_GRAPH_VIEW: "no-of-enquiries-graph-view",
  },
  NUMBER_OF_ENQUIRIES_GRAPH_VIEW_GROUP_WISE_ROUTES: {
    NUMBER_OF_ENQUIRIES_GRAPH_VIEW_GROUP_WISE_PARENT_ROUTE:
      "/no-of-enquiries-graph-view-group-wise/*",
    NUMBER_OF_ENQUIRIES_GRAPH_VIEW_GROUP_WISE:
      "no-of-enquiries-graph-view-group-wise",
  },
};
export const INVOICE_ROUTES = {
  INVOICE_PARENT_ROUTE: "/invoice/*",
  INVOICE: "/invoice/",

  INVOICE_GENERATE_GST_ROUTES: {
    INVOICE_GENERATE_GST_PARENT_ROUTE: "/invoice-generate-gst/*",
    INVOICE_GENERATE_GST: "invoice-generate-gst",
  },
  INVOICE_GENERATE_AUTO_GST_ROUTES: {
    INVOICE_GENERATE_AUTO_GST_PARENT_ROUTE: "/invoice-generate-auto-gst/*",
    INVOICE_GENERATE_AUTO_GST: "invoice-generate-auto-gst",
  },
  INVOICE_GENERATE_ACTUAL_BUYRE_GST_ROUTES: {
    INVOICE_GENERATE_ACTUAL_BUYRE_GST_PARENT_ROUTE:
      "/invoice-generate-actual-buyre-gst/*",
    INVOICE_GENERATE_ACTUAL_BUYRE_GST: "invoice-generate-actual-buyre-gst",
  },
};
