import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Checkbox,
  Input,
  InputWithText,
  Select,
} from "@shared/index";
import { addClientGroupFormFields } from "@master/index";

export const AddClientGroup: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Group Master",
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
                  <Input
                    config={addClientGroupFormFields.clientGroupName.config}
                  />
                </div>

                <div className="col-md-8  col-xs-12">
                  <p className="text-center m-b-0 ">
                    <small className="text-center  badge badge-default badge-primary form-text text-white">
                      <InputWithText
                        config={addClientGroupFormFields.namenote.config}
                      />
                    </small>
                  </p>
                </div>
              </div>

              {/* </small>
</p> */}

              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <Checkbox
                    config={addClientGroupFormFields.clientGroupName2.config}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <Select
                    config={addClientGroupFormFields.searchClient.config}
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
