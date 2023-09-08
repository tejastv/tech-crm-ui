import { FormFieldType } from "@shared/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

const nameField: FormFieldType = {
  config: {
    name: "name",
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "Enter name ...",
    validation: {
      required: {
        value: true,
        message: "Name field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Name should not exceed 30 characters",
      },
    },
  },
};

const addressField: FormFieldType = {
  config: {
    name: "address",
    label: "Address",
    id: "Address",
    multiline: true,
    placeholder: "Wnter Address ...",
    validation: {
      required: {
        value: true,
        message: "Address field is rquired",
      },
      pattern: {
        value: /^[\w\s\d#.,\-\/]+$/,
        message: "Invalid address format. Please use a valid format.",
      },
    },
  },
};

const officeAddressField: FormFieldType = {
  config: {
    name: "officeAddress",
    label: "Regd. Office Address",
    id: "officeAddress",
    multiline: true,
    placeholder: " Enter Regd. Office Address...",
    validation: {
      required: {
        value: true,
        message: "Regd Office Address field is rquired",
      },pattern: {
        value: /^[\w\s\d#.,\-\/]+$/,
        message: "Invalid address format. Please use a valid format.",
      },
    },
  },
};

const telNo: FormFieldType = {
  config: {
    name: "telNo",
    label: "Tel no.",
    type: "number",
    id: "telNo",
    placeholder: "Enter Tel No.",
    validation: {
      required: {
        value: true,
        message: "Telephone Number field is rquired",
      },
      pattern: {
        value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
        message: "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
      },
    },
  },
};

const faxNo: FormFieldType = {
  config: {
    name: "faxNo",
    label: "Fax No.",
    type: "number",
    id: "name",
    placeholder: "Enter Fax no ...",
    validation: {
      required: {
        value: true,
        message: "Fax number field is rquired",
      },
      pattern: {
        value: /^\+?[0-9\s\-()+.]*$/,
        message: "Invalid fax number,Please use a valid format (e.g., +1234567890).",
      },
    },
  },
};

const emailField: FormFieldType = {
  config: {
    name: "email",
    label: "Email Address",
    type: "email",
    id: "email",
    placeholder: "Enter email address",
    validation: {
      required: {
        value: true,
        message: "Email field is rquired",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Invalid email format. Please use a valid email address.",
      },
    },
  },
};
const website: FormFieldType = {
  config: {
    name: "website",
    label: "Website",
    type: "text",
    id: "website",
    placeholder: "Enter Your Website",
    validation: {
      required: {
        value: true,
        message: "Website field is rquired",
      },
      pattern: {
        value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
        message: "Please use a valid URL format (e.g., https://www.example.com).",
      },
    },
  },
};

const contactPerson: FormFieldType = {
  config: {
    name: "contectPerson",
    label: "Contect Person",
    type: "text",
    id: "contectPerson",
    placeholder: "Enter Your Contact Person",
    validation: {
      required: {
        value: true,
        message: "Contect person field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Contact Person should not exceed 30 characters",
      },
    },
  },
};

const designation: FormFieldType = {
  config: {
    name: "designation",
    label: "Designation",
    type: "text",
    id: "designation",
    placeholder: "Enter designation",
    validation: {
      required: {
        value: true,
        message: "Designation field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Designation should not exceed 30 characters",
      },
    },
  },
};

const zip: FormFieldType = {
  config: {
    name: "zip",
    label: "ZIP",
    type: "text",
    id: "zip",
    placeholder: "Enter Zip",
    validation: {
      required: {
        value: true,
        message: "Zip field is rquired",
      },
      pattern: {
        value: /^\d{6}$/,
        message: "Invalid ZIP code, Please use a 6-digit numeric code.",
      },
    },
  },
};

const cityOptions = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const city: FormFieldType = {
  config: {
    name: "city",
    label: "City",
    id: "city",
    options: selectOptionsMaker(cityOptions, "value", "label"),
    placeholder: "Select city",
    validation: {
      required: {
        value: true,
        message: "Select city field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Select City",
      },
    },
  },
};

const stateOptions = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const state: FormFieldType = {
  config: {
    name: "state",
    label: "State",
    id: "state",
    options: selectOptionsMaker(stateOptions, "value", "label"),
    placeholder: "Select State",
    validation: {
      required: {
        value: true,
        message: "State field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Select State",
      },
    },
  },
};

const countryOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const country: FormFieldType = {
  config: {
    name: "country",
    label: "Country",
    id: "country",
    options: selectOptionsMaker(countryOptions, "value", "label"),
    placeholder: "Country field is rquired",
    validation: {
      required: {
        value: true,
        message: "Country field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Select Country ",
      },
    },
  },
};

const hscode: FormFieldType = {
  config: {
    name: "hscode",
    label: "HS Code",
    type: "text",
    id: "Hs Code",
    placeholder: "Enter Hs Code",
    validation: {
      required: {
        value: true,
        message: "HS Code field is rquired",
      },
      pattern: {
        value: /^\d{6}$/,
        message: "Invalid HS Code,Please use a 6-digit numeric code.",
      },
    },
  },
};

const givenName: FormFieldType = {
  config: {
    name: "givenName",
    label: "GivenName",
    type: "text",
    id: "givenName",
    placeholder: "Enter Given name...",
    validation: {
      required: {
        value: true,
        message: "Given Name field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Given Name should not exceed 30 characters",
      },
    },
  },
};

const referenceno: FormFieldType = {
  config: {
    name: "referenceNo",
    label: "Reference no.",
    type: "text",
    id: "referenceNo",
    placeholder: "Enter Reference number...",
    validation: {
      required: {
        value: true,
        message: "Number field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid reference number",
      },
    },
  },
};

const financialyear: FormFieldType = {
  config: {
    name: "fincialyear",
    label: "Financial Year",
    type: "text",
    id: "fincialyear",
    placeholder: "Enter Fincialyear...",
    validation: {
      required: {
        value: true,
        message: "Year field is rquired",
      },
      pattern: {
        value: /^\d{4}-\d{4}$/,
        message: "Invalid financial year,Please use YYYY-YYYY format.",
      },
    },
  },
};

const regno: FormFieldType = {
  config: {
    name: "regno",
    label: "Reg. no.",
    type: "text",
    id: "regno",
    placeholder: "Enter Reg. no...",
    validation: {
      required: {
        value: true,
        message: "Reg no field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message:"Invalid register number. Please use alphanumeric characters and hyphens"
      },
    },
  },
};

const checkBoxField: FormFieldType = {
  config: {
    name: "companyype",
    label: "Company ype",
    id: "companyype",
    options: selectOptionsMaker([], "value", "label"),
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

const companyOptions = [
  { value: "Prpritership", label: "Prpritership" },
  { value: "Partnership", label: "Partnership" },
  { value: "Pvt Ltd", label: "Pvt Ldt" },
  { value: "public Ltd", label: "public Ldt" },
];

const companyType: FormFieldType = {
  config: {
    name: "companyType",
    label: "Company Type",
    id: "companyType",
    className: "custom-control-input",
    options: selectOptionsMaker(companyOptions, "value", "label"),
    placeholder: "write a random Select Box",
    validation: {
      required: {
        value: true,
        message: "Company Type field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Bankers should be up to 30 characters long",
      },
    },
  },
};

const incorporationDate: FormFieldType = {
  config: {
    name: "incorporationDate",
    label: "Incorporation Date",
    id: "incorporationDate",
    placeholder: "Select Date",
    validation: {
      required: {
        value: true,
        message: "Date field is rquired",
      },
      pattern: {
        value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        message: "Invalid date format. Please use DD/MM/YYYY format.",
      },
    },
  },
};

const bankers: FormFieldType = {
  config: {
    name: "bankers",
    label: "Bankers",
    type: "textarea",
    id: "bankers",
    multiline: true,
    placeholder: "Enter Bankers",
    validation: {
      required: {
        value: true,
        message: "Bankers field is rquired",
      },
      maxLength: {
        value: 60,
        message: "Bankers should be up to 60 characters long",
      },
    },
  },
};
const notes: FormFieldType = {
  config: {
    name: "notes",
    label: "Notes",
    type: "textarea",
    id: "notes",
    multiline: true,
    placeholder: "Enter Notes",
    validation: {
      required: {
        value: true,
        message: "Notes field is rquired",
      },
      maxLength: {
        value: 50,
        message: "Note should be up to 50 characters long",
      },
    },
  },
};
const cmie: FormFieldType = {
  config: {
    name: "cmie",
    label: "CMIE",
    type: "text",
    id: "cmie",
    placeholder: "Enter CMIE",
    validation: {
      required: {
        value: true,
        message: "CMIE field is rquired",
      },
      maxLength: {
        value: 30,
        message: "CMIE should be up to 30 characters long",
      },
    },
  },
};
const rocStatus: FormFieldType = {
  config: {
    name: "rocStatus",
    label: "ROC Status",
    type: "text",
    id: "rocStatus",
    placeholder: "Enter ROC Status",
    validation: {
      required: {
        value: true,
        message: "ROC Status field is rquired",
      },
      maxLength: {
        value: 30,
        message: "ROC status should be up to 30 characters long",
      },
    },
  },
};

const recodes: FormFieldType = {
  config: {
    name: "recodes",
    label: "Recodes",
    type: "text",
    id: "recodes",
    placeholder: "Enter Records",
    validation: {
      required: {
        value: true,
        message: "Records field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Records should be up to 30 characters long ",
      },
    },
  },
};

const recfin: FormFieldType = {
  config: {
    name: "reffin",
    label: "Rec Fin",
    type: "text",
    id: "recfin",
    placeholder: "Enter Rec Fin",
    validation: {
      required: {
        value: true,
        message: "Rec field is rquired",
      },
      maxLength: {
        value: 30,
        message: "Rec Fin should be up to 30 characters long",
      },
    },
  },
};

export const addCompanyFormFields = {
  nameField,
  addressField,
  officeAddressField,
  telNo,
  faxNo,
  emailField,
  website,
  contactPerson,
  designation,
  zip,
  cityOptions,
  city,
  stateOptions,
  state,
  countryOptions,
  country,
  hscode,
  givenName,
  referenceno,
  financialyear,
  regno,
  checkBoxField,
  companyOptions,
  companyType,
  incorporationDate,
  bankers,
  notes,
  cmie,
  rocStatus,
  recodes,
  recfin,
};
