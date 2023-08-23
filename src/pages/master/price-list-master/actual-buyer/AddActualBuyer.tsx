// AddCompany.tsx
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  DatePicker,
  Input,
  InputWithText,
  Radio,
  Select,
} from "@shared/index";
import * as formField from "@master/index";

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

                  <Select config={formField.clientactualbuyer.config} />
                  <Input config={formField.nameactualbuyer.config} />
                  <Input config={formField.addressactualbuyer.config} />
                  <Input config={formField.telnoactualbuyer.config} />
                  <Input config={formField.emailactualbuyer.config} />
                  <Input config={formField.contactactualbuyer.config} />
                  <Input config={formField.designationactualbuyer.config} />
                  
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <Select config={formField.cityactualbuyer.config} />
                  <Select config={formField.stateactualbuyer.config} />
                  <Input config={formField.PIN.config} />
                  <Select config={formField.faxnoactualbuyer.config} />
                  <Input config={formField.websiteactualbuyer.config} />
                  <Input config={formField.contactactualbuyer.config} />
                  <Input config={formField.cstactualbuyer.config} />
                  <Input config={formField.gstnactualbuyer.config} />
                  {/* <div className="col-md-12"> */}

                  <p id="name45" className="form-text text-red text-red-custom">
                    
                  <InputWithText config={formField.actualbuyergstnote.config} />
                  </p>
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
