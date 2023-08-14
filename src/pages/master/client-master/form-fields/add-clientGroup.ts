import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

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
        message: "30 characters max",
    },
} as ValidationType;

const GSTNClient = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

export const Groupoptions = [
    { value: "chocolate33", label: "Show Bank of Baroda Detail in Invoice" },
    { value: "strawberry", label: "Show UNION Bank Detail in Invoice" },
    { value: "vanilla", label: "Show BOI Detail in Invoice" },
    { value: "vanilla", label: "Show South Indian Bank Detail in Invoice" },
    { value: "vanilla", label: "Show IOB Detail in Invoice" },
  ];

export const SearchClientOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

export const clientGroupName: FormFieldType = createFormConfig('ClientName', 'Group Name', 'text', ClientGroup,'Enter Client Name');
export const clientGroupName2: FormFieldType = createFormConfig('clientGroupName2', 'Group Name', 'checkbox', ClientGroup2,'',Groupoptions);
export const searchClient: FormFieldType = createFormConfig('selectClient','Select Client', 'select', GSTNClient,'Select Client',SearchClientOptions);