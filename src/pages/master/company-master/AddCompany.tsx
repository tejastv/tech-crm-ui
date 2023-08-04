// AddCompany.tsx
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Select,
} from "@shared/index";
import {
  nameField,
  emailField,
  addressField,
  selectField,
  genderField,
  checkBoxField,
  datePickerField,
} from "..";

export const AddCompany: React.FC = () => {
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
                  <Input config={nameField.config} />
                  <Input config={emailField.config} />
                  <Input config={addressField.config} />
                  <Select config={selectField.config} />
                  <Checkbox config={checkBoxField.config} />
                  <Radio config={genderField.config} />
                  <DatePicker config={datePickerField.config} />
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
