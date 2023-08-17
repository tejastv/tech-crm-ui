import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActionButtons, BorderLayout, Card, Checkbox, Input, Radio, Select ,  DivLayout  } from "@shared/index";
import { clientName,clientGst, gstn, addressClient, cityClient, contactClient, designationClient, emailClient, faxnoClient, stateClient, telnoClient, websiteClient, countryClient, statecodeClient, zipClient, crDay, billonactual, clientCurrencey, executive, instuction, id, clientIdSelect, groupClient, segmentClient, remarks, monthlyIvoice, osemail, toAdjust, baltoAdjust, adjustenquiry, toAdjustproforma, baltoAdjustproformaproforma, adjustenquiryproforma, discount, discountBlank } from "@master/index";



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
                  <div className="row ">
                <div className="col-md-5">

                  <Select config={stateClient.config} />
                </div>
                </div>
                  <Input config={statecodeClient.config} />
                  <Select config={countryClient.config} />
                  <h6 className="card-title m-t-20 md-2">
                  <DivLayout heading={cardConfig.formclieckUpdateConfig.heading}/>
                  </h6>
                  <Select config={crDay.config} />
                  <Checkbox config={billonactual.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <Input config={id.config} />
                  <Select config={clientIdSelect.config} />
                  <Select config={clientCurrencey.config} />
                  <Select config={executive.config} />
                  <Input config={instuction.config} />
                  <Select config={groupClient.config} />
                  <Select config={segmentClient.config} />
                  <Input config={remarks.config} />
                  <Radio config={monthlyIvoice.config} />
                  <Checkbox config={osemail.config} />
                  <h6 className="card-title m-t-20">
                  <DivLayout heading={cardConfig.formAdjustConfig.heading}/>
                  </h6>
                  <Radio config={discount.config} />
                  <Input config={discountBlank.config} />
                  <Input config={toAdjust.config} />
                  <Input config={baltoAdjust.config} />
                  <Input config={adjustenquiry.config} />
                  <h6 className="card-title m-t-20">
                  <DivLayout heading={cardConfig.formAdjustProformaConfig.heading}/>
                  </h6>
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
