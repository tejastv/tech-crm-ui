import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const BankDepositValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const BankDepositACValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const bankdeposit: FormFieldType = createFormConfig(
  "bankName",
  "Bank",
  "text",
  BankDepositValidation,
  ""
);
const bankDepositAc: FormFieldType = createFormConfig(
  "accountNo",
  "A/c No.",
  "text",
  BankDepositACValidation,
  ""
);

export const bankDepositeFormFields = {
  bankdeposit,
  bankDepositAc,
};
