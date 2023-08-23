import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import { addSupplierFormFields } from "@master/index";

export const AddSupplier: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Supplier Master",
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
                  <Input config={addSupplierFormFields.nameSupplier.config} />
                  <Input config={addSupplierFormFields.nickname.config} />
                  <Input
                    config={addSupplierFormFields.addressSupplier.config}
                  />
                  <Input config={addSupplierFormFields.telnoSupplier.config} />
                  <Input config={addSupplierFormFields.faxnoSupplier.config} />
                  <Input config={addSupplierFormFields.emailSupplier.config} />
                  <Input
                    config={addSupplierFormFields.websiteSupplier.config}
                  />
                  <Input
                    config={addSupplierFormFields.contactSupplier.config}
                  />
                  <Input
                    config={addSupplierFormFields.designationSupplier.config}
                  />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addSupplierFormFields.citySupplier.config} />
                  <Input config={addSupplierFormFields.zipSupplier.config} />
                  <Input config={addSupplierFormFields.stateSupplier.config} />
                  <Input
                    config={addSupplierFormFields.countrySupplier.config}
                  />
                  <Input
                    config={addSupplierFormFields.CurrenceySupplier.config}
                  />
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
