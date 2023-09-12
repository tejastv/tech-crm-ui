import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const SourceValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const SelectFileValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const source: FormFieldType = createFormConfig(
  "source",
  "Source",
  "text",
  SourceValidation,
  "Source"
);
const letterfile: FormFieldType = createFormConfig(
  "firstLetterFile",
  "First Letter File",
  "file:.doc,.docx",
  SelectFileValidation,
  "Source"
);

export const addSourceFormFields = {
  source,
  letterfile,
};
