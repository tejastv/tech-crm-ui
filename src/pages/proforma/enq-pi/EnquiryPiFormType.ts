import { Options } from "@shared/index";

export interface EnquiryPiFormType {
  id?: string;
  refNo: string;
  bookNo: string;
  companyId: Options;
  recdDate: string;
  dueDate: string;
  serviceTypeId: Options;
  clientId: Options;
  clientRefNo: string;
  sourceId: Options;
  enqStatusId: Options;
  notes: string;
  pmtStatus: Options;
  creditAmount: string;
  reportDate: string;
  givenAddress: string;
  cityId: Options;
  zip: string;
  stateId: Options;
  countryId: Options;
  rockStatus: string;
  records: string;
  recFin: string;
  phone: string;
  fax: string;
  website: string;
  contactPerson: string;
  designation: string;
  financialYear: string;
  bankers: string;
  requestNo: string;
  instruction: string;
  // reportFilename: string; Not in Swagger
  reportPrice?: number;
  // reportComission: number; Not in Swagger
  // typeofEnquiry: Options; Not in Swagger
  // lineOfBusiness: string; Not in Swagger
  // noteForComission: string; Not in Swagger
  // industryId: Options; Not in Swagger
  // disPer: number; Not in Swagger
  // discount: number; Not in Swagger
  // adjustment: number; Not in Swagger
  // disType: string; Not in Swagger
  // actualBuyerId: Options; Not in Swagger
  // siteStatusId: Options; Not in Swagger
  // bulkEnquiryId: number; Not in Swagger
  // locked: string; Not in Swagger
  // givenName: string; Not in Swagger
  localSourceId: Options;
  fYear: Options;
  cmie: string;
  email: string;
  // clientIdDisable?: number; Not in Swagger
}
