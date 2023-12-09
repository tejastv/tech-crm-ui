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
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
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
    message: "Invalid telephone number. Please use Number.",
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
    message: "Please Enter Website",
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
    message: "Designation should be up to 50 characters long",
  },
} as ValidationType;

const ZipValidation = {
  required: {
    value: false,
    message: "Please Enter Zip",
  },
  pattern: {
    value: /^\d{6}$/,
    message: "Invalid ZIP code,Please enter a 6-digit number.",
  },
} as ValidationType;

const CityValidation = {
  required: {
    value: false,
    message: "Please Select city",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Invalid City",
  },
} as ValidationType;

const StateValidation = {
  required: {
    value: false,
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
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message:
      "Invalid currency format. Please use a valid currency code (e.g., USD).",
  },
} as ValidationType;

// Option Section

const nameSupplier: FormFieldType = createFormConfig(
  "supplierName",
  "Name",
  "text",
  NameSuppliervalidation,
  "Enter Name"
);
const nickname: FormFieldType = createFormConfig(
  "nickName",
  "Nick Name",
  "text",
  NickNamevalidation,
  "Enter Nick Name"
);

const addressSupplier: FormFieldType = createFormConfig(
  "address",
  "Address",
  "textarea",
  addressValidation,
  "Enter Address"
);
const telnoSupplier: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "number",
  telNoValidation,
  "Enter Tel No."
);
const faxnoSupplier: FormFieldType = createFormConfig(
  "fax",
  "Fax No.",
  "text",
  FaxNoValidation,
  "Enter Fax No."
);
const emailSupplier: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailValidation,
  "Enter E-mail"
);
const websiteSupplier: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteValidation,
  "https://"
);
const contactSupplier: FormFieldType = createFormConfig(
  "contactPerson",
  "Contact person",
  "text",
  ContactValidation,
  "Enter Contact Person"
);
const designationSupplier: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationValidation,
  "Enter Designation"
);

// Right Side Fields
const citySupplier: FormFieldType = createFormConfig(
  "cityID",
  "City",
  "select",
  CityValidation,
  "Select City",
  {}
);
const zipSupplier: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipValidation,
  "Enter Zip"
);
const stateSupplier: FormFieldType = createFormConfig(
  "stateID",
  "State",
  "select",
  StateValidation,
  "Select State",
  {}
);
const countrySupplier: FormFieldType = createFormConfig(
  "countryID",
  "Country",
  "select",
  CountryValidation,
  "Select Country",
  {}
);
const CurrenceySupplier: FormFieldType = createFormConfig(
  "currencyId",
  "Currency",
  "select",
  CurrencyValidation,
  "Select Currency",
  {}
);

export const supplierFormFields = {
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
