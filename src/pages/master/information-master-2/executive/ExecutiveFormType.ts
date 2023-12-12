import { Options } from "@shared/index";

export interface ExecutiveFormType {
  id?: string;
  executiveId: number;
  email: string;
  cityId: Options;
  stateId: Options;
  invoiceRequired: boolean;
  executive: string,
}
