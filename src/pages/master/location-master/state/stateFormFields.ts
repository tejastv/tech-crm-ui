import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const stateFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const stateCodeFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 2,
    message: "2 characters max",
  },
} as ValidationType;

const numbericCodeFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 2,
    message: "2 characters max",
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

const stateField: FormFieldType = createFormConfig(
  "stateName",
  "State",
  "text",
  stateFieldValidation,
  ""
);
const stateCodeField: FormFieldType = createFormConfig(
  "stateCodeA",
  "State Code (eg: MH, GJ, etc)",
  "text",
  stateCodeFieldValidation,
  ""
);
const numbericCodeField: FormFieldType = createFormConfig(
  "stateCodeN",
  "Numeric Code (eg: 09, 19, etc)",
  "number",
  numbericCodeFieldValidation,
  ""
);
const country: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  CountryValidation,
  "Select Country",
  {}
);

export const stateFormFields = {
  stateField,
  stateCodeField,
  numbericCodeField,
  country,
};
