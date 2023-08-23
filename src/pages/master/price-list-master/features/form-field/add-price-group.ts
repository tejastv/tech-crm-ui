import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const PriceCityGroupValidation = {
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

const PriceGroupCurrencyValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;
const PriceGroupCurrency2Validation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 20,
        message: "Select {label}",
    },
} as ValidationType;

export const priceCityGroupOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];




export const priceGroupCityOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceGroupMasterOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceGroup2MasterOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceGroupCurrencyOptions = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];
export const priceGroupCurrency2Options = [
    { value: "Mumbai", label: "200" },
    { value: "strawberry", label: "300" },
    { value: "vanilla", label: "400" },
  ];

export const pricegroupcity: FormFieldType = createFormConfig('city', 'City', 'slelect', PriceCityGroupValidation,'Select City',priceGroupCityOptions);
export const priceGroupSelect: FormFieldType = createFormConfig('priceGroup', 'Group', 'select', PriceGroupValidation,'Select Group',priceGroupMasterOptions);
export const priceGroupSelect2: FormFieldType = createFormConfig('priceGroup2', 'Group', 'select', PriceGroup2Validation,'Select Group',priceGroup2MasterOptions);
export const priceGroupCurrency: FormFieldType = createFormConfig('Pricegroupcurrencey', 'Currency', 'select', PriceGroupCurrencyValidation,'Select Currency',priceGroupCurrencyOptions);
export const priceGroupCurrency2: FormFieldType = createFormConfig('Pricegroupcurrencey', 'Currency', 'select', PriceGroupCurrency2Validation,'Select Currency',priceGroupCurrency2Options);

