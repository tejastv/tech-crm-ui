import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const stateFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

const stateCodeFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

const numbericCodeFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

export const stateField: FormFieldType = createFormConfig('state', 'State', 'text', stateFieldValidation,'');
export const stateCodeField: FormFieldType = createFormConfig('stateCode', 'State Code (eg: MH, GJ, etc)', 'text', stateCodeFieldValidation,'');
export const numbericCodeField: FormFieldType = createFormConfig('stateCode', 'Numeric Code (eg: 09, 19, etc)', 'text', numbericCodeFieldValidation,'');