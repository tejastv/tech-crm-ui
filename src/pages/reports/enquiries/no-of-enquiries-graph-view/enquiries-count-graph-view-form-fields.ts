import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const City = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const Client = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const city: FormFieldType = createFormConfig(
  "cityID",
  "City",
  "select",
  City,
  "",
  {}
  // [{ value: "all", label: "All" }]
);
const client: FormFieldType = createFormConfig(
  "clientId",
  "Client",
  "select",
  Client,
  "",
  {}
  // [{ value: "all", label: "All" }]
);

export const enquiriesCountGraphViewFormFields = {
  city,
  client,
};
