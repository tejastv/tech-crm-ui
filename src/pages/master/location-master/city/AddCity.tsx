import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddCityType,
  addCityFormFields,
  useCityApiCallHook,
} from "@master/index";
import { queryKeys } from "@constants/index";
import { useNavigate } from "react-router-dom";

export const AddCity: React.FC = () => {
  const methods = useForm<AddCityType>();
  const { addCity } = useCityApiCallHook();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log(data);
      queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
      navigate(-1);
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
