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
  AddUpdateClientType,
  CityType,
  ClientGroupType,
  CountryType,
  CreditDaysType,
  CurrencyType,
  ExecutiveType,
  SegmentType,
  StateType,
  addClientFormFields,
  useCityApiCallHook,
  useClientApiCallHook,
  useClientGroupApiCallHook,
  useCountryApiCallHook,
  useCreditDaysApiCallHook,
  useCurrencyApiCallHook,
  useExecutiveApiCallHook,
  useSegmentApiCallHook,
  useStateApiCallHook,
} from "@master/index";

import {
  cleanupObject,
  returnFormatedObjectElseEmptyArray,
  returnObjectBasedOnID,
} from "@utils/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";

export const AddUpdateClient: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<AddUpdateClientType>();
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
    if (addClientFormFields.monthlyIvoice.config.name === "monthlyInvoice") {
      setValue(addClientFormFields.monthlyIvoice.config.name, "N");
    }
    if (addClientFormFields.osemail.config.name === "osListPrInteger") {
      setValue(addClientFormFields.osemail.config.name, "N");
    }
  }, []);

  // city api call
  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData?.length && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    addClientFormFields.cityClient.config.options = options;
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
    addClientFormFields.stateClient.config.options = options;
  }

  // country api call
  const { data: countryData } = getCountry();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(Object.values(countryData));
    }
  }, [countryData && Object.values(countryData).length]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    addClientFormFields.countryClient.config.options = options;
  }

  // CreditDays api call
  const { data: creditDaysData } = getCreditDays();
  // if (creditDaysData) {
  //   const defaultCrDayOption = addClientFormFields.crDay.config.options.find(
  //     (option) => option.label.toString() === "30"
  //   );

  //   if (defaultCrDayOption) {
  //     addClientFormFields.crDay.config.setData = defaultCrDayOption;
  //   }
  // }
  useEffect(() => {
    if (creditDaysData) {
      setCreditOptions(creditDaysData);
    }
  }, [creditDaysData?.length]);

  if (creditOptions?.length) {
    let options = selectOptionsMaker(
      creditOptions,
      "creditPeriodId",
      "creditPeriod"
    );
    addClientFormFields.crDay.config.options = options;
  }

  // currency api call
  const { data: currencyData } = getCurrency();

  useEffect(() => {
    if (currencyData) {
      setCurrencyOptions(currencyData);
    }
  }, [currencyData?.length]);

  if (currencyOptions?.length) {
    let options = selectOptionsMaker(
      currencyOptions,
      "currencyId",
      "currencyType"
    );
    addClientFormFields.clientCurrencey.config.options = options;
  }

  // Executive api call
  const { data: executiveData } = getExecutive();

  useEffect(() => {
    if (executiveData) {
      setExecutiveOptions(executiveData);
    }
  }, [executiveData?.length]);

  if (executiveOptions?.length) {
    let options = selectOptionsMaker(
      executiveOptions,
      "executiveID",
      "executive"
    );
    addClientFormFields.executive.config.options = options;
  }

  // ClientGroup api call
  const { data: clientGroupData } = getClientGroup();

  useEffect(() => {
    if (clientGroupData) {
      setClientGroupOptions(clientGroupData);
    }
  }, [clientGroupData?.length]);

  if (clientGroupOptions?.length) {
    let options = selectOptionsMaker(
      clientGroupOptions,
      "groupId",
      "groupName"
    );
    addClientFormFields.groupClient.config.options = options;
  }

  // Segment api call
  const { data: segmentData } = getSegment();

  useEffect(() => {
    if (segmentData) {
      setSegmentOptions(segmentData);
    }
  }, [segmentData?.length]);

  if (segmentOptions?.length) {
    let options = selectOptionsMaker(
      segmentOptions,
      "segmentId",
      "segmentName"
    );
    addClientFormFields.segmentClient.config.options = options;
  }

  const { data: clientMasterData } = getClientData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    if (clientMasterData) {
      let clonedClientMasterData = { ...clientMasterData };
      if (cityOptions?.length) {
        clonedClientMasterData.cityID = returnFormatedObjectElseEmptyArray(
          clientMasterData.cityID,
          clientMasterData,
          "cityID",
          "cityName"
        );
      }
      if (stateOptions?.length) {
        clonedClientMasterData.stateID = returnFormatedObjectElseEmptyArray(
          clientMasterData.stateID,
          clientMasterData,
          "stateID",
          "stateName"
        );
      }
      if (countryOptions?.length) {
        clonedClientMasterData.countryID = returnFormatedObjectElseEmptyArray(
          clientMasterData.countryID,
          clientMasterData,
          "countryID",
          "countryName"
        );
      }
      if (currencyOptions?.length) {
        clonedClientMasterData.currencyID = returnFormatedObjectElseEmptyArray(
          clientMasterData.currencyID,
          clientMasterData,
          "currencyID",
          "currencyName"
        );
      }
      if (executiveOptions?.length) {
        let id = clientMasterData?.executive_id;
        let data: any = returnObjectBasedOnID(
          executiveOptions,
          "executiveID",
          id,
          "executiveID",
          "executive"
        );
        data.length
          ? (clonedClientMasterData.executive_id = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (clientGroupOptions?.length) {
        clonedClientMasterData.groupId = returnFormatedObjectElseEmptyArray(
          clientMasterData.groupId,
          clientMasterData,
          "groupId",
          "groupName"
        );
      }
      if (executiveOptions?.length) {
        clonedClientMasterData.segmentId = returnFormatedObjectElseEmptyArray(
          clientMasterData.segmentId,
          clientMasterData,
          "segmentId",
          "segmentName"
        );
      }
      clonedClientMasterData.billONActualBuyer =
        clientMasterData.billONActualBuyer === "Y" ? true : false;
      if (creditOptions?.length) {
        let id = clientMasterData?.crDays;
        let data: any = returnObjectBasedOnID(
          creditOptions,
          "creditPeriodId",
          id,
          "creditPeriodId",
          "creditPeriod"
        );
        data.length
          ? (clonedClientMasterData.crDays = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      // console.log(clonedClientMasterData);
      reset(clonedClientMasterData);
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

  useEffect(() => {
    reset();
  }, [!params.id]);

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      if (addClientFormFields.statecodeClient.config.name === "stateCode") {
        setValue(
          addClientFormFields.statecodeClient.config.name,
          selectedOption.data.stateCodeN
        );
      }
    }
  };

  const handleSelectCity = (selectedOption: any) => {
    if (selectedOption) {
      if (addClientFormFields.stateClient.config.name === "stateID") {
        setValue(
          addClientFormFields.stateClient.config.name,
          returnFormatedObjectElseEmptyArray(
            selectedOption.data.stateId,
            selectedOption.data,
            "stateId",
            "stateName"
          )
        );
      }
      if (addClientFormFields.countryClient.config.name === "countryID") {
        setValue(
          addClientFormFields.countryClient.config.name,
          returnFormatedObjectElseEmptyArray(
            selectedOption.data.countryId,
            selectedOption.data,
            "countryId",
            "countryName"
          )
        );
      }
    }
  };

  const onSubmit = handleSubmit((clientData) => {
    let data: any = { ...cleanupObject(clientData) };
    delete data.state;
    data["ourRefNo"] = "String";
    data["adjustfromDate"] = new Date().toISOString();
    data["autoSendOutstanding"] = "Y";
    data["enteredBy"] = 0;
    data["individualReport"] = "1";
    data["locked"] = "Y";
    data["nickName"] = "String";
    data["staxApplicable"] = "Y";
    data.adjustPerEnq = data.adjustPerEnq && parseFloat(data.adjustPerEnq);
    data.adjustPerEnq_PI =
      data.adjustPerEnq_PI && parseFloat(data.adjustPerEnq_PI);
    data.balToAdjust = data.balToAdjust && parseFloat(data.balToAdjust);
    data.balToAdjust_PI =
      data.balToAdjust_PI && parseFloat(data.balToAdjust_PI);
    data.discount = data.discount && parseFloat(data.discount);
    data.toAdjust = data.toAdjust && parseFloat(data.toAdjust);
    data.toAdjust_PI = data.toAdjust_PI && parseFloat(data.toAdjust_PI);
    data.disType = data.disType && data.disType.toString();
    data.gstYN = data.gstYN && data.gstYN.toString();
    data.monthlyInvoice = data.monthlyInvoice && data.monthlyInvoice.toString();
    data.osListPrInteger =
      data.osListPrInteger && data.osListPrInteger.toString();
    if (eval(data.billONActualBuyer)) {
      data.billONActualBuyer = "Y";
    } else {
      data.billONActualBuyer = "N";
    }
    if (data.cityID) {
      data.cityID = +data.cityID["value"];
    }
    if (data.stateID) {
      data.stateID = +data.stateID["value"];
    }
    if (data.countryID) {
      data.countryID = +data.countryID["value"];
    }
    if (data.crDays) {
      data.crDays = +data.crDays["value"];
    }
    if (data.currencyID) {
      data.currencyID = +data.currencyID["value"];
    }
    if (data.executive_id) {
      data.executive_id = +data.executive_id["value"];
    }
    if (data.groupId) {
      data.groupId = +data.groupId["value"];
    }
    if (data.segmentId) {
      data.segmentId = +data.segmentId["value"];
    }
    console.log(data);
    if (params.id && data) {
      updateClient({ id: params.id, ...data });
      console.log(data);
    } else {
      addClient(data);
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
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.clientName}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.clientGst}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.gstn}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.addressClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.cityClient}
                  onChange={handleSelectCity}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.zipClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.stateClient}
                  onChange={handleSelectChange}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.statecodeClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.countryClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.telnoClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.faxnoClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.emailClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.websiteClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.contactClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.designationClient}
                />
                <DivLayout
                  heading={cardConfig.formclieckUpdateConfig.heading}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.crDay}
                />
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.billonactual}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                {/* <NewInput errors={errors}
                    register={register} config={addClientFormFields.id} />
                    <NewSelect errors={errors}
                    register={register}
                    control={control}
                      config={addClientFormFields.clientIdSelect}
                    /> */}
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.clientCurrencey}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.executive}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.instuction}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.groupClient}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.segmentClient}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.remarks}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.monthlyIvoice}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.osemail}
                />
                {/* <h6 className="card-title m-t-20"> */}
                <DivLayout heading={cardConfig.formAdjustConfig.heading} />
                {/* </h6> */}
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientFormFields.discount}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.discountBlank}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.toAdjust}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.baltoAdjust}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addClientFormFields.adjustenquiry}
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
