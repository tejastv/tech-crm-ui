/**
 * Set the data according to given parameter
 * @param  {string} module
 * @param  {string} key
 * @param  {any} data
 */
export function setSessionData(module: string, key: string, data: any) {
  // this.removeSessionData(module , key);
  const moduleData: string | null = sessionStorage.getItem(module);
  let modObj = moduleData ? JSON.parse(moduleData) : {};
  if (modObj == undefined) {
    modObj = {};
  }
  modObj[key] = data;
  sessionStorage.setItem(module, JSON.stringify(modObj));
}
/**
 * Retrive module from sessionStorage
 * @param  {string} module
 * @param  {string} key
 */
export function getSessionData(module: string, key: string) {
  const moduleData: string | null = sessionStorage.getItem(module);
  let modObj = moduleData ? JSON.parse(moduleData) : {};
  if (modObj == undefined) {
    modObj = {};
    sessionStorage.setItem(module, JSON.stringify(modObj));
  }
  if (key != undefined) return modObj[key];
  return modObj;
}
/**
 * Remove module from sessionStorage
 * @param  {string} module
 * @param  {string} key
 */
export function removeSessionData(module: string, key: string) {
  if (key != undefined) {
    const moduleData: string | null = sessionStorage.getItem(module);
    let modObj = moduleData ? JSON.parse(moduleData) : {};
    if (modObj != undefined) {
      delete modObj[key];
      sessionStorage.setItem(module, JSON.stringify(modObj));
      return;
    }
  }
  sessionStorage.removeItem(module);
}
