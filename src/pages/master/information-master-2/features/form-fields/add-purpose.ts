import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const PurposeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid Purpose ",
  },
} as ValidationType;

const purpose: FormFieldType = createFormConfig(
  "purpose",
  "Purpose",
  "text",
  PurposeValidation,
  "Purpose"
);

export const addPurposeFormFields = {
  purpose,
};
