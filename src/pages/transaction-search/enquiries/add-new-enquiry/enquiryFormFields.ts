import {
  FormFieldType,
  MapType,
  Note,
  Options,
  ValidationType,
} from "@shared/index";
import { createFormConfig, createNoteConfig } from "@utils/index";

const CompanyEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 characters max",
  // },
} as ValidationType;

const YearEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]{4}$/,
  //   message: "Invalid year format. Please enter a valid year (yyyy).",
  // },
} as ValidationType;
const refnoEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 characters max",
  // },
} as ValidationType;

const SourceEnquiry = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  //   message: "Select {label}",
  // },
} as ValidationType;

const GivenaddressValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[\w\s\d#.,\-\/]+$/,
  //   message: "Please use alphanumeric characters",
  // },
} as ValidationType;

const telNoEnquiryValidation = {
  required: {
    value: false,
    message: "Please Enter Telephone Number",
  },
  // pattern: {
  //   value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
  //   message: "Invalid telephone number. Please use Number.",
  // },
} as ValidationType;

const FaxNoEnquiryValidation = {
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

const EmailEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value:
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //message: "Please Include an '@' and .com/in in the email address.",
  // },
} as ValidationType;

const WebsiteEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
  //   message: "website URL e.g., http://www.example.com",
  // },
} as ValidationType;

const ContactEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "{label} should be up to 30 characters max",
  // },
} as ValidationType;

const DesignationEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Designation should be up to 50 characters long",
  // },
} as ValidationType;

const ZipEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^\d{6}$/,
  //   message: "Invalid ZIP code,Please enter a 6-digit number.",
  // },
} as ValidationType;

const CityEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const StateEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

const CountryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;

// Right Field validation
const blankValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const GivenNameEnquiryValidation = {
  required: {
    value: true,
    message: "Given Name field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Given Name should not exceed 30 characters",
  // },
} as ValidationType;
const recdOnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  // },
} as ValidationType;
const EnqValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^[a-zA-Z0-9\-]+$/,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const localsourceenquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const ServiceTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const DueOnValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // pattern: {
  //   value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   message: "Invalid date format. Please enter a valid date (yyyy-mm-dd).",
  // },
} as ValidationType;
const PrintStatusValidationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const NotesforEnqValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "50 characters max",
  // },
} as ValidationType;
const EnqStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const svisitValidation = {
  required: {
    value: false,
    message: "Please select a {label}",
  },
  // maxLength: {
  //   value: 50,
  //   message: "Please select a {label}",
  // },
} as ValidationType;
const NotesForAdjValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "{label} should be up to 30 characters max",
  // },
} as ValidationType;
const instructionEnquiryValidation = {
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
const ClientRefEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 charaters Max",
  // },
} as ValidationType;
const ClientEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Select {label}",
  // },
} as ValidationType;
const RequestNoValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;
const ClientIdEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;

const ActualBuyerEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "Select {label}",
  // },
} as ValidationType;

const PriceeEnquiryEnquiryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;
const DisEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;
const DiscountEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;
const CommEnquiryValidation = {
  required: {
    value: false,
    message: "{label} field is rquired",
  },
  // maxLength: {
  //   value: 30,
  //   message: "30 max Chearcter",
  // },
} as ValidationType;

const enqCompanyName: FormFieldType = createFormConfig(
  "companyId",
  "Company",
  "select",
  CompanyEnquiry,
  "Select Company",
  {}
);
const enqFinYear: FormFieldType = createFormConfig(
  "fYear",
  "Year",
  "year",
  YearEnquiry,
  "Select Year"
);
const enqRefNo: FormFieldType = createFormConfig(
  "refNo",
  "Ref No",
  "text",
  refnoEnquiry,
  "",
  {},
  true
);
const enqSource: FormFieldType = createFormConfig(
  "sourceId",
  "Source",
  "select",
  SourceEnquiry,
  "Select Source",
  {}
);

const enqGivenAddress: FormFieldType = createFormConfig(
  "givenAddress",
  "Address",
  "textarea",
  GivenaddressValidation,
  "Enter Address",
  {},
  false,
  true
);
const enqTelePhone: FormFieldType = createFormConfig(
  "phone",
  "Tel No.",
  "text",
  telNoEnquiryValidation,
  "Enter Tel No."
);
const enqFax: FormFieldType = createFormConfig(
  "fax",
  "Fax No.",
  "text",
  FaxNoEnquiryValidation,
  "Enter Fax No."
);
const enqEmail: FormFieldType = createFormConfig(
  "email",
  "E-Mail",
  "Email",
  EmailEnquiryValidation,
  "Enter E-mail"
);
const enqWebsite: FormFieldType = createFormConfig(
  "website",
  "Website",
  "text",
  WebsiteEnquiryValidation,
  "Enter WebSite"
);
const enqContact: FormFieldType = createFormConfig(
  "contactPerson",
  "Contact",
  "text",
  ContactEnquiryValidation,
  "Enter Contact"
);
const enqDesignation: FormFieldType = createFormConfig(
  "designation",
  "Designation",
  "text",
  DesignationEnquiryValidation,
  "Enter Designation"
);
const enqCity: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  CityEnquiryValidation,
  "Select City",
  {}
);
const enqZip: FormFieldType = createFormConfig(
  "zip",
  "Zip",
  "text",
  ZipEnquiryValidation,
  "Enter Zip"
);
const enqState: FormFieldType = createFormConfig(
  "stateId",
  "State",
  "select",
  StateEnquiryValidation,
  "Select State",
  {}
);
const enqStateCode: FormFieldType = createFormConfig(
  "state",
  "State Code",
  "text",
  StateEnquiryValidation,
  ""
);
const enqCountry: FormFieldType = createFormConfig(
  "countryId",
  "Country",
  "select",
  CountryEnquiryValidation,
  "Select Country",
  {}
);

// Right Side Fields
const enqBlank: FormFieldType = createFormConfig(
  "blank",
  "",
  "text",
  blankValidation,
  ""
);
const enqGivenName: FormFieldType = createFormConfig(
  "givenName",
  "Given Name",
  "text",
  GivenNameEnquiryValidation,
  "Given Name"
);
const myDate = new Date(); // Replace this with your actual date

// Extract year, month, and day components
const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, "0");
const day = String(myDate.getDate()).padStart(2, "0"); // Get the day (e.g., 07)

// Format the date as "year/mm/dd"
const formattedDate = `${year}/${month}/${day}`;
const enqRecdon: FormFieldType = createFormConfig(
  "recdDate",
  "Enq. Date/Recd. On",
  "date",
  recdOnValidation,
  formattedDate
);

const enqTypeData: MapType<Options> = {
  new: { value: "new", label: "NEW" },
  renew: { value: "renew", label: "RENEWAL" },
};

const enqtype: FormFieldType = createFormConfig(
  "typeofEnquiry",
  "Enq. Type",
  "select",
  EnqValidation, // Replace with your validation function
  "Select Enq. Type",
  enqTypeData,
  true // Default value set to "NEW"
);

const enqLocalSource: FormFieldType = createFormConfig(
  "localSourceId",
  "Local Source",
  "select",
  localsourceenquiryValidation,
  "Select Local Source",
  {}
);
const enqServiceType: FormFieldType = createFormConfig(
  "serviceTypeId",
  "Service Type",
  "select",
  ServiceTypeValidation,
  "Select Service",
  {}
);
const enqDueOn: FormFieldType = createFormConfig(
  "dueDate",
  "Due On",
  "date",
  DueOnValidation,
  "date"
);

const enqPrintStatusData: MapType<Options> = {
  "Not Received": { value: "Not Received", label: "Not Received" },
  Received: { label: "Received", value: "Received" },
};

const enqPrintStatus: FormFieldType = createFormConfig(
  "pmtStatus",
  "Print Status",
  "select",
  PrintStatusValidationValidation,
  "Select Print Status",
  enqPrintStatusData
);
const enqStatus: FormFieldType = createFormConfig(
  "enqStatusId",
  "Enq. Status",
  "select",
  EnqStatusValidation,
  "Select Enq. Status",
  {}
);

const enqSvisit: FormFieldType = createFormConfig(
  "svisit",
  "S.Visit",
  "select",
  svisitValidation,
  "Select S.Visit",
  {
    0: { value: "0", label: "NA" },
    1: { value: "1", label: "Pending to Visit" },
    2: { value: "2", label: "Visited" },
  }
);
const enqNotesForEnquiry: FormFieldType = createFormConfig(
  "notes",
  "Notes for Enquiry ",
  "textarea",
  NotesforEnqValidation,
  "Notes For Enquiry"
);
const enqNotesForAdj: FormFieldType = createFormConfig(
  "noteForComission",
  "Notes for Comma/Adj",
  "text",
  NotesForAdjValidation,
  "Notes For Comma/Adj "
);
const enqInstruction: FormFieldType = createFormConfig(
  "instruction",
  "Instruction ",
  "text",
  instructionEnquiryValidation,
  "Instruction"
);
const enqAdjust: FormFieldType = createFormConfig(
  "adjustment",
  "Adjust",
  "text",
  AdjustEnqValidation,
  "Adjust",
  {},
  true
);

const enqClientRef: FormFieldType = createFormConfig(
  "clientRefNo",
  "Client Ref",
  "text",
  ClientRefEnquiryValidation,
  "Client Ref"
);
const enqClient: FormFieldType = createFormConfig(
  "clientId",
  "Client",
  "select",
  ClientEnquiryValidation,
  "Select Client"
);
const enqRequestNo: FormFieldType = createFormConfig(
  "requestNo",
  "Request No.",
  "text",
  RequestNoValidation,
  "Request No."
);
const enqClientId: FormFieldType = createFormConfig(
  "clientIdDisable",
  "Client Id",
  "text",
  ClientIdEnquiryValidation,
  "Client Id",
  {},
  true
);
const enqActualBuyer: FormFieldType = createFormConfig(
  "actualBuyerId",
  "Actual Buyer",
  "select",
  ActualBuyerEnquiryValidation,
  "Actual Buyer",
  { 1: { label: "Direct", value: "1" } }
);
const enqPrice: FormFieldType = createFormConfig(
  "reportPrice",
  "Price",
  "text",
  PriceeEnquiryEnquiryValidation,
  "Price",
  {}
);
const enqDis: FormFieldType = createFormConfig(
  "disPer",
  "Dis.%",
  "text",
  DisEnquiryValidation,
  "Dis.%",
  {},
  true
);
const enqDiscount: FormFieldType = createFormConfig(
  "discount",
  "Discount",
  "text",
  DiscountEnquiryValidation,
  "Discount",
  {},
  true
);
const enqReportComm: FormFieldType = createFormConfig(
  "reportComission",
  "Comm.",
  "text",
  CommEnquiryValidation,
  "Comm."
);

const enqRefNote: Note = createNoteConfig("Note: Ref. No is Auto");
const enqActualBuyerAddNote: Note = createNoteConfig("Add New Actual Buyer");
const enqDiscountCommissionNote: Note = createNoteConfig(
  "Discount / Commission Details"
);
const enqDiscountTypeNote: Note = createNoteConfig(
  "Discount Type - | % of Discount - | Discounted Value -"
);

export const enquiryFormFields = {
  enqCompanyName,
  enqFinYear,
  enqRefNo,
  enqSource,
  enqGivenAddress,
  enqTelePhone,
  enqFax,
  enqEmail,
  enqWebsite,
  enqContact,
  enqDesignation,
  enqCity,
  enqZip,
  enqState,
  enqStateCode,
  enqCountry,
  enqGivenName,
  enqBlank,
  enqRecdon,
  enqtype,
  enqLocalSource,
  enqServiceType,
  enqDueOn,
  enqPrintStatus,
  enqStatus,
  enqSvisit,
  enqNotesForEnquiry,
  enqNotesForAdj,
  enqInstruction,
  enqAdjust,
  enqClientRef,
  enqClient,
  enqRequestNo,
  enqClientId,
  enqActualBuyer,
  enqPrice,
  enqDis,
  enqDiscount,
  enqReportComm,
  enqRefNote,
  enqActualBuyerAddNote,
  enqDiscountCommissionNote,
  enqDiscountTypeNote,
  enqPrintStatusData,
  enqTypeData,
};
