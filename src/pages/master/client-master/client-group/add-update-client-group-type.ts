export interface AddUpdateClientGroupType {
  id?: number;
  clintId: Array<any>;
  ClientGroupDto: {
    groupName: string;
    showBOBDetails: boolean;
    showUnionBankDetails: boolean;
    showBOIDetails: boolean;
    showSouthIndianBankDetails: boolean;
    showIOBDetails: boolean;
    showIDBIDetails: boolean;
    showSBIDetails: boolean;
  };
}
