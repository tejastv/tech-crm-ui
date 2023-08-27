import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const countryFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const countryCodeFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const countryField: FormFieldType = createFormConfig(
  "countryName",
  "Country",
  "text",
  countryFieldValidation,
  ""
);

const countryCodeField: FormFieldType = createFormConfig(
  "countryCode",
  "Country Code",
  "text",
  countryCodeFieldValidation,
  ""
);

const continentCountryField: FormFieldType = {
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

const localSourceField: FormFieldType = {
  config: {
    name: "localSource",
    label: "Local Source",
    id: "localSource",
    options: [],
    placeholder: "Select Local Source",
    validation: {
      required: {
        value: true,
        message: "Select Local Source",
      },
    },
  },
};

// const localSourceField: FormFieldType = createFormConfig(
//   "Local Source",
//   "Local Source",
//   "text",
//   localSourceFieldValidation,
//   ""
// );

export const addCoutryFormFields = {
  countryField,
  countryCodeField,
  continentCountryField,
  localSourceField,
};
