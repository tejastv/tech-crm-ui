// Company master child pages
export { AddCompany } from "./company-master/AddCompany";
export { CompanyMaster } from "./company-master/CompanyMaster";

// Client master child pages
export { Client } from "./client-master/client/Client";
export { AddClient } from "./client-master/client/AddClient";

// Client Segment master child pages
export { GroupMaster } from "./client-master/client-group/ClientGroup";
export { AddClientGroup } from "./client-master/client-group/AddClientGroup";
export { Segment } from "./client-master/segment/Segment";
export { AddSegment } from "./client-master/segment/AddSegment";


// Location
// City master child pages
export { AddCity } from "./location-master/city/AddCity";
export { City } from "./location-master/city/City";
// State master child pages
export { AddState } from "./location-master/state/AddState";
export { State } from "./location-master/state/State";

//Local Source
// LocalSource Child Page
export { AddSource } from "./local-source-master/local-source/AddSource";
export { LocalSource } from "./local-source-master/local-source/LocalSource";
// Price List Child Page
export { AddPrice } from "./local-source-master/price-list/AddPrice";
// Std Price List Child Page
export { AddStdPrice } from "./local-source-master/std-price-list/AddStdPrice";

// Country master child pages
export { AddCountry } from "./location-master/country/AddCountry";
export { Country } from "./location-master/country/Country";
// Continent master child pages
export { AddContinent } from "./location-master/continent/AddContinent";
export { Continent } from "./location-master/continent/Continent";

//BankMasterDeposit master child pages
export { AddBankMasterDeposit } from "./information-master/bank-master-deposit/AddBankDeposit";
export { BankMasterDeposit } from "./information-master/bank-master-deposit/BankDeposit";

export { AddPaymentMode } from "./information-master/payment-mode/AddPaymentMode";
export { PaymentMode } from "./information-master/payment-mode/PaymentMode";

export { AddCurrency } from "./information-master/currency/AddCurrency";
export { Currency } from "./information-master/currency/Currency";
export { AddInfoSource } from "./information-master/source/AddSource";
export { Source } from "./information-master/source/Source";
export { AddSupplier } from "./information-master/supplier-master/AddSupplier";
export { Supplier } from "./information-master/supplier-master/Supplier";
export { AddBankMasterDrawn } from "./information-master/bank-master-drawn-on/AddBankDrawn";
export { BankMasterDrawn } from "./information-master/bank-master-drawn-on/BankDrawn";

// Information Master 2
export { AddIndustry } from "./information-master-2/industry/AddIndustry";
export { Industry } from "./information-master-2/industry/Industry";

export { AddCallType } from "./information-master-2/call-type/AddCalltype";
export { CallType } from "./information-master-2/call-type/CallType";

export { AddPurpose } from "./information-master-2/purpose-master/AddPurpose";
export { Purpose } from "./information-master-2/purpose-master/Purpose";

export { AddCreditDays } from "./information-master-2/credit-days/AddCreditDays";
export { CreditDays } from "./information-master-2/credit-days/CreditDays";

export { AddSiteStatus} from "./information-master-2/site-status/AddSiteStatus";
export { SiteStatus } from "./information-master-2/site-status/SiteStatus";


//Form Fields
export * from "./company-master/form-fields/add-company";
export * from "./location-master/form-fields/add-state";
export * from "./location-master/form-fields/add-city";

export * from "./client-master/form-fields/add-client";
export * from "./client-master/form-fields/add-clientGroup";
export * from "./client-master/form-fields/add-segment";



export * from "./local-source-master/form-fields/add-localSource"
export * from "./local-source-master/form-fields/add-price"
export * from "./local-source-master/form-fields/add-std-price"
export * from "./client-master/form-fields/add-segment"
// export * from "./local-source-master/form-fields/add-price";
// export * from "./local-source-master/form-fields/add-std-price";


export * from "./location-master/form-fields/add-country";
export * from "./location-master/form-fields/add-continent";


export * from "./information-master/form-fields/add-bankdeposit";
export * from "./information-master/form-fields/add-paymentmode";
export * from "./information-master/form-fields/add-source";
export * from "./information-master/form-fields/add-bankdrawnon";
export * from "./information-master/form-fields/add-supplier";
export * from "./information-master/form-fields/add-currency";

export * from "./information-master-2/form-fields/add-industry";
export * from "./information-master-2/form-fields/add-calltype";
export * from "./information-master-2/form-fields/add-purpose";
export * from "./information-master-2/form-fields/add-creditdays";
export * from "./information-master-2/form-fields/add-sitestatus";



// Models
export * from "./features/types/client-type";
export * from "./features/types/city-type";
// Service
