import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input, Select } from "@shared/index";
import { localSource, email,emailCC,currencey,sourcecountry} from "@master/index";

export const AddSource: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Local Source",
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
                
                  <Input config={localSource.config} />
                  <Input config={email.config} />
                  <Input config={emailCC.config} />
                
                </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <Select config={currencey.config} />
                  <Select config={sourcecountry.config} />
              </div>
              </div>
              </div>
            </BorderLayout>
            <div className="card-body">
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons/>
            </BorderLayout>
            </div>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
