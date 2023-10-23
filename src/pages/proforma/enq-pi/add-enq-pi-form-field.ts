import { FormFieldType, Note, ValidationType } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const CompanyValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const yearValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[0-9]{4}$/,
    message: "Invalid year format. Please enter a valid year (yyyy).",
  },
} as ValidationType;
const refNoValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const sourceValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    message: "Select {label}",
  },
} as ValidationType;

const givenAddressValidation = {
  required: {
    value: true,
    message: "{label} field is required",
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

const faxNoEnquiryValidation = {
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

const emailEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please Include an '@' and .com/in in the email address.",
  },
} as ValidationType;

const websiteEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    message: "website URL e.g., http://www.example.com",
  },
} as ValidationType;

const contactEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;

const designationEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 50,
    message: "Designation should be up to 50 characters long",
  },
} as ValidationType;

const zipEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d{6}$/,
    message: "Invalid ZIP code,Please enter a 6-digit number.",
  },
} as ValidationType;

const cityEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const stateEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const countryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
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
    message: "{label} field is required",
  },
} as ValidationType;
const givenNameEnquiryValidation = {
  required: {
    value: true,
    message: "Given Name field is required",
  },
  maxLength: {
    value: 30,
    message: "Given Name should not exceed 30 characters",
  },
} as ValidationType;
const recdOnValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  },
} as ValidationType;
const enqValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;
const localSourceEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const serviceTypeValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const dueOnValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  },
} as ValidationType;
const printStatusValidationValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const notesForEnqValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 50,
    message: "50 characters max",
  },
} as ValidationType;
const enqStatusValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
const sVisitValidation = {
  required: {
    value: true,
    message: "Please select a {label}",
  },
  maxLength: {
    value: 50,
    message: "Please select a {label}",
  },
} as ValidationType;
// const NotesForAdjValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "{label} should be up to 30 characters max",
//   },
// } as ValidationType;
const instructionEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "Adjust is invalid",
  },
} as ValidationType;
const adjustEnqValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "Adjust is invalid",
  },
} as ValidationType;
const clientRefEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 charaters Max",
  },
} as ValidationType;
const clientEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "Select {label}",
  },
} as ValidationType;
const requestNoValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;
const clientIdEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

// const ActualBuyerEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "Select {label}",
//   },
// } as ValidationType;

const priceEnquiryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;
// const DisEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;
// const DiscountEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;
// const CommEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

const companyIdValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const bankValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const crAmountValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const cMieValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const rocStatusValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const recordsValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const recFinValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const gstValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;

const fYearValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 max Character",
  },
} as ValidationType;
// Option Section
// Right Field start
const enqTypeOption = [
  { value: "NEW", label: "NEW" },
  { value: "RENUAL", label: "RENUAL" },
];
const localSourceEnquiryOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ServiceOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const printStatusOption = [
  { value: "Not Received ", label: " Not Received" },
  {
    value: "Received",
    label: "Received",
  },
];
const EnqStatusOptions = [
  { value: "1-Pending", label: "1-Pending" },
  { value: "2-Pending", label: "2-Pending" },
];
const sVisitOptions = [
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
  yearValidation,
  ""
);
const refNoField: FormFieldType = createFormConfig(
  "refNo",
  "Ref No",
  "text",
  refNoValidation,
  "1"
);
const sourceField: FormFieldType = createFormConfig(
  "source",
  "Source",
  "select",
  sourceValidation,
  "",
  []
);

const givenAddressField: FormFieldType = createFormConfig(
  "address",
  "Given Address",
  "textarea",
  givenAddressValidation,
  "Enter Address"
);
const telNoField: FormFieldType = createFormConfig(
  "telNo",
  "Tel No.",
  "text",
  telNoEnquiryValidation,
  "Enter Tel No."
);
const faxNoField: FormFieldType = createFormConfig(
  "faxNo",
  "Fax No.",
  "text",
  faxNoEnquiryValidation,
  "Enter Fax No."
);
const emailField: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  emailEnquiryValidation,
  "Enter E-mail"
);
const websiteField: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  websiteEnquiryValidation,
  "Enter WebSite"
);
const contactField: FormFieldType = createFormConfig(
  "contact",
  "Contact",
  "text",
  contactEnquiryValidation,
  "Enter Contact"
);
const designationField: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  designationEnquiryValidation,
  "Enter Designation"
);
const cityField: FormFieldType = createFormConfig(
  "city",
  "City",
  "select",
  cityEnquiryValidation,
  "Select City",
  []
);
const zipField: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  zipEnquiryValidation,
  "Enter Zip"
);
const stateField: FormFieldType = createFormConfig(
  "state",
  "State",
  "select",
  stateEnquiryValidation,
  "Select State",
  []
);
const stateCodeField: FormFieldType = createFormConfig(
  "state",
  "State Code",
  "text",
  stateEnquiryValidation,
  ""
);
const countryField: FormFieldType = createFormConfig(
  "country",
  "Country",
  "select",
  countryEnquiryValidation,
  "Select Country",
  []
);

// Right Side Fields
const blankField: FormFieldType = createFormConfig(
  "blank",
  "",
  "text",
  blankValidation,
  ""
);
const givenNameField: FormFieldType = createFormConfig(
  "givenName",
  "Given Name",
  "text",
  givenNameEnquiryValidation,
  "Given Name"
);
const myDate = new Date(); // Replace this with your actual date
// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)
// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const recdOnField: FormFieldType = createFormConfig(
  "clientCurrency",
  "Recd . On",
  "date",
  recdOnValidation,
  formattedDate
);

const enqTypeField: FormFieldType = createFormConfig(
  "enqType",
  "Enq. Type",
  "select",
  enqValidation,
  "",
  enqTypeOption
);
const localSourceField: FormFieldType = createFormConfig(
  "localSource",
  "Local Source",
  "select",
  localSourceEnquiryValidation,
  "Select Local Source",
  localSourceEnquiryOptions
);
const serviceTypeField: FormFieldType = createFormConfig(
  "serviceType",
  "Service Type",
  "select",
  serviceTypeValidation,
  "Select Service",
  ServiceOptions
);
const dueOnField: FormFieldType = createFormConfig(
  "dueOn",
  "Due On",
  "date",
  dueOnValidation,
  "date"
);
const printStatusField: FormFieldType = createFormConfig(
  "printStatus",
  "Print Status",
  "select",
  printStatusValidationValidation,
  "",
  printStatusOption
);
const enqStatusField: FormFieldType = createFormConfig(
  "enqStatus",
  "Enq. Status",
  "select",
  enqStatusValidation,
  "",
  EnqStatusOptions
);

const sVisitField: FormFieldType = createFormConfig(
  "sVisit",
  "S.Visit ",
  "select",
  sVisitValidation,
  "",
  sVisitOptions
);
const notesForField: FormFieldType = createFormConfig(
  "notesForEnquiry",
  "Notes for Enquiry ",
  "textarea",
  notesForEnqValidation,
  "Notes For Enquiry"
);

const clientDetailsNote: Note = createNoteConfig("Client Details");
const instructionField: FormFieldType = createFormConfig(
  "instructionEnquiry",
  "Instruction ",
  "textarea",
  instructionEnquiryValidation,
  "Instruction"
);
const adjustField: FormFieldType = createFormConfig(
  "adjust",
  "Adjust",
  "text",
  adjustEnqValidation,
  "Adjust"
);

const clientRefField: FormFieldType = createFormConfig(
  "clientRefEnquiry",
  "Client Ref",
  "text",
  clientRefEnquiryValidation,
  "Client Ref"
);
const clientField: FormFieldType = createFormConfig(
  "clientEnquiry",
  "Client",
  "select",
  clientEnquiryValidation,
  "Select Client"
);
const requestNoField: FormFieldType = createFormConfig(
  "requestNoEnquiry",
  "Request No.",
  "text",
  requestNoValidation,
  "Request No."
);
const clientIdField: FormFieldType = createFormConfig(
  "clientIdEnquiry",
  "Client Id",
  "text",
  clientIdEnquiryValidation,
  "Client Id"
);

const priceField: FormFieldType = createFormConfig(
  "priceEnquiry",
  "Price",
  "text",
  priceEnquiryEnquiryValidation,
  "Price"
);

const companyIdField: FormFieldType = createFormConfig(
  "companyId",
  "CompanyId",
  "text",
  companyIdValidation,
  ""
);
const bankField: FormFieldType = createFormConfig(
  "bank",
  "Bank",
  "text",
  bankValidation,
  ""
);

const crAmountField: FormFieldType = createFormConfig(
  "crAmount",
  "Cr.Amount",
  "text",
  crAmountValidation,
  ""
);

const cmieField: FormFieldType = createFormConfig(
  "cmie",
  "CMIE",
  "text",
  cMieValidation,
  ""
);

const rocStatusField: FormFieldType = createFormConfig(
  "roc",
  "ROC Status ",
  "text",
  rocStatusValidation,
  ""
);

const recordsField: FormFieldType = createFormConfig(
  "records",
  "Records ",
  "text",
  recordsValidation,
  ""
);

const recFinField: FormFieldType = createFormConfig(
  "recFin",
  "Ref.Fin ",
  "text",
  recFinValidation,
  ""
);

const allField: FormFieldType = createFormConfig(
  "all",
  "All",
  "text",
  gstValidation,
  ""
);

const fYearField: FormFieldType = createFormConfig(
  "fYear",
  "F. Year",
  "text",
  fYearValidation,
  ""
);

const refNote: Note = createNoteConfig("Note: Ref. No is Auto");

export const addEnqPiFormFields = {
  companyField,
  yearField,
  refNoField,
  sourceField,
  givenAddressField,
  stateField,
  stateCodeField,
  countryField,
  telNoField,
  faxNoField,
  emailField,
  websiteField,
  contactField,
  designationField,
  cityField,
  zipField,
  refNote,
  //   2nd Side
  givenNameField, //n
  blankField,
  allField,
  recdOnField,
  serviceTypeField,
  enqTypeField, //n
  priceField,
  localSourceField,
  dueOnField,
  printStatusField,
  enqStatusField,
  sVisitField,
  notesForField,
  fYearField, //n
  instructionField,
  adjustField,
  //   Client Details
  clientRefField,
  clientField,
  requestNoField,
  clientIdField,
  companyIdField,
  bankField,
  crAmountField,
  cmieField,
  rocStatusField,
  recordsField,
  recFinField,
  clientDetailsNote,
};
