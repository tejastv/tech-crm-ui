import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const creditDayValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const creditDays: FormFieldType = createFormConfig(
  "creditPeriod",
  "Credit Days",
  "number",
  creditDayValidation,
  "Credit Days"
);

export const creditDaysFormFields = {
  creditDays,
};
