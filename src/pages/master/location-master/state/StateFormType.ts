import { Options } from "@shared/index";

export interface StateFormType {
  id?: string;
  state: string;
  countryId?: Options;
  stateCodeN: string;
  stateCodeA: string;
}
