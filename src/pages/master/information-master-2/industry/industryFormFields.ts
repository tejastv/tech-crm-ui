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
  "industryName",
  "Industry",
  "text",
  IndustryValidation,
  "Industry"
);

export const industryFormFields = {
  industry,
};
