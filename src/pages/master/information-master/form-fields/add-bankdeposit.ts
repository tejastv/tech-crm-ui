import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const BankDepositValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Bank Deposit ",
    },
} as ValidationType;
const BankDepositACValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Bank Deposit ",
    },
} as ValidationType;


export const bankdeposit: FormFieldType = createFormConfig('bankdeposit', 'Bank', 'text',BankDepositValidation,'Bank Deposit');
export const bankDepositAc: FormFieldType = createFormConfig('bankDepositAc', 'A/c No.', 'text',BankDepositACValidation,'Bank Deposit A/C No.');