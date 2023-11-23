export const cleanupObject = (obj: any) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const cleanObj: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value !== "" && value !== null && value !== undefined) {
        cleanObj[key] = value;
      }
    }
  }

  return cleanObj;
};
