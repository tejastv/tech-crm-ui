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
    message: "Please check the {label} box",
  },
} as ValidationType;

const GSTNClient = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    message: "Invalid GSTN format. The correct format is: 12ABCDE3456F7Z8",
  },
} as ValidationType;

const addressValidation = {
  required: {
    value: false,
    message: "Please Enter Address",
  },
  // pattern: {
  //   value: /^[\w\s\d#.,\-\/]+$/,
  //   message: "Please use alphanumeric characters",
  // },
} as ValidationType;

const telNoValidation = {
  required: {
    value: false,
    message: "Please Enter Telephone Number",
  },
  // pattern: {
  //   value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
  //   message: "Invalid telephone number. Please use Number.",
  // },
} as ValidationType;

const FaxNoValidation = {
  required: {
    value: false,
    message: "Please Enter Fax number",
  },
  // pattern: {
  //   value: /^\+?[0-9\s\-()+.]*$/,
  //   message:
  //     "Invalid fax number. Please use a valid format like +123 456 7890 or (123) 456-7890.",
  // },
} as ValidationType;

const EmailValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value:
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //   message: "Please Include an '@' and .com/in in the email address.",
  // },
} as ValidationType;

const WebsiteValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
  //   message: "website URL e.g., http://www.example.com",
  // },
} as ValidationType;

const ContactValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "{label} should be up to 30 characters max",
  // },
} as ValidationType;

const DesignationValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Designation should be up to 50 characters long",
  // },
} as ValidationType;

const ZipValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d{6}$/,
  //   message: "Invalid ZIP code,Please enter a 6-digit number.",
  // },
} as ValidationType;

const CityValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const StateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const CountryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const CrDayValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d+$/,
  //   message: "Credit Days must be a positive number",
  // },
} as ValidationType;

// Right Field validation
const ClientCurrencyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message:
  //     "Invalid currency format. Please use a valid currency code (e.g., USD).",
  // },
} as ValidationType;
const ExecutiveValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Invalid Executive selection",
  // },
} as ValidationType;
const InstructionValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const GroupValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const SegmentValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const RemarksValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Invalid Remarks",
  // },
} as ValidationType;
const InvoiceValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const ClientIdValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const OsValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const billonactualValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
} as ValidationType;
const DiscountValidation = {
  required: {
    value: true,
    message: "Please select a {label}",
  },
} as ValidationType;
const AdjustValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "{label} should be up to 30 characters max",
  // },
} as ValidationType;
const BalAdjustValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Adjust is invalid",
  // },
} as ValidationType;
const AdjustEnqValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Adjust is invalid",
  // },
} as ValidationType;
const AdjustPropfomaValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Adjust is invalid",
  // },
} as ValidationType;
const BalAdjustPropfomaValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Adjust is invalid",
  // },
} as ValidationType;
const AdjustEnqPropfomaValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Adjust is invalid",
  // },
} as ValidationType;

// Option Section
const GstOption = {
  Y: { value: "Y", label: "Yes" },
  N: { value: "N", label: "No" },
  S: { value: "S", label: "SEZ-IGST" },
  Z: { value: "Z", label: "SEZ-NO GST" },
};

const biilOnActualBuyerOptions = {
  billOn: { value: true, label: "Bill on Actual Buyer" },
};

// Right Field start

const invoiceOption = {
  Y: { value: "Y", label: "Monthly Invoice" },
  N: {
    value: "N",
    label: "Individual Report / Invoice",
  },
};
const osEmailOptions = {
  Y: { value: "Y", label: "Auto Send O/S by e-Mail" },
  N: { value: "N", label: "OS List printed" },
};

const discountOptions = {
  in: { value: "in", label: "in %" },
  perRep: { value: "perRep", label: "Per Report" },
  NA: { value: "NA", label: "NO Discount" },
};
const clientName: FormFieldType = createFormConfig(
  "clientName",
  "Name",
  "text",
  nameClientMaster,
  "Enter Client Name"
);
const clientGst: FormFieldType = createFormConfig(
  "gstYN",
  "GST",
  "radio",
  GSTClient,
  "",
  GstOption
);
const gstn: FormFieldType = createFormConfig(
  "gstn",
  "GSTN",
  "text",
  GSTNClient,
  ""
);

const addressClient: FormFieldType = createFormConfig(
  "address",
  "Address",
  "textarea",
  addressValidation,
  "Enter Address"
);
const telnoClient: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "text",
  telNoValidation,
  "Enter Tel No."
);
const faxnoClient: FormFieldType = createFormConfig(
  "fax",
  "Fax No.",
  "text",
  FaxNoValidation,
  "Enter Fax No."
);
const emailClient: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailValidation,
  "Enter E-mail"
);
const websiteClient: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteValidation,
  "Enter WebSite"
);
const contactClient: FormFieldType = createFormConfig(
  "contactPerson",
  "Contact",
  "text",
  ContactValidation,
  "Enter Contact"
);
const designationClient: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationValidation,
  "Enter Designation"
);
const cityClient: FormFieldType = createFormConfig(
  "cityID",
  "City",
  "select",
  CityValidation,
  "Select City",
  {}
);
const zipClient: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipValidation,
  "Enter Zip"
);
const stateClient: FormFieldType = createFormConfig(
  "stateID",
  "State",
  "select",
  StateValidation,
  "Select State",
  {}
);
const statecodeClient: FormFieldType = createFormConfig(
  "stateCode",
  "State Code",
  "text",
  StateValidation,
  "",
  {},
  true
);
const countryClient: FormFieldType = createFormConfig(
  "countryID",
  "Country",
  "select",
  CountryValidation,
  "Select Country",
  {}
);

const crDay: FormFieldType = createFormConfig(
  "crDays",
  "Cr. Days",
  "select",
  CrDayValidation,
  "Select Cr. days",
  {}
);

const billonactual: FormFieldType = createFormConfig(
  "billONActualBuyer",
  "",
  "checkbox",
  billonactualValidation, //CrDayValidation,
  "",
  biilOnActualBuyerOptions
);

// Right Side Fields
const id: FormFieldType = createFormConfig(
  "clientCode",
  "Id",
  "select",
  ClientIdValidation,
  "",
  {},
  true
);
const clientIdSelect: FormFieldType = createFormConfig(
  "clientId",
  "",
  "select",
  ClientIdValidation,
  "Select Client",
  {}
);
const clientCurrencey: FormFieldType = createFormConfig(
  "currencyID",
  "Currency",
  "select",
  ClientCurrencyValidation,
  "Select Currency",
  {}
);
const executive: FormFieldType = createFormConfig(
  "executive_id",
  "Executive",
  "select",
  ExecutiveValidation,
  "Select Executive",
  {}
);
const instuction: FormFieldType = createFormConfig(
  "instruction",
  "Instruction",
  "textarea",
  InstructionValidation,
  "Enter Instruction"
);
const groupClient: FormFieldType = createFormConfig(
  "groupId",
  "Group",
  "select",
  GroupValidation,
  "Select Group",
  {}
);
const segmentClient: FormFieldType = createFormConfig(
  "segmentId",
  "Segment",
  "select",
  SegmentValidation,
  "Select Segment",
  {}
);
const remarks: FormFieldType = createFormConfig(
  "remarks",
  "Remarks",
  "textarea",
  RemarksValidation,
  "Enter Remarks"
);
const monthlyIvoice: FormFieldType = createFormConfig(
  "monthlyInvoice",
  "Monthly / Daily Invoice",
  "radio",
  InvoiceValidation,
  "",
  invoiceOption
);
const osemail: FormFieldType = createFormConfig(
  "osListPrInteger",
  "O/S Email",
  "checkbox",
  OsValidation,
  "",
  osEmailOptions
);

// Right Side Adjust From Section
const discount: FormFieldType = createFormConfig(
  "disType",
  "Discount ",
  "radio",
  DiscountValidation,
  "",
  discountOptions
);
const discountBlank: FormFieldType = createFormConfig(
  "discount",
  " ",
  "text",
  DiscountValidation,
  "discount"
);
const toAdjust: FormFieldType = createFormConfig(
  "toAdjust",
  "To Adjust",
  "text",
  AdjustValidation,
  "Adjust"
);
const baltoAdjust: FormFieldType = createFormConfig(
  "balToAdjust",
  "Bal.to Adjust",
  "text",
  BalAdjustValidation,
  "Bal to Adjust"
);
const adjustenquiry: FormFieldType = createFormConfig(
  "adjustPerEnq",
  "Adjust/Enquiry",
  "text",
  AdjustEnqValidation,
  "Adjust /Enquiry"
);
// Adjust From Proforma
const toAdjustproforma: FormFieldType = createFormConfig(
  "toAdjust_PI",
  "To Adjusts",
  "text",
  AdjustPropfomaValidation,
  "Adjusts Proforma"
);
const baltoAdjustproformaproforma: FormFieldType = createFormConfig(
  "balToAdjust_PI",
  "Bal.to Adjust",
  "text",
  BalAdjustPropfomaValidation,
  "Bal to Adjust Proforma"
);
const adjustenquiryproforma: FormFieldType = createFormConfig(
  "adjustPerEnq_PI",
  "Adjust/Enquiry",
  "text",
  AdjustEnqPropfomaValidation,
  "Adjust /Enquiry Proforma"
);

export const clientFormFields = {
  clientName,
  clientGst,
  gstn,
  addressClient,
  telnoClient,
  faxnoClient,
  emailClient,
  websiteClient,
  contactClient,
  designationClient,
  cityClient,
  zipClient,
  stateClient,
  statecodeClient,
  countryClient,
  crDay,
  billonactual,
  id,
  clientIdSelect,
  clientCurrencey,
  executive,
  instuction,
  groupClient,
  segmentClient,
  remarks,
  monthlyIvoice,
  osemail,
  discount,
  discountBlank,
  toAdjust,
  baltoAdjust,
  adjustenquiry,
  toAdjustproforma,
  baltoAdjustproformaproforma,
  adjustenquiryproforma,
};
