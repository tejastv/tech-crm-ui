import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  ContinentFormType,
  continentFormFields,
  useContinentApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const ContinentForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContinentFormType>();
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

  const { data: continentData } = getContinentData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    reset(continentData);
  }, [continentData]);

  useEffect(() => {
    reset();
  }, [!params.id]);

  const onSubmit = handleSubmit((continentData): void => {
    if (params.id && continentData) {
      updateContinent({ id: params.id, ...continentData });
    } else {
      addContinent(continentData);
    }
  });

  return (
    <>
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
                  config={continentFormFields.continentField}
                />
              </div>
            </div>
          </BorderLayout>
          <BorderLayout heading={cardConfig.formActionsConfig.heading}>
            <ActionButtons />
          </BorderLayout>
        </form>
      </Card>
    </>
  );
};
