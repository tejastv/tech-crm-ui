import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const continentFieldValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const continentField: FormFieldType = createFormConfig(
  "continent",
  "Continent",
  "text",
  continentFieldValidation,
  ""
);

export const continentFormFields = {
  continentField,
};
