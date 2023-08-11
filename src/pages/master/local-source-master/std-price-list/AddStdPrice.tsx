import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Select } from "@shared/index";
import { stdcurrencey} from "@master/index";

export const AddStdPrice: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Std. Price List (Local Source)",
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
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <div className="row">
                <div className="col-3 pull-right">
                  {/* <div className="card-body"> */}
                  <Select config={stdcurrencey.config} />
              {/* </div> */}
              </div>
              </div>
            </BorderLayout>
            
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
