import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const Group = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
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

const group: FormFieldType = createFormConfig(
  "groupID",
  "Group",
  "select",
  Group,
  "",
  [{ value: "all", label: "All" }]
);
const city: FormFieldType = createFormConfig(
  "cityID",
  "City",
  "select",
  City,
  "",
  [{ value: "all", label: "All" }]
);
const client: FormFieldType = createFormConfig(
  "clientID",
  "Client",
  "select",
  Client,
  "",
  [{ value: "all", label: "All" }]
);

export const enquiriesCountGroupCountryWiseFormFields = {
  group,
  city,
  client,
};
