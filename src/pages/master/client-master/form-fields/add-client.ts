import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const nameClientMaster = {
    required: {
        value: true,
        message: "{label} field is rquired",
    },
    maxLength: {
        value: 30,
        message: "30 characters max",
    },
} as ValidationType;

const GSTClient = {
    required: {
        value: true,
        message: "{label} field is rquired",
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
const CrDayValidation = {
    required: {
        value: true,
        message: "Please Select Cr Days",
      },
      pattern: {
        value: /^[a-zA-Z0-9\-]+$/,
        message: "Invalid Cr Days ",
      },      
} as ValidationType;

// Right Field validation
const ClientCurrencyValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  pattern: {
    value: /^[a-zA-Z0-9\-]+$/,
    message:  "Invalid currency format",
  },
} as ValidationType;
const ExecutiveValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message:  "Invalid Executive",
  },
} as ValidationType;
const InstructionValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
 
} as ValidationType;
const GroupValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message:  "Invalid Group",
  },
} as ValidationType;
const SegmentValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message:  "Invalid Segment",
  },
} as ValidationType;
const RemarksValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength: {
    value: 50,
    message:  "Invalid Remarks",
  },
} as ValidationType;
const InvoiceValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  
} as ValidationType;
const ClientIdValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
} as ValidationType;
const OsValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
} as ValidationType;
const DiscountValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
} as ValidationType;
const AdjustValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength:{
    value:30,
    message:"Adjust is invalid"
  }
} as ValidationType;
const BalAdjustValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength:{
    value:30,
    message:"Adjust is invalid"
  }
} as ValidationType;
const AdjustEnqValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength:{
    value:30,
    message:"Adjust is invalid"
  }
} as ValidationType;
const AdjustPropfomaValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength:{
    value:30,
    message:"Adjust is invalid"
  }
} as ValidationType;
const BalAdjustPropfomaValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength:{
    value:30,
    message:"Adjust is invalid"
  }
} as ValidationType;
const AdjustEnqPropfomaValidation = {

  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength:{
    value:30,
    message:"Adjust is invalid"
  }
} as ValidationType;


// Option Section
export const Gst = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  export const cityClientOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  export const stateClientOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  export const countryClientOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const crDayOptions = [
    { value: "Bill on Actual Buyer", label: "Bill on Actual Buyer" },
  ];
  
  // Right Field start
  export const clientCurrencyOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const executiveOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const groupOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const clientIdOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const segmentOptions = [
    { value: "India", label: "India" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  export const invoiceOption = [
    { value: "Monthly Invoice", label: "Monthly Invoice" },
    { value: "Individual Report / Invoice", label: "Individual Report / Invoice" },
  ];
  export const osEmailOptions = [
    { value: "Auto Send O/S by e-Mail", label: "Auto Send O/S by e-Mail" },
    { value: "OS List printed", label: "OS List printed" },
  ];

  export const discountOptions = [
    { value: "in %", label: "in %" },
    { value: "Per Report", label: "Per Report" },
    { value: "NO Discount", label: "NO Discount" },
  ];
export const clientName: FormFieldType = createFormConfig('ClientName', 'Name', 'text', nameClientMaster,'Enter Client Name');
export const clientGst: FormFieldType = createFormConfig('gst', 'GST', 'radio', GSTClient,'',Gst);
export const gstn: FormFieldType = createFormConfig('GSTN','GSTN', 'text', GSTNClient,'');

export const addressClient: FormFieldType = createFormConfig('address','Address', 'textarea', addressValidation,'Enter Address');
export const telnoClient: FormFieldType = createFormConfig('telno','Tel No.', 'number', telNoValidation,'Enter Tel No.');
export const faxnoClient: FormFieldType = createFormConfig('faxno','Fax No.', 'text', FaxNoValidation,'Enter Fax No.');
export const emailClient: FormFieldType = createFormConfig('email','E-Mail', 'Email', EmailValidation,'Enter E-mail');
export const websiteClient: FormFieldType = createFormConfig('website','Website', 'text', WebsiteValidation,'Enter WebSite');
export const contactClient: FormFieldType = createFormConfig('contact','Contact', 'text', ContactValidation,'Enter Contact');
export const designationClient: FormFieldType = createFormConfig('designation','Designation', 'text', DesignationValidation,'Enter Designation');
export const cityClient: FormFieldType = createFormConfig('city','City', 'select', CityValidation,'Select City',cityClientOptions);
export const zipClient: FormFieldType = createFormConfig('zip','Zip', 'text', ZipValidation,'Enter Zip');
export const stateClient: FormFieldType = createFormConfig('state','State', 'select', StateValidation,'Select State',stateClientOptions);
export const statecodeClient: FormFieldType = createFormConfig('state','State Code', 'text',StateValidation ,'');
export const countryClient: FormFieldType = createFormConfig('country','Country', 'select', CountryValidation,'Select Country',countryClientOptions);

export const crDay: FormFieldType = createFormConfig('CrDays','Cr. Days', 'select', CrDayValidation,'Select Cr. days',crDayOptions);
export const billonactual: FormFieldType = createFormConfig('billonActualBuyer','', 'checkbox', CrDayValidation,'',crDayOptions);


// Right Side Fields 
export const id: FormFieldType = createFormConfig('clientId', 'Id', 'select', ClientIdValidation,' Id',clientIdOptions);
export const clientIdSelect: FormFieldType = createFormConfig('clientIdSelect', '', 'select', ClientIdValidation,'Select Id',clientIdOptions);
export const clientCurrencey: FormFieldType = createFormConfig('clientCurrencey', 'Currency', 'select', ClientCurrencyValidation,'Select Currency',clientCurrencyOptions);
export const executive: FormFieldType = createFormConfig('executive', 'Executive', 'select', ExecutiveValidation,'Select Executive',executiveOptions);
export const instuction: FormFieldType = createFormConfig('instruction','Instruction', 'textarea', InstructionValidation,'Enter Instruction');
export const groupClient: FormFieldType = createFormConfig('group', 'Group', 'select', GroupValidation,'Select Group',groupOptions);
export const segmentClient: FormFieldType = createFormConfig('segment', 'Segment', 'select', SegmentValidation,'Select Segment',segmentOptions);
export const remarks: FormFieldType = createFormConfig('remarks','Remarks', 'textarea', RemarksValidation,'Enter Remarks');
export const monthlyIvoice: FormFieldType = createFormConfig('monthlyinvoice', 'Monthly / Daily Invoice', 'radio', InvoiceValidation,'',invoiceOption);
export const osemail: FormFieldType = createFormConfig('osemail','O/S Email', 'checkbox', OsValidation,'',osEmailOptions);

// Right Side Adjust From Section 
export const discount: FormFieldType = createFormConfig('discount', 'Discount ', 'radio', DiscountValidation,'',discountOptions);
export const discountBlank : FormFieldType = createFormConfig('discount', ' ', 'text', DiscountValidation,'discount');
export const toAdjust : FormFieldType = createFormConfig('toadjust', 'To Adjust', 'text', AdjustValidation,'Adjust');
export const baltoAdjust : FormFieldType = createFormConfig('toadjust', 'Bal.to Adjust', 'text', BalAdjustValidation,'Bal to Adjust');
export const adjustenquiry : FormFieldType = createFormConfig('adjustenquiry', 'Adjust/Enquiry', 'text', AdjustEnqValidation,'Adjust /Enquiry');
// Adjust From Proforma
export const toAdjustproforma : FormFieldType = createFormConfig('toadjustproforma', 'To Adjust', 'text', AdjustPropfomaValidation,'Adjust Proforma');
export const baltoAdjustproformaproforma : FormFieldType = createFormConfig('toadjustproforma', 'Bal.to Adjust', 'text', BalAdjustPropfomaValidation,'Bal to Adjust Proforma');
export const adjustenquiryproforma : FormFieldType = createFormConfig('adjustenquiryproforma', 'Adjust/Enquiry', 'text', AdjustEnqPropfomaValidation,'Adjust /Enquiry Proforma');