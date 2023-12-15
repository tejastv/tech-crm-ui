import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  IndustryFormType,
  IndustryType,
  industryFormFields,
  useIndustryApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

export const IndustryForm: React.FC = () => {
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Industry" : "Add Industry",
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
  } = useForm<IndustryFormType>();
  const { state: localIndustryData } = useLocation();
  const { addIndustryMutation, getIndustryData, updateIndustryMutation } =
    useIndustryApiCallHook();
  const { mutateAsync: addIndustry } = addIndustryMutation();
  const { mutateAsync: updateIndustry } = updateIndustryMutation();

  const { data: industryData } = getIndustryData(
    "" + params.id,
    !localIndustryData && params.id !== undefined
  );

  const mapIndustryDataToIndustryForm = (industryData: IndustryType) => {
    let industryFormData: Partial<IndustryFormType> = {
      industryName: industryData.industryName,
    };
    return industryFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (industryData && Object.values(industryData).length > 0) {
        reset(mapIndustryDataToIndustryForm(industryData));
      }
    }
  }, [params.id, industryData]);

  const mapIndustryRequest = (industryFormData: IndustryFormType) => {
    let industryData: Partial<IndustryType> = {
      industryName: industryFormData.industryName,
    };
    return cleanupObject(industryData);
  };

  const onSubmit = handleSubmit((industryData: IndustryFormType): void => {
    let reqObj: Partial<IndustryType> = mapIndustryRequest(industryData);
    if (params.id && reqObj) {
      updateIndustry({ industryId: +params.id, ...reqObj });
    } else {
      addIndustry(reqObj);
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
                config={industryFormFields.industry}
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
