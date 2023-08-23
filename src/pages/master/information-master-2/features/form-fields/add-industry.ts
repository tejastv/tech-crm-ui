import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const IndustryValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Industry ",
    },
} as ValidationType;



export const industry: FormFieldType = createFormConfig('industry', 'Industry', 'text',IndustryValidation,'Industry');