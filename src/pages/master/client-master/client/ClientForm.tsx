import {
  ActionButtons,
  BorderLayout,
  Card,
  NewCheckbox,
  DivLayout,
  NewInput,
  NewRadio,
  NewSelect,
} from "@shared/index";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ClientFormType,
  CityType,
  ClientGroupType,
  CountryType,
  CreditDaysType,
  CurrencyType,
  ExecutiveType,
  SegmentType,
  StateType,
  clientFormFields,
  useCityApiCallHook,
  useClientApiCallHook,
  useClientGroupApiCallHook,
  useCountryApiCallHook,
  useCreditDaysApiCallHook,
  useCurrencyApiCallHook,
  useExecutiveApiCallHook,
  useSegmentApiCallHook,
  useStateApiCallHook,
  ClientType,
} from "@master/index";

import {
  cleanupObject,
  returnFormatedObjectElseEmptyArray,
} from "@utils/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import _ from "lodash";

export const ClientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<ClientFormType>();
  const params = useParams();

  const { addClientMutation, updateClientMutation, getClientData } =
    useClientApiCallHook();
  const { mutate: addClient } = addClientMutation();
  const { mutate: updateClient } = updateClientMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getCreditDays } = useCreditDaysApiCallHook();
  const { getCurrency } = useCurrencyApiCallHook();
  const { getExecutive } = useExecutiveApiCallHook();
  const { getClientGroup } = useClientGroupApiCallHook();
  const { getSegment } = useSegmentApiCallHook();

  const [cityOptions, setCityOptions] = useState<CityType[]>();
  const [stateOptions, setStateOptions] = useState<StateType[]>();
  const [countryOptions, setCountryOptions] = useState<CountryType[]>();
  const [currencyOptions, setCurrencyOptions] = useState<CurrencyType[]>();
  const [creditOptions, setCreditOptions] = useState<CreditDaysType[]>();
  const [executiveOptions, setExecutiveOptions] = useState<ExecutiveType[]>();
  const [clientGroupOptions, setClientGroupOptions] =
    useState<ClientGroupType[]>();
  const [segmentOptions, setSegmentOptions] = useState<SegmentType[]>();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Client Master",
      heading: "Client Details",
    },
    formclieckUpdateConfig: {
      heading: "Click to Enter / Update / View Price List",
    },
    formAdjustConfig: {
      heading: "Adjust From",
    },
    formAdjustProformaConfig: {
      heading: "Adjust from Proforma",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  useEffect(() => {
    if (clientFormFields.monthlyIvoice.config.name === "monthlyInvoice") {
      setValue(clientFormFields.monthlyIvoice.config.name, "N");
    }
    if (clientFormFields.osemail.config.name === "osListPrInteger") {
      setValue(clientFormFields.osemail.config.name, "N");
    }
  }, []);

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(_.orderBy(Object.values(cityData), ["cityName"], ["asc"]));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    clientFormFields.cityClient.config.options = options;
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
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    clientFormFields.stateClient.config.options = options;
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
    clientFormFields.countryClient.config.options = options;
  }

  const { data: creditDaysData } = getCreditDays();
  // if (creditDaysData) {
  //   const defaultCrDayOption = clientFormFields.crDay.config.options.find(
  //     (option) => option.label.toString() === "30"
  //   );

  //   if (defaultCrDayOption) {
  //     clientFormFields.crDay.config.setData = defaultCrDayOption;
  //   }
  // }
  useEffect(() => {
    if (creditDaysData) {
      setCreditOptions(
        _.orderBy(Object.values(creditDaysData), ["creditPeriod"], ["asc"])
      );
    }
  }, [creditDaysData]);

  if (creditOptions?.length) {
    let options = selectOptionsMaker(
      creditOptions,
      "creditPeriodId",
      "creditPeriod"
    );
    clientFormFields.crDay.config.options = options;
  }

  const { data: currencyData } = getCurrency();

  useEffect(() => {
    if (currencyData) {
      setCurrencyOptions(
        _.orderBy(Object.values(currencyData), ["currencyType"], ["asc"])
      );
    }
  }, [currencyData]);

  if (currencyOptions?.length) {
    let options = selectOptionsMaker(
      currencyOptions,
      "currencyId",
      "currencyType"
    );
    clientFormFields.clientCurrencey.config.options = options;
  }

  const { data: executiveData } = getExecutive();

  useEffect(() => {
    if (executiveData) {
      setExecutiveOptions(
        _.orderBy(Object.values(executiveData), ["executive"], ["asc"])
      );
    }
  }, [executiveData]);

  if (executiveOptions?.length) {
    let options = selectOptionsMaker(
      executiveOptions,
      "executiveId",
      "executive"
    );
    clientFormFields.executive.config.options = options;
  }

  const { data: clientGroupData } = getClientGroup();

  useEffect(() => {
    if (clientGroupData) {
      setClientGroupOptions(
        _.orderBy(Object.values(clientGroupData), ["groupName"], ["asc"])
      );
    }
  }, [clientGroupData]);

  if (clientGroupOptions?.length) {
    let options = selectOptionsMaker(
      clientGroupOptions,
      "groupId",
      "groupName"
    );
    clientFormFields.groupClient.config.options = options;
  }

  const { data: segmentData } = getSegment();

  useEffect(() => {
    if (segmentData) {
      setSegmentOptions(
        _.orderBy(Object.values(segmentData), ["segmentName"], ["asc"])
      );
    }
  }, [segmentData]);

  if (segmentOptions?.length) {
    let options = selectOptionsMaker(
      segmentOptions,
      "segmentId",
      "segmentName"
    );
    clientFormFields.segmentClient.config.options = options;
  }

  const { data: clientMasterData } = getClientData(
    "" + params.id,
    params.id != undefined
  );

  const mapClientToClientForm = (clientData: ClientType) => {
    let clientFormData: Partial<ClientFormType> = {
      ourRefNo: clientData.ourRefNo,
      clientName: clientData.clientName,
      address: clientData.address,
      zip: clientData.zip,
      phone: clientData.phone,
      fax: clientData.fax,
      website: clientData.website,
      contactPerson: clientData.contactPerson,
      designation: clientData.designation,
      nickName: clientData.nickName,
      osListPrInteger: clientData.osListPrInteger,
      monthlyInvoice: clientData.monthlyInvoice,
      enteredBy: clientData.enteredBy,
      enteredDate: clientData.enteredDate,
      modifiedBy: clientData.modifiedBy,
      modifiedDate: clientData.modifiedDate,
      priorityId: clientData.priorityId,
      instruction: clientData.instruction,
      disType: clientData.disType,
      discount: clientData.discount,
      toAdjust: clientData.toAdjust,
      balToAdjust: clientData.balToAdjust,
      adjustPerEnq: clientData.adjustPerEnq,
      individualReport: clientData.individualReport,
      staxApplicable: clientData.staxApplicable,
      remarks: clientData.remarks,
      adjustFromDate: clientData.adjustFromDate,
      toAdjustPI: clientData.toAdjustPI,
      balToAdjustPI: clientData.balToAdjustPI,
      adjustPerEnqPI: clientData.adjustPerEnqPI,
      gstn: clientData.gstn,
      gstYN: clientData.gstYN,
      billONActualBuyer: clientData.billONActualBuyer ? true : false,
      autoSendOutstanding: clientData.autoSendOutstanding,
      locked: clientData.locked,
      email: clientData.email,
      stateCode: clientData.stateCode,
    };
    if (cityData && clientData?.cityId) {
      let data = cityData[clientData.cityId];
      data &&
        (clientFormData.cityId = {
          label: data.cityName,
          value: data.cityId,
        });
    }
    if (stateData && clientData?.stateId) {
      let data = stateData[clientData.stateId];
      data &&
        (clientFormData.stateId = {
          label: data.stateName,
          value: data.stateId,
        }),
        stateChangeHandler(data.stateCodeN);
    }
    if (countryData && clientData?.countryId) {
      let data = countryData[clientData.countryId];
      data &&
        (clientFormData.countryId = {
          label: data.countryName,
          value: data.countryId,
        });
    }
    if (currencyData && clientData?.currencyId) {
      let data = currencyData[clientData.currencyId];
      data &&
        (clientFormData.currencyId = {
          label: data.currencyType,
          value: data.currencyId,
        });
    }
    if (executiveData && clientData?.executiveId) {
      let data = executiveData[clientData.executiveId];
      data &&
        (clientFormData.executiveId = {
          label: data.executive,
          value: data.executiveId,
        });
    }
    if (clientGroupData && clientData?.groupId) {
      let data = clientGroupData[clientData.groupId];
      data &&
        (clientFormData.groupId = {
          label: data.groupName,
          value: data.groupId,
        });
    }
    if (segmentData && clientData?.segmentId) {
      let data = segmentData[clientData.segmentId];
      data &&
        (clientFormData.segmentId = {
          label: data.segmentName,
          value: data.segmentId,
        });
    }
    if (creditDaysData && clientData?.crDays) {
      let data = creditDaysData[clientData.crDays];
      data &&
        (clientFormData.crDays = {
          label: data.creditPeriod,
          value: data.creditPeriodId,
        });
    }
    return clientFormData;
  };

  const mapClientFormToClientReq = (clientFormData: ClientFormType) => {
    let clientReqData: Partial<ClientType> = {
      ourRefNo: "String",
      clientName: clientFormData.clientName,
      address: clientFormData.address,
      zip: clientFormData.zip,
      phone: clientFormData.phone,
      fax: clientFormData.fax,
      website: clientFormData.website,
      contactPerson: clientFormData.contactPerson,
      designation: clientFormData.designation,
      nickName: "String",
      osListPrInteger: clientFormData.osListPrInteger,
      monthlyInvoice: clientFormData.monthlyInvoice,
      enteredBy: 0,
      enteredDate: clientFormData.enteredDate,
      modifiedBy: clientFormData.modifiedBy,
      modifiedDate: clientFormData.modifiedDate,
      priorityId: clientFormData.priorityId,
      instruction: clientFormData.instruction,
      disType: clientFormData.disType,
      discount: clientFormData.discount,
      toAdjust: clientFormData.toAdjust,
      balToAdjust: clientFormData.balToAdjust,
      adjustPerEnq: clientFormData.adjustPerEnq,
      individualReport: "1",
      staxApplicable: "Y",
      remarks: clientFormData.remarks,
      adjustFromDate: new Date().toISOString(),
      toAdjustPI: clientFormData.toAdjustPI,
      balToAdjustPI: clientFormData.balToAdjustPI,
      adjustPerEnqPI: clientFormData.adjustPerEnqPI,
      gstn: clientFormData.gstn,
      gstYN: clientFormData.gstYN,
      billONActualBuyer: clientFormData.billONActualBuyer ? "Y" : "N",
      autoSendOutstanding: "Y",
      locked: "Y",
      email: clientFormData.email,
      //stateCode: clientFormData.stateCode,
    };
    if (cityData && clientFormData?.cityId) {
      clientReqData.cityId = clientFormData.cityId.value;
    }
    if (stateData && clientFormData?.stateId) {
      clientReqData.stateId = clientFormData.stateId.value;
    }
    if (countryData && clientFormData?.countryId) {
      clientReqData.countryId = clientFormData.countryId.value;
    }
    if (currencyData && clientFormData?.currencyId) {
      clientReqData.currencyId = clientFormData.currencyId.value;
    }
    if (clientGroupData && clientFormData?.groupId) {
      clientReqData.groupId = clientFormData.groupId.value;
    }
    if (creditDaysData && clientFormData?.crDays) {
      clientReqData.crDays = clientFormData.crDays.value;
    }
    if (creditDaysData && clientFormData?.segmentId) {
      clientReqData.segmentId = clientFormData.segmentId.value;
    }
    if (creditDaysData && clientFormData?.executiveId) {
      clientReqData.executiveId = clientFormData.executiveId.value;
    }
    return cleanupObject(clientReqData);
  };

  const stateChangeHandler = (stateCodeN: any) => {
    if (stateCodeN) {
      if (clientFormFields.statecodeClient.config.name === "stateCode") {
        setValue(clientFormFields.statecodeClient.config.name, stateCodeN, {
          shouldValidate: true,
        });
      }
    }
  };

  const handleSelectCity = (selectedOption: any) => {
    if (selectedOption) {
      if (clientFormFields.stateClient.config.name === "stateId") {
        setValue(
          clientFormFields.stateClient.config.name,
          returnFormatedObjectElseEmptyArray(
            selectedOption.data.stateId,
            selectedOption.data,
            "stateId",
            "stateName"
          )[0]
        );
      }
      if (clientFormFields.countryClient.config.name === "countryId") {
        setValue(
          clientFormFields.countryClient.config.name,
          returnFormatedObjectElseEmptyArray(
            selectedOption.data.countryId,
            selectedOption.data,
            "countryId",
            "countryName"
          )[0]
        );
      }
    }
  };

  useEffect(() => {
    if (params.id) {
      if (clientMasterData && Object.values(clientMasterData).length > 0) {
        reset(mapClientToClientForm(clientMasterData));
      }
    }
  }, [
    params.id,
    clientMasterData,
    cityOptions,
    stateOptions,
    countryOptions,
    creditOptions,
    currencyOptions,
    executiveOptions,
    clientGroupOptions,
    segmentOptions,
  ]);

  const onSubmit = handleSubmit((clientData) => {
    let reqObj: Partial<ClientType> = mapClientFormToClientReq(clientData);
    console.log(reqObj);
    if (params.id && reqObj) {
      updateClient({ id: +params.id, ...reqObj });
    } else {
      addClient(reqObj);
    }
  });

  // const myInlineStyles: React.CSSProperties = {
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   width: " 100%",
  //   color: "#000",
  //   height: " 100%",
  //   display: "block",
  // };

  return (
    <Card config={cardConfig.formLayoutConfig}>
      {/* <div style={myInlineStyles}></div> */}
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.clientName}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.clientGst}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.gstn}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.addressClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.cityClient}
                  onChange={handleSelectCity}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.zipClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.stateClient}
                  onChange={(data) => stateChangeHandler(data.data.stateCodeN)}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.statecodeClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.countryClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.telnoClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.faxnoClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.emailClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.websiteClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.contactClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.designationClient}
                />
                <DivLayout
                  heading={cardConfig.formclieckUpdateConfig.heading}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.crDay}
                />
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.billonactual}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                {/* <NewInput errors={errors}
                    register={register} config={clientFormFields.id} />
                    <NewSelect errors={errors}
                    register={register}
                    control={control}
                      config={clientFormFields.clientIdSelect}
                    /> */}
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.clientCurrencey}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.executive}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.instuction}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.groupClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.segmentClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.remarks}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.monthlyIvoice}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.osemail}
                />
                {/* <h6 className="card-title m-t-20"> */}
                <DivLayout heading={cardConfig.formAdjustConfig.heading} />
                {/* </h6> */}
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={clientFormFields.discount}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.discountBlank}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.toAdjust}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.baltoAdjust}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={clientFormFields.adjustenquiry}
                />
                {/* <h6 className="card-title m-t-20"> */}

                {/* </h6> */}
              </div>
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
