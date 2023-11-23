export interface AddUpdateClientGroupType {
  id?: number;
  clintGroupIdToMove?: number;
  clientIds: Array<any>;
  groupName: string;
  showBOBDetails: boolean;
  showUnionBankDetails: boolean;
  showBOIDetails: boolean;
  showSouthIndianBankDetails: boolean;
  showIOBDetails: boolean;
  showIDBIDetails: boolean;
  showSBIDetails: boolean;
}
