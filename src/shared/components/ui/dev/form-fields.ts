import { FormFieldType } from "@shared/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const nameField: FormFieldType = {
  config: {
    name: "name",
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "write your name ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
    },
  },
};

export const emailField: FormFieldType = {
  config: {
    name: "email",
    label: "Email Address",
    type: "email",
    id: "email",
    placeholder: "write a random email address",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "not valid",
      },
    },
  },
};

export const addressField: FormFieldType = {
  config: {
    name: "address",
    label: "Address",
    id: "Address",
    multiline: true,
    placeholder: "write your Address ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const officeAddressField: FormFieldType = {
  config: {
    name: "officeAddress",
    label: "Regd. Office Address",
    id: "officeAddress",
    multiline: true,
    placeholder: "write your Regd. Office Address Address ...",
    validation: {
      required: {
        value: true,
        message: "required",
      
      },
    },
  },
};

export const options = [
  { value: "chocolate33", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const selectField: FormFieldType = {
  config: {
    name: "chocolate",
    label: "Select Box",
    id: "chocolate",
    options: selectOptionsMaker(options, "value", "label"),
    placeholder: "write a random Select Box",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const checkBoxField: FormFieldType = {
  config: {
    name: "checkBox",
    label: "Checkbox",
    id: "checkBox",
    options: selectOptionsMaker(options, "value", "label"),
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const genderField: FormFieldType = {
  config: {
    name: "gender",
    label: "Gender",
    id: "gender",
    options: selectOptionsMaker(gender, "value", "label"),
    placeholder: "write a random Select Box",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const datePickerField: FormFieldType = {
  config: {
    name: "datepick",
    label: "Date picker",
    id: "datepick",
    placeholder: "write a random Select Box",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};
