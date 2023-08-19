import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const CurrencyValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Currency ",
    },
} as ValidationType;
const CurrencyWordValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Currency ",
    },
} as ValidationType;
const SymbolValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Symbol ",
    },
} as ValidationType;

const PurchesExchanegValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;
const SellExchanegValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;
const PurchesDateValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    pattern: {
        value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        message: "Invalid date",
      },
} as ValidationType;
const SellDateValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    pattern: {
        value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        message: "Invalid date",
      },
} as ValidationType;



export const currency: FormFieldType = createFormConfig('currency', 'Currency ', 'text',CurrencyValidation,'Currency');
export const symbol: FormFieldType = createFormConfig('symbol', 'Symbol ', 'text',SymbolValidation,'Symbol');
export const currencyWord: FormFieldType = createFormConfig('currecnyword', 'Currency in Word ', 'text',CurrencyWordValidation,'Currency in word');

// Purchase
export const purchesExchaneg: FormFieldType = createFormConfig('emailCC', 'Exchg. Rate(Rs.)', 'text', PurchesExchanegValidation,'Enter Exchg. Rate(Rs.)');
export const sellExchaneg: FormFieldType = createFormConfig('currencey', 'Exchg. Rate(Rs.)', 'text', SellExchanegValidation,'Enter Exchg. Rate(Rs.) ');
export const pDate: FormFieldType = createFormConfig('purchesDate', 'Date', 'date', PurchesDateValidation,'',);
export const sDate: FormFieldType = createFormConfig('sellDate', 'Date', 'date', SellDateValidation,'',);