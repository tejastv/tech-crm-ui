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
  AddUpdateEnquiryType,
  EnqType,
  ServiceType,
  addEnquiryFormFields,
  useAddEnquiryApiCallHook,
  useAllEnquiriesApiCallHook,
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
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<AddUpdateEnquiryType>();
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
      setCityOptions(cityData);
    }
  }, [cityData?.length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    addEnquiryFormFields.cityenquiry.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(stateData);
    }
  }, [stateData?.length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    addEnquiryFormFields.stateenquiry.config.options = options;
  }

  // country api call
  const { data: countryData } = getCountry();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(countryData);
    }
  }, [countryData?.length]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    addEnquiryFormFields.countryenquiry.config.options = options;
  }

  //  Client api call
  const { data: clientData } = getClient();

  useEffect(() => {
    if (clientData) {
      setClientOptions(clientData);
    }
  }, [clientData?.length]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientID", "clientName");
    addEnquiryFormFields.clientenquiry.config.options = options;
  }

  //  Fyear  api call
  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(fYearData);
    }
  }, [fYearData?.length]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    addEnquiryFormFields.yearenquiry.config.options = options;
  }

  //  Actual buyer api call
  const { data: actualBuyerData } = getActualBuyer();
  useEffect(() => {
    if (actualBuyerData) {
      setActualBuyerOptions(actualBuyerData);
    }
  }, [actualBuyerData?.length]);

  if (actualBuyerData?.length) {
    let options = selectOptionsMaker(actualBuyerData, "partyId", "partyName");
    addEnquiryFormFields.actualbureyenquiry.config.options = options;
  }

  // Source api call
  const { data: surceData } = getSource();

  useEffect(() => {
    if (surceData) {
      setSourceOptions(surceData);
    }
  }, [surceData?.length]);

  if (sourceOptions?.length) {
    let options = selectOptionsMaker(sourceOptions, "sourceID", "source");
    addEnquiryFormFields.sourceenquiry.config.options = options;
  }

  // Local Source api call
  const { data: localSourceData } = getLocalSource();

  useEffect(() => {
    if (localSourceData) {
      setLocalSourceOptions(localSourceData);
    }
  }, [localSourceData?.length]);

  if (localSourceOptions?.length) {
    let options = selectOptionsMaker(
      localSourceOptions,
      "localSourceId",
      "localSource"
    );
    addEnquiryFormFields.localsourceenquiry.config.options = options;
  }

  // Company api call
  const { data: companyData } = getCompany();

  useEffect(() => {
    if (companyData) {
      setCompanyOptions(companyData);
    }
  }, [companyData?.length]);

  if (companyOptions?.length) {
    let options = selectOptionsMaker(
      companyOptions,
      "companyId",
      "companyName",
      true
    );
    addEnquiryFormFields.companyenquiry.config.options = options;
  }

  // Service Type api call
  const { data: serviceData } = getServiceType();

  useEffect(() => {
    if (serviceData) {
      setServiceOptions(serviceData);
    }
  }, [serviceData?.length]);

  if (serviceOptions?.length) {
    let options = selectOptionsMaker(
      serviceOptions,
      "serviceTypeID",
      "serviceType"
    );
    addEnquiryFormFields.servicetype.config.options = options;
  }

  // enq Status api call
  const { data: enqStatusData } = getEnqStatus();

  useEffect(() => {
    if (enqStatusData) {
      setEnqStatusOptions(enqStatusData);
    }
  }, [enqStatusData?.length]);

  if (enqStatusOptions?.length) {
    let options = selectOptionsMaker(
      enqStatusOptions,
      "enquiryStatusID",
      "enquiryStatus"
    );
    addEnquiryFormFields.enqstatus.config.options = options;
  }

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      if (
        addEnquiryFormFields.givenaddressEnquiry.config.name == "givenAddress"
      ) {
        setValue(
          addEnquiryFormFields.givenaddressEnquiry.config.name,
          companyData.data.address
        );
      }
      if (addEnquiryFormFields.zipenquiry.config.name == "zip") {
        setValue(
          addEnquiryFormFields.zipenquiry.config.name,
          companyData.data.zip
        );
      }
      if (addEnquiryFormFields.telnoenquiry.config.name == "phone") {
        setValue(
          addEnquiryFormFields.telnoenquiry.config.name,
          companyData.data.phone
        );
      }
      if (addEnquiryFormFields.faxnoenquiry.config.name == "fax") {
        setValue(
          addEnquiryFormFields.faxnoenquiry.config.name,
          companyData.data.fax
        );
      }
      if (addEnquiryFormFields.emailenquiry.config.name == "email") {
        setValue(
          addEnquiryFormFields.emailenquiry.config.name,
          companyData.data.email
        );
      }
      if (addEnquiryFormFields.websiteenquiry.config.name == "website") {
        setValue(
          addEnquiryFormFields.websiteenquiry.config.name,
          companyData.data.website
        );
      }
      if (addEnquiryFormFields.contactenquiry.config.name == "contactPerson") {
        setValue(
          addEnquiryFormFields.contactenquiry.config.name,
          companyData.data.contactPerson
        );
      }
      if (
        addEnquiryFormFields.designationenquiry.config.name == "designation"
      ) {
        setValue(
          addEnquiryFormFields.designationenquiry.config.name,
          companyData.data.designation
        );
      }
      if (addEnquiryFormFields.cityenquiry.config.name == "cityId") {
        setValue(
          addEnquiryFormFields.cityenquiry.config.name,
          returnFormatedObjectElseEmptyArray(
            companyData.data.cityId,
            companyData.data,
            "cityId",
            "cityName"
          ),
          {
            shouldValidate: true,
          }
        );
      }
      if (addEnquiryFormFields.stateenquiry.config.name == "stateId") {
        setValue(
          addEnquiryFormFields.stateenquiry.config.name,
          returnFormatedObjectElseEmptyArray(
            companyData.data.stateId,
            companyData.data,
            "stateId",
            "state"
          ),
          {
            shouldValidate: true,
          }
        );
      }
      if (addEnquiryFormFields.countryenquiry.config.name == "countryId") {
        setValue(
          addEnquiryFormFields.countryenquiry.config.name,
          returnFormatedObjectElseEmptyArray(
            companyData.data.countryId,
            companyData.data,
            "countryId",
            "countryName"
          ),
          {
            shouldValidate: true,
          }
        );
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
      if (addEnquiryFormFields.refnoenquiry.config.name == "refNo") {
        setValue(addEnquiryFormFields.refnoenquiry.config.name, refNo);
      }
    }
  }, [refNo]);

  useEffect(() => {
    if (enqData) {
      let clonedEnqDataData = { ...enqData };
      if (cityOptions?.length) {
        let id = clonedEnqDataData?.cityId;
        let data: any = returnObjectBasedOnID(
          cityOptions,
          "id",
          id,
          "id",
          "cityName"
        );
        data.length
          ? (clonedEnqDataData.cityId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (stateOptions?.length) {
        let id = clonedEnqDataData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateOptions,
          "stateId",
          id,
          "stateId",
          "stateName"
        );
        data.length
          ? (clonedEnqDataData.stateId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (countryOptions?.length) {
        let id = clonedEnqDataData?.countryId;
        let data: any = returnObjectBasedOnID(
          countryOptions,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        data.length
          ? (clonedEnqDataData.countryId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
        // setCountryId(clonedEnqDataData?.countryId);
      }
      if (clientOptions?.length) {
        let id = clonedEnqDataData?.clientID;
        let data: any = returnObjectBasedOnID(
          clientOptions,
          "clientID",
          id,
          "clientID",
          "clientName"
        );
        data.length
          ? (clonedEnqDataData.clientID = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
        // setClientId(clonedEnqDataData?.clientID);
      }
      if (finYearOptions?.length) {
        let id = clonedEnqDataData?.fyearId;
        let data: any = returnObjectBasedOnID(
          finYearOptions,
          "id",
          id,
          "id",
          "finYear"
        );
        data.length
          ? (clonedEnqDataData.financialYear = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (sourceOptions?.length) {
        let id = clonedEnqDataData?.sourceID;
        let data: any = returnObjectBasedOnID(
          sourceOptions,
          "sourceID",
          id,
          "sourceID",
          "source"
        );
        data.length
          ? (clonedEnqDataData.financialYear = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (localSourceOptions?.length) {
        let id = clonedEnqDataData?.localSourceId;
        let data: any = returnObjectBasedOnID(
          localSourceOptions,
          "localSourceId",
          id,
          "localSourceId",
          "localSource"
        );
        data.length
          ? (clonedEnqDataData.localSourceId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (companyOptions?.length) {
        let id = clonedEnqDataData?.companyID;
        let data: any = returnObjectBasedOnID(
          companyOptions,
          "companyId",
          id,
          "companyId",
          "companyName"
        );
        data.length
          ? (clonedEnqDataData.companyID = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (serviceOptions?.length) {
        let id = clonedEnqDataData?.serviceTypeID;
        let data: any = returnObjectBasedOnID(
          serviceOptions,
          "serviceTypeID",
          id,
          "serviceTypeID",
          "serviceType"
        );
        data.length
          ? (clonedEnqDataData.serviceTypeID = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
        // setServiceTypeId(clonedEnqDataData?.serviceTypeID);
      }
      if (enqStatusOptions?.length) {
        let id = clonedEnqDataData?.enqStatusID;
        let data: any = returnObjectBasedOnID(
          enqStatusOptions,
          "enquiryStatusID",
          id,
          "enquiryStatusID",
          "enquiryStatus"
        );
        data.length
          ? (clonedEnqDataData.typeofEnquiry = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (actualBuyerOptions?.length) {
        let id = clonedEnqDataData?.actualBuyerId;
        let data: any = returnObjectBasedOnID(
          actualBuyerOptions,
          "partyId",
          id,
          "partyId",
          "partyName"
        );
        data.length
          ? (clonedEnqDataData.actualBuyerId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      reset(clonedEnqDataData);
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
    if (addEnquiryFormFields.priceenquiry.config.name === "reportPrice") {
      setValue(addEnquiryFormFields.priceenquiry.config.name, priceData);
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

  const onSubmit = handleSubmit((enquiryData): void => {
    let data: any = { ...cleanupObject(enquiryData) };

    if (data.companyID) {
      data.companyID = +data.companyID["value"];
    }
    if (data.financialYear) {
      data.financialYear = "" + data.financialYear["value"];
    }
    if (data.sourceID) {
      data.sourceID = +data.sourceID["value"];
    }
    if (data.cityId) {
      data.cityId = data.cityId["value"];
    }
    if (data.stateId) {
      data.stateId = data.stateId["value"];
    }
    if (data.countryId) {
      data.countryId = data.countryId["value"];
    }
    if (data.typeofEnquiry) {
      data.typeofEnquiry = "" + data.typeofEnquiry["value"];
    }
    if (data.serviceTypeID) {
      data.serviceTypeID = +data.serviceTypeID["value"];
    }
    if (data.pmtstatus) {
      data.pmtstatus = "" + data.pmtstatus["value"];
    }
    if (data.enqStatusID) {
      data.enqStatusID = +data.enqStatusID["value"];
    }
    if (data.clientID) {
      data.clientID = +data.clientID["value"];
    }
    if (data.actualBuyerId) {
      data.actualBuyerId = +data.actualBuyerId["value"];
    }
    if (data.localSourceId) {
      data.localSourceId = data.localSourceId["value"];
    }
    if (data.fYear) {
      data.fYear = data.fYear["value"];
    }
    data["bulk_enquiry_id"] = 0;
    delete data.svisit;
    delete data.clientidenquiry;
    // console.log(data);
    if (params.id && data) {
      updateEnquiry({ id: params.id, ...data });
    } else {
      addEnquiry(data);
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
                config={addEnquiryFormFields.companyenquiry}
                onChange={companyOnChangeHandler}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.yearenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.refnoenquiry}
              />
              <small className="enquirynote text-right">
                <InputWithText config={addEnquiryFormFields.refnote.config} />
              </small>
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.sourceenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.givenaddressEnquiry}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.cityenquiry}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.stateenquiry}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.countryenquiry}
                onChange={onCountryChangeHandler}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.zipenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.telnoenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.faxnoenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.emailenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.websiteenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.contactenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.designationenquiry}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.clientrefenquiry}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.clientenquiry}
                onChange={onClientChangeHandler}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.requestnoenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.clientIdenquiry}
              />
              <Link to={""} className="card-title">
                <InputWithText
                  config={addEnquiryFormFields.actualbuyeraddnote.config}
                />
              </Link>
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.actualbureyenquiry}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.servicetype}
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
                config={addEnquiryFormFields.priceenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.givenname}
              />
              <NewDatePicker
                errors={errors}
                register={register}
                config={addEnquiryFormFields.recdon}
              />
              <NewDatePicker
                errors={errors}
                register={register}
                config={addEnquiryFormFields.dueon}
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
                config={addEnquiryFormFields.localsourceenquiry}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.printstatus}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.enqstatus}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addEnquiryFormFields.svisit}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.notesforenquiry}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.notesforadj}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.instructionenquiry}
              />
            </div>
            <div className="col-md-3 col-xs-12">
              <div className="row">
                {/* <div className="col-md-8 col-xs-12 text-right">
                      <Link to={""} className="card-title">
                        <InputWithText
                          config={
                            addEnquiryFormFields.actualbuyeraddnote
                          }
                        />
                      </Link>
                    </div> */}
                {/* <div className="col-md-4 col-xs-12 text-right">
                      <i className="fa fa-refresh"></i>
                    </div> */}
              </div>
              {/* <NewInput errors={errors}
                  register={register} config={addEnquiryFormFields.priceenquiry} /> */}
            </div>
            <div className="col-md-6 col-xs-12">
              {!isFetching && <Table config={tableConfig.config}></Table>}
            </div>
            <div className="card-title">
              <InputWithText
                config={addEnquiryFormFields.discountcommissionnote.config}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.disenquiry}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.discountenquiry}
              />
            </div>
            <div className="col-3">
              <NewInput
                errors={errors}
                register={register}
                config={addEnquiryFormFields.adjustenquiry}
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
                config={addEnquiryFormFields.commenquiry}
              />
            </div>
            <div className="card-title col-12">
              <InputWithText
                config={addEnquiryFormFields.discounttypenote.config}
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
