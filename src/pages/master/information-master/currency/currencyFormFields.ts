import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const CurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "Please select a {label}",
  },
} as ValidationType;
const CurrencyWordValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "Please select a {label}",
  },
} as ValidationType;
const SymbolValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message:
      "Invalid symbol format. Please use alphanumeric characters or hyphens only.",
  },
} as ValidationType;

const purchaseExchangeValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid exchange rate format. Please use a valid number format (e.g., 123.45).",
  },
} as ValidationType;
const sellExchangeValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid exchange rate format. Please use a valid number format (e.g., 123.45).",
  },
} as ValidationType;
const purchaseDateValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;
const SellDateValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;

const currencyField: FormFieldType = createFormConfig(
  "currencyType",
  "Currency ",
  "text",
  CurrencyValidation,
  ""
);
const symbolField: FormFieldType = createFormConfig(
  "currencySymbol",
  "Symbol ",
  "text",
  SymbolValidation,
  ""
);
const currencyWordField: FormFieldType = createFormConfig(
  "currencyInWord",
  "Currency in Word ",
  "text",
  CurrencyWordValidation,
  ""
);

// Purchase
const purchaseExchangeField: FormFieldType = createFormConfig(
  "exchangeRateRs",
  "Exchg. Rate(Rs.)",
  "text",
  purchaseExchangeValidation,
  ""
);
const sellExchangeField: FormFieldType = createFormConfig(
  "exchangeRateRsSell",
  "Exchg. Rate(Rs.)",
  "text",
  sellExchangeValidation,
  ""
);
const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const pDateField: FormFieldType = createFormConfig(
  "entryDate",
  "Date",
  "date",
  purchaseDateValidation,
  formattedDate
);
const sDateField: FormFieldType = createFormConfig(
  "entryDateSell",
  "Date",
  "date",
  SellDateValidation,
  formattedDate
);

export const currencyFormFields = {
  currencyField,
  symbolField,
  currencyWordField,
  purchaseExchangeField,
  sellExchangeField,
  pDateField,
  sDateField,
};
