const GET_ADD_CONTINENT = "v1/location/continent";
const GET_ADD_COUNTRY = "v1/location/country";
const GET_ADD_STATE = "v1/location/state";
const GET_ADD_CITY = "v1/location/city";
const GET_UPDATE_DELETE_CITY = "v1/location/city/{id}";
const GET_UPDATE_DELETE_CONTINENT = "v1/location/continent/{id}";
const GET_UPDATE_DELETE_COUNTRY = "v1/location/country/{id}";
const GET_UPDATE_DELETE_STATE = "v1/location/state/{id}";

const GET_ADD_SEGMENT = "v1/entity/segment";
const GET_UPDATE_DELETE_SEGMENT = "v1/entity/segment/{id}";

const GET_ADD_EXECUTIVE = "v1/utility/executive";
const GET_UPDATE_DELETE_EXECUTIVE = "v1/utility/executive/{id}";

const GET_ADD_LOCALSOURCE = "v1/entity/localSource";
const GET_UPDATE_DELETE_LOCALSOURCE = "v1/entity/localSource/{id}";

const GET_ADD_CURRENCY = "v1/utility/currency";
const GET_UPDATE_DELETE_CURRENCY = "v1/utility/currency/{id}";
const GET_ADD_COMPANY_MASTER = "v1/entity/companyMaster";
const GET_UPDATE_DELETE_COMPANY_MASTER = "v1/entity/companyMaster/{id}";

const GET_ADD_FIN_YEAR = "v1/utility/finYear";
const GET_UPDATE_DELETE_FIN_YEAR = "v1/utility/finYear/{id}";

const GET_ADD_INDUSTRY = "v1/utility/industry";
const GET_UPDATE_DELETE_INDUSTRY = "v1/utility/industry/{id}";

const GET_ADD_ACTUAL_BUYER = "v1/entity/actualBuyer";
const GET_UPDATE_DELETE_ACTUAL_BUYER = "v1/entity/actualBuyer/{id}";

const GET_CITY_WISE_GROUP =
  "v1/entity/priceListGroupWise/getClientGroupByCity/{id}";
const GET_GROUP_WISE_CURRENCY =
  "v1/entity/priceListGroupWise/getCurrencyByGroup/{id}";

const GET_PRICE_LIST_STD_DATA = "v1/entity/priceListGroupWise/currency/{id}";
const GET_PRICE_LIST_DATA = "v1/entity/priceListGroupWise/getPriceByGroupId/{id}";

const GET_ADD_CALL_TYPE = "v1/utility/callType";
const GET_UPDATE_DELETE_CALL_TYPE = "v1/utility/callType/{id}";

const GET_ADD_PURPOSE_MASTER = "v1/utility/purposeMaster";
const GET_UPDATE_DELETE_PURPOSE_MASTER = "v1/utility/purposeMaster/{id}";

const GET_ADD_CREDIT_DAYS = "v1/utility/creditPeriod";
const GET_UPDATE_DELETE_CREDIT_DAYS = "v1/utility/creditPeriod/{id}";

const GET_ADD_SITE_STATUS = "v1/utility/siteStatus";
const GET_UPDATE_DELETE_SITE_STATUS = "v1/utility/siteStatus/{id}";

const GET_ADD_USER = "v1/user";
const GET_UPDATE_DELETE_USER = "v1/user/{id}";

const GET_ADD_PAYMENTMODE = "v1/utility/paymentMode";
const GET_UPDATE_DELETE_PAYMENTMODE = "v1/utility/paymentMode/{id}";

const GET_ADD_SUPPLIER_MASTER = "v1/entity/supplierMaster";
const GET_UPDATE_DELETE_SUPPLIER_MASTER = "v1/entity/supplierMaster/{id}";

const GET_ADD_BANKMASTER_DRAWN = "v1/utility/bankMaster";
const GET_UPDATE_DELETE_BANKMASTER_DRAWN = "v1/utility/bankMaster/{id}";

const GET_ADD_BANKMASTER_DEPOSIT = "v1/utility/bankDetails";
const GET_UPDATE_DELETE_BANKMASTER_DEPOSIT = "v1/utility/bankDetails/{id}";

// Std Price
const GET_UPDATE_DELETE_STDPRICE = "v1/entity/stdPriceListForLocalSource/{id}";
const GET_UPDATE_DELETE_STDPRICE_CLIENTS = "v1/entity/stdPriceListForClients/{id}";
const GET_CLIENT_WISE_CURRENCY_AND_GROUP =
  "v1/entity/priceListForClient/getCurrencyAndGroup/{id}";
const GET_CLIENT_BY_CITY_ID = "v1/entity/priceListForClient/city/{id}";

const GET_ADD_CLIENT_GROUP = "v1/entity/clientGroup";
const GET_UPDATE_DELETE_CLIENT_GROUP = "v1/entity/clientGroup/{id}";
const UPDATE_CLIENT_GROUP =
  "v1/entity/clientGroup/{ClientGroupId}/clintGroupIdToMove/{clintGroupIdToMove}";

const GET_ADD_SOURCE = "v1/utility/sourceMaster";
const GET_UPDATE_DELETE_SOURCE = "v1/utility/sourceMaster/{id}";

const GET_LAST_FIN_YEAR = "v1/utility/finYear/lastFinYear";

const GET_ADD_CLIENT = "v1/entity/client";
const GET_UPDATE_DELETE_CLIENT = "v1/entity/client/{id}";
const GET_CLIENT_GROUP_BASED_ON_ID = "v1/entity/client/clientGroup/{id}";

// Transaction Master

const GET_ADD_ALL_ENQUIRY = "v1/transaction/enquiry";
const GET_UPDATE_DELETE_ALL_ENQUIRY = "v1/transaction/enquiry/{id}";
const GET_ADD_ALL_ENQUIRY_SEARCH = "v1/transaction/allEnquiryAndSearch";
const GET_PRICE =
  "v1/entity/priceListForClient/client/{client_id}/country/{country_id}/serviceType/{serviceTypeId}";

const GET_ADD_SERVICETYPE = "v1/transaction/serviceType";
const GET_ADD_ENQTYPE = "v1/transaction/enquiryStatus";
const GET_ADD_ENQSTATUS = "v1/transaction/enquiryStatus";
const GET_ADD_REFNO = "v1/transaction/getRefNo";

// Proforma
const GET_ENQUIRY_PI = "v1/transaction/enquiryPi";
const UPDATE_DELETE_ENQUIRY_PI = "v1/transaction/enquiryPi/{id}";

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

  // Proforma
  GET_ENQUIRY_PI,
  UPDATE_DELETE_ENQUIRY_PI
};
