import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  NewInput,
  NewSelect,
  Button,
  InputWithText,
  ActionButtons,
  NewDatePicker,
  TableType,
  Table,
  Loader,
} from "@shared/index";
import {
  EnqPiType,
  EnquiryPiFormType,
  enqPiFormFields,
  useProformaApiCallHook,
} from "@proforma/index";
import {
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  // useSourceApiCallHook,
  // useLocalSourceApiCallHook,
  // useClientApiCallHook,
  // useCompanyApiCallHook,
  useFinYearApiCallHook,
  CompanyType,
  CityType,
  CountryType,
  StateType,
  ClientType,
  useActualBuyerApiCallHook,
  useSourceApiCallHook,
  useLocalSourceApiCallHook,
  useClientApiCallHook,
  useCompanyApiCallHook,
  FinYearType,
  SourceType,
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
import { usePagination } from "@hooks/usePagination";
import { ColumnDef } from "@tanstack/react-table";
import _ from "lodash";

const priceMapper = {
  1: "price", // Normal
  2: "priceHighDel", // High
  3: "priceOnline", // Online
  4: "priceSuperFlash", // Superflash
  6: "priceSME", // SME
};

export const EnqPiForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<EnquiryPiFormType>();
  const { state: localEnqData } = useLocation();
  // const { getEnquiryData } = useEnquiriesApiCallHook();
  const { getEnqStatus, getRefNo, getServiceType, getPrice } =
    useAddEnquiryApiCallHook();
  const { addEnquiryPiMutation, getEnquiryPiData, updateEnquiryPiMutation } =
    useProformaApiCallHook();
  const { getActualBuyer } = useActualBuyerApiCallHook();
  const params = useParams();
  const { mutateAsync: addEnquiryPi } = addEnquiryPiMutation();
  const { mutateAsync: updateEnquiryPi } = updateEnquiryPiMutation();
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
  const [actualBuyerOptions, setActualBuyerOptions] = useState<
    ActualBuyerType[]
  >([]);
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
      mainHeading: "Add Enquiry (PI)",
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

  // useEffect(() => {
  //   if (enqPiFormFields.enqtype.config.options) {
  //     const defaultenqTypeOption = enqPiFormFields.enqtype.config.options.find(
  //       (option) => option.label === "NEW"
  //     );

  //     if (defaultenqTypeOption) {
  //       enqPiFormFields.enqtype.config.setData = defaultenqTypeOption;
  //     }
  //   }
  // }, []);

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(_.orderBy(Object.values(cityData), ["cityName"], ["asc"]));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    enqPiFormFields.enqCity.config.options = options;
  }

  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(
        _.orderBy(Object.values(stateData), ["stateName"], ["asc"])
      );
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    enqPiFormFields.enqState.config.options = options;
  }

  const { data: countryData } = getCountry();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(
        _.orderBy(Object.values(countryData), ["countryName"], ["asc"])
      );
    }
  }, [countryData]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    enqPiFormFields.enqCountry.config.options = options;
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
    enqPiFormFields.enqClient.config.options = options;
  }

  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(
        _.orderBy(Object.values(fYearData), ["finYear"], ["desc"])
      );
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    enqPiFormFields.enqFinYear.config.options = options;
  }

  const { data: actualBuyerData } = getActualBuyer(
    { client_id: clientId },
    clientId !== -2
  );

  // useEffect(() => {
  //   setActualBuyerOptions([]);
  // }, []);

  useEffect(() => {
    if (actualBuyerData) {
      console.log(actualBuyerData);
      setActualBuyerOptions(Object.values(actualBuyerData));
    }
  }, [actualBuyerData]);

  useEffect(() => {
    if (actualBuyerOptions) {
      // let options = selectOptionsMaker(
      //   actualBuyerOptions,
      //   "partyId",
      //   "partyName"
      // );
      // enqPiFormFields.enqActualBuyer.config.options = options;
    }
  }, [actualBuyerOptions]);

  const { data: sourceData } = getSource();

  useEffect(() => {
    if (sourceData) {
      setSourceOptions(
        _.orderBy(Object.values(sourceData), ["source"], ["asc"])
      );
    }
  }, [sourceData]);

  if (sourceOptions?.length) {
    let options = selectOptionsMaker(sourceOptions, "sourceId", "source");
    enqPiFormFields.enqSource.config.options = options;
  }

  // Local Source api call
  const { data: localSourceData } = getLocalSource();

  useEffect(() => {
    if (localSourceData) {
      setLocalSourceOptions(
        _.orderBy(Object.values(localSourceData), ["localSource"], ["asc"])
      );
    }
  }, [localSourceData]);

  if (localSourceOptions?.length) {
    let options = selectOptionsMaker(
      localSourceOptions,
      "localSourceId",
      "localSource"
    );
    enqPiFormFields.enqLocalSource.config.options = options;
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
    enqPiFormFields.enqCompanyName.config.options = options;
  }

  const { data: serviceData } = getServiceType();

  useEffect(() => {
    if (serviceData) {
      setServiceOptions(
        _.orderBy(Object.values(serviceData), ["serviceType"], ["asc"])
      );
    }
  }, [serviceData]);

  if (serviceOptions?.length) {
    let options = selectOptionsMaker(
      serviceOptions,
      "serviceTypeId",
      "serviceType"
    );
    enqPiFormFields.enqServiceType.config.options = options;
  }

  const { data: enqStatusData } = getEnqStatus();

  useEffect(() => {
    if (enqStatusData) {
      setEnqStatusOptions(
        _.orderBy(Object.values(enqStatusData), ["enquiryStatus"], ["asc"])
      );
    }
  }, [enqStatusData]);

  if (enqStatusOptions?.length) {
    // let options = selectOptionsMaker(
    //   enqStatusOptions,
    //   "enquiryStatusID",
    //   "enquiryStatus"
    // );
    // enqPiFormFields.enqStatus.config.options = options;
  }

  const companyOnInputChangeHandler = (companyInputValue: any) => {
    if (companyInputValue.length === 3) {
      setSearchStringCompany(companyInputValue);
    }
    if (companyInputValue.length === 0) {
      setCompanyOptions([]);
      enqPiFormFields.enqCompanyName.config.options = [];
    }
  };

  const clientOnInputChangeHandler = (clientInputValue: any) => {
    if (clientInputValue.length === 3) {
      setSearchStringClient(clientInputValue);
    }
    if (clientInputValue.length === 0) {
      setClientOptions([]);
      enqPiFormFields.enqClient.config.options = [];
    }
  };

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      if (enqPiFormFields.enqGivenAddress.config.name == "givenAddress") {
        setValue(
          enqPiFormFields.enqGivenAddress.config.name,
          companyData.data.address
        );
      }
      if (enqPiFormFields.enqZip.config.name == "zip") {
        setValue(enqPiFormFields.enqZip.config.name, companyData.data.zip);
      }
      if (enqPiFormFields.enqTelePhone.config.name == "phone") {
        setValue(
          enqPiFormFields.enqTelePhone.config.name,
          companyData.data.phone
        );
      }
      if (enqPiFormFields.enqFax.config.name == "fax") {
        setValue(enqPiFormFields.enqFax.config.name, companyData.data.fax);
      }
      if (enqPiFormFields.enqEmail.config.name == "email") {
        setValue(enqPiFormFields.enqEmail.config.name, companyData.data.email);
      }
      if (enqPiFormFields.enqWebsite.config.name == "website") {
        setValue(
          enqPiFormFields.enqWebsite.config.name,
          companyData.data.website
        );
      }
      if (enqPiFormFields.enqContact.config.name == "contactPerson") {
        setValue(
          enqPiFormFields.enqContact.config.name,
          companyData.data.contactPerson
        );
      }
      if (enqPiFormFields.enqDesignation.config.name == "designation") {
        setValue(
          enqPiFormFields.enqDesignation.config.name,
          companyData.data.designation
        );
      }
      if (enqPiFormFields.enqCity.config.name == "cityId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.cityId,
          companyData.data,
          "cityId",
          "cityName"
        );
        data.length > 0 &&
          setValue(enqPiFormFields.enqCity.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (enqPiFormFields.enqState.config.name == "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.stateId,
          companyData.data,
          "stateId",
          "state"
        );
        data.length > 0 &&
          setValue(enqPiFormFields.enqState.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (enqPiFormFields.enqCountry.config.name == "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.countryId,
          companyData.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(enqPiFormFields.enqCountry.config.name, data[0], {
            shouldValidate: true,
          });
      }
    }
  };

  const { data: enqData } = getEnquiryPiData(
    "" + params.id,
    !localEnqData && params.id !== undefined
  );

  const getClientValue = (clientId: number) => {
    if (clientId) {
      setClientId(clientId);
      // if (enqPiFormFields.enqClientId.config.name === "clientIdDisable") {
      //   setValue(enqPiFormFields.enqClientId.config.name, clientId);
      // }
    }
  };

  const { data: paticularClientData, isFetching } = getClientData(
    "" + clientId,
    clientId != -2
  );

  const { data: refNo } = getRefNo(params.id === undefined);

  useEffect(() => {
    if (refNo) {
      if (enqPiFormFields.enqRefNo.config.name == "refNo") {
        setValue(enqPiFormFields.enqRefNo.config.name, refNo);
      }
    }
  }, [refNo]);

  const getPriceHandler = () => {
    let obj: any = {};
    if (enqPiFormFields.enqCountry.config.name === "countryId") {
      obj["countryId"] = getValues(enqPiFormFields.enqCountry.config.name);
      if (!obj.countryId) {
        return alert("Please select Country.");
      }
    }
    if (enqPiFormFields.enqClient.config.name === "clientId") {
      obj["clientId"] = getValues(enqPiFormFields.enqClient.config.name);
      if (!obj.clientId) {
        return alert("Please select Client.");
      }
    }
    if (enqPiFormFields.enqServiceType.config.name === "serviceTypeId") {
      obj["serviceTypeId"] = getValues(
        enqPiFormFields.enqServiceType.config.name
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
    if (enqPiFormFields.enqPrice.config.name === "reportPrice") {
      setValue(
        enqPiFormFields.enqPrice.config.name,
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

  const mapEnqRequest = (enqFormData: EnquiryPiFormType) => {
    let enqData: Partial<EnqPiType> = {
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
      // reportFilename: enqFormData.reportFilename,
      reportPrice: enqFormData.reportPrice,
      // reportComission: enqFormData.reportComission,
      // lineOfBusiness: enqFormData.lineOfBusiness,
      // noteForComission: enqFormData.noteForComission,
      // disPer: enqFormData.disPer,
      // discount: enqFormData.discount,
      // adjustment: enqFormData.adjustment,
      // disType: enqFormData.disType,
      // bulkEnquiryId: 0,
      // locked: enqFormData.locked,
      // givenName: enqFormData.givenName,
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
    // if (actualBuyerData && enqFormData?.actualBuyerId) {
    //   enqData.actualBuyerId = enqFormData.actualBuyerId.value;
    // }
    // if (enqFormData?.siteStatusId) {
    //   enqData.siteStatusId = enqFormData.siteStatusId.value;
    // }
    if (fYearData && enqFormData?.fYear) {
      enqData.fyear = enqFormData.fYear.value;
    }
    if (enqFormData?.pmtStatus) {
      enqData.pmtStatus = enqFormData.pmtStatus.value;
    }
    // if (enqFormData?.typeofEnquiry) {
    //   enqData.typeofEnquiry = enqFormData.typeofEnquiry.value;
    // }
    if (localSourceData && enqFormData?.localSourceId) {
      enqData.localSourceId = enqFormData.localSourceId.value;
    }
    // industryId: formEnqData.industryId.value,
    return cleanupObject(enqData);
  };

  const mapEnqDataToEnqForm = (enqData: EnqPiType) => {
    let enqFormData: Partial<EnquiryPiFormType> = {
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
      // reportFilename: enqData.reportFilename,
      reportPrice: enqData.reportPrice,
      // reportComission: enqData.reportComission,
      // lineOfBusiness: enqData.lineOfBusiness,
      // noteForComission: enqData.noteForComission,
      // disPer: enqData.disPer,
      // discount: enqData.discount,
      // adjustment: enqData.adjustment,
      // disType: enqData.disType,
      // bulkEnquiryId: 0,
      // locked: enqData.locked,
      // givenName: enqData.givenName,
      cmie: enqData.cmie,
      email: enqData.email,
    };
    if (enqData?.companyId) {
      enqFormData.companyId = {
        label: enqData.companyName,
        value: enqData.companyId,
      };
    }
    if (enqData?.clientId) {
      enqFormData.clientId = {
        label: enqData.clientName,
        value: enqData.clientId,
      };
      getClientValue(enqData.clientId);
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
      setSearchStringClient(data.clientName);
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
    // if (actualBuyerData && enqData?.actualBuyerId) {
    //   let data = actualBuyerData[enqData.actualBuyerId];
    //   data &&
    //     (enqFormData.actualBuyerId = {
    //       label: data.partyName,
    //       value: data.partyId,
    //     });
    // }
    if (fYearData && enqData?.fyear) {
      let data = fYearData[enqData.fyear];
      data &&
        (enqFormData.fYear = {
          label: data.finYear,
          value: data.finYear,
        });
    }
    if (enqData?.pmtStatus) {
      let data = enqPiFormFields.enqPrintStatusData[enqData.pmtStatus];
      data &&
        (enqFormData.pmtStatus = {
          label: data.label,
          value: data.value,
        });
    }
    // if (enqData?.typeofEnquiry) {
    //   let data = enqPiFormFields.enqTypeData[enqData.typeofEnquiry];
    //   data &&
    //     (enqFormData.typeofEnquiry = {
    //       label: data.label,
    //       value: data.value,
    //     });
    // }
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

  const onSubmit = handleSubmit((enquiryPiData): void => {
    let reqObj: Partial<EnqPiType> = mapEnqRequest(enquiryPiData);
    console.log(reqObj);
    if (params.id && reqObj) {
      updateEnquiryPi({ id: +params.id, ...reqObj });
    } else {
      addEnquiryPi(reqObj);
    }
  });

  const addDays = (date: any, days: any) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return new Date(result).toISOString().split("T")[0];
  };

  return (
    <>
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
                  config={enqPiFormFields.enqCompanyName}
                  onChange={companyOnChangeHandler}
                  onInputChange={companyOnInputChangeHandler}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqFinYear}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqRefNo}
                />
                <small className="enquirynote text-right">
                  <InputWithText config={enqPiFormFields.enqRefNote.config} />
                </small>
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqSource}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqGivenAddress}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqCity}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqState}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqCountry}
                  onChange={() => setValue("reportPrice", undefined)}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqZip}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqTelePhone}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqFax}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqEmail}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqWebsite}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqContact}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqDesignation}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqClientRef}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqClient}
                  onChange={(e) => {
                    setValue("reportPrice", undefined);
                    getClientValue(e.value);
                  }}
                  onInputChange={clientOnInputChangeHandler}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqRequestNo}
                />
                {/* <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqClientId}
                /> */}
                {/* <Link to={""} className="card-title"> */}
                {/* <InputWithText
                  config={enqPiFormFields.enqActualBuyerAddNote.config}
                /> */}
                {/* </Link> */}
                {/* <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqActualBuyer}
                /> */}
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqServiceType}
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
                  config={enqPiFormFields.enqPrice}
                />
                {/* <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqGivenName}
                /> */}
                <NewDatePicker
                  errors={errors}
                  control={control}
                  register={register}
                  config={enqPiFormFields.enqRecdon}
                />
                <NewDatePicker
                  errors={errors}
                  control={control}
                  register={register}
                  config={enqPiFormFields.enqDueOn}
                  defaultValue={addDays(new Date(), 4)}
                />
                {/* <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqtype}
                /> */}
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqLocalSource}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqPrintStatus}
                />
                {/* <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqStatus}
                /> */}
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={enqPiFormFields.enqSvisit}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqNotesForEnquiry}
                />
                {/* <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqNotesForAdj}
                /> */}
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqInstruction}
                />
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="row">
                  {/* <div className="col-md-8 col-xs-12 text-right">
                      <Link to={""} className="card-title">
                        <InputWithText
                          config={
                            enqPiFormFields.enqActualBuyerAddNote
                          }
                        />
                      </Link>
                    </div> */}
                  {/* <div className="col-md-4 col-xs-12 text-right">
                      <i className="fa fa-refresh"></i>
                    </div> */}
                </div>
                {/* <NewInput errors={errors}
                  register={register} config={enqPiFormFields.enqPrice} /> */}
              </div>
              <div className="col-md-6 col-xs-12">
                <Table config={tableConfig.config}>
                  {" "}
                  {isFetching && <Loader />}
                </Table>
              </div>
              {/* <div className="card-title">
                <InputWithText
                  config={enqPiFormFields.enqDiscountCommissionNote.config}
                />
              </div> */}
              {/* <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqDis}
                />
              </div> */}
              {/* <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqDiscount}
                />
              </div> */}
              {/* <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqAdjust}
                />
                <div className="row">
                  <div className="col-md-12 col-xs-12 text-right">
                    <Button type="button" className="btn btn-danger btn-sm">
                      <i className="far fa-save"></i> View Adjust
                    </Button>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={enqPiFormFields.enqReportComm}
                />
              </div> */}
              {/* <div className="card-title col-12">
                <InputWithText
                  config={enqPiFormFields.enqDiscountTypeNote.config}
                />
              </div> */}
            </div>
            {/* <div className="row">
                <div className="col-md-4 col-xs-12">
                  <Select
                    config={enqPiFormFields.companyField.config}
                    onChangeHandler={companyOnChangeHandler}
                  />
                </div>
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
                        <InputWithText
                          config={enqPiFormFields.refNote.config}
                        />
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
                      <Select
                        config={enqPiFormFields.localSourceField.config}
                      />
                    </div>
                    <div className="col-md-2 pt-2 col-xs-12">
                      <SingleCheckbox
                        config={enqPiFormFields.allField.config}
                      />
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
                    <div className="col-md-14 col-xs-12 text-right">
                      <Button
                        type={"submit"}
                        className={"btn btn-danger btn-sm"}
                      >
                        <i className="far fa-save"></i>Get Price
                      </Button>
                    </div>
                  </div>
                </div>
              </div> */}
          </BorderLayout>
          <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
            <ActionButtons />
          </BorderLayout>
        </form>
      </Card>
    </>
  );
};
