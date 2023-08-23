import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  Select,
} from "@shared/index";
import { addUserFormFields } from "@master/index";

export const AddUser: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add User",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    formTableConfig: {
      heading: "Set User Rights",
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
                  <Input config={addUserFormFields.username.config} />
                  <Select config={addUserFormFields.usertype.config} />
                </div>

                <div className="col-md-6 col-xs-12">
                  <Input config={addUserFormFields.username.config} />
                  <Input config={addUserFormFields.usertype.config} />
                </div>
              </div>
              <BorderLayout heading={cardConfig.formTableConfig.heading}>
                {/* <Table/> */}
              </BorderLayout>
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
