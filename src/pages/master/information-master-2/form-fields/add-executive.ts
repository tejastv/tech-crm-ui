import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const ExecutiveValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 50,
      message:  "Invalid Executive",
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
        message: "not valid ",
      },      
} as ValidationType;

const CityValidation = {
    required: {
        value: true,
        message: "Please Select city",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid City",
      } ,     
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
      value: true,
      message: "{label} field is rquired",
  },
  maxLength: {
      value: 30,
      message: "30 characters max",
  },
} as ValidationType;

export const cityInformation2Options = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

export const stateInfoOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const checkInfoOptions = [
    { value: "chocolate33", label: "Required Invoice Copy" }
  ];



export const executiveInfomation2: FormFieldType = createFormConfig('executive', 'Executive', 'text', ExecutiveValidation,' Executive');
export const emailInformation2: FormFieldType = createFormConfig('email','E-Mail', 'Email', EmailValidation,'Enter E-mail');
export const cityInformation2: FormFieldType = createFormConfig('city','City', 'select', CityValidation,'Select City',cityInformation2Options);
export const checkboxInformation2: FormFieldType = createFormConfig('invoicecopy','', 'checkbox', checkboxInfoValidation,'',checkInfoOptions);
export const stateInformation2: FormFieldType = createFormConfig('stateInfo','State', 'checkbox', stateInfoValidation,'',stateInfoOptions);