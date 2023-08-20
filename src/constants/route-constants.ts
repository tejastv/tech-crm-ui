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
    // SUPPLIER_PARENT_ROUTE: "/supplier/*",
    // SOURCE_PARENT_ROUTE: "/source/*",
    // PAYMENTMODE_PARENT_ROUTE: "/payment-mode/*",
    // BANKDEPOSIT_PARENT_ROUTE: "/bank-master-deposit/*",
    // BANKDRAWN_PARENT_ROUTE: "/bank-master-drawn/*",
    INDUSTRY_PARENT_ROUTE: "/industry/*",
    // SUPPLIER: "supplier",
    // SOURCE: "source",
    // PAYMENTMODE: "payment-mode",
    // BANKDEPOSIT: "bank-master-deposit",
    // BANKDRAWN: "bank-master-drawn",
    INDUSTRY: "industry",
  },
  // INFORMATION_MASTER_ROUTES: {
  //   INFORMATION_MASTER_PARENT_ROUTE: "/local-source-master/*",
  //   INFORMATION_MASTER_ROUTE: 'information-master/',
  //   BANKMASTERDEPOSIT_PARENT_ROUTE: "/bank-master-Deposit/*",
  //   BANKMASTER_dRAWN_PARENT_ROUTE: "/bank-master-drawn/*",
  //   PAYMENTMODE_PARENT_ROUTE: "/payment-mode/*",
  //   BANKMASTERDRAWN: "bank-master-drawn",
  //   BANKMASTERDEPOSIT: "bank-master-deposit",
  //   PAYMENTMODE: "paymentmode",
  // },
};

export const COMMON_ROUTES = {
  ADD: "add",
  EDIT: "edit/:id",
  LIST: "list",
};
