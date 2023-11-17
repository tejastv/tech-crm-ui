import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const City = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const Client = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const Month = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const Year = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
const option = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;

const monthOptions = [
  { value: "apr", label: "Apr" },
  { value: "may", label: "May" },
  { value: "jun", label: "Jun" },
  { value: "jul", label: "Jul" },
  { value: "aug", label: "Aug" },
  { value: "sep", label: "Sep" },
  { value: "oct", label: "Oct" },
  { value: "nov", label: "Nov" },
  { value: "dec", label: "Dec" },
  { value: "jan", label: "Jan" },
  { value: "feb", label: "Feb" },
  { value: "mar", label: "Mar" },
];

const yearOptions = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
  { value: "2010", label: "2010" },
  { value: "2009", label: "2009" },
];

const city: FormFieldType = createFormConfig(
  "cityID",
  "City",
  "select",
  City,
  "",
  [{ value: "all", label: "All" }]
);
const client: FormFieldType = createFormConfig(
  "clientID",
  "Client",
  "select",
  Client,
  "",
  [{ value: "all", label: "All" }]
);

const month: FormFieldType = createFormConfig(
  "monthID",
  "Month",
  "checkbox", // Change "select" to "checkbox"
  Month,
  "",
  monthOptions
);

const selectAll: FormFieldType = createFormConfig(
  "selectAll",
  "Select All",
  "checkbox",
  Month,
  ""
);

const year: FormFieldType = createFormConfig(
  "yearID",
  "Year",
  "checkbox", // Change "select" to "checkbox"
  Year,
  "",
  yearOptions
);

export const enquiriesCountGraphViewFormFields = {
  city,
  client,
  year,
  month,
  selectAll,
  monthOptions,
  yearOptions,
};
