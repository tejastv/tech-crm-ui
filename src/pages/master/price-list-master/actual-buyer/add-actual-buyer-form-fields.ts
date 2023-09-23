import { FormFieldType, Note, ValidationType } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const ClientActualBuyer = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Select {label}",
  },
} as ValidationType;
const nameActualBuyer = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const GSTN = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid {label}",
  },
} as ValidationType;
const cst = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Invalid CST/TIN No. format. Please use a valid format.",
  },
} as ValidationType;

const addressValidation = {
  required: {
    value: false,
    message: "Please Enter Address",
  },
  pattern: {
    value: /^[\w\s\d#.,\-\/]+$/,
    message: "Please use alphanumeric characters",
  },
} as ValidationType;

const telNoValidation = {
  required: {
    value: false,
    message: "Please Enter Telephone Number",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid telephone number format, such as +1 (123) 456-7890.",
  },
} as ValidationType;

const FaxNoValidation = {
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

const EmailValidation = {
  required: {
    value: false,
    message: "Please Enter E-mail ",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please Include an '@' and .com/in in the email address.",
  },
} as ValidationType;

const WebsiteValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    message: "website URL e.g., http://www.example.com",
  },
} as ValidationType;

const ContactValidation = {
  required: {
    value: false,
    message: "Please Enter Contect person",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;

const DesignationValidation = {
  required: {
    value: false,
    message: "Please Enter Designation",
  },
  maxLength: {
    value: 30,
    message: "Designation should be up to 30 characters long",
  },
} as ValidationType;

const PinValidation = {
  required: {
    value: false,
    message: "{label} field is rquired ",
  },
  pattern: {
    value: /^\d{6}$/,
    message: "Invalid PIN code,Please enter a 6-digit number.",
  },
} as ValidationType;

const CityValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const StateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const CountryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const clientactualbuyer: FormFieldType = createFormConfig(
  "partyId",
  "Client",
  "select",
  ClientActualBuyer,
  "Select Client",
  []
);
const nameactualbuyer: FormFieldType = createFormConfig(
  "partyName",
  "Name",
  "text",
  nameActualBuyer,
  "Name"
);
const addressactualbuyer: FormFieldType = createFormConfig(
  "partyAddress",
  "Address",
  "textarea",
  addressValidation,
  "Address"
);
const telnoactualbuyer: FormFieldType = createFormConfig(
  "telNo",
  "Tel No.",
  "text",
  telNoValidation,
  "Enter Tel No."
);
const emailactualbuyer: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailValidation,
  "Enter E-mail"
);
const contactactualbuyer: FormFieldType = createFormConfig(
  "personResponsible",
  "Contact",
  "text",
  ContactValidation,
  "Enter Contact"
);
const designationactualbuyer: FormFieldType = createFormConfig(
  "personDesg",
  "Designation",
  "text",
  DesignationValidation,
  "Enter Designation"
);
//
const cityactualbuyer: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  CityValidation,
  "Select City",
  []
);
const stateactualbuyer: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  StateValidation,
  "Select State",
  []
);
const PIN: FormFieldType = createFormConfig(
  "pin",
  "PIN",
  "text",
  PinValidation,
  "PIN"
);
const countryactualbuyer: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  CountryValidation,
  "Select Country",
  []
);
const faxnoactualbuyer: FormFieldType = createFormConfig(
  "faxNo",
  "Fax No.",
  "text",
  FaxNoValidation,
  "Enter Fax No."
);
const websiteactualbuyer: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteValidation,
  "https://"
);
const cstactualbuyer: FormFieldType = createFormConfig(
  "refNo",
  "CST/TIN No.",
  "text",
  cst,
  "CST/TIN No."
);
const gstnactualbuyer: FormFieldType = createFormConfig(
  "gstn",
  "GSTN",
  "text",
  GSTN,
  "GSTN"
);
const actualbuyergstnote: Note = createNoteConfig(
  "don't know GST, write NOGST. Do not input any other number."
);

export const addActualBuyersFormFields = {
  clientactualbuyer,
  nameactualbuyer,
  addressactualbuyer,
  telnoactualbuyer,
  emailactualbuyer,
  contactactualbuyer,
  designationactualbuyer,
  cityactualbuyer,
  stateactualbuyer,
  PIN,
  countryactualbuyer,
  faxnoactualbuyer,
  websiteactualbuyer,
  cstactualbuyer,
  gstnactualbuyer,
  actualbuyergstnote,
};
