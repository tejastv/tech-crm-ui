import { FormFieldType, ValidationType, MapType, Options } from "@shared/index";
import { createFormConfig } from "@utils/index";

const FinYear = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;
const InvoiceNo = {
  required: {
    value: true,
    message: "{label} field is required",
  },
} as ValidationType;
const CommonTypeOptional = {
  required: {
    value: false,
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
const invoiceNo: FormFieldType = createFormConfig(
  "invoiceNoId",
  "Invoice No.",
  "input",
  InvoiceNo,
  "",
  {}
);
const client: FormFieldType = createFormConfig(
  "clientId",
  "Client",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const clientAddress: FormFieldType = createFormConfig(
  "clientAddressId",
  "Client Address",
  "textarea",
  CommonTypeOptional,
  "",
  {},
  true,
  true
);
const invoiceDate: FormFieldType = createFormConfig(
  "invoiceDateId",
  "Invoice Date",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const currency: FormFieldType = createFormConfig(
  "currencyId",
  "Currency",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const grsAmount: FormFieldType = createFormConfig(
  "grsAmountId",
  "Grs. Amount",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const invAmount: FormFieldType = createFormConfig(
  "invAmountId",
  "Inv Amount",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const cgst: FormFieldType = createFormConfig(
  "cgstId",
  "CGST",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const sgst: FormFieldType = createFormConfig(
  "sgstId",
  "SGST",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const igst: FormFieldType = createFormConfig(
  "igstId",
  "IGST",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const amountRecd: FormFieldType = createFormConfig(
  "amountRecdId",
  "Amount Recd.",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const tdsDed: FormFieldType = createFormConfig(
  "tdsDedId",
  "TDS Ded",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const expense: FormFieldType = createFormConfig(
  "expenseId",
  "Expense",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const otherCharges: FormFieldType = createFormConfig(
  "otherChargesId",
  "Other Charges",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const total: FormFieldType = createFormConfig(
  "totalId",
  "Total",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);
const due: FormFieldType = createFormConfig(
  "dueId",
  "Due",
  "input",
  CommonTypeOptional,
  "",
  {},
  true
);

export const receiptFormFields = {
  finYear,
  invoiceNo,
  client,
  clientAddress,
  invoiceDate,
  currency,
  grsAmount,
  invAmount,
  cgst,
  sgst,
  igst,
  amountRecd,
  tdsDed,
  expense,
  otherCharges,
  total,
  due,
};
