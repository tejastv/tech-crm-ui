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
  "clientIds",
  "Client Name",
  "select:isMulti",
  SearchClient,
  "Client Name",
  []
);

const moveToClient: FormFieldType = createFormConfig(
  "clintGroupIdToMove",
  "Move to",
  "select",
  SearchClient,
  "Move to",
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
  moveToClient,
};
