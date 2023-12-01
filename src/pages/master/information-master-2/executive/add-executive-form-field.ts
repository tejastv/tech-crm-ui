import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const ExecutiveValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message: "50 characters max",
  },
} as ValidationType;

const EmailValidation = {
  required: {
    value: true,
    message: "Please Enter E-mail ",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please Include an '@' and .com/in in the email address.",
  },
} as ValidationType;

const CityValidation = {
  required: {
    value: true,
    message: "Please Select city",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message: "Please select a {label}",
  },
} as ValidationType;
const stateInfoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const checkboxInfoValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;

const checkInfoOptions = {"checkOpt" : { value: false, label: "Required Invoice Copy" }};

const executiveInfomation2: FormFieldType = createFormConfig(
  "executive",
  "Executive",
  "text",
  ExecutiveValidation,
  " Executive"
);
const emailInformation2: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailValidation,
  "Enter E-mail"
);
const cityInformation2: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  CityValidation,
  "Select City",
  {}
);
const checkboxInformation2: FormFieldType = createFormConfig(
  "invoiceRequired",
  "",
  "checkbox",
  checkboxInfoValidation,
  "",
  checkInfoOptions
);
const stateInformation2: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  stateInfoValidation,
  "",
  {}
);

export const addExecutiveFormFields = {
  executiveInfomation2,
  emailInformation2,
  cityInformation2,
  checkboxInformation2,
  stateInformation2,
};
