import { Options } from "@shared/index";

export interface ActualBuyerFormType {
  id?: string;
  partyId: number;
  partyName: string;
  partyAddress: string;
  cityId: Options;
  pin: string;
  stateId: Options;
  countryId: Options;
  telNo: string;
  faxNo: string;
  email: string;
  website: string;
  personResponsible: string;
  personDesg: string;
  refNo: string;
  active: true;
  revisionCntr: number;
  gstn: string;
  clientId: Options;
  locked: string;
}
