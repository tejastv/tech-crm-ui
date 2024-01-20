import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const finYearValidation = {
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
const staXValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const eDcessValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const cGstValidation = {
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
const sGstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid SGST %",
  },
} as ValidationType;
const iGstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid IGST %",
  },
} as ValidationType;
const startInvNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid  start ref no",
  },
} as ValidationType;
const startRefNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Invalid CGST %",
  },
} as ValidationType;

const finYear: FormFieldType = createFormConfig(
  "finYear",
  "Fin. Year",
  "number",
  finYearValidation,
  "",
  {},
  true
);
const totalTax: FormFieldType = createFormConfig(
  "totalTax",
  "Total Tax",
  "number",
  totaltaxValidation,
  ""
);
const stax: FormFieldType = createFormConfig(
  "stax",
  "S. Tax",
  "number",
  staXValidation,
  ""
);
const edcess: FormFieldType = createFormConfig(
  "eduCess",
  "Ed.Cess",
  "number",
  eDcessValidation,
  ""
);
const cgst: FormFieldType = createFormConfig(
  "cgstper",
  "CGST %",
  "number",
  cGstValidation,
  ""
);
const sgst: FormFieldType = createFormConfig(
  "sgstper",
  "SGST %",
  "number",
  sGstValidation,
  ""
);
const igst: FormFieldType = createFormConfig(
  "igstper",
  "IGST %",
  "number",
  iGstValidation,
  ""
);
const startInvNo: FormFieldType = createFormConfig(
  "startinno",
  "Start Inv. No.",
  "text",
  startInvNoValidation,
  ""
);
const startRefNo: FormFieldType = createFormConfig(
  "startRefNo",
  "Start Ref. No.",
  "text",
  startRefNoValidation,
  ""
);

export const finYearFormFields = {
  finYear,
  totalTax,
  stax,
  edcess,
  cgst,
  sgst,
  igst,
  startInvNo,
  startRefNo,
};
