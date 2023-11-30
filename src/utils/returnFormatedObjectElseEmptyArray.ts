import { Options } from "@shared/index";

export const returnFormatedObjectElseEmptyArray = (
  condition: any,
  data: any,
  valueKey: string,
  lebelKey: string
): Array<Options> => {
  return condition ? [{ label: data[lebelKey], value: data[valueKey] }] : [];
};
