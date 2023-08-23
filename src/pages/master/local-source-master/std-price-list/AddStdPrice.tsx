import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BorderLayout, Card, Select } from "@shared/index";
import { addStdPriceFormFields } from "@master/index";

export const AddStdPrice: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Std. Price List (Local Source)",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    borderLayoutConfig: {
      heading: "Table",
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
                  <Select config={addStdPriceFormFields.stdcurrencey.config} />
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {/* <Table></Table> */}
        </BorderLayout>
      </Card>
    </>
  );
};
