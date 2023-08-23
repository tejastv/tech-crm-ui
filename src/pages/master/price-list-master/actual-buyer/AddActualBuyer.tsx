// AddCompany.tsx
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  InputWithText,
  Select,
} from "@shared/index";
import { addActualBuyersFormFields } from "@master/index";

export const AddActualBuyer: React.FC = () => {
  const methods = useForm();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Company Master",
      heading: "Company Details",
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
                    <Select
                      config={
                        addActualBuyersFormFields.clientactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.nameactualbuyer.config}
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.addressactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.telnoactualbuyer.config}
                    />
                    <Input
                      config={addActualBuyersFormFields.emailactualbuyer.config}
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.contactactualbuyer.config
                      }
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.designationactualbuyer.config
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={addActualBuyersFormFields.cityactualbuyer.config}
                    />
                    <Select
                      config={addActualBuyersFormFields.stateactualbuyer.config}
                    />
                    <Input config={addActualBuyersFormFields.PIN.config} />
                    <Select
                      config={addActualBuyersFormFields.faxnoactualbuyer.config}
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.websiteactualbuyer.config
                      }
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.contactactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.cstactualbuyer.config}
                    />
                    <Input
                      config={addActualBuyersFormFields.gstnactualbuyer.config}
                    />
                    {/* <div className="col-md-12"> */}

                    {/* <p
                      id="name45"
                      className="form-text text-red text-red-custom"
                    > */}
                    <InputWithText
                      config={
                        addActualBuyersFormFields.actualbuyergstnote.config
                      }
                    />
                    {/* </p> */}
                    {/* </div> */}
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
