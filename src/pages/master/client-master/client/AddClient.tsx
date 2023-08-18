import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActionButtons, BorderLayout, Card, Checkbox, Input, Radio, Select ,  DivLayout  } from "@shared/index";
import * as formField from "@master/index";

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
                  <Input config={formField.clientName.config} />
                  <Radio config={formField.clientGst.config} />
                  <Input config={formField.gstn.config} />
                  <Input config={formField.addressClient.config} />
                  <Input config={formField.telnoClient.config} />
                  <Input config={formField.faxnoClient.config} />
                  <Input config={formField.emailClient.config} />
                  <Input config={formField.websiteClient.config} />
                  <Input config={formField.contactClient.config} />
                  <Input config={formField.designationClient.config} />
                  <Select config={formField.cityClient.config} />
                  <Input config={formField.zipClient.config} />
                  <div className="row ">
                <div className="col-md-5">

                  <Select config={formField.stateClient.config} />
                </div>
                </div>
                  <Input config={formField.statecodeClient.config} />
                  <Select config={formField.countryClient.config} />
                  <h6 className="card-title m-t-20 md-2">
                  <DivLayout heading={cardConfig.formclieckUpdateConfig.heading}/>
                  </h6>
                  <Select config={formField.crDay.config} />
                  <Checkbox config={formField.billonactual.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <Input config={formField.id.config} />
                  <Select config={formField.clientIdSelect.config} />
                  <Select config={formField.clientCurrencey.config} />
                  <Select config={formField.executive.config} />
                  <Input config={formField.instuction.config} />
                  <Select config={formField.groupClient.config} />
                  <Select config={formField.segmentClient.config} />
                  <Input config={formField.remarks.config} />
                  <Radio config={formField.monthlyIvoice.config} />
                  <Checkbox  config={formField.osemail.config} />
                  <h6 className="card-title m-t-20">
                  <DivLayout heading={cardConfig.formAdjustConfig.heading}/>
                  </h6>
                  <Radio config={formField.discount.config} />
                  <Input config={formField.discountBlank.config} />
                  <Input config={formField.toAdjust.config} />
                  <Input config={formField.baltoAdjust.config} />
                  <Input config={formField.adjustenquiry.config} />
                  <h6 className="card-title m-t-20">
                  <DivLayout heading={cardConfig.formAdjustProformaConfig.heading}/>
                  </h6>
                  <Input config={formField.toAdjustproforma.config} />
                  <Input config={formField.baltoAdjustproformaproforma.config} />
                  <Input config={formField.adjustenquiryproforma.config} />
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
