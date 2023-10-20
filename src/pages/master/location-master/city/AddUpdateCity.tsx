import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input, Select } from "@shared/index";
import {
  AddUpdateCityType,
  addCityFormFields,
  useCityApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { selectOptionsMaker } from "@utils/index";

export const AddUpdateCity: React.FC = () => {
  const methods = useForm<AddUpdateCityType>();
  const { addCityMutation, getCityData, updateCityMutation } =
    useCityApiCallHook();
  const { mutateAsync: addCity } = addCityMutation();
  const { mutateAsync: updateCity } = updateCityMutation();
  const params = useParams();
  const { getState } = useStateApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update City" : "Add City",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    
  };

  const { data: stateData } = getState();
  if (stateData) {
    addCityFormFields.state.config.options = selectOptionsMaker(
      stateData,
      "stateId",
      "stateName"
    );
  }
  // if (stateData) {
  //   let id = EnquiryMasterData?.stateId;
  //   let data: any = returnObjectBasedOnID(
  //     stateData,
  //     "stateId",
  //     id,
  //     "stateId",
  //     "state"
  //   );
  //   addCityFormFields.state.config.setData = data
  //     ? {
  //         label: data.label,
  //         value: data.value,
  //       }
  //     : [];
  // }
  // useEffect(() => {
  //   methods.reset();
  // }, []);
  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      methods.reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  if (params.id) {
    const { data: cityData, isSuccess: cityDataSuccess } = getCityData(
      "" + params.id
    );
    if (cityDataSuccess) {
      addCityFormFields.cityField.config.setData = cityData?.cityName;
      addCityFormFields.osPrintField.config.setData = cityData?.oscopies;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((cityData): void => {
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
                <div className="col-md-6 col-xs-12">
                  <Select config={addCityFormFields.state.config} />
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
