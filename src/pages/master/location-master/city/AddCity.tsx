import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddCityType,
  addCityFormFields,
  queryKeys,
  useLocationMasterApiCall,
} from "@master/index";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const AddCity: React.FC = () => {
  const methods = useForm<AddCityType>();
  const { addCity } = useLocationMasterApiCall();
  const queryClient = useQueryClient();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add City",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const addCityMutation = useMutation({
    mutationFn: addCity,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
    },
    onError: () => {
      console.log("Error");
    },
  });

  const onSubmit = methods.handleSubmit((cityData) => {
    addCityMutation.mutate(cityData);
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
                  <Input config={addCityFormFields.cityField.config} />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addCityFormFields.osPrintField.config} />
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
