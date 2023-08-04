export const ROOT = "/";
export const UNKNOWN = "*";

export const LOGIN = "login";
export const DASHBOARD = "/dashboard";

export const MASTER_ROUTES = {
  MASTER_PARENT_ROUTE: "/master/*",
  MASTER: "/master/",
  COMPANY_ROUTES: {
    COMPANY_PARENT_ROUTE: "/company/*",
    COMPANY: "company",
  },
  CLIENT_MASTER_ROUTES: {
    CLIENT_MASTER_PARENT_ROUTE: "/client-master/*",
    CLIENT_MASTER_ROUTE: "client-master/",
    CLIENT: "client",
    CLIENT_GROUP: "client-group",
    SEGMENT: "segment",
  },
};

export const COMMON_ROUTES = {
  ADD: "add",
  EDIT: "edit",
  LIST: "list",
};
