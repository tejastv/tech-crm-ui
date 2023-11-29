import { FormFieldType, MapType, Options, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const FromDateValidation = {
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

const ToDateValidation = {
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

const bobValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const ubValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const boiValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const southIndBankValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const iobValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const billAmtValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const stAmtValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const totalValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;

const fyearField: FormFieldType = {
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

const ActionOption: MapType<Options> = {
  new: { value: "new", label: "All Client Datewise" },
  renew: { value: "renew", label: "Specific Client Datewise" },
};

const allClientDatewiseField: FormFieldType = createFormConfig(
  "allClientDatewise",
  "",
  "radio",
  allClientDatewiseValidation,
  "",
  ActionOption
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

const todateeField: FormFieldType = createFormConfig(
  "toDate",
  "To Date",
  "date",
  ToDateValidation,
  formattedDate
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

const ClientField: FormFieldType = {
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

const bobField: FormFieldType = createFormConfig(
  "bob",
  "BOB",
  "text",
  bobValidation,
  ""
);

const ubField: FormFieldType = createFormConfig(
  "ub",
  "UB",
  "text",
  ubValidation,
  ""
);

const boiField: FormFieldType = createFormConfig(
  "boi",
  "BOI",
  "text",
  boiValidation,
  ""
);

const sourthIndBankField: FormFieldType = createFormConfig(
  "southIndBank",
  "SouthIndBank",
  "text",
  southIndBankValidation,
  ""
);

const iobField: FormFieldType = createFormConfig(
  "iob",
  "IOB",
  "text",
  iobValidation,
  ""
);

const billAmtField: FormFieldType = createFormConfig(
  "billAmt",
  "BillAmt",
  "text",
  billAmtValidation,
  ""
);

const stAmtField: FormFieldType = createFormConfig(
  "stAmt",
  "STAmt",
  "text",
  stAmtValidation,
  ""
);

const totalField: FormFieldType = createFormConfig(
  "total",
  "Total",
  "text",
  totalValidation,
  ""
);
export const invoiceDetailReportProFormFields = {
  fyearField,
  fromdateField,
  todateeField,
  cityField,
  ClientField,
  allClientDatewiseField,

  bobField,
  ubField,
  boiField,
  sourthIndBankField,
  iobField,
  billAmtField,
  stAmtField,
  totalField,
};
