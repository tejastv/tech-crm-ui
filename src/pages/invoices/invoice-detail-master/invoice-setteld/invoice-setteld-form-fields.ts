import { FormFieldType, MapType, Options, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const fromDateValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message:
      "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  },
} as ValidationType;

const toDateValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const allClientDatewiseValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const invoicesValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const totalamountValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const recivedValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const tdsValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const outStandingValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;

const fYearField: FormFieldType = {
  config: {
    name: "fyear",
    label: "F.Year ",
    id: "fyear",
    options: [],
    placeholder: "Select F.year ",
    validation: {
      required: {
        value: false,
        message: "Select F.Year",
      },
    },
  },
};

const actionOption: MapType<Options> = {
  new: { value: "new", label: "All Client Datewise" },
  renew: { value: "renew", label: "Specific Client Datewise" },
};
const allClientDatewiseField: FormFieldType = createFormConfig(
  "allClientDatewise",
  "",
  "radio",
  allClientDatewiseValidation,
  "",
  actionOption
);

const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const fromDateField: FormFieldType = createFormConfig(
  "fromDate",
  "From",
  "date",
  fromDateValidation,
  formattedDate
);

const toDateField: FormFieldType = createFormConfig(
  "toDate",
  "To Date",
  "date",
  toDateValidation,
  formattedDate
);

const totalAmountField: FormFieldType = createFormConfig(
  "totalamount",
  "Total Amount",
  "text",
  totalamountValidation,
  ""
);

const recivedField: FormFieldType = createFormConfig(
  "recived",
  "Recived",
  "text",
  recivedValidation,
  ""
);

const tdsField: FormFieldType = createFormConfig(
  "tds",
  "TDS",
  "date",
  tdsValidation,
  ""
);

const outStandingField: FormFieldType = createFormConfig(
  "outstanding",
  "OutStanding",
  "text",
  outStandingValidation,
  ""
);
const cityField: FormFieldType = {
  config: {
    name: "city",
    label: "City ",
    id: "city",
    options: [],
    placeholder: "Select City ",
    validation: {
      required: {
        value: false,
        message: "Select City",
      },
    },
  },
};

const clientField: FormFieldType = {
  config: {
    name: "client",
    label: "Client ",
    id: "client",
    options: [],
    placeholder: "Select Client ",
    validation: {
      required: {
        value: false,
        message: "Select Client",
      },
    },
  },
};

const currencyField: FormFieldType = {
  config: {
    name: "currency",
    label: "Currency ",
    id: "currency",
    options: [],
    placeholder: "Select Currency ",
    validation: {
      required: {
        value: false,
        message: "Select Currency",
      },
    },
  },
};

export const invoiceListSetteldFormFields = {
  fYearField,
  fromDateField,
  toDateField,
  cityField,
  clientField,
  allClientDatewiseField,
  currencyField,
  tdsField,
  totalAmountField,
  recivedField,
  outStandingField,
};
