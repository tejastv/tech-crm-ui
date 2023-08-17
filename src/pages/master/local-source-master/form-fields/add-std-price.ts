import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const StdCurrencyValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    pattern: {
      value: /^[a-zA-Z0-9\-]+$/,
      message: "Invalid Country ",
    },
} as ValidationType;

export const stdcurrencyOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const stdcurrencey: FormFieldType = createFormConfig('currencey', 'Currency', 'select', StdCurrencyValidation,'Select Currency',stdcurrencyOptions);