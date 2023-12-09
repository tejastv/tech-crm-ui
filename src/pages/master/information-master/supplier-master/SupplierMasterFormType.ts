import { Options } from "@shared/index";

export interface SupplierMasterFormType {
  id?: number;
  address: string;
  zip: string;
  fax: string;
  supplierId: number;
  supplierName: string;
  cityId: Options;
  stateId: Options;
  countryId: Options;
  email: string;
  currencyId: number;
  nickName: string;
  website: string;
  phone: string;
  contactPerson: string;
  designation: string;
  ourRefNo: string;
}
