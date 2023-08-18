import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const SourceValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Bank Deposit ",
    },
} as ValidationType;
const SelectFileValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
} as ValidationType;



export const source: FormFieldType = createFormConfig('source', 'Source', 'text',SourceValidation,'Source');
export const letterfile: FormFieldType = createFormConfig('latterfile', 'First Letter File', 'file',SelectFileValidation,'Source');