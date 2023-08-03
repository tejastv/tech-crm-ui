export function selectOptionsMaker(
  array: Array<any>,
  value: string,
  label: string
) {
  return array.map((option) => ({
    value: option[value],
    label: option[label],
  }));
}
