import { FormFieldType, MapType, Options, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

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

const toDateValidation = {
  required: {
    value: true,
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

const actionOption: MapType<Options> = {
  all: { value: "all", label: "All Client Datewise" },
  client: { value: "client", label: "Specific Client Datewise" },
};

const actionOptiontwo: MapType<Options> = {
  new: { value: "y", label: "BOB" },
  renew: { value: "ub", label: "UB" },
  rerenew: { value: "boi", label: "  BOI" },
  ne: { value: "southIndianBank", label: "  SouthIndBank" },
  newnew: { value: "Iob", label: "  IOB" },
};

const allClientDatewiseField: FormFieldType = createFormConfig(
  "allClientDatewise",
  "",
  "radio",
  allClientDatewiseValidation,
  "",
  actionOption
);

// const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
// const year = myDate.getFullYear();
// const month = String(myDate.getMonth() + 1).padStart(2, "0");
// const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
// const formattedDate = `${year}/${month}/${day}`;
const fromDateField: FormFieldType = createFormConfig(
  "startDate",
  "From",
  "date",
  fromDateValidation,
  // formattedDate
  ""
);

const toDateField: FormFieldType = createFormConfig(
  "endDate",
  "To Date",
  "date",
  toDateValidation,
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
    name: "clientId",
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
  "",
  "text",
  bobValidation,
  "",
  actionOptiontwo
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
export const invoiceListFormFields = {
  fYearField,
  fromDateField,
  toDateField,
  cityField,
  clientField,
  allClientDatewiseField,
  bobField,
  billAmtField,
  stAmtField,
  totalField,
};
