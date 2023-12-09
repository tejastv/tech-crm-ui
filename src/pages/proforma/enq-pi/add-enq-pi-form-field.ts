import {
  FormFieldType,
  MapType,
  Note,
  Options,
  ValidationType,
} from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const CompanyValidation = {
  required: {
    value: true,
    message: "{label} field is required",
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
const companyField: FormFieldType = createFormConfig(
  "companyId",
  "Company",
  "select",
  CompanyValidation,
  "Select Company",
  {}
);
const yearField: FormFieldType = createFormConfig(
  "fYear",
  "Year",
  "year",
  yearValidation,
  "Select Year"
);
const refNoField: FormFieldType = createFormConfig(
  "refNo",
  "Ref No",
  "text",
  refNoValidation,
  "",
  {},
  true
);
const sourceField: FormFieldType = createFormConfig(
  "sourceID",
  "Source",
  "select",
  sourceValidation,
  "Select Source",
  {}
);

const givenAddressField: FormFieldType = createFormConfig(
  "givenAddress",
  "Address",
  "textarea",
  givenAddressValidation,
  "Enter Address"
);
const telNoField: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "text",
  telNoEnquiryValidation,
  "Enter Tel No."
);
const faxNoField: FormFieldType = createFormConfig(
  "fax",
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
  "contactPerson",
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
  "cityId",
  "City",
  "select",
  cityEnquiryValidation,
  "Select City",
  {}
);
const zipField: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  zipEnquiryValidation,
  "Enter Zip"
);
const stateField: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  stateEnquiryValidation,
  "Select State",
  {}
);
const stateCodeField: FormFieldType = createFormConfig(
  "state",
  "State Code",
  "text",
  stateEnquiryValidation,
  ""
);
const countryField: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  countryEnquiryValidation,
  "Select Country",
  {}
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
  "recdDate",
  "Enq. Date/Recd. On",
  "date",
  recdOnValidation,
  formattedDate
);

const enqTypeData: MapType<Options> = {
  new: { value: "new", label: "NEW" },
  renew: { value: "renew", label: "RENEWAL" },
};

const enqTypeField: FormFieldType = createFormConfig(
  "typeofEnquiry",
  "Enq. Type",
  "select",
  enqValidation, // Replace with your validation function
  "Select Enq. Type",
  enqTypeData,
  true // Default value set to "NEW"
);
const localSourceField: FormFieldType = createFormConfig(
  "localSourceId",
  "Local Source",
  "select",
  localSourceEnquiryValidation,
  "Select Local Source",
  {}
);
const serviceTypeField: FormFieldType = createFormConfig(
  "serviceTypeID",
  "Service Type",
  "select",
  serviceTypeValidation,
  "Select Service",
  {}
);
const dueOnField: FormFieldType = createFormConfig(
  "dueDate",
  "Due On",
  "date",
  dueOnValidation,
  "date"
);

const enqPrintStatusData: MapType<Options> = {
  "Not Received": { value: "Not Received", label: "Not Received" },
  Received: { label: "Received", value: "Received" },
};

const printStatusField: FormFieldType = createFormConfig(
  "pmtstatus",
  "Print Status",
  "select",
  printStatusValidationValidation,
  "Select Print Status",
  enqPrintStatusData
);
const enqStatusField: FormFieldType = createFormConfig(
  "enqStatusID",
  "Enq. Status",
  "select",
  enqStatusValidation,
  "Select Enq. Status",
  {}
);

const sVisitField: FormFieldType = createFormConfig(
  "svisit",
  "S.Visit",
  "select",
  sVisitValidation,
  "Select S.Visit",
  {
    0: { value: "0", label: "NA" },
    1: { value: "1", label: "Pending to Visit" },
    2: { value: "2", label: "Visited" },
  }
);
const notesForField: FormFieldType = createFormConfig(
  "notes",
  "Notes for Enquiry ",
  "textarea",
  notesForEnqValidation,
  "Notes For Enquiry"
);

const clientDetailsNote: Note = createNoteConfig("Client Details");
const instructionField: FormFieldType = createFormConfig(
  "instruction",
  "Instruction ",
  "text",
  instructionEnquiryValidation,
  "Instruction"
);
const adjustField: FormFieldType = createFormConfig(
  "adjustment",
  "Adjust",
  "text",
  adjustEnqValidation,
  "Adjust",
  {},
  true
);

const clientRefField: FormFieldType = createFormConfig(
  "clientRefNo",
  "Client Ref",
  "text",
  clientRefEnquiryValidation,
  "Client Ref"
);
const clientField: FormFieldType = createFormConfig(
  "clientID",
  "Client",
  "select",
  clientEnquiryValidation,
  "Select Client"
);
const requestNoField: FormFieldType = createFormConfig(
  "requestNo",
  "Request No.",
  "text",
  requestNoValidation,
  "Request No."
);
const clientIdField: FormFieldType = createFormConfig(
  "clientidenquiry",
  "Client Id",
  "text",
  clientIdEnquiryValidation,
  "Client Id",
  {},
  true
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
  "",
  {},
  true
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
