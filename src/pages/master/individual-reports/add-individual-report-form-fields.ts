import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const PreparedForValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 20,
    message: "30 characters max",
  },
} as ValidationType;

const yourRefNoValidation = {
    required: {
      value: true,
      message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  } as ValidationType;

const reportNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const inquiryDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;


const reportDateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message: "Invalid date format. Please use a valid date format (dd/mm/yyyy).",
  },
} as ValidationType;


const priceLocalSourceOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];
const priceCurrencyOptions = [
  { value: "Mumbai", label: "200" },
  { value: "strawberry", label: "300" },
  { value: "vanilla", label: "400" },
];

const preparedFor: FormFieldType = createFormConfig(
  "preparedfor",
  "Prepared For",
  "text",
  PreparedForValidation,
  "",
);

const yourRefNo: FormFieldType = createFormConfig(
  "yourrefno",
  "Your Ref. No",
  "text",
  yourRefNoValidation,
  "",
);

const reportNo: FormFieldType = createFormConfig(
  "reportno",
  "Report No.",
  "text",
  reportNoValidation,
  ""
);

const inquiryDate: FormFieldType = createFormConfig(
  "inquirydate",
  "Inquiry Date",
  "date",
  inquiryDateValidation,
  ""
);
const reportDate: FormFieldType = createFormConfig(
  "reportdate",
  "Report Date",
  "date",
  reportDateValidation,
  ""
);

// Residence VERIFICATION

const rNameValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rDateOfBirthValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

  
const rRelationshipValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  
} as ValidationType;
  
const rEmailValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Invalid email format. Please use a valid email address.",
  },
} as ValidationType;
  
const rGenderValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  
} as ValidationType;
  
const rMaritalStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  
} as ValidationType;
  
const rMobileNumberVelidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;

const rPersonMetValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const rPersonMetMobileNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;

const rRelationshipWithApplicantValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

  
const rEducationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rAddressVisitedValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rNearestLandMarkValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rNameofOwnerValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rPropertyStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },

} as ValidationType;
  
const rEducationProofProvidedValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

  
const rNoofFamilyMemberValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rDependentMemberValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rPropertyRelationshipwithApplicantValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rTypeOfValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rConstructorTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rAreaValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rNoOfFloorValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rFloorLocationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rDurationOfStayValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rFromValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rToValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rDoorNamePlateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rClassofLocalityValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rAccessabilityValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rPropertyInteriorsValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const rPropertyExteriorsValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const rEducationOption = [
  { value: "Y", label: "Yes" },
  {value: "N",label: "No",},
];

const rGenderOption = [
  { value: "Male", label: "Male" },
  {value: "Female",label: "Female",},
  {value: "Other",label: "Other",},
];

const rPropertyStatusOption = [
  { value: "Y", label: "Owend" },
  {value: "N",label: "Rented"},
];

const rConstructorOption = [
  { value: "Y", label: "Permanent" },
  {value: "N",label: "Shed"},
];
const rPhotographOption = [
  { value: "Y", label: "Yes" },
  {value: "N",label: "No"},
];

const rDoorNameOption = [
  { value: "Y", label: " Visible" },
  {value: "N",label: "Not-Visible"},
];


const rClassofOption = [
  { value: "Y", label: "High" },
  {value: "N",label: "Middle"},
  {value: "N",label: "Low"},
];

const rAccessabilityOption = [
  { value: "Y", label: "Easy" },
  {value: "N",label: "Difficult"},
  {value: "N",label: "Very Difficult"},
];

const rPropertyInteriorsOption = [
  { value: "Y", label: "Good" },
  {value: "N",label: "Moderate"},
  {value: "N",label: "Bad "},
];
const rPropertryExteriosOption = [
  { value: "Y", label: "Good" },
  {value: "N",label: "Moderate"},
  {value: "N",label: "Bad "},
];

const rTypeOfUnitOption = [
  { value: "Y", label: "1 RK" },
  {value: "N",label: "1 BHK"},
  {value: "N",label: "2 BHK"},
  {value: "N",label: "3 BHK"},
];


const rName: FormFieldType = createFormConfig(
  "rname",
  "Name",
  "text",
  rNameValidation,
  "",
);


const rRelationshipWithApplicant: FormFieldType = createFormConfig(
  "relationshipwithapplicant ",
  "Relationship with Applicant",
  "text",
  rRelationshipValidation,
  "",
);

const rDateOfBirth: FormFieldType = createFormConfig(
  "dateofbirth",
  "Date of Birth",
  "date",
  rDateOfBirthValidation,
  ""
);

const rMobileNumber: FormFieldType = createFormConfig(
  "mobileno",
  "Mobile No.",
  "text",
  rMobileNumberVelidation,
  ""
);

const rPersonMet: FormFieldType = createFormConfig(
  "personmet ",
  "Person Met",
  "text",
  rPersonMetValidation,
  "",

);

const rPersonMetMobileNo: FormFieldType = createFormConfig(
  "personmetmobileno. ",
  "Person Met Mobile No.",
  "text",
  rPersonMetMobileNoValidation,
  "",
);

const rRelationshipWithApplicantCoAplication: FormFieldType = createFormConfig(
  "relationshipwithapplicant ",
  "Relationship with Applicant / Co-Applicant",
  "text",
  rRelationshipValidation,
  "",
);

const rEmail: FormFieldType = createFormConfig(
  "email ",
  " E-Mail",
  "text",
  rEmailValidation,
  "",
);

const rMaritalStatus: FormFieldType = createFormConfig(
  "maritalstatus ",
  "Marital Status",
  "text",
  rMaritalStatusValidation,
  "",
);

const rEducation: FormFieldType = createFormConfig(
  "education ",
  "Education",
  "text",
  rEducationValidation,
  "",
);

const rGender: FormFieldType = createFormConfig(
  "gender ",
  "Gender",
  "radio",
  rGenderValidation,
  "",
  rGenderOption
);

const rEducationProofProvided: FormFieldType = createFormConfig(
  "educationproof ",
  "Education Proof Provided :",
  "radio",
  rEmailValidation,
  "",
  rEducationOption
);



const rNoofFamilyMembers: FormFieldType = createFormConfig(
  "education ",
  "No of Family Members",
  "number",
  rEducationValidation,
  "",
);
const rDependentMembers: FormFieldType = createFormConfig(
  "dependentmember ",
  "Dependent Members",
  "number",
  rDependentMemberValidation,
  "",
);
// ---------------------------Residential Property Details------------------

const rAddressVisited: FormFieldType = createFormConfig(
  "addressvisited",
  "Address Visited",
  "text",
  rAddressVisitedValidation,
  "",
);

const rNearestLandMark: FormFieldType = createFormConfig(
  "nearestlandmark",
  "Nearest Land Mark",
  "text",
  rNearestLandMarkValidation,
  "",
);

const rPropertyStatus: FormFieldType = createFormConfig(
  "propertystatus ",
  "Property Status :",
  "radio",
  rGenderValidation,
  "",
  rPropertyStatusOption
);

const rNameofTheOwner: FormFieldType = createFormConfig(
  "nameoftheowner",
  "Name of the Owner",
  "text",
  rNameofOwnerValidation,
  "",
);

const rPropertyRelationshipwithApplicant: FormFieldType = createFormConfig(
  "relationshipwithapplicant",
  "Relationship with Applicant / Co-Applicant",
  "text",
  rPropertyRelationshipwithApplicantValidation,
  "",
);

const rTypeofUnit: FormFieldType = createFormConfig(
  "typeofunit",
  "Type of Unit :",
  "radio",
  rTypeOfValidation,
  "",
  rTypeOfUnitOption
)

const rConstructionType: FormFieldType = createFormConfig(
  "constructiontype ",
  "Construction Type :",
  "radio",
  rConstructorTypeValidation,
  "",
  rConstructorOption
)

const rRelationshipwithapplicant: FormFieldType = createFormConfig(
  "relationshipwithapplicant",
  "Relationship with Applicant",
  "text",
  rRelationshipValidation,
  "",
);

const rArea: FormFieldType = createFormConfig(
  "area",
  "Area (Sq. Ft. / Sq. Yards/ Sq.Mts.)",
  "text",
  rAreaValidation,
  "",
);

const rNoofFloors: FormFieldType = createFormConfig(
  "nooffloor",
  "No. of Floors",
  "text",
  rNoOfFloorValidation,
  "",
);

const rFloorsLocation: FormFieldType = createFormConfig(
  "floorlocation",
  "Floors Location",
  "text",
  rFloorLocationValidation,
  "",
);

const rDurationofStay: FormFieldType = createFormConfig(
  "durationofstay",
  "Duration of Stay",
  "text",
  rDurationOfStayValidation,
  "",
);

const rFrom: FormFieldType = createFormConfig(
  "rFrom",
  "From",
  "text",
  rFromValidation,
  "",
);

const rTo: FormFieldType = createFormConfig(
  "to",
  "To",
  "text",
  rToValidation,
  "",
);

const rDoorNamePlate: FormFieldType = createFormConfig(
  "doornameplate",
  "Door Name Plate :",
  "radio",
  rDoorNamePlateValidation,
  "",
  rDoorNameOption
);

const rClassofLocality: FormFieldType = createFormConfig(
  "classoflocality",
  "Class of Locality :",
  "radio",
  rClassofLocalityValidation,
  "",
  rClassofOption
);

const rAccessbility: FormFieldType = createFormConfig(
  "accessbility",
  "Accessbility :",
  "radio",
  rAccessabilityValidation,
  "",
  rAccessabilityOption
);

const rPropertyInteriors: FormFieldType = createFormConfig(
  "propertyinteriours",
  "Property Interiors :",
  "radio",
  rPropertyInteriorsValidation,
  "",
  rPropertyInteriorsOption
);

const rPropertyExteriors: FormFieldType = createFormConfig(
  "propertyexterios",
  "Property Exteriors :",
  "radio",
  rPropertyExteriorsValidation,
  "",
  rPropertryExteriosOption
);


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

const rWall: FormFieldType = createFormConfig(
  "wallunit",
  "Wall Unit",
  "checkbox",
  ClientGroup,
  ""
);
const rSofa: FormFieldType = createFormConfig(
  "sofaset",
  "Dofa Set",
  "checkbox",
  ClientGroup2,
  ""
);
const rCarpet: FormFieldType = createFormConfig(
  "carpet",
  "Carpet",
  "checkbox",
  ClientGroup2,
  ""
);
const rRefrigerator: FormFieldType = createFormConfig(
  "refrigerator",
  "Refrigerator",
  "checkbox",
  ClientGroup2,
  ""
);
const rDining: FormFieldType = createFormConfig(
  "diningtable",
  "Dining Table",
  "checkbox",
  ClientGroup2,
  ""
);
const rPhone: FormFieldType = createFormConfig(
  "phone",
  "Phone",
  "checkbox",
  ClientGroup2,
  ""
);
const rTv: FormFieldType = createFormConfig(
  "tv",
  "TV",
  "checkbox",
  ClientGroup2,
  ""
);
const rMusicSystem: FormFieldType = createFormConfig(
  "musicsystem",
  "Music System",
  "checkbox",
  ClientGroup2,
  ""
);
const rComputer: FormFieldType = createFormConfig(
  "computer",
  "Computer",
  "checkbox",
  ClientGroup2,
  ""
);
const rAc: FormFieldType = createFormConfig(
  "ac",
  "AC",
  "checkbox",
  ClientGroup2,
  ""
);

  
const rDateOfVisitValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const rDateOfvisit: FormFieldType = createFormConfig(
  "dateofvisit",
  "Date of Visit",
  "date",
  rDateOfVisitValidation,
  ""
);

const rTimeOfvisit: FormFieldType = createFormConfig(
  "timeofvisit",
  "Time of Visit",
  "time",
  rDateOfVisitValidation,
  ""
);


const rPhotograph: FormFieldType = createFormConfig(
  "photograph",
  "Photograph :",
  "radio",
  rPropertyInteriorsValidation,
  "",
  rPhotographOption
);


// ---------------------------BUSINESS VERIFICATION // ---------------------------


const bNameOfValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bCompanyNameOfValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bPersonMetValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bAddressVisitedValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bTypeOfCompanyValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bDesignationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bContactNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bNoOfEmployeoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bCompanyEmailValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bWebsiteValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bEmployeeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bEmpDesignationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bNatureofEmployementValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bDateOfJoiningValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bPresentSalaryValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bSalaryMOdeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bPersoneConValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bEmp2DesignationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const bContactNumberValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;


const bDateOfVisitValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;


const bTypeOfCompanyOption = [
  { value: "Y", label: " Sole Propritership" },
  {value: "N",label: "Partnership"},
  {value: "N",label: "Pvt. Ltd/Ltd"},
];



const bName: FormFieldType = createFormConfig(
  "nameofapplicant ",
  "Name of Applicant",
  "text",
  bNameOfValidation,
  "",
)
const bCompnayName: FormFieldType = createFormConfig(
  "compnayname ",
  "Company Name",
  "text",
  bCompanyNameOfValidation,
  "",
)


const bAddressVisited: FormFieldType = createFormConfig(
  "addressvisited",
  "Address Visited",
  "text",
  bAddressVisitedValidation,
  "",
);


const bNearestLandMark: FormFieldType = createFormConfig(
  "nearestlandmark",
  "Nearest Land Mark",
  "text",
  rNearestLandMarkValidation,
  "",
);


const btypeOfCompany: FormFieldType = createFormConfig(
  "typeofcompany",
  "Type of Company :",
  "radio",
  bTypeOfCompanyValidation,
  "",
  bTypeOfCompanyOption
)

const bPersonMet: FormFieldType = createFormConfig(
  "personmet ",
  "Person Met",
  "text",
  bPersonMetValidation,
  "",
);

const bDesignation: FormFieldType = createFormConfig(
  "designation ",
  "Designation",
  "text",
  bDesignationValidation,
  "",
);

const bContactNo: FormFieldType = createFormConfig(
  "contactno ",
  "Contact No.",
  "text",
  bContactNoValidation,
  "",
);

const bNoofEmployees: FormFieldType = createFormConfig(
  "noofemployees ",
  "No. of Employees",
  "text",
  bNoOfEmployeoValidation,
  "",
);

const bCompanyEmail: FormFieldType = createFormConfig(
  "companyemail ",
  "Company E-Mail",
  "text",
  bCompanyEmailValidation,
  "",
);

const bWebsite: FormFieldType = createFormConfig(
  "website ",
  "Website (if Any)",
  "text",
  bWebsiteValidation,
  "",
);


const bDateOfvisit: FormFieldType = createFormConfig(
  "dateofvisit",
  "Date of Visit",
  "date",
  bDateOfVisitValidation,
  ""
);

const bTimeOfvisit: FormFieldType = createFormConfig(
  "timeofvisit",
  "Time of Visit",
  "time",
  bDateOfVisitValidation,
  ""
);


const bEmployeesNo: FormFieldType = createFormConfig(
  "employeeno ",
  "Employees No",
  "text",
  bEmployeeValidation,
  "",
);

const bEmpDesignation: FormFieldType = createFormConfig(
  "designation ",
  "Designation",
  "text",
  bDesignationValidation,
  "",
);

const bNatureofEmployement: FormFieldType = createFormConfig(
  "natureofemployement ",
  "Nature of Employement",
  "text",
  bNatureofEmployementValidation,
  "",
);

const bDateOfJoining: FormFieldType = createFormConfig(
  "dateofjoining ",
  "Date of Joining",
  "Date",
  bDateOfJoiningValidation,
  "",
);

const bPresentSalary: FormFieldType = createFormConfig(
  "presentsalary ",
  "Present Salary",
  "text",
  bPresentSalaryValidation,
  "",
);

const bSalaryModeofPayment: FormFieldType = createFormConfig(
  "salarymodeofpayment ",
  "Salary Mode of Payment",
  "text",
  bSalaryMOdeValidation,
  "",
);

const bPersonContacted: FormFieldType = createFormConfig(
  "personcontacted ",
  "Person Contacted",
  "text",
  bPersoneConValidation,
  "",
);

const bEmp2Designation: FormFieldType = createFormConfig(
  "designation ",
  "Designation",
  "text",
  bEmp2DesignationValidation,
  "",
);

const bContactNumber: FormFieldType = createFormConfig(
  "contactnumber ",
  "Contact Number",
  "text",
  bContactNumberValidation,
  "",
);



// ---------------------------Property VERIFICATION // ---------------------------


const proNameValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proRelationshipValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  
} as ValidationType;
  
const proMobileNumberVelidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;
const proPersonMetValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const proPersonMetMobileNoValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;

 
const proAddressVisitedValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proNearestLandMarkValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
const proGenderValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  
} as ValidationType;
const proNameofOwnerValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proPropertyStatusValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },

} as ValidationType;
  
  
const proConstructorTypeValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proAreaValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proNoOfFloorValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proFloorLocationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proDurationOfStayValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proFromValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proToValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proDoorNamePlateValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const proTypeOfValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proClassofLocalityValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proAccessabilityValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proPropertyInteriorsValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const proPropertyExteriorsValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

  
const proPropertyRelationshipwithApplicantValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const proName: FormFieldType = createFormConfig(
  "rname",
  "Name",
  "text",
  proNameValidation,
  "",
);
const proRelationshipWithApplicant: FormFieldType = createFormConfig(
  "relationshipwithapplicant ",
  "Relationship with Applicant",
  "text",
  proRelationshipValidation,
  "",
);

const proMobileNumber: FormFieldType = createFormConfig(
  "mobileno",
  "Mobile No.",
  "text",
  proMobileNumberVelidation,
  ""
);

const proPersonMet: FormFieldType = createFormConfig(
  "personmet ",
  "Person Met",
  "text",
  proPersonMetValidation,
  "",

);

const pPersonMetMobileNo: FormFieldType = createFormConfig(
  "personmetmobileno. ",
  "Person Met Mobile No.",
  "text",
  proPersonMetMobileNoValidation,
  "",
);


const proAddressVisited: FormFieldType = createFormConfig(
  "addressvisited",
  "Address Visited",
  "text",
  proAddressVisitedValidation,
  "",
);

const proNearestLandMark: FormFieldType = createFormConfig(
  "nearestlandmark",
  "Nearest Land Mark",
  "text",
  proNearestLandMarkValidation,
  "",
);

const proPropertyStatus: FormFieldType = createFormConfig(
  "propertystatus ",
  "Property Status :",
  "radio",
  proGenderValidation,
  "",
  rPropertyStatusOption
);

const proNameofTheOwner: FormFieldType = createFormConfig(
  "nameoftheowner",
  "Name of the Owner",
  "text",
  proNameofOwnerValidation,
  "",
);

const proPropertyRelationshipwithApplicant: FormFieldType = createFormConfig(
  "relationshipwithapplicant",
  "Relationship with Applicant / Co-Applicant",
  "text",
  proPropertyRelationshipwithApplicantValidation,
  "",
);

const proTypeofUnit: FormFieldType = createFormConfig(
  "typeofunit",
  "Type of Unit :",
  "radio",
  proTypeOfValidation,
  "",
  rTypeOfUnitOption
)

const proConstructionType: FormFieldType = createFormConfig(
  "constructiontype ",
  "Construction Type :",
  "radio",
  proConstructorTypeValidation,
  "",
  rConstructorOption
)

const proRelationshipwithapplicant: FormFieldType = createFormConfig(
  "relationshipwithapplicant",
  "Relationship with Applicant",
  "text",
  proRelationshipValidation,
  "",
);

const proArea: FormFieldType = createFormConfig(
  "area",
  "Area (Sq. Ft. / Sq. Yards/ Sq.Mts.)",
  "text",
  proAreaValidation,
  "",
);

const proNoofFloors: FormFieldType = createFormConfig(
  "nooffloor",
  "No. of Floors",
  "text",
  proNoOfFloorValidation,
  "",
);

const proFloorsLocation: FormFieldType = createFormConfig(
  "floorlocation",
  "Floors Location",
  "text",
  proFloorLocationValidation,
  "",
);

const proDurationofStay: FormFieldType = createFormConfig(
  "durationofstay",
  "Duration of Stay",
  "text",
  proDurationOfStayValidation,
  "",
);

const proFrom: FormFieldType = createFormConfig(
  "rFrom",
  "From",
  "text",
  proFromValidation,
  "",
);

const proTo: FormFieldType = createFormConfig(
  "to",
  "To",
  "text",
  proToValidation,
  "",
);

const proDoorNamePlate: FormFieldType = createFormConfig(
  "doornameplate",
  "Door Name Plate :",
  "radio",
  proDoorNamePlateValidation,
  "",
  rDoorNameOption
);

const proClassofLocality: FormFieldType = createFormConfig(
  "classoflocality",
  "Class of Locality :",
  "radio",
  proClassofLocalityValidation,
  "",
  rClassofOption
);

const proAccessbility: FormFieldType = createFormConfig(
  "accessbility",
  "Accessbility :",
  "radio",
  proAccessabilityValidation,
  "",
  rAccessabilityOption
);

const proPropertyInteriors: FormFieldType = createFormConfig(
  "propertyinteriours",
  "Property Interiors :",
  "radio",
  proPropertyInteriorsValidation,
  "",
  rPropertyInteriorsOption
);

const proPropertyExteriors: FormFieldType = createFormConfig(
  "propertyexterios",
  "Property Exteriors :",
  "radio",
  proPropertyExteriorsValidation,
  "",
  rPropertryExteriosOption
);

const proWall: FormFieldType = createFormConfig(
  "wallunit",
  "Wall Unit",
  "checkbox",
  ClientGroup,
  ""
);
const proSofa: FormFieldType = createFormConfig(
  "sofaset",
  "Dofa Set",
  "checkbox",
  ClientGroup2,
  ""
);
const proCarpet: FormFieldType = createFormConfig(
  "carpet",
  "Carpet",
  "checkbox",
  ClientGroup2,
  ""
);
const proRefrigerator: FormFieldType = createFormConfig(
  "refrigerator",
  "Refrigerator",
  "checkbox",
  ClientGroup2,
  ""
);
const proDining: FormFieldType = createFormConfig(
  "diningtable",
  "Dining Table",
  "checkbox",
  ClientGroup2,
  ""
);
const proPhone: FormFieldType = createFormConfig(
  "phone",
  "Phone",
  "checkbox",
  ClientGroup2,
  ""
);
const proTv: FormFieldType = createFormConfig(
  "tv",
  "TV",
  "checkbox",
  ClientGroup2,
  ""
);
const proMusicSystem: FormFieldType = createFormConfig(
  "musicsystem",
  "Music System",
  "checkbox",
  ClientGroup2,
  ""
);
const proComputer: FormFieldType = createFormConfig(
  "computer",
  "Computer",
  "checkbox",
  ClientGroup2,
  ""
);
const proAc: FormFieldType = createFormConfig(
  "ac",
  "AC",
  "checkbox",
  ClientGroup2,
  ""
);

  
const proDateOfVisitValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const proDateOfvisit: FormFieldType = createFormConfig(
  "dateofvisit",
  "Date of Visit",
  "date",
  proDateOfVisitValidation,
  ""
);

const proTimeOfvisit: FormFieldType = createFormConfig(
  "timeofvisit",
  "Time of Visit",
  "time",
  proDateOfVisitValidation,
  ""
);


const proPhotograph: FormFieldType = createFormConfig(
  "photograph",
  "Photograph :",
  "radio",
  proPropertyInteriorsValidation,
  "",
  rPhotographOption
);


// ---------------------------KYC VERIFICATION // PanCard---------------------------

 
const panNameValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const panDateOfBirthValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

  
const panNumberValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;
  
const panAddressAsPerVisirMatchVelidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;

const panOriginalSeenValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const ppanVerifieValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const panVerificationResultValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const panOriginalSeenOption = [
  { value: "Y", label: "Yes" },
  {value: "N",label: "No",},
];

const panVerifiedOption = [
  { value: "Y", label: "Yes" },
  {value: "N",label: "No",},
];

const panVerificationResultOption = [
  { value: "Y", label: "Positive" },
  {value: "N",label: "Negative"},
];

const panNumber: FormFieldType = createFormConfig(
  "number",
  "Number",
  "text",
  panNumberValidation,
  "",
);

const panName: FormFieldType = createFormConfig(
  "name",
  "Name",
  "text",
  panNameValidation,
  "",
);

const panDateOfBirth: FormFieldType = createFormConfig(
  "dateofbirth",
  "Date of Birth",
  "date",
  panDateOfBirthValidation,
  ""
);

const panAddressAsPerVisirMatch: FormFieldType = createFormConfig(
  "addressaspervisirmatch",
  "Address as per visit match",
  "text",
  panAddressAsPerVisirMatchVelidation,
  ""
);

const panOriginalSeen: FormFieldType = createFormConfig(
  "originalseen ",
  "Original Seen :",
  "radio",
  panOriginalSeenValidation,
  "",
  panOriginalSeenOption
);

const panVerified: FormFieldType = createFormConfig(
  "verified ",
  "Verified :",
  "radio",
  ppanVerifieValidation,
  "",
  panVerifiedOption
);

const panVerificaionResult: FormFieldType = createFormConfig(
  "verificaionresult ",
  " Verificaion Result :",
  "radio",
  panVerificationResultValidation,
  "",
  panVerificationResultOption
);


// Aadhar Card  
const adharNameValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;
  
const adharDateOfBirthValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

  
const adharNumberValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;
  
const adharAddressAsPerVisirMatchVelidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
    value: /^\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
    message:
      "Invalid telephone number format. Please use a valid format (e.g., +1 (123) 456-7890).",
  },
} as ValidationType;

const adharOriginalSeenValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const padharVerifieValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const adharVerificationResultValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const adharOriginalSeenOption = [
  { value: "Y", label: "Yes" },
  {value: "N",label: "No",},
];

const adharVerifiedOption = [
  { value: "Y", label: "Yes" },
  {value: "N",label: "No",},
];

const adharVerificationResultOption = [
  { value: "Y", label: "Positive" },
  {value: "N",label: "Negative"},
];

const adharNumber: FormFieldType = createFormConfig(
  "number",
  "Number",
  "text",
  adharNumberValidation,
  "",
);

const adharName: FormFieldType = createFormConfig(
  "name",
  "Name",
  "text",
  adharNameValidation,
  "",
);

const adharDateOfBirth: FormFieldType = createFormConfig(
  "dateofbirth",
  "Date of Birth",
  "text",
  adharDateOfBirthValidation,
  ""
);

const adharAddressAsPerVisirMatch: FormFieldType = createFormConfig(
  "addressaspervisirmatch",
  "Address as per visit match",
  "text",
  adharAddressAsPerVisirMatchVelidation,
  ""
);

const adharOriginalSeen: FormFieldType = createFormConfig(
  "originalseen ",
  "Original Seen :",
  "radio",
  adharOriginalSeenValidation,
  "",
  adharOriginalSeenOption
);

const adharVerified: FormFieldType = createFormConfig(
  "verified ",
  "Verified :",
  "radio",
  padharVerifieValidation,
  "",
  adharVerifiedOption
);

const adharVerificaionResult: FormFieldType = createFormConfig(
  "verificaionresult ",
  " Verificaion Result :",
  "radio",
  adharVerificationResultValidation,
  "",
  adharVerificationResultOption
);






// PHOTOS/IMAGE


const residencePhotosValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
      value: /^[a-zA-Z0-9-_]+\.(jpg|png|pdf)$/, // Example: Accepts file names like "file123.jpg", "document.pdf", etc.
      message: "Invalid file name format. Please use a valid file name.",
    },
} as ValidationType;

const propertyPhotosValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
      value: /^[a-zA-Z0-9-_]+\.(jpg|png|pdf)$/, // Example: Accepts file names like "file123.jpg", "document.pdf", etc.
      message: "Invalid file name format. Please use a valid file name.",
    },
} as ValidationType;

const adharVerificationValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
      value: /^[a-zA-Z0-9-_]+\.(jpg|png|pdf)$/, // Example: Accepts file names like "file123.jpg", "document.pdf", etc.
      message: "Invalid file name format. Please use a valid file name.",
    },
} as ValidationType;

const otherPhotosValidation = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  pattern: {
      value: /^[a-zA-Z0-9-_]+\.(jpg|png|pdf)$/, // Example: Accepts file names like "file123.jpg", "document.pdf", etc.
      message: "Invalid file name format. Please use a valid file name.",
    },
} as ValidationType;


const residencePhotos: FormFieldType = createFormConfig(
"residencephotos",
"RESIDENCE PHOTOS",
"file",
residencePhotosValidation,
"No File choosen"
);

const propertyPhotos: FormFieldType = createFormConfig(
"porpertyphotos",
"PROPERTY PHOTOS",
"file",
propertyPhotosValidation,
"No File choosen"
);

const adharVerification: FormFieldType = createFormConfig(
"adharverification",
"AADHAR VERIFICATION",
"file",
adharVerificationValidation,
"No File choosen"
);

const otherPhotos: FormFieldType = createFormConfig(
"otherPhotos",
"OTHER PHOTOS",
"file",
otherPhotosValidation,
"No File choosen"
);




// ITR VERIFICATION


const nameValidation = {
    required: {
      value: true,
      message: "{label} field is rquired",
    },
    maxLength: {
      value: 20,
      message: "30 characters max",
    },
  } as ValidationType;
  
  const panValidation = {
      required: {
        value: true,
        message: "{label} field is rquired",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
    } as ValidationType;
  
  const formNoValidation = {
    required: {
      value: true,
      message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  } as ValidationType;
  const assessmentYearValidation = {
    required: {
      value: true,
      message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  } as ValidationType;
  
  
  const acknowledgementNoValidation = {
    required: {
      value: true,
      message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  } as ValidationType;
  const verifiedValidation = {
    required: {
      value: true,
      message: "{label} field is rquired",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  } as ValidationType;


const name: FormFieldType = createFormConfig(
    "name",
    "Name",
    "text",
    nameValidation,
    "",
  );
  
  const pan: FormFieldType = createFormConfig(
    "pan",
    "Pan",
    "text",
    panValidation,
    "",
  );
  
  const formNo: FormFieldType = createFormConfig(
    "fromno",
    "From No.",
    "text",
    formNoValidation,
    ""
  );
  
  const assessmentYear: FormFieldType = createFormConfig(
    "assessmentyear",
    "Assessment Year",
    "text",
    assessmentYearValidation,
    ""
  );
  const acknowledgementNo: FormFieldType = createFormConfig(
    "acknowledgementno",
    "Acknowledgement No",
    "text",
    acknowledgementNoValidation,
    ""
  );
  const verified: FormFieldType = createFormConfig(
    "verified",
    "Verified",
    "text",
    verifiedValidation,
    ""
  );

export const addIndividualReportFormFields = {
  
//   INQURY DETAILS
  preparedFor,
  yourRefNo,
  reportNo,
  inquiryDate,
  reportDate,

// Residence Verification 
rName,
rDateOfBirth,
rMobileNumber,
rPersonMet,
rRelationshipWithApplicantCoAplication,
rPersonMetMobileNo,
rRelationshipWithApplicant,
rEmail,
rMaritalStatus,
rEducation,
rGender,
rEducationProofProvided,
rNoofFamilyMembers,
rDependentMembers,
rAddressVisited,
rNearestLandMark,
rPropertyStatus,
rNameofTheOwner,
rPropertyRelationshipwithApplicant,
rTypeofUnit,
rConstructionType,
rRelationshipwithapplicant,
rArea,
rNoofFloors,
rFloorsLocation,
rDurationofStay,
rFrom,
rTo,
rDoorNamePlate,
rClassofLocality,
rAccessbility,
rPropertyInteriors,
rPropertyExteriors,
rWall,
rSofa,
rCarpet,
rRefrigerator,
rDining,
rPhone,
rTv,
rMusicSystem,
rComputer,
rAc,
rDateOfvisit,
rTimeOfvisit,
rPhotograph,

// Business Verification

bName,
bCompnayName,
bAddressVisited,
bNearestLandMark,
btypeOfCompany,
bPersonMet,
bDesignation,
bContactNo,
bNoofEmployees,
bCompanyEmail,
bWebsite,
bDateOfvisit,
bTimeOfvisit,
bEmployeesNo,
bEmpDesignation,
bNatureofEmployement,
bDateOfJoining,
bPresentSalary,
bSalaryModeofPayment,
bPersonContacted,
bEmp2Designation,
bContactNumber,
// Property Verification


proName,
proRelationshipWithApplicant,
proMobileNumber,
proPersonMet,
pPersonMetMobileNo,
proAddressVisited,
proNearestLandMark,
proPropertyStatus,
proNameofTheOwner,
proPropertyRelationshipwithApplicant,
proTypeofUnit,
proConstructionType,
proRelationshipwithapplicant,
proArea,
proNoofFloors,
proFloorsLocation,
proDurationofStay,
proFrom,
proTo,
proDoorNamePlate,
proClassofLocality,
proAccessbility,
proPropertyInteriors,
proPropertyExteriors,
proWall,
proSofa,
proCarpet,
proRefrigerator,
proDining,
proPhone,
proTv,
proMusicSystem,
proComputer,
proAc,
proDateOfvisit,
proTimeOfvisit,
proPhotograph,
// KYC VERIFICATION
  panNumber,
  panName,
  panDateOfBirth,
  panAddressAsPerVisirMatch,
  panOriginalSeen,
  panVerified,
  panVerificaionResult,

adharNumber,
adharName,
adharDateOfBirth,
adharAddressAsPerVisirMatch,
adharOriginalSeen,
adharVerified,
adharVerificaionResult,


// PHOTOS/IMAGE

residencePhotos,
propertyPhotos,
adharVerification,
otherPhotos,

// ITR VERIFICATION

name,
pan,
formNo,
assessmentYear,
acknowledgementNo,
verified,
};
