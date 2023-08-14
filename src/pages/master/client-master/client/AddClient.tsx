import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActionButtons, BorderLayout, Card, Checkbox, Input, InputSmall, Radio, Select , SelectClient,CheckboxClient, DivLayoutClient  } from "@shared/index";
import { clientName,clientGst, gstn, addressClient, cityClient, contactClient, designationClient, emailClient, faxnoClient, stateClient, telnoClient, websiteClient, countryClient, statecodeClient, zipClient, crDay, billonactual, clientCurrencey, executive, instuction, id, clientIdSelect, groupClient, segmentClient, remarks, monthlyIvoice, osemail, toAdjust, baltoAdjust, adjustenquiry, toAdjustproforma, baltoAdjustproformaproforma, adjustenquiryproforma, discount, discountBlank } from "@master/index";
import { CheckboxClientRight } from "./CheckBox-ClientRight";


export const AddClient: React.FC = () => {
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

  const onSubmit = methods.handleSubmit((data) => {
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
                  <Input config={clientName.config} />
                  <Radio config={clientGst.config} />
                  <Input config={gstn.config} />
                  <Input config={addressClient.config} />
                  <Input config={telnoClient.config} />
                  <Input config={faxnoClient.config} />
                  <Input config={emailClient.config} />
                  <Input config={websiteClient.config} />
                  <Input config={contactClient.config} />
                  <Input config={designationClient.config} />
                  <Select config={cityClient.config} />
                  <Input config={zipClient.config} />
                  <SelectClient config={stateClient.config} />
                  <InputSmall config={statecodeClient.config} />
                  <Select config={countryClient.config} />
                  <DivLayoutClient heading={cardConfig.formclieckUpdateConfig.heading}/>
                  <SelectClient config={crDay.config} />
                  <CheckboxClient config={billonactual.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <InputSmall config={id.config} />
                  <SelectClient config={clientIdSelect.config} />
                  <Select config={clientCurrencey.config} />
                  <Select config={executive.config} />
                  <Input config={instuction.config} />
                  <Select config={groupClient.config} />
                  <Select config={segmentClient.config} />
                  <Input config={remarks.config} />
                  <Radio config={monthlyIvoice.config} />
                  <CheckboxClientRight config={osemail.config} />
                  <DivLayoutClient heading={cardConfig.formAdjustConfig.heading}/>
                  <Radio config={discount.config} />
                  <InputSmall config={discountBlank.config} />
                  <Input config={toAdjust.config} />
                  <Input config={baltoAdjust.config} />
                  <Input config={adjustenquiry.config} />
                  <DivLayoutClient heading={cardConfig.formAdjustProformaConfig.heading}/>
                  <Input config={toAdjustproforma.config} />
                  <Input config={baltoAdjustproformaproforma.config} />
                  <Input config={adjustenquiryproforma.config} />
                  </div>
                </div>
                </div>
               
         
            </BorderLayout>
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons/>
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
