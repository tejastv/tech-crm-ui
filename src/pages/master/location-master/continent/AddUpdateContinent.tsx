import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateContinentType,
  addContinentFormFields,
  useContinentApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateContinent: React.FC = () => {
  const methods = useForm<AddUpdateContinentType>();
  const { addContinentMutation, getContinentData, updateContinentMutation } =
    useContinentApiCallHook();
  const { mutateAsync: addContinent } = addContinentMutation();
  const { mutateAsync: updateContinent } = updateContinentMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Continent" : "Add Continent",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  if (params.id) {
    const { data: continentData, isSuccess: continentDataSuccess } =
      getContinentData("" + params.id);
    if (continentDataSuccess) {
      addContinentFormFields.continentField.config.setData =
        continentData?.continent;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((continentData): void => {
    if (params.id && continentData) {
      updateContinent({ id: params.id, ...continentData });
    } else {
      addContinent(continentData);
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
                  <Input
                    config={addContinentFormFields.continentField.config}
                  />
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
