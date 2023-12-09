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
const supplierNameValidation = {
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
const invoiceNoValidation = {
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
    name: "fYear",
    label: "F. Year",
    id: "fYear",
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
const invoiceDateField: FormFieldType = createFormConfig(
  "invoiceDate",
  "Invoice Date",
  "date",
  invoiceDateValidation,
  formattedDate
);

const grsAmountField: FormFieldType = createFormConfig(
  "grsAmount",
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
const edCessField: FormFieldType = createFormConfig(
  "edCess",
  "Ed. Cess",
  "text",
  edCessValidation,
  ""
);

const calculateField: FormFieldType = createFormConfig(
  "calculateTax",
  "",
  "text",
  calculateValidation,
  "",
  {
    tax: { value: true, label: "Calculate Tax" },
  }
);
const invoiceAmountField: FormFieldType = createFormConfig(
  "invoiceAmount",
  "Invoice Amount",
  "text",
  invoiceAmountValidation,
  ""
);
const supplierNameField: FormFieldType = createFormConfig(
  "supplierName",
  "Supplier Name",
  "text",
  supplierNameValidation,
  ""
);
const notesField: FormFieldType = createFormConfig(
  "note",
  "Note ",
  "text",
  noteValidation,
  ""
);
const invoiceNoField: FormFieldType = createFormConfig(
  "invoiceNo",
  "Invoice No",
  "text",
  invoiceNoValidation,
  ""
);
const blankField: FormFieldType = createFormConfig(
  "blank",
  "",
  "text",
  invoiceNoValidation,
  ""
);

export const addPurchaseBillsFormFields = {
  fYearField,
  invoiceDateField,
  grsAmountField,
  calculateField,
  stField,
  edCessField,
  invoiceAmountField,
  supplierNameField,
  notesField,
  invoiceNoField,
  blankField,
};
