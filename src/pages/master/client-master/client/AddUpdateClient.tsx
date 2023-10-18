import {
  ActionButtons,
  BorderLayout,
  Card,
  Checkbox,
  DivLayout,
  Input,
  Radio,
  Select,
} from "@shared/index";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  AddUpdateClientType,
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

import { cleanupObject, returnObjectBasedOnID } from "@utils/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";

export const AddUpdateClient: React.FC = () => {
  const methods = useForm<AddUpdateClientType>();
  const params = useParams();
  const [stateCode, setStateCode] = useState();
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

  // city api call
  const { data: cityData } = getCity();
  if (cityData) {
    addClientFormFields.cityClient.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  // state api call
  const { data: stateData } = getState();
  if (stateData) {
    addClientFormFields.stateClient.config.options = selectOptionsMaker(
      stateData,
      "stateId",
      "state",
      true
    );
  }

  // country api call
  const { data: countryData } = getCountry();
  if (countryData) {
    addClientFormFields.countryClient.config.options = selectOptionsMaker(
      countryData,
      "countryId",
      "countryName"
    );
  }

  // CreditDays api call
  const { data: creditDaysData } = getCreditDays();
  if (creditDaysData) {
    addClientFormFields.crDay.config.options = selectOptionsMaker(
      creditDaysData,
      "creditPeriodId",
      "creditPeriod"
    );
  }

  // currency api call
  const { data: currencyData } = getCurrency();
  if (currencyData) {
    addClientFormFields.clientCurrencey.config.options = selectOptionsMaker(
      currencyData,
      "currencyId",
      "currencyType"
    );
  }

  // Executive api call
  const { data: executiveData } = getExecutive();
  if (executiveData) {
    addClientFormFields.executive.config.options = selectOptionsMaker(
      executiveData,
      "executiveID",
      "executive"
    );
  }

  // ClientGroup api call
  const { data: clientGroupData } = getClientGroup();
  if (clientGroupData) {
    addClientFormFields.groupClient.config.options = selectOptionsMaker(
      clientGroupData,
      "groupId",
      "groupName"
    );
  }

  // Segment api call
  const { data: segmentData } = getSegment();
  if (segmentData) {
    addClientFormFields.segmentClient.config.options = selectOptionsMaker(
      segmentData,
      "segmentId",
      "segmentName"
    );
  }

  const onSubmit = methods.handleSubmit((currencyData) => {
    let data: any = { ...cleanupObject(currencyData) };
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
    if (!data.billONActualBuyer) {
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
    } else {
      addClient(data);
    }
  });

  if (params.id) {
    const { data: clientMasterData } = getClientData(+params.id);
    if (clientMasterData) {
      if (cityData) {
        let id = clientMasterData?.cityID;
        let data: any = returnObjectBasedOnID(
          cityData,
          "id",
          id,
          "id",
          "cityName"
        );
        addClientFormFields.cityClient.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (stateData) {
        let id = clientMasterData?.stateID;
        let data: any = returnObjectBasedOnID(
          stateData,
          "stateId",
          id,
          "stateId",
          "state"
        );
        addClientFormFields.stateClient.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
        addClientFormFields.statecodeClient.config.setData = data.value;
      }
      if (countryData) {
        let id = clientMasterData?.countryID;
        let data: any = returnObjectBasedOnID(
          countryData,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        addClientFormFields.countryClient.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (creditDaysData) {
        let id = clientMasterData?.crDays;
        let data: any = returnObjectBasedOnID(
          creditDaysData,
          "creditPeriod",
          id,
          "creditPeriod",
          "creditPeriod"
        );
        addClientFormFields.cityClient.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (currencyData) {
        let id = clientMasterData?.currencyID;
        let data: any = returnObjectBasedOnID(
          currencyData,
          "currencyId",
          id,
          "currencyId",
          "currencyType"
        );
        addClientFormFields.clientCurrencey.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (executiveData) {
        let id = clientMasterData?.executive_id;
        let data: any = returnObjectBasedOnID(
          executiveData,
          "executiveID",
          id,
          "executiveID",
          "executive"
        );
        addClientFormFields.executive.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (clientGroupData) {
        let id = clientMasterData?.groupId;
        let data: any = returnObjectBasedOnID(
          clientGroupData,
          "groupId",
          id,
          "groupId",
          "groupName"
        );
        addClientFormFields.groupClient.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (segmentData) {
        let id = clientMasterData?.segmentId;
        let data: any = returnObjectBasedOnID(
          segmentData,
          "segmentId",
          id,
          "segmentId",
          "segmentName"
        );
        addClientFormFields.segmentClient.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }

      addClientFormFields.clientName.config.setData =
        clientMasterData.clientName;
      addClientFormFields.clientGst.config.setData = clientMasterData.gstYN;
      addClientFormFields.gstn.config.setData = clientMasterData.gstn;
      addClientFormFields.addressClient.config.setData =
        clientMasterData.address;
      addClientFormFields.telnoClient.config.setData = clientMasterData.phone;
      addClientFormFields.faxnoClient.config.setData = clientMasterData.fax;
      addClientFormFields.emailClient.config.setData = clientMasterData.email;
      addClientFormFields.websiteClient.config.setData =
        clientMasterData.website;
      addClientFormFields.contactClient.config.setData =
        clientMasterData.contactPerson;
      addClientFormFields.designationClient.config.setData =
        clientMasterData.designation;
      addClientFormFields.zipClient.config.setData = clientMasterData.zip;
      addClientFormFields.instuction.config.setData = clientMasterData.email;
      addClientFormFields.remarks.config.setData = clientMasterData.remarks;
      addClientFormFields.monthlyIvoice.config.setData =
        clientMasterData.monthlyInvoice;
      addClientFormFields.osemail.config.setData =
        clientMasterData.osListPrInteger;
      addClientFormFields.discount.config.setData = clientMasterData.disType;
      addClientFormFields.discountBlank.config.setData =
        clientMasterData.discount;
      addClientFormFields.toAdjust.config.setData = clientMasterData.toAdjust;
      addClientFormFields.baltoAdjust.config.setData =
        clientMasterData.balToAdjust;
      addClientFormFields.adjustenquiry.config.setData =
        clientMasterData.adjustPerEnq;
      addClientFormFields.toAdjustproforma.config.setData =
        clientMasterData.toAdjust_PI;
      addClientFormFields.billonactual.config.setData =
        clientMasterData.billONActualBuyer;
      addClientFormFields.baltoAdjustproformaproforma.config.setData =
        clientMasterData.balToAdjust_PI;
      addClientFormFields.adjustenquiryproforma.config.setData =
        clientMasterData.adjustPerEnq_PI;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      setStateCode(selectedOption.data.stateCodeN);
    }
  };

  addClientFormFields.statecodeClient.config.setData = stateCode;

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
                    <Select config={addClientFormFields.cityClient.config} />
                    <Input config={addClientFormFields.zipClient.config} />
  <Select config={addClientFormFields.stateClient.config}  onChangeHandler={handleSelectChange}  />
<Input
                      config={addClientFormFields.statecodeClient.config}
                    />
                    <Select config={addClientFormFields.countryClient.config} />
                    <Input config={addClientFormFields.telnoClient.config} />
                    <Input config={addClientFormFields.faxnoClient.config} />
                    <Input config={addClientFormFields.emailClient.config} />
                    <Input config={addClientFormFields.websiteClient.config} />
                    <Input config={addClientFormFields.contactClient.config} />
                    <Input
                      config={addClientFormFields.designationClient.config}
                    />
                    
                    {/* <div className="row "> */}
                    {/* <div className="col-md-5"> */}
                  
                    {/* </div> */}
                    {/* </div> */}
                    
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
                    {/* <Input config={addClientFormFields.id.config} />
                    <Select
                      config={addClientFormFields.clientIdSelect.config}
                    /> */}
                    <Select
                      config={addClientFormFields.clientCurrencey.config}
                    />
                    <Select config={addClientFormFields.executive.config} />
                    <Input config={addClientFormFields.instuction.config} />
                    <Select config={addClientFormFields.groupClient.config} />
                    <Select config={addClientFormFields.segmentClient.config} />
                    <Input config={addClientFormFields.remarks.config} />
                    <Radio config={addClientFormFields.monthlyIvoice.config} />
                    <Radio config={addClientFormFields.osemail.config} />
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
