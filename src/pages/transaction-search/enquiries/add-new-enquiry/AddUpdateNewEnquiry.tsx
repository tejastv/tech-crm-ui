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
  EnqType,
  ServiceType,
  addEnquiryFormFields,
  useAddEnquiryApiCallHook,
  useAllEnquiriesApiCallHook,
  AllEnquiriesType,
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

export const AddEnquiry: React.FC = () => {
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
  const { updateEnquiryMutation, getEnquiryData } =
    useAllEnquiriesApiCallHook();
  const {
    getEnqStatus,
    getRefNo,
    getServiceType,
    getPrice,
    addEnquiryMutation,
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
  const [enqStatusOptions, setEnqStatusOptions] = useState<EnqType[]>();
  const [actualBuyerOptions, setActualBuyerOptions] =
    useState<ActualBuyerType[]>();
  const [getPriceFlag, setGetPriceFlag] = useState<any>({
    flag: false,
    clientId: null,
    serviceTypeId: null,
    countryId: null,
  });

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
    // addEnquiryFormFields.enqtype.config.setData = "false";
    if (addEnquiryFormFields.enqtype.config.options) {
      const defaultenqTypeOption =
        addEnquiryFormFields.enqtype.config.options.find(
          (option) => option.label === "NEW"
        );

      if (defaultenqTypeOption) {
        addEnquiryFormFields.enqtype.config.setData = defaultenqTypeOption;
      }
    }
  }, []);

  // city api call
  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    addEnquiryFormFields.enqCity.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    addEnquiryFormFields.enqState.config.options = options;
  }

  // country api call
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
    addEnquiryFormFields.enqCountry.config.options = options;
  }

  //  Client api call
  const { data: clientData } = getClient();

  useEffect(() => {
    if (clientData) {
      setClientOptions(Object.values(clientData));
    }
  }, [clientData]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientID", "clientName");
    addEnquiryFormFields.enqClient.config.options = options;
  }

  //  Fyear  api call
  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(Object.values(fYearData));
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    addEnquiryFormFields.enqFinYear.config.options = options;
  }

  //  Actual buyer api call
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
    addEnquiryFormFields.enqActualBuyer.config.options = options;
  }

  // Source api call
  const { data: sourceData } = getSource();

  useEffect(() => {
    if (sourceData) {
      setSourceOptions(Object.values(sourceData));
    }
  }, [sourceData]);

  if (sourceOptions?.length) {
    let options = selectOptionsMaker(sourceOptions, "sourceID", "source");
    addEnquiryFormFields.enqSource.config.options = options;
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
    addEnquiryFormFields.enqLocalSource.config.options = options;
  }

  // Company api call
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
    addEnquiryFormFields.enqCompanyName.config.options = options;
  }

  // Service Type api call
  const { data: serviceData } = getServiceType();

  useEffect(() => {
    if (serviceData) {
      setServiceOptions(Object.values(serviceData));
    }
  }, [serviceData]);

  if (serviceOptions?.length) {
    let options = selectOptionsMaker(
      serviceOptions,
      "serviceTypeID",
      "serviceType"
    );
    addEnquiryFormFields.enqServiceType.config.options = options;
  }

  // enq Status api call
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
    addEnquiryFormFields.enqStatus.config.options = options;
  }

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      if (addEnquiryFormFields.enqGivenAddress.config.name == "givenAddress") {
        setValue(
          addEnquiryFormFields.enqGivenAddress.config.name,
          companyData.data.address
        );
      }
      if (addEnquiryFormFields.enqZip.config.name == "zip") {
        setValue(addEnquiryFormFields.enqZip.config.name, companyData.data.zip);
      }
      if (addEnquiryFormFields.enqTelePhone.config.name == "phone") {
        setValue(
          addEnquiryFormFields.enqTelePhone.config.name,
          companyData.data.phone
        );
      }
      if (addEnquiryFormFields.enqFax.config.name == "fax") {
        setValue(addEnquiryFormFields.enqFax.config.name, companyData.data.fax);
      }
      if (addEnquiryFormFields.enqEmail.config.name == "email") {
        setValue(
          addEnquiryFormFields.enqEmail.config.name,
          companyData.data.email
        );
      }
      if (addEnquiryFormFields.enqWebsite.config.name == "website") {
        setValue(
          addEnquiryFormFields.enqWebsite.config.name,
          companyData.data.website
        );
      }
      if (addEnquiryFormFields.enqContact.config.name == "contactPerson") {
        setValue(
          addEnquiryFormFields.enqContact.config.name,
          companyData.data.contactPerson
        );
      }
      if (addEnquiryFormFields.enqDesignation.config.name == "designation") {
        setValue(
          addEnquiryFormFields.enqDesignation.config.name,
          companyData.data.designation
        );
      }
      if (addEnquiryFormFields.enqCity.config.name == "cityId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.cityId,
          companyData.data,
          "cityId",
          "cityName"
        );
        data.length > 0 &&
          setValue(addEnquiryFormFields.enqCity.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (addEnquiryFormFields.enqState.config.name == "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.stateId,
          companyData.data,
          "stateId",
          "state"
        );
        data.length > 0 &&
          setValue(addEnquiryFormFields.enqState.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (addEnquiryFormFields.enqCountry.config.name == "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.countryId,
          companyData.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(addEnquiryFormFields.enqCountry.config.name, data[0], {
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
    // console.log(clientId);
    if (clientId) {
      setClientId(clientId);
    }
  };

  const { data: paticularClientData, isFetching } = getClientData(
    "" + clientId,
    clientId != -2
  );

  const { data: refNo } = getRefNo(params.id === undefined);

  useEffect(() => {
    if (refNo) {
      if (addEnquiryFormFields.enqRefNo.config.name == "refNo") {
        setValue(addEnquiryFormFields.enqRefNo.config.name, refNo);
      }
    }
  }, [refNo]);

  const getPriceHandler = () => {
    let obj: any = {};
    if (addEnquiryFormFields.enqCountry.config.name === "countryId") {
      obj["countryId"] = getValues(addEnquiryFormFields.enqCountry.config.name);
    }
    if (addEnquiryFormFields.enqClient.config.name === "clientID") {
      obj["clientID"] = getValues(addEnquiryFormFields.enqClient.config.name);
    }
    if (addEnquiryFormFields.enqServiceType.config.name === "serviceTypeID") {
      obj["serviceTypeID"] = getValues(
        addEnquiryFormFields.enqServiceType.config.name
      );
    }
    if (obj.countryId && obj.clientID && obj.serviceTypeID) {
      setGetPriceFlag({ flag: true, ...obj });
      // console.log("true", { flag: true, ...obj });
    } else {
      setGetPriceFlag({ flag: false });
      // console.log("false", { flag: false });
    }
  };

  const { data: priceData } = getPrice(
    {
      clientId: getPriceFlag.clientID?.value,
      serviceTypeId: getPriceFlag.serviceTypeID?.value,
      countryId: getPriceFlag.countryId?.value,
    },
    getPriceFlag.flag
  );

  if (priceData !== undefined) {
    if (addEnquiryFormFields.enqPrice.config.name === "reportPrice") {
      setValue(addEnquiryFormFields.enqPrice.config.name, priceData);
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
    let enqData: Partial<AllEnquiriesType> = {
      refNo: enqFormData.refNo,
      bookNo: enqFormData.bookNo,
      recdDate: enqFormData.recdDate,
      dueDate: enqFormData.dueDate,
      clientRefNo: enqFormData.clientRefNo,
      notes: enqFormData.notes,
      creditamount: enqFormData.creditamount,
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
    if (countryData && enqFormData?.companyID) {
      enqData.companyID = enqFormData.companyID.value;
    }
    if (countryData && enqFormData?.serviceTypeID) {
      enqData.serviceTypeID = enqFormData.serviceTypeID.value;
    }
    if (countryData && enqFormData?.clientID) {
      enqData.clientID = enqFormData.clientID.value;
    }
    if (countryData && enqFormData?.sourceID) {
      enqData.sourceID = enqFormData.sourceID.value;
    }
    if (countryData && enqFormData?.enqStatusID) {
      enqData.enqStatusID = enqFormData.enqStatusID.value;
    }
    if (countryData && enqFormData?.cityId) {
      enqData.cityId = enqFormData.cityId.value;
    }
    if (countryData && enqFormData?.stateId) {
      enqData.stateId = enqFormData.stateId.value;
    }
    if (countryData && enqFormData?.countryId) {
      enqData.countryId = enqFormData.countryId.value;
    }
    if (countryData && enqFormData?.actualBuyerId) {
      enqData.actualBuyerId = enqFormData.actualBuyerId.value;
    }
    if (countryData && enqFormData?.siteStatusId) {
      enqData.siteStatusId = enqFormData.siteStatusId.value;
    }
    if (countryData && enqFormData?.fYear) {
      enqData.fyear = enqFormData.fYear.value;
    }
    if (countryData && enqFormData?.pmtstatus) {
      enqData.pmtstatus = enqFormData.pmtstatus.value;
    }
    if (countryData && enqFormData?.typeofEnquiry) {
      enqData.typeofEnquiry = enqFormData.typeofEnquiry.value;
    }
    if (countryData && enqFormData?.localSourceId) {
      enqData.localSourceId = enqFormData.localSourceId.value;
    }
    // industryId: formEnqData.industryId.value,
    return cleanupObject(enqData);
  };

  const mapEnqDataToEnqForm = (enqData: AllEnquiriesType) => {
    let enqFormData: Partial<EnqueryFormType> = {
      refNo: enqData.refNo,
      bookNo: enqData.bookNo,
      recdDate: enqData.recdDate && enqData.recdDate.split("T")[0],
      dueDate: enqData.dueDate && enqData.dueDate.split("T")[0],
      clientRefNo: enqData.clientRefNo,
      notes: enqData.notes,
      creditamount: enqData.creditamount,
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
    if (companyData && enqData?.companyID) {
      let data = companyData[enqData.companyID];
      data &&
        (enqFormData.companyID = {
          label: data.companyName,
          value: data.companyId,
        });
    }
    if (clientData && enqData?.clientID) {
      let data = clientData[enqData.clientID];
      data &&
        ((enqFormData.clientID = {
          label: data.clientName,
          value: data.clientID,
        }),
        getClientValue(data.clientID));
    }
    if (serviceData && enqData?.serviceTypeID) {
      let data = serviceData[enqData.serviceTypeID];
      data &&
        (enqFormData.serviceTypeID = {
          label: data.serviceType,
          value: data.serviceTypeID,
        });
    }
    if (countryData && clientData?.clientID) {
      let data = clientData[enqData.clientID];
      data &&
        (enqFormData.clientID = {
          label: data.clientName,
          value: data.clientID,
        });
    }
    if (sourceData && enqData?.sourceID) {
      let data = sourceData[enqData.sourceID];
      data &&
        (enqFormData.sourceID = {
          label: data.source,
          value: data.sourceID,
        });
    }
    if (enqStatusData && enqData?.enqStatusID) {
      let data = enqStatusData[enqData.enqStatusID];
      data &&
        (enqFormData.enqStatusID = {
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
    if (enqData?.pmtstatus) {
      let data = addEnquiryFormFields.enqPrintStatusData[enqData.pmtstatus];
      data &&
        (enqFormData.pmtstatus = {
          label: data.label,
          value: data.value,
        });
    }
    if (enqData?.typeofEnquiry) {
      let data = addEnquiryFormFields.enqTypeData[enqData.typeofEnquiry];
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
    let reqObj: Partial<AllEnquiriesType> = mapEnqRequest(enquiryData);
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
                config={addEnquiryFormFields.enqCompanyName}
                onChange={companyOnChangeHandler}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqFinYear}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqRefNo}
              />
              <small className="enquirynote text-right">
                <InputWithText
                  config={addEnquiryFormFields.enqRefNote.config}
                />
              </small>
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqSource}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqGivenAddress}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqCity}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqState}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqCountry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqZip}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqTelePhone}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqFax}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqEmail}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqWebsite}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqContact}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqDesignation}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqClientRef}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqClient}
                onChange={(e) => getClientValue(e.value)}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqRequestNo}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqClientId}
              />
              <Link to={""} className="card-title">
                <InputWithText
                  config={addEnquiryFormFields.enqActualBuyerAddNote.config}
                />
              </Link>
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqActualBuyer}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqServiceType}
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
                config={addEnquiryFormFields.enqPrice}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqGivenName}
              />
              <NewDatePicker
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqRecdon}
              />
              <NewDatePicker
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqDueOn}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqtype}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqLocalSource}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqPrintStatus}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqStatus}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqSvisit}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqNotesForEnquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqNotesForAdj}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqInstruction}
              />
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="row">
                {/* <div className="col-md-8 col-xs-12 text-right">
                      <Link to={""} className="card-title">
                        <InputWithText
                          config={
                            addEnquiryFormFields.enqActualBuyerAddNote
                          }
                        />
                      </Link>
                    </div> */}
                {/* <div className="col-md-4 col-xs-12 text-right">
                      <i className="fa fa-refresh"></i>
                    </div> */}
              </div>
              {/* <NewInput errors={errors}
                  register={register} config={addEnquiryFormFields.enqPrice} /> */}
            </div>
            <div className="col-md-6 col-xs-12">
              {!isFetching && <Table config={tableConfig.config}></Table>}
            </div>
            <div className="card-title">
              <InputWithText
                config={addEnquiryFormFields.enqDiscountCommissionNote.config}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqDis}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqDiscount}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.enqAdjust}
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
                config={addEnquiryFormFields.enqReportComm}
              />
            </div>
            <div className="card-title col-12">
              <InputWithText
                config={addEnquiryFormFields.enqDiscountTypeNote.config}
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
