import { FormFieldType, gender } from "@shared/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const nameField: FormFieldType = {
  config: {
    name: "name",
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "write your name ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
    },
  },
};

export const addressField: FormFieldType = {
  config: {
    name: "address",
    label: "Address",
    id: "Address",
    multiline: true,
    placeholder: "write your Address ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const officeAddressField: FormFieldType = {
  config: {
    name: "officeAddress",
    label: "Regd. Office Address",
    id: "officeAddress",
    multiline: true,
    placeholder: "write your Regd. Office Address Address ...",
    validation: {
      required: {
        value: true,
        message: "required",
      
      },
    },
  },
};

export const telNo: FormFieldType = {
  config: {
    name: "telNo",
    label: "Tel no.",
    type: "number",
    id: "telNo",
    placeholder: "Enter Tel No.",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
        message: "Invalid telephone number",
      },    
    },
  },
};

export const faxNo: FormFieldType = {
  config: {
    name: "faxNo",
    label: "Fax No.",
    type: "number",
    id: "name",
    placeholder: "write your Fax no ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value: /^\+?[0-9\s\-()+.]*$/,
        message: "Invalid fax number",
      },
    },
  },
};

export const emailField: FormFieldType = {
  config: {
    name: "email",
    label: "Email Address",
    type: "email",
    id: "email",
    placeholder: "write a random email address",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "not valid",
      },
    },
  },
};
export const website: FormFieldType = {
  config: {
    name: "website",
    label: "Website",
    type: "text",
    id: "website",
    placeholder: "Enter Your Website",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
        message: "Invalid website URL",
      }      
    },
  },
};

export const contactPerson: FormFieldType = {
  config: {
    name: "contectPerson",
    label: "Contect Person",
    type: "text",
    id: "contectPerson",
    placeholder: "Enter Your Contact Person",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },     
    },
  },
};

export const designation: FormFieldType = {
  config: {
    name: "designation",
    label: "Designation",
    type: "text",
    id: "designation",
    placeholder: "Enter designation",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },     
    },
  },
};

export const zip: FormFieldType = {
  config: {
    name: "zip",
    label: "ZIP",
    type: "text",
    id: "zip",
    placeholder: "Enter Zip",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      pattern: {
        value: /^\d{5}$/,
        message: "Invalid ZIP code",
      },     
    },
  },
};

export const cityOptions = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const city: FormFieldType = {
  config: {
    name: "city",
    label: "City",
    id: "city",
    options: selectOptionsMaker(cityOptions, "value", "label"),
    placeholder: "Select city",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const stateOptions = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const state: FormFieldType = {
  config: {
    name: "state",
    label: "State",
    id: "state",
    options: selectOptionsMaker(stateOptions, "value", "label"),
    placeholder: "Select State",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const countryOptions = [
  { value: "India", label: "India" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const country: FormFieldType = {
  config: {
    name: "country",
    label: "Country",
    id: "country",
    options: selectOptionsMaker(countryOptions, "value", "label"),
    placeholder: "Select Country",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const hscode: FormFieldType = {
  config: {
    name: "hscode",
    label: "HS Code",
    type: "text",
    id: "Hs Code",
    placeholder: "Enter Hs Code",
    validation: {
      required: {
        value: true,
        message: "required",
      },     
    },
  },
};

export const givenName: FormFieldType = {
  config: {
    name: "givenName",
    label: "GivenName",
    type: "text",
    id: "givenName",
    placeholder: "Enter Given name...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
    },
  },
};

export const referenceno: FormFieldType = {
  config: {
    name: "referenceNo",
    label: "Reference no.",
    type: "text",
    id: "referenceNo",
    placeholder: "Enter Reference number...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const financialyear: FormFieldType = {
  config: {
    name: "fincialyear",
    label: "Financial Year",
    type: "text",
    id: "fincialyear",
    placeholder: "Enter Fincialyear...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};
export const regno: FormFieldType = {
  config: {
    name: "regno",
    label: "Reg. no.",
    type: "text",
    id: "regno",
    placeholder: "Enter Reg. no...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};


// export const checkBoxField: FormFieldType = {
//   config: {
//     name: "companyype",
//     label: "Company ype",
//     id: "companyype",
//     options: selectOptionsMaker(gender, "value", "label"),
//     validation: {
//       required: {
//         value: true,
//         message: "required",
//       },
//     },
//   },
// };

export const companyOptions = [
  { value: "Prpritership", label: "Prpritership" },
  { value: "Partnership", label: "Partnership" },
  { value: "Pvt Ltd", label: "Pvt Ldt" },
  { value: "public Ltd", label: "public Ldt" },
];
export const companyType: FormFieldType = {
  config: {
    name: "companyType",
    label: "Company Type",
    id: "companyType",
    options: selectOptionsMaker(companyOptions, "value", "label"),
    placeholder: "write a random Select Box",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const incorporationDate: FormFieldType = {
  config: {
    name: "incorporationDate",
    label: "Incorporation Date",
    id: "incorporationDate",
    placeholder: "Select Date",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const bankers: FormFieldType = {
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
        message: "required",
      },
    },
  },
};
export const notes: FormFieldType = {
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
        message: "required",
      },
    },
  },
};
export const cmie: FormFieldType = {
  config: {
    name: "cmie",
    label: "CMIE",
    type: "text",
    id: "cmie",
    placeholder: "Enter CMIE",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};
export const rocStatus: FormFieldType = {
  config: {
    name: "rocStatus",
    label: "ROC Status",
    type: "text",
    id: "rocStatus",
    placeholder: "Enter ROC Status",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const recodes: FormFieldType = {
  config: {
    name: "recodes",
    label: "Recodes",
    type: "text",
    id: "recodes",
    placeholder: "Enter ROC Status",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};

export const recfin: FormFieldType = {
  config: {
    name: "reffin",
    label: "Rec Fin",
    type: "text",
    id: "recfin",
    placeholder: "Enter Rec Fin",
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};
