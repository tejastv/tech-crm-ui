import { FormFieldType, Note, ValidationType } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const uploadFIleValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9-_]+\.(jpg|png|pdf)$/, // Example: Accepts file names like "file123.jpg", "document.pdf", etc.
    message: "Invalid file name format. Please use a valid file name.",
  },
} as ValidationType;

const clientnameField: FormFieldType = {
  config: {
    name: "clientname",
    label: "Client Name",
    id: "clientname",
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

const uploadfileField: FormFieldType = createFormConfig(
  "uploadFile",
  "Upload File",
  "file",
  uploadFIleValidation,
  ""
);

const uploadFilenote: Note = createNoteConfig(
  "Please download the sample from here,Do not change the first row or alter columns here & there."
);
export const addBulkEnquiriesFormFields = {
  clientnameField,
  uploadfileField,
  uploadFilenote,
};
