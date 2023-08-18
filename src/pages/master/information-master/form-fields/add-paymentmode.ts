import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const PaymentModeValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Payment ",
    },
} as ValidationType;



export const paymentmode: FormFieldType = createFormConfig('paymentmode', 'Payment Mode', 'text',PaymentModeValidation,'Payment Mode');