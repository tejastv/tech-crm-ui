import { FormFieldType, Note, ValidationType } from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const ClientActualBuyer = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "Invalid {label}",
    },
} as ValidationType;
const nameActualBuyer= {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "Invalid {label}",
    },
} as ValidationType;



const GSTN = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "Invalid {label}",
    },
} as ValidationType;
const cst = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "Invalid {label}",
    },
} as ValidationType;

const addressValidation = {
    required: {
        value: true,
        message: "Please Enter Address",
      },
      pattern: {
        value: /^[\w\s\d#.,\-\/]+$/,
        message: "Invalid address",
      },      
} as ValidationType;

const telNoValidation = {
    
        required: {
          value: true,
          message: "Please Enter Telephone Number",
        },
        pattern: {
          value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
          message: "Invalid telephone number",
        },      
} as ValidationType;

const FaxNoValidation = {
    required: {
        value: true,
        message: "Please Enter Fax number",
      },
      pattern: {
        value: /^\+?[0-9\s\-()+.]*$/,
        message: "Invalid fax number",
      },      
} as ValidationType;

const EmailValidation = {
    required: {
        value: true,
        message: "Please Enter E-mail ",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "not valid ",
      },      
} as ValidationType;

const WebsiteValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
      },
      pattern: {
        value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
        message: "Invalid website URL",
      }      
} as ValidationType;

const ContactValidation = {
    required: {
        value: true,
        message: "Please Enter Contect person",
      },
      maxLength: {
        value: 30,
        message: "Invalid {label}",
      },        
} as ValidationType;

const DesignationValidation = {
    required: {
        value: true,
        message: "Please Enter Designation",
      },
      maxLength: {
        value: 30,
        message: "{label} field is rquired",
      },       
} as ValidationType;

const PinValidation = {
    required: {
        value: true,
        message: "{label} field is rquired ",
      },
      pattern: {
        value: /^\d{6}$/,
        message: "{label} field is rquired",
      },      
} as ValidationType;

const CityValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid City",
      } ,     
} as ValidationType;

const StateValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid State",
      },       
} as ValidationType;

const CountryValidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid Country ",
      },      
} as ValidationType;


  export const cityactualbuyerOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  export const stateactualbuyerOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  export const countryactualbuyerOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  
  export const ClientActualBuyerOption = [
    { value: "in %", label: "in %" },
    { value: "Per Report", label: "Per Report" },
    { value: "NO Discount", label: "NO Discount" },
  ];
export const clientactualbuyer: FormFieldType = createFormConfig('clientactualbuyer', 'Client', 'select', ClientActualBuyer,'Select Client',ClientActualBuyerOption);
export const nameactualbuyer: FormFieldType = createFormConfig('nameactualbuyer', 'Name', 'text', nameActualBuyer,'Name');
export const addressactualbuyer: FormFieldType = createFormConfig('addressactualbuyer','Address', 'textarea', addressValidation,'Address');
export const telnoactualbuyer: FormFieldType = createFormConfig('telnoactualbuyer','Tel No.', 'number', telNoValidation,'Enter Tel No.');
export const emailactualbuyer: FormFieldType = createFormConfig('emailactualbuyer','E-Mail', 'Email', EmailValidation,'Enter E-mail');
export const contactactualbuyer: FormFieldType = createFormConfig('contactactualbuyer','Contact', 'text', ContactValidation,'Enter Contact');
export const designationactualbuyer: FormFieldType = createFormConfig('designationactualbuyer','Designation', 'text', DesignationValidation,'Enter Designation');
// 
export const cityactualbuyer: FormFieldType = createFormConfig('cityactualbuyer','City', 'select', CityValidation,'Select City',cityactualbuyerOptions);
export const stateactualbuyer: FormFieldType = createFormConfig('stateactualbuyer','State', 'select', StateValidation,'Select State',stateactualbuyerOptions);
export const PIN: FormFieldType = createFormConfig('PIN','PIN', 'text', PinValidation,'PIN');
export const countryactualbuyer: FormFieldType = createFormConfig('countryactualbuyer','Country', 'select', CountryValidation,'Select Country',countryactualbuyerOptions);
export const faxnoactualbuyer: FormFieldType = createFormConfig('faxnoactualbuyer','Fax No.', 'text', FaxNoValidation,'Enter Fax No.');
export const websiteactualbuyer: FormFieldType = createFormConfig('websiteactualbuyer','Website', 'text', WebsiteValidation,'https://');
export const cstactualbuyer: FormFieldType = createFormConfig('cstactualbuyer','CST/TIN No.', 'text', cst,'CST/TIN No.');
export const gstnactualbuyer: FormFieldType = createFormConfig('GSTNactualbuyer','GSTN', 'text', GSTN,'GSTN');
export const actualbuyergstnote:Note  = createNoteConfig("don't know GST, write NOGST. Do not input any other number.")