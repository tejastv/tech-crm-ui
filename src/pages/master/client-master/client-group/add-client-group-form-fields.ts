import { FormFieldType, ValidationType, Note } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const ClientGroup = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const ClientGroup2 = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Please select a {label}",
  },
} as ValidationType;

const SearchClient = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "Please select a {label}",
  },
} as ValidationType;

const Groupoptions = [
  { value: "showBOBDetails", label: "Show Bank of Baroda Detail in Invoice" },
  { value: "showUnionBankDetails", label: "Show UNION Bank Detail in Invoice" },
  { value: "showBOIDetails", label: "Show BOI Detail in Invoice" },
  {
    value: "showSouthIndianBankDetails",
    label: "Show South Indian Bank Detail in Invoice",
  },
  { value: "showIOBDetails", label: "Show IOB Detail in Invoice" },
];

const clientGroupName: FormFieldType = createFormConfig(
  "groupName",
  "Group Name",
  "text",
  ClientGroup,
  "Enter Client Name"
);
const showBOBDetails: FormFieldType = createFormConfig(
  "showBOBDetails",
  "Show Bank of Baroda Detail in Invoice",
  "checkbox",
  ClientGroup2,
  ""
);
const showUnionBankDetails: FormFieldType = createFormConfig(
  "showUnionBankDetails",
  "Show UNION Bank Detail in Invoice",
  "checkbox",
  ClientGroup2,
  ""
);
const showBOIDetails: FormFieldType = createFormConfig(
  "showBOIDetails",
  "Show BOI Detail in Invoice",
  "checkbox",
  ClientGroup2,
  ""
);
const showSouthIndianBankDetails: FormFieldType = createFormConfig(
  "showSouthIndianBankDetails",
  "Show South Indian Bank Detail in Invoice",
  "checkbox",
  ClientGroup2,
  ""
);
const showIOBDetails: FormFieldType = createFormConfig(
  "showIOBDetails",
  "Show IOB Detail in Invoice",
  "checkbox",
  ClientGroup2,
  ""
);

const searchClient: FormFieldType = createFormConfig(
  "clintGroupIdToMove",
  "Select Client",
  "select",
  SearchClient,
  "Select Client",
  []
);
const namenote: Note = createNoteConfig(
  "Note: When you are Creating New Group, Clientfor which group is NOT DEFINED will appear"
);

export const addClientGroupFormFields = {
  clientGroupName,
  showBOBDetails,
  showUnionBankDetails,
  showBOIDetails,
  showSouthIndianBankDetails,
  showIOBDetails,
  searchClient,
  namenote,
};
