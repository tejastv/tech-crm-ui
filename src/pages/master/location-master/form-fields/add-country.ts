import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const countryFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

const countryCodeFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;
const localSourceFieldValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;
export const countryField: FormFieldType = createFormConfig(
    "country",
    "Country",
    "text",
    countryFieldValidation
);
export const countryCodeField: FormFieldType = createFormConfig(
    "countryCode",
    "Country Code",
    "text",
    countryCodeFieldValidation
);
export const continentCountryField: FormFieldType = {
    config: {
        name: "continent",
        label: "Continent",
        id: "continent",
        options: [],
        placeholder: "Select Continent",
        validation: {
            required: {
                value: true,
                message: "Select Continent",
            },
        },
    },
};
export const localSourceField: FormFieldType = createFormConfig(
    "Local Source",
    "Local Source",
    "text",
    localSourceFieldValidation
);
