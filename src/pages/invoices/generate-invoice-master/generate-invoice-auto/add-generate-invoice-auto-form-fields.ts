import { FormFieldType, MapType, Options, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const actionValidation = {
  required: {
    value: true,
    message: "Please check the {label} box",
  },
} as ValidationType;

const fYearField: FormFieldType = {
  config: {
    name: "fYear",
    label: "F.Year ",
    id: "fyear",
    options: [],
    placeholder: "",
    validation: {
      required: {
        value: true,
        message: "Select F.Year",
      },
    },
  },
};

const fromDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const toDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const actionOption: MapType<Options> = {
  new: { value: "N", label: "Daily" },
  renew: { value: "Y", label: "Monthly" },
  reRenew: { value: "A", label: "All" },
};
const action: FormFieldType = createFormConfig(
  "type",
  "Action",
  "radio",
  actionValidation,
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
  "startDate",
  "From",
  "date",
  fromDateValidation,
  formattedDate
);

const toDateField: FormFieldType = createFormConfig(
  "endDate",
  "To Date",
  "date",
  toDateValidation,
  formattedDate
);

export const generateInvoiceAutoFormFields = {
  fYearField,
  action,
  fromDateField,
  toDateField,
};
