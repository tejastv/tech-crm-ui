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
  officeAddressField,
  telNo,
  faxNo,
  website,
  city,
  country,
  state,
  contactPerson,
  designation,
  zip,
  companyType,
  incorporationDate,
  hscode,
  givenName,
  referenceno,
  financialyear,
  regno,
  bankers,
  notes,
  cmie,
  rocStatus,
  recodes,
  recfin,
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
                  <div className="card-body">

                  <Input config={nameField.config} />
                  <Input config={addressField.config} />
                  <Input config={officeAddressField.config} />
                  <Input config={telNo.config} />
                  <Input config={faxNo.config} />
                  <Input config={emailField.config} />
                  <Input config={website.config} />
                  <Input config={contactPerson.config} />
                  <Input config={designation.config} />
                  <Input config={zip.config} />
                  <Select config={city.config} />
                  <Select config={state.config} />
                  <Select config={country.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <Input config={hscode.config} />
                  <Input config={givenName.config} />
                  <Input config={referenceno.config} />
                  <Input config={financialyear.config} />
                  <Input config={regno.config} />
                  <Radio config={companyType.config} />
                  <DatePicker config={incorporationDate.config} />
                  <Input config={bankers.config} />
                  <Input config={notes.config} />
                  <Input config={cmie.config} />
                  <Input config={rocStatus.config} />
                  <Input config={recodes.config} />
                  <Input config={recfin.config} />
                  {/* <Checkbox config={checkBoxField.config} /> */}
                  
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
