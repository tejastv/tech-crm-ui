import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const CreditdayValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Credit Days",
    },
} as ValidationType;



export const creditdays: FormFieldType = createFormConfig('creditdays', 'Credit Days', 'text',CreditdayValidation,'Credit Days');