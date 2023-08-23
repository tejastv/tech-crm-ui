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
    message: "not valid ",
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
    message: "not valid ",
  },
} as ValidationType;

const CurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Invalid currency format",
  },
} as ValidationType;
const CountryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message: "Invalid Country ",
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

const localSource: FormFieldType = createFormConfig(
  "source",
  "Source",
  "text",
  localSourceFieldValidation,
  "Enter localSource"
);
const email: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "email",
  EmailValidation,
  "Enter Email"
);
const emailCC: FormFieldType = createFormConfig(
  "emailCC",
  "E-MailCC",
  "email",
  EmailValidationCC,
  "Enter E-mailCC"
);
const currencey: FormFieldType = createFormConfig(
  "currencey",
  "Currency",
  "select",
  CurrencyValidation,
  "Select Currency",
  currencyOptions
);
const sourcecountry: FormFieldType = createFormConfig(
  "country",
  "Country",
  "select",
  CountryValidation,
  "Select Country",
  sourcecountryOptions
);

export const addLocalSrouceFormFields = {
  localSource,
  email,
  emailCC,
  currencey,
  sourcecountry,
};
