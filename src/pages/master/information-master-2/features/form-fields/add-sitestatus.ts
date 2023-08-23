import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const SiteStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid Site Status",
  },
} as ValidationType;

const sitestatus: FormFieldType = createFormConfig(
  "sitestatus",
  "Site Status",
  "text",
  SiteStatusValidation,
  "Site Status"
);

export const addSiteStatusFormFields = {
  sitestatus,
};
