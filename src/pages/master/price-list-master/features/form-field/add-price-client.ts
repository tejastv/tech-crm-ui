import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const PriceCityValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;


const PriceClientValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;

const PriceClient2Validation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;
const PriceClientCurrencyValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;
const PriceGroupValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;
const PriceGroup2Validation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;
const PriceCurrencyGroupValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;
const PriceCurrencyClientValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;

export const priceCityOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceClientCurrencyOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceCurrencyClientOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceClientOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceClient2Options = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceGroupOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceGroup2Options = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceCurrencyGroupOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];

export const pricecity: FormFieldType = createFormConfig('city', 'City', 'slelect', PriceCityValidation,'Select City',priceCityOptions);
export const priceClient: FormFieldType = createFormConfig('Priceclient', 'Client', 'select', PriceClientValidation,'Select Client',priceClientOptions);
export const priceClient2: FormFieldType = createFormConfig('Priceclient2', 'Client', 'select', PriceClient2Validation,'Select Client',priceClient2Options);
export const priceClientCurrency: FormFieldType = createFormConfig('Priceclientcurrencey', 'Currency', 'select', PriceClientCurrencyValidation,'Select Currency',priceClientCurrencyOptions);
export const priceGroup: FormFieldType = createFormConfig('priceGroup', 'Group', 'select', PriceGroupValidation,'Select Group',priceGroupOptions);
export const priceGroup2: FormFieldType = createFormConfig('priceGroup2', 'Group', 'select', PriceGroup2Validation,'Select Group',priceGroup2Options);
export const priceCurrencyGroup: FormFieldType = createFormConfig('Pricecurrenceygroup', 'Currency', 'select', PriceCurrencyGroupValidation,'Select Currency',priceCurrencyGroupOptions);
export const priceCurrencyClient: FormFieldType = createFormConfig('PricecurrenceyClient', 'Currency', 'select', PriceCurrencyClientValidation,'Select Currency',priceCurrencyClientOptions);
