import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  SourceFormType,
  sourceFormFields,
  useSourceApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
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

  const methods = useForm<SourceFormType>();
  const { addSourceMutation, getSourceData, updateSourceMutation } =
    useSourceApiCallHook();
  const { mutateAsync: addSource } = addSourceMutation();
  const { mutateAsync: updateSource } = updateSourceMutation();

  if (params.id) {
    const { data: sourceData, isSuccess: sourceDataSuccess } = getSourceData(
      "" + params.id
    );
    if (sourceDataSuccess) {
      sourceFormFields.source.config.setData = sourceData.source;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((sourceData): void => {
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
                  <Input config={sourceFormFields.source.config} />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={sourceFormFields.letterfile.config} />
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
