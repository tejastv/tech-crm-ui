import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const localSourceFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const EmailValidation = {
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
const EmailValidationCC = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please Include an '@' and .com/in in the emailCC address.",
  },
} as ValidationType;

const CurrencyValidation = {
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
    value: /^\d+(\.\d{1,2})?$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const currencyOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const sourcecountryOptions = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const localSourceField: FormFieldType = createFormConfig(
  "source",
  "Source",
  "text",
  localSourceFieldValidation,
  "Enter localSource"
);
const emailField: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "email",
  EmailValidation,
  "Enter Email"
);
const emailCCField: FormFieldType = createFormConfig(
  "emailCC",
  "E-MailCC",
  "email",
  EmailValidationCC,
  "Enter E-mailCC"
);
const currenceyField: FormFieldType = createFormConfig(
  "currencey",
  "Currency",
  "select",
  CurrencyValidation,
  "Select Currency",
  currencyOptions
);
// const sourcecountry: FormFieldType = createFormConfig(
//   "country",
//   "Country",
//   "select",
//   CountryValidation,
//   "Select Country",
//   sourcecountryOptions
// );
const continentLocalSourceField: FormFieldType = {
  config: {
    name: "continentId",
    label: "Continent",
    id: "continent",
    options: [],
    placeholder: "Select Continent",
    validation: {
      required: {
        value: true,
        message: "Select Continent",
      },
    },
  },
};
const sourcecountryField: FormFieldType = {
  config: {
    name: "country",
    label: "Country",
    id: "country",
    options: [],
    placeholder: "Select Country",
    validation: {
      required: {
        value: true,
        message: "Select Country",
      },
    },
  },
};
export const addLocalSrouceFormFields = {
  localSourceField,
  emailField,
  emailCCField,
  currenceyField,
  sourcecountryField,
  // continentLocalSourceField
};
