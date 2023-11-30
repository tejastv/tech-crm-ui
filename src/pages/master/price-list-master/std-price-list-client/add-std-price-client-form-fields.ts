import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const StdPriceClientCurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;

const stdPriceClientCurrency: FormFieldType = createFormConfig(
  "stdpriceclientcurrencey",
  "Currency",
  "select",
  StdPriceClientCurrencyValidation,
  "Select Currency",
  {}
);

export const addStdPriceClientsFormFields = {
  stdPriceClientCurrency,
};
