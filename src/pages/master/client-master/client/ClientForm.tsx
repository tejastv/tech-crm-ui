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
} from "@master/index";

import {
  cleanupObject,
  returnFormatedObjectElseEmptyArray,
  returnObjectBasedOnID,
} from "@utils/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";

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

  // city api call
  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    clientFormFields.cityClient.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData && Object.values(stateData).length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    clientFormFields.stateClient.config.options = options;
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
    clientFormFields.countryClient.config.options = options;
  }

  // CreditDays api call
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
      setCreditOptions(creditDaysData);
    }
  }, [creditDaysData?.length]);

  if (creditOptions?.length) {
    let options = selectOptionsMaker(
      creditOptions,
      "creditPeriodId",
      "creditPeriod"
    );
    clientFormFields.crDay.config.options = options;
  }

  // currency api call
  const { data: currencyData } = getCurrency();

  useEffect(() => {
    if (currencyData) {
      setCurrencyOptions(Object.values(currencyData));
    }
  }, [currencyData?.length]);

  if (currencyOptions?.length) {
    let options = selectOptionsMaker(
      currencyOptions,
      "currencyId",
      "currencyType"
    );
    clientFormFields.clientCurrencey.config.options = options;
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
      "executiveId",
      "executive"
    );
    clientFormFields.executive.config.options = options;
  }

  // ClientGroup api call
  const { data: clientGroupData } = getClientGroup();

  useEffect(() => {
    if (clientGroupData) {
      setClientGroupOptions(Object.values(clientGroupData));
    }
  }, [clientGroupData?.length]);

  if (clientGroupOptions?.length) {
    let options = selectOptionsMaker(
      clientGroupOptions,
      "groupId",
      "groupName"
    );
    clientFormFields.groupClient.config.options = options;
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
    clientFormFields.segmentClient.config.options = options;
  }

  const { data: clientMasterData } = getClientData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    if (clientMasterData) {
      let clonedClientMasterData = { ...clientMasterData };
      if (cityOptions?.length) {
        console.log(clientMasterData.cityId, cityOptions);

        let data = returnFormatedObjectElseEmptyArray(
          clientMasterData.cityId,
          clientMasterData,
          "cityId",
          "cityName"
        );
        console.log(data);
        if (data.length > 0) {
          clonedClientMasterData.cityId = data[0];
        }
      }
      if (stateOptions?.length) {
        let data = returnFormatedObjectElseEmptyArray(
          clientMasterData.stateId,
          clientMasterData,
          "stateId",
          "stateName"
        );
        if (data.length > 0) {
          clonedClientMasterData.stateId = data[0];
        }
      }
      if (countryOptions?.length) {
        let data = returnFormatedObjectElseEmptyArray(
          clientMasterData.countryId,
          clientMasterData,
          "countryId",
          "countryName"
        );
        if (data.length > 0) {
          clonedClientMasterData.countryId = data[0];
        }
      }
      if (currencyOptions?.length) {
        let data = returnFormatedObjectElseEmptyArray(
          clientMasterData.currencyId,
          clientMasterData,
          "currencyId",
          "currencyName"
        );
        if (data.length > 0) {
          clonedClientMasterData.currencyId = data[0];
        }
      }
      if (executiveOptions?.length) {
        let id = clientMasterData?.executiveId;
        let data: any = returnObjectBasedOnID(
          executiveOptions,
          "executiveId",
          id,
          "executiveId",
          "executive"
        );
        if (data.length > 0) {
          clonedClientMasterData.executiveId = {
            label: data[0].label,
            value: data[0].value,
          };
        }
      }
      if (clientGroupOptions?.length) {
        let data = returnFormatedObjectElseEmptyArray(
          clientMasterData.groupId,
          clientMasterData,
          "groupId",
          "groupName"
        );
        if (data.length > 0) {
          clonedClientMasterData.groupId = data[0];
        }
      }
      if (executiveOptions?.length) {
        let data = returnFormatedObjectElseEmptyArray(
          clientMasterData.segmentId,
          clientMasterData,
          "segmentId",
          "segmentName"
        );
        if (data.length > 0) {
          clonedClientMasterData.segmentId = data[0];
        }
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
        if (data.length > 0) {
          clonedClientMasterData.crDays = {
            label: data[0].label,
            value: data[0].value,
          };
        }
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
      if (clientFormFields.statecodeClient.config.name === "stateCode") {
        setValue(
          clientFormFields.statecodeClient.config.name,
          selectedOption.data.stateCodeN
        );
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
          )
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
          )
        );
      }
    }
  };

  const onSubmit = handleSubmit((clientData) => {
    let data: any = { ...cleanupObject(clientData) };
    delete data.state;
    data["ourRefNo"] = "String";
    data["adjustFromDate"] = new Date().toISOString();
    data["autoSendOutstanding"] = "Y";
    data["enteredBy"] = 0;
    data["individualReport"] = "1";
    data["locked"] = "Y";
    data["nickName"] = "String";
    data["staxApplicable"] = "Y";
    data.adjustPerEnq = data.adjustPerEnq && parseFloat(data.adjustPerEnq);
    data.adjustPerEnqPI =
      data.adjustPerEnqPI && parseFloat(data.adjustPerEnqPI);
    data.balToAdjust = data.balToAdjust && parseFloat(data.balToAdjust);
    data.balToAdjustPI = data.balToAdjustPI && parseFloat(data.balToAdjustPI);
    data.discount = data.discount && parseFloat(data.discount);
    data.toAdjust = data.toAdjust && parseFloat(data.toAdjust);
    data.toAdjustPI = data.toAdjustPI && parseFloat(data.toAdjustPI);
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
    if (data.cityId) {
      data.cityId = +data.cityId["value"];
    }
    if (data.stateId) {
      data.stateId = +data.stateId["value"];
    }
    if (data.countryId) {
      data.countryId = +data.countryId["value"];
    }
    if (data.crDays) {
      data.crDays = +data.crDays["value"];
    }
    if (data.currencyId) {
      data.currencyId = +data.currencyId["value"];
    }
    if (data.executiveId) {
      data.executiveId = +data.executiveId["value"];
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
                  onChange={handleSelectChange}
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
