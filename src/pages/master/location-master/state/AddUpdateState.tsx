import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateStateType,
  addStateFormFields,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateState: React.FC = () => {
  const methods = useForm<AddUpdateStateType>();
  const { addStateMutation, updateStateMutation, getStateData } =
    useStateApiCallHook();
  const params = useParams();
  const { mutate: addState } = addStateMutation();
  const { mutate: updateState } = updateStateMutation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update State" : "Add State",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  if (params.id) {
    const { data: stateData, isSuccess: stateDataSuccess } = getStateData(
      "" + params.id
    );
    if (stateDataSuccess) {
      addStateFormFields.stateField.config.setData = stateData?.state;
      addStateFormFields.numbericCodeField.config.setData =
        stateData?.stateCodeN;
      addStateFormFields.stateCodeField.config.setData = stateData?.stateCodeA;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((stateData) => {
    if (params.id && stateData) {
      updateState({ id: params.id, ...stateData });
    } else {
      addState(stateData);
    }
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
                  <Input config={addStateFormFields.stateField.config} />
                  <Input config={addStateFormFields.numbericCodeField.config} />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addStateFormFields.stateCodeField.config} />
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
