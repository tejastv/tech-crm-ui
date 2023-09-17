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
    value: true,
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

const SearchClientOptions = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const clientGroupName: FormFieldType = createFormConfig(
  "clientName",
  "Group Name",
  "text",
  ClientGroup,
  "Enter Client Name"
);
const clientGroupName2: FormFieldType = createFormConfig(
  "clientGroupName2",
  "Group Name",
  "checkbox",
  ClientGroup2,
  "",
  Groupoptions
);
const searchClient: FormFieldType = createFormConfig(
  "selectClient",
  "Select Client",
  "select",
  SearchClient,
  "Select Client",
  SearchClientOptions
);
const namenote: Note = createNoteConfig(
  "Note: When you are Creating New Group, Clientfor which group is NOT DEFINED will appear"
);

export const addClientGroupFormFields = {
  clientGroupName,
  clientGroupName2,
  searchClient,
  namenote,
};
