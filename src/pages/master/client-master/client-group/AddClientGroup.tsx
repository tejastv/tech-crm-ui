import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Checkbox, Input, InputWithText, Select } from "@shared/index";
import { clientGroupName, clientGroupName2, namenote, searchClient } from "@master/index";

export const AddClientGroup: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Group Master",
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
                  <Input config={clientGroupName.config} />
                  <InputWithText config={namenote.config} />

                </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-xs-12">
                  <Checkbox config={clientGroupName2.config} />
                </div>
              </div>
                <div className="row">
                <div className="col-md-6 col-xs-12">
                  <Select config={searchClient.config} />
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
