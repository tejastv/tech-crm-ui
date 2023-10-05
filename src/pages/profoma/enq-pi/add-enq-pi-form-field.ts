import { FormFieldType, Note, ValidationType } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const CompanyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const YearValidtation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[0-9]{4}$/,
    message: "Invalid year format. Please enter a valid year (yyyy).",
  },
} as ValidationType;
const refnoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const SourceValidation = {
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
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[\w\s\d#.,\-\/]+$/,
    message: "Please use alphanumeric characters",
  },
} as ValidationType;

const telNoEnquiryValidation = {
  required: {
    value: true,
    message: "Please Enter Telephone Number",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message: "Invalid telephone number. Please use Number.",
  },
} as ValidationType;

const FaxNoEnquiryValidation = {
  required: {
    value: true,
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
    value: true,
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
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    message: "website URL e.g., http://www.example.com",
  },
} as ValidationType;

const ContactEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;

const DesignationEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "Designation should be up to 50 characters long",
  },
} as ValidationType;

const ZipEnquiryValidation = {
  required: {
    value: true,
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
    value: true,
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
    value: true,
    message: "Please select a {label}",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const NotesForAdjValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;
const instructionEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Adjust is invalid",
  },
} as ValidationType;
const AdjustEnqValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Adjust is invalid",
  },
} as ValidationType;
const ClientRefEnquiryValidation = {
  required: {
    value: true,
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
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const ClientIdEnquiryValidation = {
  required: {
    value: true,
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
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const DiscountEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;
const CommEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const CompanyIdValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const bankValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const cramountValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const cmieValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const rocstatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const recodsValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const recfinValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const gstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;

const fyearValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 max Chearcter",
  },
} as ValidationType;


// Option Section
const SourceEnquiryOption = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const cityEnquiryOptions = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const stateEnquiryOptions = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const countryEnquiryOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
// const crDayOptions = [
//   { value: "Bill on Actual Buyer", label: "Bill on Actual Buyer" },
// ];

// Right Field start
const enqTypeOption = [
  { value: "NEW", label: "NEW" },
  { value: "RENUAL", label: "RENUAL" },
];
// const executiveOptions = [
//   { value: "India", label: "India" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
const localsourceenquiryOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
// const clientIdOptions = [
//   { value: "India", label: "India" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
const ServiceOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const PrintStatuseOption = [
  { value: "Not Recived ", label: " Not Recived" },
  {
    value: "Recived",
    label: "Recived",
  },
];
const EnqStatusOptions = [
  { value: "1-Pending", label: "1-Pending" },
  { value: "2-Pending", label: "2-Pending" },
];

const svisitOptions = [
  { value: "in %", label: "in %" },
  { value: "Per Report", label: "Per Report" },
  { value: "NO Discount", label: "NO Discount" },
];
const actualbuyerOptions = [
  { value: "in %", label: "in %" },
  { value: "Per Report", label: "Per Report" },
  { value: "NO Discount", label: "NO Discount" },
];
const companyField: FormFieldType = createFormConfig(
  "company",
  "Company",
  "text",
  CompanyValidation,
  "Enter Company"
);
const yearField: FormFieldType = createFormConfig(
  "year",
  "Year",
  "year",
  YearValidtation,
  ""
);
const refnoField: FormFieldType = createFormConfig(
  "refno",
  "Ref No",
  "text",
  refnoValidation,
  "1"
);
const sourceField: FormFieldType = createFormConfig(
  "souce",
  "Source",
  "select",
  SourceValidation,
  "",
  SourceEnquiryOption
);

const givenaddressField: FormFieldType = createFormConfig(
  "address",
  "Given Address",
  "textarea",
  GivenaddressValidation,
  "Enter Address"
);
const telnoField: FormFieldType = createFormConfig(
  "telno",
  "Tel No.",
  "text",
  telNoEnquiryValidation,
  "Enter Tel No."
);
const faxnoField: FormFieldType = createFormConfig(
  "faxno",
  "Fax No.",
  "text",
  FaxNoEnquiryValidation,
  "Enter Fax No."
);
const emailField: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailEnquiryValidation,
  "Enter E-mail"
);
const websiteField: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteEnquiryValidation,
  "Enter WebSite"
);
const contactField: FormFieldType = createFormConfig(
  "contact",
  "Contact",
  "text",
  ContactEnquiryValidation,
  "Enter Contact"
);
const designationField: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationEnquiryValidation,
  "Enter Designation"
);
const cityField: FormFieldType = createFormConfig(
  "city",
  "City",
  "select",
  CityEnquiryValidation,
  "Select City",
  cityEnquiryOptions
);
const zipField: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipEnquiryValidation,
  "Enter Zip"
);
const stateField: FormFieldType = createFormConfig(
  "state",
  "State",
  "select",
  StateEnquiryValidation,
  "Select State",
  stateEnquiryOptions
);
const statecodeField: FormFieldType = createFormConfig(
  "state",
  "State Code",
  "text",
  StateEnquiryValidation,
  ""
);
const countryField: FormFieldType = createFormConfig(
  "country",
  "Country",
  "select",
  CountryEnquiryValidation,
  "Select Country",
  countryEnquiryOptions
);

// Right Side Fields
const blankField: FormFieldType = createFormConfig(
  "blank",
  "",
  "text",
  blankValidation,
  ""
);
const givennameField: FormFieldType = createFormConfig(
  "givenname",
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
const recdonField: FormFieldType = createFormConfig(
  "clientCurrencey",
  "Recd . On",
  "date",
  recdOnValidation,
  formattedDate
);

const enqtypeField: FormFieldType = createFormConfig(
  "enqtype",
  "Enq. Type",
  "select",
  EnqValidation,
  "",
  enqTypeOption
);
const localsourceField: FormFieldType = createFormConfig(
  "localsource",
  "Local Source",
  "select",
  localsourceenquiryValidation,
  "Select Local Source",
  localsourceenquiryOptions
);
const servicetypeField: FormFieldType = createFormConfig(
  "servicetype",
  "Service Type",
  "select",
  ServiceTypeValidation,
  "Select Service",
  ServiceOptions
);
const dueonField: FormFieldType = createFormConfig(
  "dueon",
  "Due On",
  "date",
  DueOnValidation,
  "date"
);
const printstatusField: FormFieldType = createFormConfig(
  "printstatus",
  "Print Status",
  "select",
  PrintStatusValidationValidation,
  "",
  PrintStatuseOption
);
const enqstatusField: FormFieldType = createFormConfig(
  "ennqstatus",
  "Enq. Status",
  "select",
  EnqStatusValidation,
  "",
  EnqStatusOptions
);

const svisitField: FormFieldType = createFormConfig(
  "svisit",
  "S.Visit ",
  "select",
  svisitValidation,
  "",
  svisitOptions
);
const notesforField: FormFieldType = createFormConfig(
  "notesforenquiry",
  "Notes for Enquiry ",
  "textarea",
  NotesforEnqValidation,
  "Notes For Enquiry"
);

const clientdetailsnote: Note = createNoteConfig(
  "Client Details"
);
const instructionField: FormFieldType = createFormConfig(
  "instructionenquiry",
  "Instruction ",
  "textarea",
  instructionEnquiryValidation,
  "Instruction"
);
const adjustField: FormFieldType = createFormConfig(
  "adjust",
  "Adjust",
  "text",
  AdjustEnqValidation,
  "Adjust"
);

const clientrefField: FormFieldType = createFormConfig(
  "clientrefenquiry",
  "Client Ref",
  "text",
  ClientRefEnquiryValidation,
  "Client Ref"
);
const clientField: FormFieldType = createFormConfig(
  "clientenquiry",
  "Client",
  "select",
  ClientEnquiryValidation,
  "Select Client"
);
const requestnoField: FormFieldType = createFormConfig(
  "requestnoenquiry",
  "Request No.",
  "text",
  RequestNoValidation,
  "Request No."
);
const clientIdField: FormFieldType = createFormConfig(
  "clientidenquiry",
  "Client Id",
  "text",
  ClientIdEnquiryValidation,
  "Client Id"
);

const priceField: FormFieldType = createFormConfig(
  "priceenquiry",
  "Price",
  "text",
  PriceeEnquiryEnquiryValidation,
  "Price"
);

const companyIdField: FormFieldType = createFormConfig(
  "companyId",
  "CompanyId",
  "text",
  CompanyIdValidation,
  ""
);
const bankField: FormFieldType = createFormConfig(
  "bank",
  "Bank",
  "text",
  bankValidation,
  ""
);

const cramountField: FormFieldType = createFormConfig(
  "cramount",
  "Cr.Amount",
  "text",
  cramountValidation,
  ""
);

const cmieField: FormFieldType = createFormConfig(
  "cmie",
  "CMIE",
  "text",
  cmieValidation,
  ""
);

const rocstatusField: FormFieldType = createFormConfig(
  "roc",
  "ROC Status ",
  "text",
  rocstatusValidation,
  ""
);

const recodsField: FormFieldType = createFormConfig(
  "recods",
  "Recods ",
  "text",
  recodsValidation,
  ""
);

const recfinField: FormFieldType = createFormConfig(
  "recfin",
  "Ref.Fin ",
  "text",
  recfinValidation,
  ""
);

const allField: FormFieldType = createFormConfig(
  "all",
  "All",
  "text",
  gstValidation,
  ""
);

const fyearField: FormFieldType = createFormConfig(
  "fyear",
  "F. Year",
  "text",
  fyearValidation,
  ""
);

const refnote: Note = createNoteConfig("Note: Ref. No is Auto");
const actualbuyeraddnote: Note = createNoteConfig("Add New Actual Buyer");

export const addEnqPiFormFields = {
  companyField,
  yearField,
  refnoField,
  sourceField,
  givenaddressField,
  stateField,
  statecodeField,
  countryField,
  telnoField,
  faxnoField,
  emailField,
  websiteField,
  contactField,
  designationField,
  cityField,
  zipField,
  refnote,


//   2nd Side 
  givennameField,//n
  blankField,
  allField,
  recdonField,
  servicetypeField,
  enqtypeField,//n
  priceField,
  localsourceField,
  dueonField,
  printstatusField,
  enqstatusField,
  svisitField,
  notesforField,
  fyearField,//n
  instructionField,
  adjustField,

//   Client Details
  clientrefField,
  clientField,
  requestnoField,
  clientIdField,
  companyIdField,
  bankField,
  cramountField,
  cmieField,
  rocstatusField,
  recodsField,
  recfinField,
  clientdetailsnote
};



