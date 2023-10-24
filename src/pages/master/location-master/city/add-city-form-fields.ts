import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const cityFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
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

const osPrintFieldValidation = {
  required: {
    value: false,
    message: "",
  },
} as ValidationType;

const cityField = {
  config: {
    ...createFormConfig("cityName", "City", "text", cityFieldValidation, "")
      .config,
    name: "cityName",
  },
};
const state: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  StateValidation,
  "Select State",
  []
);
// const country: FormFieldType = {
//   config: {
//     name: "State",
//     label: "State",
//     id: "stateId",
//     options: selectOptionsMaker(countryOptions, "value", "label"),
//     placeholder: "Country field is rquired",
//     validation: {
//       required: {
//         value: true,
//         message: "Country field is rquired",
//       },
//       pattern: {
//         value: /^[a-zA-Z0-9\-]+$/,
//         message: "Select Country ",
//       },
//     },
//   },
// };

// ...createFormConfig(
//   "cityName",
//   "City",
//   "text",
//   cityFieldValidation,
//   ""
// )
const osPrintField: FormFieldType = createFormConfig(
  "oscopies",
  "Copy of O/s. to Print",
  "text",
  osPrintFieldValidation,
  ""
);

export const addCityFormFields = {
  cityField,
  state,
  osPrintField,
};
