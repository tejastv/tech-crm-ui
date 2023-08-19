import React from "react";
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
} from "@shared/index";
import { addClientFormFields } from "@master/index";

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
                    <div className="row ">
                      <div className="col-md-5">
                        <Select
                          config={addClientFormFields.stateClient.config}
                        />
                      </div>
                    </div>
                    <Input
                      config={addClientFormFields.statecodeClient.config}
                    />
                    <Select config={addClientFormFields.countryClient.config} />
                    <h6 className="card-title m-t-20 md-2">
                      <DivLayout
                        heading={cardConfig.formclieckUpdateConfig.heading}
                      />
                    </h6>
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
                    <h6 className="card-title m-t-20">
                      <DivLayout
                        heading={cardConfig.formAdjustConfig.heading}
                      />
                    </h6>
                    <Radio config={addClientFormFields.discount.config} />
                    <Input config={addClientFormFields.discountBlank.config} />
                    <Input config={addClientFormFields.toAdjust.config} />
                    <Input config={addClientFormFields.baltoAdjust.config} />
                    <Input config={addClientFormFields.adjustenquiry.config} />
                    <h6 className="card-title m-t-20">
                      <DivLayout
                        heading={cardConfig.formAdjustProformaConfig.heading}
                      />
                    </h6>
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
