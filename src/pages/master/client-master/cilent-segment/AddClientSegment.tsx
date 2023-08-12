import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BorderLayout, Card, Input } from "@shared/index";

import { clientSegment } from "@master/index";

export const AddClientSegment: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Segment",
      heading: "Segment Details",
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
                  <Input config={clientSegment.config} />
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
