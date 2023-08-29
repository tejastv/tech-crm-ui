import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const NameSuppliervalidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const NickNamevalidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const addressValidation = {
  required: {
    value: true,
    message: "Please Enter Address",
  },
  pattern: {
    value: /^[\w\s\d#.,\-\/]+$/,
    message: "Please use alphanumeric characters",
  },
} as ValidationType;

const telNoValidation = {
  required: {
    value: true,
    message: "Please Enter Telephone Number",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message: "Invalid telephone number. Please use Number.",
  },
} as ValidationType;

const FaxNoValidation = {
  required: {
    value: true,
    message: "Please Enter Fax number",
  },
  pattern: {
    value: /^\+?[0-9\s\-()+.]*$/,
    message: "Invalid fax number. Please use a valid format like +123 456 7890 or (123) 456-7890.",
  },
} as ValidationType;

const EmailValidation = {
  required: {
    value: true,
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
    value: true,
    message: "Please Enter Website",
  },
  pattern: {
    value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
    message: "website URL e.g., http://www.example.com",
  },
} as ValidationType;

const ContactValidation = {
  required: {
    value: true,
    message: "Please Enter Contect person",
  },
  maxLength: {
    value: 30,
    message: "{label} should be up to 30 characters max",
  },
} as ValidationType;

const DesignationValidation = {
  required: {
    value: true,
    message: "Please Enter Designation",
  },
  maxLength: {
    value: 30,
    message: "Designation should be up to 50 characters long",
  },
} as ValidationType;

const ZipValidation = {
  required: {
    value: true,
    message: "Please Enter Zip",
  },
  pattern: {
    value: /^\d{6}$/,
    message: "Invalid ZIP code,Please enter a 6-digit number.",
  },
} as ValidationType;

const CityValidation = {
  required: {
    value: true,
    message: "Please Select city",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Invalid City",
  },
} as ValidationType;

const StateValidation = {
  required: {
    value: true,
    message: "Please Select State",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const CountryValidation = {
  required: {
    value: true,
    message: "Please Select Country",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const CurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Invalid currency format. Please use a valid currency code (e.g., USD).",
  },
} as ValidationType;

// Option Section

const citySupplierOptions = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const stateSupplierOptions = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const countrySupplierOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// Right Field start
const CurrencyOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const nameSupplier: FormFieldType = createFormConfig(
  "name",
  "Name",
  "text",
  NameSuppliervalidation,
  "Enter Name"
);
const nickname: FormFieldType = createFormConfig(
  "nickname",
  "Nick Name",
  "text",
  NickNamevalidation,
  "Enter Nick Name"
);

const addressSupplier: FormFieldType = createFormConfig(
  "addresssupplier",
  "Address",
  "textarea",
  addressValidation,
  "Enter Address"
);
const telnoSupplier: FormFieldType = createFormConfig(
  "telnosupplier",
  "Tel No.",
  "number",
  telNoValidation,
  "Enter Tel No."
);
const faxnoSupplier: FormFieldType = createFormConfig(
  "faxnosupplier",
  "Fax No.",
  "text",
  FaxNoValidation,
  "Enter Fax No."
);
const emailSupplier: FormFieldType = createFormConfig(
  "emailsupplier",
  "E-Mail",
  "Email",
  EmailValidation,
  "Enter E-mail"
);
const websiteSupplier: FormFieldType = createFormConfig(
  "websitesupplier",
  "Website",
  "text",
  WebsiteValidation,
  "https://"
);
const contactSupplier: FormFieldType = createFormConfig(
  "contactsupplier",
  "Contact person",
  "text",
  ContactValidation,
  "Enter Contact Person"
);
const designationSupplier: FormFieldType = createFormConfig(
  "designationsupplier",
  "Designation",
  "text",
  DesignationValidation,
  "Enter Designation"
);

// Right Side Fields
const citySupplier: FormFieldType = createFormConfig(
  "citysupplier",
  "City",
  "select",
  CityValidation,
  "Select City",
  citySupplierOptions
);
const zipSupplier: FormFieldType = createFormConfig(
  "zipsupplier",
  "Zip",
  "text",
  ZipValidation,
  "Enter Zip"
);
const stateSupplier: FormFieldType = createFormConfig(
  "statesupplier",
  "State",
  "select",
  StateValidation,
  "Select State",
  stateSupplierOptions
);
const countrySupplier: FormFieldType = createFormConfig(
  "countrysupplier",
  "Country",
  "select",
  CountryValidation,
  "Select Country",
  countrySupplierOptions
);
const CurrenceySupplier: FormFieldType = createFormConfig(
  "currenceysupplier",
  "Currency",
  "select",
  CurrencyValidation,
  "Select Currency",
  CurrencyOptions
);

export const addSupplierFormFields = {
  nameSupplier,
  nickname,
  addressSupplier,
  telnoSupplier,
  faxnoSupplier,
  emailSupplier,
  websiteSupplier,
  contactSupplier,
  designationSupplier,
  citySupplier,
  zipSupplier,
  stateSupplier,
  countrySupplier,
  CurrenceySupplier,
};
