import { FormFieldType, ValidationType, MapType, Options } from "@shared/index";
import { createFormConfig } from "@utils/index";

const FinYear = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;
const City = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;
const Client = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;
const FromDate = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;
const ToDate = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;

const finYearData: MapType<Options> = {
  "2023-2024": { value: "2023-2024", label: "2023-2024" },
  "2022-2023": { value: "2022-2023", label: "2022-2023" },
  "2021-2022": { value: "2021-2022", label: "2021-2022" },
  "2020-2021": { value: "2020-2021", label: "2020-2021" },
  "2019-2020": { value: "2019-2020", label: "2019-2020" },
  "2018-2019": { value: "2018-2019", label: "2018-2019" },
  "2017-2018": { value: "2017-2018", label: "2017-2018" },
  "2016-2017": { value: "2016-2017", label: "2016-2017" },
  "2015-2016": { value: "2015-2016", label: "2015-2016" },
  "2014-2015": { value: "2014-2015", label: "2014-2015" },
  "2013-2014": { value: "2013-2014", label: "2013-2014" },
  "2012-2013": { value: "2012-2013", label: "2012-2013" },
  "2011-2012": { value: "2011-2012", label: "2011-2012" },
  "2010-2011": { value: "2010-2011", label: "2010-2011" },
  "2009-2010": { value: "2009-2010", label: "2009-2010" },
  "2008-2009": { value: "2008-2009", label: "2008-2009" },
  "2007-2008": { value: "2007-2008", label: "2007-2008" },
  "2006-2007": { value: "2006-2007", label: "2006-2007" },
  "2005-2006": { value: "2005-2006", label: "2005-2006" },
};

const finYear: FormFieldType = createFormConfig(
  "finYearID",
  "F.Year",
  "select",
  FinYear,
  "",
  finYearData
);
const city: FormFieldType = createFormConfig(
  "cityId",
  "City",
  "select",
  City,
  "",
  {}
);
const client: FormFieldType = createFormConfig(
  "clientId",
  "Client",
  "select",
  Client,
  "",
  {}
);
const fromDate: FormFieldType = createFormConfig(
  "fromDateId",
  "From",
  "date",
  FromDate,
  ""
);
const toDate: FormFieldType = createFormConfig(
  "toDateId",
  "To",
  "date",
  ToDate,
  ""
);

export const receiptAdvanceFormFields = {
  finYear,
  city,
  client,
  fromDate,
  toDate,
};
