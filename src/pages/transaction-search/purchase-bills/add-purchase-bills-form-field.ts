import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
// const CurrencyValidation = {
//   required: {
//     value: true,
//     message: "{label} field is rquired",
//   },
//   maxLength: {
//     value: 30,
//     message: "Please select a {label}",
//   },
// } as ValidationType;
const GrsAmountValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: " a {label}",
  },
} as ValidationType;
const STValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "use alphanumeric characters or hyphens only.",
  },
} as ValidationType;

const edCessValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "use alphanumeric characters or hyphens only.",
  },
} as ValidationType;
const invoiceAmountValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "use alphanumeric characters or hyphens only.",
  },
} as ValidationType;
const suppliernameValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;
const noteValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "use alphanumeric characters or hyphens only.",
  },
} as ValidationType;
const invoicenoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "use alphanumeric characters or hyphens only.",
  },
} as ValidationType;
const invoiceDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {},
} as ValidationType;
const calculateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {},
} as ValidationType;

const fYearField: FormFieldType = {
  config: {
    name: "fyear",
    label: "F. Year",
    id: "fyear",
    options: [],
    placeholder: "Select  ",
    validation: {
      required: {
        value: true,
        message: "Select ",
      },
    },
  },
};

const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const invoicedateField: FormFieldType = createFormConfig(
  "invoicedate",
  "Invoice Date",
  "date",
  invoiceDateValidation,
  formattedDate
);

const grsamountField: FormFieldType = createFormConfig(
  "grsamount",
  "Grs. Amount",
  "text",
  GrsAmountValidation,
  "Currency in word"
);

// Purchase
const stField: FormFieldType = createFormConfig(
  "st",
  "ST",
  "text",
  STValidation,
  ""
);
const edcessField: FormFieldType = createFormConfig(
  "edcess",
  "Ed. Cess",
  "text",
  edCessValidation,
  ""
);

const calculateField: FormFieldType = createFormConfig(
  "calculatetax",
  "Calculate Tax",
  "text",
  calculateValidation,
  ""
);
const invoiceamountField: FormFieldType = createFormConfig(
  "invoiceamount",
  "Invoice Amount",
  "text",
  invoiceAmountValidation,
  ""
);
const suplliernameField: FormFieldType = createFormConfig(
  "suplliername",
  "Supllier Name",
  "text",
  suppliernameValidation,
  ""
);
const notesField: FormFieldType = createFormConfig(
  "note",
  "Note ",
  "text",
  noteValidation,
  ""
);
const invoicenoField: FormFieldType = createFormConfig(
  "invoiceno",
  "Invoice No",
  "text",
  invoicenoValidation,
  ""
);
const blankField: FormFieldType = createFormConfig(
  "blank",
  "",
  "text",
  invoicenoValidation,
  ""
);

export const addPurchaseBillsFormFields = {
  fYearField,
  invoicedateField,
  grsamountField,
  calculateField,
  stField,
  edcessField,
  invoiceamountField,

  suplliernameField,
  notesField,

  invoicenoField,
  blankField,
};
