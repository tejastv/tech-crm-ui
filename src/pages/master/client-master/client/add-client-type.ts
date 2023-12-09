export interface AddUpdateClientType {
  id?: number;
  clientId: number;
  ourRefNo: string;
  clientName: string;
  address: string;
  cityId: number;
  zip: string;
  stateId: any;
  countryId: any;
  phone: string;
  fax: string;
  website: string;
  contactPerson: string;
  designation: string;
  currencyId: number;
  nickName: string;
  executiveId: number;
  osListPrInteger: string;
  monthlyInvoice: string;
  enteredBy: number;
  enteredDate: string;
  modifiedBy: number;
  modifiedDate: string;
  priorityId: number;
  instruction: string;
  groupId: number;
  disType: string;
  discount: number;
  toAdjust: number;
  balToAdjust: number;
  adjustPerEnq: number;
  individualReport: string;
  staxApplicable: string;
  remarks: string;
  adjustFromDate: string;
  segmentId: number;
  toAdjustPI: number;
  balToAdjustPI: number;
  adjustPerEnqPI: number;
  crDays: number;
  gstn: string;
  gstYN: string;
  billONActualBuyer: string | boolean;
  autoSendOutstanding: string;
  locked: string;
  email: string;
  stateCode: number;
}
