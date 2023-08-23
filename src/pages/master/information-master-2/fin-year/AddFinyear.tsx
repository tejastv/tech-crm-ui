import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import { addFinYearFormFields } from "@master/index";

export const AddFinYear: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Industry",
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
                    <Input config={addFinYearFormFields.finyear.config} />
                    <Input config={addFinYearFormFields.totaltax.config} />
                    <Input config={addFinYearFormFields.stax.config} />
                    <Input config={addFinYearFormFields.edcess.config} />
                  </div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={addFinYearFormFields.cgst.config} />
                    <Input config={addFinYearFormFields.sgst.config} />
                    <Input config={addFinYearFormFields.igst.config} />
                    <Input config={addFinYearFormFields.startinvno.config} />
                    <Input config={addFinYearFormFields.startrefno.config} />
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
