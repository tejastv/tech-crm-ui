import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  SourceFormType,
  SourceType,
  sourceFormFields,
  useSourceApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { fileToBase64 } from "@utils/fileToBase64";

export const SourceForm: React.FC = () => {
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Source" : "Add Source",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };
  const { state: localSourceData } = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SourceFormType>();
  const { addSourceMutation, getSourceData, updateSourceMutation } =
    useSourceApiCallHook();
  const { mutateAsync: addSource } = addSourceMutation();
  const { mutateAsync: updateSource } = updateSourceMutation();

  const { data: sourceData } = getSourceData(
    "" + params.id,
    !localSourceData && params.id !== undefined
  );

  const mapSourceDataToSourceForm = (sourceData: SourceType) => {
    let sourceFormData: Partial<SourceFormType> = {
      source: sourceData.source,
      firstLetterFile: sourceData.firstLetterFile,
    };
    return sourceFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (sourceData && Object.values(sourceData).length > 0) {
        reset(mapSourceDataToSourceForm(sourceData));
      }
    }
  }, [params.id, sourceData]);

  const onSubmit = handleSubmit((sourceData): void => {
    let data: any = { ...sourceData };
    fileToBase64(data.firstLetterFile, (base64String) => {
      data.firstLetterFile = base64String;
      if (params.id && sourceData) {
        updateSource({ id: +params.id, ...data });
      } else {
        addSource(data);
      }
    });
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
                config={sourceFormFields.source}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={sourceFormFields.letterFile}
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
