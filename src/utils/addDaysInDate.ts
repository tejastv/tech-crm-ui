export const addDaysInDate = (date: any, days: any) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return new Date(result).toISOString().split("T")[0];
};
