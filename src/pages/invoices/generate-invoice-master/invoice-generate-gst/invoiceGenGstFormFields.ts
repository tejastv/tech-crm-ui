import { FormFieldType, MapType, Options, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const currencyValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const gstnValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  //   message: "Invalid GSTN format. The correct format is: 12ABCDE3456F7Z8",
  // },
} as ValidationType;

const gstnActualBuyreValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  //   message: "Invalid GSTN format. The correct format is: 12ABCDE3456F7Z8",
  // },
} as ValidationType;

// const actualBuyreValidation = {
//   required: {
//     value: false,
//     message: "{label} field is rquired",
//   },
//   pattern: {
//     value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
//     message: "Invalid GSTN format. The correct format is: 12ABCDE3456F7Z8",
//   },
// } as ValidationType;

const fromDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message:
  //     "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;

const countryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const codeValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;

const gstValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;

const toDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const symbolValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message:
  //     "Invalid symbol format. Please use alphanumeric characters or hyphens only.",
  // },
} as ValidationType;

const currencyInWordValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[A-Za-z\s]+$/, // Allow only letters and spaces
  //   message:
  //     "Invalid Currency in Word format. Please enter a valid currency name (e.g., USD).",
  // },
} as ValidationType;
const invoiceNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[A-Za-z]{3}\d{3}$/, // Match three letters followed by three digits
  //   message:
  //     "Invalid Invoice Number format. Please enter a valid invoice number (e.g., ABC123).",
  // },
} as ValidationType;
const amountValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{2})?$/, // Match digits with optional two decimal places
  //   message:
  //     "Invalid amount format. Please enter a valid amount (e.g., 123.45).",
  // },
} as ValidationType;
const disAmountValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{2})?$/, // Match digits with optional two decimal places
  //   message:
  //     "Invalid amount format. Please enter a valid amount (e.g., 123.45).",
  // },
} as ValidationType;

const manualValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const stValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const stAmountValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{2})?$/, // Match digits with optional two decimal places
  //   message:
  //     "Invalid amount format. Please enter a valid amount (e.g., 123.45).",
  // },
} as ValidationType;

const cgstPerValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const cgstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const sgstPerValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid SGST% format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const igstPerValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid IGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const sgstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid SGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const igstValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d{1,2})?$/,
  //   message:
  //     "Invalid IGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const subTotalValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]+(\.[0-9]+)?$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;
const sTaxValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d+)?%$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;
const eCessValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d+)?%$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;
const krishiCessValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+(\.\d+)?%$/,
  //   message:
  //     "Invalid CGST format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;
const totalValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d*\.?\d+$/,
  //   message:
  //     "Invalid total format. Please use a valid number format (e.g., 5 or 5.5).",
  // },
} as ValidationType;

const actionOption: MapType<Options> = {
  new: { value: "manual", label: "Manual" },
  // renew: { value: "renew", label: "Specific Client Datewise" },
};

const actionOptiontwo: MapType<Options> = {
  new: { value: "y", label: "Do Not Compare Report with Invoice Date" },
};

const client: FormFieldType = {
  config: {
    name: "clientId",
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

const actualBuyreField: FormFieldType = {
  config: {
    name: "actualBuyerId",
    label: "Actual Buyer",
    id: "actualBuyer",
    options: [],
    placeholder: "Select Actual Buyer ",
    validation: {
      required: {
        value: true,
        message: "Select Actual Buyer",
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
const gstnActualBuyreField: FormFieldType = createFormConfig(
  "gstn",
  "GSTN",
  "text",
  gstnActualBuyreValidation,
  ""
);

const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const fromDateField: FormFieldType = createFormConfig(
  "startDate",
  "From Date",
  "date",
  fromDateValidation,
  formattedDate
);
const countryField: FormFieldType = createFormConfig(
  "country",
  "Country",
  "text",
  countryValidation,
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
        value: false,
        message: "Select State",
      },
    },
  },
};

const stateActualBuyreField: FormFieldType = {
  config: {
    name: "stateActualBuyre",
    label: "State ",
    id: "stateActualBuyre",
    options: [],
    placeholder: "Select State ",
    validation: {
      required: {
        value: false,
        message: "Select State",
      },
    },
  },
};

const codeField: FormFieldType = createFormConfig(
  "code",
  "Code",
  "text",
  codeValidation,
  ""
);
const gstField: FormFieldType = createFormConfig(
  "gst",
  "Gst Yes/No",
  "text",
  gstValidation,
  ""
);
const gstActualBuyreField: FormFieldType = createFormConfig(
  "gstActualBuyre",
  "Gst Yes/No",
  "text",
  gstValidation,
  ""
);

const toDateField: FormFieldType = createFormConfig(
  "endDate",
  "To Date",
  "date",
  toDateValidation,
  formattedDate
);

const symbolField: FormFieldType = createFormConfig(
  "symbol",
  "Symbol",
  "text",
  symbolValidation,
  ""
);

const currencyInwardField: FormFieldType = createFormConfig(
  "currencyinword",
  "Currency in Word",
  "text",
  currencyInWordValidation,
  ""
);

const fYearField: FormFieldType = {
  config: {
    name: "fYear",
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

const invoiceNoField: FormFieldType = createFormConfig(
  "invoiceNo",
  "Invoice No.",
  "text",
  invoiceNoValidation,
  "",
  {},
  true
);
const manualField: FormFieldType = createFormConfig(
  "manual",
  "",
  "checkbox",
  manualValidation,
  "",
  actionOption
);
const amountField: FormFieldType = createFormConfig(
  "amount",
  "Amount",
  "text",
  amountValidation,
  "",
  {},
  true
);
const disAmountField: FormFieldType = createFormConfig(
  "discount",
  "Dis.Amt",
  "text",
  disAmountValidation,
  "",
  {},
  true
);

const stField: FormFieldType = createFormConfig(
  "st",
  "ST%",
  "text",
  stValidation,
  ""
);

const cgstPerField: FormFieldType = createFormConfig(
  "cgstPer",
  "CGST%",
  "text",
  cgstPerValidation,
  "",
  {},
  true
);

const stAmountField: FormFieldType = createFormConfig(
  "stamount",
  "ST Amount",
  "text",
  stAmountValidation,
  ""
);

const cgstField: FormFieldType = createFormConfig(
  "cgstAmount",
  "CGST",
  "text",
  cgstValidation,
  "",
  {},
  true
);

const dateField: FormFieldType = createFormConfig(
  "date",
  "Date",
  "date",
  cgstValidation,
  formattedDate
);

const doNotField: FormFieldType = createFormConfig(
  "Do Not Comparereportwithinvoicedate",
  "",
  "checkbox",
  manualValidation,
  "",
  actionOptiontwo
);

const subtotalField: FormFieldType = createFormConfig(
  "subTotal",
  "Sub Total",
  "text",
  subTotalValidation,
  "",
  {},
  true
);

const sGstPerField: FormFieldType = createFormConfig(
  "sgstPer",
  "SGST%",
  "text",
  sgstPerValidation,
  "",
  {},
  true
);

const iGstPerField: FormFieldType = createFormConfig(
  "igstPer",
  "IGST%",
  "text",
  igstPerValidation,
  "",
  {},
  true
);

const sgstField: FormFieldType = createFormConfig(
  "sgstAmount",
  "SGST",
  "text",
  sgstValidation,
  "",
  {},
  true
);

const igstField: FormFieldType = createFormConfig(
  "igstAmount",
  "IGST",
  "text",
  igstValidation,
  "",
  {},
  true
);
const sTaxField: FormFieldType = createFormConfig(
  "stax",
  "S Tax.%",
  "text",
  sTaxValidation,
  ""
);
const eCessField: FormFieldType = createFormConfig(
  "ecess",
  "E Cess.%",
  "text",
  eCessValidation,
  ""
);
const krishiCessField: FormFieldType = createFormConfig(
  "krishicess",
  "Krishi Cess. %",
  "text",
  krishiCessValidation,
  ""
);
const totalField: FormFieldType = createFormConfig(
  "total",
  "Total",
  "text",
  totalValidation,
  "",
  {},
  true
);

// export const fetchEnquiryFormFields = {

// };

export const invoiceGenGstFormFields = {
  fYearField,
  client,
  actualBuyreField,
  fromDateField,
  toDateField,
  currencyField,
  gstnField,
  gstnActualBuyreField,
  countryField,
  stateField,
  stateActualBuyreField,
  codeField,
  gstField,
  gstActualBuyreField,
  symbolField,
  currencyInwardField,
  invoiceNoField,
  manualField,
  amountField,
  disAmountField,
  stField,
  cgstPerField,
  stAmountField,
  cgstField,
  dateField,
  doNotField,
  subtotalField,
  sGstPerField,
  iGstPerField,
  sgstField,
  igstField,
  sTaxField,
  eCessField,
  krishiCessField,
  totalField,
};
