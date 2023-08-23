import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const NameSuppliervalidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;
const NickNamevalidation = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
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
        message: "Please Enter Website",
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
        message: "30 characters max",
      },        
} as ValidationType;

const DesignationValidation = {
    required: {
        value: true,
        message: "Please Enter Designation",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },       
} as ValidationType;

const ZipValidation = {
    required: {
        value: true,
        message: "Please Enter Zip",
      },
      pattern: {
        value: /^\d{6}$/,
        message: "Invalid ZIP code",
      },      
} as ValidationType;

const CityValidation = {
    required: {
        value: true,
        message: "Please Select city",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid City",
      } ,     
} as ValidationType;

const StateValidation = {
    required: {
        value: true,
        message: "Please Select State",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid State",
      },       
} as ValidationType;

const CountryValidation = {
    required: {
        value: true,
        message: "Please Select Country",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid Country ",
      },      
} as ValidationType;

const CurrencyValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message:  "Invalid currency format",
  },
} as ValidationType;














// Option Section

  export const citySupplierOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  export const stateSupplierOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  export const countrySupplierOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
 
  
  // Right Field start
  export const CurrencyOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
 
 

 
 
 
export const nameSupplier: FormFieldType = createFormConfig('name', 'Name', 'text', NameSuppliervalidation,'Enter Name');
export const nickname: FormFieldType = createFormConfig('nickname','Nick Name', 'text', NickNamevalidation,'Enter Nick Name');

export const addressSupplier: FormFieldType = createFormConfig('addresssupplier','Address', 'textarea', addressValidation,'Enter Address');
export const telnoSupplier: FormFieldType = createFormConfig('telnosupplier','Tel No.', 'number', telNoValidation,'Enter Tel No.');
export const faxnoSupplier: FormFieldType = createFormConfig('faxnosupplier','Fax No.', 'text', FaxNoValidation,'Enter Fax No.');
export const emailSupplier: FormFieldType = createFormConfig('emailsupplier','E-Mail', 'Email', EmailValidation,'Enter E-mail');
export const websiteSupplier: FormFieldType = createFormConfig('websitesupplier','Website', 'text', WebsiteValidation,'https://');
export const contactSupplier: FormFieldType = createFormConfig('contactsupplier','Contact person', 'text', ContactValidation,'Enter Contact Person');
export const designationSupplier: FormFieldType = createFormConfig('designationsupplier','Designation', 'text', DesignationValidation,'Enter Designation');

// Right Side Fields
export const citySupplier: FormFieldType = createFormConfig('citysupplier','City', 'select', CityValidation,'Select City',citySupplierOptions);
export const zipSupplier: FormFieldType = createFormConfig('zipsupplier','Zip', 'text', ZipValidation,'Enter Zip');
export const stateSupplier: FormFieldType = createFormConfig('statesupplier','State', 'select', StateValidation,'Select State',stateSupplierOptions);
export const countrySupplier: FormFieldType = createFormConfig('countrysupplier','Country', 'select', CountryValidation,'Select Country',countrySupplierOptions);
export const CurrenceySupplier: FormFieldType = createFormConfig('currenceysupplier', 'Currency', 'select', CurrencyValidation,'Select Currency',CurrencyOptions);
