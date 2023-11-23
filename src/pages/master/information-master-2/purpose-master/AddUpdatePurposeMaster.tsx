import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdatePurposeMasterType,
  addPurposeFormFields,
  usePurposeMasterApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdatePurposeMaster: React.FC = () => {
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Purpose Master" : "Add Purpose Master",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const methods = useForm<AddUpdatePurposeMasterType>();
  const {
    addPurposeMasterMutation,
    getPurposeMasterData,
    updatePurposeMasterMutation,
  } = usePurposeMasterApiCallHook();
  const { mutateAsync: addPurposeMaster } = addPurposeMasterMutation();
  const { mutateAsync: updatePurposeMaster } = updatePurposeMasterMutation();

  if (params.id) {
    const { data: purposeMasterData, isSuccess: purposeMasterDataSuccess } =
      getPurposeMasterData("" + params.id);
    if (purposeMasterDataSuccess) {
      addPurposeFormFields.purpose.config.setData = purposeMasterData.purpose;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((purposeMasterData): void => {
    let data: any = { ...purposeMasterData };
    if (params.id && purposeMasterData) {
      updatePurposeMaster({ id: +params.id, ...data });
    } else {
      addPurposeMaster(data);
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
                  <Input config={addPurposeFormFields.purpose.config} />
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
