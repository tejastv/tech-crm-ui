import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const UserValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Industry ",
    },
} as ValidationType;

const UserTypeValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Industry ",
    },
} as ValidationType;
const LoginValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Industry ",
    },
} as ValidationType;
const PasswordValidation = {

    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "Invalid Password ",
    },
} as ValidationType;



export const username: FormFieldType = createFormConfig('username', 'User Name', 'text',UserValidation,'User Name');
export const usertype: FormFieldType = createFormConfig('usertype', 'User Type', 'select',UserTypeValidation,'User Type');
export const login: FormFieldType = createFormConfig('login', 'Login Id', 'text',LoginValidation,'Login Id');
export const password: FormFieldType = createFormConfig('password', 'Password', 'text',PasswordValidation,'Password');