import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input, Select } from "@shared/index";
import {
  AddUpdateStateType,
  addStateFormFields,
  useCountryApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID, selectOptionsMaker } from "@utils/index";

export const AddUpdateState: React.FC = () => {
  const methods = useForm<AddUpdateStateType>();
  const { addStateMutation, updateStateMutation, getStateData } =
    useStateApiCallHook();
  const params = useParams();
  const { mutateAsync: addState } = addStateMutation();
  const { mutateAsync: updateState } = updateStateMutation();
  const { getCountry } = useCountryApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update State" : "Add State",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: CountryData } = getCountry();
  if (CountryData) {
    addStateFormFields.country.config.options = selectOptionsMaker(
      CountryData,
      "countryId",
      "countryName"
    );
  }

  if (params.id) {
    const { data: stateData, isSuccess: stateDataSuccess } = getStateData(
      "" + params.id
    );
    if (stateDataSuccess) {
      addStateFormFields.stateField.config.setData = stateData?.state;
      addStateFormFields.numbericCodeField.config.setData =
        stateData?.stateCodeN;
      addStateFormFields.stateCodeField.config.setData = stateData?.stateCodeA;
      if (CountryData) {
        let data: any = returnObjectBasedOnID(
          CountryData,
          "countryId",
          stateData?.countryId,
          "countryId",
          "countryName"
        );
        addStateFormFields.country.config.setData =
          data.length > 0
            ? [
                {
                  label: stateData?.countryName,
                  value: stateData?.countryId,
                },
              ]
            : [];
      }
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((stateData): void => {
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
                  <Select config={addStateFormFields.country.config} />
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
