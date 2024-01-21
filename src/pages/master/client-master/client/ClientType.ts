export interface ClientType {
  executive: string;
  segmentName: string;
  currencyName: string;
  groupName: string;
  cityName: unknown;
  city: string;
  stateName: string;
  countryName: string;
  clientId: number;
  ourRefNo: string;
  clientName: string;
  address: string;
  cityId: any;
  zip: string;
  stateId: any;
  countryId: any;
  phone: string;
  fax: string;
  website: string;
  contactPerson: string;
  designation: string;
  currencyId: any;
  nickName: string;
  executiveId: any;
  osListPrInteger: string;
  monthlyInvoice: string;
  enteredBy: number;
  enteredDate: string;
  modifiedBy: number;
  modifiedDate: string;
  priorityId: number;
  instruction: string;
  groupId: any;
  disType: string;
  discount: number;
  toAdjust: number;
  balToAdjust: number;
  adjustPerEnq: number;
  individualReport: string;
  staxApplicable: string;
  remarks: string;
  adjustFromDate: string;
  segmentId: any;
  toAdjustPI: number;
  balToAdjustPI: number;
  adjustPerEnqPI: number;
  crDays: any;
  gstn: string;
  gstyn: string;
  billOnActualBuyer: string | boolean;
  autoSendOutstanding: string;
  locked: string;
  email: string;
  stateCode?: number;
}
