export const returnFormatedObjectElseEmptyArray = (
  condition: any,
  data: any,
  valueKey: string,
  lebelKey: string
): any | Array<any> => {
  return condition ? { label: data[lebelKey], value: data[valueKey] } : [];
};
