import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddContinentType,
  addContinentFormFields,
  useContinentApiCallHook,
} from "@master/index";
import { queryKeys } from "@constants/index";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const AddContinent: React.FC = () => {
  const methods = useForm<AddContinentType>();
  const { addContinent } = useContinentApiCallHook();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Continent",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const addContinentMutation = useMutation({
    mutationFn: addContinent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.CONTINENT_DATA] });
      navigate(-1);
    },
    onError: () => {
      console.log("Error");
    },
  });

  const onSubmit = methods.handleSubmit((continentData) => {
    addContinentMutation.mutate(continentData);
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
