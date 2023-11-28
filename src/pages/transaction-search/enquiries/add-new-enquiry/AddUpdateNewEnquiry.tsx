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
import { Link, useParams } from "react-router-dom";
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
  returnObjectBasedOnID,
  selectOptionsMaker,
} from "@utils/index";
// import {useStateApiCallHook } from "@pages/master";

export const AddEnquiry: React.FC = () => {
  // const { getState } = useStateApiCallHook();
  // const { data: stateData, isLoading } = getState();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<EnqueryFormType>();
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
  const [serviceTypeId, setServiceTypeId] = useState<number>(-2);
  const [countryId, setCountryId] = useState<number>(-2);

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

  if (actualBuyerData?.length) {
    let options = selectOptionsMaker(actualBuyerData, "partyId", "partyName");
    addEnquiryFormFields.enqActualBuyer.config.options = options;
  }

  // Source api call
  const { data: surceData } = getSource();

  useEffect(() => {
    if (surceData) {
      setSourceOptions(Object.values(surceData));
    }
  }, [surceData]);

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
    params.id != undefined
  );

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

  useEffect(() => {
    if (enqData) {
      // let clonedEnqDataData = { ...enqData };
      // if (cityOptions?.length) {
      //   let id = clonedEnqDataData?.cityId;
      //   let data: any = returnObjectBasedOnID(
      //     cityOptions,
      //     "id",
      //     id,
      //     "id",
      //     "cityName"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.cityId = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (stateOptions?.length) {
      //   let id = clonedEnqDataData?.stateId;
      //   let data: any = returnObjectBasedOnID(
      //     stateOptions,
      //     "stateId",
      //     id,
      //     "stateId",
      //     "stateName"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.stateId = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (countryOptions?.length) {
      //   let id = clonedEnqDataData?.countryId;
      //   let data: any = returnObjectBasedOnID(
      //     countryOptions,
      //     "countryId",
      //     id,
      //     "countryId",
      //     "countryName"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.countryId = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      //   // setCountryId(clonedEnqDataData?.countryId);
      // }
      // if (clientOptions?.length) {
      //   let id = clonedEnqDataData?.clientID;
      //   let data: any = returnObjectBasedOnID(
      //     clientOptions,
      //     "clientID",
      //     id,
      //     "clientID",
      //     "clientName"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.clientID = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      //   // setClientId(clonedEnqDataData?.clientID);
      // }
      // if (finYearOptions?.length) {
      //   let id = clonedEnqDataData?.fyearId;
      //   let data: any = returnObjectBasedOnID(
      //     finYearOptions,
      //     "id",
      //     id,
      //     "id",
      //     "finYear"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.financialYear = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (sourceOptions?.length) {
      //   let id = clonedEnqDataData?.sourceID;
      //   let data: any = returnObjectBasedOnID(
      //     sourceOptions,
      //     "sourceID",
      //     id,
      //     "sourceID",
      //     "source"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.sourceID = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (localSourceOptions?.length) {
      //   let id = clonedEnqDataData?.localSourceId;
      //   let data: any = returnObjectBasedOnID(
      //     localSourceOptions,
      //     "localSourceId",
      //     id,
      //     "localSourceId",
      //     "localSource"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.localSourceId = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (companyOptions?.length) {
      //   let id = clonedEnqDataData?.companyID;
      //   let data: any = returnObjectBasedOnID(
      //     companyOptions,
      //     "companyId",
      //     id,
      //     "companyId",
      //     "companyName"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.companyID = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (serviceOptions?.length) {
      //   let id = clonedEnqDataData?.serviceTypeID;
      //   let data: any = returnObjectBasedOnID(
      //     serviceOptions,
      //     "serviceTypeID",
      //     id,
      //     "serviceTypeID",
      //     "serviceType"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.serviceTypeID = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      //   // setServiceTypeId(clonedEnqDataData?.serviceTypeID);
      // }
      // if (enqStatusOptions?.length) {
      //   let id = clonedEnqDataData?.enqStatusID;
      //   let data: any = returnObjectBasedOnID(
      //     enqStatusOptions,
      //     "enquiryStatusID",
      //     id,
      //     "enquiryStatusID",
      //     "enquiryStatus"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.typeofEnquiry = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // if (actualBuyerOptions?.length) {
      //   let id = clonedEnqDataData?.actualBuyerId;
      //   let data: any = returnObjectBasedOnID(
      //     actualBuyerOptions,
      //     "partyId",
      //     id,
      //     "partyId",
      //     "partyName"
      //   );
      //   data.length
      //     ? (clonedEnqDataData.actualBuyerId = {
      //         label: data[0].label,
      //         value: data[0].value,
      //       })
      //     : [];
      // }
      // reset(clonedEnqDataData);
    }
  }, [
    enqData,
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
  ]);

  const onServiceTypeChangeHandler = (serviceTypeData: any) => {
    if (serviceTypeData) {
      setServiceTypeId(serviceTypeData?.value);
    }
  };

  const onCountryChangeHandler = (countryData: any) => {
    if (countryData) {
      setCountryId(countryData?.value);
    }
  };

  const onClientChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setClientId(selectedOption.value);
    }
  };

  const { data: priceData } = getPrice(
    { clientId, serviceTypeId, countryId },
    clientId != -2 && serviceTypeId != -2 && countryId != -2
  );

  if (priceData) {
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

  const mapEnqRequest = (formEnqData: EnqueryFormType) => {
    let enqFormData: Partial<AllEnquiriesType> = {
      refNo: formEnqData.refNo,
      bookNo: formEnqData.bookNo,
      recdDate: formEnqData.recdDate,
      dueDate: formEnqData.dueDate,
      clientRefNo: formEnqData.clientRefNo,
      notes: formEnqData.notes,
      pmtstatus: formEnqData.pmtstatus.value,
      creditamount: formEnqData.creditamount,
      reportDate: formEnqData.reportDate,
      givenAddress: formEnqData.givenAddress,
      zip: formEnqData.zip,
      rockStatus: formEnqData.rockStatus,
      records: formEnqData.records,
      recFin: formEnqData.recFin,
      phone: formEnqData.phone,
      fax: formEnqData.fax,
      website: formEnqData.website,
      contactPerson: formEnqData.contactPerson,
      designation: formEnqData.designation,
      financialYear: formEnqData.financialYear,
      bankers: formEnqData.bankers,
      requestNo: formEnqData.requestNo,
      instruction: formEnqData.instruction,
      reportFilename: formEnqData.reportFilename,
      reportPrice: formEnqData.reportPrice,
      reportComission: formEnqData.reportComission,
      typeofEnquiry: formEnqData.typeofEnquiry.value,
      lineOfBusiness: formEnqData.lineOfBusiness,
      noteForComission: formEnqData.noteForComission,
      disPer: formEnqData.disPer,
      discount: formEnqData.discount,
      adjustment: formEnqData.adjustment,
      disType: formEnqData.disType,
      bulk_enquiry_id: formEnqData.bulk_enquiry_id
        ? formEnqData.bulk_enquiry_id
        : 0,
      locked: formEnqData.locked,
      givenName: formEnqData.givenName,
      cmie: formEnqData.cmie,
      email: formEnqData.email,
    };
    if (countryData && formEnqData?.companyID) {
      enqFormData.companyID = formEnqData.companyID.value;
    }
    if (countryData && formEnqData?.serviceTypeID) {
      enqFormData.serviceTypeID = formEnqData.serviceTypeID.value;
    }
    if (countryData && formEnqData?.clientID) {
      enqFormData.clientID = formEnqData.clientID.value;
    }
    if (countryData && formEnqData?.sourceID) {
      enqFormData.sourceID = formEnqData.sourceID.value;
    }
    if (countryData && formEnqData?.enqStatusID) {
      enqFormData.enqStatusID = formEnqData.enqStatusID.value;
    }
    if (countryData && formEnqData?.cityId) {
      enqFormData.cityId = formEnqData.cityId.value;
    }
    if (countryData && formEnqData?.stateId) {
      enqFormData.stateId = formEnqData.stateId.value;
    }
    if (countryData && formEnqData?.countryId) {
      enqFormData.countryId = formEnqData.countryId.value;
    }
    if (countryData && formEnqData?.actualBuyerId) {
      enqFormData.actualBuyerId = formEnqData.actualBuyerId.value;
    }
    if (countryData && formEnqData?.siteStatusId) {
      enqFormData.siteStatusId = formEnqData.siteStatusId.value;
    }
    if (countryData && formEnqData?.fYear) {
      enqFormData.fyear = formEnqData.fYear.value;
    }
    // industryId: formEnqData.industryId.value,
    // localSourceId: formEnqData.localSourceId.value,
    return cleanupObject(enqFormData);
  };

  // const mapUsertoFormUser = (enqData: AllEnquiriesType) => {
  //   let formUserData: Partial<EnqueryFormType> = {};
  //   return formUserData;
  // };

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
                onChange={onCountryChangeHandler}
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
                onChange={onClientChangeHandler}
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
                onChange={onServiceTypeChangeHandler}
              />
              <div className="row mb-2 justify-content-end">
                <div className="col-md-4 col-xs-12 text-right">
                  <Button type="button" className="btn btn-danger btn-sm">
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
