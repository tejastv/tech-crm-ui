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
const markAllValidation = {
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

const excecutiveField: FormFieldType = {
  config: {
    name: "excecutive",
    label: "Excecutive ",
    id: "excecutive",
    options: [],
    placeholder: "Select Excecutive ",
    validation: {
      required: {
        value: false,
        message: "Select Excecutive",
      },
    },
  },
};
const markAllField: FormFieldType = createFormConfig(
  "markAll",
  "Mark All",
  "text",
  markAllValidation,
  ""
);
const emailField: FormFieldType = createFormConfig(
  "email",
  "E-mail",
  "email",
  markAllValidation,
  ""
);
export const invoiceListExceWiseFormFields = {
  fyearField,
  fromDateField,
  toDateField,
  cityField,
  excecutiveField,
  allClientDatewiseField,
  markAllField,
  emailField,
};
