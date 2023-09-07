import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const BankDrawnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const bankdrawn: FormFieldType = createFormConfig(
  "bankName",
  "Bank",
  "text",
  BankDrawnValidation,
  "Bank Drawn"
);

export const addBankdrawnonFormFields = {
  bankdrawn,
};
