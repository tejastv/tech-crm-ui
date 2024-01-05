const GET_ADD_CONTINENT = "location/continent";
const GET_ADD_COUNTRY = "location/country";
const GET_ADD_STATE = "location/state";
const GET_ADD_CITY = "location/city";
const GET_UPDATE_DELETE_CITY = "location/city/{id}";
const UPDATE_PRICE_LIST_FOR_GROUP = "priceListGroupWise/{id}";
const UPDATE_STANDARD_PRICE = "currency/{id}/std-prices";
const UPDATE_LOCALSOURCE_STANDARD_PRICE = "currency/{id}/ls/std-prices";
const GET_UPDATE_DELETE_CONTINENT = "location/continent/{id}";
const GET_UPDATE_DELETE_COUNTRY = "location/country/{id}";
const GET_UPDATE_DELETE_STATE = "location/state/{id}";

const GET_ADD_SEGMENT = "segment";
const GET_UPDATE_DELETE_SEGMENT = "segment/{id}";

const GET_ADD_EXECUTIVE = "utility/executive";
const GET_UPDATE_DELETE_EXECUTIVE = "utility/executive/{id}";

const GET_ADD_LOCALSOURCE = "localSource";
const GET_UPDATE_DELETE_LOCALSOURCE = "localSource/{id}";

const GET_ADD_CURRENCY = "utility/currency";
const GET_UPDATE_DELETE_CURRENCY = "utility/currency/{id}";
const GET_ADD_COMPANY_MASTER = "companyMaster";
const GET_UPDATE_DELETE_COMPANY_MASTER = "companyMaster/{id}";

const GET_ADD_FIN_YEAR = "utility/finYear";
const GET_UPDATE_DELETE_FIN_YEAR = "utility/finYear/{id}";

const GET_ADD_INDUSTRY = "utility/industry";
const GET_UPDATE_DELETE_INDUSTRY = "utility/industry/{id}";

const GET_ADD_ACTUAL_BUYER = "actual-buyer";
const GET_UPDATE_DELETE_ACTUAL_BUYER = "actual-buyer/{id}";

const GET_CITY_WISE_GROUP = "priceListGroupWise/getClientGroupByCity/{id}";
const GET_GROUP_WISE_CURRENCY = "priceListGroupWise/getCurrencyByGroup/{id}";

const GET_PRICE_LIST_STD_DATA = "priceListGroupWise/currency/{id}";
const GET_PRICE_LIST_DATA = "priceListGroupWise/getPriceByGroupId/{id}";

const GET_ADD_CALL_TYPE = "utility/callType";
const GET_UPDATE_DELETE_CALL_TYPE = "utility/callType/{id}";

const GET_ADD_PURPOSE_MASTER = "utility/purposeMaster";
const GET_UPDATE_DELETE_PURPOSE_MASTER = "utility/purposeMaster/{id}";

const GET_ADD_CREDIT_DAYS = "utility/creditPeriod";
const GET_UPDATE_DELETE_CREDIT_DAYS = "utility/creditPeriod/{id}";

const GET_ADD_SITE_STATUS = "utility/siteStatus";
const GET_UPDATE_DELETE_SITE_STATUS = "utility/siteStatus/{id}";

const GET_ADD_USER = "user";
const GET_UPDATE_DELETE_USER = "user/{id}";
const GET_USER_WISE_RIGHTS_MENU = "user/{id}/menu";
const POST_USER_WISE_RIGHTS_MENU = "user/{id}/menu/right";
const GET_ALL_RIGHTS_MENU = "user/menu";

const GET_ADD_PAYMENTMODE = "utility/paymentMode";
const GET_UPDATE_DELETE_PAYMENTMODE = "utility/paymentMode/{id}";

const GET_ADD_SUPPLIER_MASTER = "supplierMaster";
const GET_UPDATE_DELETE_SUPPLIER_MASTER = "supplierMaster/{id}";

const GET_ADD_BANKMASTER_DRAWN = "utility/bankMaster";
const GET_UPDATE_DELETE_BANKMASTER_DRAWN = "utility/bankMaster/{id}";

const GET_ADD_BANKMASTER_DEPOSIT = "utility/bankDetails";
const GET_UPDATE_DELETE_BANKMASTER_DEPOSIT = "utility/bankDetails/{id}";

// Std Price
const GET_UPDATE_DELETE_STDPRICE = "currency/{id}/ls/std-prices";
const GET_UPDATE_DELETE_STDPRICE_CLIENTS = "currency/{id}/std-prices";
const GET_GROUP_WISE_PRICE = "group/{id}/prices";
const CLIENT_WISE_PRICE = "client/{id}/prices";
const GET_CLIENT_WISE_CURRENCY_AND_GROUP =
  "priceListForClient/getCurrencyAndGroup/{id}";
const GET_CLIENT_BY_CITY_ID = "client";

const GET_ADD_CLIENT_GROUP = "clientGroup";
const GET_UPDATE_DELETE_CLIENT_GROUP = "clientGroup/{id}";
const UPDATE_CLIENT_GROUP =
  "clientGroup/{ClientGroupId}/clintGroupIdToMove/{clintGroupIdToMove}";

const GET_ADD_SOURCE = "utility/sourceMaster";
const GET_UPDATE_DELETE_SOURCE = "utility/sourceMaster/{id}";

const GET_LAST_FIN_YEAR = "utility/finYear/lastFinYear";

const GET_ADD_CLIENT = "client";
const GET_UPDATE_DELETE_CLIENT = "client/{id}";
const GET_CLIENT_GROUP_BASED_ON_ID = "client/clientGroup/{id}";
const GET_CITY_WISE_CLIENT_GROUP = "client/clientGroup/city/{id}";

// Transaction Master

const GET_ADD_ALL_ENQUIRY = "transaction/enquiries";
const GET_UPDATE_DELETE_ALL_ENQUIRY = "transaction/enquiries/{id}";
const GET_ADD_ALL_ENQUIRY_SEARCH = "transaction/enquiries";
const GET_PRICE =
  "client/{client_id}/country/{country_id}/serviceType/{serviceTypeId}";

const GET_ADD_SERVICETYPE = "transaction/serviceType";
const GET_ADD_ENQTYPE = "transaction/enquiryStatus";
const GET_ADD_ENQSTATUS = "transaction/enquiryStatus";
const GET_ADD_REFNO = "transaction/refNo";

// Proforma
const GET_ADD_ENQUIRY_PI = "transaction/enquiries-pi";
const UPDATE_DELETE_ENQUIRY_PI = "transaction/enquiries-pi/{id}";

// Receipt
const GET_RECEIPT = "transaction/{fyear}/{invoice_no}/receipts";
const ADD_UPDATE_DELETE_RECEIPT =
  "transaction/clients/{clientId}/{fYear}/{invoiceNo}/receipts";

const GET_INVOICES = "transaction/invoices";
const GET_CALCULATED_DATA_BASED_ON_ENQUIRIES =
  "transaction/client/{clientId}/invoices/preview";
const SAVE_INVOICE = "transaction/client/{clientId}/invoices";

export const apiUrls = {
  GET_ADD_CONTINENT,
  GET_ADD_COUNTRY,
  GET_ADD_STATE,
  GET_ADD_CITY,
  GET_UPDATE_DELETE_CITY,
  GET_UPDATE_DELETE_CONTINENT,
  GET_UPDATE_DELETE_COUNTRY,
  GET_UPDATE_DELETE_STATE,
  GET_ADD_SEGMENT,
  GET_UPDATE_DELETE_SEGMENT,
  GET_ADD_PAYMENTMODE,
  GET_UPDATE_DELETE_PAYMENTMODE,
  GET_ADD_EXECUTIVE,
  GET_UPDATE_DELETE_EXECUTIVE,
  GET_ADD_LOCALSOURCE,
  GET_UPDATE_DELETE_LOCALSOURCE,
  GET_ADD_CURRENCY,
  GET_UPDATE_DELETE_CURRENCY,
  GET_ADD_COMPANY_MASTER,
  GET_UPDATE_DELETE_COMPANY_MASTER,
  GET_ADD_FIN_YEAR,
  GET_UPDATE_DELETE_FIN_YEAR,
  GET_ADD_INDUSTRY,
  GET_UPDATE_DELETE_INDUSTRY,
  GET_ADD_CALL_TYPE,
  GET_UPDATE_DELETE_CALL_TYPE,
  GET_ADD_PURPOSE_MASTER,
  GET_UPDATE_DELETE_PURPOSE_MASTER,
  GET_ADD_CREDIT_DAYS,
  GET_UPDATE_DELETE_CREDIT_DAYS,
  GET_ADD_SITE_STATUS,
  GET_UPDATE_DELETE_SITE_STATUS,
  GET_ADD_USER,
  GET_UPDATE_DELETE_USER,
  GET_USER_WISE_RIGHTS_MENU,
  POST_USER_WISE_RIGHTS_MENU,
  GET_ALL_RIGHTS_MENU,
  GET_ADD_BANKMASTER_DRAWN,
  GET_UPDATE_DELETE_BANKMASTER_DRAWN,
  GET_ADD_BANKMASTER_DEPOSIT,
  GET_UPDATE_DELETE_BANKMASTER_DEPOSIT,
  GET_ADD_SUPPLIER_MASTER,
  GET_UPDATE_DELETE_SUPPLIER_MASTER,
  GET_UPDATE_DELETE_STDPRICE,
  GET_UPDATE_DELETE_STDPRICE_CLIENTS,
  GET_ADD_CLIENT_GROUP,
  GET_UPDATE_DELETE_CLIENT_GROUP,
  GET_ADD_SOURCE,
  GET_UPDATE_DELETE_SOURCE,
  // =========

  // Std Price
  GET_LAST_FIN_YEAR,
  GET_ADD_CLIENT,
  GET_UPDATE_DELETE_CLIENT,
  GET_CLIENT_GROUP_BASED_ON_ID,
  UPDATE_CLIENT_GROUP,
  GET_CITY_WISE_GROUP,
  GET_GROUP_WISE_CURRENCY,
  GET_PRICE_LIST_STD_DATA,
  GET_PRICE_LIST_DATA,
  GET_ADD_ACTUAL_BUYER,
  GET_UPDATE_DELETE_ACTUAL_BUYER,
  GET_ADD_ALL_ENQUIRY,
  GET_UPDATE_DELETE_ALL_ENQUIRY,
  GET_ADD_SERVICETYPE,
  GET_ADD_ENQTYPE,
  GET_ADD_REFNO,
  GET_ADD_ENQSTATUS,
  GET_CLIENT_BY_CITY_ID,
  GET_CLIENT_WISE_CURRENCY_AND_GROUP,
  GET_ADD_ALL_ENQUIRY_SEARCH,
  GET_PRICE,
  UPDATE_PRICE_LIST_FOR_GROUP,
  UPDATE_STANDARD_PRICE,
  UPDATE_LOCALSOURCE_STANDARD_PRICE,
  CLIENT_WISE_PRICE,
  GET_GROUP_WISE_PRICE,
  GET_CITY_WISE_CLIENT_GROUP,

  GET_ADD_ENQUIRY_PI,
  UPDATE_DELETE_ENQUIRY_PI,

  GET_RECEIPT,
  ADD_UPDATE_DELETE_RECEIPT,

  GET_INVOICES,
  GET_CALCULATED_DATA_BASED_ON_ENQUIRIES,
  SAVE_INVOICE,
};
