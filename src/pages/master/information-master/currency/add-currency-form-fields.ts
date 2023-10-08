import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const CurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Please select a {label}",
  },
} as ValidationType;
const CurrencyWordValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Please select a {label}",
  },
} as ValidationType;
const SymbolValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message:
      "Invalid symbol format. Please use alphanumeric characters or hyphens only.",
  },
} as ValidationType;

const PurchesExchanegValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid exchange rate format. Please use a valid number format (e.g., 123.45).",
  },
} as ValidationType;
const SellExchanegValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid exchange rate format. Please use a valid number format (e.g., 123.45).",
  },
} as ValidationType;
const PurchesDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;
const SellDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
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
  "Currency"
);
const symbolField: FormFieldType = createFormConfig(
  "currencySymbol",
  "Symbol ",
  "text",
  SymbolValidation,
  "Symbol"
);
const currencyWordField: FormFieldType = createFormConfig(
  "currencyInWord",
  "Currency in Word ",
  "text",
  CurrencyWordValidation,
  "Currency in word"
);

// Purchase
const purchesExchanegField: FormFieldType = createFormConfig(
  "exchangeRateRs",
  "Exchg. Rate(Rs.)",
  "text",
  PurchesExchanegValidation,
  "Enter Exchg. Rate(Rs.)"
);
const sellExchanegField: FormFieldType = createFormConfig(
  "exchangeRateRsSell",
  "Exchg. Rate(Rs.)",
  "text",
  SellExchanegValidation,
  "Enter Exchg. Rate(Rs.) "
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
  PurchesDateValidation,
  formattedDate
);
const sDateField: FormFieldType = createFormConfig(
  "entryDateSell",
  "Date",
  "date",
  SellDateValidation,
  formattedDate
);

export const addCurrencyFormFields = {
  currencyField,
  symbolField,
  currencyWordField,
  purchesExchanegField,
  sellExchanegField,
  pDateField,
  sDateField,
};
