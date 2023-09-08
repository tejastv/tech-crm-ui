import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import { AddUpdateSourceType, addSourceFormFields, useSourceApiCallHook } from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateSource: React.FC = () => {
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

  const methods = useForm<AddUpdateSourceType>();
  const { addSourceMutation, getSourceData, updateSourceMutation } =
    useSourceApiCallHook();
  const { mutateAsync: addSource } = addSourceMutation();
  const { mutateAsync: updateSource } = updateSourceMutation();

  if (params.id) {
    const { data: surceData, isSuccess: surceDataSuccess } =
      getSourceData("" + params.id);
    if (surceDataSuccess) {
      addSourceFormFields.source.config.setData = surceData.source;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  // function fileToBase64(file: any, callback: any) {
  //   if (!file) {
  //     return callback(new Error("No file provided"));
  //   }
  
  //   const reader: any = new FileReader();
  //   reader.onload = function () {
  //     const base64String = reader.result.split(',')[1];
  //     callback(null, base64String);
  //   };
  
  //   reader.onerror = function (error: any) {
  //     callback(error);
  //   };
  
  //   reader.readAsDataURL(file);
  // }
  
  // // Example usage:
  // const fileToBase64 = (selectedFile: any, fileToBase64) => {
  //     if (error) {
  //       console.error(error);
  //     } else {
  //       console.log("Base64:", base64String);
  //       // Do something with the base64String, like sending it to a server or displaying it in an image element.
  //     }
  //   }

  const onSubmit = methods.handleSubmit((surceData): void => {
    let data: any = { ...surceData };
    console.log(data);
    
    // if (params.id && surceData) {
    //   updateSource({ id: +params.id, ...data });
    // } else {
    //   addSource(data);
    // }
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
                  <Input config={addSourceFormFields.source.config} />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addSourceFormFields.letterfile.config} />
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
