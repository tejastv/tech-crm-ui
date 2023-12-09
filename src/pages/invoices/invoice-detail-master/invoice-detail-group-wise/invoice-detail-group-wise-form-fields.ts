import { FormFieldType, ValidationType } from "@shared/index";
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

const groupField: FormFieldType = {
  config: {
    name: "group",
    label: "Group ",
    id: "group",
    options: [],
    placeholder: "Select Group ",
    validation: {
      required: {
        value: false,
        message: "Select Group",
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

export const invoiceDetailGroupWiseFormFields = {
  groupField,

  fromDateField,

  toDateField,

  fYearField,
};
