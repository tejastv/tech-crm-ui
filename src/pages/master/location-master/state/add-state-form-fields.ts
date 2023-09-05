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

const stateField: FormFieldType = createFormConfig(
  "state",
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

export const addStateFormFields = {
  stateField,
  stateCodeField,
  numbericCodeField,
};
