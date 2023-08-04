/**
 * Set the data according to given parameter
 * @param  {string} module
 * @param  {string} key
 * @param  {any} data
 */
export function setLocalStorageData(module: string, key: string, data: any) {
  // this.removeSessionData(module , key);
  const moduleData: string | null = localStorage.getItem(module);
  let modObj = moduleData ? JSON.parse(moduleData) : {};
  if (modObj == undefined) {
    modObj = {};
  }
  modObj[key] = data;
  localStorage.setItem(module, JSON.stringify(modObj));
}
/**
 * Retrive module from localStorage
 * @param  {string} module
 * @param  {string} key
 */
export function getLocalStorageData(module: string, key: string) {
  const moduleData: string | null = localStorage.getItem(module);
  let modObj = moduleData ? JSON.parse(moduleData) : {};
  if (modObj == undefined) {
    modObj = {};
    localStorage.setItem(module, JSON.stringify(modObj));
  }
  if (key != undefined) return modObj[key];
  return modObj;
}
/**
 * Retrive module from localStorage
 * @param  {string} module
 * @param  {string} key
 */
export function getWholeStorageData(module: string) {
  const moduleData: string | null = localStorage.getItem(module);
  let modObj = moduleData ? JSON.parse(moduleData) : {};
  if (modObj == undefined) {
    modObj = {};
    localStorage.setItem(module, JSON.stringify(modObj));
  }
  return modObj;
}
/**
 * Remove module from localStorage
 * @param  {string} module
 * @param  {string} key
 */
export function removeLocalStorageData(module: string, key: string) {
  if (key != undefined) {
    const moduleData: string | null = localStorage.getItem(module);
    let modObj = moduleData ? JSON.parse(moduleData) : {};
    if (modObj != undefined) {
      delete modObj[key];
      localStorage.setItem(module, JSON.stringify(modObj));
      return;
    }
  }
  localStorage.removeItem(module);
}
