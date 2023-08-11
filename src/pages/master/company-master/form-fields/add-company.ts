import { FormFieldType, gender } from "@shared/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const nameField: FormFieldType = {
  config: {
    name: "name",
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "Enter name ...",
    validation: {
      required: {
        value: true,
        message: "Please Enter Name",
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
    placeholder: "Wnter Address ...",
    validation: {
      required: {
        value: true,
        message: "Please Enter Address",
      },
      pattern: {
        value: /^[\w\s\d#.,\-\/]+$/,
        message: "Invalid address",
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
    placeholder: " Enter Regd. Office Address...",
    validation: {
      required: {
        value: true,
        message: "Please Enter Regd Office Address",
      
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
        message: "Please Enter Telephone Number",
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
    placeholder: "Enter Fax no ...",
    validation: {
      required: {
        value: true,
        message: "Please Enter Fax number",
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
    placeholder: "Enter email address",
    validation: {
      required: {
        value: true,
        message: "Please Enter Email ",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "not valid ",
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
        message: "Please Enter Website",
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
        message: "Please Enter Contect person",
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
        message: "Please Enter Designation",
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
        message: "Please Enter Zip",
      },
      pattern: {
        value: /^\d{6}$/,
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
        message: "Please Select city",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid City",
      } ,
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
        message: "Please Select State",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid State",
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
        message: "Please Select Country",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid Country ",
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
        message: "Please Enter HS Code",
      },    
      pattern: {
        value: /^\d{6}$/,
        message: "Invalid HS Code",
      }
      
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
        message: "Please Enter Given Name",
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
        message: "Enter Ref Number",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid reference number",
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
        message: "Please Enter Year",
      },
      pattern: {
        value: /^\d{4}-\d{4}$/,
        message: "Invalid financial year",
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
        message: "Please Enter Reg no",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid register number",
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
    className:"custom-control-input",
    options: selectOptionsMaker(companyOptions, "value", "label"),
    placeholder: "write a random Select Box",
    validation: {
      required: {
        value: true,
        message: "Please Enter Company name",
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
        message: "Please Select Date",
      },
      pattern: {
        value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        message: "Invalid date",
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
        message: "Please Enter Bankers",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
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
        message: "Please Enter Notes",
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
        message: "Please Enter CMIE",
      },
      maxLength: {
        value: 30,
        message: "Enter CMIE",
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
        message: "Please Enter ROC",
      },
      maxLength: {
        value: 30,
        message: "Enter ROC",
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
    placeholder: "Enter Records",
    validation: {
      required: {
        value: true,
        message: "Please Enter Records",
      },
      maxLength: {
        value: 30,
        message: "Enetr Records  ",
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
        message: "Please Enter Rec",
      },
      maxLength: {
        value: 30,
        message: "Enter Rec",
      }, 
    },
  },
};
