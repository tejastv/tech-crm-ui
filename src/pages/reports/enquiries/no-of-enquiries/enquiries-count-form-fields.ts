import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

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
const Country = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
} as ValidationType;
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

const monthOptions = {
  all: { value: "all", label: "All" },
  apr: { value: "apr", label: "Apr" },
  may: { value: "may", label: "May" },
  jun: { value: "jun", label: "Jun" },
  jul: { value: "jul", label: "Jul" },
  aug: { value: "aug", label: "Aug" },
  sep: { value: "sep", label: "Sep" },
  oct: { value: "oct", label: "Oct" },
  nov: { value: "nov", label: "Nov" },
  dec: { value: "dec", label: "Dec" },
  jan: { value: "jan", label: "Jan" },
  feb: { value: "feb", label: "Feb" },
  mar: { value: "mar", label: "Mar" },
};
const yearOptions = {
  2023: { value: "2023", label: "2023" },
  2022: { value: "2022", label: "2022" },
  2021: { value: "2021", label: "2021" },
  2020: { value: "2020", label: "2020" },
  2019: { value: "2019", label: "2019" },
  2018: { value: "2018", label: "2018" },
  2017: { value: "2017", label: "2017" },
  2016: { value: "2016", label: "2016" },
  2015: { value: "2015", label: "2015" },
  2014: { value: "2014", label: "2014" },
  2013: { value: "2013", label: "2013" },
  2012: { value: "2012", label: "2012" },
  2011: { value: "2011", label: "2011" },
  2010: { value: "2010", label: "2010" },
  2009: { value: "2009", label: "2009" },
};

const month: FormFieldType = createFormConfig(
  "monthID",
  "Month",
  "select",
  Month,
  "",
  monthOptions
);
const year: FormFieldType = createFormConfig(
  "yearID",
  "Year",
  "select",
  Year,
  "",
  yearOptions
);
const country: FormFieldType = createFormConfig(
  "countryID",
  "Country",
  "select",
  Country,
  "",
  {}
  // [{ value: "all", label: "All" }]
);
const city: FormFieldType = createFormConfig(
  "cityID",
  "City",
  "select",
  City,
  "",
  {}
  // [{ value: "all", label: "All" }]
);
const client: FormFieldType = createFormConfig(
  "clientID",
  "Client",
  "select",
  Client,
  "",
  {}
);

export const enquiriesCountFormFields = {
  month,
  year,
  country,
  city,
  client,
};
