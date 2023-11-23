import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const SiteStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const sitestatus: FormFieldType = createFormConfig(
  "siteStatus",
  "Site Status",
  "text",
  SiteStatusValidation,
  "Site Status"
);

export const addSiteStatusFormFields = {
  sitestatus,
};
