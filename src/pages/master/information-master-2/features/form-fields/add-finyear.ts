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
      message: "Invalid  start ref no"
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

export const finyear: FormFieldType = createFormConfig('finyear', 'Fin. Year', 'text',finyearValidation,'FIn Year');
export const totaltax: FormFieldType = createFormConfig('totaltax', 'Total Tax', 'text',totaltaxValidation,'Total Tax');
export const stax: FormFieldType = createFormConfig('stax', 'S. Tax', 'text',staxValidation,'Total Tax');
export const edcess: FormFieldType = createFormConfig('edcess', 'Ed.Cess', 'text',edcessValidation,'Ed. Cess');
export const cgst: FormFieldType = createFormConfig('cgst', 'CGST %', 'text',cgstValidation,'CGST %');
export const sgst: FormFieldType = createFormConfig('sgst', 'SGST %', 'text',sgstValidation,'SGST %');
export const igst: FormFieldType = createFormConfig('igst', 'IGST %', 'text',igstValidation,'IGST %');
export const startinvno: FormFieldType = createFormConfig('startinno', 'Start Inv. No.', 'text',startinvnoValidation,'Start Inv.No.');
export const startrefno: FormFieldType = createFormConfig('startrefno', 'Start Ref. No.', 'text',startrefnoValidation,'Start Ref. No.');