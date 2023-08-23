import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const CallTypeValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Call Type ",
    },
} as ValidationType;



export const calltype: FormFieldType = createFormConfig('calltype', 'Call Type', 'text',CallTypeValidation,'Call Type');