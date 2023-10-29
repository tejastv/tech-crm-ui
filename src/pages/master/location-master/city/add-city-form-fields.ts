import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const cityFieldValidation = {
  required: {
    value: true,
    message: "City field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const StateValidation = {
  required: {
    value: true,
    message: "State field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a State",
  },
} as ValidationType;

const osPrintFieldValidation = {
  required: {
    value: false,
    message: "",
  },
} as ValidationType;

// const cityField = {
//   config: {
//     ...createFormConfig("cityName", "City", "text", cityFieldValidation, "")
//       .config,
//     name: "cityName",
//   },
// };

const cityField: FormFieldType = {
  config: {
    label: "City",
    name: "cityName",
    id: "cityName",
    type: "text",
    placeholder: "Enter City",
    validation: cityFieldValidation,
    isDisabled: false,
    multiline: false,
  },
};

const state: FormFieldType = {
  config: {
    label: "State",
    name: "stateId",
    id: "stateId",
    type: "text",
    placeholder: "Enter State",
    validation: StateValidation,
    isDisabled: false,
    multiline: false,
  },
};

const osPrintField: FormFieldType = {
  config: {
    label: "Copy of O/s. to Print",
    name: "oscopies",
    id: "oscopies",
    type: "text",
    placeholder: "Enter Copy of O/s. to Print",
    validation: osPrintFieldValidation,
    isDisabled: false,
    multiline: false,
  },
};

// const osPrintField: FormFieldType = createFormConfig(
//   "oscopies",
//   "Copy of O/s. to Print",
//   "text",
//   osPrintFieldValidation,
//   ""
// );

// const state: FormFieldType = createFormConfig(
//   "stateId",
//   "State",
//   "select",
//   StateValidation,
//   "Select State",
//   []
// );
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

export const addCityFormFields = {
  cityField,
  state,
  osPrintField,
};
