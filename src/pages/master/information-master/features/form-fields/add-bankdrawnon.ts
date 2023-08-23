import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const BankDrawnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid Bank Drawn ",
  },
} as ValidationType;

const bankdrawn: FormFieldType = createFormConfig(
  "bankdrawn",
  "Bank",
  "text",
  BankDrawnValidation,
  "Bank Drwan"
);

export const addBankdrawnonFormFields = {
  bankdrawn,
};
