import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const FromDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;
const ToDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
  //   message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  // },
} as ValidationType;
const clientnameField: FormFieldType = {
  config: {
    name: "clientId",
    label: "Client Name",
    id: "clientId",
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

const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "dd/mm/yyyy"
const formattedDate = `${day}/${month}/${year}`;
const fromdateField: FormFieldType = createFormConfig(
  "startDate",
  "From Date",
  "date",
  FromDateValidation,
  formattedDate
);
const todateeField: FormFieldType = createFormConfig(
  "endDate",
  "To Date",
  "date",
  ToDateValidation,
  formattedDate
);

export const allEnquiryFormFields = {
  clientnameField,
  fromdateField,
  todateeField,
};
