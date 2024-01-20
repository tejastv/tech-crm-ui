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
  ""
);

const showBOBDetailsOption = {
  showBOBDetails: {
    value: false,
    label: "Show Bank of Baroda Detail in Invoice",
  },
};

const showBOBDetails: FormFieldType = createFormConfig(
  "showBOBDetails",
  "",
  "checkbox",
  ClientGroup2,
  "",
  showBOBDetailsOption
);

const showUnionBankDetailsOption = {
  showUnionBankDetails: {
    value: false,
    label: "Show UNION Bank Detail in Invoice",
  },
};

const showUnionBankDetails: FormFieldType = createFormConfig(
  "showUnionBankDetails",
  "",
  "checkbox",
  ClientGroup2,
  "",
  showUnionBankDetailsOption
);

const showBOIDetailsOption = {
  showBOIDetails: { value: false, label: "Show BOI Detail in Invoice" },
};

const showBOIDetails: FormFieldType = createFormConfig(
  "showBOIDetails",
  "",
  "checkbox",
  ClientGroup2,
  "",
  showBOIDetailsOption
);

const showSouthIndianBankDetailsOption = {
  showSouthIndianBankDetails: {
    value: false,
    label: "Show South Indian Bank Detail in Invoice",
  },
};

const showSouthIndianBankDetails: FormFieldType = createFormConfig(
  "showSouthIndianBankDetails",
  "",
  "checkbox",
  ClientGroup2,
  "",
  showSouthIndianBankDetailsOption
);

const showIOBDetailsOption = {
  showIOBDetails: { value: false, label: "Show IOB Detail in Invoice" },
};

const showIOBDetails: FormFieldType = createFormConfig(
  "showIOBDetails",
  "",
  "checkbox",
  ClientGroup2,
  "",
  showIOBDetailsOption
);

const searchClient: FormFieldType = createFormConfig(
  "clientIds",
  "Client Name",
  "select:isMulti",
  SearchClient,
  "",
  {}
);

const moveToClient: FormFieldType = createFormConfig(
  "clintGroupIdToMove",
  "Move to",
  "select",
  SearchClient,
  "",
  {}
);

const namenote: Note = createNoteConfig(
  "Note: When you are Creating New Group, Clientfor which group is NOT DEFINED will appear"
);
const mendetorynote: Note = createNoteConfig("Note: * Mendetory Fields ");

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
  mendetorynote,
};
