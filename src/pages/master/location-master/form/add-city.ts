import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const cityFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

const osPrintFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;
export const cityField: FormFieldType = createFormConfig('city', 'City', 'text', cityFieldValidation);
export const osPrintField: FormFieldType = createFormConfig('osPrint', 'Copy of O/s. to Print', 'text', osPrintFieldValidation);