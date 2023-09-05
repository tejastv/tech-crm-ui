import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateCallTypeType,
  addCallTypeFormFields,
  useCallTypeApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateCalltype: React.FC = () => {
  const methods = useForm<AddUpdateCallTypeType>();
  const { addCallTypeMutation, getCallTypeData, updateCallTypeMutation } =
    useCallTypeApiCallHook();
  const { mutate: addCallType } = addCallTypeMutation();
  const { mutate: updateCallType } = updateCallTypeMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Call Type" : "Add Call Type",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  if (params.id) {
    const { data: callTypeData, isSuccess: callTypeDataSuccess } =
      getCallTypeData("" + params.id);
    if (callTypeDataSuccess) {
      addCallTypeFormFields.calltype.config.setData = callTypeData.typeName;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((callTypeData) => {
    let data: any = { ...callTypeData };
    if (params.id && callTypeData) {
      updateCallType({ typeID: +params.id, ...data });
    } else {
      addCallType(data);
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
                  <Input config={addCallTypeFormFields.calltype.config} />
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
