import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const PriceCityValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;

const PriceClientValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;

const PriceClient2Validation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;
const PriceClientCurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;
const PriceGroupValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;
const PriceGroup2Validation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;
const PriceCurrencyGroupValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;
const PriceCurrencyClientValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;

const pricecity: FormFieldType = createFormConfig(
  "city",
  "City",
  "slelect",
  PriceCityValidation,
  "Select City",
  {}
);
const priceClient: FormFieldType = createFormConfig(
  "Priceclient",
  "Client",
  "select",
  PriceClientValidation,
  "Select Client",
  {}
);
const priceClient2: FormFieldType = createFormConfig(
  "Priceclient2",
  "Client",
  "select",
  PriceClient2Validation,
  "Select Client",
  {}
);
const priceClientCurrency: FormFieldType = createFormConfig(
  "Priceclientcurrencey",
  "Currency",
  "select",
  PriceClientCurrencyValidation,
  "Currency",
  {},
  true
);
const priceGroup: FormFieldType = createFormConfig(
  "priceGroup",
  "Group",
  "select",
  PriceGroupValidation,
  "Group",
  {},
  true
);
const priceGroup2: FormFieldType = createFormConfig(
  "priceGroup2",
  "Group",
  "select",
  PriceGroup2Validation,
  "Select Group",
  {}
);
const priceCurrencyGroup: FormFieldType = createFormConfig(
  "Pricecurrenceygroup",
  "Currency",
  "select",
  PriceCurrencyGroupValidation,
  "Select Currency",
  {}
);
const priceCurrencyClient: FormFieldType = createFormConfig(
  "PricecurrenceyClient",
  "Currency",
  "select",
  PriceCurrencyClientValidation,
  "Select Currency",
  {}
);

export const priceClientFormFields = {
  pricecity,
  priceClient,
  priceClient2,
  priceClientCurrency,
  priceGroup,
  priceGroup2,
  priceCurrencyGroup,
  priceCurrencyClient,
};
