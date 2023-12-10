import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  Select,
  Button,
  InputWithText,
  ActionButtons,
  SingleCheckbox,
  TableType,
} from "@shared/index";
import {
  EnquiryPIFormType,
  EnquiryPIType,
  enqPiFormFields,
} from "@proforma/index";
import {
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  useSourceApiCallHook,
  useLocalSourceApiCallHook,
  useClientApiCallHook,
  useCompanyApiCallHook,
  useFinYearApiCallHook,
  CompanyType,
  CityType,
  CountryType,
  StateType,
  ClientType,
  FinYearType,
  SourceType,
  useActualBuyerApiCallHook,
  LocalSourceType,
  ActualBuyerType,
} from "@master/index";
import {
  cleanupObject,
  returnFormatedObjectElseEmptyArray,
  selectOptionsMaker,
} from "@utils/index";
import {
  EnqStatusType,
  ServiceType,
  useAddEnquiryApiCallHook,
} from "@transaction-search/index";
import { useLocation, useParams } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const EnqPiForm: React.FC = () => {
  // const { getServiceType } = useAddEnquiryApiCallHook();
  // const params = useParams();
  // const { getCity } = useCityApiCallHook();
  // const { getState } = useStateApiCallHook();
  // const { getCountry } = useCountryApiCallHook();
  // const { getSource } = useSourceApiCallHook();
  // const { getLocalSource } = useLocalSourceApiCallHook();
  // const { getClient } = useClientApiCallHook();
  // const { getFinYear } = useFinYearApiCallHook();
  // const [isCompanyChange, setIsCompanyChange] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<EnquiryPIFormType>();
  const { state: localEnqData } = useLocation();
  // const { getEnquiryData } = useEnquiriesApiCallHook();
  const {
    getEnqStatus,
    getRefNo,
    getServiceType,
    getPrice,
    addEnquiryMutation,
    updateEnquiryMutation,
  } = useAddEnquiryApiCallHook();
  const { getActualBuyer } = useActualBuyerApiCallHook();
  const params = useParams();
  const { mutateAsync: addEnquiry } = addEnquiryMutation();
  const { mutateAsync: updateEnquiry } = updateEnquiryMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getSource } = useSourceApiCallHook();
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { getClient, getClientData } = useClientApiCallHook();
  const { getCompany } = useCompanyApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();

  const [clientId, setClientId] = useState<number>(-2);
  const [cityOptions, setCityOptions] = useState<CityType[]>();
  const [stateOptions, setStateOptions] = useState<StateType[]>();
  const [countryOptions, setCountryOptions] = useState<CountryType[]>();
  const [clientOptions, setClientOptions] = useState<ClientType[]>();
  const [finYearOptions, setFinYearOptions] = useState<FinYearType[]>();
  const [sourceOptions, setSourceOptions] = useState<SourceType[]>();
  const [localSourceOptions, setLocalSourceOptions] =
    useState<LocalSourceType[]>();
  const [companyOptions, setCompanyOptions] = useState<CompanyType[]>();
  const [serviceOptions, setServiceOptions] = useState<ServiceType[]>();
  const [enqStatusOptions, setEnqStatusOptions] = useState<EnqStatusType[]>();
  const [actualBuyerOptions, setActualBuyerOptions] =
    useState<ActualBuyerType[]>();
  const [getPriceFlag, setGetPriceFlag] = useState<any>({
    flag: false,
    clientId: null,
    serviceTypeId: null,
    countryId: null,
  });

  // const [refNo, setRefNo] = useState<any>();
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Enquiry",
      heading: "Enquiry",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Action Button",
    },
  };

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    enqPiFormFields.cityField.config.options = options;
  }

  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    enqPiFormFields.stateField.config.options = options;
  }

  const { data: countryData } = getCountry();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(Object.values(Object.values(countryData)));
    }
  }, [countryData]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    enqPiFormFields.countryField.config.options = options;
  }

  const { data: clientData } = getClient();

  useEffect(() => {
    if (clientData) {
      setClientOptions(Object.values(clientData));
    }
  }, [clientData]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientId", "clientName");
    enqPiFormFields.clientField.config.options = options;
  }

  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(Object.values(fYearData));
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    enqPiFormFields.fYearField.config.options = options;
  }

  // const { data: actualBuyerData } = getActualBuyer();
  // useEffect(() => {
  //   if (actualBuyerData) {
  //     setActualBuyerOptions(Object.values(actualBuyerData));
  //   }
  // }, [actualBuyerData]);

  // if (actualBuyerOptions?.length) {
  //   let options = selectOptionsMaker(
  //     actualBuyerOptions,
  //     "partyId",
  //     "partyName"
  //   );
  //   enqPiFormFields.a.config.options = options;
  // }

  const { data: sourceData } = getSource();

  useEffect(() => {
    if (sourceData) {
      setSourceOptions(Object.values(sourceData));
    }
  }, [sourceData]);

  if (sourceOptions?.length) {
    let options = selectOptionsMaker(sourceOptions, "sourceId", "source");
    enqPiFormFields.sourceField.config.options = options;
  }

  // Local Source api call
  const { data: localSourceData } = getLocalSource();

  useEffect(() => {
    if (localSourceData) {
      setLocalSourceOptions(Object.values(localSourceData));
    }
  }, [localSourceData]);

  if (localSourceOptions?.length) {
    let options = selectOptionsMaker(
      localSourceOptions,
      "localSourceId",
      "localSource"
    );
    enqPiFormFields.localSourceField.config.options = options;
  }

  const { data: companyData } = getCompany();

  useEffect(() => {
    if (companyData) {
      setCompanyOptions(Object.values(companyData));
    }
  }, [companyData]);

  if (companyOptions?.length) {
    let options = selectOptionsMaker(
      companyOptions,
      "companyId",
      "companyName",
      true
    );
    enqPiFormFields.companyField.config.options = options;
  }

  const { data: serviceData } = getServiceType();

  useEffect(() => {
    if (serviceData) {
      setServiceOptions(Object.values(serviceData));
    }
  }, [serviceData]);

  if (serviceOptions?.length) {
    let options = selectOptionsMaker(
      serviceOptions,
      "serviceTypeId",
      "serviceType"
    );
    enqPiFormFields.serviceTypeField.config.options = options;
  }

  const { data: enqStatusData } = getEnqStatus();

  useEffect(() => {
    if (enqStatusData) {
      setEnqStatusOptions(Object.values(enqStatusData));
    }
  }, [enqStatusData]);

  if (enqStatusOptions?.length) {
    let options = selectOptionsMaker(
      enqStatusOptions,
      "enquiryStatusID",
      "enquiryStatus"
    );
    enqPiFormFields.enqStatusField.config.options = options;
  }

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      if (enqPiFormFields.givenAddressField.config.name == "givenAddress") {
        setValue(
          enqPiFormFields.givenAddressField.config.name,
          companyData.data.address
        );
      }
      if (enqPiFormFields.zipField.config.name == "zip") {
        setValue(enqPiFormFields.zipField.config.name, companyData.data.zip);
      }
      if (enqPiFormFields.telNoField.config.name == "phone") {
        setValue(
          enqPiFormFields.telNoField.config.name,
          companyData.data.phone
        );
      }
      if (enqPiFormFields.faxNoField.config.name == "fax") {
        setValue(enqPiFormFields.faxNoField.config.name, companyData.data.fax);
      }
      if (enqPiFormFields.emailField.config.name == "email") {
        setValue(
          enqPiFormFields.emailField.config.name,
          companyData.data.email
        );
      }
      if (enqPiFormFields.websiteField.config.name == "website") {
        setValue(
          enqPiFormFields.websiteField.config.name,
          companyData.data.website
        );
      }
      if (enqPiFormFields.contactField.config.name == "contactPerson") {
        setValue(
          enqPiFormFields.contactField.config.name,
          companyData.data.contactPerson
        );
      }
      if (enqPiFormFields.designationField.config.name == "designation") {
        setValue(
          enqPiFormFields.designationField.config.name,
          companyData.data.designation
        );
      }
      if (enqPiFormFields.cityField.config.name == "cityId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.cityId,
          companyData.data,
          "cityId",
          "cityName"
        );
        data.length > 0 &&
          setValue(enqPiFormFields.cityField.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (enqPiFormFields.stateField.config.name == "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.stateId,
          companyData.data,
          "stateId",
          "state"
        );
        data.length > 0 &&
          setValue(enqPiFormFields.stateField.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (enqPiFormFields.countryField.config.name == "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.countryId,
          companyData.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(enqPiFormFields.countryField.config.name, data[0], {
            shouldValidate: true,
          });
      }
    }
  };

  // const { data: enqData } = getEnquiryData(
  //   "" + params.id,
  //   !localEnqData && params.id !== undefined
  // );

  const getClientValue = (clientId: number) => {
    // if (clientId) {
    //   setClientId(clientId);
    //   if (enqPiFormFields.enqClientId.config.name === "clientIdDisable") {
    //     setValue(enqPiFormFields.enqClientId.config.name, clientId);
    //   }
    // }
  };

  const { data: paticularClientData, isFetching } = getClientData(
    "" + clientId,
    clientId != -2
  );

  const { data: refNo } = getRefNo(params.id === undefined);

  useEffect(() => {
    if (refNo) {
      // if (enqPiFormFields.enqRefNo.config.name == "refNo") {
      //   setValue(enqPiFormFields.enqRefNo.config.name, refNo);
      // }
    }
  }, [refNo]);

  const getPriceHandler = () => {
    let obj: any = {};
    if (enqPiFormFields.countryField.config.name === "countryId") {
      obj["countryId"] = getValues(enqPiFormFields.countryField.config.name);
      if (!obj.countryId) {
        return alert("Please select Country.");
      }
    }
    if (enqPiFormFields.clientField.config.name === "clientId") {
      obj["clientId"] = getValues(enqPiFormFields.clientField.config.name);
      if (!obj.clientId) {
        return alert("Please select Client.");
      }
    }
    if (enqPiFormFields.serviceTypeField.config.name === "serviceTypeId") {
      obj["serviceTypeId"] = getValues(
        enqPiFormFields.serviceTypeField.config.name
      );
      if (!obj.serviceTypeId) {
        return alert("Please select Service Type.");
      }
    }
    if (obj.countryId && obj.clientId && obj.serviceTypeId) {
      setGetPriceFlag({ flag: true, ...obj });
      // console.log("true", { flag: true, ...obj });
    } else {
      setGetPriceFlag({ flag: false });
      // console.log("false", { flag: false });
    }
  };

  const { data: priceData } = getPrice(
    {
      clientId: getPriceFlag.clientId?.value,
      countryId: getPriceFlag.countryId?.value,
    },
    getPriceFlag.flag
  );

  if (priceData !== undefined) {
    if (enqPiFormFields.priceField.config.name === "reportPrice") {
      setValue(
        enqPiFormFields.priceField.config.name,
        // @ts-ignore
        priceData[0][priceMapper[getPriceFlag.serviceTypeId?.value]]
      );
    }
  }

  const columns: ColumnDef<any>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
    {
      accessorFn: (row) => row.instruction,
      id: "instruction",
      cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
  ];

  const tableConfig: TableType<any> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData: paticularClientData ? [paticularClientData] : [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: false,
      pagination: {
        pageSize: 1,
        nextPreviousBtnShow: false,
        tableMetaDataShow: false,
      },
    },
  };

  useEffect(() => {
    if (params.id) {
      // if (enqData && Object.values(enqData).length > 0) {
      // reset(mapEnqDataToEnqForm(enqData));
      // }
    }
  }, [
    params.id,
    cityOptions,
    stateOptions,
    countryOptions,
    clientOptions,
    finYearOptions,
    sourceOptions,
    localSourceOptions,
    companyOptions,
    serviceOptions,
    enqStatusOptions,
    actualBuyerOptions,
    // enqData,
  ]);

  useEffect(() => {
    if (params.id) {
      if (localEnqData !== null) {
        console.log(localEnqData);
        // reset(mapEnqDataToEnqForm(localEnqData));
      }
    }
  }, [
    params.id,
    cityOptions,
    stateOptions,
    countryOptions,
    clientOptions,
    finYearOptions,
    sourceOptions,
    localSourceOptions,
    companyOptions,
    serviceOptions,
    enqStatusOptions,
    actualBuyerOptions,
    localEnqData,
  ]);

  // const mapEnqRequest = (enqFormData: EnquiryPIFormType) => {
  // let enqData: Partial<EnquiryPIType> = {
  //   recdDate: enqFormData.recdDate,
  //   // remarks: enqFormData.remarks,
  //   bankers: enqFormData.bankers,
  //   requestNo: enqFormData.requestNo,
  //   instruction: enqFormData.instruction,
  //   // reportFilename: enqFormData.reportFilename,
  //   reportPrice: enqFormData.reportPrice,
  //   // reportComission: enqFormData.reportComission,
  //   // typeofEnquiry: enqFormData.typeofEnquiry,
  //   // lineOfBusiness: enqFormData.lineOfBusiness,
  //   // noteForComission: enqFormData.noteForComission,
  //   //industryId: enqFormData,
  //   // disPer: enqFormData.disPer,
  //   // discount: enqFormData,
  //   adjustment: enqFormData.adjustment,
  //   // disType: enqFormData,
  //   //actualBuyerId: enqFormData,
  //   //siteStatusId: enqFormData,
  //   // bulkEnquiryId: enqFormData,
  //   // locked: enqFormData,
  //   // enqId: enqFormData,
  //   fyear: enqFormData.fyear,
  //   bookNo: enqFormData.bookNo,
  //   dueDate: enqFormData.dueDate,
  //   //serviceTypeId: enqFormData,
  //   //sourceId: enqFormData,
  //   //enqStatusId: enqFormData,
  //   notes: enqFormData.notes,
  //   pmtStatus: enqFormData.pmtStatus,
  //   creditAmount: enqFormData.creditAmount,
  //   reportDate: enqFormData.reportDate,
  //   givenAddress: enqFormData.givenAddress,
  //   // cityId: enqFormData,
  //   zip: enqFormData.zip,
  //   //stateId: enqFormData,
  //   //countryId: enqFormData,
  //   cmie: enqFormData.cmie,
  //   rockStatus: enqFormData.rockStatus,
  //   records: enqFormData.records,
  //   recFin: enqFormData.recFin,
  //   phone: enqFormData.phone,
  //   fax: enqFormData.fax,
  //   email: enqFormData.email,
  //   website: enqFormData.website,
  //   contactPerson: enqFormData.contactPerson,
  //   designation: enqFormData.designation,
  //   financialYear: enqFormData.financialYear,
  //   refNo: enqFormData.refNo,
  //   //companyID: enqFormData,
  //   clientRef: enqFormData.clientRefNo,
  //   // enteredBy: enqFormData,
  //   // enteredDate: enqFormData,
  //   // modifiedBy: enqFormData,
  //   // modifiedDate: enqFormData,
  //   // enquiryStatus: enqFormData.enqStatusId,
  //   // stateName: enqFormData.sta,
  //   // cityName: enqFormData.ci,
  //   // sourceName: enqFormData,
  //   // industryName: enqFormData,
  //   // partyName: enqFormData,
  //   // siteStatus: enqFormData,
  //   // groupName: enqFormData,
  //   // serviceTypeName: enqFormData,
  //   //executiveId: enqFormData,
  //   // executiveName: enqFormData,
  //   // countryName: enqFormData,
  //   // clientEmail: enqFormData,
  //   // printStatus: enqFormData,
  //   // clientPrice: enqFormData,
  //   // localSource: enqFormData,
  // };
  // if (companyData && enqFormData?.companyId) {
  //   enqData.companyId = enqFormData.companyId.value;
  // }
  // if (serviceData && enqFormData?.serviceTypeId) {
  //   enqData.serviceTypeId = enqFormData.serviceTypeId.value;
  // }
  // if (clientData && enqFormData?.clientId) {
  //   enqData.clientId = enqFormData.clientId.value;
  // }
  // if (sourceData && enqFormData?.sourceId) {
  //   enqData.sourceId = enqFormData.sourceId.value;
  // }
  // if (enqStatusData && enqFormData?.enqStatusId) {
  //   enqData.enqStatusId = enqFormData.enqStatusId.value;
  // }
  // if (cityData && enqFormData?.cityId) {
  //   enqData.cityId = enqFormData.cityId.value;
  // }
  // if (stateData && enqFormData?.stateId) {
  //   enqData.stateId = enqFormData.stateId.value;
  // }
  // if (countryData && enqFormData?.countryId) {
  //   enqData.countryId = enqFormData.countryId.value;
  // }
  // if (actualBuyerData && enqFormData?.actualBuyerId) {
  //   enqData.actualBuyerId = enqFormData.actualBuyerId.value;
  // }
  // if (enqFormData?.siteStatusId) {
  //   enqData.siteStatusId = enqFormData.siteStatusId.value;
  // }
  // if (fYearData && enqFormData?.fYear) {
  //   enqData.fyear = enqFormData.fYear.value;
  // }
  // if (enqFormData?.pmtStatus) {
  //   enqData.pmtStatus = enqFormData.pmtStatus.value;
  // }
  // if (enqFormData?.typeofEnquiry) {
  //   enqData.typeofEnquiry = enqFormData.typeofEnquiry.value;
  // }
  // if (localSourceData && enqFormData?.localSourceId) {
  //   enqData.localSourceId = enqFormData.localSourceId.value;
  // }
  // // industryId: formEnqData.industryId.value,
  // return cleanupObject(enqData);
  // };

  // const mapEnqDataToEnqForm = (enqData: EnquiryPIType) => {
  // let enqFormData: Partial<EnquiryPIFormType> = {
  //   refNo: string;
  // bookNo: string;
  // companyId: Options;
  // recdDate: string;
  // dueDate: string;
  // serviceTypeId: Options;
  // clientId: Options;
  // clientRefNo: string;
  // sourceId: Options;
  // enqStatusId: Options;
  // notes: string;
  // localSourceId: Options;
  // pmtStatus: string;
  // creditAmount: string;
  // reportDate: string;
  // givenAddress: string;
  // cityId: Options;
  // zip: string;
  // stateId: Options;
  // countryId: Options;
  // rockStatus: string;
  // records: string;
  // recFin: string;
  // phone: string;
  // fax: string;
  // email: string;
  // website: string;
  // contactPerson: string;
  // designation: string;
  // financialYear: string;
  // bankers: string;
  // requestNo: string;
  // instruction: string;
  // reportPrice: number;
  // adjustment: number;
  // cmie: string;
  // actualEnqId: number;
  // fyear: number;
  // };
  // if (companyData && enqData?.companyId) {
  //   let data = companyData[enqData.companyId];
  //   data &&
  //     (enqFormData.companyId = {
  //       label: data.companyName,
  //       value: data.companyId,
  //     });
  // }
  // if (clientData && enqData?.clientId) {
  //   let data = clientData[enqData.clientId];
  //   data &&
  //     ((enqFormData.clientId = {
  //       label: data.clientName,
  //       value: data.clientId,
  //     }),
  //     getClientValue(data.clientId));
  // }
  // if (serviceData && enqData?.serviceTypeId) {
  //   let data = serviceData[enqData.serviceTypeId];
  //   data &&
  //     (enqFormData.serviceTypeId = {
  //       label: data.serviceType,
  //       value: data.serviceTypeId,
  //     });
  // }
  // if (countryData && clientData?.clientId) {
  //   let data = clientData[enqData.clientId];
  //   data &&
  //     (enqFormData.clientId = {
  //       label: data.clientName,
  //       value: data.clientId,
  //     });
  // }
  // if (sourceData && enqData?.sourceId) {
  //   let data = sourceData[enqData.sourceId];
  //   data &&
  //     (enqFormData.sourceId = {
  //       label: data.source,
  //       value: data.sourceId,
  //     });
  // }
  // if (enqStatusData && enqData?.enqStatusId) {
  //   let data = enqStatusData[enqData.enqStatusId];
  //   data &&
  //     (enqFormData.enqStatusId = {
  //       label: data.enquiryStatus,
  //       value: data.enquiryStatusID,
  //     });
  // }
  // if (cityData && enqData?.cityId) {
  //   let data = cityData[enqData.cityId];
  //   data &&
  //     (enqFormData.cityId = {
  //       label: data.cityName,
  //       value: data.cityId,
  //     });
  // }
  // if (stateData && enqData?.stateId) {
  //   let data = stateData[enqData.stateId];
  //   data &&
  //     (enqFormData.stateId = {
  //       label: data.stateName,
  //       value: data.stateId,
  //     });
  // }
  // if (countryData && enqData?.countryId) {
  //   let data = countryData[enqData.countryId];
  //   data &&
  //     (enqFormData.countryId = {
  //       label: data.countryName,
  //       value: data.countryId,
  //     });
  // }
  // if (actualBuyerData && enqData?.actualBuyerId) {
  //   let data = actualBuyerData[enqData.actualBuyerId];
  //   data &&
  //     (enqFormData.actualBuyerId = {
  //       label: data.partyName,
  //       value: data.partyId,
  //     });
  // }
  // if (fYearData && enqData?.fyear) {
  //   let data = fYearData[enqData.fyear];
  //   data &&
  //     (enqFormData.fYear = {
  //       label: data.finYear,
  //       value: data.finYear,
  //     });
  // }
  // if (enqData?.pmtStatus) {
  //   let data = enqPiFormFields.enqPrintStatusData[enqData.pmtStatus];
  //   data &&
  //     (enqFormData.pmtStatus = {
  //       label: data.label,
  //       value: data.value,
  //     });
  // }
  // if (enqData?.typeofEnquiry) {
  //   let data = enqPiFormFields.enqTypeData[enqData.typeofEnquiry];
  //   data &&
  //     (enqFormData.typeofEnquiry = {
  //       label: data.label,
  //       value: data.value,
  //     });
  // }
  // if (localSourceData && enqData?.localSourceId) {
  //   let data = localSourceData[enqData.localSourceId];
  //   data &&
  //     (enqFormData.localSourceId = {
  //       label: data.localSource,
  //       value: data.localSourceId,
  //     });
  // }
  // return enqFormData;
  // };

  const onSubmit = handleSubmit((enquiryData): void => {
    // let reqObj: Partial<EnquiriesType> = mapEnqRequest(enquiryData);
    // console.log(reqObj);
    // if (params.id && reqObj) {
    //   updateEnquiry({ id: +params.id, ...reqObj });
    // } else {
    //   addEnquiry(reqObj);
    // }
  });

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
          className="p-t-20"
        >
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Select
                  config={enqPiFormFields.companyField.config}
                  onChangeHandler={companyOnChangeHandler}
                />
              </div>
              {/* <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.companyIdField.config} />
                </div> */}
              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.yearField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col-md-8 col-xs-12">
                    <Input config={enqPiFormFields.refNoField.config} />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <small className="enquirynote">
                      <InputWithText config={enqPiFormFields.refNote.config} />
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.givenAddressField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.countryField.config} />
                <Select config={enqPiFormFields.stateField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.cityField.config} />
                <Input config={enqPiFormFields.zipField.config} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.telNoField.config} />
                <Input config={enqPiFormFields.faxNoField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.emailField.config} />
                <Input config={enqPiFormFields.websiteField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.contactField.config} />
                <Input config={enqPiFormFields.designationField.config} />
              </div>
            </div>
            <hr className="mt-0" />
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.recdOnField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.dueOnField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.serviceTypeField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.printStatusField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.crAmountField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.enqStatusField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.notesForField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.instructionField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.cmieField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.rocStatusField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.recordsField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.recFinField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Select config={enqPiFormFields.sourceField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.priceField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.adjustField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col-md-10 col-xs-12">
                    <Select config={enqPiFormFields.localSourceField.config} />
                  </div>
                  <div className="col-md-2 pt-2 col-xs-12">
                    <SingleCheckbox config={enqPiFormFields.allField.config} />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.fYearField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={enqPiFormFields.bankField.config} />
              </div>
            </div>
            <hr className="m-0" />
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  {/* <Input config={enqPiFormFields.clientRefField.config} /> */}
                  <Select config={enqPiFormFields.clientField.config} />
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  <Input config={enqPiFormFields.requestNoField.config} />
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  {/* <Input config={enqPiFormFields.clientIdField.config} /> */}
                  <div className="col-md-14 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i>Get Price
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </BorderLayout>
        </form>
      </FormProvider>
      <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
        <ActionButtons />
      </BorderLayout>
    </Card>
  );
};
