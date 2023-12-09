import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const PaymentModeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const paymentMode: FormFieldType = createFormConfig(
  "paymentMode",
  "Payment Mode",
  "text",
  PaymentModeValidation,
  "Payment Mode"
);

export const paymentModeFormFields = {
  paymentMode,
};
