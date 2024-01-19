// import { FormFieldType, Note, ValidationType } from "@shared/index";
// import { createFormConfig, createNoteConfig } from "@utils/index";

// const CompanyValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 characters max",
//   },
// } as ValidationType;

// const yearValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[0-9]{4}$/,
//     message: "Invalid year format. Please enter a valid year (yyyy).",
//   },
// } as ValidationType;
// const refNoValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 characters max",
//   },
// } as ValidationType;

// const sourceValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
//     message: "Select {label}",
//   },
// } as ValidationType;

// const givenAddressValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[\w\s\d#.,\-\/]+$/,
//     message: "Please use alphanumeric characters",
//   },
// } as ValidationType;

// const telNoEnquiryValidation = {
//   required: {
//     value: true,
//     message: "Please Enter Telephone Number",
//   },
//   pattern: {
//     value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
//     message: "Invalid telephone number. Please use Number.",
//   },
// } as ValidationType;

// const faxNoEnquiryValidation = {
//   required: {
//     value: true,
//     message: "Please Enter Fax number",
//   },
//   pattern: {
//     value: /^\+?[0-9\s\-()+.]*$/,
//     message:
//       "Invalid fax number. Please use a valid format like +123 456 7890 or (123) 456-7890.",
//   },
// } as ValidationType;

// const emailEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value:
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     message: "Please Include an '@' and .com/in in the email address.",
//   },
// } as ValidationType;

// const websiteEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
//     message: "website URL e.g., http://www.example.com",
//   },
// } as ValidationType;

// const contactEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "{label} should be up to 30 characters max",
//   },
// } as ValidationType;

// const designationEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 50,
//     message: "Designation should be up to 50 characters long",
//   },
// } as ValidationType;

// const zipEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^\d{6}$/,
//     message: "Invalid ZIP code,Please enter a 6-digit number.",
//   },
// } as ValidationType;

// const cityEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[a-zA-Z0-9\-]+$/,
//     message: "Please select a {label}",
//   },
// } as ValidationType;

// const stateEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[a-zA-Z0-9\-]+$/,
//     message: "Please select a {label}",
//   },
// } as ValidationType;

// const countryEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[a-zA-Z0-9\-]+$/,
//     message: "Please select a {label}",
//   },
// } as ValidationType;

// // Right Field validation
// const blankValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
// } as ValidationType;
// const givenNameEnquiryValidation = {
//   required: {
//     value: true,
//     message: "Given Name field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "Given Name should not exceed 30 characters",
//   },
// } as ValidationType;
// const recdOnValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
//     message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
//   },
// } as ValidationType;
// const enqValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^[a-zA-Z0-9\-]+$/,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
// const localSourceEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 50,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
// const serviceTypeValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 50,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
// const dueOnValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   pattern: {
//     value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
//     message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
//   },
// } as ValidationType;
// const printStatusValidationValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 50,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
// const notesForEnqValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 50,
//     message: "50 characters max",
//   },
// } as ValidationType;
// const enqStatusValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 50,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
// const sVisitValidation = {
//   required: {
//     value: true,
//     message: "Please select a {label}",
//   },
//   maxLength: {
//     value: 50,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
// // const NotesForAdjValidation = {
// //   required: {
// //     value: true,
// //     message: "{label} field is required",
// //   },
// //   maxLength: {
// //     value: 30,
// //     message: "{label} should be up to 30 characters max",
// //   },
// // } as ValidationType;
// const instructionEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "Adjust is invalid",
//   },
// } as ValidationType;
// const adjustEnqValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "Adjust is invalid",
//   },
// } as ValidationType;
// const clientRefEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 charaters Max",
//   },
// } as ValidationType;
// const clientEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "Select {label}",
//   },
// } as ValidationType;
// const requestNoValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;
// const clientIdEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// // const ActualBuyerEnquiryValidation = {
// //   required: {
// //     value: true,
// //     message: "{label} field is required",
// //   },
// //   maxLength: {
// //     value: 30,
// //     message: "Select {label}",
// //   },
// // } as ValidationType;

// const priceEnquiryEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;
// // const DisEnquiryValidation = {
// //   required: {
// //     value: true,
// //     message: "{label} field is required",
// //   },
// //   maxLength: {
// //     value: 30,
// //     message: "30 max Character",
// //   },
// // } as ValidationType;
// // const DiscountEnquiryValidation = {
// //   required: {
// //     value: true,
// //     message: "{label} field is required",
// //   },
// //   maxLength: {
// //     value: 30,
// //     message: "30 max Character",
// //   },
// // } as ValidationType;
// // const CommEnquiryValidation = {
// //   required: {
// //     value: true,
// //     message: "{label} field is required",
// //   },
// //   maxLength: {
// //     value: 30,
// //     message: "30 max Character",
// //   },
// // } as ValidationType;

// const companyIdValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const bankValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const crAmountValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const cMieValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const rocStatusValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const recordsValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const recFinValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const gstValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;

// const fYearValidation = {
//   required: {
//     value: true,
//     message: "{label} field is required",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 max Character",
//   },
// } as ValidationType;
// // Option Section
// // Right Field start
// const companyField: FormFieldType = createFormConfig(
//   "company",
//   "Company",
//   "text",
//   CompanyValidation,
//   "Enter Company"
// );
// const yearField: FormFieldType = createFormConfig(
//   "year",
//   "Year",
//   "year",
//   yearValidation,
//   ""
// );
// const refNoField: FormFieldType = createFormConfig(
//   "refNo",
//   "Ref No",
//   "text",
//   refNoValidation,
//   "1"
// );
// const sourceField: FormFieldType = createFormConfig(
//   "source",
//   "Source",
//   "select",
//   sourceValidation,
//   "",
//   {}
// );

// const givenAddressField: FormFieldType = createFormConfig(
//   "address",
//   "Given Address",
//   "textarea",
//   givenAddressValidation,
//   "Enter Address",
//   {},
//   false,
//   true
// );
// const telNoField: FormFieldType = createFormConfig(
//   "telNo",
//   "Tel No.",
//   "text",
//   telNoEnquiryValidation,
//   "Enter Tel No."
// );
// const faxNoField: FormFieldType = createFormConfig(
//   "faxNo",
//   "Fax No.",
//   "text",
//   faxNoEnquiryValidation,
//   "Enter Fax No."
// );
// const emailField: FormFieldType = createFormConfig(
//   "email",
//   "E-Mail",
//   "Email",
//   emailEnquiryValidation,
//   "Enter E-mail"
// );
// const websiteField: FormFieldType = createFormConfig(
//   "website",
//   "Website",
//   "text",
//   websiteEnquiryValidation,
//   "Enter WebSite"
// );
// const contactField: FormFieldType = createFormConfig(
//   "contact",
//   "Contact",
//   "text",
//   contactEnquiryValidation,
//   "Enter Contact"
// );
// const designationField: FormFieldType = createFormConfig(
//   "designation",
//   "Designation",
//   "text",
//   designationEnquiryValidation,
//   "Enter Designation"
// );
// const cityField: FormFieldType = createFormConfig(
//   "city",
//   "City",
//   "select",
//   cityEnquiryValidation,
//   "Select City",
//   {}
// );
// const zipField: FormFieldType = createFormConfig(
//   "zip",
//   "Zip",
//   "text",
//   zipEnquiryValidation,
//   "Enter Zip"
// );
// const stateField: FormFieldType = createFormConfig(
//   "state",
//   "State",
//   "select",
//   stateEnquiryValidation,
//   "Select State",
//   {}
// );
// const stateCodeField: FormFieldType = createFormConfig(
//   "state",
//   "State Code",
//   "text",
//   stateEnquiryValidation,
//   ""
// );
// const countryField: FormFieldType = createFormConfig(
//   "country",
//   "Country",
//   "select",
//   countryEnquiryValidation,
//   "Select Country",
//   {}
// );

// // Right Side Fields
// const blankField: FormFieldType = createFormConfig(
//   "blank",
//   "",
//   "text",
//   blankValidation,
//   "",
//   {},
//   true
// );
// const givenNameField: FormFieldType = createFormConfig(
//   "givenName",
//   "Given Name",
//   "text",
//   givenNameEnquiryValidation,
//   "Given Name"
// );
// const myDate = new Date(); // Replace this with your actual date
// // Extract year, month, and day components
// const year = myDate.getFullYear();
// const month = String(myDate.getMonth() + 1).padStart(2, "0");
// const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)
// // Format the date as "year/mm/dd"
// const formattedDate = `${year}/${month}/${day}`;
// const recdOnField: FormFieldType = createFormConfig(
//   "clientCurrency",
//   "Recd . On",
//   "date",
//   recdOnValidation,
//   formattedDate
// );

// const enqTypeField: FormFieldType = createFormConfig(
//   "enqType",
//   "Enq. Type",
//   "select",
//   enqValidation,
//   "",
//   {}
// );
// const localSourceField: FormFieldType = createFormConfig(
//   "localSource",
//   "Local Source",
//   "select",
//   localSourceEnquiryValidation,
//   "Select Local Source",
//   {}
// );
// const serviceTypeField: FormFieldType = createFormConfig(
//   "serviceType",
//   "Service Type",
//   "select",
//   serviceTypeValidation,
//   "Select Service",
//   {}
// );
// const dueOnField: FormFieldType = createFormConfig(
//   "dueOn",
//   "Due On",
//   "date",
//   dueOnValidation,
//   "date"
// );
// const printStatusField: FormFieldType = createFormConfig(
//   "printStatus",
//   "Print Status",
//   "select",
//   printStatusValidationValidation,
//   "",
//   {}
// );
// const enqStatusField: FormFieldType = createFormConfig(
//   "enqStatus",
//   "Enq. Status",
//   "select",
//   enqStatusValidation,
//   "",
//   {}
// );

// const sVisitField: FormFieldType = createFormConfig(
//   "sVisit",
//   "S.Visit ",
//   "select",
//   sVisitValidation,
//   "",
//   {}
// );
// const notesForField: FormFieldType = createFormConfig(
//   "notesForEnquiry",
//   "Notes for Enquiry ",
//   "textarea",
//   notesForEnqValidation,
//   "Notes For Enquiry"
// );

// const clientDetailsNote: Note = createNoteConfig("Client Details");
// const instructionField: FormFieldType = createFormConfig(
//   "instructionEnquiry",
//   "Instruction ",
//   "textarea",
//   instructionEnquiryValidation,
//   "Instruction"
// );
// const adjustField: FormFieldType = createFormConfig(
//   "adjust",
//   "Adjust",
//   "text",
//   adjustEnqValidation,
//   "Adjust"
// );

// const clientRefField: FormFieldType = createFormConfig(
//   "clientRefEnquiry",
//   "Client Ref",
//   "text",
//   clientRefEnquiryValidation,
//   "Client Ref"
// );
// const clientField: FormFieldType = createFormConfig(
//   "clientEnquiry",
//   "Client",
//   "select",
//   clientEnquiryValidation,
//   "Select Client"
// );
// const requestNoField: FormFieldType = createFormConfig(
//   "requestNoEnquiry",
//   "Request No.",
//   "text",
//   requestNoValidation,
//   "Request No."
// );
// const clientIdField: FormFieldType = createFormConfig(
//   "clientIdEnquiry",
//   "Client Id",
//   "text",
//   clientIdEnquiryValidation,
//   "Client Id"
// );

// const priceField: FormFieldType = createFormConfig(
//   "priceEnquiry",
//   "Price",
//   "text",
//   priceEnquiryEnquiryValidation,
//   "Price"
// );

// const companyIdField: FormFieldType = createFormConfig(
//   "companyId",
//   "CompanyId",
//   "text",
//   companyIdValidation,
//   "",
//   {},
//   true
// );
// const bankField: FormFieldType = createFormConfig(
//   "bank",
//   "Bank",
//   "text",
//   bankValidation,
//   ""
// );

// const crAmountField: FormFieldType = createFormConfig(
//   "crAmount",
//   "Cr.Amount",
//   "text",
//   crAmountValidation,
//   ""
// );

// const cmieField: FormFieldType = createFormConfig(
//   "cmie",
//   "CMIE",
//   "text",
//   cMieValidation,
//   ""
// );

// const rocStatusField: FormFieldType = createFormConfig(
//   "roc",
//   "ROC Status ",
//   "text",
//   rocStatusValidation,
//   ""
// );

// const recordsField: FormFieldType = createFormConfig(
//   "records",
//   "Records ",
//   "text",
//   recordsValidation,
//   ""
// );

// const recFinField: FormFieldType = createFormConfig(
//   "recFin",
//   "Ref.Fin ",
//   "text",
//   recFinValidation,
//   ""
// );

// const allField: FormFieldType = createFormConfig(
//   "all",
//   "All",
//   "text",
//   gstValidation,
//   ""
// );

// const fYearField: FormFieldType = createFormConfig(
//   "fYear",
//   "F. Year",
//   "text",
//   fYearValidation,
//   ""
// );

// const refNote: Note = createNoteConfig("Note: Ref. No is Auto");

// export const enqPiFormFields = {
//   companyField,
//   yearField,
//   refNoField,
//   sourceField,
//   givenAddressField,
//   stateField,
//   stateCodeField,
//   countryField,
//   telNoField,
//   faxNoField,
//   emailField,
//   websiteField,
//   contactField,
//   designationField,
//   cityField,
//   zipField,
//   refNote,
//   givenNameField,
//   blankField,
//   allField,
//   recdOnField,
//   serviceTypeField,
//   enqTypeField,
//   priceField,
//   localSourceField,
//   dueOnField,
//   printStatusField,
//   enqStatusField,
//   sVisitField,
//   notesForField,
//   fYearField,
//   instructionField,
//   adjustField,
//   clientRefField,
//   clientField,
//   requestNoField,
//   clientIdField,
//   companyIdField,
//   bankField,
//   crAmountField,
//   cmieField,
//   rocStatusField,
//   recordsField,
//   recFinField,
//   clientDetailsNote,
// };

import {
  FormFieldType,
  MapType,
  Note,
  Options,
  ValidationType,
} from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const CompanyEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 characters max",
  // },
} as ValidationType;

const YearEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]{4}$/,
  //   message: "Invalid year format. Please enter a valid year (yyyy).",
  // },
} as ValidationType;
const refnoEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 characters max",
  // },
} as ValidationType;

const SourceEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  //   message: "Select {label}",
  // },
} as ValidationType;

const GivenaddressValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[\w\s\d#.,\-\/]+$/,
  //   message: "Please use alphanumeric characters",
  // },
} as ValidationType;

const telNoEnquiryValidation = {
  required: {
    value: false,
    message: "Please Enter Telephone Number",
  },
  // pattern: {
  //   value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
  //   message: "Invalid telephone number. Please use Number.",
  // },
} as ValidationType;

const FaxNoEnquiryValidation = {
  required: {
    value: false,
    message: "Please Enter Fax number",
  },
  // pattern: {
  //   value: /^\+?[0-9\s\-()+.]*$/,
  //   message:
  //     "Invalid fax number. Please use a valid format like +123 456 7890 or (123) 456-7890.",
  // },
} as ValidationType;

const EmailEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value:
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //message: "Please Include an '@' and .com/in in the email address.",
  // },
} as ValidationType;

const WebsiteEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
  //   message: "website URL e.g., http://www.example.com",
  // },
} as ValidationType;

const ContactEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "{label} should be up to 30 characters max",
  // },
} as ValidationType;

const DesignationEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Designation should be up to 50 characters long",
  // },
} as ValidationType;

const ZipEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d{6}$/,
  //   message: "Invalid ZIP code,Please enter a 6-digit number.",
  // },
} as ValidationType;

const CityEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const StateEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const CountryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

// Right Field validation
// const blankValidation = {
//   required: {
//     value: true,
//     message: "{label} field is rquired",
//   },
// } as ValidationType;
// const GivenNameEnquiryValidation = {
//   required: {
//     value: true,
//     message: "Given Name field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "Given Name should not exceed 30 characters",
//   // },
// } as ValidationType;
const recdOnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  // },
} as ValidationType;
// const EnqValidation = {
//   required: {
//     value: true,
//     message: "{label} field is rquired",
//   },
//   // pattern: {
//   //   value: /^[a-zA-Z0-9\-]+$/,
//   //   message: "Please select a {label}",
//   // },
// } as ValidationType;
const localsourceenquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const ServiceTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const DueOnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  // },
} as ValidationType;
const PrintStatusValidationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const NotesforEnqValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "50 characters max",
  // },
} as ValidationType;
// const EnqStatusValidation = {
//   required: {
//     value: true,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 50,
//   //   message: "Please select a {label}",
//   // },
// } as ValidationType;
const svisitValidation = {
  required: {
    value: false,
    message: "Please select a {label}",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
// const NotesForAdjValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "{label} should be up to 30 characters max",
//   // },
// } as ValidationType;
const instructionEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Adjust is invalid",
  // },
} as ValidationType;
// const AdjustEnqValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "Adjust is invalid",
//   // },
// } as ValidationType;
const ClientRefEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 charaters Max",
  // },
} as ValidationType;
const ClientEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Select {label}",
  // },
} as ValidationType;
const RequestNoValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;
// const ClientIdEnquiryValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "30 max Chearcter",
//   // },
// } as ValidationType;

// const ActualBuyerEnquiryValidation = {
//   required: {
//     value: true,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "Select {label}",
//   // },
// } as ValidationType;

const PriceeEnquiryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;
// const DisEnquiryValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "30 max Chearcter",
//   // },
// } as ValidationType;
// const DiscountEnquiryValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "30 max Chearcter",
//   // },
// } as ValidationType;
// const CommEnquiryValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   // maxLength: {
//   //   value: 30,
//   //   message: "30 max Chearcter",
//   // },
// } as ValidationType;

const enqCompanyName: FormFieldType = createFormConfig(
  "companyId",
  "Company",
  "select",
  CompanyEnquiry,
  "",
  {}
);
const enqFinYear: FormFieldType = createFormConfig(
  "fYear",
  "Year",
  "year",
  YearEnquiry,
  ""
);
const enqRefNo: FormFieldType = createFormConfig(
  "refNo",
  "Ref No",
  "text",
  refnoEnquiry,
  "",
  {},
  true
);
const enqSource: FormFieldType = createFormConfig(
  "sourceId",
  "Source",
  "select",
  SourceEnquiry,
  "",
  {}
);

const enqGivenAddress: FormFieldType = createFormConfig(
  "givenAddress",
  "Address",
  "textarea",
  GivenaddressValidation,
  "",
  {},
  false,
  true
);
const enqTelePhone: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "text",
  telNoEnquiryValidation,
  ""
);
const enqFax: FormFieldType = createFormConfig(
  "fax",
  "Fax No.",
  "text",
  FaxNoEnquiryValidation,
  ""
);
const enqEmail: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailEnquiryValidation,
  ""
);
const enqWebsite: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteEnquiryValidation,
  ""
);
const enqContact: FormFieldType = createFormConfig(
  "contactPerson",
  "Contact",
  "text",
  ContactEnquiryValidation,
  ""
);
const enqDesignation: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationEnquiryValidation,
  ""
);
const enqCity: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  CityEnquiryValidation,
  "",
  {}
);
const enqZip: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipEnquiryValidation,
  ""
);
const enqState: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  StateEnquiryValidation,
  "",
  {}
);
const enqStateCode: FormFieldType = createFormConfig(
  "state",
  "State Code",
  "text",
  StateEnquiryValidation,
  ""
);
const enqCountry: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  CountryEnquiryValidation,
  "",
  {}
);

// Right Side Fields
// const enqBlank: FormFieldType = createFormConfig(
//   "blank",
//   "",
//   "text",
//   blankValidation,
//   ""
// );
// const enqGivenName: FormFieldType = createFormConfig(
//   "givenName",
//   "Given Name",
//   "text",
//   GivenNameEnquiryValidation,
//   "Given Name"
// );
// const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
// const year = myDate.getFullYear();
// const month = String(myDate.getMonth() + 1).padStart(2, "0");
// const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
// const formattedDate = `${year}/${month}/${day}`;
const enqRecdon: FormFieldType = createFormConfig(
  "recdDate",
  "Enq. Date/Recd. On ",
  "date",
  recdOnValidation,
  ""
  // formattedDate
);

// const enqTypeData: MapType<Options> = {
//   new: { value: "new", label: "NEW" },
//   renew: { value: "renew", label: "RENEWAL" },
// };

// const enqtype: FormFieldType = createFormConfig(
//   "typeofEnquiry",
//   "Enq. Type",
//   "select",
//   EnqValidation, // Replace with your validation function
//   "Select Enq. Type",
//   enqTypeData,
//   true // Default value set to "NEW"
// );

const enqLocalSource: FormFieldType = createFormConfig(
  "localSourceId",
  "Local Source",
  "select",
  localsourceenquiryValidation,
  "",
  {}
);
const enqServiceType: FormFieldType = createFormConfig(
  "serviceTypeId",
  "Service Type",
  "select",
  ServiceTypeValidation,
  "",
  {}
);
const enqDueOn: FormFieldType = createFormConfig(
  "dueDate",
  "Due On",
  "date",
  DueOnValidation,
  ""
);

const enqPrintStatusData: MapType<Options> = {
  "Not Received": { value: "Not Received", label: "Not Received" },
  Received: { label: "Received", value: "Received" },
};

const enqPrintStatus: FormFieldType = createFormConfig(
  "pmtStatus",
  "Print Status",
  "select",
  PrintStatusValidationValidation,
  "",
  enqPrintStatusData
);
// const enqStatus: FormFieldType = createFormConfig(
//   "enqStatusId",
//   "Enq. Status",
//   "select",
//   EnqStatusValidation,
//   "Select Enq. Status",
//   {}
// );

const enqSvisit: FormFieldType = createFormConfig(
  "svisit",
  "S.Visit",
  "select",
  svisitValidation,
  "",
  {
    0: { value: "0", label: "NA" },
    1: { value: "1", label: "Pending to Visit" },
    2: { value: "2", label: "Visited" },
  }
);
const enqNotesForEnquiry: FormFieldType = createFormConfig(
  "notes",
  "Notes for Enquiry ",
  "textarea",
  NotesforEnqValidation,
  ""
);
// const enqNotesForAdj: FormFieldType = createFormConfig(
//   "noteForComission",
//   "Notes for Comma/Adj",
//   "text",
//   NotesForAdjValidation,
//   "Notes For Comma/Adj "
// );
const enqInstruction: FormFieldType = createFormConfig(
  "instruction",
  "Instruction ",
  "text",
  instructionEnquiryValidation,
  ""
);
// const enqAdjust: FormFieldType = createFormConfig(
//   "adjustment",
//   "Adjust",
//   "text",
//   AdjustEnqValidation,
//   "Adjust",
//   {},
//   true
// );

const enqClientRef: FormFieldType = createFormConfig(
  "clientRefNo",
  "Client Ref",
  "text",
  ClientRefEnquiryValidation,
  ""
);
const enqClient: FormFieldType = createFormConfig(
  "clientId",
  "Client",
  "select",
  ClientEnquiryValidation,
  ""
);
const enqRequestNo: FormFieldType = createFormConfig(
  "requestNo",
  "Request No.",
  "text",
  RequestNoValidation,
  ""
);
// const enqClientId: FormFieldType = createFormConfig(
//   "clientIdDisable",
//   "Client Id",
//   "text",
//   ClientIdEnquiryValidation,
//   "Client Id",
//   {},
//   true
// );
// const enqActualBuyer: FormFieldType = createFormConfig(
//   "actualBuyerId",
//   "Actual Buyer",
//   "select",
//   ActualBuyerEnquiryValidation,
//   "Actual Buyer",
//   { 1: { label: "Direct", value: "1" } }
// );
const enqPrice: FormFieldType = createFormConfig(
  "reportPrice",
  "Price",
  "text",
  PriceeEnquiryEnquiryValidation,
  "",
  {}
);
// const enqDis: FormFieldType = createFormConfig(
//   "disPer",
//   "Dis.%",
//   "text",
//   DisEnquiryValidation,
//   "Dis.%",
//   {},
//   true
// );
// const enqDiscount: FormFieldType = createFormConfig(
//   "discount",
//   "Discount",
//   "text",
//   DiscountEnquiryValidation,
//   "Discount",
//   {},
//   true
// );
// const enqReportComm: FormFieldType = createFormConfig(
//   "reportComission",
//   "Comm.",
//   "text",
//   CommEnquiryValidation,
//   "Comm."
// );

const enqRefNote: Note = createNoteConfig("Note: Ref. No is Auto");
const enqActualBuyerAddNote: Note = createNoteConfig("Add New Actual Buyer");
const enqDiscountCommissionNote: Note = createNoteConfig(
  "Discount / Commission Details"
);
const enqDiscountTypeNote: Note = createNoteConfig(
  "Discount Type - | % of Discount - | Discounted Value -"
);

export const enqPiFormFields = {
  enqCompanyName,
  enqFinYear,
  enqRefNo,
  enqSource,
  enqGivenAddress,
  enqTelePhone,
  enqFax,
  enqEmail,
  enqWebsite,
  enqContact,
  enqDesignation,
  enqCity,
  enqZip,
  enqState,
  enqStateCode,
  enqCountry,
  // enqGivenName,
  // enqBlank,
  enqRecdon,
  // enqtype,
  enqLocalSource,
  enqServiceType,
  enqDueOn,
  enqPrintStatus,
  // enqStatus,
  enqSvisit,
  enqNotesForEnquiry,
  // enqNotesForAdj,
  enqInstruction,
  // enqAdjust,
  enqClientRef,
  enqClient,
  enqRequestNo,
  // enqClientId,
  // enqActualBuyer,
  enqPrice,
  // enqDis,
  // enqDiscount,
  // enqReportComm,
  enqRefNote,
  enqActualBuyerAddNote,
  enqDiscountCommissionNote,
  enqDiscountTypeNote,
  enqPrintStatusData,
  // enqTypeData,
};
