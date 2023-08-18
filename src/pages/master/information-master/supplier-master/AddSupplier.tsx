import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import { CurrenceySupplier, addressSupplier, citySupplier, contactSupplier, countrySupplier, designationSupplier, emailSupplier, faxnoSupplier, letterfile, nameSupplier, nickname, stateSupplier, telnoSupplier, websiteSupplier, zipSupplier } from "@master/index";

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
                  <Input config={nameSupplier.config} />
                  <Input config={nickname.config} />
                  <Input config={addressSupplier.config} />
                  <Input config={telnoSupplier.config} />
                  <Input config={faxnoSupplier.config} />
                  <Input config={emailSupplier.config} />
                  <Input config={websiteSupplier.config} />
                  <Input config={contactSupplier.config} />
                  <Input config={designationSupplier.config} />
                  
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={citySupplier.config} />
                  <Input config={zipSupplier.config} />
                  <Input config={stateSupplier.config} />
                  <Input config={countrySupplier.config} />
                  <Input config={CurrenceySupplier.config} />
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
