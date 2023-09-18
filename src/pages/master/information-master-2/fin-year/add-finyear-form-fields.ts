import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const finyearValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const totaltaxValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const staxValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const edcessValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const cgstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;
const sgstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid SGST %",
  },
} as ValidationType;
const igstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid IGST %",
  },
} as ValidationType;
const startinvnoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid  start ref no",
  },
} as ValidationType;
const startrefnoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid CGST %",
  },
} as ValidationType;

const finyear: FormFieldType = createFormConfig(
  "finYear",
  "Fin. Year",
  "number",
  finyearValidation,
  "FIn Year",
  true
);
const totaltax: FormFieldType = createFormConfig(
  "totaltax",
  "Total Tax",
  "number",
  totaltaxValidation,
  "Total Tax"
);
const stax: FormFieldType = createFormConfig(
  "stax",
  "S. Tax",
  "number",
  staxValidation,
  "S. Tax"
);
const edcess: FormFieldType = createFormConfig(
  "eduCess",
  "Ed.Cess",
  "number",
  edcessValidation,
  "Ed. Cess"
);
const cgst: FormFieldType = createFormConfig(
  "cgstper",
  "CGST %",
  "number",
  cgstValidation,
  "CGST %"
);
const sgst: FormFieldType = createFormConfig(
  "sgstper",
  "SGST %",
  "number",
  sgstValidation,
  "SGST %"
);
const igst: FormFieldType = createFormConfig(
  "igstper",
  "IGST %",
  "number",
  igstValidation,
  "IGST %"
);
const startinvno: FormFieldType = createFormConfig(
  "startinno",
  "Start Inv. No.",
  "text",
  startinvnoValidation,
  "Start Inv.No."
);
const startrefno: FormFieldType = createFormConfig(
  "startrefno",
  "Start Ref. No.",
  "text",
  startrefnoValidation,
  "Start Ref. No."
);

export const addFinYearFormFields = {
  finyear,
  totaltax,
  stax,
  edcess,
  cgst,
  sgst,
  igst,
  startinvno,
  startrefno,
};
