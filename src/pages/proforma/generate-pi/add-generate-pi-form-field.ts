import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const currencyValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const gstnValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    message: "Invalid GSTN format. The correct format is: 12ABCDE3456F7Z8",
  },
} as ValidationType;
const FromDateValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message:
      "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  },
} as ValidationType;

const CountryValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;

const CodeValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;

const gstValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;

const ToDateValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;

const symbolValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message:
      "Invalid symbol format. Please use alphanumeric characters or hyphens only.",
  },
} as ValidationType;

const currencyinwordValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[A-Za-z\s]+$/, // Allow only letters and spaces
    message:
      "Invalid Currency in Word format. Please enter a valid currency name (e.g., USD).",
  },
} as ValidationType;
const invoicenoValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[A-Za-z]{3}\d{3}$/, // Match three letters followed by three digits
    message:
      "Invalid Invoice Number format. Please enter a valid invoice number (e.g., ABC123).",
  },
} as ValidationType;
const amountValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{2})?$/, // Match digits with optional two decimal places
    message:
      "Invalid amount format. Please enter a valid amount (e.g., 123.45).",
  },
} as ValidationType;
const disamountValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{2})?$/, // Match digits with optional two decimal places
    message:
      "Invalid amount format. Please enter a valid amount (e.g., 123.45).",
  },
} as ValidationType;

const manualValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const stValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const stamountValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{2})?$/, // Match digits with optional two decimal places
    message:
      "Invalid amount format. Please enter a valid amount (e.g., 123.45).",
  },
} as ValidationType;

const cgstperValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const cgstValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const sgstperValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid SGST% format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const igstperValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid IGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const sgstValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid SGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const igstValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message:
      "Invalid IGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const subtotalValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^[0-9]+(\.[0-9]+)?$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;
const staxValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d+)?%$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;
const ecessValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d+)?%$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;
const krishicessValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d+(\.\d+)?%$/,
    message:
      "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;
const totalValidation = {
  required: {
    value: true,
    message: "{label} field is required",
  },
  pattern: {
    value: /^\d*\.?\d+$/,
    message:
      "Invalid total format. Please use a valid number format (e.g., 5 or 5.5).",
  },
} as ValidationType;

const clientField: FormFieldType = {
  config: {
    name: "client",
    label: "Client ",
    id: "client",
    options: [],
    placeholder: "Select Client ",
    validation: {
      required: {
        value: true,
        message: "Select Client",
      },
    },
  },
};

const currencyField: FormFieldType = createFormConfig(
  "currency",
  "Currency",
  "text",
  currencyValidation,
  ""
);
const gstnField: FormFieldType = createFormConfig(
  "gstn",
  "GSTN",
  "text",
  gstnValidation,
  ""
);

const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const fromdateField: FormFieldType = createFormConfig(
  "fromDate",
  "From",
  "date",
  FromDateValidation,
  formattedDate
);
const countryField: FormFieldType = createFormConfig(
  "country",
  "Country",
  "text",
  CountryValidation,
  ""
);

const stateField: FormFieldType = {
  config: {
    name: "state",
    label: "State ",
    id: "state",
    options: [],
    placeholder: "Select State ",
    validation: {
      required: {
        value: true,
        message: "Select State",
      },
    },
  },
};

const codeField: FormFieldType = createFormConfig(
  "code",
  "Code",
  "text",
  CodeValidation,
  ""
);
const gstField: FormFieldType = createFormConfig(
  "gst",
  "Gst Yes/No",
  "text",
  gstValidation,
  ""
);

const todateeField: FormFieldType = createFormConfig(
  "toDate",
  "To Date",
  "date",
  ToDateValidation,
  formattedDate
);

const symbolField: FormFieldType = createFormConfig(
  "symbol",
  "Symbol",
  "text",
  symbolValidation,
  ""
);

const currencyinwordField: FormFieldType = createFormConfig(
  "currencyinword",
  "Currency in Word",
  "text",
  currencyinwordValidation,
  ""
);

const fyearField: FormFieldType = {
  config: {
    name: "fyear",
    label: "F.Year ",
    id: "fyear",
    options: [],
    placeholder: "Select F.year ",
    validation: {
      required: {
        value: true,
        message: "Select F.Year",
      },
    },
  },
};

const invoicenoField: FormFieldType = createFormConfig(
  "invoiceno",
  "Invoice No.",
  "text",
  invoicenoValidation,
  ""
);
const manualField: FormFieldType = createFormConfig(
  "manual",
  "Manual",
  "checkbox",
  manualValidation,
  ""
);
const amountField: FormFieldType = createFormConfig(
  "amount",
  "Amount",
  "text",
  amountValidation,
  ""
);
const disamountField: FormFieldType = createFormConfig(
  "disamt",
  "Dis.Amt",
  "text",
  disamountValidation,
  ""
);

const stField: FormFieldType = createFormConfig(
  "st",
  "ST%",
  "text",
  stValidation,
  ""
);

const cgstperField: FormFieldType = createFormConfig(
  "cgstper",
  "CGST%",
  "text",
  cgstperValidation,
  ""
);

const stamountField: FormFieldType = createFormConfig(
  "stamount",
  "ST Amount",
  "text",
  stamountValidation,
  ""
);

const cgstField: FormFieldType = createFormConfig(
  "cgst",
  "CGST",
  "text",
  cgstValidation,
  ""
);

const dateField: FormFieldType = createFormConfig(
  "date",
  "Date",
  "date",
  cgstValidation,
  formattedDate
);

const donotField: FormFieldType = createFormConfig(
  "Do Not Comparereportwithinvoicedate",
  "Do Not Compare Report with Invoice Date",
  "checkbox",
  manualValidation,
  ""
);

const subtotalField: FormFieldType = createFormConfig(
  "subtotal",
  "Sub Total",
  "text",
  subtotalValidation,
  ""
);

const sgstperField: FormFieldType = createFormConfig(
  "sgstper",
  "SGST%",
  "text",
  sgstperValidation,
  ""
);

const igstperField: FormFieldType = createFormConfig(
  "igstper",
  "IGST%",
  "text",
  igstperValidation,
  ""
);

const sgstField: FormFieldType = createFormConfig(
  "sgst",
  "SGST",
  "text",
  sgstValidation,
  ""
);

const igstField: FormFieldType = createFormConfig(
  "igst",
  "IGST",
  "text",
  igstValidation,
  ""
);
const staxField: FormFieldType = createFormConfig(
  "stax",
  "S Tax.%",
  "text",
  staxValidation,
  ""
);
const ecessField: FormFieldType = createFormConfig(
  "ecess",
  "E Cess.%",
  "text",
  ecessValidation,
  ""
);
const krishicessField: FormFieldType = createFormConfig(
  "krishicess",
  "Krishi Cess. %",
  "text",
  krishicessValidation,
  ""
);
const totalField: FormFieldType = createFormConfig(
  "total",
  "Total",
  "text",
  totalValidation,
  ""
);

export const addGeneratePiFormFields = {
  clientField,
  currencyField,
  gstnField,
  fromdateField,
  countryField,
  stateField,
  codeField,
  gstField,
  todateeField,
  symbolField,
  currencyinwordField,
  fyearField,
  invoicenoField,
  manualField,
  amountField,
  disamountField,
  stField,
  cgstperField,
  stamountField,
  cgstField,
  dateField,
  donotField,
  subtotalField,
  sgstperField,
  igstperField,
  sgstField,
  igstField,
  staxField,
  ecessField,
  krishicessField,
  totalField,
};
