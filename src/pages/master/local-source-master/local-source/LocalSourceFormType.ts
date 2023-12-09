import { Options } from "@shared/index";

export interface LocalSourceFormType {
  id?: string;
  localSource: string;
  email: string;
  emailCc: string;
  currencyId: Options;
  countryId: Options;
}
