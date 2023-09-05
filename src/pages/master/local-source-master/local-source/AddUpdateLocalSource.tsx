import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  Select,
} from "@shared/index";
import { AddUpdateLocalSourceType, addLocalSrouceFormFields,useLocalSourceApiCallHook, useCountryApiCallHook } from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID } from "@utils/returnObjectBasedOnID";

export const AddUpdateSource: React.FC = () => {
  

  const methods = useForm<AddUpdateLocalSourceType>();
  const params = useParams();
  const { addLocalSourceMutation,updateLocalSourceMutation, getLocalSourceData } = useLocalSourceApiCallHook();
  const { mutate: addLocalSource } = addLocalSourceMutation();
  const { mutate: updateLocalSource } = updateLocalSourceMutation();
  const { getCountry } = useCountryApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Local Source" : "Add Local Source",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: countryData, isSuccess: getCountrySuccess } =
  getCountry();

  if (countryData) {
    addLocalSrouceFormFields.sourcecountryField.config.options =
      selectOptionsMaker(countryData, "id", "country");
      debugger
  }

  const onSubmit = methods.handleSubmit((localsourceData) => {
    let data: any = { ...localsourceData };
    data.countryId = +data.countryId["value"];
    if (params.id && localsourceData) {
      updateLocalSource({ id: params.id, ...data });
    } else {
      addLocalSource(data);
    }
  });

  if (params.id) {
    const { data: localsourceData, isSuccess: localsourceDataSuccess } = getLocalSourceData(
      "" + params.id
    );
    if (localsourceDataSuccess) {
      if (getCountrySuccess) {
        let id = localsourceData?.countryId;
        let data: any = returnObjectBasedOnID(
          countryData,
          "countryId",
          id,
          "id",
          "country"
        );
        // addCoutryFormFields.continentCountryField.config.setData = data
        addLocalSrouceFormFields.sourcecountryField.config.setData= data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      console.log(countryData)
      debugger
      addLocalSrouceFormFields.localSourceField.config.setData = localsourceData.localSource;
      addLocalSrouceFormFields.emailField.config.setData = localsourceData.email;
      addLocalSrouceFormFields.emailCCField.config.setData = localsourceData.emailCc;
      addLocalSrouceFormFields.currenceyField.config.setData = localsourceData.currency;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }   


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
                  <div className="card-body">
                    <Input
                      config={addLocalSrouceFormFields.localSourceField.config}
                    />
                    <Input config={addLocalSrouceFormFields.emailField.config} />
                    <Input config={addLocalSrouceFormFields.emailCCField.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={addLocalSrouceFormFields.currenceyField.config}
                    />
                    <Select
                      config={addLocalSrouceFormFields.sourcecountryField.config}
                    />
                  </div>
                </div>
              </div>
            </BorderLayout>
            <div className="card-body">
              <BorderLayout heading={cardConfig.formActionsConfig.heading}>
                <ActionButtons />
              </BorderLayout>
            </div>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};

