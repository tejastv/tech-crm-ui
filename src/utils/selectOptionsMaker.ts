import { Generic } from "@shared/index";

export function selectOptionsMaker(
  array: Array<Generic>,
  value: string,
  label: string
) {
  return array.map((option: Generic) => ({
    value: option[value],
    label: option[label],
  }));
}
