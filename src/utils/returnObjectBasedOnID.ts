import { selectOptionsMaker } from ".";

export const returnObjectBasedOnID = (
  array: Array<any>,
  arrayIdKey: string,
  whomToCompare: number,
  arrayValueKey: string,
  arrayLabelKey: string
) => {
  let foundObj;
  let foundArray: any = [];
  if (array && array.length > 0) {
    foundObj = array.find((data: any) => data[arrayIdKey] === whomToCompare);
    if (foundObj) {
      foundArray = selectOptionsMaker([foundObj], arrayValueKey, arrayLabelKey);
    }
  }
  return foundArray.length > 0 ? [foundArray[0]] : [];
};
