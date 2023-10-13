import { Generic } from "@shared/index";

export function selectOptionsMaker(
  array: Array<Generic>,
  value: string,
  label: string,
  otherDataAllowed?: boolean
) {
  return array.map((option: Generic) => ({
    value: option[value],
    label: option[label],
    data: otherDataAllowed && option,
  }));
}
