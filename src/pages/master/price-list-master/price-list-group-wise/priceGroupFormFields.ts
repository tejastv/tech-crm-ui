import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const PriceCityGroupValidation = {
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

const PriceGroupCurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;
const PriceGroupCurrency2Validation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "Please select a {label}",
  },
} as ValidationType;

// const priceCityGroupOptions = [
//   { value: "Mumbai", label: "200" },
//   { value: "strawberry", label: "300" },
//   { value: "vanilla", label: "400" },
// ];

const pricegroupcity: FormFieldType = createFormConfig(
  "city",
  "City",
  "slelect",
  PriceCityGroupValidation,
  "",
  {}
);
const priceGroupSelect: FormFieldType = createFormConfig(
  "priceGroup",
  "Group",
  "select",
  PriceGroupValidation,
  "",
  {}
);
const priceGroupSelect2: FormFieldType = createFormConfig(
  "priceGroup2",
  "Group",
  "select",
  PriceGroup2Validation,
  "",
  {}
);
const priceGroupCurrency: FormFieldType = createFormConfig(
  "Pricegroupcurrencey",
  "Currency",
  "select",
  PriceGroupCurrencyValidation,
  "",
  {},
  true
);
const priceGroupCurrency2: FormFieldType = createFormConfig(
  "Pricegroupcurrencey",
  "Currency",
  "select",
  PriceGroupCurrency2Validation,
  "",
  {}
);

export const priceGroupFormFields = {
  pricegroupcity,
  priceGroupSelect,
  priceGroupSelect2,
  priceGroupCurrency,
  priceGroupCurrency2,
};
