import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Checkbox, Input, Select } from "@shared/index";
import * as formField from "@master/index";

export const AddExecutive: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Sales Executive",
      heading: "Entry",
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
                  <Input config={formField.executiveInfomation2.config} />
                  <Input config={formField.emailInformation2.config} />
                  <Input config={formField.cityInformation2.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                   <Checkbox config={formField.checkboxInformation2.config} />
                  <Select config={formField.stateInformation2.config} />
                  {/*<Input config={stateSupplier.config} />
                  <Input config={countrySupplier.config} />
                  <Input config={CurrenceySupplier.config} /> */}
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
