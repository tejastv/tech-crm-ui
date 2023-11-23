import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const CallTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const calltype: FormFieldType = createFormConfig(
  "typeName",
  "Call Type",
  "text",
  CallTypeValidation,
  "Call Type"
);

export const addCallTypeFormFields = {
  calltype,
};
