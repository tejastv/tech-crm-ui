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
  ""
);
const nickname: FormFieldType = createFormConfig(
  "nickName",
  "Nick Name",
  "text",
  NickNamevalidation,
  ""
);

const addressSupplier: FormFieldType = createFormConfig(
  "address",
  "Address",
  "textarea",
  addressValidation,
  ""
);
const telNoSupplier: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "number",
  telNoValidation,
  ""
);
const faxNoSupplier: FormFieldType = createFormConfig(
  "fax",
  "Fax No.",
  "text",
  FaxNoValidation,
  ""
);
const emailSupplier: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailValidation,
  ""
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
  ""
);
const designationSupplier: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationValidation,
  ""
);

// Right Side Fields
const citySupplier: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  CityValidation,
  "",
  {}
);
const zipSupplier: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipValidation,
  ""
);
const stateSupplier: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  StateValidation,
  "",
  {}
);
const countrySupplier: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  CountryValidation,
  "",
  {}
);
const currencySupplier: FormFieldType = createFormConfig(
  "currencyId",
  "Currency",
  "select",
  CurrencyValidation,
  "",
  {}
);

export const supplierFormFields = {
  nameSupplier,
  nickname,
  addressSupplier,
  telNoSupplier,
  faxNoSupplier,
  emailSupplier,
  websiteSupplier,
  contactSupplier,
  designationSupplier,
  citySupplier,
  zipSupplier,
  stateSupplier,
  countrySupplier,
  currencySupplier,
};
