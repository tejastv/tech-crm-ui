import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  ActionButtons,
  BorderLayout,
  Card,
  Checkbox,
  Input,
  Radio,
  Select,
  DivLayout,
  Options,
} from "@shared/index";
import {
  addClientFormFields,
  useCityApiCallHook,
  useClientApiCallHook,
  useClientGroupApiCallHook,
  useCountryApiCallHook,
  useCurrencyApiCallHook,
  useExecutiveApiCallHook,
  useSegmentApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { selectOptionsMaker, cleanupObject } from "@utils/index";

export const AddUpdateClient: React.FC = () => {
  const methods = useForm();
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

  const [stateCode, setStateCode] = useState<number>();
  const [clientCode, setClientCode] = useState<number>();
  const { getCity } = useCityApiCallHook();
  const { data: cityData } = getCity();
  const { getState } = useStateApiCallHook();
  const { data: stateData } = getState();
  const { getCountry } = useCountryApiCallHook();
  const { data: countryData } = getCountry();
  const { getClient } = useClientApiCallHook();
  const { data: clientData } = getClient();
  const { getCurrency } = useCurrencyApiCallHook();
  const { data: currencyData } = getCurrency();
  const { getExecutive } = useExecutiveApiCallHook();
  const { data: executiveData } = getExecutive();
  const { getClientGroup } = useClientGroupApiCallHook();
  const { data: clientGroupData } = getClientGroup();
  const { getSegment } = useSegmentApiCallHook();
  const { data: segmentData } = getSegment();

  if (cityData) {
    addClientFormFields.cityClient.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  if (stateData) {
    addClientFormFields.stateClient.config.options = selectOptionsMaker(
      stateData,
      "stateId",
      "state"
    );
  }

  if (countryData) {
    addClientFormFields.countryClient.config.options = selectOptionsMaker(
      countryData,
      "countryId",
      "countryName"
    );
  }

  if (clientData) {
    addClientFormFields.clientIdSelect.config.options = selectOptionsMaker(
      clientData,
      "clientID",
      "clientName"
    );
  }

  if (currencyData) {
    addClientFormFields.clientCurrencey.config.options = selectOptionsMaker(
      currencyData,
      "currencyId",
      "currencyInWord"
    );
  }

  if (executiveData) {
    addClientFormFields.executive.config.options = selectOptionsMaker(
      executiveData,
      "executiveID",
      "executive"
    );
  }

  if (clientGroupData) {
    addClientFormFields.groupClient.config.options = selectOptionsMaker(
      clientGroupData,
      "groupId",
      "groupName"
    );
  }

  if (segmentData) {
    addClientFormFields.segmentClient.config.options = selectOptionsMaker(
      segmentData,
      "segmentId",
      "segmentName"
    );
  }

  const crDays: Array<Options> = [
    {
      label: "0",
      value: 0,
    },
    {
      label: "15",
      value: 15,
    },
    {
      label: "30",
      value: 30,
    },
    {
      label: "45",
      value: 45,
    },
    {
      label: "60",
      value: 60,
    },
    {
      label: "522",
      value: 522,
    },
  ];

  if (crDays) {
    addClientFormFields.crDay.config.options = crDays;
  }

  const getStateCode = (data: any) => setStateCode(data ? data.value : null);
  const getClientCode = (data: any) => setClientCode(data ? data.value : null);

  addClientFormFields.statecodeClient.config.setData = stateCode;
  addClientFormFields.id.config.setData = clientCode;

  const onSubmit = methods.handleSubmit((clientData): void => {
    let data: any = { ...cleanupObject(clientData) };
    if (data.stateID) {
      data.stateID = data.stateID.value;
    }
    if (data.countryID) {
      data.countryID = data.countryID.value;
    }
    if (data.cityID) {
      data.cityID = data.cityID.value;
    }
    if (data.clientId) {
      data.clientId = data.clientId.value;
    }
    if (data.currencyID) {
      data.currencyID = data.currencyID.value;
    }
    if (data.executive_id) {
      data.executive_id = data.executive_id.value;
    }
    if (data.segmentId) {
      data.segmentId = data.segmentId.value;
    }
    if (data.groupId) {
      data.groupId = data.groupId.value;
    }
    if (data.crDays) {
      data.crDays = data.crDays.value;
    }
    delete data.clientCode;
    delete data.stateCode;

    console.log("value", data);
  });

  return (
    <>
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
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={addClientFormFields.clientName.config} />
                    <Radio config={addClientFormFields.clientGst.config} />
                    <Input config={addClientFormFields.gstn.config} />
                    <Input config={addClientFormFields.addressClient.config} />
                    <Input config={addClientFormFields.telnoClient.config} />
                    <Input config={addClientFormFields.faxnoClient.config} />
                    <Input config={addClientFormFields.emailClient.config} />
                    <Input config={addClientFormFields.websiteClient.config} />
                    <Input config={addClientFormFields.contactClient.config} />
                    <Input
                      config={addClientFormFields.designationClient.config}
                    />
                    <Select config={addClientFormFields.cityClient.config} />
                    <Input config={addClientFormFields.zipClient.config} />
                    {/* <div className="row "> */}
                    {/* <div className="col-md-5"> */}
                    <Select
                      config={addClientFormFields.stateClient.config}
                      onChangeHandler={getStateCode}
                    />
                    {/* </div> */}
                    {/* </div> */}
                    <Input
                      config={addClientFormFields.statecodeClient.config}
                    />
                    <Select config={addClientFormFields.countryClient.config} />
                    {/* <h6 className="card-title m-t-20 md-2"> */}
                    <DivLayout
                      heading={cardConfig.formclieckUpdateConfig.heading}
                    />
                    {/* </h6> */}
                    <Select config={addClientFormFields.crDay.config} />
                    <Checkbox
                      config={addClientFormFields.billonactual.config}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={addClientFormFields.id.config} />
                    <Select
                      config={addClientFormFields.clientIdSelect.config}
                      onChangeHandler={getClientCode}
                    />
                    <Select
                      config={addClientFormFields.clientCurrencey.config}
                    />
                    <Select config={addClientFormFields.executive.config} />
                    <Input config={addClientFormFields.instuction.config} />
                    <Select config={addClientFormFields.groupClient.config} />
                    <Select config={addClientFormFields.segmentClient.config} />
                    <Input config={addClientFormFields.remarks.config} />
                    <Radio config={addClientFormFields.monthlyIvoice.config} />
                    <Checkbox config={addClientFormFields.osemail.config} />
                    {/* <h6 className="card-title m-t-20"> */}
                    <DivLayout heading={cardConfig.formAdjustConfig.heading} />
                    {/* </h6> */}
                    <Radio config={addClientFormFields.discount.config} />
                    <Input config={addClientFormFields.discountBlank.config} />
                    <Input config={addClientFormFields.toAdjust.config} />
                    <Input config={addClientFormFields.baltoAdjust.config} />
                    <Input config={addClientFormFields.adjustenquiry.config} />
                    {/* <h6 className="card-title m-t-20"> */}
                    <DivLayout
                      heading={cardConfig.formAdjustProformaConfig.heading}
                    />
                    {/* </h6> */}
                    <Input
                      config={addClientFormFields.toAdjustproforma.config}
                    />
                    <Input
                      config={
                        addClientFormFields.baltoAdjustproformaproforma.config
                      }
                    />
                    <Input
                      config={addClientFormFields.adjustenquiryproforma.config}
                    />
                  </div>
                </div>
              </div>
            </BorderLayout>
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons />
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
