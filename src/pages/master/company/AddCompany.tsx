// AddCompany.tsx
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  DatePicker,
  Input,
  Radio,
  Select,
} from "@shared/index";

import { addCompanyFormFields } from "@master/index";

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
                  <div className="card-body">
                    <Input config={addCompanyFormFields.nameField.config} />
                    <Input config={addCompanyFormFields.addressField.config} />
                    <Input
                      config={addCompanyFormFields.officeAddressField.config}
                    />
                    <Input config={addCompanyFormFields.telNo.config} />
                    <Input config={addCompanyFormFields.faxNo.config} />
                    <Input config={addCompanyFormFields.emailField.config} />
                    <Input config={addCompanyFormFields.website.config} />
                    <Input config={addCompanyFormFields.contactPerson.config} />
                    <Input config={addCompanyFormFields.designation.config} />
                    <Input config={addCompanyFormFields.zip.config} />
                    <Select config={addCompanyFormFields.city.config} />
                    <Select config={addCompanyFormFields.state.config} />
                    <Select config={addCompanyFormFields.country.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={addCompanyFormFields.hscode.config} />
                    <Input config={addCompanyFormFields.givenName.config} />
                    <Input config={addCompanyFormFields.referenceno.config} />
                    <Input config={addCompanyFormFields.financialyear.config} />
                    <Input config={addCompanyFormFields.regno.config} />
                    <Radio config={addCompanyFormFields.companyType.config} />
                    <DatePicker
                      config={addCompanyFormFields.incorporationDate.config}
                    />
                    <Input config={addCompanyFormFields.bankers.config} />
                    <Input config={addCompanyFormFields.notes.config} />
                    <Input config={addCompanyFormFields.cmie.config} />
                    <Input config={addCompanyFormFields.rocStatus.config} />
                    <Input config={addCompanyFormFields.recodes.config} />
                    <Input config={addCompanyFormFields.recfin.config} />
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
