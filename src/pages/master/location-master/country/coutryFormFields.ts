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
    value: 2,
    message: "2 characters max",
  },
} as ValidationType;
const countrylocalSourceFieldValidation = {
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
  "Enter Country Name"
);

const countryCodeField: FormFieldType = createFormConfig(
  "countryCode",
  "Country Code",
  "text",
  countryCodeFieldValidation,
  "Enter Country Code"
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

// const localSourceField: FormFieldType = {
//   config: {
//     name: "localSource",
//     label: "Local Source",
//     id: "localSource",
//     options: [],
//     placeholder: "Select Local Source",
//     validation: {
//       required: {
//         value: true,
//         message: "Select Local Source",
//       },
//     },
//   },
// };

const countrylocalSourceField: FormFieldType = createFormConfig(
  "Local Source",
  "Local Source",
  "text",
  countrylocalSourceFieldValidation,
  ""
);

export const coutryFormFields = {
  countryField,
  countryCodeField,
  continentCountryField,
  countrylocalSourceField,
};
