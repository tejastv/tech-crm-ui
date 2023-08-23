import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const finyearValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid Fin Year",
  },
} as ValidationType;
const totaltaxValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid Fin Year",
  },
} as ValidationType;
const staxValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid S Tax",
  },
} as ValidationType;
const edcessValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid E Cess",
  },
} as ValidationType;
const cgstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid CGST %",
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
  "finyear",
  "Fin. Year",
  "text",
  finyearValidation,
  "FIn Year"
);
const totaltax: FormFieldType = createFormConfig(
  "totaltax",
  "Total Tax",
  "text",
  totaltaxValidation,
  "Total Tax"
);
const stax: FormFieldType = createFormConfig(
  "stax",
  "S. Tax",
  "text",
  staxValidation,
  "Total Tax"
);
const edcess: FormFieldType = createFormConfig(
  "edcess",
  "Ed.Cess",
  "text",
  edcessValidation,
  "Ed. Cess"
);
const cgst: FormFieldType = createFormConfig(
  "cgst",
  "CGST %",
  "text",
  cgstValidation,
  "CGST %"
);
const sgst: FormFieldType = createFormConfig(
  "sgst",
  "SGST %",
  "text",
  sgstValidation,
  "SGST %"
);
const igst: FormFieldType = createFormConfig(
  "igst",
  "IGST %",
  "text",
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
