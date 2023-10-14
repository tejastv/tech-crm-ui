import { Generic } from "@shared/index";

export function selectOptionsMaker(
  array: Array<Generic>,
  value: string,
  label: string,
  otherDataAllowed?: boolean
) {
  return array.map((option: Generic) => {
    const result: any = {
      value: option[value],
      label: option[label],
    };

    if (otherDataAllowed) {
      result["data"] = option;
    }

    return result;
  });
}
