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

const priceCityOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceClientCurrencyOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceCurrencyClientOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceClientOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceClient2Options = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceGroupOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceGroup2Options = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceCurrencyGroupOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];

const pricecity: FormFieldType = createFormConfig(
  "city",
  "City",
  "slelect",
  PriceCityValidation,
  "Select City",
  priceCityOptions
);
const priceClient: FormFieldType = createFormConfig(
  "Priceclient",
  "Client",
  "select",
  PriceClientValidation,
  "Select Client",
  priceClientOptions
);
const priceClient2: FormFieldType = createFormConfig(
  "Priceclient2",
  "Client",
  "select",
  PriceClient2Validation,
  "Select Client",
  priceClient2Options
);
const priceClientCurrency: FormFieldType = createFormConfig(
  "Priceclientcurrencey",
  "Currency",
  "select",
  PriceClientCurrencyValidation,
  "Select Currency",
  priceClientCurrencyOptions
);
const priceGroup: FormFieldType = createFormConfig(
  "priceGroup",
  "Group",
  "select",
  PriceGroupValidation,
  "Select Group",
  priceGroupOptions
);
const priceGroup2: FormFieldType = createFormConfig(
  "priceGroup2",
  "Group",
  "select",
  PriceGroup2Validation,
  "Select Group",
  priceGroup2Options
);
const priceCurrencyGroup: FormFieldType = createFormConfig(
  "Pricecurrenceygroup",
  "Currency",
  "select",
  PriceCurrencyGroupValidation,
  "Select Currency",
  priceCurrencyGroupOptions
);
const priceCurrencyClient: FormFieldType = createFormConfig(
  "PricecurrenceyClient",
  "Currency",
  "select",
  PriceCurrencyClientValidation,
  "Select Currency",
  priceCurrencyClientOptions
);

export const addPriceClientFormFields = {
  pricecity,
  priceClient,
  priceClient2,
  priceClientCurrency,
  priceGroup,
  priceGroup2,
  priceCurrencyGroup,
  priceCurrencyClient,
};
