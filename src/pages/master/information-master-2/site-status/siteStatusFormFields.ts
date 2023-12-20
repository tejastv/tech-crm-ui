import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const siteStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const siteStatus: FormFieldType = createFormConfig(
  "siteStatus",
  "Site Status",
  "text",
  siteStatusValidation,
  "Site Status"
);

export const siteStatusFormFields = {
  siteStatus,
};
