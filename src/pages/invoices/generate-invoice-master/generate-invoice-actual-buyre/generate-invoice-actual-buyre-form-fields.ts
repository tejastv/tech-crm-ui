import { FormFieldType, MapType, Options, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const actionValidation = {
  required: {
    value: true,
    message: "Please check the {label} box",
  },
} as ValidationType;

// const clientValidation = {
//   required: {
//     value: true,
//     message: "{label} field is rquired",
//   },
//   maxLength: {
//     value: 30,
//     message: "30 characters max",
//   },
// } as ValidationType;

const fromDateValidation = {
  required: {
    value: true,
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
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const actionOption: MapType<Options> = {
  new: { value: "Y", label: "Daily" },
  renew: { value: "N", label: "Monthly" },
  rerenew: { value: "S", label: "All" },
};
const action: FormFieldType = createFormConfig(
  "action",
  "Action",
  "radio",
  actionValidation,
  "",
  actionOption
);
const client: FormFieldType = {
  config: {
    name: "client",
    label: "Client ",
    id: "client",
    options: [],
    placeholder: "",
    validation: {
      required: {
        value: true,
        message: "Select Client",
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

export const generateInvoiceActualBuyreFormFields = {
  client,
  action,
  fromDateField,
  toDateField,
};
