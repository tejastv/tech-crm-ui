import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const CreditdayValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const creditdays: FormFieldType = createFormConfig(
  "creditPeriod",
  "Credit Days",
  "number",
  CreditdayValidation,
  "Credit Days"
);

export const creditDaysFormFields = {
  creditdays,
};
