import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  InputWithText,
  ActionButtons,
  Table,
  TableType,
  NewSelect,
  NewInput,
  NewDatePicker,
} from "@shared/index";
import {
  EnqueryFormType,
  EnqStatusType,
  ServiceType,
  enquiryFormFields,
  useAddEnquiryApiCallHook,
  useEnquiriesApiCallHook,
  EnquiriesType,
} from "@transaction-search/index";
import { Link, useLocation, useParams } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import {
  ActualBuyerType,
  CityType,
  ClientType,
  CompanyType,
  CountryType,
  FinYearType,
  LocalSourceType,
  SourceType,
  StateType,
  useActualBuyerApiCallHook,
  useCityApiCallHook,
  useClientApiCallHook,
  useCompanyApiCallHook,
  useCountryApiCallHook,
  useFinYearApiCallHook,
  useLocalSourceApiCallHook,
  useSourceApiCallHook,
  useStateApiCallHook,
} from "@pages/master";
import {
  cleanupObject,
  returnFormatedObjectElseEmptyArray,
  selectOptionsMaker,
} from "@utils/index";
import { usePagination } from "@hooks/usePagination";

const priceMapper = {
  1: "price", // Normal
  2: "priceHighDel", // High
  3: "priceOnline", // Online
  4: "priceSuperFlash", // Superflash
  6: "priceSME", // SME
};

export const EnquiryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<EnqueryFormType>();
  const { state: localEnqData } = useLocation();
  const { getEnquiryData } = useEnquiriesApiCallHook();
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
  const [searchStringCompany, setSearchStringCompany] = useState<string>("");
  const [searchStringClient, setSearchStringClient] = useState<string>("");

  // const countryRef = useRef(null);
  // const clientRef = useRef(null);
  // const serviceTypeRef = useRef(null);

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

  useEffect(() => {
    // enquiryFormFields.enqtype.config.setData = "false";
    if (enquiryFormFields.enqtype.config.options) {
      const defaultenqTypeOption =
        enquiryFormFields.enqtype.config.options.find(
          (option) => option.label === "NEW"
        );

      if (defaultenqTypeOption) {
        enquiryFormFields.enqtype.config.setData = defaultenqTypeOption;
      }
    }
  }, []);

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    enquiryFormFields.enqCity.config.options = options;
  }

  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    enquiryFormFields.enqState.config.options = options;
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
    enquiryFormFields.enqCountry.config.options = options;
  }
  const { limit, offset } = usePagination();

  const { data: clientData } = getClient(
    {
      limit,
      offset,
      searchString: searchStringClient,
    },
    searchStringClient.length === 3
  );

  useEffect(() => {
    if (clientData?.data) {
      setClientOptions(Object.values(clientData.data));
    }
  }, [clientData?.data]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientId", "clientName");
    enquiryFormFields.enqClient.config.options = options;
  }

  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(Object.values(fYearData));
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    enquiryFormFields.enqFinYear.config.options = options;
  }

  const { data: actualBuyerData } = getActualBuyer();
  useEffect(() => {
    if (actualBuyerData) {
      setActualBuyerOptions(Object.values(actualBuyerData));
    }
  }, [actualBuyerData]);

  if (actualBuyerOptions?.length) {
    let options = selectOptionsMaker(
      actualBuyerOptions,
      "partyId",
      "partyName"
    );
    enquiryFormFields.enqActualBuyer.config.options = options;
  }

  const { data: sourceData } = getSource();

  useEffect(() => {
    if (sourceData) {
      setSourceOptions(Object.values(sourceData));
    }
  }, [sourceData]);

  if (sourceOptions?.length) {
    let options = selectOptionsMaker(sourceOptions, "sourceId", "source");
    enquiryFormFields.enqSource.config.options = options;
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
    enquiryFormFields.enqLocalSource.config.options = options;
  }

  const { data: companyData } = getCompany(
    {
      limit,
      offset,
      searchString: searchStringCompany,
    },
    searchStringCompany.length === 3
  );

  useEffect(() => {
    if (companyData?.data) {
      setCompanyOptions(Object.values(companyData.data));
    }
  }, [companyData?.data]);

  if (companyOptions?.length) {
    let options = selectOptionsMaker(
      companyOptions,
      "companyId",
      "companyName",
      true
    );
    enquiryFormFields.enqCompanyName.config.options = options;
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
    enquiryFormFields.enqServiceType.config.options = options;
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
    enquiryFormFields.enqStatus.config.options = options;
  }

  const companyOnInputChangeHandler = (companyInputValue: any) => {
    if (companyInputValue.length === 3) {
      setSearchStringCompany(companyInputValue);
    }
    if (companyInputValue.length === 0) {
      setCompanyOptions([]);
      enquiryFormFields.enqCompanyName.config.options = [];
    }
  };

  const clientOnInputChangeHandler = (clientInputValue: any) => {
    if (clientInputValue.length === 3) {
      setSearchStringClient(clientInputValue);
    }
    if (clientInputValue.length === 0) {
      setClientOptions([]);
      enquiryFormFields.enqClient.config.options = [];
    }
  };

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      if (enquiryFormFields.enqGivenAddress.config.name == "givenAddress") {
        setValue(
          enquiryFormFields.enqGivenAddress.config.name,
          companyData.data.address
        );
      }
      if (enquiryFormFields.enqZip.config.name == "zip") {
        setValue(enquiryFormFields.enqZip.config.name, companyData.data.zip);
      }
      if (enquiryFormFields.enqTelePhone.config.name == "phone") {
        setValue(
          enquiryFormFields.enqTelePhone.config.name,
          companyData.data.phone
        );
      }
      if (enquiryFormFields.enqFax.config.name == "fax") {
        setValue(enquiryFormFields.enqFax.config.name, companyData.data.fax);
      }
      if (enquiryFormFields.enqEmail.config.name == "email") {
        setValue(
          enquiryFormFields.enqEmail.config.name,
          companyData.data.email
        );
      }
      if (enquiryFormFields.enqWebsite.config.name == "website") {
        setValue(
          enquiryFormFields.enqWebsite.config.name,
          companyData.data.website
        );
      }
      if (enquiryFormFields.enqContact.config.name == "contactPerson") {
        setValue(
          enquiryFormFields.enqContact.config.name,
          companyData.data.contactPerson
        );
      }
      if (enquiryFormFields.enqDesignation.config.name == "designation") {
        setValue(
          enquiryFormFields.enqDesignation.config.name,
          companyData.data.designation
        );
      }
      if (enquiryFormFields.enqCity.config.name == "cityId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.cityId,
          companyData.data,
          "cityId",
          "cityName"
        );
        data.length > 0 &&
          setValue(enquiryFormFields.enqCity.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (enquiryFormFields.enqState.config.name == "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.stateId,
          companyData.data,
          "stateId",
          "state"
        );
        data.length > 0 &&
          setValue(enquiryFormFields.enqState.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (enquiryFormFields.enqCountry.config.name == "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.countryId,
          companyData.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(enquiryFormFields.enqCountry.config.name, data[0], {
            shouldValidate: true,
          });
      }
    }
  };

  const { data: enqData } = getEnquiryData(
    "" + params.id,
    !localEnqData && params.id !== undefined
  );

  const getClientValue = (clientId: number) => {
    if (clientId) {
      setClientId(clientId);
      if (enquiryFormFields.enqClientId.config.name === "clientIdDisable") {
        setValue(enquiryFormFields.enqClientId.config.name, clientId);
      }
    }
  };

  const { data: paticularClientData, isFetching } = getClientData(
    "" + clientId,
    clientId != -2
  );

  const { data: refNo } = getRefNo(params.id === undefined);

  useEffect(() => {
    if (refNo) {
      if (enquiryFormFields.enqRefNo.config.name == "refNo") {
        setValue(enquiryFormFields.enqRefNo.config.name, refNo);
      }
    }
  }, [refNo]);

  const getPriceHandler = () => {
    let obj: any = {};
    if (enquiryFormFields.enqCountry.config.name === "countryId") {
      obj["countryId"] = getValues(enquiryFormFields.enqCountry.config.name);
      if (!obj.countryId) {
        return alert("Please select Country.");
      }
    }
    if (enquiryFormFields.enqClient.config.name === "clientId") {
      obj["clientId"] = getValues(enquiryFormFields.enqClient.config.name);
      if (!obj.clientId) {
        return alert("Please select Client.");
      }
    }
    if (enquiryFormFields.enqServiceType.config.name === "serviceTypeId") {
      obj["serviceTypeId"] = getValues(
        enquiryFormFields.enqServiceType.config.name
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
    if (enquiryFormFields.enqPrice.config.name === "reportPrice") {
      setValue(
        enquiryFormFields.enqPrice.config.name,
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
      if (enqData && Object.values(enqData).length > 0) {
        reset(mapEnqDataToEnqForm(enqData));
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
    enqData,
  ]);

  useEffect(() => {
    if (params.id) {
      if (localEnqData !== null) {
        console.log(localEnqData);
        reset(mapEnqDataToEnqForm(localEnqData));
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

  const mapEnqRequest = (enqFormData: EnqueryFormType) => {
    let enqData: Partial<EnquiriesType> = {
      refNo: enqFormData.refNo,
      bookNo: enqFormData.bookNo,
      recdDate: enqFormData.recdDate,
      dueDate: enqFormData.dueDate,
      clientRefNo: enqFormData.clientRefNo,
      notes: enqFormData.notes,
      creditAmount: enqFormData.creditAmount,
      reportDate: enqFormData.reportDate,
      givenAddress: enqFormData.givenAddress,
      zip: enqFormData.zip,
      rockStatus: enqFormData.rockStatus,
      records: enqFormData.records,
      recFin: enqFormData.recFin,
      phone: enqFormData.phone,
      fax: enqFormData.fax,
      website: enqFormData.website,
      contactPerson: enqFormData.contactPerson,
      designation: enqFormData.designation,
      financialYear: enqFormData.financialYear,
      bankers: enqFormData.bankers,
      requestNo: enqFormData.requestNo,
      instruction: enqFormData.instruction,
      reportFilename: enqFormData.reportFilename,
      reportPrice: enqFormData.reportPrice,
      reportComission: enqFormData.reportComission,
      lineOfBusiness: enqFormData.lineOfBusiness,
      noteForComission: enqFormData.noteForComission,
      disPer: enqFormData.disPer,
      discount: enqFormData.discount,
      adjustment: enqFormData.adjustment,
      disType: enqFormData.disType,
      bulk_enquiry_id: enqFormData.bulk_enquiry_id
        ? enqFormData.bulk_enquiry_id
        : 0,
      locked: enqFormData.locked,
      givenName: enqFormData.givenName,
      cmie: enqFormData.cmie,
      email: enqFormData.email,
    };
    if (companyData && enqFormData?.companyId) {
      enqData.companyId = enqFormData.companyId.value;
    }
    if (serviceData && enqFormData?.serviceTypeId) {
      enqData.serviceTypeId = enqFormData.serviceTypeId.value;
    }
    if (clientData && enqFormData?.clientId) {
      enqData.clientId = enqFormData.clientId.value;
    }
    if (sourceData && enqFormData?.sourceId) {
      enqData.sourceId = enqFormData.sourceId.value;
    }
    if (enqStatusData && enqFormData?.enqStatusId) {
      enqData.enqStatusId = enqFormData.enqStatusId.value;
    }
    if (cityData && enqFormData?.cityId) {
      enqData.cityId = enqFormData.cityId.value;
    }
    if (stateData && enqFormData?.stateId) {
      enqData.stateId = enqFormData.stateId.value;
    }
    if (countryData && enqFormData?.countryId) {
      enqData.countryId = enqFormData.countryId.value;
    }
    if (actualBuyerData && enqFormData?.actualBuyerId) {
      enqData.actualBuyerId = enqFormData.actualBuyerId.value;
    }
    if (enqFormData?.siteStatusId) {
      enqData.siteStatusId = enqFormData.siteStatusId.value;
    }
    if (fYearData && enqFormData?.fYear) {
      enqData.fyear = enqFormData.fYear.value;
    }
    if (enqFormData?.pmtStatus) {
      enqData.pmtStatus = enqFormData.pmtStatus.value;
    }
    if (enqFormData?.typeofEnquiry) {
      enqData.typeofEnquiry = enqFormData.typeofEnquiry.value;
    }
    if (localSourceData && enqFormData?.localSourceId) {
      enqData.localSourceId = enqFormData.localSourceId.value;
    }
    // industryId: formEnqData.industryId.value,
    return cleanupObject(enqData);
  };

  const mapEnqDataToEnqForm = (enqData: EnquiriesType) => {
    let enqFormData: Partial<EnqueryFormType> = {
      refNo: enqData.refNo,
      bookNo: enqData.bookNo,
      recdDate: enqData.recdDate && enqData.recdDate.split("T")[0],
      dueDate: enqData.dueDate && enqData.dueDate.split("T")[0],
      clientRefNo: enqData.clientRefNo,
      notes: enqData.notes,
      creditAmount: enqData.creditAmount,
      reportDate: enqData.reportDate,
      givenAddress: enqData.givenAddress,
      zip: enqData.zip,
      rockStatus: enqData.rockStatus,
      records: enqData.records,
      recFin: enqData.recFin,
      phone: enqData.phone,
      fax: enqData.fax,
      website: enqData.website,
      contactPerson: enqData.contactPerson,
      designation: enqData.designation,
      financialYear: enqData.financialYear,
      bankers: enqData.bankers,
      requestNo: enqData.requestNo,
      instruction: enqData.instruction,
      reportFilename: enqData.reportFilename,
      reportPrice: enqData.reportPrice,
      reportComission: enqData.reportComission,
      lineOfBusiness: enqData.lineOfBusiness,
      noteForComission: enqData.noteForComission,
      disPer: enqData.disPer,
      discount: enqData.discount,
      adjustment: enqData.adjustment,
      disType: enqData.disType,
      bulk_enquiry_id: enqData.bulk_enquiry_id ? enqData.bulk_enquiry_id : 0,
      locked: enqData.locked,
      givenName: enqData.givenName,
      cmie: enqData.cmie,
      email: enqData.email,
    };
    if (companyData && enqData?.companyId) {
      let data = companyData.data[enqData.companyId];
      data &&
        (enqFormData.companyId = {
          label: data.companyName,
          value: data.companyId,
        });
    }
    if (clientData && enqData?.clientId) {
      let data = clientData.data[enqData.clientId];
      data &&
        ((enqFormData.clientId = {
          label: data.clientName,
          value: data.clientId,
        }),
        getClientValue(data.clientId));
    }
    if (serviceData && enqData?.serviceTypeId) {
      let data = serviceData[enqData.serviceTypeId];
      data &&
        (enqFormData.serviceTypeId = {
          label: data.serviceType,
          value: data.serviceTypeId,
        });
    }
    if (countryData && clientData?.data?.clientId) {
      let data = clientData.data[enqData.clientId];
      data &&
        (enqFormData.clientId = {
          label: data.clientName,
          value: data.clientId,
        });
    }
    if (sourceData && enqData?.sourceId) {
      let data = sourceData[enqData.sourceId];
      data &&
        (enqFormData.sourceId = {
          label: data.source,
          value: data.sourceId,
        });
    }
    if (enqStatusData && enqData?.enqStatusId) {
      let data = enqStatusData[enqData.enqStatusId];
      data &&
        (enqFormData.enqStatusId = {
          label: data.enquiryStatus,
          value: data.enquiryStatusID,
        });
    }
    if (cityData && enqData?.cityId) {
      let data = cityData[enqData.cityId];
      data &&
        (enqFormData.cityId = {
          label: data.cityName,
          value: data.cityId,
        });
    }
    if (stateData && enqData?.stateId) {
      let data = stateData[enqData.stateId];
      data &&
        (enqFormData.stateId = {
          label: data.stateName,
          value: data.stateId,
        });
    }
    if (countryData && enqData?.countryId) {
      let data = countryData[enqData.countryId];
      data &&
        (enqFormData.countryId = {
          label: data.countryName,
          value: data.countryId,
        });
    }
    if (actualBuyerData && enqData?.actualBuyerId) {
      let data = actualBuyerData[enqData.actualBuyerId];
      data &&
        (enqFormData.actualBuyerId = {
          label: data.partyName,
          value: data.partyId,
        });
    }
    if (fYearData && enqData?.fyear) {
      let data = fYearData[enqData.fyear];
      data &&
        (enqFormData.fYear = {
          label: data.finYear,
          value: data.finYear,
        });
    }
    if (enqData?.pmtStatus) {
      let data = enquiryFormFields.enqPrintStatusData[enqData.pmtStatus];
      data &&
        (enqFormData.pmtStatus = {
          label: data.label,
          value: data.value,
        });
    }
    if (enqData?.typeofEnquiry) {
      let data = enquiryFormFields.enqTypeData[enqData.typeofEnquiry];
      data &&
        (enqFormData.typeofEnquiry = {
          label: data.label,
          value: data.value,
        });
    }
    if (localSourceData && enqData?.localSourceId) {
      let data = localSourceData[enqData.localSourceId];
      data &&
        (enqFormData.localSourceId = {
          label: data.localSource,
          value: data.localSourceId,
        });
    }
    return enqFormData;
  };

  const onSubmit = handleSubmit((enquiryData): void => {
    let reqObj: Partial<EnquiriesType> = mapEnqRequest(enquiryData);
    console.log(reqObj);
    if (params.id && reqObj) {
      updateEnquiry({ id: +params.id, ...reqObj });
    } else {
      addEnquiry(reqObj);
    }
  });

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqCompanyName}
                onChange={companyOnChangeHandler}
                onInputChange={companyOnInputChangeHandler}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqFinYear}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqRefNo}
              />
              <small className="enquirynote text-right">
                <InputWithText config={enquiryFormFields.enqRefNote.config} />
              </small>
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqSource}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqGivenAddress}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqCity}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqState}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqCountry}
                onChange={() => setValue("reportPrice", undefined)}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqZip}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqTelePhone}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqFax}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqEmail}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqWebsite}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqContact}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqDesignation}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqClientRef}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqClient}
                onChange={(e) => {
                  setValue("reportPrice", undefined);
                  getClientValue(e.value);
                }}
                onInputChange={clientOnInputChangeHandler}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqRequestNo}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqClientId}
              />
              <Link to={""} className="card-title">
                <InputWithText
                  config={enquiryFormFields.enqActualBuyerAddNote.config}
                />
              </Link>
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqActualBuyer}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqServiceType}
              />
              <div className="row mb-2 justify-content-end">
                <div className="col-md-4 col-xs-12 text-right">
                  <Button
                    onClick={getPriceHandler}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    <i className="far fa-save"></i> Get Price
                  </Button>
                </div>
              </div>
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqPrice}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqGivenName}
              />
              <NewDatePicker
                errors={errors}
                register={register}
                config={enquiryFormFields.enqRecdon}
              />
              <NewDatePicker
                errors={errors}
                register={register}
                config={enquiryFormFields.enqDueOn}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqtype}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqLocalSource}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqPrintStatus}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqStatus}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={enquiryFormFields.enqSvisit}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqNotesForEnquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqNotesForAdj}
              />
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqInstruction}
              />
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="row">
                {/* <div className="col-md-8 col-xs-12 text-right">
                      <Link to={""} className="card-title">
                        <InputWithText
                          config={
                            enquiryFormFields.enqActualBuyerAddNote
                          }
                        />
                      </Link>
                    </div> */}
                {/* <div className="col-md-4 col-xs-12 text-right">
                      <i className="fa fa-refresh"></i>
                    </div> */}
              </div>
              {/* <NewInput errors={errors}
                  register={register} config={enquiryFormFields.enqPrice} /> */}
            </div>
            <div className="col-md-6 col-xs-12">
              {!isFetching && <Table config={tableConfig.config}></Table>}
            </div>
            <div className="card-title">
              <InputWithText
                config={enquiryFormFields.enqDiscountCommissionNote.config}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqDis}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqDiscount}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqAdjust}
              />
              <div className="row">
                <div className="col-md-12 col-xs-12 text-right">
                  <Button type="button" className="btn btn-danger btn-sm">
                    <i className="far fa-save"></i> View Adjust
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={enquiryFormFields.enqReportComm}
              />
            </div>
            <div className="card-title col-12">
              <InputWithText
                config={enquiryFormFields.enqDiscountTypeNote.config}
              />
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
