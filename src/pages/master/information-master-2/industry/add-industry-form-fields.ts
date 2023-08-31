import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const IndustryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const industry: FormFieldType = createFormConfig(
  "industry",
  "Industry",
  "text",
  IndustryValidation,
  "Industry"
);

export const addIndustryFormFields = {
  industry,
};
