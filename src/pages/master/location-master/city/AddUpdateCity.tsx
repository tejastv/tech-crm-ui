import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateCityType,
  addCityFormFields,
  useCityApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateCity: React.FC = () => {
  const methods = useForm<AddUpdateCityType>();
  const { addCityMutation, getCityData, updateCityMutation } =
    useCityApiCallHook();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add City",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  if (params.id) {
    const { data: cityData } = getCityData("" + params.id);
    const cityName = addCityFormFields.cityField.config.name;
    const osPrintField = addCityFormFields.osPrintField.config.name;
    if (cityName === "cityName" && cityData?.cityName) {
      methods.setValue(cityName, cityData?.cityName);
    }
    if (osPrintField === "oscopies" && cityData?.oscopies) {
      methods.setValue(osPrintField, cityData?.oscopies);
    }
  }

  const { mutate: addCity } = addCityMutation();
  const { mutate: updateCity } = updateCityMutation();

  const onSubmit = methods.handleSubmit((cityData) => {
    if (params.id && cityData) {
      updateCity({ id: params.id, ...cityData });
    } else {
      addCity(cityData);
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
