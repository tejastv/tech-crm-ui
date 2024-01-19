import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const callTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const callType: FormFieldType = createFormConfig(
  "typeName",
  "Call Type",
  "text",
  callTypeValidation,
  ""
);

export const callTypeFormFields = {
  callType,
};
