import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  CallTypeFormType,
  CallMasterType,
  callTypeFormFields,
  useCallTypeApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

export const CallTypeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CallTypeFormType>();
  const { state: localCallTypeData } = useLocation();
  const { addCallTypeMutation, getCallTypeData, updateCallTypeMutation } =
    useCallTypeApiCallHook();
  const { mutateAsync: addCallType } = addCallTypeMutation();
  const { mutateAsync: updateCallType } = updateCallTypeMutation();
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

  const { data: callTypeData } = getCallTypeData(
    "" + params.id,
    !localCallTypeData && params.id !== undefined
  );

  const mapCurrencyDataToCurrencyForm = (callTypeData: CallMasterType) => {
    let callTypeFormData: Partial<CallTypeFormType> = {
      typeName: callTypeData.typeName,
    };
    return callTypeFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (callTypeData && Object.values(callTypeData).length > 0) {
        reset(mapCurrencyDataToCurrencyForm(callTypeData));
      }
    }
  }, [params.id, callTypeData]);

  const mapCallTypeRequest = (callTypeFormData: CallTypeFormType) => {
    let supplierData: Partial<CallMasterType> = {
      typeName: callTypeFormData.typeName,
    };
    return cleanupObject(supplierData);
  };

  const onSubmit = handleSubmit((callTypeData: CallTypeFormType): void => {
    let reqObj: Partial<CallMasterType> = mapCallTypeRequest(callTypeData);
    if (params.id && reqObj) {
      updateCallType({ typeId: +params.id, ...reqObj });
    } else {
      addCallType(reqObj);
    }
  });

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={callTypeFormFields.callType}
              />
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
