export interface AddUpdateEnquiryType {
  id?: string;
  companyenquiry: string;
  financialYear: string;
  refNo: number;
  sourceenquiry: string;
  givenAddress: string;
  telnoenquiry: string;
  fax: string;
  email: string;
  website: string;
  phone: string;
  contactPerson:string;

  designation: string;
  cityId: string;
  zip: string;
  stateId: string;

  countryId: string;

  blank: string;

  bankers:string
  givenname: string;
  records: string;
  enqtype: string;
  localsourceenquiry: string;
  serviceTypeID: string;
  dueDate: string;
  printstatus: string;
  enqStatusID: string;
  svisit: string;
  notesforenquiry: string;
  notesforadj: string;
  instruction: string;
  adjustment:string;
  industryId:string;
  clientRefNo: string;
  clientID: string;
  requestNo: string;
  clientIdenquiry: string;
  actualBuyerId: string;
  disType:string;
  priceenquiry: string;
  disPer:string ;
  discount: string;
  reportComission: string;
  refnote: string;
  actualbuyeraddnote: string;
  discountcommissionnote: string;
  noteForComission:string;
  lineOfBusiness:string;
  typeofEnquiry:string;
  reportPrice:string;
  reportFilename:string;

}
