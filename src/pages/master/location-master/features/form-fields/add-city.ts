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

const osPrintFieldValidation = {
  required: {
    value: false,
    message: "",
  },
} as ValidationType;

const cityField: FormFieldType = createFormConfig(
  "cityName",
  "City",
  "text",
  cityFieldValidation,
  ""
);
const osPrintField: FormFieldType = createFormConfig(
  "oscopies",
  "Copy of O/s. to Print",
  "text",
  osPrintFieldValidation,
  ""
);

export const addCityFormFields = {
  cityField,
  osPrintField,
};
