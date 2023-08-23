import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const StdPriceClientCurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Select {label}",
  },
} as ValidationType;

const StdpriceClientCurrencyOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];

const stdPriceClientCurrency: FormFieldType = createFormConfig(
  "stdpriceclientcurrencey",
  "Currency",
  "select",
  StdPriceClientCurrencyValidation,
  "Select Currency",
  StdpriceClientCurrencyOptions
);

export const addStdPriceClientsFormFields = {
  stdPriceClientCurrency,
};
