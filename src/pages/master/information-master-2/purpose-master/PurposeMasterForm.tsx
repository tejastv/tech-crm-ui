import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  PurposeMasterFormType,
  PurposeMasterType,
  purposeFormFields,
  usePurposeMasterApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

export const PurposeMasterForm: React.FC = () => {
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PurposeMasterFormType>();
  const { state: localPurposeMasterData } = useLocation();
  const {
    addPurposeMasterMutation,
    getPurposeMasterData,
    updatePurposeMasterMutation,
  } = usePurposeMasterApiCallHook();
  const { mutateAsync: addPurposeMaster } = addPurposeMasterMutation();
  const { mutateAsync: updatePurposeMaster } = updatePurposeMasterMutation();

  const { data: purposeMasterData } = getPurposeMasterData(
    "" + params.id,
    !localPurposeMasterData && params.id !== undefined
  );

  const mapPurposeMasterDataToPurposeMasterForm = (
    purposeMasterData: PurposeMasterType
  ) => {
    let purposeMasterFormData: Partial<PurposeMasterFormType> = {
      purpose: purposeMasterData.purpose,
    };
    return purposeMasterFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (purposeMasterData && Object.values(purposeMasterData).length > 0) {
        reset(mapPurposeMasterDataToPurposeMasterForm(purposeMasterData));
      }
    }
  }, [params.id, purposeMasterData]);

  const mapPurposeMasterRequest = (
    purposeMasterFormData: PurposeMasterFormType
  ) => {
    let purposeMasterData: Partial<PurposeMasterType> = {
      purpose: purposeMasterFormData.purpose,
    };
    return cleanupObject(purposeMasterData);
  };

  const onSubmit = handleSubmit(
    (purposeMasterData: PurposeMasterFormType): void => {
      let reqObj: Partial<PurposeMasterType> =
        mapPurposeMasterRequest(purposeMasterData);
      if (params.id && purposeMasterData) {
        updatePurposeMaster({ purposeId: +params.id, ...reqObj });
      } else {
        addPurposeMaster(reqObj);
      }
    }
  );

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
                config={purposeFormFields.purpose}
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
