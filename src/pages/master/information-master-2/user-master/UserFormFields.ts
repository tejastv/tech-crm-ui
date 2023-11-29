import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const userTypeData: any = {
  Administrator: { value: "Administrator", label: "Administrator" },
  "Super user": { value: "Super user", label: "Super User" },
  "Basic user": { value: "Basic user", label: "Basic User" },
};
const UserValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const UserTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const LoginValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message:
      "Invalid username format. Please use only letters, numbers, and underscores.",
  },
} as ValidationType;
const PasswordValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    message:
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
  },
} as ValidationType;

const userName: FormFieldType = createFormConfig(
  "userName",
  "User Name",
  "text",
  UserValidation,
  "User Name"
);
const userType: FormFieldType = createFormConfig(
  "userType",
  "User Type",
  "select",
  UserTypeValidation,
  "User Type",
  Object.values(userTypeData)
);
const login: FormFieldType = createFormConfig(
  "loginId",
  "Login Id",
  "text",
  LoginValidation,
  "Login Id"
);
const password: FormFieldType = createFormConfig(
  "password",
  "Password",
  "password",
  PasswordValidation,
  "Password"
);

export const addUserFormFields = {
  userName,
  userType,
  login,
  password,
  userTypeData,
};
