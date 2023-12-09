import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const PriceLocalsourceValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "30 characters max",
  },
} as ValidationType;
const PurchesExchanegRateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const SellExchanegRateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const PriceCurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;
const PurchesDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message:
      "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  },
} as ValidationType;
const SellDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message:
      "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  },
} as ValidationType;

const priceLocalSource: FormFieldType = createFormConfig(
  "source",
  "Local Source",
  "slelect",
  PriceLocalsourceValidation,
  "Enter localSource",
  {}
);
const priceCurrency: FormFieldType = createFormConfig(
  "PriceCurrencey",
  "Currency",
  "select",
  PriceCurrencyValidation,
  "Select Currency",
  {}
);
const purchesExchanegRate: FormFieldType = createFormConfig(
  "emailCC",
  "Exchg. Rate(Rs.)",
  "text",
  PurchesExchanegRateValidation,
  "Enter Exchg. Rate(Rs.)"
);
const sellExchanegRate: FormFieldType = createFormConfig(
  "currencey",
  "Exchg. Rate(Rs.)",
  "text",
  SellExchanegRateValidation,
  "Enter Exchg. Rate(Rs.) "
);
const purchesDate: FormFieldType = createFormConfig(
  "purchesDate",
  "Date",
  "date",
  PurchesDateValidation,
  ""
);
const sellDate: FormFieldType = createFormConfig(
  "sellDate",
  "Date",
  "date",
  SellDateValidation,
  ""
);

export const addPriceFormFields = {
  priceLocalSource,
  priceCurrency,
  purchesExchanegRate,
  sellExchanegRate,
  purchesDate,
  sellDate,
};
