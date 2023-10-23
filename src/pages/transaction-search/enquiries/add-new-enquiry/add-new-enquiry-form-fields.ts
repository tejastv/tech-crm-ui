import { FormFieldType, Note, ValidationType } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const CompanyEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const YearEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[0-9]{4}$/,
    message: "Invalid year format. Please enter a valid year (yyyy).",
  },
} as ValidationType;
const refnoEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const SourceEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    message: "Select {label}",
  },
} as ValidationType;

const GivenaddressValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[\w\s\d#.,\-\/]+$/,
    message: "Please use alphanumeric characters",
  },
} as ValidationType;

const telNoEnquiryValidation = {
  required: {
    value: false,
    message: "Please Enter Telephone Number",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message: "Invalid telephone number. Please use Number.",
  },
} as ValidationType;

const FaxNoEnquiryValidation = {
  required: {
    value: false,
    message: "Please Enter Fax number",
  },
  pattern: {
    value: /^\+?[0-9\s\-()+.]*$/,
    message:
      "Invalid fax number. Please use a valid format like +123 456 7890 or (123) 456-7890.",
  },
} as ValidationType;

const EmailEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please Include an '@' and .com/in in the email address.",
  },
} as ValidationType;

const WebsiteEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    message: "website URL e.g., http://www.example.com",
  },
} as ValidationType;

const ContactEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;

const DesignationEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "Designation should be up to 50 characters long",
  },
} as ValidationType;

const ZipEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\d{6}$/,
    message: "Invalid ZIP code,Please enter a 6-digit number.",
  },
} as ValidationType;

const CityEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const StateEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const CountryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

// Right Field validation
const blankValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const GivenNameEnquiryValidation = {
  required: {
    value: true,
    message: "Given Name field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Given Name should not exceed 30 characters",
  },
} as ValidationType;
const recdOnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  },
} as ValidationType;
const EnqValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;
const localsourceenquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const ServiceTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const DueOnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  },
} as ValidationType;
const PrintStatusValidationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const NotesforEnqValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "50 characters max",
  },
} as ValidationType;
const EnqStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const svisitValidation = {
  required: {
    value: false,
    message: "Please select a {label}",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const NotesForAdjValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;
const instructionEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Adjust is invalid",
  },
} as ValidationType;
const AdjustEnqValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Adjust is invalid",
  },
} as ValidationType;
const ClientRefEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 charaters Max",
  },
} as ValidationType;
const ClientEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Select {label}",
  },
} as ValidationType;
const RequestNoValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const ClientIdEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const ActualBuyerEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Select {label}",
  },
} as ValidationType;

const PriceeEnquiryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const DisEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const DiscountEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const CommEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const companyenquiry: FormFieldType = createFormConfig(
  "companyID",
  "Company",
  "select",
  CompanyEnquiry,
  "Select Company",
  []
);
const yearenquiry: FormFieldType = createFormConfig(
  "financialYear",
  "Year",
  "year",
  YearEnquiry,
  "Select Year"
);
const refnoenquiry: FormFieldType = createFormConfig(
  "refNo",
  "Ref No",
  "text",
  refnoEnquiry,
  "",
  [],
  true
);
const sourceenquiry: FormFieldType = createFormConfig(
  "sourceID",
  "Source",
  "select",
  SourceEnquiry,
  "Select Source",
  []
);

const givenaddressEnquiry: FormFieldType = createFormConfig(
  "givenAddress",
  "Address",
  "textarea",
  GivenaddressValidation,
  "Enter Address"
);
const telnoenquiry: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "text",
  telNoEnquiryValidation,
  "Enter Tel No."
);
const faxnoenquiry: FormFieldType = createFormConfig(
  "fax",
  "Fax No.",
  "text",
  FaxNoEnquiryValidation,
  "Enter Fax No."
);
const emailenquiry: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailEnquiryValidation,
  "Enter E-mail"
);
const websiteenquiry: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteEnquiryValidation,
  "Enter WebSite"
);
const contactenquiry: FormFieldType = createFormConfig(
  "contactPerson",
  "Contact",
  "text",
  ContactEnquiryValidation,
  "Enter Contact"
);
const designationenquiry: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationEnquiryValidation,
  "Enter Designation"
);
const cityenquiry: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  CityEnquiryValidation,
  "Select City",
  []
);
const zipenquiry: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipEnquiryValidation,
  "Enter Zip"
);
const stateenquiry: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  StateEnquiryValidation,
  "Select State",
  []
);
const statecodeenquiry: FormFieldType = createFormConfig(
  "state",
  "State Code",
  "text",
  StateEnquiryValidation,
  ""
);
const countryenquiry: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  CountryEnquiryValidation,
  "Select Country",
  []
);

// Right Side Fields
const blankenquiry: FormFieldType = createFormConfig(
  "blank",
  "",
  "text",
  blankValidation,
  ""
);
const givenname: FormFieldType = createFormConfig(
  "givenName",
  "Given Name",
  "text",
  GivenNameEnquiryValidation,
  "Given Name"
);
const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const recdon: FormFieldType = createFormConfig(
  "recdDate",
  "Enq. Date/Recd. On",
  "date",
  recdOnValidation,
  formattedDate
);

const enqType = [
  {
    label: "NEW",
    value: "true",
  },
  {
    label: "RENEWAL",
    value: "false",
  },
];

const enqtype: FormFieldType = createFormConfig(
  "typeofEnquiry",
  "Enq. Type",
  "select",
  EnqValidation, // Replace with your validation function
  "",
  enqType,
  true // Default value set to "NEW"
);

const localsourceenquiry: FormFieldType = createFormConfig(
  "localSourceId",
  "Local Source",
  "select",
  localsourceenquiryValidation,
  "Select Local Source",
  []
);
const servicetype: FormFieldType = createFormConfig(
  "serviceTypeID",
  "Service Type",
  "select",
  ServiceTypeValidation,
  "Select Service",
  []
);
const dueon: FormFieldType = createFormConfig(
  "dueDate",
  "Due On",
  "date",
  DueOnValidation,
  "date"
);
const printstatus: FormFieldType = createFormConfig(
  "pmtstatus",
  "Print Status",
  "select",
  PrintStatusValidationValidation,
  "Select Print Status",
  [
    { value: "Not Received", label: "Not Received" },
    { label: "Received", value: "Received" },
  ]
);
const enqstatus: FormFieldType = createFormConfig(
  "enqStatusID",
  "Enq. Status",
  "select",
  EnqStatusValidation,
  "Select Enq. Status",
  []
);

const svisit: FormFieldType = createFormConfig(
  "svisit",
  "S.Visit",
  "select",
  svisitValidation,
  "Select S.Visit",
  [
    { value: "0", label: "NA" },
    { value: "1", label: "Pending to Visit" },
    { value: "2", label: "Visited" },
  ]
);
const notesforenquiry: FormFieldType = createFormConfig(
  "notes",
  "Notes for Enquiry ",
  "textarea",
  NotesforEnqValidation,
  "Notes For Enquiry"
);
const notesforadj: FormFieldType = createFormConfig(
  "noteForComission",
  "Notes for Comma/Adj",
  "text",
  NotesForAdjValidation,
  "Notes For Comma/Adj "
);
const instructionenquiry: FormFieldType = createFormConfig(
  "instruction",
  "Instruction ",
  "text",
  instructionEnquiryValidation,
  "Instruction"
);
const adjustenquiry: FormFieldType = createFormConfig(
  "adjustment",
  "Adjust",
  "text",
  AdjustEnqValidation,
  "Adjust",
  [],
  true
);

const clientrefenquiry: FormFieldType = createFormConfig(
  "clientRefNo",
  "Client Ref",
  "text",
  ClientRefEnquiryValidation,
  "Client Ref"
);
const clientenquiry: FormFieldType = createFormConfig(
  "clientID",
  "Client",
  "select",
  ClientEnquiryValidation,
  "Select Client"
);
const requestnoenquiry: FormFieldType = createFormConfig(
  "requestNo",
  "Request No.",
  "text",
  RequestNoValidation,
  "Request No."
);
const clientIdenquiry: FormFieldType = createFormConfig(
  "clientidenquiry",
  "Client Id",
  "text",
  ClientIdEnquiryValidation,
  "Client Id",
  [],
  true
);
const actualbureyenquiry: FormFieldType = createFormConfig(
  "actualBuyerId",
  "Actual Buyer",
  "select",
  ActualBuyerEnquiryValidation,
  "Actual Buyer",
  [{ label: "Direct", value: "1" }]
);
const priceenquiry: FormFieldType = createFormConfig(
  "reportPrice",
  "Price",
  "text",
  PriceeEnquiryEnquiryValidation,
  "Price",
  []
);
const disenquiry: FormFieldType = createFormConfig(
  "disPer",
  "Dis.%",
  "text",
  DisEnquiryValidation,
  "Dis.%",
  [],
  true
);
const discountenquiry: FormFieldType = createFormConfig(
  "discount",
  "Discount",
  "text",
  DiscountEnquiryValidation,
  "Discount",
  [],
  true
);
const commenquiry: FormFieldType = createFormConfig(
  "reportComission",
  "Comm.",
  "text",
  CommEnquiryValidation,
  "Comm."
);

const refnote: Note = createNoteConfig("Note: Ref. No is Auto");
const actualbuyeraddnote: Note = createNoteConfig("Add New Actual Buyer");
const discountcommissionnote: Note = createNoteConfig(
  "Discount / Commission Details"
);
const discounttypenote: Note = createNoteConfig(
  "Discount Type - | % of Discount - | Discounted Value -"
);

export const addEnquiryFormFields = {
  companyenquiry,
  yearenquiry,
  refnoenquiry,
  sourceenquiry,
  givenaddressEnquiry,
  telnoenquiry,
  faxnoenquiry,
  emailenquiry,
  websiteenquiry,
  contactenquiry,
  designationenquiry,
  cityenquiry,
  zipenquiry,
  stateenquiry,
  statecodeenquiry,
  countryenquiry,
  givenname,
  blankenquiry,
  recdon,
  enqtype,
  localsourceenquiry,
  servicetype,
  dueon,
  printstatus,
  enqstatus,
  svisit,
  notesforenquiry,
  notesforadj,
  instructionenquiry,
  adjustenquiry,
  clientrefenquiry,
  clientenquiry,
  requestnoenquiry,
  clientIdenquiry,
  actualbureyenquiry,
  priceenquiry,
  disenquiry,
  discountenquiry,
  commenquiry,
  refnote,
  actualbuyeraddnote,
  discountcommissionnote,
  discounttypenote,
};
